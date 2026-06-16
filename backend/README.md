# MARU Backend

Spring Boot + MySQL 기반 MARU 조회 API 프로토타입입니다. 기존 GitHub Pages 프론트엔드는 그대로 유지하고, 정적 JSON 데이터를 점진적으로 DB/API로 옮기기 위한 서버 뼈대입니다.

## 실행 환경
- Java 21 이상
- Maven
- MySQL 8.x

## MySQL 준비
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

향후 외부 API 연결용 환경변수 자리:
```powershell
$env:OPENAI_API_KEY=""
$env:TOUR_API_SERVICE_KEY=""
$env:SEOUL_OPEN_DATA_API_KEY=""
```

이번 단계에서는 OpenAI API, TourAPI, 서울시 API를 실제 호출하지 않습니다.

## 실행
```powershell
cd backend
mvn spring-boot:run
```

서버 기본 주소:
```text
http://localhost:8080
```

## API
- `GET /api/courses`
- `GET /api/courses/{id}`
- `GET /api/places`
- `GET /api/festivals`
- `GET /api/heritage`
- `GET /api/public-data-sources`

## DB 테이블
Flyway 마이그레이션 `src/main/resources/db/migration/V1__create_catalog_tables.sql`에서 생성합니다.

- `places`
- `courses`
- `course_places`
- `festivals`
- `heritage`
- `public_data_sources`

## 프론트 연결
로컬에서 `index.html` 등을 `http://localhost:4173` 또는 `http://127.0.0.1:4173`으로 열면 프론트는 `http://localhost:8080/api/...`를 먼저 시도합니다. 서버가 꺼져 있거나 API 데이터가 없으면 기존 정적 JSON으로 fallback됩니다.

GitHub Pages 배포본에서 별도 HTTPS API 서버를 연결하려면 브라우저 콘솔에서 다음처럼 API base URL을 설정할 수 있습니다.

```js
localStorage.setItem('maruApiBaseUrl', 'https://your-api.example.com');
```

다시 정적 JSON 전용으로 돌리려면:

```js
localStorage.removeItem('maruApiBaseUrl');
```

## 현재 한계
- DB seed 자동 적재는 아직 없다. 현재 JSON 데이터를 DB에 넣는 import 기능은 다음 단계에서 추가해야 한다.
- 로그인/사용자 저장 기능은 없다.
- 외부 공공데이터 API와 생성형 AI API는 호출하지 않는다.
- GitHub Pages에서는 HTTPS API 주소가 설정되지 않으면 기존 정적 JSON fallback으로 동작한다.
