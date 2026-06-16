# 마루(MARU)

문화체육관광 공모전 모바일 웹

마루는 외국인 방문객을 위한 모바일 우선 서울 전통문화 AI 가이드입니다. 언어 선택, 여행 조건 선택, 추천 코스, 지도 길찾기, 쉬운 문화 해설, 여행자 지원, 날씨, 문화여행 기록 흐름을 하나의 모바일 여행 동반 앱처럼 제공합니다.

브랜드명은 마루(MARU)입니다. 기존 저장소명과 GitHub Pages 배포 경로는 `ari`를 유지하지만, 사용자에게 노출되는 앱 이름은 `마루` 또는 `MARU`로 표기합니다.

Seoul Heritage Guide for Global Travelers

핵심 원칙:

- DB = 검증된 문화 사실
- Server = 조건 필터링과 추천 점수
- AI = 쉬운 문화 해설

현재 버전은 GitHub Pages에서 동작하는 프론트엔드 시제품과 `backend/`의 Spring Boot + MySQL 조회 API 뼈대를 함께 포함합니다. 프론트는 서버 API를 먼저 시도하고 실패하면 기존 정적 JSON으로 fallback하며, 백엔드는 seed JSON을 MySQL에 자동 적재해 실제 조회 API를 반환할 수 있습니다.

## 실행 방법

`index.html`을 브라우저에서 직접 열면 됩니다.

React, Vue, npm, Bootstrap, Tailwind, CDN, 외부 이미지, 외부 에셋을 사용하지 않습니다.
이미지는 사용자가 직접 넣는 로컬 파일을 우선 사용하며, 파일이 없으면 깨진 이미지 대신 placeholder가 표시됩니다.

## Public Deployment

이 프로젝트는 빌드 과정이 없는 정적 사이트입니다. 폴더 전체를 정적 호스팅에 올리면 누구나 URL로 볼 수 있습니다.

권장 배포 방식:

- GitHub Pages: 저장소에 파일을 올린 뒤 Pages를 `main` branch root로 설정합니다.
- Netlify: 프로젝트 폴더를 배포하거나 Git 저장소를 연결합니다. `netlify.toml`이 root publish 설정을 제공합니다.
- Vercel: 정적 프로젝트로 가져오면 됩니다. `vercel.json`이 기본 헤더 설정을 제공합니다.

배포 전 확인할 것:

- `assets/images/home/`에 낮 `day-1.webp`~`day-4.webp`, 저녁 `evening-1.webp`~`evening-4.webp`, 밤 `night-1.webp`~`night-4.webp` 파일이 있는지 확인
- 장소별 실제 이미지는 향후 공식 이미지 권한 확보 또는 자체 제작 이미지로 보강 예정
- 현재 `robots.txt`와 `sitemap.xml`은 GitHub Pages 배포 주소 `https://lovesome0405.github.io/ari/` 기준으로 정리
- 커스텀 도메인을 쓰게 되면 `robots.txt`와 `sitemap.xml`의 URL을 실제 도메인으로 변경
- GitHub Pages를 쓰는 경우 `.nojekyll` 파일을 유지

현재 배포 기준 URL:

```text
https://lovesome0405.github.io/ari/
```

## 파일 구조

```text
index.html          # 언어 선택, 시간대별 홈 이미지, 앱 시작 화면
planner.html        # 단계형 여행 조건 선택
routes.html         # 추천 코스 카드
route-detail.html   # 코스 상세, 문화 해설, 지도 서비스 길찾기
map.html            # 모바일 지도/내비게이션 보조 화면
weather.html        # 샘플 날씨 조건과 날씨 기반 추천 흐름
support.html        # 여행자 지원
passport.html       # 저장 코스와 문화 스탬프
culture-data.html   # 심사용 문화데이터 대시보드
about.html          # 서비스 설명
style.css           # 모바일 우선 디자인 시스템, 이미지 프레임, 아리 챗봇 UI
app.js              # 데이터, localStorage, 렌더링, 인터랙션, 아리 provider/fallback
ari_culture_resources_appjs.json # 정적 앱에서 fetch하는 서울 전통문화 장소 데이터
data/courses.json   # 공공데이터 기반 추천 코스 seed
data/festivals.json # 문화행사 seed
data/heritage.json  # 국가유산 seed
data/public-data-sources.json # 공공데이터 출처 seed
backend/            # Spring Boot + MySQL API 서버와 seed/import 코드
manifest.json       # PWA 준비 파일, SVG 아이콘 참조
service-worker.js   # 간단한 앱 셸 캐시
image-prompts.md    # AI 이미지 생성 프롬프트
netlify.toml         # Netlify 정적 배포 설정
vercel.json          # Vercel 정적 배포 설정
robots.txt           # 검색 엔진 크롤링 설정
sitemap.xml          # 공개 페이지 목록
404.html             # 정적 호스팅 fallback
```

