'use strict';

// EDIT HOME TIME IMAGES HERE
const HOME_TIME_IMAGES = {
  day: {
    label: { KR: '낮', EN: 'Day' },
    imageUrls: [
      'assets/images/home/day-1.webp',
      'assets/images/home/day-2.webp',
      'assets/images/home/day-3.webp',
      'assets/images/home/day-4.webp'
    ],
    title: {
      KR: '한국 전통문화를 만나는 시간',
      EN: 'A Clear Way Into Korean Heritage'
    },
    description: {
      KR: '현재 시간에 맞춰 낮, 저녁, 밤 분위기를 자동으로 적용합니다.',
      EN: 'ARI automatically adapts the page mood to day, evening, or night.'
    }
  },
  evening: {
    label: { KR: '저녁', EN: 'Evening' },
    imageUrls: [
      'assets/images/home/evening-1.webp',
      'assets/images/home/evening-2.webp',
      'assets/images/home/evening-3.webp',
      'assets/images/home/evening-4.webp'
    ],
    title: {
      KR: '노을과 함께 읽는 전통문화 이야기',
      EN: 'Heritage Stories in the Evening Glow'
    },
    description: {
      KR: '저녁 시간에는 산책길과 공연을 연결한 문화 흐름을 부드럽게 보여줍니다.',
      EN: 'In the evening, ARI highlights gentle walks and performance-friendly routes.'
    }
  },
  night: {
    label: { KR: '밤', EN: 'Night' },
    imageUrls: [
      'assets/images/home/night-1.webp',
      'assets/images/home/night-2.webp',
      'assets/images/home/night-3.webp',
      'assets/images/home/night-4.webp'
    ],
    title: {
      KR: '밤에 더 깊어지는 한국 전통문화',
      EN: 'Korean Heritage After Dark'
    },
    description: {
      KR: '궁궐 야경과 조용한 한옥 분위기에 맞춰 차분한 화면으로 전환됩니다.',
      EN: 'At night, the interface shifts into a calmer palace and hanok mood.'
    }
  }
};

// EDIT AI PROVIDER CONFIG HERE
const AI_PROVIDER_CONFIG = {
  mode: 'auto', // auto | ollama | fallback
  ollamaEndpoint: 'http://localhost:11434/api/chat',
  ollamaModel: 'llama3.2',
  timeoutMs: 5000
};

const ARI_SYSTEM_PROMPT = `
너는 아리(Ari)다.
아리는 한강의 옛 이름인 아리수에서 따온 한국 전통문화 여행 AI 가이드다.

역할:
- 한국 전통문화, 궁궐, 한옥, 전통시장, 정원, 연못, 누각, 문화체험을 친절하게 설명한다.
- 외국인 방문객도 이해하기 쉬운 말로 설명한다.
- 사용자의 언어 선택에 맞춰 가능한 범위에서 답한다.
- 현재 앱의 추천 코스와 장소 데이터를 바탕으로 답한다.

중요 원칙:
- DB나 앱 데이터에 없는 장소, 운영시간, 요금, 예약 정보를 확정적으로 말하지 않는다.
- 모르는 정보는 공식 출처 확인이 필요하다고 말한다.
- 길찾기는 사용자가 선택한 지도 서비스 버튼을 사용하라고 안내한다.
- 응급상황, 분실물, 관광불편은 여행자 지원 메뉴를 안내한다.
- AI는 사실을 새로 만들어내는 것이 아니라, 검증된 문화데이터를 쉽게 설명하는 역할이다.
`;

const ARI_QUICK_QUESTIONS = [
  '이 코스가 왜 추천됐어?',
  '경복궁을 쉽게 설명해줘',
  '비 오는 날 어디가 좋아?',
  '영어 안내 가능한 곳 있어?',
  '예약이 필요한 곳이 있어?'
];

// EDIT CULTURE RESOURCE DATA HERE
// Static seed data only. Official API integration belongs in the Spring Boot version.
const CULTURE_RESOURCES = [
  {
    id: 'gyeongbokgung-palace',
    nameKo: '경복궁',
    nameEn: 'Gyeongbokgung Palace',
    region: '종로구',
    category: '궁궐',
    address: '서울특별시 종로구 사직로 161',
    latitude: 37.5796,
    longitude: 126.9770,
    feeType: '유료',
    openingHours: '공식 출처 확인 필요',
    indoorOutdoor: '실외',
    walkingLevel: '보통',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 5,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '일반 관람은 현장 방문 가능하나 특별 프로그램은 사전 확인이 필요합니다.',
    sourceName: 'National Heritage / palace official guide placeholder',
    sourceUrl: 'source URL placeholder',
    verifiedStatus: '공식 확인 필요',
    lastVerifiedAt: 'YYYY-MM-DD',
    traditionScore: 5,
    foreignerScore: 5,
    hiddenScore: 2,
    aiSimpleExplanation: '조선의 대표 궁궐로 왕실문화와 궁궐 건축을 이해하기 좋은 장소입니다.',
    aiWhyItMatters: '한국 왕실문화의 중심 공간을 직접 걸으며 건축과 의례의 의미를 배울 수 있습니다.',
    aiVisitTip: '입장 시간, 휴궁일, 특별 관람 여부는 방문 전 공식 출처에서 확인하세요.',
    aiCulturalKeywords: ['Joseon Dynasty', 'Royal Palace'],
    imageUrl: 'assets/images/places/gyeongbokgung-palace.webp',
    imageAlt: '경복궁 궁궐문화 안내 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of Gyeongbokgung palace at night, deep navy sky, warm palace lights, elegant Korean rooflines, no text, no logos'
  },
  {
    id: 'national-palace-museum',
    nameKo: '국립고궁박물관',
    nameEn: 'National Palace Museum',
    region: '종로구',
    category: '박물관',
    address: '서울특별시 종로구 효자로 12',
    latitude: 37.5769,
    longitude: 126.9749,
    feeType: '무료',
    openingHours: '공식 출처 확인 필요',
    indoorOutdoor: '실내',
    walkingLevel: '낮음',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '전시와 교육 프로그램은 일정별 사전 확인이 필요합니다.',
    sourceName: 'museum official guide placeholder',
    sourceUrl: 'source URL placeholder',
    verifiedStatus: '공식 확인 필요',
    lastVerifiedAt: 'YYYY-MM-DD',
    traditionScore: 5,
    foreignerScore: 4,
    hiddenScore: 2,
    aiSimpleExplanation: '조선 왕실 유물과 의례 문화를 쉽게 이해할 수 있는 박물관입니다.',
    aiWhyItMatters: '궁궐 방문 전에 왕실 유물의 의미를 먼저 익힐 수 있습니다.',
    aiVisitTip: '왕실 의례와 상징 관련 전시를 먼저 보면 궁궐 동선이 더 잘 이해됩니다.',
    aiCulturalKeywords: ['Royal Artifacts', 'Court Ritual'],
    imageUrl: 'assets/images/places/national-palace-museum.webp',
    imageAlt: '국립고궁박물관 왕실 유물 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of Korean royal artifacts in a museum, ivory display, warm gold light, no text, no logos'
  },
  {
    id: 'national-folk-museum',
    nameKo: '국립민속박물관',
    nameEn: 'National Folk Museum',
    region: '종로구',
    category: '박물관',
    address: '서울특별시 종로구 삼청로 37',
    latitude: 37.5816,
    longitude: 126.9790,
    feeType: '무료',
    openingHours: '공식 출처 확인 필요',
    indoorOutdoor: '실내',
    walkingLevel: '낮음',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '전시 운영 시간은 방문 전 공식 출처에서 확인하세요.',
    sourceName: 'museum official guide placeholder',
    sourceUrl: 'source URL placeholder',
    verifiedStatus: '공식 확인 필요',
    lastVerifiedAt: 'YYYY-MM-DD',
    traditionScore: 5,
    foreignerScore: 4,
    hiddenScore: 3,
    aiSimpleExplanation: '한국인의 생활문화와 민속을 이해할 수 있는 박물관입니다.',
    aiWhyItMatters: '왕실문화와 일상문화의 차이를 비교할 수 있습니다.',
    aiVisitTip: '생활사 전시를 중심으로 보면 전통문화가 더 쉽게 연결됩니다.',
    aiCulturalKeywords: ['Folk Culture', 'Everyday Life'],
    imageUrl: 'assets/images/places/national-folk-museum.webp',
    imageAlt: '국립민속박물관 생활문화 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of Korean folk museum objects and everyday culture, warm ivory and navy, no text, no logos'
  },
  {
    id: 'tongin-market',
    nameKo: '통인시장',
    nameEn: 'Tongin Market',
    region: '종로구',
    category: '전통시장',
    address: '서울특별시 종로구 자하문로15길 일대',
    latitude: 37.5808,
    longitude: 126.9697,
    feeType: '선택 지출',
    openingHours: '공식 출처 확인 필요',
    indoorOutdoor: '실내외',
    walkingLevel: '낮음',
    languageSupport: [],
    englishAvailable: false,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '운영 시간과 휴무일은 방문 전 공식 안내를 확인하세요.',
    sourceName: 'market official guide placeholder',
    sourceUrl: 'source URL placeholder',
    verifiedStatus: '공식 확인 필요',
    lastVerifiedAt: 'YYYY-MM-DD',
    traditionScore: 4,
    foreignerScore: 4,
    hiddenScore: 3,
    aiSimpleExplanation: '지역 시장 문화를 통해 전통이 오늘의 생활과 만나는 장면을 볼 수 있습니다.',
    aiWhyItMatters: '전통문화가 현재의 생활문화로 이어지는 흐름을 보여줍니다.',
    aiVisitTip: '시장 운영 시간과 체험 가능 여부를 미리 확인하세요.',
    aiCulturalKeywords: ['Traditional Market', 'Local Life'],
    imageUrl: 'assets/images/places/tongin-market.webp',
    imageAlt: '통인시장 생활문화 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of a small Korean traditional market street at evening, warm lights, no text, no logos'
  },
  {
    id: 'unhyeongung',
    nameKo: '운현궁',
    nameEn: 'Unhyeongung',
    region: '종로구',
    category: '왕실가 유적',
    address: '서울특별시 종로구 삼일대로 일대',
    latitude: 37.5761,
    longitude: 126.9870,
    feeType: '무료',
    openingHours: '공식 출처 확인 필요',
    indoorOutdoor: '실내외',
    walkingLevel: '낮음',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: false,
    foreignerPopularityScore: 3,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '행사와 체험 프로그램은 사전 확인이 필요합니다.',
    sourceName: 'official guide placeholder',
    sourceUrl: 'source URL placeholder',
    verifiedStatus: '공식 확인 필요',
    lastVerifiedAt: 'YYYY-MM-DD',
    traditionScore: 4,
    foreignerScore: 3,
    hiddenScore: 4,
    aiSimpleExplanation: '궁궐 밖 왕실가의 생활 분위기를 느낄 수 있는 공간입니다.',
    aiWhyItMatters: '왕실문화가 궁궐 밖 생활 공간과도 연결된다는 점을 보여줍니다.',
    aiVisitTip: '내부 전시와 행사 일정을 함께 확인하세요.',
    aiCulturalKeywords: ['Royal Residence', 'Local Heritage'],
    imageUrl: 'assets/images/places/unhyeongung.webp',
    imageAlt: '운현궁 왕실가 공간 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of a quiet Korean royal residence courtyard, hanok rooflines, evening mood, no text, no logos'
  },
  {
    id: 'seoul-folk-music-museum',
    nameKo: '서울우리소리박물관',
    nameEn: 'Seoul Museum of Korean Folk Music',
    region: '종로구',
    category: '박물관',
    address: '서울특별시 종로구 율곡로 일대',
    latitude: 37.5759,
    longitude: 126.9902,
    feeType: '무료',
    openingHours: '공식 출처 확인 필요',
    indoorOutdoor: '실내',
    walkingLevel: '낮음',
    languageSupport: [],
    englishAvailable: false,
    foreignerPopular: false,
    foreignerPopularityScore: 3,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '체험 프로그램은 일정별 확인이 필요합니다.',
    sourceName: 'museum official guide placeholder',
    sourceUrl: 'source URL placeholder',
    verifiedStatus: '공식 확인 필요',
    lastVerifiedAt: 'YYYY-MM-DD',
    traditionScore: 4,
    foreignerScore: 3,
    hiddenScore: 5,
    aiSimpleExplanation: '한국 전통 소리와 민요를 접할 수 있는 작은 박물관입니다.',
    aiWhyItMatters: '전통문화를 소리와 감각으로 이해하게 합니다.',
    aiVisitTip: '청음형 전시를 천천히 체험하세요.',
    aiCulturalKeywords: ['Gugak', 'Folk Sound'],
    imageUrl: 'assets/images/places/seoul-folk-music-museum.webp',
    imageAlt: '서울우리소리박물관 소리문화 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of Korean folk sound culture, sound wave motif, museum interior, no text, no logos'
  },
  {
    id: 'deoksugung-palace',
    nameKo: '덕수궁',
    nameEn: 'Deoksugung Palace',
    region: '중구',
    category: '궁궐',
    address: '서울특별시 중구 세종대로 일대',
    latitude: 37.5658,
    longitude: 126.9751,
    feeType: '유료',
    openingHours: '공식 출처 확인 필요',
    indoorOutdoor: '실외',
    walkingLevel: '낮음',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '특별 관람과 행사는 사전 확인이 필요합니다.',
    sourceName: 'official guide placeholder',
    sourceUrl: 'source URL placeholder',
    verifiedStatus: '공식 확인 필요',
    lastVerifiedAt: 'YYYY-MM-DD',
    traditionScore: 4,
    foreignerScore: 4,
    hiddenScore: 2,
    aiSimpleExplanation: '대한제국과 근대 서울의 분위기를 느낄 수 있는 궁궐입니다.',
    aiWhyItMatters: '전통 왕실문화와 근대 도시의 변화가 만나는 장소입니다.',
    aiVisitTip: '석조전과 돌담길 동선을 함께 계획하세요.',
    aiCulturalKeywords: ['Korean Empire', 'Modern Heritage'],
    imageUrl: 'assets/images/places/deoksugung-palace.webp',
    imageAlt: '덕수궁 근대유산 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of Deoksugung palace and modern Seoul heritage, deep navy and gold, no text, no logos'
  }
];

