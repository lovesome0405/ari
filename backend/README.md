# MARU Backend

Spring Boot + MySQL 기반 MARU 조회 API입니다. 기존 GitHub Pages 프론트엔드는 유지하면서, 정적 JSON 데이터를 서버 시작 시 MySQL에 자동 적재하고 `/api/*` 조회 API로 제공합니다.

## 실행 환경
- Java 21 이상
- Maven
- MySQL 8.x 또는 MariaDB 호환 서버

## MySQL 준비
관리자 계정으로 접속한 뒤 DB와 계정을 준비합니다.

```sql
CREATE DATABASE maru CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'maru'@'localhost' IDENTIFIED BY 'maru_password';
GRANT ALL PRIVILEGES ON maru.* TO 'maru'@'localhost';
FLUSH PRIVILEGES;
```

## 환경변수 예시
PowerShell:

```powershell
$env:MARU_DB_URL="jdbc:mysql://localhost:3306/maru?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=Asia/Seoul&characterEncoding=utf8"
$env:MARU_DB_USERNAME="maru"
$env:MARU_DB_PASSWORD="maru_password"
$env:MARU_ALLOWED_ORIGINS="http://localhost:4173,http://127.0.0.1:4173,https://lovesome0405.github.io"
```

향후 외부 API 연결용 환경변수 자리도 준비되어 있습니다. 이번 단계에서는 실제 호출하지 않습니다.

```powershell
$env:OPENAI_API_KEY=""
$env:TOUR_API_SERVICE_KEY=""
$env:SEOUL_OPEN_DATA_API_KEY=""
```

## 실행
```powershell
cd backend
mvn spring-boot:run
```

서버 기본 주소:

```text
http://localhost:8080
```

## JSON seed/import
서버 시작 시 다음 파일을 classpath에서 읽어 DB에 자동 적재합니다.

```text
src/main/resources/seed/courses.json
src/main/resources/seed/festivals.json
src/main/resources/seed/heritage.json
src/main/resources/seed/public-data-sources.json
```

적재 결과:

- `courses`: 6개 추천 코스
- `places`: `courses.json`의 장소를 id 기준 중복 제거해 저장
- `course_places`: 코스별 장소 순서 저장, `sort_order`는 1부터 시작
- `festivals`: 6개 문화행사 샘플
- `heritage`: 10개 국가유산 샘플
- `public_data_sources`: 5개 공공데이터 출처

이미 같은 id 데이터가 있으면 중복 삽입하지 않습니다.

## API
- `GET /api/courses`
- `GET /api/courses/{id}`
- `GET /api/places`
- `GET /api/festivals`
- `GET /api/heritage`
- `GET /api/public-data-sources`

## API 테스트
```powershell
curl http://localhost:8080/api/courses
curl http://localhost:8080/api/courses/palace-history-course
curl http://localhost:8080/api/places
curl http://localhost:8080/api/festivals
curl http://localhost:8080/api/heritage
curl http://localhost:8080/api/public-data-sources
```

개수만 빠르게 확인하려면:

```powershell
(Invoke-RestMethod http://localhost:8080/api/courses).Count
(Invoke-RestMethod http://localhost:8080/api/festivals).Count
(Invoke-RestMethod http://localhost:8080/api/heritage).Count
(Invoke-RestMethod http://localhost:8080/api/public-data-sources).Count
```

## DB 테이블
Flyway 마이그레이션 `src/main/resources/db/migration/V1__create_catalog_tables.sql`에서 생성합니다.

- `places`
- `courses`
- `course_places`
- `festivals`
- `heritage`
- `public_data_sources`

## 프론트 연결
로컬에서 프론트를 `http://localhost:4173` 또는 `http://127.0.0.1:4173`으로 열면 프론트는 `http://localhost:8080/api/...`를 먼저 시도합니다.

서버가 꺼져 있거나 특정 API가 실패하면 기존 정적 JSON으로 fallback됩니다. API 실패 관리는 endpoint별로 동작하므로 `/api/courses`가 실패해도 `/api/places` 등은 별도로 시도할 수 있습니다. 서버가 완전히 꺼져 있으면 빠르게 정적 JSON fallback으로 내려갑니다.

GitHub Pages 배포본에서 별도 HTTPS API 서버를 연결하려면 브라우저 콘솔에서 다음처럼 API base URL을 설정할 수 있습니다.

```js
localStorage.setItem('maruApiBaseUrl', 'https://your-api.example.com');
```

다시 정적 JSON 전용으로 돌리려면:

```js
localStorage.removeItem('maruApiBaseUrl');
```

## 현재 한계
- 실제 공공데이터 API 동기화는 아직 없다.
- 실제 생성형 AI API 호출은 아직 없다.
- 로그인/사용자 저장 기능은 아직 없다.
- seed JSON을 운영 DB에 넣는 초기 기반이며, 관리자 CRUD API와 운영 배치 동기화는 다음 단계가 필요하다.
