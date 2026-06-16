# MARU 프로젝트 진행 현황

## 1. 프로젝트 개요
- 서비스명: MARU
- 챗봇명: Ari
- 대상: 외국인 관광객
- 핵심 주제: 공공문화데이터와 생성형 AI를 활용한 한국 전통문화 코스 추천
- 현재 배포: GitHub Pages

## 2. 현재 구현된 기능
현재 코드 기준으로 실제 구현된 기능은 다음과 같다.

- 메인 페이지: `index.html`에서 서비스 소개, 언어 선택, 빠른 시작, 시간대별 이미지 히어로를 제공한다.
- 조건 선택 플래너: `planner.html`에서 지역, 시간, 관심사, 동행 정보, 예산, 도보 부담, 실내/실외, 자연어 요청을 단계별로 선택하고 `localStorage`에 저장한다.
- 추천코스 카드: `routes.html`의 `[data-route-list]` 영역을 `app.js`가 동적으로 렌더링한다.
- 추천코스 데이터: 로컬 개발 환경에서는 서버 API를 우선 시도하고, 실패 시 `ari_culture_resources_appjs.json`, `data/courses.json`, `app.js` 내부 fallback seed data를 사용한다.
- 코스 상세: `route-detail.html`에서 선택한 코스의 추천 이유, 이동 흐름, 장소 카드, AI식 문화 해설, 키워드, 방문 팁, 출처 안내를 렌더링한다.
- 지도 연결: `map.html`과 상세 페이지에서 Google Maps, Naver Map, Kakao Map 중 선택한 지도 서비스로 코스 또는 개별 장소를 열 수 있다.
- 위치 기반 추천: `map.html`에서 브라우저 위치 권한을 허용하면 현재 위치와 장소 좌표를 비교해 가까운 서울 전통문화 장소를 거리순으로 표시한다. 위치 정보는 저장하지 않는다.
- 다국어 버튼: 한국어, 영어, 일본어, 중국어 선택 버튼과 헤더 언어 전환 버튼이 있으며, 선택 언어를 `localStorage`에 저장하고 주요 UI 문구를 다시 렌더링한다.
- 여행자 지원: `support.html`에서 긴급 연락처, 교통카드, 번역/통역, 관광 안내, 안전, 분실물, 우천 대체 코스 등의 지원 카드가 렌더링된다.
- 날씨 화면: `weather.html`에서 샘플 날씨 데이터와 날씨별 대체 코스 토스트 흐름을 보여준다.
- 문화여행 기록: `passport.html`에서 저장한 코스와 문화 스탬프를 보여준다.
- 문화데이터 화면: `culture-data.html`에서 장소 데이터 수, 추천 코스 수, 영어 안내 가능 수, 외국인 인기 수, 예약 필요 수, 이미지 URL 수, 데이터 상태를 보여준다.
- Ari 챗봇: `app.js`에서 Ari 채팅 UI를 동적으로 삽입하고, 사용자 입력과 빠른 질문을 받아 앱 데이터 기반 fallback 답변을 생성한다. 로컬 Ollama가 사용 가능한 환경에서는 `http://localhost:11434/api/chat` 호출을 시도한다.
- 시간대별 이미지: 서울 시간 기준으로 낮, 저녁, 밤 이미지를 자동 선택하고 5초 단위로 순환한다.
- PWA 준비: `manifest.json`과 `service-worker.js`가 있으며 정적 파일과 JSON seed data를 캐시한다.