// EDIT ROUTE DATA HERE
const ROUTE_DATA = [
  {
    id: 'royal-culture-local-life',
    title: '왕실문화에서 생활문화로 이어지는 코스',
    englishTitle: 'Royal Culture to Local Life',
    score: 87,
    time: '약 3시간',
    walking: '보통',
    fee: '저비용',
    resourceIds: ['national-palace-museum', 'gyeongbokgung-palace', 'national-folk-museum', 'tongin-market'],
    flow: ['국립고궁박물관', '경복궁', '국립민속박물관', '통인시장'],
    reason: '왕실문화에서 전통시장까지 이어져 한국 전통문화를 처음 접하는 방문객에게 적합합니다.',
    tags: ['왕실문화', '박물관', '전통시장'],
    convenience: {
      englishAvailable: true,
      foreignerPopular: true,
      reservationRequired: false,
      labels: ['영어 안내 가능', '외국인 인기', '예약 불필요']
    },
    imageUrl: 'assets/images/routes/royal-culture.webp',
    imageAlt: '왕실문화에서 생활문화로 이어지는 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 이해 보조 이미지',
    imagePrompt: 'A clean mobile travel guide illustration showing Korean royal culture flowing into local traditional market life, inspired by Joseon palace architecture, royal artifacts, folk museum objects, and a small traditional market street, deep navy night mood, warm gold lights, subtle cyan accents, elegant Korean heritage style, not photorealistic, no text, no logos',
    summary: '조선 왕실 유물에서 시작해 궁궐, 민속문화, 전통시장으로 이어지는 흐름을 하나의 이야기로 이해할 수 있습니다.',
    englishExplanation: 'This route helps visitors understand Korean royal culture and everyday local culture as one story. It begins with royal artifacts, continues through the palace and folk culture, and ends at a traditional market.',
    tip: '운영시간, 요금, 예약 여부는 방문 전 공식 출처에서 확인하세요.',
    source: 'Seed data based on public cultural source structure. Official source verification is required before production use.',
    keywords: [
      { name: 'Joseon Dynasty', description: '조선 시대 왕실문화와 국가 질서를 이해하는 핵심 키워드입니다.' },
      { name: 'Royal Palace', description: '왕실 의례, 건축, 상징을 볼 수 있는 전통문화 공간입니다.' },
      { name: 'Folk Culture', description: '일상생활과 민속 신앙, 생활 도구를 포함하는 문화입니다.' },
      { name: 'Traditional Market', description: '전통이 오늘의 생활과 만나는 지역 문화 공간입니다.' }
    ]
  },
  {
    id: 'hidden-sounds-hanok-streets',
    title: '숨은 소리문화와 한옥 골목 코스',
    englishTitle: 'Hidden Sounds and Hanok Streets',
    score: 81,
    time: '약 2.5시간',
    walking: '낮음~보통',
    fee: '무료 중심',
    resourceIds: ['unhyeongung', 'seoul-folk-music-museum'],
    flow: ['운현궁', '서울우리소리박물관', '익선동 한옥거리'],
    reason: '짧은 동선 안에서 한옥과 전통 소리문화를 함께 경험할 수 있습니다.',
    tags: ['한옥', '국악', '숨은문화'],
    convenience: {
      englishAvailable: true,
      foreignerPopular: false,
      reservationRequired: false,
      labels: ['일부 영어 안내', '숨은 문화자원', '예약 불필요']
    },
    imageUrl: 'assets/images/routes/hidden-sounds-hanok.webp',
    imageAlt: '숨은 소리문화와 한옥 골목 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 이해 보조 이미지',
    imagePrompt: 'A clean mobile travel guide illustration of a quiet Korean hanok alley and traditional folk sound culture, showing hanok rooflines, a small museum-like interior, sound wave motif, calm evening atmosphere, deep navy, ivory, warm gold, subtle cyan, elegant Korean heritage app style, not photorealistic, no text, no logos',
    summary: '왕실가의 생활 공간에서 시작해 한국의 소리문화를 듣고, 한옥 골목의 분위기로 마무리하는 코스입니다.',
    englishExplanation: 'This route introduces traditional Korean sound culture and hanok streets in a compact walking path.',
    tip: '박물관 프로그램 시간과 골목 혼잡도를 미리 확인하면 좋습니다.',
    source: 'Seed data based on public cultural source structure. Official source verification is required before production use.',
    keywords: [
      { name: 'Gugak', description: '한국 전통음악과 소리문화를 뜻합니다.' },
      { name: 'Hanok Alley', description: '전통 주거 양식과 도시 골목이 만나는 공간입니다.' },
      { name: 'Local Heritage', description: '잘 알려진 명소 밖에 있는 지역 문화자원입니다.' }
    ]
  },
  {
    id: 'modern-seoul-performing-heritage',
    title: '근대 서울과 전통예술 코스',
    englishTitle: 'Modern Seoul and Performing Heritage',
    score: 83,
    time: '약 3시간',
    walking: '낮음',
    fee: '유료 가능',
    resourceIds: ['deoksugung-palace'],
    flow: ['덕수궁', '덕수궁 돌담길', '국립정동극장'],
    reason: '근대 서울의 역사와 전통공연을 함께 즐길 수 있어 저녁 코스로 좋습니다.',
    tags: ['근대유산', '공연', '중구'],
    convenience: {
      englishAvailable: true,
      foreignerPopular: true,
      reservationRequired: true,
      labels: ['영어 안내 가능', '외국인 인기', '공연 예약 확인']
    },
    imageUrl: 'assets/images/routes/modern-seoul-performance.webp',
    imageAlt: '근대 서울과 전통예술 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 이해 보조 이미지',
    imagePrompt: 'A clean mobile travel guide illustration connecting modern Seoul heritage and traditional performing arts, Deoksugung-inspired stonewall road, warm theater lights, traditional performance stage mood, deep navy and gold, premium Korean cultural travel app style, not photorealistic, no text, no logos',
    summary: '덕수궁에서 근대 서울의 흐름을 보고, 돌담길 산책 후 전통공연으로 마무리합니다.',
    englishExplanation: 'This route connects modern Seoul history with traditional performing arts in a walkable district.',
    tip: '공연 티켓은 미리 예매하고 돌담길 산책 시간을 여유 있게 잡으세요.',
    source: 'Seed data based on public cultural source structure. Official source verification is required before production use.',
    keywords: [
      { name: 'Korean Empire', description: '근대 전환기 왕실문화와 서울을 이해하는 키워드입니다.' },
      { name: 'Historic Walk', description: '도시 길 위에서 역사적 층위를 읽는 방식입니다.' },
      { name: 'Performing Heritage', description: '전통예술을 무대 경험으로 만나는 문화유산입니다.' }
    ]
  }
];

// EDIT USER PREFERENCE OPTIONS HERE
const USER_PREFERENCE = {
  region: '종로구',
  time: '2시간',
  interests: ['궁궐'],
  people: '1명',
  groupType: '혼자',
  budget: '무료 위주',
  walking: '적게 걷기',
  indoorOutdoor: '실내',
  request: ''
};

// EDIT WEATHER DATA HERE
const WEATHER_DATA = [
  { day: '오늘', sky: '맑음', temp: '16℃ / 27℃', rain: '20% / 0%', icon: '해' },
  { day: '내일', sky: '구름많음', temp: '16℃ / 28℃', rain: '0% / 20%', icon: '구름' },
  { day: '모레', sky: '구름많음', temp: '19℃ / 27℃', rain: '-', icon: '흐림' }
];

// EDIT SUPPORT DATA HERE
const SUPPORT_DATA = [
  {
    id: 'airport',
    title: '공항 이동 정보',
    description: '인천공항과 김포공항에서 서울 도심으로 이동할 때 확인할 기본 동선입니다.',
    points: ['AREX 공항철도, 공항버스, 택시 중 도착 시간과 짐의 양에 맞춰 선택하세요.', '막차 시간과 숙소 주소는 출발 전 한 번 더 확인하세요.']
  },
  {
    id: 'tmoney',
    title: '교통카드/T-money 안내',
    description: '지하철, 버스, 편의점 결제에 쓸 수 있는 교통카드 준비 안내입니다.',
    points: ['공항, 지하철역, 편의점에서 구매와 충전이 가능합니다.', '환승 할인은 같은 카드로 태그해야 적용됩니다.']
  },
  {
    id: 'emergency',
    title: '비상 연락처',
    description: '응급 상황이나 분실, 안전 문제가 생겼을 때 바로 확인할 번호입니다.',
    points: ['경찰 112, 화재/구급 119, 관광통역안내 1330을 기억하세요.', '숙소 주소와 현재 위치를 지도 앱에서 먼저 확인하면 신고가 쉬워집니다.']
  },
  {
    id: 'translation',
    title: '번역/통역 도움',
    description: '현장에서 의사소통이 막힐 때 사용할 수 있는 도움 방법입니다.',
    points: ['관광통역안내 1330은 여행 상담과 통역 도움을 제공합니다.', '장소명, 예약명, 알레르기, 목적지를 짧은 문장으로 준비해두면 좋습니다.']
  },
  {
    id: 'tourist-info',
    title: '관광안내소 정보',
    description: '지도, 교통, 축제, 현장 문의가 필요할 때 가까운 안내소를 이용하세요.',
    points: ['명동, 광화문, 홍대 등 주요 관광지 주변 안내소를 확인하세요.', '외국어 안내 가능 여부와 운영 시간은 방문 전 공식 안내를 확인하세요.']
  },
  {
    id: 'rainy',
    title: '날씨/우천 시 대체 코스',
    description: '비가 오거나 덥고 추운 날에는 실내 중심으로 코스를 바꿀 수 있습니다.',
    points: ['박물관, 전시관, 공연장, 전통시장 실내 구간을 우선 추천합니다.', '우산 이동이 부담되면 지도에서 역과 가까운 장소를 먼저 여세요.']
  }
];

