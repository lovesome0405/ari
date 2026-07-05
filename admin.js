'use strict';

const ADMIN_STORAGE_KEYS = {
  githubConfig: 'maru.admin.github.config',
  dataOverrides: 'hanroute.mobile.dataOverrides'
};

const DEFAULT_GITHUB_CONFIG = {
  owner: 'lovesome0405',
  repo: 'ari',
  branch: 'main',
  token: ''
};

const SITE_PUBLISH_PATHS = [
  'about.html',
  'admin.html',
  'admin.js',
  'ai-photo.html',
  'account.html',
  'app.js',
  'culture-data.html',
  'index.html',
  'manifest.json',
  'map.html',
  'passport.html',
  'planner.html',
  'route-detail.html',
  'routes.html',
  'service-worker.js',
  'style.css',
  'support.html',
  'weather.html',
  'ari_culture_resources_appjs.json',
  'image-prompts.md',
  'assets/favicon.svg',
  'assets/images/routes/course-palace.webp',
  'assets/images/routes/course-hanok.webp',
  'assets/images/routes/course-craft.webp',
  'assets/images/routes/course-market.webp',
  'assets/images/routes/course-night.webp',
  'assets/images/routes/course-rainy.webp',
  'data/courses.json',
  'data/public-data-sources.json',
  'data/festivals.json',
  'data/heritage.json',
  'data/passport.json',
  'data/route_blueprints.json',
  'data/support.json',
  'data/weather.json'
];

const ADMIN_DATASETS = {
  cultureResources: {
    path: 'ari_culture_resources_appjs.json',
    label: '문화 자원',
    description: '추천 장소 원본 데이터와 설명 문구'
  },
  routeBlueprints: {
    path: 'data/route_blueprints.json',
    label: '추천 코스 블루프린트',
    description: '경로 조합과 코스 블루프린트'
  },
  courses: {
    path: 'data/courses.json',
    label: '공모전 추천코스',
    description: '공공데이터 기반 최종 추천 코스와 장소 데이터'
  },
  publicDataSources: {
    path: 'data/public-data-sources.json',
    label: '공공데이터 출처',
    description: 'TourAPI, 서울시, 국가유산 등 핵심 데이터 출처'
  },
  festivals: {
    path: 'data/festivals.json',
    label: '문화행사',
    description: '추천 코스와 연결되는 문화행사 seed 데이터'
  },
  heritage: {
    path: 'data/heritage.json',
    label: '국가유산',
    description: '국가유산 공간정보 기반 해설 seed 데이터'
  },
  weather: {
    path: 'data/weather.json',
    label: '날씨 정보',
    description: '날씨 카드와 우천 대응 데이터'
  },
  support: {
    path: 'data/support.json',
    label: '지원 정보',
    description: '관광 지원, 긴급 연락, 안내 링크'
  },
  passport: {
    path: 'data/passport.json',
    label: '패스포트',
    description: '저장 도장과 방문 상태'
  }
};

const adminState = {
  selectedKey: 'cultureResources',
  payloadCache: {}
};

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
}

function readJsonStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJsonStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    setStatus('브라우저 저장소에 기록하지 못했습니다.', 'error');
  }
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function getGithubConfig() {
  return { ...DEFAULT_GITHUB_CONFIG, ...readJsonStorage(ADMIN_STORAGE_KEYS.githubConfig, {}) };
}

function saveGithubConfig() {
  const config = {
    owner: qs('[data-admin-owner]')?.value.trim() || DEFAULT_GITHUB_CONFIG.owner,
    repo: qs('[data-admin-repo]')?.value.trim() || DEFAULT_GITHUB_CONFIG.repo,
    branch: qs('[data-admin-branch]')?.value.trim() || DEFAULT_GITHUB_CONFIG.branch,
    token: qs('[data-admin-token]')?.value.trim() || ''
  };
  writeJsonStorage(ADMIN_STORAGE_KEYS.githubConfig, config);
  return config;
}

function fillGithubConfig() {
  const config = getGithubConfig();
  qs('[data-admin-owner]').value = config.owner;
  qs('[data-admin-repo]').value = config.repo;
  qs('[data-admin-branch]').value = config.branch;
  qs('[data-admin-token]').value = config.token;
}

function getOverrides() {
  return readJsonStorage(ADMIN_STORAGE_KEYS.dataOverrides, {});
}

function setOverrides(nextOverrides) {
  writeJsonStorage(ADMIN_STORAGE_KEYS.dataOverrides, nextOverrides);
}

function getSelectedMeta() {
  return ADMIN_DATASETS[adminState.selectedKey];
}

function serializeJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function parseEditorJson() {
  const text = qs('[data-admin-json]').value;
  return JSON.parse(text);
}

function setStatus(message, tone = 'info') {
  const status = qs('[data-admin-status]');
  if (!status) return;
  status.textContent = message;
  status.className = `admin-status is-${tone}`;
}