## 3. 동적 웹페이지 적용 여부
- 적용 여부: 예
- 근거:
  - `app.js`의 `initialize()`가 페이지 로드 시 `loadCultureResources()`, `loadCourseData()`, `renderLocalizedContent()`, `bindMobileInteractions()`, `mountAriChat()`를 실행한다.
  - `loadCultureResources()`는 `ari_culture_resources_appjs.json`을 fetch하고, `loadCourseData()`는 `data/courses.json`을 fetch해 추천 코스 데이터를 동적으로 구성한다.
  - `renderRouteCards()`는 `ROUTE_DATA`를 기반으로 추천 코스 카드를 DOM에 삽입한다.
  - `renderRouteDetail()`은 URL query 또는 저장된 route id를 기준으로 상세 페이지 내용을 바꾼다.
  - `renderMap()`과 `setMapService()`는 선택된 지도 서비스에 맞춰 지도 링크와 이동 순서를 다시 렌더링한다.
  - `setLanguage()`는 언어 선택을 `localStorage`에 저장하고 정적 문구, 코스 카드, 상세, 지도, 챗봇 메시지를 다시 렌더링한다.
  - `bindMobileInteractions()`는 언어 버튼, 플래너 선택 버튼, 추천코스 선택 버튼, 지도 서비스 버튼, 저장 버튼, 토스트 버튼 클릭 이벤트를 처리한다.
  - `requestNearbyLocation()`은 브라우저 Geolocation API를 사용해 가까운 장소 추천 결과를 DOM에 반영한다.
  - `sendAriMessage()`와 `askAri()`는 사용자 입력을 메시지 배열에 추가하고 Ari 응답을 화면에 렌더링한다.
- 한계:
  - 운영 서버/DB 배포는 아직 없음
  - 공공데이터 API 실시간 호출 없음
  - 운영 데이터 저장 없음
  - GitHub Pages 정적 호스팅 특성상 API 키가 필요한 공공데이터 실시간 호출은 직접 처리하지 않음
  - Ari는 기본적으로 앱 데이터 기반 fallback 답변이며, 실제 생성형 AI API 연동은 아직 운영 구조가 아님
- 결론:
  - 현재는 "GitHub Pages 기반 정적 배포 + JavaScript 동적 인터랙션" 구조다.
  - 단순 HTML 여러 페이지 이동만 있는 정적 소개 페이지가 아니라, JSON 데이터, JS 상태값, 이벤트 리스너, localStorage, 동적 렌더링이 적용된 프론트엔드 기반 동적 웹페이지다.
  - 현재 프론트 배포는 여전히 GitHub Pages 기반이지만, 별도 `backend/` Spring Boot/MySQL 서버를 실행하면 DB 조회 API 데이터를 우선 사용할 수 있다.

## 4. 공공데이터 활용 방향
- 한국관광공사 TourAPI 관광정보
  - 관광지명, 주소, 좌표, 개요, 이미지 참조를 추천 장소 후보와 지도 이동 데이터에 연결할 수 있다.
  - 외국인 관광객용 장소 설명과 Ari 답변의 기본 사실 데이터로 사용할 수 있다.
- 서울시 문화행사 정보
  - 공연, 전시, 축제, 궁궐 프로그램 정보를 날짜별 추천과 예약 확인 안내에 연결할 수 있다.
  - `data/festivals.json`처럼 코스와 행사 id를 연결해 "오늘 가능한 전통문화 경험"을 추천할 수 있다.
- 서울 실시간 도시데이터
  - 날씨, 혼잡도, 온도, 지역 상황을 비 오는 날 실내 코스, 더운 날 대체 코스, 혼잡 회피 코스에 연결할 수 있다.
  - 현재 `weather.html`은 샘플 데이터이므로 향후 서버에서 실시간 도시데이터를 받아 추천 조건에 반영하는 방향이 적합하다.
- 국가유산청 문화재 공간정보
  - 궁궐, 왕릉, 사찰, 고분 등 문화유산의 공식 명칭, 분류, 좌표 검증에 사용할 수 있다.
  - `data/heritage.json`처럼 지도 동선과 문화유산 해설의 기준 데이터로 확장할 수 있다.
- 전통문화포털 전통문화 데이터
  - 공예, 의식주, 전통예술, 세시풍속, 상징 키워드를 Ari의 쉬운 문화 해설과 AI 이미지 프롬프트 소재에 연결할 수 있다.
  - 코스별 문화 키워드와 외국인용 설명을 풍부하게 만드는 grounding 데이터로 사용할 수 있다.