// EDIT PASSPORT DATA HERE
const PASSPORT_DATA = [
  { title: '왕실문화 완료', status: 'completed' },
  { title: '전통시장 완료', status: 'completed' },
  { title: '한옥거리 잠금', status: 'locked' },
  { title: '국악공연 잠금', status: 'locked' },
  { title: '공예체험 잠금', status: 'locked' },
  { title: '근대유산 잠금', status: 'locked' }
];

const STORAGE_KEYS = {
  language: 'hanroute.mobile.language',
  preference: 'hanroute.mobile.preference',
  selectedRoute: 'hanroute.mobile.selectedRoute',
  savedRoutes: 'hanroute.mobile.savedRoutes',
  stamps: 'hanroute.mobile.stamps',
  mapService: 'hanroute.mobile.mapService',
  ariMessages: 'hanroute.mobile.ariMessages'
};

const LANGUAGES = {
  KR: '한국어',
  EN: 'English'
};

const MAP_SERVICES = {
  google: { label: { KR: 'Google Maps', EN: 'Google Maps' }, shortLabel: 'Google' },
  naver: { label: { KR: '네이버지도', EN: 'Naver Map' }, shortLabel: 'Naver' },
  kakao: { label: { KR: '카카오맵', EN: 'Kakao Map' }, shortLabel: 'Kakao' }
};

const UI_COPY = {
  KR: {
    tabs: {
      home: '홈',
      recommend: '추천',
      map: '지도',
      support: '지원',
      passport: '저장'
    },
    home: {
      timeEyebrow: '서울 시간대 추천',
      languageConfirm: '한국어로 시작합니다.',
      introTitle: '한국 전통문화를 이해하는 가장 쉬운 코스',
      introBody: 'AI가 공식 문화데이터 구조를 바탕으로 당신에게 맞는 전통문화 스토리 코스를 추천합니다.',
      principles: ['DB = 검증된 문화 사실', 'Server = 조건 필터링과 추천 점수', 'AI = 쉬운 문화 해설'],
      quickLabel: '빠른 시작',
      todayRoute: '오늘 추천 코스',
      todayRouteDesc: '대표 스토리 코스 먼저 보기',
      rainyRoute: '비 오는 날 코스',
      rainyRouteDesc: '실내 중심 대체 코스',
      support: '여행자 지원',
      supportDesc: '긴급·분실·번역 도움',
      about: '서비스 소개',
      data: '공공데이터 활용 보기',
      start: '시작하기'
    },
    routes: {
      header: '추천 코스',
      headerSub: 'Heritage routes',
      edit: '조건 수정',
      eyebrow: 'Recommended Routes',
      title: '추천 전통문화 코스',
      body: '선택한 조건을 바탕으로 이해하기 쉬운 스토리형 코스를 추천합니다.',
      condition: '선택 조건',
      reason: '추천 이유',
      select: '이 코스 선택하기',
      detail: '자세히 보기',
      map: '지도 열기'
    },
    detail: {
      header: '코스 상세',
      headerSub: 'Story route detail',
      save: '저장',
      selected: 'Selected Route',
      scoreSuffix: '점',
      reason: '추천 이유',
      mapButton: '선택한 지도에서 길찾기',
      flow: '코스 흐름',
      aiGuide: 'AI 쉬운 문화 해설',
      keywords: '문화 키워드',
      visitTip: '방문 팁',
      why: '왜 중요한가:',
      tip: '방문 팁:',
      booking: '예약 안내:',
      warning: '운영시간, 요금, 예약 여부는 방문 전 공식 출처에서 확인하세요.',
      passport: 'Route Passport에 저장'
    },
    map: {
      header: '지도',
      headerSub: 'Navigation helper',
      changeRoute: '코스 변경',
      eyebrow: 'Route Map',
      fallbackTitle: '선택한 코스',
      body: '실제 GPS는 다음 버전에서 연결됩니다. 지금은 원하는 지도 서비스 링크와 이동 순서를 확인할 수 있습니다.',
      selector: '지도 선택',
      selectorHint: '선택한 지도 서비스는 다음 방문에도 유지됩니다.',
      openRoute: '선택한 지도에서 열기',
      openFirst: '첫 장소 열기',
      openPlace: '열기',
      timeline: '이동 순서',
      lessWalking: '적게 걷는 루트',
      rainyIndoor: '비 오는 날 실내 코스',
      nearby: '현재 위치 주변 추천',
      lessWalkingToast: '적게 걷는 루트는 지도 API 연동 후 제공됩니다.',
      rainyIndoorToast: '비 오는 날 실내 코스 조건이 선택되었습니다.',
      nearbyToast: '현재 위치 주변 추천은 GPS 연동 후 제공됩니다.',
      savedToast: '지도 서비스가 저장되었습니다.'
    },
    support: {
      header: '여행자 지원',
      headerSub: 'Help during trip',
      list: '지원 목록',
      eyebrow: 'Emergency',
      title: '긴급 상황인가요?',
      body: '필요한 도움을 빠르게 선택하세요.',
      emergency: '비상 연락처',
      tmoney: '교통카드',
      translation: '번역 도움',
      rainy: '우천 대체',
      action: '확인하기'
    },
    planner: {
      prev: '이전',
      next: '다음',
      finish: '추천 코스 보기'
    },
    common: {
      selectedLanguage: '선택됨',
      imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 이해 보조 이미지',
      imageMissing: '이미지 준비 중',
      savedRouteToast: '코스가 선택되었습니다.',
      passportToast: 'Route Passport에 저장되었습니다.'
    }
  },
  EN: {
    tabs: {
      home: 'Home',
      recommend: 'Routes',
      map: 'Map',
      support: 'Help',
      passport: 'Saved'
    },
    home: {
      timeEyebrow: 'Seoul Time Mood',
      languageConfirm: 'Starting in English.',
      introTitle: 'The easiest way to understand Korean heritage',
      introBody: 'ARI recommends traditional culture routes based on structured cultural data and visitor needs.',
      principles: ['DB = verified cultural facts', 'Server = filters and recommendation score', 'AI = simple cultural interpretation'],
      quickLabel: 'Quick start',
      todayRoute: "Today's Routes",
      todayRouteDesc: 'Browse representative story routes',
      rainyRoute: 'Rainy Day Route',
      rainyRouteDesc: 'Indoor-focused alternatives',
      support: 'Traveler Help',
      supportDesc: 'Emergency, lost items, translation',
      about: 'About the service',
      data: 'View public data usage',
      start: 'Get Started'
    },
    routes: {
      header: 'Recommended Routes',
      headerSub: 'Heritage routes',
      edit: 'Edit filters',
      eyebrow: 'Recommended Routes',
      title: 'Traditional Culture Routes',
      body: 'ARI recommends story-based routes that are easy for international visitors to understand.',
      condition: 'Selected filters',
      reason: 'Why this route',
      select: 'Choose this route',
      detail: 'View details',
      map: 'Open map'
    },
    detail: {
      header: 'Route Detail',
      headerSub: 'Story route detail',
      save: 'Save',
      selected: 'Selected Route',
      scoreSuffix: ' pts',
      reason: 'Why this route',
      mapButton: 'Open with selected map',
      flow: 'Route Flow',
      aiGuide: 'Simple AI Culture Guide',
      keywords: 'Culture Keywords',
      visitTip: 'Visit Tip',
      why: 'Why it matters:',
      tip: 'Visit tip:',
      booking: 'Booking note:',
      warning: 'Check official sources for hours, prices, reservations, and closures before visiting.',
      passport: 'Save to Route Passport'
    },
    map: {
      header: 'Map',
      headerSub: 'Navigation helper',
      changeRoute: 'Change route',
      eyebrow: 'Route Map',
      fallbackTitle: 'Selected Route',
      body: 'Live GPS will be connected in a future version. For now, choose a map service and open each stop in a new tab.',
      selector: 'Choose Map',
      selectorHint: 'Your selected map service is saved for next time.',
      openRoute: 'Open in selected map',
      openFirst: 'Open first stop',
      openPlace: 'Open',
      timeline: 'Route Order',
      lessWalking: 'Less walking route',
      rainyIndoor: 'Rainy indoor route',
      nearby: 'Nearby recommendations',
      lessWalkingToast: 'Less-walking routes will be available after map API integration.',
      rainyIndoorToast: 'Rainy-day indoor route conditions were selected.',
      nearbyToast: 'Nearby recommendations will be available after GPS integration.',
      savedToast: 'Map service saved.'
    },
    support: {
      header: 'Traveler Help',
      headerSub: 'Help during trip',
      list: 'Help List',
      eyebrow: 'Emergency',
      title: 'Need help right now?',
      body: 'Choose the kind of help you need.',
      emergency: 'Emergency contacts',
      tmoney: 'Transit card',
      translation: 'Translation help',
      rainy: 'Rainy backup',
      action: 'Check'
    },
    planner: {
      prev: 'Back',
      next: 'Next',
      finish: 'See routes'
    },
    common: {
      selectedLanguage: 'selected',
      imageNotice: 'AI-generated image · visual guide, not an official location photo',
      imageMissing: 'Image loading',
      savedRouteToast: 'Route selected.',
      passportToast: 'Saved to Route Passport.'
    }
  }
};

const PLACE_NAME_EN = {
  '경복궁': 'Gyeongbokgung Palace',
  '국립고궁박물관': 'National Palace Museum',
  '국립민속박물관': 'National Folk Museum',
  '통인시장': 'Tongin Market',
  '운현궁': 'Unhyeongung',
  '서울우리소리박물관': 'Seoul Museum of Korean Folk Music',
  '덕수궁': 'Deoksugung Palace',
  '익선동 한옥거리': 'Ikseon-dong Hanok Street',
  '덕수궁 돌담길': 'Deoksugung Stonewall Road',
  '국립정동극장': 'National Jeongdong Theater'
};

const EN_ROUTE_TRANSLATIONS = {
  'royal-culture-local-life': {
    title: 'Royal Culture to Local Life',
    subtitle: '왕실문화에서 생활문화로 이어지는 코스',
    time: 'About 3 hours',
    walking: 'Moderate',
    fee: 'Low cost',
    reason: 'A friendly first route that connects royal culture, palace architecture, folk life, and a traditional market.',
    summary: 'Start with royal artifacts, walk through palace and folk culture, then finish with local market life as one connected story.',
    tip: 'Check official sources for hours, fees, reservations, and closures before visiting.',
    flow: ['National Palace Museum', 'Gyeongbokgung Palace', 'National Folk Museum', 'Tongin Market'],
    convenienceLabels: ['English available', 'Popular with visitors', 'No reservation needed'],
    keywords: [
      { name: 'Joseon Dynasty', description: 'A key lens for understanding royal culture and state order.' },
      { name: 'Royal Palace', description: 'A heritage space for royal ritual, architecture, and symbols.' },
      { name: 'Folk Culture', description: 'Everyday customs, tools, beliefs, and ways of life.' },
      { name: 'Traditional Market', description: 'A local space where heritage meets daily life.' }
    ]
  },
  'hidden-sounds-hanok-streets': {
    title: 'Hidden Sounds and Hanok Streets',
    subtitle: '숨은 소리문화와 한옥 골목 코스',
    time: 'About 2.5 hours',
    walking: 'Low to moderate',
    fee: 'Mostly free',
    reason: 'A compact route for experiencing hanok atmosphere and traditional Korean sound culture without a long walk.',
    summary: 'Begin at a royal residence, listen to Korean folk sound culture, and end in a quiet hanok street atmosphere.',
    tip: 'Check museum program times and hanok street crowd levels before visiting.',
    flow: ['Unhyeongung', 'Seoul Museum of Korean Folk Music', 'Ikseon-dong Hanok Street'],
    convenienceLabels: ['Some English available', 'Hidden culture resource', 'No reservation needed'],
    keywords: [
      { name: 'Gugak', description: 'Traditional Korean music and sound culture.' },
      { name: 'Hanok Alley', description: 'A place where traditional housing and city streets meet.' },
      { name: 'Local Heritage', description: 'Cultural value found beyond the most famous landmarks.' }
    ]
  },
  'modern-seoul-performing-heritage': {
    title: 'Modern Seoul and Performing Heritage',
    subtitle: '근대 서울과 전통예술 코스',
    time: 'About 3 hours',
    walking: 'Low',
    fee: 'Paid options',
    reason: 'A good evening route that connects modern Seoul history with traditional performing arts.',
    summary: 'See the modern layers of Seoul at Deoksugung, walk the stonewall road, then finish with a traditional performance.',
    tip: 'Reserve performance tickets in advance and leave enough time for the stonewall walk.',
    flow: ['Deoksugung Palace', 'Deoksugung Stonewall Road', 'National Jeongdong Theater'],
    convenienceLabels: ['English available', 'Popular with visitors', 'Check performance booking'],
    keywords: [
      { name: 'Korean Empire', description: 'A keyword for understanding royal culture during Korea’s modern transition.' },
      { name: 'Historic Walk', description: 'A way to read Seoul’s history through city streets.' },
      { name: 'Performing Heritage', description: 'Traditional arts experienced through the stage.' }
    ]
  }
};