## 사용자 흐름

1. 언어 선택
2. 시작하기
3. 여행 조건 선택
4. 추천 코스 보기
5. 코스 선택
6. 네이버지도, 카카오맵, Google Maps 길찾기
7. 장소별 전통문화 해설 확인
8. 여행자 지원, 날씨, 문화여행 기록 사용

## Data Expansion Plan

현재 정적 버전은 `ari_culture_resources_appjs.json`을 상대 경로로 fetch해 서울 전통문화 장소 카드와 추천 코스를 구성합니다. fetch가 실패하면 `app.js` 안의 fallback seed data가 사용됩니다.

CSV/SQL 자료는 정적 웹앱에서 직접 DB처럼 사용하지 않고, 향후 데이터 검증과 백엔드 확장 참고 자료로만 관리합니다.

향후 데이터 소스 후보:

- Seoul Open Data Plaza
- Korea Tourism Organization TourAPI
- National Heritage data
- Public Data Portal
- Museum / palace / theater / market official pages

주의사항:

- 현재 데이터는 시제품 구현을 위한 서울 전통문화 seed data이며, 실제 운영 전 운영시간·요금·예약 여부·좌표·영어 안내 가능 여부는 공식 출처 기준으로 재검증이 필요합니다.
- 화면에서는 `프로토타입 데이터`, `공식 정보 확인 필요`, `운영 전 검증 예정` 성격으로 표시합니다.
- 서울 열린데이터광장, 한국관광공사, 국가유산청, Visit Seoul 등은 데이터 소스 참고명이며 공식 제휴를 의미하지 않습니다.

## Culture Resource Model

`app.js`의 `CULTURE_RESOURCES`는 다음 필드를 지원합니다.

- `englishAvailable`
- `foreignerPopular`
- `foreignerPopularityScore`
- `reservationRequired`
- `reservationUrl`
- `bookingNote`
- `languageSupport`
- `lastVerifiedAt`
- `verifiedStatus`
- `sourceName`
- `sourceUrl`
- `traditionScore`
- `foreignerScore`
- `hiddenScore`
- `aiSimpleExplanation`
- `aiWhyItMatters`
- `aiVisitTip`
- `aiCulturalKeywords`
- `imageUrl`
- `imageType`
- `imagePrompt`

## Convenience Data

추천 카드와 장소 카드에는 외국인 방문객에게 중요한 편의 정보를 배지로 표시합니다.

- 영어 안내 가능 여부
- 외국인 인기 여부
- 예약 필요 여부
- 공식 확인 필요 상태

이 정보는 현장 의사결정에 도움을 주기 위한 구조이며, 실제 운영 전 공식 출처 검증이 필요합니다.

## Local Image Assets

이미지는 로컬 파일만 사용합니다. 아래 경로에 파일을 넣으면 정적 프론트엔드에서 바로 렌더링됩니다.

```text
assets/images/home/
assets/images/routes/
assets/images/places/
assets/images/themes/
```

권장 이미지 크기:

- Home hero images: 1600x1000 또는 1600x900
- Route images: 1200x750 또는 1600x1000
- Place images: 1000x750
- Format: webp preferred