function updateMetaChips(payload) {
  const meta = getSelectedMeta();
  const sizeText = `${new Blob([serializeJson(payload)]).size.toLocaleString()} bytes`;
  const count = Array.isArray(payload) ? payload.length : Object.keys(payload || {}).length;
  qs('[data-admin-path]').textContent = meta.path;
  qs('[data-admin-size]').textContent = `${count.toLocaleString()} items · ${sizeText}`;
}

function updateEditorCopy() {
  const meta = getSelectedMeta();
  qs('[data-admin-title]').textContent = `${meta.label} 편집기`;
  qs('[data-admin-description]').textContent = meta.description;
}

function renderDatasetButtons() {
  const container = qs('[data-admin-datasets]');
  if (!container) return;
  container.innerHTML = '';

  Object.entries(ADMIN_DATASETS).forEach(([key, meta]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `admin-dataset-button${key === adminState.selectedKey ? ' is-active' : ''}`;
    button.dataset.adminDataset = key;
    button.innerHTML = `<strong>${meta.label}</strong><small>${meta.description}</small>`;
    container.appendChild(button);
  });
}

async function fetchDatasetFromSite(meta) {
  const response = await fetch(meta.path, { cache: 'no-store' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function fetchDatasetFromGitHub(meta, config) {
  const url = `https://raw.githubusercontent.com/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/${encodeURIComponent(config.branch)}/${meta.path}`;
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

async function loadDataset(key, options = {}) {
  adminState.selectedKey = key;
  renderDatasetButtons();
  updateEditorCopy();

  const meta = getSelectedMeta();
  const overrides = getOverrides();
  let payload = null;

  if (options.payload) {
    payload = cloneJson(options.payload);
  } else if (Object.prototype.hasOwnProperty.call(overrides, meta.path)) {
    payload = cloneJson(overrides[meta.path]);
    setStatus('이 브라우저에 저장된 로컬 미리보기 데이터를 불러왔습니다.', 'info');
  } else if (adminState.payloadCache[key]) {
    payload = cloneJson(adminState.payloadCache[key]);
  } else {
    payload = await fetchDatasetFromSite(meta);
    setStatus('현재 사이트 데이터를 불러왔습니다.', 'info');
  }

  adminState.payloadCache[key] = cloneJson(payload);
  qs('[data-admin-json]').value = serializeJson(payload);
  updateMetaChips(payload);
}

function saveLocalPreview() {
  const payload = parseEditorJson();
  const overrides = getOverrides();
  overrides[getSelectedMeta().path] = payload;
  setOverrides(overrides);
  adminState.payloadCache[adminState.selectedKey] = cloneJson(payload);
  updateMetaChips(payload);
  setStatus('로컬 미리보기 저장이 완료되었습니다. 다른 페이지를 새로고침하면 이 브라우저에서 바로 반영됩니다.', 'success');
}

async function clearLocalPreview() {
  const meta = getSelectedMeta();
  const overrides = getOverrides();
  delete overrides[meta.path];
  setOverrides(overrides);
  delete adminState.payloadCache[adminState.selectedKey];
  await loadDataset(adminState.selectedKey);
  setStatus('로컬 미리보기를 해제하고 기본 파일 기준으로 다시 불러왔습니다.', 'success');
}

function formatJsonEditor() {
  const payload = parseEditorJson();
  qs('[data-admin-json]').value = serializeJson(payload);
  updateMetaChips(payload);
  setStatus('JSON 형식을 정리했습니다.', 'success');
}

function validateJsonEditor() {
  const payload = parseEditorJson();
  updateMetaChips(payload);
  setStatus('JSON 문법이 정상입니다.', 'success');
}

function downloadJsonFile() {
  const payload = parseEditorJson();
  const meta = getSelectedMeta();
  const blob = new Blob([serializeJson(payload)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = meta.path.split('/').pop();
  link.click();
  URL.revokeObjectURL(url);
  setStatus('JSON 파일을 다운로드했습니다.', 'success');
}

async function importJsonFile(file) {
  const text = await file.text();
  const payload = JSON.parse(text);
  adminState.payloadCache[adminState.selectedKey] = cloneJson(payload);
  qs('[data-admin-json]').value = serializeJson(payload);
  updateMetaChips(payload);
  setStatus(`${file.name} 파일을 불러왔습니다.`, 'success');
}

function encodeBase64Utf8(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function encodeGithubPath(path) {
  return path.split('/').map((part) => encodeURIComponent(part)).join('/');
}

function bytesToBase64(bytes) {
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function githubHeaders(token) {
  const headers = {
    Accept: 'application/vnd.github+json'
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function fetchLocalFileBytes(path) {
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) throw new Error(`로컬 파일 로드 실패: ${path} (HTTP ${response.status})`);
  return new Uint8Array(await response.arrayBuffer());
}

async function loadFromGitHub() {
  const config = saveGithubConfig();
  const meta = getSelectedMeta();
  let payload;

  try {
    payload = await fetchDatasetFromGitHub(meta, config);
    setStatus('GitHub 저장소의 최신 파일을 불러왔습니다.', 'success');
  } catch (error) {
    if (error.message === 'HTTP 404') {
      payload = await fetchDatasetFromSite(meta);
      setStatus('GitHub 저장소에는 아직 이 파일이 없습니다. 현재 사이트 버전으로 편집을 이어갑니다.', 'info');
    } else {
      throw error;
    }
  }

  adminState.payloadCache[adminState.selectedKey] = cloneJson(payload);
  qs('[data-admin-json]').value = serializeJson(payload);
  updateMetaChips(payload);
}

async function pushToGitHub() {
  const config = saveGithubConfig();
  if (!config.token) {
    throw new Error('GitHub Token이 비어 있습니다.');
  }

  const meta = getSelectedMeta();
  const payload = parseEditorJson();
  await uploadRepositoryFile(meta.path, bytesToBase64(new TextEncoder().encode(serializeJson(payload))), config, `Update ${meta.path} via MARU admin console`);

  const overrides = getOverrides();
  delete overrides[meta.path];
  setOverrides(overrides);
  adminState.payloadCache[adminState.selectedKey] = cloneJson(payload);
  updateMetaChips(payload);
  setStatus('GitHub 저장소에 반영했습니다. GitHub Pages 배포가 끝나면 실제 사이트에도 적용됩니다.', 'success');
}

async function uploadRepositoryFile(path, base64Content, config, commitMessage) {
  const encodedPath = encodeGithubPath(path);
  const apiUrl = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}/contents/${encodedPath}`;
  const refUrl = `${apiUrl}?ref=${encodeURIComponent(config.branch)}`;
  const headers = githubHeaders(config.token);

  let sha = null;
  const currentResponse = await fetch(refUrl, { headers });
  if (currentResponse.ok) {
    const currentData = await currentResponse.json();
    sha = currentData.sha;
  } else if (currentResponse.status !== 404) {
    throw new Error(`${path} 조회 실패: HTTP ${currentResponse.status}`);
  }

  const body = {
    message: commitMessage,
    content: base64Content,
    branch: config.branch
  };
  if (sha) body.sha = sha;

  const response = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`${path} 반영 실패: HTTP ${response.status} ${errorText}`);
  }
}

async function publishEntireSite() {
  const config = saveGithubConfig();
  if (!config.token) {
    throw new Error('GitHub Token이 비어 있습니다.');
  }

  for (let index = 0; index < SITE_PUBLISH_PATHS.length; index += 1) {
    const path = SITE_PUBLISH_PATHS[index];
    setStatus(`전체 반영 중 ${index + 1}/${SITE_PUBLISH_PATHS.length}: ${path}`, 'info');
    const fileBytes = await fetchLocalFileBytes(path);
    const commitMessage = `Publish MARU dynamic site (${path})`;
    await uploadRepositoryFile(path, bytesToBase64(fileBytes), config, commitMessage);
  }

  setStatus('현재 로컬 사이트 전체를 GitHub 저장소에 반영했습니다. GitHub Pages 배포가 끝나면 링크에도 적용됩니다.', 'success');
}

function bindEvents() {
  document.addEventListener('click', async (event) => {
    const datasetButton = event.target.closest('[data-admin-dataset]');
    if (datasetButton) {
      try {
        await loadDataset(datasetButton.dataset.adminDataset);
      } catch (error) {
        setStatus(error.message, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-save-config]')) {
      saveGithubConfig();
      setStatus('GitHub 설정을 저장했습니다.', 'success');
      return;
    }

    if (event.target.closest('[data-admin-validate]')) {
      try {
        validateJsonEditor();
      } catch (error) {
        setStatus(`JSON 검사 실패: ${error.message}`, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-format]')) {
      try {
        formatJsonEditor();
      } catch (error) {
        setStatus(`JSON 정렬 실패: ${error.message}`, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-save-local]')) {
      try {
        saveLocalPreview();
      } catch (error) {
        setStatus(`로컬 저장 실패: ${error.message}`, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-clear-local]')) {
      try {
        await clearLocalPreview();
      } catch (error) {
        setStatus(`로컬 해제 실패: ${error.message}`, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-download]')) {
      try {
        downloadJsonFile();
      } catch (error) {
        setStatus(`다운로드 실패: ${error.message}`, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-import-trigger]')) {
      qs('[data-admin-import]')?.click();
      return;
    }

    if (event.target.closest('[data-admin-load-github]')) {
      try {
        await loadFromGitHub();
      } catch (error) {
        setStatus(error.message, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-push-github]')) {
      try {
        await pushToGitHub();
      } catch (error) {
        setStatus(error.message, 'error');
      }
      return;
    }

    if (event.target.closest('[data-admin-push-site]')) {
      try {
        await publishEntireSite();
      } catch (error) {
        setStatus(error.message, 'error');
      }
    }
  });

  qs('[data-admin-import]')?.addEventListener('change', async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      await importJsonFile(file);
    } catch (error) {
      setStatus(`파일 불러오기 실패: ${error.message}`, 'error');
    } finally {
      event.target.value = '';
    }
  });
}

async function initializeAdmin() {
  fillGithubConfig();
  renderDatasetButtons();
  bindEvents();
  try {
    await loadDataset(adminState.selectedKey);
  } catch (error) {
    setStatus(`초기 데이터 로드 실패: ${error.message}`, 'error');
  }
}

initializeAdmin();