const EN_RESOURCE_TRANSLATIONS = {
  'gyeongbokgung-palace': {
    category: 'Palace',
    region: 'Jongno-gu',
    address: '161 Sajik-ro, Jongno-gu, Seoul',
    feeType: 'Paid',
    indoorOutdoor: 'Outdoor',
    walkingLevel: 'Moderate',
    verifiedStatus: 'Official check needed',
    bookingNote: 'General admission is usually possible on site, but special programs should be checked in advance.',
    aiSimpleExplanation: 'A representative Joseon palace for understanding royal culture and palace architecture.',
    aiWhyItMatters: 'Visitors can directly experience the central space of Korean royal culture and the meaning of its architecture and rituals.',
    aiVisitTip: 'Check admission hours, closing days, and special viewing programs before visiting.'
  },
  'national-palace-museum': {
    category: 'Museum',
    region: 'Jongno-gu',
    address: '12 Hyoja-ro, Jongno-gu, Seoul',
    feeType: 'Free',
    indoorOutdoor: 'Indoor',
    walkingLevel: 'Low',
    verifiedStatus: 'Official check needed',
    bookingNote: 'Exhibitions and education programs should be checked by schedule.',
    aiSimpleExplanation: 'A museum where royal artifacts and court rituals are easy to understand.',
    aiWhyItMatters: 'It helps visitors learn the meaning of royal objects before entering the palace.',
    aiVisitTip: 'Start with exhibits on royal rituals and symbols to better understand the palace route.'
  },
  'national-folk-museum': {
    category: 'Museum',
    region: 'Jongno-gu',
    address: '37 Samcheong-ro, Jongno-gu, Seoul',
    feeType: 'Free',
    indoorOutdoor: 'Indoor',
    walkingLevel: 'Low',
    verifiedStatus: 'Official check needed',
    bookingNote: 'Check official sources for exhibition hours before visiting.',
    aiSimpleExplanation: 'A museum for understanding Korean everyday life and folk culture.',
    aiWhyItMatters: 'It helps compare royal culture with everyday culture.',
    aiVisitTip: 'Focus on daily-life exhibits to connect traditional culture more easily.'
  },
  'tongin-market': {
    category: 'Traditional Market',
    region: 'Jongno-gu',
    address: 'Jahamun-ro 15-gil area, Jongno-gu, Seoul',
    feeType: 'Optional spending',
    indoorOutdoor: 'Indoor/outdoor',
    walkingLevel: 'Low',
    verifiedStatus: 'Official check needed',
    bookingNote: 'Check opening hours and holidays before visiting.',
    aiSimpleExplanation: 'A place where local market culture shows how tradition meets daily life today.',
    aiWhyItMatters: 'It shows how traditional culture continues as living local culture.',
    aiVisitTip: 'Check market hours and available experiences in advance.'
  },
  unhyeongung: {
    category: 'Royal Residence',
    region: 'Jongno-gu',
    address: 'Samil-daero area, Jongno-gu, Seoul',
    feeType: 'Free',
    indoorOutdoor: 'Indoor/outdoor',
    walkingLevel: 'Low',
    verifiedStatus: 'Official check needed',
    bookingNote: 'Events and experience programs should be checked in advance.',
    aiSimpleExplanation: 'A space for feeling the atmosphere of royal family life outside the palace.',
    aiWhyItMatters: 'It shows that royal culture also connects to living spaces beyond the palace.',
    aiVisitTip: 'Check interior exhibitions and event schedules together.'
  },
  'seoul-folk-music-museum': {
    category: 'Museum',
    region: 'Jongno-gu',
    address: 'Yulgok-ro area, Jongno-gu, Seoul',
    feeType: 'Free',
    indoorOutdoor: 'Indoor',
    walkingLevel: 'Low',
    verifiedStatus: 'Official check needed',
    bookingNote: 'Experience programs should be checked by schedule.',
    aiSimpleExplanation: 'A small museum where visitors can encounter Korean folk songs and traditional sound culture.',
    aiWhyItMatters: 'It helps visitors understand heritage through sound and sensory experience.',
    aiVisitTip: 'Take time with listening-based exhibits.'
  },
  'deoksugung-palace': {
    category: 'Palace',
    region: 'Jung-gu',
    address: 'Sejong-daero area, Jung-gu, Seoul',
    feeType: 'Paid',
    indoorOutdoor: 'Outdoor',
    walkingLevel: 'Low',
    verifiedStatus: 'Official check needed',
    bookingNote: 'Special viewing and events should be checked in advance.',
    aiSimpleExplanation: 'A palace where visitors can feel the atmosphere of the Korean Empire and modern Seoul.',
    aiWhyItMatters: 'It connects traditional royal culture with the changes of a modern city.',
    aiVisitTip: 'Plan Deoksugung, Seokjojeon, and the stonewall road together.'
  }
};

const EN_SUPPORT_TRANSLATIONS = {
  airport: {
    title: 'Airport Transfer Information',
    description: 'Basic ways to move from Incheon or Gimpo Airport into central Seoul.',
    points: ['Choose AREX airport railroad, airport bus, or taxi based on arrival time and luggage.', 'Check the last train or bus and your accommodation address before leaving.']
  },
  tmoney: {
    title: 'Transit Card / T-money Guide',
    description: 'Prepare a transit card for subways, buses, and convenience stores.',
    points: ['You can buy and recharge cards at airports, subway stations, and convenience stores.', 'Transfer discounts usually require tapping the same card.']
  },
  emergency: {
    title: 'Emergency Contacts',
    description: 'Numbers to check first for emergency, lost items, or safety issues.',
    points: ['Police 112, fire/ambulance 119, and travel interpretation 1330 are the key numbers.', 'Open your map app first to confirm your current location and accommodation address.']
  },
  translation: {
    title: 'Translation / Interpretation Help',
    description: 'Help options when communication is difficult on site.',
    points: ['The 1330 travel helpline can support travel questions and interpretation.', 'Prepare short phrases for place names, reservation names, allergies, and destinations.']
  },
  'tourist-info': {
    title: 'Tourist Information Centers',
    description: 'Use nearby centers for maps, transit questions, festivals, and on-site help.',
    points: ['Check tourist centers near major areas such as Myeong-dong, Gwanghwamun, and Hongdae.', 'Confirm language support and hours through official information before visiting.']
  },
  rainy: {
    title: 'Weather / Rainy-Day Backup Routes',
    description: 'Switch to indoor-oriented routes during rain, heat, or cold.',
    points: ['Prioritize museums, exhibitions, theaters, and indoor market sections.', 'If umbrella travel is difficult, open places near subway stations first.']
  }
};

const MAP_POSITIONS = [
  { left: '18%', top: '24%' },
  { left: '42%', top: '38%' },
  { left: '61%', top: '55%' },
  { left: '74%', top: '70%' }
];

let plannerStep = 1;
let toastTimer;
let ariMessages = [];
let timeImageIndex = 0;
let timeImagePeriod = '';
let timeImageTimer = null;

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function storageGet(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    return fallback;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // Some local file previews restrict storage. The UI still works without persistence.
  }
}

function storageJsonGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function storageJsonSet(key, value) {
  storageSet(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function showToast(message) {
  const toast = qs('#toast');
  if (!toast) return;
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('is-visible');
  toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

function getCurrentLanguage() {
  return LANGUAGES[storageGet(STORAGE_KEYS.language, 'KR')] ? storageGet(STORAGE_KEYS.language, 'KR') : 'KR';
}

function textFrom(value, language = getCurrentLanguage()) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    return value[language] || value.KR || value.EN || '';
  }
  return value || '';
}

function t(path, fallback = '') {
  const language = getCurrentLanguage();
  const read = (source) => path.split('.').reduce((value, key) => value?.[key], source);
  return read(UI_COPY[language]) ?? read(UI_COPY.KR) ?? fallback;
}

function setText(selector, value) {
  qsa(selector).forEach((element) => {
    element.textContent = value;
  });
}

function applyStaticTranslations() {
  const language = getCurrentLanguage();
  document.documentElement.lang = language === 'EN' ? 'en' : 'ko';

  Object.entries({
    home: 'tabs.home',
    recommend: 'tabs.recommend',
    map: 'tabs.map',
    support: 'tabs.support',
    passport: 'tabs.passport'
  }).forEach(([tab, key]) => {
    setText(`[data-tab="${tab}"] strong`, t(key));
  });

  qsa('[data-language="KR"]').forEach((button) => {
    button.textContent = '한국어';
  });
  qsa('[data-language="EN"]').forEach((button) => {
    button.textContent = 'English';
  });

  const confirm = qs('[data-language-confirm]');
  if (confirm) confirm.textContent = t('home.languageConfirm');

  const fileName = getCurrentFileName();

  if (fileName === 'index.html') {
    qs('.quick-action-list')?.setAttribute('aria-label', t('home.quickLabel'));
    setText('.intro-card h2', t('home.introTitle'));
    setText('.intro-card p', t('home.introBody'));
    qsa('.principle-list span').forEach((element, index) => {
      element.textContent = t('home.principles')[index] || element.textContent;
    });

    const quickActions = qsa('.quick-action');
    [
      ['home.todayRoute', 'home.todayRouteDesc'],
      ['home.rainyRoute', 'home.rainyRouteDesc'],
      ['home.support', 'home.supportDesc']
    ].forEach(([titleKey, descKey], index) => {
      const action = quickActions[index];
      if (!action) return;
      const title = qs('strong', action);
      const desc = qs('small', action);
      if (title) title.textContent = t(titleKey);
      if (desc) desc.textContent = t(descKey);
    });

    const links = qsa('.home-more-links a');
    if (links[0]) links[0].textContent = t('home.about');
    if (links[1]) links[1].textContent = t('home.data');
    setText('.bottom-cta .button-primary', t('home.start'));
  }

  if (fileName === 'routes.html') {
    setText('.app-header .brand strong', t('routes.header'));
    setText('.app-header .brand small', t('routes.headerSub'));
    setText('.app-header .header-pill', t('routes.edit'));
    setText('.page-title-card .eyebrow', t('routes.eyebrow'));
    setText('.page-title-card h1', t('routes.title'));
    setText('.page-title-card > p:not(.eyebrow)', t('routes.body'));
    setText('.condition-card > span', t('routes.condition'));
  }

  if (fileName === 'route-detail.html') {
    setText('.app-header .brand strong', t('detail.header'));
    setText('.app-header .brand small', t('detail.headerSub'));
    setText('[data-route-action="save-current"]', t('detail.save'));
    setText('.route-summary-hero .eyebrow', t('detail.selected'));
    const headings = qsa('.detail-main .mobile-card h2');
    [
      'detail.reason',
      'detail.flow',
      'detail.aiGuide',
      'detail.keywords',
      'detail.visitTip'
    ].forEach((key, index) => {
      if (headings[index]) headings[index].textContent = t(key);
    });
    setText('.verification-warning', t('detail.warning'));
    setText('[data-route-action="passport-current"]', t('detail.passport'));
  }

  if (fileName === 'map.html') {
    setText('.app-header .brand strong', t('map.header'));
    setText('.app-header .brand small', t('map.headerSub'));
    setText('.app-header .header-pill', t('map.changeRoute'));
    setText('.page-title-card .eyebrow', t('map.eyebrow'));
    setText('.page-title-card > p:not(.eyebrow)', t('map.body'));
    setText('.mobile-card h2', t('map.timeline'));

    const actions = qsa('.action-card');
    const actionData = [
      ['map.lessWalking', 'map.lessWalkingToast'],
      ['map.rainyIndoor', 'map.rainyIndoorToast'],
      ['map.nearby', 'map.nearbyToast']
    ];
    actionData.forEach(([labelKey, toastKey], index) => {
      const action = actions[index];
      if (!action) return;
      action.textContent = t(labelKey);
      action.dataset.toast = t(toastKey);
    });
  }

  if (fileName === 'support.html') {
    setText('.app-header .brand strong', t('support.header'));
    setText('.app-header .brand small', t('support.headerSub'));
    setText('.app-header .header-pill', t('support.list'));
    setText('.emergency-card .eyebrow', t('support.eyebrow'));
    setText('.emergency-card h1', t('support.title'));
    setText('.emergency-card > p:not(.eyebrow)', t('support.body'));

    const buttons = qsa('.emergency-grid button');
    ['support.emergency', 'support.tmoney', 'support.translation', 'support.rainy'].forEach((key, index) => {
      if (buttons[index]) buttons[index].textContent = t(key);
    });
  }

  if (fileName === 'planner.html') {
    setText('[data-planner-prev]', t('planner.prev'));
    setText('[data-planner-next]', t('planner.next'));
    setText('[data-planner-finish]', t('planner.finish'));
  }
}

function renderLocalizedContent() {
  applyStaticTranslations();
  renderHomeTimeHero();
  renderRouteCards();
  renderRouteDetail();
  renderMap();
  renderWeather();
  renderSupport();
  renderPassport();
  renderCultureData();
  renderConditionSummary();
  renderAriMessages();
  updatePlannerStep();
}

function setLanguage(language, options = {}) {
  const nextLanguage = LANGUAGES[language] ? language : 'KR';
  storageSet(STORAGE_KEYS.language, nextLanguage);

  qsa('[data-language]').forEach((button) => {
    const isActive = button.dataset.language === nextLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  qsa('[data-language-trigger]').forEach((button) => {
    button.textContent = nextLanguage;
  });

  applyStaticTranslations();
  if (options.rerender !== false) renderLocalizedContent();
}

function saveUserPreference() {
  const preference = { ...USER_PREFERENCE };

  qsa('[data-pref-group]').forEach((group) => {
    const key = group.dataset.prefGroup;
    const selected = qsa('.choice-button.is-active', group).map((button) => button.dataset.value);
    preference[key] = group.dataset.multiple === 'true' ? selected : selected[0];
  });

  const request = qs('[data-pref-request]');
  if (request) preference.request = request.value.trim();

  storageJsonSet(STORAGE_KEYS.preference, preference);
  return preference;
}

function loadUserPreference() {
  return storageJsonGet(STORAGE_KEYS.preference, { ...USER_PREFERENCE });
}

function translatePreferenceValue(value) {
  if (getCurrentLanguage() !== 'EN') return value;
  const map = {
    '종로구': 'Jongno-gu',
    '중구': 'Jung-gu',
    '종로+중구': 'Jongno + Jung-gu',
    '2시간': '2 hours',
    '3시간': '3 hours',
    '반나절': 'Half day',
    '하루': 'Full day',
    '궁궐': 'Palace',
    '한옥': 'Hanok',
    '전통시장': 'Traditional market',
    '공예': 'Craft',
    '공연': 'Performance',
    '박물관': 'Museum',
    '무료 위주': 'Mostly free',
    '유료 가능': 'Paid options',
    '상관없음': 'Any',
    '적게 걷기': 'Less walking',
    '보통': 'Moderate',
    '많이 걸어도 괜찮음': 'Long walks OK',
    '실내': 'Indoor',
    '실외': 'Outdoor'
  };
  return map[value] || value;
}

function formatPreference(preference) {
  const interests = Array.isArray(preference.interests)
    ? preference.interests.map(translatePreferenceValue).join(', ')
    : translatePreferenceValue(preference.interests);

  return [
    translatePreferenceValue(preference.region),
    translatePreferenceValue(preference.time),
    interests,
    translatePreferenceValue(preference.budget),
    translatePreferenceValue(preference.walking)
  ]
    .filter(Boolean)
    .join(' · ');
}

function renderConditionSummary() {
  const preference = loadUserPreference();
  qsa('[data-condition-summary]').forEach((element) => {
    element.textContent = formatPreference(preference);
  });
}

function findRouteById(routeId) {
  return ROUTE_DATA.find((route) => route.id === routeId) || ROUTE_DATA[0];
}

function findResourceById(resourceId) {
  return CULTURE_RESOURCES.find((resource) => resource.id === resourceId);
}

function getRouteResources(route) {
  return route.resourceIds.map(findResourceById).filter(Boolean);
}

function getRouteFromUrlOrStorage() {
  const params = new URLSearchParams(window.location.search);
  const routeId = params.get('id') || storageGet(STORAGE_KEYS.selectedRoute, ROUTE_DATA[0].id);
  return findRouteById(routeId);
}

function renderConvenienceBadges(convenience) {
  if (!convenience) return '';
  const labels = convenience.labels || [
    convenience.englishAvailable
      ? (getCurrentLanguage() === 'EN' ? 'English available' : '영어 안내 가능')
      : (getCurrentLanguage() === 'EN' ? 'Check English support' : '영어 안내 확인 필요'),
    convenience.foreignerPopular
      ? (getCurrentLanguage() === 'EN' ? 'Visitor favorite' : '외국인 인기')
      : (getCurrentLanguage() === 'EN' ? 'Hidden culture resource' : '숨은 문화자원'),
    convenience.reservationRequired
      ? (getCurrentLanguage() === 'EN' ? 'Reservation needed' : '예약 필요')
      : (getCurrentLanguage() === 'EN' ? 'No reservation needed' : '예약 불필요')
  ];
  return `<div class="convenience-badges">${labels.map((label) => `<span class="convenience-badge">${escapeHtml(label)}</span>`).join('')}</div>`;
}

function resourceConvenience(resource) {
  const language = getCurrentLanguage();
  return {
    labels: [
      resource.englishAvailable ? (language === 'EN' ? 'English available' : '영어 안내 가능') : (language === 'EN' ? 'Check English support' : '영어 안내 확인 필요'),
      resource.foreignerPopular ? (language === 'EN' ? 'Visitor favorite' : '외국인 인기') : (language === 'EN' ? 'Hidden culture resource' : '숨은 문화자원'),
      resource.reservationRequired ? (language === 'EN' ? 'Reservation needed' : '예약 필요') : (language === 'EN' ? 'No reservation needed' : '예약 불필요'),
      resource.verifiedStatus
    ]
  };
}

function imageExistsFallback(event) {
  const img = event.target;
  const wrapper = img.closest('.image-frame');
  if (!wrapper) return;

  wrapper.classList.add('is-missing');
  wrapper.innerHTML = `
    <div class="image-placeholder-content">
      <strong>AI Visual Guide</strong>
      <small>이미지 준비 중</small>
    </div>
  `;
}

window.imageExistsFallback = imageExistsFallback;

function renderImageFrame({ src, alt, notice, className = '' }) {
  const cleanClassName = className ? ` ${escapeHtml(className)}` : '';
  const fallbackNotice = notice || '이미지 준비 중';

  if (!src) {
    return `
      <div class="image-frame image-placeholder${cleanClassName}">
        <div class="image-placeholder-content">
          <strong>AI Visual Guide</strong>
          <small>${escapeHtml(fallbackNotice)}</small>
        </div>
      </div>
    `;
  }

  return `
    <div class="image-frame${cleanClassName}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt || '')}" loading="lazy" onerror="imageExistsFallback(event)">
      <span class="ai-image-notice">${escapeHtml(notice || 'AI 생성 이미지 · 이해 보조 이미지')}</span>
    </div>
  `;
}

function getSeoulHour(date = new Date()) {
  try {
    const hourPart = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Seoul',
      hour: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(date).find((part) => part.type === 'hour');

    return Number(hourPart?.value ?? date.getHours());
  } catch (error) {
    return (date.getUTCHours() + 9) % 24;
  }
}

function getTimePeriod(date = new Date()) {
  const hour = getSeoulHour(date);
  if (hour >= 6 && hour <= 16) return 'day';
  if (hour >= 17 && hour <= 20) return 'evening';
  return 'night';
}

function getHomeTimeImageUrls(config) {
  if (Array.isArray(config.imageUrls) && config.imageUrls.length) return config.imageUrls;
  return config.imageUrl ? [config.imageUrl] : [];
}

function syncTimeImagePeriod(period = getTimePeriod()) {
  const nextPeriod = HOME_TIME_IMAGES[period] ? period : 'day';
  if (timeImagePeriod !== nextPeriod) {
    timeImagePeriod = nextPeriod;
    timeImageIndex = 0;
  }
  return nextPeriod;
}

function getHomeTimeImageUrl(config, index = timeImageIndex) {
  const imageUrls = getHomeTimeImageUrls(config);
  if (!imageUrls.length) return '';
  return imageUrls[index % imageUrls.length];
}

function applyTimeBackground(period = getTimePeriod(), imageUrlOverride = '') {
  const nextPeriod = HOME_TIME_IMAGES[period] ? period : 'day';
  const config = HOME_TIME_IMAGES[nextPeriod];
  const imageUrl = imageUrlOverride || getHomeTimeImageUrl(config);

  document.body.classList.remove('time-day', 'time-evening', 'time-night', 'time-image-missing');
  document.body.classList.add(`time-${nextPeriod}`);

  if (!imageUrl) {
    document.documentElement.style.setProperty('--time-bg-image', 'none');
    document.body.classList.add('time-image-missing');
    return;
  }

  document.documentElement.style.setProperty('--time-bg-image', `url("${imageUrl}")`);

  const tester = new Image();
  tester.onload = () => document.body.classList.remove('time-image-missing');
  tester.onerror = () => {
    document.documentElement.style.setProperty('--time-bg-image', 'none');
    document.body.classList.add('time-image-missing');
  };
  tester.src = imageUrl;
}

function renderHomeTimeHero(periodOverride = getTimePeriod(), imageUrlOverride = '') {
  const hero = qs('[data-home-time-hero]');
  if (!hero) return;

  const period = HOME_TIME_IMAGES[periodOverride] ? periodOverride : getTimePeriod();
  const config = HOME_TIME_IMAGES[period];
  const label = textFrom(config.label);
  const imageUrl = imageUrlOverride || getHomeTimeImageUrl(config);

  hero.innerHTML = `
    ${renderImageFrame({
      src: imageUrl,
      alt: `${label} ${getCurrentLanguage() === 'EN' ? 'Korean heritage mood image' : '시간대 전통문화 추천 이미지'}`,
      notice: t('common.imageNotice'),
      className: 'home-time-image'
    })}
    <div class="home-time-copy">
      <span>${escapeHtml(t('home.timeEyebrow'))} · ${escapeHtml(label)}</span>
      <h1>${escapeHtml(textFrom(config.title))}</h1>
      <p>${escapeHtml(textFrom(config.description))}</p>
    </div>
  `;
}

function updateTimeVisuals({ advance = false } = {}) {
  const period = syncTimeImagePeriod(getTimePeriod());
  const config = HOME_TIME_IMAGES[period];
  const imageUrls = getHomeTimeImageUrls(config);

  if (advance && imageUrls.length > 1) {
    timeImageIndex = (timeImageIndex + 1) % imageUrls.length;
  }

  const imageUrl = getHomeTimeImageUrl(config);
  applyTimeBackground(period, imageUrl);
  renderHomeTimeHero(period, imageUrl);
}

function startTimeImageRotation() {
  window.clearInterval(timeImageTimer);
  updateTimeVisuals();
  timeImageTimer = window.setInterval(() => {
    updateTimeVisuals({ advance: true });
  }, 5000);
}

function renderRouteImage(route, extraClass = '') {
  return renderImageFrame({
    src: route.imageUrl,
    alt: route.imageAlt,
    notice: t('common.imageNotice'),
    className: `route-image ${extraClass}`.trim()
  });
}

function renderPlaceImage(resource) {
  return renderImageFrame({
    src: resource.imageUrl,
    alt: resource.imageAlt,
    notice: t('common.imageNotice'),
    className: 'route-image place-image'
  });
}

function localizePlaceName(placeName) {
  return getCurrentLanguage() === 'EN' ? (PLACE_NAME_EN[placeName] || placeName) : placeName;
}

function getRouteView(route) {
  if (getCurrentLanguage() !== 'EN') {
    return {
      ...route,
      subtitle: route.englishTitle,
      displayFlow: route.flow,
      displayKeywords: route.keywords,
      displayConvenience: route.convenience
    };
  }

  const translated = EN_ROUTE_TRANSLATIONS[route.id] || {};
  return {
    ...route,
    title: translated.title || route.englishTitle || route.title,
    subtitle: translated.subtitle || route.title,
    time: translated.time || route.time,
    walking: translated.walking || route.walking,
    fee: translated.fee || route.fee,
    reason: translated.reason || route.reason,
    summary: translated.summary || route.englishExplanation || route.summary,
    englishExplanation: route.summary,
    tip: translated.tip || route.tip,
    displayFlow: translated.flow || route.flow.map(localizePlaceName),
    displayKeywords: translated.keywords || route.keywords,
    displayConvenience: {
      ...route.convenience,
      labels: translated.convenienceLabels || route.convenience?.labels
    }
  };
}

function getResourceView(resource) {
  if (getCurrentLanguage() !== 'EN') {
    return {
      ...resource,
      displayName: resource.nameKo,
      secondaryName: resource.nameEn
    };
  }

  const translated = EN_RESOURCE_TRANSLATIONS[resource.id] || {};
  return {
    ...resource,
    ...translated,
    displayName: resource.nameEn || resource.nameKo,
    secondaryName: resource.nameKo
  };
}

function renderRouteCards() {
  const container = qs('[data-route-list]');
  if (!container) return;

  container.innerHTML = ROUTE_DATA.map((route) => {
    const routeView = getRouteView(route);
    return `
    <article class="route-card">
      ${renderRouteImage(route)}
      <div class="route-card-top">
        <div>
          <h2>${escapeHtml(routeView.title)}</h2>
          <p>${escapeHtml(routeView.subtitle)}</p>
        </div>
        <span class="score-badge">${route.score}</span>
      </div>
      <div class="route-card-body">
        <div class="meta-row">
          <span>${escapeHtml(routeView.time)}</span>
          <span>${escapeHtml(routeView.walking)}</span>
          <span>${escapeHtml(routeView.fee)}</span>
        </div>
        ${renderConvenienceBadges(routeView.displayConvenience)}
        <div class="recommendation-reason">
          <span>${escapeHtml(t('routes.reason'))}</span>
          <p>${escapeHtml(routeView.reason)}</p>
        </div>
        <p class="flow-text">${escapeHtml(routeView.displayFlow.join(' -> '))}</p>
        <div class="route-actions">
          <button class="button button-primary button-block" type="button" data-select-route="${escapeHtml(route.id)}">${escapeHtml(t('routes.select'))}</button>
          <div class="route-actions two">
            <a class="button button-secondary" href="route-detail.html?id=${encodeURIComponent(route.id)}" data-route-link="${escapeHtml(route.id)}">${escapeHtml(t('routes.detail'))}</a>
            <a class="button button-secondary" href="map.html?id=${encodeURIComponent(route.id)}" data-map-link="${escapeHtml(route.id)}">${escapeHtml(t('routes.map'))}</a>
          </div>
        </div>
      </div>
    </article>
  `;
  }).join('');
}

function saveSelectedRoute(routeId) {
  const route = findRouteById(routeId);
  storageSet(STORAGE_KEYS.selectedRoute, route.id);
  return route;
}

function loadSelectedRoute() {
  return findRouteById(storageGet(STORAGE_KEYS.selectedRoute, ROUTE_DATA[0].id));
}

function getSelectedMapService() {
  const saved = storageGet(STORAGE_KEYS.mapService, 'google');
  return MAP_SERVICES[saved] ? saved : 'google';
}

function getMapServiceLabel(service = getSelectedMapService()) {
  return textFrom(MAP_SERVICES[service]?.label || MAP_SERVICES.google.label);
}

function findResourceByPlaceName(placeName) {
  return CULTURE_RESOURCES.find((resource) =>
    resource.nameKo === placeName ||
    resource.nameEn === placeName ||
    PLACE_NAME_EN[resource.nameKo] === placeName
  );
}

function getMapTargetForPlace(placeName) {
  const resource = findResourceByPlaceName(placeName);
  const displayName = resource ? getResourceView(resource).displayName : localizePlaceName(placeName);
  const searchName = resource ? `${resource.nameKo} ${resource.region || '서울'}` : `${placeName} 서울`;

  return {
    name: displayName,
    query: getCurrentLanguage() === 'EN' ? `${displayName} Seoul` : searchName,
    latitude: resource?.latitude,
    longitude: resource?.longitude
  };
}

function createMapPlaceUrl(target, service = getSelectedMapService()) {
  const hasCoordinates = Number.isFinite(target.latitude) && Number.isFinite(target.longitude);
  const query = target.query || target.name;

  if (service === 'google') {
    const googleQuery = hasCoordinates ? `${target.latitude},${target.longitude}` : query;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleQuery)}`;
  }

  if (service === 'naver') {
    if (hasCoordinates) return `https://map.naver.com/p/?c=${target.longitude},${target.latitude},15,0,0,0,dh`;
    return `https://map.naver.com/p/search/${encodeURIComponent(query)}`;
  }

  if (service === 'kakao') {
    if (hasCoordinates) return `https://map.kakao.com/link/map/${encodeURIComponent(target.name)},${target.latitude},${target.longitude}`;
    return `https://map.kakao.com/link/search/${encodeURIComponent(query)}`;
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function createMapRouteUrl(route, service = getSelectedMapService()) {
  const targets = route.flow.map(getMapTargetForPlace);
  if (!targets.length) return '#';

  if (service !== 'google' || targets.length === 1) {
    return createMapPlaceUrl(targets[0], service);
  }

  const toGoogleQuery = (target) =>
    Number.isFinite(target.latitude) && Number.isFinite(target.longitude)
      ? `${target.latitude},${target.longitude}`
      : target.query;

  const [origin, ...rest] = targets;
  const destination = rest.pop() || origin;
  const params = new URLSearchParams({
    api: '1',
    origin: toGoogleQuery(origin),
    destination: toGoogleQuery(destination),
    travelmode: 'walking'
  });

  if (rest.length) {
    params.set('waypoints', rest.map(toGoogleQuery).join('|'));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function setMapService(service, options = {}) {
  const nextService = MAP_SERVICES[service] ? service : 'google';
  storageSet(STORAGE_KEYS.mapService, nextService);
  renderMap(getRouteFromUrlOrStorage());
  if (options.toast) showToast(t('map.savedToast'));
}

function renderMapServicePanel(route) {
  const panel = qs('[data-map-service-panel]');
  if (!panel) return;

  const selectedService = getSelectedMapService();
  panel.innerHTML = `
    <div class="map-service-heading">
      <div>
        <span>${escapeHtml(t('map.selector'))}</span>
        <strong>${escapeHtml(getMapServiceLabel(selectedService))}</strong>
      </div>
      <small>${escapeHtml(t('map.selectorHint'))}</small>
    </div>
    <div class="map-service-options" role="group" aria-label="${escapeHtml(t('map.selector'))}">
      ${Object.entries(MAP_SERVICES).map(([service, config]) => `
        <button class="map-service-button ${service === selectedService ? 'is-active' : ''}" type="button" data-map-service="${escapeHtml(service)}" aria-pressed="${service === selectedService}">
          ${escapeHtml(textFrom(config.label))}
        </button>
      `).join('')}
    </div>
    <a class="map-service-link" href="${escapeHtml(createMapRouteUrl(route, selectedService))}" target="_blank" rel="noopener">
      ${escapeHtml(t('map.openFirst'))}
    </a>
  `;
}

function updateMapOpenLinks(route) {
  const selectedService = getSelectedMapService();
  qsa('[data-map-open-route]').forEach((link) => {
    link.href = createMapRouteUrl(route, selectedService);
    link.textContent = selectedService === 'google' ? t('map.openRoute') : t('map.openFirst');
  });
}

function renderMap(route = getRouteFromUrlOrStorage()) {
  const canvas = qs('[data-map-canvas]');
  const timeline = qs('[data-map-timeline]');
  const title = qs('[data-map-route-title]');
  const routeView = getRouteView(route);

  if (title) title.textContent = routeView.title || t('map.fallbackTitle');
  renderMapServicePanel(route);
  updateMapOpenLinks(route);

  if (canvas) {
    canvas.innerHTML = route.flow.map((place, index) => {
      const position = MAP_POSITIONS[index] || MAP_POSITIONS[MAP_POSITIONS.length - 1];
      return `
        <span class="map-pin" style="--pin-left:${position.left};--pin-top:${position.top};"><span>${index + 1}</span></span>
        <span class="map-label" style="--pin-left:${position.left};--pin-top:${position.top};">${escapeHtml(localizePlaceName(place))}</span>
      `;
    }).join('');
  }

  if (timeline) {
    const selectedService = getSelectedMapService();
    timeline.innerHTML = route.flow.map((place) => {
      const target = getMapTargetForPlace(place);
      return `
        <li>
          <span>${escapeHtml(target.name)}</span>
          <a href="${escapeHtml(createMapPlaceUrl(target, selectedService))}" target="_blank" rel="noopener">${escapeHtml(t('map.openPlace'))}</a>
        </li>
      `;
    }).join('');
  }
}

function renderRouteDetail() {
  if (!qs('[data-detail-title]')) return;
  const route = getRouteFromUrlOrStorage();
  const resources = getRouteResources(route);
  const routeView = getRouteView(route);
  saveSelectedRoute(route.id);

  const assignments = [
    ['[data-detail-title]', routeView.title],
    ['[data-detail-english]', routeView.subtitle],
    ['[data-detail-score]', route.score],
    ['[data-detail-time]', routeView.time],
    ['[data-detail-walking]', routeView.walking],
    ['[data-detail-fee]', routeView.fee],
    ['[data-detail-summary]', routeView.summary],
    ['[data-detail-explanation]', routeView.englishExplanation],
    ['[data-detail-tip]', routeView.tip],
    ['[data-detail-source]', route.source]
  ];

  assignments.forEach(([selector, value]) => {
    const element = qs(selector);
    if (element) element.textContent = value;
  });

  const scoreElement = qs('[data-detail-score]');
  if (scoreElement?.parentElement) {
    scoreElement.parentElement.innerHTML = `<strong data-detail-score>${escapeHtml(route.score)}</strong>${escapeHtml(t('detail.scoreSuffix'))}`;
  }

  const imageSlot = qs('[data-detail-image]');
  if (imageSlot) imageSlot.innerHTML = renderRouteImage(route, 'detail-route-image');

  const reason = qs('[data-detail-reason]');
  if (reason) reason.textContent = route.reason;

  const convenience = qs('[data-detail-convenience]');
  if (convenience) convenience.innerHTML = renderConvenienceBadges(routeView.displayConvenience);

  const flow = qs('[data-detail-flow]');
  if (flow) flow.innerHTML = route.flow.map((place) => `<li>${escapeHtml(localizePlaceName(place))}</li>`).join('');

  const placeCards = qs('[data-place-cards]');
  if (placeCards) {
    const selectedService = getSelectedMapService();
    placeCards.innerHTML = resources.map((resource, index) => {
      const resourceView = getResourceView(resource);
      const target = getMapTargetForPlace(resource.nameKo);
      return `
      <article class="place-card">
        ${renderPlaceImage(resource)}
        <h2>${index + 1}. ${escapeHtml(resourceView.displayName)}</h2>
        <p class="en">${escapeHtml(resourceView.secondaryName)}</p>
        <div class="meta-row">
          <span>${escapeHtml(resourceView.category)}</span>
          <span>${escapeHtml(resourceView.feeType)}</span>
          <span>${escapeHtml(resourceView.indoorOutdoor)}</span>
          <span>${escapeHtml(resourceView.walkingLevel)}</span>
        </div>
        ${renderConvenienceBadges(resourceConvenience(resourceView))}
        <p>${escapeHtml(resourceView.aiSimpleExplanation)}</p>
        <p><strong>${escapeHtml(t('detail.why'))}</strong> ${escapeHtml(resourceView.aiWhyItMatters)}</p>
        <p><strong>${escapeHtml(t('detail.tip'))}</strong> ${escapeHtml(resourceView.aiVisitTip)}</p>
        <p><strong>${escapeHtml(t('detail.booking'))}</strong> ${escapeHtml(resourceView.bookingNote)}</p>
        <a class="button button-secondary button-block place-map-link" href="${escapeHtml(createMapPlaceUrl(target, selectedService))}" target="_blank" rel="noopener">${escapeHtml(getMapServiceLabel(selectedService))} ${escapeHtml(t('map.openPlace'))}</a>
      </article>
    `;
    }).join('');
  }

  const keywordList = qs('[data-keyword-list]');
  if (keywordList) {
    keywordList.innerHTML = routeView.displayKeywords.map((keyword) => `
      <div class="keyword-item">
        <strong>${escapeHtml(keyword.name)}</strong>
        <span>${escapeHtml(keyword.description)}</span>
      </div>
    `).join('');
  }

  renderMap(route);
}

function renderWeather() {
  const container = qs('[data-weather-list]');
  if (!container) return;

  container.innerHTML = WEATHER_DATA.map((item) => `
    <article class="weather-day">
      <span class="weather-icon">${escapeHtml(item.icon)}</span>
      <div>
        <strong>${escapeHtml(item.day)} · ${escapeHtml(item.sky)}</strong>
        <small>${escapeHtml(item.temp)} · 강수확률 ${escapeHtml(item.rain)}</small>
      </div>
    </article>
  `).join('');
}

function renderSupport() {
  const container = qs('[data-support-list]');
  if (!container) return;

  container.innerHTML = SUPPORT_DATA.map((item) => {
    const translated = getCurrentLanguage() === 'EN' ? (EN_SUPPORT_TRANSLATIONS[item.id] || item) : item;
    return `
    <article class="support-card" data-support-card="${escapeHtml(item.id)}">
      <span class="support-card-kicker">${escapeHtml(t('support.action'))}</span>
      <h2>${escapeHtml(translated.title)}</h2>
      <p>${escapeHtml(translated.description)}</p>
      <ul class="support-points">
        ${(translated.points || []).map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
      </ul>
    </article>
  `;
  }).join('');
}

function renderPassport() {
  const savedRouteCard = qs('[data-saved-route]');
  const stamps = qs('[data-passport-stamps]');
  const savedRouteIds = storageJsonGet(STORAGE_KEYS.savedRoutes, []);
  const selectedRoute = savedRouteIds.length ? findRouteById(savedRouteIds[savedRouteIds.length - 1]) : null;

  if (savedRouteCard && selectedRoute) {
    savedRouteCard.innerHTML = `
      <span>저장한 코스</span>
      ${renderRouteImage(selectedRoute)}
      <strong>${escapeHtml(selectedRoute.title)}</strong>
      <p>${escapeHtml(selectedRoute.time)} · ${escapeHtml(selectedRoute.walking)} · ${escapeHtml(selectedRoute.fee)}</p>
      ${renderConvenienceBadges(selectedRoute.convenience)}
      <a class="button button-primary button-block" href="route-detail.html?id=${encodeURIComponent(selectedRoute.id)}">다시 보기</a>
    `;
  }

  if (stamps) {
    stamps.innerHTML = PASSPORT_DATA.map((stamp) => `
      <article class="stamp-card ${stamp.status === 'completed' ? 'completed' : ''}">
        <span>${stamp.status === 'completed' ? 'Completed' : 'Locked'}</span>
        <strong>${escapeHtml(stamp.title)}</strong>
      </article>
    `).join('');
  }
}

function renderCultureData() {
  const metrics = qs('[data-culture-metrics]');
  if (metrics) {
    const englishCount = CULTURE_RESOURCES.filter((item) => item.englishAvailable).length;
    const popularCount = CULTURE_RESOURCES.filter((item) => item.foreignerPopular).length;
    const reservationCount = CULTURE_RESOURCES.filter((item) => item.reservationRequired).length;
    const imageCount = CULTURE_RESOURCES.filter((item) => item.imageType === 'ai_generated').length + ROUTE_DATA.filter((item) => item.imageUrl).length;
    metrics.innerHTML = `
      <article><span>문화자원 seed</span><strong>${CULTURE_RESOURCES.length}</strong></article>
      <article><span>영어 안내 가능</span><strong>${englishCount}</strong></article>
      <article><span>외국인 인기</span><strong>${popularCount}</strong></article>
      <article><span>예약 필요</span><strong>${reservationCount}</strong></article>
      <article><span>AI 이미지 안내</span><strong>${imageCount}</strong></article>
      <article><span>공식 확인 필요</span><strong>${CULTURE_RESOURCES.length}</strong></article>
    `;
  }

  const sources = qs('[data-source-list]');
  if (sources) {
    const sourceItems = [
      '서울 열린데이터광장',
      '한국관광공사 TourAPI / 관광정보 데이터',
      '국가유산청 / 국가유산 관련 데이터',
      '공공데이터포털',
      '문화기관 공식 홈페이지',
      '박물관 / 공연장 / 전통시장 공식 안내자료'
    ];
    sources.innerHTML = sourceItems.map((source) => `
      <article class="data-source-card">
        <strong>${escapeHtml(source)}</strong>
        <p>Spring Boot 버전에서 공식 API 또는 공식 페이지 기반 검증 데이터로 연결 예정입니다.</p>
      </article>
    `).join('');
  }
}

function getCurrentFileName() {
  return (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
}

function shouldShowAri() {
  return [
    'index.html',
    'planner.html',
    'routes.html',
    'route-detail.html',
    'map.html',
    'weather.html',
    'support.html',
    'passport.html'
  ].includes(getCurrentFileName());
}

function buildAriContext() {
  const selectedRoute = getRouteFromUrlOrStorage();
  const routeResources = getRouteResources(selectedRoute);

  return {
    currentPage: getCurrentFileName(),
    language: storageGet(STORAGE_KEYS.language, 'KR'),
    preference: loadUserPreference(),
    selectedRoute: {
      id: selectedRoute.id,
      title: selectedRoute.title,
      englishTitle: selectedRoute.englishTitle,
      reason: selectedRoute.reason,
      summary: selectedRoute.summary,
      time: selectedRoute.time,
      walking: selectedRoute.walking,
      fee: selectedRoute.fee,
      flow: selectedRoute.flow,
      convenience: selectedRoute.convenience,
      resources: routeResources.map((resource) => resource.nameKo)
    },
    routes: ROUTE_DATA.map((route) => ({
      id: route.id,
      title: route.title,
      englishTitle: route.englishTitle,
      reason: route.reason,
      summary: route.summary,
      flow: route.flow,
      convenience: route.convenience
    })),
    resources: CULTURE_RESOURCES.map((resource) => ({
      id: resource.id,
      nameKo: resource.nameKo,
      nameEn: resource.nameEn,
      category: resource.category,
      feeType: resource.feeType,
      indoorOutdoor: resource.indoorOutdoor,
      englishAvailable: resource.englishAvailable,
      foreignerPopular: resource.foreignerPopular,
      reservationRequired: resource.reservationRequired,
      bookingNote: resource.bookingNote,
      verifiedStatus: resource.verifiedStatus,
      explanation: resource.aiSimpleExplanation,
      whyItMatters: resource.aiWhyItMatters,
      visitTip: resource.aiVisitTip
    })),
    weather: WEATHER_DATA,
    support: SUPPORT_DATA
  };
}

function normalizeSearchText(value) {
  return String(value || '').toLowerCase();
}

function hasAnyTerm(text, terms) {
  const normalized = normalizeSearchText(text);
  return terms.some((term) => normalized.includes(normalizeSearchText(term)));
}

function findMatchingResource(message, resources) {
  const normalized = normalizeSearchText(message);
  return resources.find((resource) =>
    normalized.includes(normalizeSearchText(resource.nameKo)) ||
    normalized.includes(normalizeSearchText(resource.nameEn)) ||
    normalized.includes(normalizeSearchText(resource.id))
  );
}

function findMatchingRoute(message, routes) {
  const normalized = normalizeSearchText(message);
  return routes.find((route) =>
    normalized.includes(normalizeSearchText(route.title)) ||
    normalized.includes(normalizeSearchText(route.englishTitle)) ||
    normalized.includes(normalizeSearchText(route.id))
  );
}

function fallbackAriReply(message, context) {
  const route = findMatchingRoute(message, context.routes) || context.selectedRoute;
  const resource = findMatchingResource(message, context.resources);

  if (hasAnyTerm(message, ['추천 이유', '왜 추천', 'why recommend', 'why this route'])) {
    return `${route.title} 추천 이유는 ${route.reason} 이동 흐름은 ${route.flow.join(' → ')}입니다. 자세한 길찾기는 지도 화면에서 선택한 지도 서비스 버튼을 사용하세요.`;
  }

  if (resource) {
    return `${resource.nameKo}(${resource.nameEn})은 ${resource.category} 자원입니다. ${resource.explanation} ${resource.whyItMatters} 방문 전 운영시간, 요금, 예약 여부는 공식 출처 확인이 필요합니다.`;
  }

  if (hasAnyTerm(message, ['비', '우천', 'rain', 'rainy'])) {
    const indoorNames = context.resources
      .filter((item) => item.indoorOutdoor.includes('실내'))
      .slice(0, 4)
      .map((item) => item.nameKo)
      .join(', ');
    return `비 오는 날에는 실내 전시와 공연 중심 코스가 좋습니다. 현재 앱 데이터에서는 ${indoorNames || '박물관 중심 장소'}를 먼저 확인해보세요. 날씨 화면에서 대체 코스도 볼 수 있습니다.`;
  }

  if (hasAnyTerm(message, ['영어', 'english', 'language', 'guide'])) {
    const englishRoutes = context.routes
      .filter((item) => item.convenience?.englishAvailable)
      .map((item) => item.title)
      .join(', ');
    const englishPlaces = context.resources
      .filter((item) => item.englishAvailable)
      .slice(0, 5)
      .map((item) => item.nameKo)
      .join(', ');
    return `영어 안내 가능성이 있는 코스는 ${englishRoutes || '공식 확인 필요'}입니다. 장소 기준으로는 ${englishPlaces || '아직 앱 데이터에 없습니다'}가 표시되어 있습니다. 실제 안내 제공 여부는 방문 전 공식 출처를 확인하세요.`;
  }

  if (hasAnyTerm(message, ['예약', '예매', 'booking', 'reservation'])) {
    const reservationRoutes = context.routes
      .filter((item) => item.convenience?.reservationRequired)
      .map((item) => item.title)
      .join(', ');
    const reservationPlaces = context.resources
      .filter((item) => item.reservationRequired)
      .map((item) => item.nameKo)
      .join(', ');
    return `예약 확인이 필요한 코스는 ${reservationRoutes || '현재 route 데이터에는 많지 않습니다'}입니다. 장소 데이터에서는 ${reservationPlaces || '대부분 일반 관람은 예약 불필요로 표시되어 있지만 특별 프로그램은 확인이 필요합니다'}. 공연, 특별 관람, 체험은 공식 예매 안내를 꼭 확인하세요.`;
  }

  if (hasAnyTerm(message, ['응급', '분실', '불편', '지원', 'emergency', 'lost', 'help'])) {
    const supportList = context.support.map((item) => item.title).join(', ');
    return `여행 중 도움이 필요하면 지원 메뉴를 확인하세요. 현재 지원 항목은 ${supportList}입니다. 응급상황, 분실물, 관광불편은 지원 화면에서 이어서 확인하는 것이 좋습니다.`;
  }

  if (hasAnyTerm(message, ['날씨', 'weather', 'temperature'])) {
    const weatherSummary = context.weather.map((item) => `${item.day} ${item.sky} ${item.temp}`).join(' / ');
    return `현재 앱의 날씨 데이터는 ${weatherSummary}입니다. 맑은 날은 궁궐과 한옥 산책, 비 오는 날은 박물관과 공연 중심 코스를 추천합니다.`;
  }

  if (hasAnyTerm(message, ['지도', '길찾기', 'maps', 'navigation', 'route'])) {
    return `${route.title}의 이동 순서는 ${route.flow.join(' → ')}입니다. 실제 길찾기는 코스 상세 또는 지도 화면에서 네이버지도, 카카오맵, Google Maps 중 선택해 여세요.`;
  }

  return '이 정보는 아직 앱 데이터에 없습니다. 공식 출처 확인이 필요합니다. 대신 추천 코스나 여행자 지원 메뉴를 확인해보세요.';
}

async function askOllama(message, context) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), AI_PROVIDER_CONFIG.timeoutMs);

  try {
    const response = await fetch(AI_PROVIDER_CONFIG.ollamaEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        model: AI_PROVIDER_CONFIG.ollamaModel,
        stream: false,
        messages: [
          { role: 'system', content: ARI_SYSTEM_PROMPT },
          {
            role: 'user',
            content: `앱 데이터:\n${JSON.stringify(context)}\n\n사용자 질문:\n${message}`
          }
        ]
      })
    });

    if (!response.ok) throw new Error(`Ollama error: ${response.status}`);
    const data = await response.json();
    return data?.message?.content || data?.response || '';
  } finally {
    window.clearTimeout(timeout);
  }
}

