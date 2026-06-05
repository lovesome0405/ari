# HanRoute AI

문화체육관광 공모전 모바일 웹

HanRoute AI는 외국인 방문객을 위한 모바일 우선 정적 프론트엔드입니다. 언어 선택, 여행 조건 선택, 추천 코스, Google Maps 길찾기, 쉬운 문화 해설, 여행자 지원, 날씨, Route Passport 흐름을 하나의 모바일 여행 동반 앱처럼 제공합니다.

핵심 원칙:

- DB = 검증된 문화 사실
- Server = 조건 필터링과 추천 점수
- AI = 쉬운 문화 해설

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

- `assets/images/home/`에 `morning.webp`, `noon.webp`, `evening.webp`, `night.webp` 추가
- `assets/images/routes/`에 route 이미지 3개 추가
- 실제 도메인이 생기면 `robots.txt`와 `sitemap.xml`의 `https://example.com`을 실제 주소로 변경
- GitHub Pages를 쓰는 경우 `.nojekyll` 파일을 유지

배포 후 URL 예시:

```text
https://your-name.github.io/hanroute-ai/
https://hanroute-ai.netlify.app/
https://hanroute-ai.vercel.app/
```

## 파일 구조

```text
index.html          # 언어 선택, 시간대별 홈 이미지, 테마 선택, 앱 시작 화면
planner.html        # 단계형 여행 조건 선택
routes.html         # 추천 코스 카드
route-detail.html   # 코스 상세, 문화 해설, Google Maps 길찾기
map.html            # 모바일 지도/내비게이션 보조 화면
weather.html        # 서울 날씨와 날씨 기반 코스 추천
support.html        # 여행자 지원
passport.html       # 저장 코스와 문화 스탬프
culture-data.html   # 심사용 문화데이터 대시보드
about.html          # 서비스 설명
style.css           # 모바일 우선 디자인 시스템, 이미지 프레임, Ari 챗봇 UI
app.js              # 데이터, localStorage, 렌더링, 인터랙션, Ari provider/fallback
manifest.json       # PWA 준비 파일
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
6. Google Maps 길찾기
7. 장소별 전통문화 해설 확인
8. 여행자 지원, 날씨, Route Passport 사용

## Data Expansion Plan

현재 정적 버전은 `app.js`의 seed data를 사용합니다. 공식 API 통합은 Spring Boot 버전에서 처리합니다.

향후 데이터 소스 후보:

- Seoul Open Data Plaza
- Korea Tourism Organization TourAPI
- National Heritage data
- Public Data Portal
- Museum / palace / theater / market official pages

주의사항:

- 이 저장소의 데이터는 seed data입니다.
- 운영시간, 요금, 예약 여부, 주소, 좌표는 운영 전 공식 출처로 검증해야 합니다.
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

홈 화면은 사용자 로컬 시간을 기준으로 이미지를 자동 선택합니다.

```text
morning.webp  # 05:00 ~ 10:59
noon.webp     # 11:00 ~ 15:59
evening.webp  # 16:00 ~ 20:59
night.webp    # 21:00 ~ 04:59
```

추천 코스 이미지는 다음 파일명을 사용합니다.

```text
assets/images/routes/royal-culture.webp
assets/images/routes/hidden-sounds-hanok.webp
assets/images/routes/modern-seoul-performance.webp
```

이미지 파일이 없으면 `AI Visual Guide / 이미지 준비 중` placeholder가 표시되며, 깨진 이미지 아이콘은 노출하지 않습니다.

## AI Image Policy

앱의 이미지는 사용자가 제공하는 로컬 파일을 표시합니다. 현재 안내 문구는 AI 생성 또는 이해 보조 이미지로 오해를 줄이기 위한 정책입니다.

- 저작권이 있는 사진이나 외부 이미지를 사용하지 않습니다.
- 실제 장소 사진처럼 오해되지 않도록 “AI 생성 이미지 · 실제 장소 사진이 아닌 이해 보조 이미지” 문구를 표시합니다.
- 실제 이미지 파일이 없으면 CSS placeholder가 표시됩니다.
- 이미지 생성 프롬프트는 `image-prompts.md`에 정리되어 있습니다.

## Ari Chatbot

아리(Ari)는 한강의 옛 이름인 “아리수”에서 착안한 다국어 한국 전통문화 AI 가이드입니다.

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

브라우저와 Ollama CORS 설정에 따라 로컬 브라우저 fetch에 추가 설정이 필요할 수 있습니다. 연결이 실패해도 Ari는 fallback 로직으로 계속 동작합니다.

## UI Theme Plan

홈 화면에서 3가지 UI 분위기를 비교할 수 있습니다.

- 경복궁 야경
- K-컬처 판타지
- 조선 궁궐

선택값은 `localStorage`에 저장되며, CSS 변수와 hero visual 스타일을 바꿉니다.

## Google Maps 링크 방식

현재는 코스 장소명을 사용해 Google Maps 경로 URL을 생성합니다.

```text
https://www.google.com/maps/dir/장소1/장소2/장소3
```

향후 서버에서 좌표 데이터를 제공하면 더 정확한 경로 URL이나 지도 API로 확장할 수 있습니다.

## Spring Boot + MySQL 연동 계획

Spring Boot:

- 문화자원 API
- 공식 출처 검증 상태 관리
- 추천 조건 저장
- 추천 점수 계산
- 코스 상세 응답
- 저장 코스와 패스포트 관리
- 지도/날씨 API 중계

MySQL:

- cultural_resources
- route_templates
- route_places
- source_groups
- recommendation_factors
- user_preferences
- saved_routes
- passport_stamps
- resource_verification_logs

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

현재 `manifest.json`과 `service-worker.js`를 추가했습니다.

향후 확장:

- 실제 아이콘 파일 추가
- 오프라인 안내 화면
- 최근 본 코스 캐시
- 앱 설치 안내
- Android/iOS 앱 패키징 준비

이 버전은 백엔드 통합 전에 모바일 사용자 흐름, 데이터 모델, AI 이미지 정책, 편의 정보 UI를 검증하기 위한 모바일 우선 정적 프론트엔드입니다.