홈 화면은 서울 표준시(`Asia/Seoul`)를 기준으로 시간대와 4장 이미지 중 하나를 자동 선택합니다. 아침과 점심은 같은 낮 이미지 세트를 공유합니다.

```text
day-1.webp      # 아침/점심 1번
day-2.webp      # 아침/점심 2번
day-3.webp      # 아침/점심 3번
day-4.webp      # 아침/점심 4번
evening-1.webp  # 저녁 1번
evening-2.webp  # 저녁 2번
evening-3.webp  # 저녁 3번
evening-4.webp  # 저녁 4번
night-1.webp    # 밤 1번
night-2.webp    # 밤 2번
night-3.webp    # 밤 3번
night-4.webp    # 밤 4번
```

추천 코스 이미지를 나중에 추가할 경우 다음 파일명을 권장합니다. 현재 파일이 없어도 카드가 깨지지 않고 `MARU / 이미지 준비 중` placeholder가 표시됩니다.

```text
assets/images/routes/royal-culture.webp
assets/images/routes/hidden-sounds-hanok.webp
assets/images/routes/modern-seoul-performance.webp
```

이미지 파일이 없으면 `MARU / 이미지 준비 중` placeholder가 표시되며, 깨진 이미지 아이콘은 노출하지 않습니다. 장소별 실제 이미지는 향후 공식 이미지 권한 확보 또는 자체 제작 이미지로 보강 예정입니다.

## AI Image Policy

앱의 이미지는 사용자가 제공하는 로컬 파일을 표시합니다. 현재 안내 문구는 AI 생성 또는 이해 보조 이미지로 오해를 줄이기 위한 정책입니다.

- 저작권이 있는 사진이나 외부 이미지를 사용하지 않습니다.
- 실제 장소 사진처럼 오해되지 않도록 “AI 생성 이미지 · 실제 장소 사진이 아닌 이해 보조 이미지” 문구를 표시합니다.
- 실제 이미지 파일이 없으면 CSS placeholder가 표시됩니다.
- 이미지 생성 프롬프트는 `image-prompts.md`에 정리되어 있습니다.

## 아리 Chatbot

아리(ARI)는 마루 앱 안에서 서울 전통문화 코스를 안내하는 AI 가이드입니다. 앱 이름은 마루(MARU)이며, ARI는 챗봇 이름으로만 사용합니다.

- 궁궐, 한옥, 전통시장, 정원, 연못, 누각, 문화체험, 추천 코스 해설을 돕습니다.
- 유료 외부 AI API 키가 필요하지 않습니다.
- OpenAI, Gemini, Claude API를 요구하지 않습니다.
- Ollama local AI가 실행 중이면 local AI 응답을 시도합니다.
- Ollama가 없거나 브라우저 fetch/CORS 문제가 있으면 `ROUTE_DATA`, `CULTURE_RESOURCES`, `WEATHER_DATA`, `SUPPORT_DATA` 기반 fallback 답변을 사용합니다.
- future providers like OpenAI or Gemini can be added later through provider abstraction.

`app.js`에서 provider 설정을 편집할 수 있습니다.

```javascript
const AI_PROVIDER_CONFIG = {
  mode: 'auto',
  ollamaEndpoint: 'http://localhost:11434/api/chat',
  ollamaModel: 'llama3.2',
  timeoutMs: 5000
};
```

## Ollama Local AI Option

로컬 AI를 테스트하려면 Ollama에서 모델을 실행합니다.

```text
ollama run llama3.2
```

앱은 다음 엔드포인트를 시도합니다.

```text
http://localhost:11434/api/chat
```

브라우저와 Ollama CORS 설정에 따라 로컬 브라우저 fetch에 추가 설정이 필요할 수 있습니다. 연결이 실패해도 아리는 fallback 로직으로 계속 동작합니다.

## UI Theme Plan

홈 화면에서 3가지 UI 분위기를 비교할 수 있습니다.

- 경복궁 야경
- K-컬처 판타지
- 조선 궁궐

선택값은 `localStorage`에 저장되며, CSS 변수와 hero visual 스타일을 바꿉니다.

## 지도 링크 방식