## 5. 생성형 AI 활용 방향
- AI 추천 이유 생성
  - 사용자 조건, 코스 장소, 날씨, 도보 부담, 예산 정보를 바탕으로 "왜 이 코스가 맞는지" 설명을 생성한다.
- 외국인용 전통문화 해설
  - 궁궐, 한옥, 민속, 전통시장, 공연을 외국인이 이해하기 쉬운 비유와 짧은 설명으로 바꾼다.
- 다국어 문화 설명
  - 한국어 seed data를 영어, 일본어, 중국어 설명으로 변환하되 공식 사실은 DB 기준으로 제한한다.
- 추천코스 이미지 생성
  - 코스 테마별 이해 보조 이미지를 생성할 수 있다. 현재는 실제 장소 사진이 아닌 보조 이미지라는 정책을 UI에 표시한다.
- AI 조선풍 포토카드 기능
  - 향후 사용자가 방문한 코스 또는 선택한 문화 키워드를 바탕으로 조선풍 포토카드 이미지를 생성하는 체험 기능으로 확장할 수 있다.
- Ari 챗봇 응답
  - 현재 Ari는 앱 내부의 `ROUTE_DATA`, `CULTURE_RESOURCES`, 날씨 샘플, 여행자 지원 데이터를 기반으로 fallback 응답을 제공한다.
  - 향후 서버에서 OpenAI, Gemini, Claude 같은 생성형 AI API를 연결하면 실시간 추천 이유, 문화 해설, 다국어 답변을 안정적으로 제공할 수 있다.

## 6. 앞으로 확장 방향
- 서버/Spring Boot/MySQL 확장
  - 장소, 코스, 문화행사, 사용자 선호, 저장 코스, 이미지 생성 결과를 DB에 저장한다.
  - API 키는 서버 환경변수로 보호하고 프론트엔드는 서버 API만 호출한다.
- 실시간 API 연동
  - TourAPI, 서울시 문화행사, 서울 실시간 도시데이터, 국가유산청 공간정보를 배치 또는 실시간 API로 동기화한다.
- 사용자 저장 기능
  - 현재는 `localStorage` 저장이므로 로그인 기반 저장, 방문 기록, 선호 조건 재사용, 공유 링크 기능으로 확장할 수 있다.
- 실제 이미지 생성 API 연동
  - 코스별 대표 이미지, 조선풍 포토카드, 여행 기록 카드 이미지를 생성형 이미지 API로 만들 수 있다.
  - 실제 장소 사진처럼 오해되지 않도록 생성 이미지 표시와 출처 정책을 유지해야 한다.
- 지도/택시 앱 연동 고도화
  - 현재는 지도 URL과 앱 스킴 중심이다.
  - 향후 사용자 위치, 도보 부담, 대중교통, 택시 호출 딥링크, 혼잡도, 우천 조건을 조합해 이동 옵션을 고도화할 수 있다.

## 7. 2차 작업 반영 현황

### 최종 추천코스 6개
`data/courses.json`을 최종 6개 코스 구조로 정리했다.

- 궁궐 역사 산책 코스
- 북촌 한옥 문화 코스
- 인사동 전통공예 코스
- 전통시장 미식 코스
- 야간 전통문화 코스
- 비 오는 날 실내 전통문화 코스

각 코스는 `id`, `title`, `theme`, `target`, `duration`, `budget`, `indoorOutdoor`, `recommendedTime`, `score`, `walking`, `fee`, `places`, `aiSummary`, `reason`, `tip`, `keywords`, `image`, `imagePrompt`, `publicDataSource`를 포함한다. 각 코스의 장소는 3개 이상이며, 지도 연결용 좌표와 공공데이터 출처를 함께 담았다.

### 코스 이미지 정리
코스 이미지는 `assets/images/routes/` 아래 전용 경로로 정리했다.

