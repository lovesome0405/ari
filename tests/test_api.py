import importlib.util
import json
from pathlib import Path
import tempfile
import threading
import unittest
from urllib.request import Request, urlopen
from urllib.error import HTTPError
from http.server import ThreadingHTTPServer

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('maru_server', ROOT / 'python-backend/server.py')
api = importlib.util.module_from_spec(spec)
spec.loader.exec_module(api)

class ApiTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory()
        api.RUNTIME_DIR = Path(cls.temp.name)
        api.DB_PATH = api.RUNTIME_DIR / 'test.sqlite3'
        api.init_db()
        api.MaruApiHandler.log_message = lambda *args: None
        cls.server = ThreadingHTTPServer(('127.0.0.1', 0), api.MaruApiHandler)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f'http://127.0.0.1:{cls.server.server_port}'
    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown(); cls.server.server_close(); cls.thread.join(); cls.temp.cleanup()
    def request(self, path, payload=None, method=None):
        req = Request(self.base+path, data=json.dumps(payload).encode() if payload is not None else None, method=method, headers={'Content-Type':'application/json'})
        try:
            response = urlopen(req, timeout=3)
        except HTTPError as error:
            response = error
        with response:
            raw = response.read()
            return response.status, json.loads(raw) if raw else None
    def test_catalog_and_missing_route(self):
        status, courses = self.request('/api/courses')
        self.assertEqual(status,200); self.assertEqual(len(courses),6)
        self.assertEqual(self.request('/api/courses/not-a-route')[0],404)
    def test_save_read_delete(self):
        status, item = self.request('/api/saved-routes', {'routeId':'craft-design-intro-course','routeTitle':'Test route'})
        self.assertEqual(status,201)
        self.assertTrue(any(row['id']==item['id'] for row in self.request('/api/saved-routes')[1]))
        self.assertEqual(self.request(f"/api/saved-routes/{item['id']}",method='DELETE')[0],204)
        self.assertEqual(self.request(f"/api/saved-routes/{item['id']}",method='DELETE')[0],404)
    def test_non_object_json_is_bad_request(self):
        for body in [[], 'text', 42]:
            self.assertEqual(self.request('/api/saved-routes',body)[0],400)
    def test_empty_route_is_bad_request(self):
        self.assertEqual(self.request('/api/saved-routes',{})[0],400)

if __name__ == '__main__': unittest.main()