function shouldTryOllamaProvider() {
  if (AI_PROVIDER_CONFIG.mode === 'fallback') return false;
  if (AI_PROVIDER_CONFIG.mode === 'ollama') return true;

  const endpoint = AI_PROVIDER_CONFIG.ollamaEndpoint;
  const isLocalEndpoint = endpoint.includes('localhost') || endpoint.includes('127.0.0.1') || endpoint.includes('[::1]');
  const isPublicHttpsPage = window.location.protocol === 'https:' && isLocalEndpoint;
  return !isPublicHttpsPage;
}

async function askAri(message) {
  const context = buildAriContext();
  if (shouldTryOllamaProvider()) {
    try {
      const reply = await askOllama(message, context);
      if (reply.trim()) return reply.trim();
    } catch (error) {
      if (AI_PROVIDER_CONFIG.mode === 'ollama') {
        return `${fallbackAriReply(message, context)}\n\nOllama 연결이 되지 않아 로컬 fallback 답변을 사용했습니다.`;
      }
    }
  }

  return fallbackAriReply(message, context);
}

function renderAriMessages() {
  const container = qs('[data-ari-messages]');
  if (!container) return;

  if (!ariMessages.length) {
    container.innerHTML = `
      <div class="ari-message ari-message-assistant">
        <strong>아리</strong>
        <p>안녕하세요. 한국 전통문화 코스와 여행 도움을 앱 데이터 기준으로 안내해드릴게요.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = ariMessages.map((item) => `
    <div class="ari-message ari-message-${escapeHtml(item.role)}">
      <strong>${item.role === 'user' ? '나' : '아리'}</strong>
      <p>${escapeHtml(item.message)}</p>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function appendChatMessage(role, message) {
  ariMessages = [...ariMessages, { role, message, createdAt: Date.now() }].slice(-14);
  storageJsonSet(STORAGE_KEYS.ariMessages, ariMessages);
  renderAriMessages();
}

function setAriBusy(isBusy) {
  const status = qs('[data-ari-status]');
  const sendButton = qs('[data-ari-send]');
  if (status) status.textContent = isBusy ? '아리가 답변을 준비하고 있어요.' : '';
  if (sendButton) sendButton.disabled = isBusy;
}

function openAriChat() {
  const root = qs('[data-ari-root]');
  const panel = qs('[data-ari-panel]');
  if (!root || !panel) return;
  root.classList.add('is-open');
  panel.setAttribute('aria-hidden', 'false');
  window.setTimeout(() => qs('[data-ari-input]')?.focus(), 40);
}

function closeAriChat() {
  const root = qs('[data-ari-root]');
  const panel = qs('[data-ari-panel]');
  if (!root || !panel) return;
  root.classList.remove('is-open');
  panel.setAttribute('aria-hidden', 'true');
}

async function sendAriMessage(messageOverride = '') {
  const input = qs('[data-ari-input]');
  const message = String(messageOverride || input?.value || '').trim();
  if (!message) return;

  appendChatMessage('user', message);
  if (input) input.value = '';
  setAriBusy(true);

  try {
    const reply = await askAri(message);
    appendChatMessage('assistant', reply);
  } catch (error) {
    appendChatMessage('assistant', '지금은 답변을 준비하지 못했습니다. 추천 코스나 여행자 지원 메뉴를 먼저 확인해보세요.');
  } finally {
    setAriBusy(false);
  }
}

function mountAriChat() {
  if (!shouldShowAri() || qs('[data-ari-root]')) return;
  const shell = qs('.app-shell') || document.body;
  if (qs('.bottom-cta')) document.body.classList.add('ari-has-bottom-cta');

  ariMessages = storageJsonGet(STORAGE_KEYS.ariMessages, []);
  shell.insertAdjacentHTML('beforeend', `
    <section class="ari-chat" data-ari-root>
      <button class="ari-fab" type="button" data-ari-open aria-label="아리 챗봇 열기">아리</button>
      <div class="ari-panel" data-ari-panel role="dialog" aria-hidden="true" aria-label="아리 전통문화 AI 가이드">
        <header class="ari-header">
          <div>
            <span>아리(Ari)</span>
            <strong>전통문화 AI 가이드</strong>
          </div>
          <button type="button" data-ari-close aria-label="아리 챗봇 닫기">×</button>
        </header>
        <div class="ari-quick-list">
          ${ARI_QUICK_QUESTIONS.map((question) => `<button type="button" data-ari-quick="${escapeHtml(question)}">${escapeHtml(question)}</button>`).join('')}
        </div>
        <div class="ari-messages" data-ari-messages></div>
        <p class="ari-status" data-ari-status aria-live="polite"></p>
        <form class="ari-form" data-ari-form>
          <input data-ari-input type="text" placeholder="궁궐, 한옥, 전통시장에 대해 물어보세요." autocomplete="off">
          <button type="submit" data-ari-send>보내기</button>
        </form>
      </div>
    </section>
  `);

  renderAriMessages();
  qs('[data-ari-open]')?.addEventListener('click', openAriChat);
  qs('[data-ari-close]')?.addEventListener('click', closeAriChat);
  qs('[data-ari-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    sendAriMessage();
  });
  qsa('[data-ari-quick]').forEach((button) => {
    button.addEventListener('click', () => sendAriMessage(button.dataset.ariQuick));
  });
}

function updatePlannerStep() {
  qsa('[data-step]').forEach((step) => {
    step.classList.toggle('is-active', Number(step.dataset.step) === plannerStep);
  });

  const label = qs('[data-step-label]');
  if (label) label.textContent = `Step ${plannerStep} / 5`;

  const bar = qs('[data-progress-bar]');
  if (bar) bar.style.width = `${plannerStep * 20}%`;

  const prev = qs('[data-planner-prev]');
  const next = qs('[data-planner-next]');
  const finish = qs('[data-planner-finish]');

  if (prev) prev.disabled = plannerStep === 1;
  if (next) next.classList.toggle('is-hidden', plannerStep === 5);
  if (finish) finish.classList.toggle('is-hidden', plannerStep !== 5);

  if (plannerStep === 5) {
    saveUserPreference();
    renderConditionSummary();
  }
}

function markActiveBottomTab() {
  const page = document.body.dataset.page;
  qsa('[data-tab]').forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.tab === page);
  });
}