- `assets/images/routes/course-palace.webp`
- `assets/images/routes/course-hanok.webp`
- `assets/images/routes/course-craft.webp`
- `assets/images/routes/course-market.webp`
- `assets/images/routes/course-night.webp`
- `assets/images/routes/course-rainy.webp`

현재 이미지는 기존 홈 이미지를 복사해 broken image가 발생하지 않도록 처리한 데모 자산이다. UI 문구는 “AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드”로 표시된다.

### public-data-sources.json 실제 렌더링 여부
적용 완료. `app.js`의 `loadDynamicAppData()`가 `data/public-data-sources.json`을 fetch하고, `culture-data.html`의 `[data-source-list]`에 실제 공공데이터 카드로 렌더링한다.

카드에는 데이터명, 제공/참고 기관, 활용 방식, MARU 적용 방식, 현재 상태, 향후 확장 방식이 표시된다.

### festivals.json / heritage.json 상세 페이지 연결 여부
적용 완료. `route-detail.html`에 “관련 문화행사”와 “관련 국가유산 정보” 섹션을 추가했다.

- 관련 문화행사: 선택된 코스의 `id`, `theme`, `target`, `place id`와 `data/festivals.json`의 `relatedCourseIds`, `recommendedFor`, `relatedPlaceIds`를 비교해 표시한다.
- 관련 국가유산 정보: 선택된 코스의 장소 id와 `data/heritage.json`의 id가 일치하면 문화재명, 유형, 위치, 간단 설명, 활용 데이터 출처를 표시한다.
- 연결 데이터가 없는 경우에도 섹션은 유지되며 향후 API 연동 예정 문구가 표시된다.

### AI 조선풍 포토카드 데모 구현 여부
적용 완료. 새 페이지 `ai-photo.html`을 추가했고, `index.html`, `about.html`, `culture-data.html`에서 접근할 수 있다.

현재 기능:
- 이미지 업로드
- 브라우저 내 미리보기
- “조선풍으로 변환하기” 버튼
- 1.2초 로딩 후 데모 결과 카드 표시
- 전통 문양 프레임, 한지 느낌 배경, “MARU AI Photo Card” 문구 표시
- 생성 프롬프트 예시 표시
- 실제 서비스에서는 서버 기반 이미지 생성 API로 연결한다는 설명
- “현재 데모는 브라우저 미리보기 중심이며 서버로 업로드하지 않는다”는 개인정보 안내

실제 이미지 생성 API 호출과 API 키 삽입은 하지 않았다.

### Ari 챗봇 보강 키워드
`fallbackAriReply()`에 다음 키워드 응답을 추가했다.

- 택시 / taxi
- 생성형 AI / AI / generative
- 공공데이터 / data / public data
- 조선풍 / 포토카드 / photo card
- 축제 / 행사 / festival / event
- 혼잡도 / crowded / congestion

### 현재 한계
- 서버/DB 뼈대는 추가되었지만 운영 배포는 아직 없음
- 실시간 공공데이터 API 미연동
- 실제 이미지 생성 API 미연동
- 사용자 계정 기반 저장 기능 없음
- 현재는 GitHub Pages 정적 배포 환경에서 정적 JSON + JavaScript 기반으로 동작하는 서비스형 데모

### 2차 결론
현재 MARU는 단순 정적 소개 페이지가 아니라, GitHub Pages 기반 정적 배포 위에서 JSON 공공문화데이터 샘플과 JavaScript 동적 렌더링, Ari fallback 챗봇, 지도 이동 링크, 생성형 AI 포토카드 데모 UI를 결합한 “정적 배포 기반 동적 인터랙션 웹서비스 프로토타입” 단계다.

## 8. Spring Boot + MySQL 백엔드 기반 추가

### 추가 목적
기존 GitHub Pages 프론트엔드와 정적 JSON 구조를 유지하면서, 추천코스·장소·문화행사·국가유산·공공데이터 출처를 점진적으로 서버 API와 MySQL DB로 옮길 수 있는 기반을 추가했다.

