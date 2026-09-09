const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const source = fs.readFileSync('service-worker.js', 'utf8');
function setup(fetcher = async () => { throw new Error('offline'); }) {
  const handlers = {}, entries = new Map(), deleted = [], written = [];
  const cache = {match: async key => entries.get(String(key)), put: async (key,r) => {written.push(key); entries.set(key,r);}, addAll: async () => {}};
  vm.runInNewContext(source, {
    self: {registration:{scope:'https://example.com/ari/'}, addEventListener:(n,f)=>handlers[n]=f, skipWaiting(){},clients:{claim(){}}},
    caches: {open:async()=>cache,keys:async()=>['other-app','maru-shell-v24','maru-shell-https%3A%2F%2Fexample.com%2Felsewhere%2F-v25'],delete:async k=>deleted.push(k)},
    URL,Response,AbortController,setTimeout,clearTimeout,fetch:fetcher,
  });
  return {handlers,entries,deleted,written,send(path,extra={}) {let result;handlers.fetch({request:{url:'https://example.com'+path,method:'GET',mode:'navigate',headers:new Headers(),...extra},respondWith:p=>result=p});return result;}};
}
test('offline route query uses the correct cached page',async()=>{const s=setup();s.entries.set('https://example.com/ari/route-detail.html',new Response('detail'));assert.equal(await (await s.send('/ari/route-detail.html?id=craft')).text(),'detail');});
test('directory home resolves to index',async()=>{const s=setup();s.entries.set('https://example.com/ari/index.html',new Response('home'));assert.equal(await (await s.send('/ari/')).text(),'home');});
test('API, unknown paths, other scopes and auth requests bypass cache',()=>{const s=setup();for(const p of ['/ari/api/saved-routes','/ari/private.json','/other/index.html']) assert.equal(s.send(p),undefined);assert.equal(s.send('/ari/index.html',{headers:new Headers({Authorization:'Bearer example'})}),undefined);assert.equal(s.send('/ari/index.html',{method:'POST'}),undefined);});
test('activation preserves unrelated app caches',async()=>{const s=setup();let job;s.handlers.activate({waitUntil:p=>job=p});await job;assert.deepEqual(s.deleted,['maru-shell-v24']);});
test('network success refreshes canonical cache',async()=>{const s=setup(async()=>new Response('fresh'));assert.equal(await (await s.send('/ari/index.html?lang=en')).text(),'fresh');assert.deepEqual(s.written,['https://example.com/ari/index.html']);});
test('HTTP 500 falls back to saved shell',async()=>{const s=setup(async()=>new Response('error',{status:500}));s.entries.set('https://example.com/ari/index.html',new Response('saved'));assert.equal(await (await s.send('/ari/index.html')).text(),'saved');});
test('uncached offline asset returns 503, never undefined',async()=>{const s=setup();assert.equal((await s.send('/ari/app.js',{mode:'cors'})).status,503);});
test('navigation without cached page returns offline document',async()=>{const s=setup();s.entries.set('https://example.com/ari/offline.html',new Response('help'));assert.equal(await (await s.send('/ari/index.html')).text(),'help');});