function bindMobileInteractions() {
  qsa('[data-language]').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.language);
    });
  });

  qsa('[data-language-trigger]').forEach((button) => {
    button.addEventListener('click', () => {
      const order = Object.keys(LANGUAGES);
      const current = storageGet(STORAGE_KEYS.language, 'KR');
      const next = order[(order.indexOf(current) + 1) % order.length];
      setLanguage(next);
      showToast(`${LANGUAGES[next]} ${t('common.selectedLanguage')}`);
    });
  });

  document.addEventListener('click', (event) => {
    const mapServiceButton = event.target.closest('[data-map-service]');
    if (mapServiceButton) {
      setMapService(mapServiceButton.dataset.mapService, { toast: true });
    }

    const supportJumpButton = event.target.closest('[data-support-jump]');
    if (supportJumpButton) {
      const target = qs(`[data-support-card="${supportJumpButton.dataset.supportJump}"]`) || qs('#traveler-support');
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  qsa('[data-pref-group]').forEach((group) => {
    group.addEventListener('click', (event) => {
      const button = event.target.closest('.choice-button');
      if (!button) return;

      if (group.dataset.multiple === 'true') {
        button.classList.toggle('is-active');
      } else {
        qsa('.choice-button', group).forEach((item) => item.classList.toggle('is-active', item === button));
      }

      saveUserPreference();
      renderConditionSummary();
    });
  });

  qs('[data-planner-next]')?.addEventListener('click', () => {
    plannerStep = Math.min(5, plannerStep + 1);
    saveUserPreference();
    updatePlannerStep();
  });

  qs('[data-planner-prev]')?.addEventListener('click', () => {
    plannerStep = Math.max(1, plannerStep - 1);
    updatePlannerStep();
  });

  qs('[data-planner-finish]')?.addEventListener('click', () => {
    saveUserPreference();
    window.location.href = 'routes.html';
  });

  qsa('[data-select-route]').forEach((button) => {
    button.addEventListener('click', () => {
      const route = saveSelectedRoute(button.dataset.selectRoute);
      showToast(t('common.savedRouteToast'));
      window.location.href = `route-detail.html?id=${encodeURIComponent(route.id)}`;
    });
  });

  qsa('[data-route-link], [data-map-link]').forEach((link) => {
    link.addEventListener('click', () => {
      saveSelectedRoute(link.dataset.routeLink || link.dataset.mapLink);
    });
  });

  qsa('[data-route-action="save-current"], [data-route-action="passport-current"]').forEach((button) => {
    button.addEventListener('click', () => {
      const route = getRouteFromUrlOrStorage();
      const saved = storageJsonGet(STORAGE_KEYS.savedRoutes, []);
      const nextSaved = saved.includes(route.id) ? saved : [...saved, route.id];
      storageJsonSet(STORAGE_KEYS.savedRoutes, nextSaved);
      storageSet(STORAGE_KEYS.selectedRoute, route.id);
      showToast(t('common.passportToast'));
      renderPassport();
    });
  });

  qsa('[data-toast]').forEach((button) => {
    button.addEventListener('click', () => showToast(button.dataset.toast));
  });
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (!/^https?:$/.test(window.location.protocol)) return;
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}

function initialize() {
  startTimeImageRotation();
  setLanguage(storageGet(STORAGE_KEYS.language, 'KR'), { rerender: false });
  renderLocalizedContent();
  markActiveBottomTab();
  bindMobileInteractions();
  mountAriChat();
  registerServiceWorker();
}

initialize();