현재 지도 기능은 API 키가 필요 없는 외부 지도 링크 방식으로 구현되어 있습니다. 사용자는 네이버지도, 카카오맵, Google Maps 중 원하는 지도 서비스를 선택해 길찾기를 열 수 있습니다. 좌표가 있으면 좌표를 우선 사용하고, 없으면 장소명과 서울을 함께 검색합니다.

```text
https://www.google.com/maps/dir/?api=1&origin=...
nmap://route/walk?slat=...
https://map.kakao.com/link/by/walk/...
```

현재 위치를 허용하면 가까운 서울 전통문화 장소를 거리순으로 추천합니다. 위치 정보는 가까운 장소 추천에만 사용되며 저장하지 않습니다. 향후 서버에서 검증된 좌표 데이터를 제공하면 더 정확한 경로 URL이나 지도 API로 확장할 수 있습니다.

## 날씨 화면 상태

현재 날씨 화면은 날씨 조건에 따른 추천 흐름을 보여주는 시제품 구조이며, 실제 날씨 API는 아직 연동하지 않았습니다. 실제 운영 시 기상청 또는 외부 날씨 API와 연동할 수 있습니다.

## Spring Boot + MySQL Backend

`backend/`에는 Spring Boot 3.3 + Java 21 + MySQL 기반 조회 API가 추가되어 있습니다.

구현된 테이블:

- `places`
- `courses`
- `course_places`
- `festivals`
- `heritage`
- `public_data_sources`

서버 시작 시 다음 seed JSON을 읽어 DB가 비어 있는 항목을 자동 적재합니다.

- `backend/src/main/resources/seed/courses.json`
- `backend/src/main/resources/seed/festivals.json`
- `backend/src/main/resources/seed/heritage.json`
- `backend/src/main/resources/seed/public-data-sources.json`

실행:

```powershell
cd backend
$env:MARU_DB_URL="jdbc:mysql://localhost:3306/maru?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Seoul&characterEncoding=utf8"
$env:MARU_DB_USERNAME="maru"
$env:MARU_DB_PASSWORD="maru_password"
mvn spring-boot:run
```

API 테스트:

```powershell
curl http://localhost:8080/api/courses
curl http://localhost:8080/api/courses/palace-history-course
curl http://localhost:8080/api/public-data-sources
```

프론트 API fallback:

- 로컬 프론트는 `http://localhost:8080/api/...`를 먼저 시도합니다.
- API가 실패하면 기존 `data/*.json`과 앱 내부 fallback 데이터로 내려갑니다.
- endpoint별 실패 관리가 적용되어 한 API 실패가 다른 API 호출을 전부 막지 않습니다.
- GitHub Pages에서는 별도 API base URL을 지정하지 않으면 정적 JSON으로 동작합니다.

현재 한계:

- 실제 공공데이터 API 동기화는 아직 없습니다.
- 실제 생성형 AI API 호출은 아직 없습니다.
- 로그인/사용자 저장 기능은 아직 없습니다.
- 관리자 CRUD API와 운영 배치 동기화는 다음 단계입니다.

## AI 확장 계획

AI는 검증된 문화 사실을 대체하지 않고, DB와 서버가 제공한 정보를 쉽게 설명하는 역할을 맡습니다.

- 쉬운 영어 문화 해설
- 한국어, 일본어, 중국어 확장
- 장소별 핵심 키워드
- 방문 팁
- 추천 이유
- 자연어 요청 파싱
- 이미지 프롬프트 생성 보조

## PWA 확장 계획

현재 `manifest.json`, `service-worker.js`, `assets/icons/icon.svg`를 추가했습니다. manifest는 실제 존재하는 SVG 아이콘만 참조합니다.

향후 확장:

- PNG 앱 아이콘 추가
- 오프라인 안내 화면
- 최근 본 코스 캐시
- 앱 설치 안내
- Android/iOS 앱 패키징 준비

이 버전은 백엔드 통합 전에 모바일 사용자 흐름, 데이터 모델, AI 이미지 정책, 편의 정보 UI를 검증하기 위한 모바일 우선 정적 프론트엔드입니다.