### 추가된 백엔드 구조
- `backend/pom.xml`: Spring Boot 3.3, Java 21, Spring Web, Spring Data JPA, Flyway, MySQL 드라이버 설정
- `backend/src/main/resources/application.yml`: MySQL 연결, CORS, JPA/Flyway, 향후 외부 API 키 환경변수 설정 예시
- `backend/src/main/resources/db/migration/V1__create_catalog_tables.sql`: MARU 카탈로그용 DB 테이블 생성 스크립트
- `backend/src/main/java/com/lovesome/maru/domain`: `Place`, `Course`, `CoursePlace`, `Festival`, `Heritage`, `PublicDataSource` Entity
- `backend/src/main/java/com/lovesome/maru/dto`: 프론트 JSON 형태와 맞춘 응답 DTO
- `backend/src/main/java/com/lovesome/maru/repository`: JPA Repository
- `backend/src/main/java/com/lovesome/maru/service`: 조회 서비스와 DTO 변환 mapper
- `backend/src/main/java/com/lovesome/maru/web/CatalogController.java`: REST API Controller
- `backend/README.md`: 실행 방법, 환경변수, API 목록, 한계 정리

### 만든 DB 테이블
- `places`: 장소명, 카테고리, 주소, 좌표, 설명, 공공데이터 출처
- `courses`: 추천코스 제목, 테마, 대상, 소요시간, 예산, 실내/실외, 추천 시간대, AI 요약, 이유, 팁, 키워드, 이미지, 지도 링크
- `course_places`: 코스와 장소의 순서형 연결 테이블
- `festivals`: 문화행사, 지역, 장소, 추천 대상, 관련 코스/장소 연결
- `heritage`: 국가유산명, 유형, 지역, 좌표, 해설 키워드, AI 해설 역할
- `public_data_sources`: 공공데이터 출처, 제공기관, 활용 기능, 현재 상태, 향후 연동 방향

### 만든 REST API
- `GET /api/courses`
- `GET /api/courses/{id}`
- `GET /api/places`
- `GET /api/festivals`
- `GET /api/heritage`
- `GET /api/public-data-sources`

### 프론트 fetch 구조 변경
- `app.js`에 `MARU_API_PATHS`, `getMaruApiBaseUrl()`, `fetchDataArrayFromApi()`를 추가했다.
- 로컬 개발 환경에서는 기본적으로 `http://localhost:8080` API를 먼저 시도한다.
- GitHub Pages 배포 환경에서는 기본값으로 API를 호출하지 않고 기존 정적 JSON을 사용한다.
- 배포 후 별도 서버 API를 붙일 때는 브라우저 콘솔에서 `localStorage.setItem('maruApiBaseUrl', 'https://your-api.example.com')`로 API base URL을 지정할 수 있다.
- API 응답이 없거나 비어 있거나 실패하면 기존 `data/*.json`과 앱 내부 fallback 데이터로 내려간다.

### API 키와 외부 연동 준비
- OpenAI API, TourAPI, 서울시 OpenAPI 키는 프론트엔드에 넣지 않는다.
- `application.yml`에는 `OPENAI_API_KEY`, `TOUR_API_SERVICE_KEY`, `SEOUL_OPEN_DATA_API_KEY` 환경변수 연결 위치만 준비했다.
- 이번 단계에서는 OpenAI API나 공공데이터 API 실시간 호출을 구현하지 않았다.

### 현재 한계
- DB 테이블과 조회 API 뼈대는 준비되었고, 다음 단계에서 정적 JSON을 DB로 자동 적재하는 seed/import 기능을 추가한다.
- 로그인, 사용자 저장, 관리자 입력 화면은 아직 없다.
- 운영 서버 배포와 HTTPS API URL 연결은 별도 단계가 필요하다.
- 실제 공공데이터 API 동기화와 생성형 AI 응답 생성은 서버 환경변수 기반 구조만 준비한 상태다.

### 3차 결론
현재 MARU는 “GitHub Pages 프론트엔드 + 정적 JSON fallback”을 유지하면서, Spring Boot/MySQL 기반 서버 조회 API로 확장할 수 있는 하이브리드 구조가 되었다. 서버가 꺼져 있어도 기존 프론트는 깨지지 않고, 서버가 켜져 있으면 같은 화면에서 API 데이터를 우선 사용할 수 있다.

## 9. JSON seed/import 및 API 실데이터 반환 기능 추가

### 추가 목적
정적 JSON으로 관리하던 추천코스, 문화행사, 국가유산, 공공데이터 출처를 MySQL에 자동 적재하고, 백엔드 API가 실제 DB 데이터를 반환하도록 만들었다.

### seed/import 구조
- `backend/src/main/resources/seed/courses.json`
- `backend/src/main/resources/seed/festivals.json`
- `backend/src/main/resources/seed/heritage.json`
- `backend/src/main/resources/seed/public-data-sources.json`

서버 시작 시 `SeedDataLoader`가 위 파일을 읽고 DB에 데이터가 없거나 특정 id가 없으면 자동 저장한다. 이미 같은 id가 있으면 중복 삽입하지 않는다.

### DB 적재 대상
- `courses`: 추천코스 6개
- `places`: `courses.json`의 장소를 id 기준 중복 제거해 저장
- `course_places`: 코스별 장소 순서를 `sort_order` 1부터 저장
- `festivals`: 문화행사 6개
- `heritage`: 국가유산 10개
- `public_data_sources`: 공공데이터 출처 5개

### 백엔드 보강
- Entity에 JPA용 기본 생성자와 저장용 정적 factory 메서드를 추가했다.
- `CoursePlaceRepository`를 추가해 코스-장소 연결 중복을 방지한다.
- 코스 목록 조회는 `distinct` 쿼리로 코스-장소 join 시 중복 코스가 반환되지 않게 보완했다.

### 프론트 fallback 개선
- 기존 API 우선 + 정적 JSON fallback 구조를 유지했다.
- API 실패 상태를 endpoint별로 관리하도록 바꾸었다.
- `/api/courses`가 실패해도 `/api/places`, `/api/festivals`, `/api/heritage`, `/api/public-data-sources`는 별도로 시도할 수 있다.
- 서버가 완전히 꺼져 있거나 네트워크가 끊긴 경우에는 빠르게 정적 JSON fallback으로 내려간다.

### admin.js 보강
관리 콘솔의 편집/전체 반영 목록에 다음 공모전 핵심 파일을 추가했다.

- `ai-photo.html`
- `data/courses.json`
- `data/public-data-sources.json`
- `data/festivals.json`
- `data/heritage.json`
- `assets/images/routes/course-palace.webp`
- `assets/images/routes/course-hanok.webp`
- `assets/images/routes/course-craft.webp`
- `assets/images/routes/course-market.webp`
- `assets/images/routes/course-night.webp`
- `assets/images/routes/course-rainy.webp`

### 실행 및 API 테스트
MySQL DB 생성 후 환경변수를 설정하고 백엔드를 실행한다.

```powershell
cd backend
$env:MARU_DB_URL="jdbc:mysql://localhost:3306/maru?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Seoul&characterEncoding=utf8"
$env:MARU_DB_USERNAME="maru"
$env:MARU_DB_PASSWORD="maru_password"
mvn spring-boot:run
```

API 확인:

```powershell
curl http://localhost:8080/api/courses
curl http://localhost:8080/api/courses/palace-history-course
curl http://localhost:8080/api/places
curl http://localhost:8080/api/festivals
curl http://localhost:8080/api/heritage
curl http://localhost:8080/api/public-data-sources
```

### 현재 한계
- 실제 공공데이터 API 동기화는 아직 없다.
- 실제 생성형 AI API 호출은 아직 없다.
- 로그인/사용자 저장 기능은 아직 없다.
- seed JSON 자동 적재는 구현되었지만, 관리자 CRUD API와 운영 배치 동기화는 아직 없다.
