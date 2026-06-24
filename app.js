'use strict';

// EDIT HOME TIME IMAGES HERE
const HOME_TIME_IMAGES = {
  day: {
    label: { KR: '낮', EN: 'Day', JP: '昼', CN: '白天' },
    imageUrls: [
      'assets/images/home/day-1.webp',
      'assets/images/home/day-2.webp',
      'assets/images/home/day-3.webp',
      'assets/images/home/day-4.webp'
    ],
    title: {
      KR: '외국인을 위한 서울 전통문화 AI 가이드',
      EN: 'Seoul Heritage Guide for Global Travelers',
      JP: '外国人のためのソウル伝統文化AIガイド',
      CN: '面向外国游客的首尔传统文化AI指南'
    },
    description: {
      KR: '궁궐, 한옥, 사찰, 역사 공간을 여행자의 시간·날씨·관심사에 맞춰 이야기 흐름으로 추천합니다.',
      EN: 'MARU recommends palaces, hanok villages, temples, and historic spaces around your time, weather, and interests.',
      JP: '宮殿、韓屋、寺院、歴史空間を、時間・天気・関心に合わせて物語の流れで推薦します。',
      CN: '根据时间、天气和兴趣，以故事路线推荐宫殿、韩屋、寺庙与历史空间。'
    }
  },
  evening: {
    label: { KR: '저녁', EN: 'Evening', JP: '夕方', CN: '傍晚' },
    imageUrls: [
      'assets/images/home/evening-1.webp',
      'assets/images/home/evening-2.webp',
      'assets/images/home/evening-3.webp',
      'assets/images/home/evening-4.webp'
    ],
    title: {
      KR: '아리가 당신의 서울 전통문화 여정을 도와드릴게요',
      EN: 'ARI will guide your Seoul heritage route',
      JP: 'ARIがソウル伝統文化の旅を案内します',
      CN: 'ARI将为你引导首尔传统文化路线'
    },
    description: {
      KR: '저녁 시간에는 산책길과 공연을 연결한 문화 흐름을 부드럽게 보여줍니다.',
      EN: 'In the evening, MARU highlights gentle walks and performance-friendly routes.',
      JP: '夕方には散策路や公演とつながる文化の流れをやさしく提案します。',
      CN: '傍晚时，MARU会优先呈现适合散步和演出的文化路线。'
    }
  },
  night: {
    label: { KR: '밤', EN: 'Night', JP: '夜', CN: '夜晚' },
    imageUrls: [
      'assets/images/home/night-1.webp',
      'assets/images/home/night-2.webp',
      'assets/images/home/night-3.webp',
      'assets/images/home/night-4.webp'
    ],
    title: {
      KR: '밤에도 이어지는 서울 전통문화 이야기',
      EN: 'Seoul Heritage Stories After Dark',
      JP: '夜にも続くソウル伝統文化の物語',
      CN: '夜晚继续展开的首尔传统文化故事'
    },
    description: {
      KR: '궁궐 야경과 조용한 한옥 분위기에 맞춰 차분한 화면으로 전환됩니다.',
      EN: 'At night, the interface shifts into a calmer palace and hanok mood.',
      JP: '宮殿の夜景や静かな韓屋の雰囲気に合わせて落ち着いた表示に変わります。',
      CN: '夜晚会切换为更适合宫殿夜景和安静韩屋氛围的画面。'
    }
  },
  JP: {
    tabs: {
      home: 'ホーム',
      recommend: '推薦',
      map: '地図',
      support: 'サポート',
      passport: '保存'
    },
    home: {
      timeEyebrow: 'ソウル時間帯ムード',
      languageConfirm: '日本語で開始します。',
      introTitle: '韓国伝統文化を理解する一番簡単なコース',
      introBody: 'MARUが文化データと旅行条件をもとに、あなたに合う伝統文化ルートを推薦します。',
      principles: ['DB = 検証済み文化情報', 'Server = 条件フィルターと推薦スコア', 'AI = やさしい文化解説'],
      quickLabel: 'クイックスタート',
      todayRoute: '今日のおすすめコース',
      todayRouteDesc: '代表的なストーリールートを見る',
      rainyRoute: '雨の日コース',
      rainyRouteDesc: '屋内中心の代替コース',
      support: '旅行者サポート',
      supportDesc: '緊急・紛失・通訳サポート',
      about: 'サービス紹介',
      data: '公共データ活用を見る',
      start: '始める'
    },
    routes: {
      header: 'MARU',
      headerSub: 'おすすめコース',
      edit: '条件を変更',
      eyebrow: 'Recommended Routes',
      title: '伝統文化おすすめコース',
      body: '選択した条件をもとに、外国人旅行者にも分かりやすいストーリー型コースを推薦します。',
      condition: '選択条件',
      reason: 'おすすめ理由',
      select: 'このコースを選ぶ',
      detail: '詳しく見る',
      map: '地図を開く'
    },
    detail: {
      header: 'MARU',
      headerSub: 'コース詳細',
      save: '保存',
      selected: 'Selected Route',
      scoreSuffix: '点',
      reason: 'おすすめ理由',
      mapButton: '選択した地図で開く',
      flow: 'コースの流れ',
      aiGuide: 'AIのやさしい文化解説',
      keywords: '文化キーワード',
      visitTip: '訪問のヒント',
      why: 'なぜ重要か:',
      tip: '訪問のヒント:',
      booking: '予約案内:',
      warning: '営業時間、料金、予約、休館日は訪問前に公式情報で確認してください。',
      passport: '保存したコースに追加'
    },
    map: {
      header: 'MARU',
      headerSub: '地図',
      changeRoute: 'コース変更',
      eyebrow: 'Route Map',
      fallbackTitle: '選択したコース',
      body: '位置情報を許可すると、近くのソウル伝統文化スポットを距離順に表示します。位置情報は保存されず、選択した地図サービスでコースも開けます。',
      selector: '地図を選択',
      selectorHint: '選択した地図サービスは次回も保持されます。',
      openRoute: '選択した地図でルートを開く',
      openFirst: '最初の目的地を開く',
      openPlace: '開く',
      timeline: '移動順序',
      lessWalking: '歩行少なめルート',
      rainyIndoor: '雨の日の屋内コース',
      nearby: '現在地周辺おすすめ',
      lessWalkingToast: '歩行少なめの移動は、選択した地図サービスの経路オプションで確認してください。',
      rainyIndoorToast: '雨の日の屋内コース条件を選択しました。',
      nearbyToast: '現在地から近い文化スポットを探します。',
      savedToast: '地図サービスを保存しました。'
    },
    support: {
      header: 'MARU',
      headerSub: '旅行者サポート',
      list: 'サポート一覧',
      eyebrow: 'Emergency',
      title: '今すぐ助けが必要ですか？',
      body: '必要なサポートを選んでください。',
      emergency: '緊急連絡先',
      tmoney: '交通カード',
      translation: '通訳サポート',
      rainy: '雨天代替',
      action: '確認する'
    },
    planner: {
      prev: '前へ',
      next: '次へ',
      finish: 'おすすめコースを見る'
    },
    common: {
      selectedLanguage: '選択しました',
      imageNotice: 'AI生成画像・公式写真ではなく理解を助ける画像です',
      imageMissing: '画像を読み込み中',
      savedRouteToast: 'コースを選択しました。',
      passportToast: '保存したコースに追加しました。'
    }
  },
  CN: {
    tabs: {
      home: '首页',
      recommend: '推荐',
      map: '地图',
      support: '帮助',
      passport: '收藏'
    },
    home: {
      timeEyebrow: '首尔时段氛围',
      languageConfirm: '将以中文开始。',
      introTitle: '轻松理解韩国传统文化的路线',
      introBody: 'MARU会根据文化数据和旅行条件，推荐适合你的传统文化路线。',
      principles: ['DB = 已验证的文化信息', 'Server = 条件筛选与推荐分数', 'AI = 易懂文化解说'],
      quickLabel: '快速开始',
      todayRoute: '今日推荐路线',
      todayRouteDesc: '先查看代表性故事路线',
      rainyRoute: '雨天路线',
      rainyRouteDesc: '以室内为主的替代路线',
      support: '旅行者帮助',
      supportDesc: '紧急、遗失、翻译帮助',
      about: '服务介绍',
      data: '查看公共数据使用',
      start: '开始'
    },
    routes: {
      header: 'MARU',
      headerSub: '推荐路线',
      edit: '修改条件',
      eyebrow: 'Recommended Routes',
      title: '传统文化推荐路线',
      body: '根据所选条件，推荐外国游客也容易理解的故事型路线。',
      condition: '已选条件',
      reason: '推荐理由',
      select: '选择此路线',
      detail: '查看详情',
      map: '打开地图'
    },
    detail: {
      header: 'MARU',
      headerSub: '路线详情',
      save: '保存',
      selected: 'Selected Route',
      scoreSuffix: '分',
      reason: '推荐理由',
      mapButton: '用所选地图打开',
      flow: '路线顺序',
      aiGuide: 'AI简明文化解说',
      keywords: '文化关键词',
      visitTip: '游览提示',
      why: '为什么重要:',
      tip: '游览提示:',
      booking: '预约说明:',
      warning: '访问前请通过官方信息确认营业时间、费用、预约和休馆日。',
      passport: '保存到已存路线'
    },
    map: {
      header: 'MARU',
      headerSub: '地图',
      changeRoute: '更换路线',
      eyebrow: 'Route Map',
      fallbackTitle: '已选路线',
      body: '允许位置权限后，将按距离推荐附近的首尔传统文化地点。位置信息不会保存，也可以用所选地图服务打开路线。',
      selector: '选择地图',
      selectorHint: '所选地图服务会保留到下次访问。',
      openRoute: '用所选地图打开路线',
      openFirst: '打开第一站',
      openPlace: '打开',
      timeline: '移动顺序',
      lessWalking: '少步行路线',
      rainyIndoor: '雨天室内路线',
      nearby: '附近推荐',
      lessWalkingToast: '少步行路线请在所选地图服务的路线选项中确认。',
      rainyIndoorToast: '已选择雨天室内路线条件。',
      nearbyToast: '正在根据当前位置查找附近文化地点。',
      savedToast: '地图服务已保存。'
    },
    support: {
      header: 'MARU',
      headerSub: '旅行者帮助',
      list: '帮助列表',
      eyebrow: 'Emergency',
      title: '现在需要帮助吗？',
      body: '请选择所需帮助。',
      emergency: '紧急联系方式',
      tmoney: '交通卡',
      translation: '翻译帮助',
      rainy: '雨天替代',
      action: '查看'
    },
    planner: {
      prev: '上一步',
      next: '下一步',
      finish: '查看推荐路线'
    },
    common: {
      selectedLanguage: '已选择',
      imageNotice: 'AI生成图片・非官方地点照片，仅用于辅助理解',
      imageMissing: '图片加载中',
      savedRouteToast: '路线已选择。',
      passportToast: '已保存到已存路线。'
    }
  }
};

// EDIT AI PROVIDER CONFIG HERE
const AI_PROVIDER_CONFIG = {
  mode: 'auto', // auto | openai-compatible | ollama | fallback
  remoteEndpoint: 'https://api.openai.com/v1/chat/completions',
  remoteModel: 'gpt-4.1-mini',
  remoteApiKey: '',
  ollamaEndpoint: 'http://localhost:11434/api/chat',
  ollamaModel: 'llama3.2',
  timeoutMs: 12000
};

const ARI_CHARACTER_IMAGE = 'assets/images/ari/ari1.webp';

const ARI_SYSTEM_PROMPT = `
너는 아리(ARI)다.
아리는 마루 앱 안에서 서울 전통문화 코스를 안내하는 AI 가이드다.
사용자에게 앱 이름을 말해야 할 때는 마루 또는 MARU라고 부른다.
ARI를 앱 이름처럼 말하지 않는다.

역할:
- 한국 전통문화, 궁궐, 한옥, 전통시장, 정원, 연못, 누각, 문화체험을 친절하게 설명한다.
- 외국인 방문객도 이해하기 쉬운 말로 설명한다.
- 사용자의 언어 선택에 맞춰 가능한 범위에서 답한다.
- 현재 앱의 추천 코스와 장소 데이터를 바탕으로 답한다.
- 짧은 인사, 감사, 망설임 같은 일상 대화에는 자연스럽게 반응하되 다시 여행 도움으로 부드럽게 연결한다.

중요 원칙:
- DB나 앱 데이터에 없는 장소, 운영시간, 요금, 예약 정보를 확정적으로 말하지 않는다.
- 모르는 정보는 공식 출처 확인이 필요하다고 말한다.
- 길찾기는 사용자가 선택한 지도 서비스 버튼을 사용하라고 안내한다.
- 응급상황, 분실물, 관광불편은 여행자 지원 메뉴를 안내한다.
- AI는 사실을 새로 만들어내는 것이 아니라, 검증된 문화데이터를 쉽게 설명하는 역할이다.
`;

const ARI_LLM_SYSTEM_PROMPT = `
You are ARI, the heritage guide inside the MARU app.
MARU is the app name. ARI is the guide character, not the service name.

Behavior:
- Speak naturally, warmly, and clearly like a helpful local guide.
- Use the user's language when possible and follow the tone of the latest message.
- Handle small everyday conversation naturally, but gently connect it back to travel help when appropriate.
- Use the supplied MARU app context when it is relevant.
- When the MARU context does not contain a precise fact, do not invent exact opening hours, prices, reservations, or official procedures.
- If something needs confirmation, say it should be checked on an official source.
- For directions, point the user to MARU's map and route screens.
- For emergencies, lost items, or travel assistance, point the user to MARU's support information.

Answer style:
- Be concise first, then helpful.
- Give direct recommendations when the user is unsure.
- Explain why a route or place fits the user's situation.
`;

const ARI_QUICK_QUESTIONS = [
  '처음 서울 오는데 어디부터 가면 좋아?',
  '이 코스가 왜 추천됐어?',
  '비 오는 날 어디가 좋아?',
  '많이 걷지 않는 코스도 있어?',
  '영어 안내 가능한 곳 있어?'
];

const CULTURE_RESOURCE_DATA_URL = 'ari_culture_resources_appjs.json';
const DYNAMIC_DATA_URLS = {
  routeBlueprints: 'data/route_blueprints.json',
  weather: 'data/weather.json',
  support: 'data/support.json',
  passport: 'data/passport.json',
  publicDataSources: 'data/public-data-sources.json',
  festivals: 'data/festivals.json',
  heritage: 'data/heritage.json'
};
const COURSE_DATA_URL = 'data/courses.json';
const MARU_API_BASE_STORAGE_KEY = 'maruApiBaseUrl';
const MARU_LOCAL_API_BASE_URL = 'http://localhost:8080';
const MARU_API_TIMEOUT_MS = 900;
const MARU_AI_PHOTO_TIMEOUT_MS = 120000;
const MARU_AUTH_TIMEOUT_MS = 8000;
const MARU_API_PATHS = {
  courses: '/api/courses',
  places: '/api/places',
  festivals: '/api/festivals',
  heritage: '/api/heritage',
  publicDataSources: '/api/public-data-sources',
  savedRoutes: '/api/saved-routes',
  aiPhotoTransform: '/api/ai-photo/transform',
  authConfig: '/api/auth/config',
  authRegister: '/api/auth/register',
  authLogin: '/api/auth/login',
  authGoogle: '/api/auth/google',
  authGoogleLink: '/api/auth/google/link',
  authMe: '/api/auth/me'
};
const maruApiFailedPaths = new Set();
let maruApiHostUnavailable = false;
let ollamaHostUnavailable = false;
let cultureResourceLoadStatus = 'fallback';
let cultureResourceLoadMessage = '';
let courseDataLoadStatus = 'fallback';
let courseDataLoadMessage = '';
let PUBLIC_DATA_SOURCES = [];
let FESTIVAL_DATA = [];
let HERITAGE_DATA = [];

// Fallback seed data only. The primary static dataset is ari_culture_resources_appjs.json.
let CULTURE_RESOURCES = [
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
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
    imageUrl: '',
    imageAlt: '덕수궁 근대유산 AI 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A clean mobile guide illustration of Deoksugung palace and modern Seoul heritage, deep navy and gold, no text, no logos'
  }
];

// Fallback route data. The primary routes are generated from CULTURE_RESOURCES after JSON load.
let ROUTE_DATA = [
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
    imageUrl: 'assets/images/routes/course-palace.webp',
    imageAlt: '왕실문화에서 생활문화로 이어지는 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
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
    imageUrl: 'assets/images/routes/course-hanok.webp',
    imageAlt: '숨은 소리문화와 한옥 골목 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
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
    imageUrl: 'assets/images/routes/course-night.webp',
    imageAlt: '근대 서울과 전통예술 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
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
let WEATHER_DATA = [
  { day: '오늘', sky: '맑음', temp: '16℃ / 27℃', rain: '20% / 0%', icon: '해' },
  { day: '내일', sky: '구름많음', temp: '16℃ / 28℃', rain: '0% / 20%', icon: '구름' },
  { day: '모레', sky: '구름많음', temp: '19℃ / 27℃', rain: '-', icon: '흐림' }
];

// EDIT SUPPORT DATA HERE
let SUPPORT_DATA = [
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
let PASSPORT_DATA = [
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
  savedBundles: 'hanroute.mobile.savedBundles',
  stamps: 'hanroute.mobile.stamps',
  mapService: 'hanroute.mobile.mapService',
  ariMessages: 'hanroute.mobile.ariMessages',
  ariProviderSettings: 'hanroute.mobile.ariProviderSettings',
  dataOverrides: 'hanroute.mobile.dataOverrides',
  authToken: 'maru.auth.token',
  authUser: 'maru.auth.user'
};

const LANGUAGES = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  zh: '中文'
};

const LANGUAGE_ALIASES = {
  ko: 'ko',
  KR: 'ko',
  kr: 'ko',
  en: 'en',
  EN: 'en',
  ja: 'ja',
  JP: 'ja',
  jp: 'ja',
  zh: 'zh',
  CN: 'zh',
  cn: 'zh',
  'zh-CN': 'zh',
  'zh-cn': 'zh'
};

const LANGUAGE_LEGACY_CODES = {
  ko: 'KR',
  en: 'EN',
  ja: 'JP',
  zh: 'CN'
};

const LANGUAGE_HTML_LANG = {
  ko: 'ko',
  en: 'en',
  ja: 'ja',
  zh: 'zh'
};

const AUTH_LABELS = {
  guest: { KR: '로그인', EN: 'Sign in', JP: 'ログイン', CN: '登录' },
  member: { KR: '계정', EN: 'Account', JP: 'アカウント', CN: '账号' },
  linked: { KR: '연결됨', EN: 'Linked', JP: '連携済み', CN: '已连接' },
  notLinked: { KR: '미연결', EN: 'Not linked', JP: '未連携', CN: '未连接' }
};

const LANGUAGE_PILL_LABELS = {
  ko: 'KO',
  en: 'EN',
  ja: 'JA',
  zh: 'ZH'
};

const MAP_SERVICES = {
  google: { label: { KR: 'Google Maps', EN: 'Google Maps', JP: 'Google Maps', CN: 'Google Maps' }, shortLabel: 'Google' },
  naver: { label: { KR: '네이버지도', EN: 'Naver Map', JP: 'NAVERマップ', CN: 'NAVER地图' }, shortLabel: 'Naver' },
  kakao: { label: { KR: '카카오맵', EN: 'Kakao Map', JP: 'Kakaoマップ', CN: 'Kakao地图' }, shortLabel: 'Kakao' }
};

const PLACE_IMAGE_ASSETS = {
  palaceRoyal: 'assets/images/places/place-palace-royal.webp',
  hanokStreet: 'assets/images/places/place-hanok-street.webp',
  museumGallery: 'assets/images/places/place-museum-gallery.webp',
  marketLife: 'assets/images/places/place-market-life.webp',
  fortressHistory: 'assets/images/places/place-fortress-history.webp',
  templeTomb: 'assets/images/places/place-temple-tomb.webp',
  cultureExperience: 'assets/images/places/place-culture-experience.webp'
};

const ROUTE_IMAGE_ASSETS = {
  palace: 'assets/images/routes/course-palace.webp',
  hanok: 'assets/images/routes/course-hanok.webp',
  craft: 'assets/images/routes/course-craft.webp',
  market: 'assets/images/routes/course-market.webp',
  night: 'assets/images/routes/course-night.webp',
  rainy: 'assets/images/routes/course-rainy.webp'
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
      introTitle: '마루 맞춤 전통문화 코스',
      introBody: '마루가 공식 문화데이터 구조를 바탕으로 당신에게 맞는 전통문화 스토리 코스를 추천합니다.',
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
      header: '마루',
      headerSub: '추천 코스',
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
    places: {
      title: '서울 전통문화 장소 추천',
      body: '실제 데이터에서 좌표와 설명 품질이 좋은 장소를 우선 정렬했습니다.',
      count: '추천 장소',
      reason: '외국인 추천 이유',
      tip: '방문 팁',
      rainy: '우천',
      photo: '사진',
      quality: '품질',
      map: '지도에서 보기',
      beta: ''
    },
    detail: {
      header: '마루',
      headerSub: '코스 상세',
      save: '저장',
      selected: '선택한 코스',
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
      passport: '문화여행 기록에 저장'
    },
    map: {
      header: '마루',
      headerSub: '지도 길찾기',
      changeRoute: '코스 변경',
      eyebrow: 'Route Map',
      fallbackTitle: '선택한 코스',
      body: '현재 위치를 허용하면 가까운 서울 전통문화 장소를 거리순으로 추천합니다. 위치 정보는 저장하지 않으며, 선택한 지도 서비스로 코스와 이동 순서도 열 수 있습니다.',
      selector: '지도 선택',
      selectorHint: '선택한 지도 서비스는 다음 방문에도 유지됩니다.',
      openRoute: '선택한 지도에서 열기',
      openFirst: '첫 장소 열기',
      openPlace: '열기',
      timeline: '이동 순서',
      lessWalking: '적게 걷는 루트',
      rainyIndoor: '비 오는 날 실내 코스',
      nearby: '현재 위치로 가까운 코스 찾기',
      lessWalkingToast: '적게 걷는 이동은 선택한 지도 서비스의 경로 옵션에서 확인하세요.',
      rainyIndoorToast: '비 오는 날 실내 코스 조건이 선택되었습니다.',
      nearbyToast: '현재 위치로 가까운 장소를 찾습니다.',
      savedToast: '지도 서비스가 저장되었습니다.',
      nearbyTitle: '내 주변 전통문화 장소',
      nearbyButton: '현재 위치로 가까운 코스 찾기',
      nearbyNotice: '위치 정보는 가까운 장소 추천에만 사용되며 저장되지 않습니다.',
      nearbyLoading: '현재 위치를 확인하고 가까운 장소를 찾고 있어요.',
      nearbyDenied: '위치 권한이 허용되지 않아 기본 서울 추천 코스를 보여드릴게요.',
      nearbyFailed: '현재 위치를 확인하지 못해 기본 서울 추천 코스를 보여드릴게요.',
      nearbyUnsupported: '이 브라우저에서는 위치 기능을 사용할 수 없어 기본 서울 추천 코스를 보여드릴게요.',
      nearbyNoData: '좌표가 있는 장소 데이터를 찾지 못해 기본 서울 추천 코스를 보여드릴게요.',
      nearbyResultTitle: '가까운 장소 추천',
      nearbyDistance: '현재 위치에서 약 {distance} km',
      nearbyAccuracy: '위치 정확도 약 {accuracy} m'
    },
    support: {
      header: '마루',
      headerSub: '여행자 지원',
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
      eyebrow: 'Route Planner',
      title: '나에게 맞는 전통문화 코스 찾기',
      body: '한 화면에 하나씩 선택하면 추천 조건이 저장됩니다.',
      stepLabel: 'Step',
      steps: [
        { title: '지역과 시간', body: '어디에서 얼마나 여행하나요?' },
        { title: '관심사', body: '어떤 전통문화를 보고 싶나요?' },
        { title: '동행 정보', body: '누구와 함께 여행하나요?' },
        { title: '여행 스타일', body: '어떤 방식으로 여행하고 싶나요?' },
        { title: '추가 요청', body: '원하는 조건이 더 있나요?' }
      ],
      optionLabels: ['지역', '시간', '인원', '여행 형태', '예산', '이동 부담', '실내/실외'],
      requestLabel: '자연어 요청',
      requestPlaceholder: '종로에서 3시간 정도 전통문화 코스를 추천해줘. 너무 많이 걷지 않는 코스면 좋겠어.',
      summaryPlaceholder: '선택한 조건이 여기에 표시됩니다.',
      prev: '이전',
      next: '다음',
      finish: '추천 코스 보기'
    },
    common: {
      selectedLanguage: '선택됨',
      imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
      imageMissing: '이미지 준비 중',
      savedRouteToast: '코스가 선택되었습니다.',
      passportToast: '문화여행 기록에 저장되었습니다.'
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
      introBody: 'MARU recommends traditional culture routes based on structured cultural data and visitor needs.',
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
      header: 'MARU',
      headerSub: 'Recommended Routes',
      edit: 'Edit filters',
      eyebrow: 'Recommended Routes',
      title: 'Traditional Culture Routes',
      body: 'MARU recommends story-based routes that are easy for international visitors to understand.',
      condition: 'Selected filters',
      reason: 'Why this route',
      select: 'Choose this route',
      detail: 'View details',
      map: 'Open map'
    },
    places: {
      title: 'Recommended Seoul Heritage Places',
      body: 'Places are sorted by coordinates, data quality, tradition score, visitor-friendly explanations, and independent travel value.',
      count: 'places',
      reason: 'Why recommended',
      tip: 'Visit tip',
      rainy: 'Rainy',
      photo: 'Photo',
      quality: 'Quality',
      map: 'Open map',
      beta: ''
    },
    detail: {
      header: 'MARU',
      headerSub: 'Route Detail',
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
      passport: 'Save to Saved Routes'
    },
    map: {
      header: 'MARU',
      headerSub: 'Navigation helper',
      changeRoute: 'Change route',
      eyebrow: 'Route Map',
      fallbackTitle: 'Selected Route',
      body: 'Allow location access to find nearby Seoul heritage places by distance. Your location is not saved, and you can also open the route with your selected map service.',
      selector: 'Choose Map',
      selectorHint: 'Your selected map service is saved for next time.',
      openRoute: 'Open in selected map',
      openFirst: 'Open first stop',
      openPlace: 'Open',
      timeline: 'Route Order',
      lessWalking: 'Less walking route',
      rainyIndoor: 'Rainy indoor route',
      nearby: 'Find routes near me',
      lessWalkingToast: 'Check less-walking options inside your selected map service.',
      rainyIndoorToast: 'Rainy-day indoor route conditions were selected.',
      nearbyToast: 'Finding nearby heritage places from your current location.',
      savedToast: 'Map service saved.',
      nearbyTitle: 'Heritage Places Near Me',
      nearbyButton: 'Find routes near me',
      nearbyNotice: 'Your location is only used to find nearby places and is not saved.',
      nearbyLoading: 'Checking your location and finding nearby places.',
      nearbyDenied: "Location access was not allowed, so we'll show the default Seoul route.",
      nearbyFailed: "We couldn't check your location, so we'll show the default Seoul route.",
      nearbyUnsupported: "This browser doesn't support location, so we'll show the default Seoul route.",
      nearbyNoData: "We couldn't find places with coordinates, so we'll show the default Seoul route.",
      nearbyResultTitle: 'Nearby Place Recommendations',
      nearbyDistance: 'About {distance} km from your current location',
      nearbyAccuracy: 'Location accuracy about {accuracy} m'
    },
    support: {
      header: 'MARU',
      headerSub: 'Traveler Help',
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
      eyebrow: 'Route Planner',
      title: 'Find a heritage route that fits you',
      body: 'Choose one item at a time and MARU will save your route preferences.',
      stepLabel: 'Step',
      steps: [
        { title: 'Area and Time', body: 'Where and how long will you travel?' },
        { title: 'Interests', body: 'What kind of heritage do you want to see?' },
        { title: 'Travel Party', body: 'Who are you traveling with?' },
        { title: 'Travel Style', body: 'How would you like to explore?' },
        { title: 'Extra Request', body: 'Any extra conditions?' }
      ],
      optionLabels: ['Area', 'Time', 'People', 'Group type', 'Budget', 'Walking', 'Indoor/Outdoor'],
      requestLabel: 'Free-text request',
      requestPlaceholder: 'Recommend a 3-hour heritage route around Jongno. I prefer less walking.',
      summaryPlaceholder: 'Your selected filters will appear here.',
      prev: 'Back',
      next: 'Next',
      finish: 'See routes'
    },
    common: {
      selectedLanguage: 'selected',
      imageNotice: 'AI-generated image · visual guide for understanding the route, not an official location photo',
      imageMissing: 'Image loading',
      savedRouteToast: 'Route selected.',
      passportToast: 'Saved to Saved Routes.'
    }
  },
  JP: {
    tabs: {
      home: 'ホーム',
      recommend: '推薦',
      map: '地図',
      support: 'ヘルプ',
      passport: '保存'
    },
    home: {
      timeEyebrow: 'ソウル時間のムード',
      languageConfirm: '日本語で始めます。',
      introTitle: 'MARU カスタム伝統文化コース',
      introBody: 'MARUは文化データと旅行者の条件をもとに、理解しやすい伝統文化ルートを推薦します。',
      principles: ['DB = 検証された文化情報', 'Server = 条件フィルターと推薦スコア', 'AI = わかりやすい文化解説'],
      quickLabel: 'クイックスタート',
      todayRoute: '今日のおすすめコース',
      todayRouteDesc: '代表的なストーリールートを見る',
      rainyRoute: '雨の日コース',
      rainyRouteDesc: '屋内中心の代替ルート',
      support: '旅行者サポート',
      supportDesc: '緊急・紛失・翻訳ヘルプ',
      about: 'サービス紹介',
      data: '公共データ活用を見る',
      start: '始める'
    },
    routes: {
      header: 'MARU',
      headerSub: 'おすすめコース',
      edit: '条件編集',
      eyebrow: 'Recommended Routes',
      title: '伝統文化コース',
      body: 'MARUは海外旅行者にも理解しやすいストーリー型コースを推薦します。',
      condition: '選択条件',
      reason: 'おすすめ理由',
      select: 'このコースを選択',
      detail: '詳しく見る',
      map: '地図を開く'
    },
    places: {
      title: 'ソウル伝統文化スポット',
      body: '日本語説明は準備中です。場所名と主要ラベルを中心に表示します。',
      count: 'スポット',
      reason: 'おすすめ理由',
      tip: '訪問のヒント',
      rainy: '雨',
      photo: '写真',
      quality: '品質',
      map: '地図で見る',
      beta: 'beta'
    },
    detail: {
      header: 'MARU',
      headerSub: 'コース詳細',
      save: '保存',
      selected: '選択したコース',
      scoreSuffix: '点',
      reason: 'おすすめ理由',
      mapButton: '選択した地図で開く',
      flow: 'コースの流れ',
      aiGuide: 'やさしい文化解説',
      keywords: '文化キーワード',
      visitTip: '訪問のヒント',
      why: '重要な理由:',
      tip: '訪問のヒント:',
      booking: '予約案内:',
      warning: '営業時間、料金、予約、休館日は訪問前に公式情報で確認してください。',
      passport: '保存したコースに追加'
    },
    map: {
      header: 'MARU',
      headerSub: '地図',
      changeRoute: 'コース変更',
      eyebrow: 'Route Map',
      fallbackTitle: '選択したコース',
      body: '位置情報を許可すると、近くのソウル伝統文化スポットを距離順に表示します。位置情報は保存されず、選択した地図サービスでコースも開けます。',
      selector: '地図を選択',
      selectorHint: '選択した地図サービスは次回も保持されます。',
      openRoute: '選択した地図で開く',
      openFirst: '最初の場所を開く',
      openPlace: '開く',
      timeline: '移動順',
      lessWalking: '少なめに歩くルート',
      rainyIndoor: '雨の日の屋内コース',
      nearby: '現在地から近いコースを探す',
      lessWalkingToast: '少なめに歩く移動は、選択した地図サービスの経路オプションで確認してください。',
      rainyIndoorToast: '雨の日の屋内条件を選択しました。',
      nearbyToast: '現在地から近い文化スポットを探します。',
      savedToast: '地図サービスを保存しました。',
      nearbyTitle: '現在地周辺の伝統文化スポット',
      nearbyButton: '現在地から近いコースを探す',
      nearbyNotice: '位置情報は近くの場所を探すためだけに使用され、保存されません。',
      nearbyLoading: '現在地を確認し、近くの場所を探しています。',
      nearbyDenied: '位置情報が許可されなかったため、基本のソウルおすすめコースを表示します。',
      nearbyFailed: '現在地を確認できなかったため、基本のソウルおすすめコースを表示します。',
      nearbyUnsupported: 'このブラウザでは位置情報を使用できないため、基本のソウルおすすめコースを表示します。',
      nearbyNoData: '座標のある場所データが見つからないため、基本のソウルおすすめコースを表示します。',
      nearbyResultTitle: '近くの場所のおすすめ',
      nearbyDistance: '現在地から約{distance} km',
      nearbyAccuracy: '位置精度 約{accuracy} m'
    },
    support: {
      header: 'MARU',
      headerSub: '旅行者サポート',
      list: 'サポート一覧',
      eyebrow: 'Emergency',
      title: '今すぐサポートが必要ですか？',
      body: '必要なサポートを選んでください。',
      emergency: '緊急連絡先',
      tmoney: '交通カード',
      translation: '翻訳ヘルプ',
      rainy: '雨の日代替',
      action: '確認する'
    },
    planner: {
      eyebrow: 'Route Planner',
      title: 'あなたに合う伝統文化コースを探す',
      body: '一つずつ選ぶと、推薦条件が保存されます。',
      stepLabel: 'Step',
      steps: [
        { title: 'エリアと時間', body: 'どこで、どのくらい旅行しますか？' },
        { title: '関心分野', body: 'どんな伝統文化を見たいですか？' },
        { title: '同行情報', body: '誰と一緒に旅行しますか？' },
        { title: '旅行スタイル', body: 'どんな方法で巡りたいですか？' },
        { title: '追加リクエスト', body: 'ほかに希望条件はありますか？' }
      ],
      optionLabels: ['エリア', '時間', '人数', '旅行タイプ', '予算', '歩行負担', '屋内/屋外'],
      requestLabel: '自由入力リクエスト',
      requestPlaceholder: '鍾路で3時間ほどの伝統文化コースを推薦して。あまり歩かないコースがいいです。',
      summaryPlaceholder: '選択した条件がここに表示されます。',
      prev: '戻る',
      next: '次へ',
      finish: 'おすすめコースを見る'
    },
    common: {
      selectedLanguage: '選択済み',
      imageNotice: 'AI生成画像 · 実際の場所写真ではないルート理解用ガイド',
      imageMissing: '画像を読み込み中',
      savedRouteToast: 'コースを選択しました。',
      passportToast: '保存したコースに追加しました。'
    }
  },
  CN: {
    tabs: {
      home: '首页',
      recommend: '推荐',
      map: '地图',
      support: '帮助',
      passport: '保存'
    },
    home: {
      timeEyebrow: '首尔时间氛围',
      languageConfirm: '将以中文开始。',
      introTitle: 'MARU 定制传统文化路线',
      introBody: 'MARU根据文化数据和旅行者条件，推荐容易理解的韩国传统文化路线。',
      principles: ['DB = 已验证的文化信息', 'Server = 条件筛选与推荐分数', 'AI = 简明文化解读'],
      quickLabel: '快速开始',
      todayRoute: '今日推荐路线',
      todayRouteDesc: '查看代表性故事路线',
      rainyRoute: '雨天路线',
      rainyRouteDesc: '室内为主的替代路线',
      support: '旅行者帮助',
      supportDesc: '紧急、遗失、翻译帮助',
      about: '服务介绍',
      data: '查看公共数据使用',
      start: '开始'
    },
    routes: {
      header: 'MARU',
      headerSub: '推荐路线',
      edit: '修改条件',
      eyebrow: 'Recommended Routes',
      title: '传统文化路线',
      body: 'MARU推荐适合外国游客理解的故事型传统文化路线。',
      condition: '已选条件',
      reason: '推荐理由',
      select: '选择此路线',
      detail: '查看详情',
      map: '打开地图'
    },
    places: {
      title: '首尔传统文化地点推荐',
      body: '中文说明仍在准备中，当前优先显示地点名和主要标签。',
      count: '地点',
      reason: '推荐理由',
      tip: '参观提示',
      rainy: '雨天',
      photo: '照片',
      quality: '质量',
      map: '打开地图',
      beta: 'beta'
    },
    detail: {
      header: 'MARU',
      headerSub: '路线详情',
      save: '保存',
      selected: '已选路线',
      scoreSuffix: '分',
      reason: '推荐理由',
      mapButton: '用所选地图打开',
      flow: '路线顺序',
      aiGuide: '简明文化解读',
      keywords: '文化关键词',
      visitTip: '参观提示',
      why: '重要原因:',
      tip: '参观提示:',
      booking: '预约说明:',
      warning: '请在访问前通过官方信息确认开放时间、费用、预约和休馆信息。',
      passport: '保存到已存路线'
    },
    map: {
      header: 'MARU',
      headerSub: '地图',
      changeRoute: '更换路线',
      eyebrow: 'Route Map',
      fallbackTitle: '已选路线',
      body: '允许位置权限后，将按距离推荐附近的首尔传统文化地点。位置信息不会保存，也可以用所选地图服务打开路线。',
      selector: '选择地图',
      selectorHint: '所选地图服务会保存到下次访问。',
      openRoute: '用所选地图打开',
      openFirst: '打开第一个地点',
      openPlace: '打开',
      timeline: '移动顺序',
      lessWalking: '少步行路线',
      rainyIndoor: '雨天室内路线',
      nearby: '查找附近路线',
      lessWalkingToast: '少步行路线请在所选地图服务的路线选项中确认。',
      rainyIndoorToast: '已选择雨天室内路线条件。',
      nearbyToast: '正在根据当前位置查找附近文化地点。',
      savedToast: '地图服务已保存。',
      nearbyTitle: '当前位置附近的传统文化地点',
      nearbyButton: '查找附近路线',
      nearbyNotice: '位置信息仅用于查找附近地点，不会被保存。',
      nearbyLoading: '正在确认当前位置并查找附近地点。',
      nearbyDenied: '未允许位置权限，因此将显示默认的首尔推荐路线。',
      nearbyFailed: '无法确认当前位置，因此将显示默认的首尔推荐路线。',
      nearbyUnsupported: '此浏览器不支持位置功能，因此将显示默认的首尔推荐路线。',
      nearbyNoData: '未找到带坐标的地点数据，因此将显示默认的首尔推荐路线。',
      nearbyResultTitle: '附近地点推荐',
      nearbyDistance: '距离当前位置约 {distance} km',
      nearbyAccuracy: '位置精度约 {accuracy} m'
    },
    support: {
      header: 'MARU',
      headerSub: '旅行者帮助',
      list: '帮助列表',
      eyebrow: 'Emergency',
      title: '现在需要帮助吗？',
      body: '请选择需要的帮助类型。',
      emergency: '紧急联系方式',
      tmoney: '交通卡',
      translation: '翻译帮助',
      rainy: '雨天备用',
      action: '查看'
    },
    planner: {
      eyebrow: 'Route Planner',
      title: '寻找适合你的传统文化路线',
      body: '逐项选择后，推荐条件会被保存。',
      stepLabel: 'Step',
      steps: [
        { title: '地区和时间', body: '你想在哪里、旅行多久？' },
        { title: '兴趣', body: '你想看哪类传统文化？' },
        { title: '同行信息', body: '你和谁一起旅行？' },
        { title: '旅行方式', body: '你希望怎样游览？' },
        { title: '额外需求', body: '还有其他条件吗？' }
      ],
      optionLabels: ['地区', '时间', '人数', '旅行类型', '预算', '步行强度', '室内/室外'],
      requestLabel: '自由输入需求',
      requestPlaceholder: '请推荐钟路附近约3小时的传统文化路线。我希望少走路。',
      summaryPlaceholder: '你选择的条件会显示在这里。',
      prev: '上一步',
      next: '下一步',
      finish: '查看推荐路线'
    },
    common: {
      selectedLanguage: '已选择',
      imageNotice: 'AI生成图片 · 非实际地点照片，仅用于路线理解辅助',
      imageMissing: '图片加载中',
      savedRouteToast: '已选择路线。',
      passportToast: '已保存到已存路线。'
    }
  }
};

const translations = {
  ko: UI_COPY.KR,
  en: UI_COPY.EN,
  ja: UI_COPY.JP,
  zh: UI_COPY.CN
};

const EXTENDED_UI_COPY = {
  ko: {
    pageMeta: {
      home: { title: '마루 | 서울 전통문화 AI 가이드', description: '마루, 외국인을 위한 서울 전통문화 AI 가이드' },
      planner: { title: '조건 선택 | 마루', description: '여행 조건을 단계별로 선택해 전통문화 스토리 코스를 추천받습니다.' },
      routes: { title: '추천 코스 | 마루', description: '선택 조건에 맞춘 한국 전통문화 스토리 코스 추천' },
      routeDetail: { title: '코스 상세 | 마루', description: '선택한 전통문화 스토리 코스 상세와 지도 서비스 길찾기' },
      map: { title: '지도 | 마루', description: '선택한 코스의 지도와 네이버지도, 카카오맵, Google Maps 링크' },
      weather: { title: '서울 날씨 | 마루', description: '서울 날씨와 날씨 기반 전통문화 코스 추천' },
      support: { title: '여행자 지원 | 마루', description: '외국인 여행자를 위한 긴급, 분실, 관광 안내, 안전, 번역 도움' },
      passport: { title: '문화여행 기록 | 마루', description: '마루에서 저장한 코스와 전통문화 스탬프를 확인하는 문화여행 기록' },
      about: { title: '서비스 소개 | 마루', description: '마루 서비스 개념과 확장 계획' },
      cultureData: { title: '문화데이터 | 마루', description: '공공 문화데이터 활용 현황과 추천 로직 설명' },
      aiPhoto: { title: 'AI 포토카드 | 마루', description: '조선풍 전통 포토카드 체험' }
    },
    home: {
      headerSub: 'Seoul Heritage Guide',
      heroAria: '서울 시간대 추천 이미지',
      languageAria: '언어 선택'
    },
    planner: {
      header: '마루',
      headerSub: '조건 선택',
      progressAria: '진행 상태'
    },
    common: {
      bottomTabsAria: '하단 탭',
      timeImageAlt: '시간대 전통문화 추천 이미지'
    },
    weather: {
      header: '마루',
      headerSub: '서울 날씨',
      action: '코스 보기',
      eyebrow: 'Weather Insight',
      title: '날씨 기반 추천 코스',
      summary: '서울 날씨와 혼잡도를 바탕으로 바깥 코스와 실내 대안을 함께 보여줍니다.',
      todayLabel: '오늘의 추천',
      todayTitle: '궁궐·한옥 산책 코스',
      todayBody: '맑은 날에는 궁궐 외부 동선과 한옥 골목을 함께 걷기 좋습니다.',
      routeButton: '추천 코스 보기',
      forecastTitle: '3일 예보',
      airTitle: '대기 정보',
      pm10: '미세먼지 PM10',
      pm25: '초미세먼지 PM2.5',
      good: '좋음',
      backupTitle: '날씨별 대체 코스',
      rainProbability: '강수확률',
      values: {
        '오늘': '오늘',
        '내일': '내일',
        '모레': '모레',
        '맑음': '맑음',
        '구름많음': '구름많음',
        '흐림': '흐림',
        '해': '해',
        '구름': '구름'
      },
      suggestions: [
        { label: '맑은 날 추천', title: '궁궐·한옥 산책 코스', toast: '맑은 날 추천 코스가 선택되었습니다.' },
        { label: '비 오는 날 추천', title: '박물관·공연 실내 코스', toast: '비 오는 날 실내 코스가 선택되었습니다.' },
        { label: '더운 날 추천', title: '실내 전시·시장 중심 코스', toast: '더운 날 실내 중심 코스가 선택되었습니다.' }
      ]
    },
    passport: {
      header: '마루',
      headerSub: '문화여행 기록',
      action: '새 코스',
      eyebrow: 'Saved Routes',
      title: '나의 문화여행 기록',
      body: '방문한 전통문화 코스를 저장하고 스탬프로 기록합니다.',
      savedLabel: '저장한 코스',
      empty: '아직 저장한 코스가 없습니다.',
      choose: '추천 코스에서 선택하기',
      again: '다시 보기',
      stampsTitle: '문화 스탬프',
      nextLabel: '다음 추천',
      nextTitle: '숨은 소리문화와 한옥 골목 코스',
      nextBody: '궁궐문화 다음에는 한옥과 국악의 조용한 분위기를 경험해 보세요.',
      view: '코스 보기',
      status: { completed: 'Completed', locked: 'Locked' },
      stamps: ['왕실문화', '전통시장', '한옥거리', '국악공연', '공예체험', '근대유산']
    },
    about: {
      header: '마루',
      headerSub: 'About MARU',
      action: '데이터',
      eyebrow: 'About',
      title: '외국인 여행자를 위한 전통문화 해설 앱',
      body: '마루는 일반 관광지가 아니라 전통문화의 의미와 흐름을 이해하도록 돕는 모바일 여행 동반 앱입니다.',
      articles: [
        { title: '공공데이터 확장', body: '현재 버전은 GitHub Pages에 배포 가능한 정적 웹앱으로, 문화자원 JSON 데이터와 JavaScript 추천 로직으로 핵심 흐름을 구현했습니다. 이후 서버 연동 시 공식 데이터 동기화와 실시간 추천으로 확장할 수 있습니다.' },
        { title: '편의 정보 제공', body: '영어 안내 가능 여부, 외국인 인기 여부, 예약 필요 여부를 함께 제공해 외국인 방문객의 현장 의사결정을 돕습니다.' },
        { title: 'AI 이미지 정책', body: 'AI 이미지는 공식 장소 사진이 아니라 이해를 돕는 시각 가이드입니다. 실제 운영에서는 공식 사진 사용 권한 또는 자체 제작 이미지를 별도로 관리해야 합니다.' },
        { title: '일반 여행 앱과의 차이', body: '맛집·명소 나열이 아니라 궁궐, 민속, 시장, 공연을 이야기 흐름으로 연결합니다.' },
        { title: 'AI 사용 원칙', body: 'AI는 검증되지 않은 사실을 만들지 않고 DB의 사실을 쉬운 해설, 키워드, 방문 팁으로 바꿉니다.' },
        { title: '파트너십 아님', body: '서울 열린데이터광장, 한국관광공사, 국가유산청, Visit Seoul 등은 데이터 소스 참고명으로만 사용하며 공식 제휴를 주장하지 않습니다.' }
      ],
      links: ['문화데이터 활용 보기', 'AI 이미지 프롬프트 보기']
    },
    cultureData: {
      header: '마루',
      headerSub: '문화데이터',
      action: '소개',
      eyebrow: 'Data Dashboard',
      title: '공공 문화데이터 확장 구조',
      body: '현재 버전은 GitHub Pages에 배포 가능한 정적 웹앱으로 <code>ari_culture_resources_appjs.json</code>과 <code>data/*.json</code>(<code>data/courses.json</code> 포함)을 함께 읽어 추천 카드, 코스, 지원 정보를 동적으로 구성합니다. 운영 전 운영시간·요금·예약 여부·좌표·영어 안내 가능 여부는 공식 출처 기준으로 재검증이 필요합니다.',
      factorsTitle: '추천 요소',
      factors: ['전통성 점수', '외국인 친화도', '숨은 문화 가치', '도보 편의성', '예산·실내 적합도'],
      sourcesTitle: '데이터 소스 확장 계획',
      futureApiTitle: '향후 API',
      metrics: ['서울 장소 데이터', '추천 코스', '영어 안내 가능', '외국인 인기', '예약 필요', '이미지 URL', '데이터 상태'],
      status: { loaded: '로드됨', fallback: '기본 데이터', seed: '시드 데이터' },
      sourceStatus: { loaded: 'JSON 데이터 로드 완료', fallback: '기본 데이터 준비 완료', seed: '시드 데이터 사용 중' },
      sources: ['서울 열린데이터광장', '한국관광공사 TourAPI / 관광정보 데이터', '국가유산청 / 국가유산 관련 데이터', '공공데이터포털', '문화기관 공식 홈페이지', '박물관 / 공연장 / 전통시장 공식 안내자료'],
      sourceNote: '현재 데이터는 서울 전통문화 운영용 시드 데이터이며, 운영 전 공식 정보 확인이 필요합니다.',
      logic: [
        { label: 'DB', title: '검증된 문화 사실', body: '현재는 JSON 시드 데이터를 기반으로 하며, 향후 공식 출처, 장소, 분류, 비용, 실내외, 영어 안내, 예약 필요 여부를 저장할 수 있습니다.' },
        { label: 'Server', title: '필터링과 추천 점수', body: '현재는 JavaScript가 조건과 추천 점수를 계산하며, 향후 서버에서 방문 조건, 외국인 친화도, 예약 부담, 날씨 적합도를 계산할 수 있습니다.' },
        { label: 'AI', title: '쉬운 문화 해설', body: '현재는 앱 데이터 기반 문화 해설을 제공하며, AI는 검증된 사실을 쉬운 설명, 키워드, 방문 팁으로 바꾸는 역할입니다.' }
      ]
    },
    ari: {
      fabLabel: '아리 챗봇 열기',
      dialogLabel: '아리 전통문화 AI 가이드',
      avatarAlt: '아리 캐릭터',
      name: '아리',
      profileName: '아리(ARI)',
      profileTitle: '전통문화 AI 가이드',
      closeLabel: '아리 챗봇 닫기',
      greeting: '안녕하세요. 아리예요. 서울 전통문화 코스 추천, 장소 설명, 비 오는 날 대안, 영어 안내 여부까지 자연스럽게 도와드릴게요.',
      roleUser: '나',
      roleAssistant: '아리',
      placeholder: '처음 서울에 왔어, 비 오면 어디가 좋아?처럼 편하게 물어보세요.',
      send: '보내기',
      busy: '아리가 내용을 정리하고 있어요.',
      error: '지금 답변 연결이 잠시 불안정해요. 앱 데이터 기준으로 다시 안내해볼게요.',
      fallbackSuffix: '실시간 모델 연결이 없어 앱 데이터 기반 안내로 답변했습니다.',
      quickQuestions: ['처음 서울 오는데 어디부터 가면 좋아?', '이 코스가 왜 추천됐어?', '비 오는 날 어디가 좋아?', '많이 걷지 않는 코스도 있어?', '영어 안내 가능한 곳 있어?']
    }
  },
  en: {
    pageMeta: {
      home: { title: 'MARU | Seoul Heritage AI Guide', description: 'MARU, a Seoul heritage AI guide for global travelers' },
      planner: { title: 'Route Planner | MARU', description: 'Choose travel conditions step by step and receive a Seoul heritage story route.' },
      routes: { title: 'Recommended Routes | MARU', description: 'Traditional culture story routes matched to your selected conditions' },
      routeDetail: { title: 'Route Detail | MARU', description: 'Details and map links for your selected heritage story route' },
      map: { title: 'Map | MARU', description: 'Map links for Naver Map, Kakao Map, and Google Maps' },
      weather: { title: 'Seoul Weather | MARU', description: 'Seoul weather and weather-based heritage route suggestions' },
      support: { title: 'Traveler Support | MARU', description: 'Emergency, lost items, tourist information, safety, and translation help for visitors' },
      passport: { title: 'Saved Routes | MARU', description: 'Saved MARU routes and Seoul heritage stamps' },
      about: { title: 'About | MARU', description: 'MARU service concept and expansion plan' },
      cultureData: { title: 'Culture Data | MARU', description: 'Public culture data usage and recommendation logic' },
      aiPhoto: { title: 'AI Photo Card | MARU', description: 'Joseon-inspired traditional photo card experience' }
    },
    home: {
      headerSub: 'Seoul Heritage Guide',
      heroAria: 'Seoul time-based heritage image',
      languageAria: 'Language selection'
    },
    planner: {
      header: 'MARU',
      headerSub: 'Route Planner',
      progressAria: 'Progress'
    },
    common: {
      bottomTabsAria: 'Bottom navigation',
      timeImageAlt: 'Time-based Korean heritage mood image'
    },
    weather: {
      header: 'MARU',
      headerSub: 'Seoul Weather',
      action: 'View Routes',
      eyebrow: 'Weather Insight',
      title: 'Weather-Based Route Guide',
      summary: 'This screen combines Seoul weather and expected crowd levels to show outdoor picks and indoor alternatives.',
      todayLabel: "Today's Pick",
      todayTitle: 'Palace and Hanok Walk',
      todayBody: 'On a clear day, palace courtyards and hanok alleys make a comfortable outdoor route.',
      routeButton: 'See recommended routes',
      forecastTitle: '3-Day Forecast',
      airTitle: 'Air Quality',
      pm10: 'Fine dust PM10',
      pm25: 'Ultrafine dust PM2.5',
      good: 'Good',
      backupTitle: 'Weather-Based Alternatives',
      rainProbability: 'Chance of rain',
      values: {
        '오늘': 'Today',
        '내일': 'Tomorrow',
        '모레': 'Day after tomorrow',
        '맑음': 'Clear',
        '구름많음': 'Mostly cloudy',
        '흐림': 'Cloudy',
        '해': 'Sun',
        '구름': 'Cloud'
      },
      suggestions: [
        { label: 'Clear-day route', title: 'Palace and Hanok Walk', toast: 'Clear-day route selected.' },
        { label: 'Rainy-day route', title: 'Museums and Indoor Performances', toast: 'Rainy-day indoor route selected.' },
        { label: 'Hot-day route', title: 'Indoor Exhibitions and Markets', toast: 'Hot-day indoor route selected.' }
      ]
    },
    passport: {
      header: 'MARU',
      headerSub: 'Saved Routes',
      action: 'New Route',
      eyebrow: 'Saved Routes',
      title: 'My Heritage Travel Record',
      body: 'Save traditional culture routes and keep track of your heritage stamps.',
      savedLabel: 'Saved route',
      empty: 'No saved route yet.',
      choose: 'Choose from recommended routes',
      again: 'View again',
      stampsTitle: 'Heritage Stamps',
      nextLabel: 'Next Pick',
      nextTitle: 'Hidden Sounds and Hanok Streets',
      nextBody: 'After royal culture, try a quieter route through hanok streets and Korean traditional sounds.',
      view: 'View route',
      status: { completed: 'Completed', locked: 'Locked' },
      stamps: ['Royal Culture', 'Traditional Market', 'Hanok Street', 'Gugak Performance', 'Craft Experience', 'Modern Heritage']
    },
    about: {
      header: 'MARU',
      headerSub: 'About MARU',
      action: 'Data',
      eyebrow: 'About',
      title: 'A heritage interpretation app for global travelers',
      body: 'MARU is a mobile travel companion that helps visitors understand the meaning and flow of Korean heritage, not just a list of tourist spots.',
      articles: [
        { title: 'Public Data Expansion', body: 'The current version is a deployable static web app for GitHub Pages. It already uses culture-resource JSON data and JavaScript recommendation logic for the core flow, and can later expand into official data synchronization and live scoring through a server layer.' },
        { title: 'Visitor Convenience', body: 'English support, visitor popularity, and reservation needs are shown together to help international visitors decide on site.' },
        { title: 'AI Image Policy', body: 'AI images are visual guides for understanding, not official place photos. A real service should separately manage official photo rights or original image production.' },
        { title: 'Different From Generic Travel Apps', body: 'MARU connects palaces, folk culture, markets, and performances as a story flow instead of listing restaurants and attractions.' },
        { title: 'AI Use Principle', body: 'AI does not invent unverified facts. It turns verified database facts into simple explanations, keywords, and visit tips.' },
        { title: 'Not an Official Partnership', body: 'Seoul Open Data, Korea Tourism Organization, National Heritage Administration, Visit Seoul, and similar names are referenced only as data sources, not as official partnerships.' }
      ],
      links: ['View culture data usage', 'View AI image prompts']
    },
    cultureData: {
      header: 'MARU',
      headerSub: 'Culture Data',
      action: 'About',
      eyebrow: 'Data Dashboard',
      title: 'Public Culture Data Expansion Structure',
      body: 'The current version is a deployable static web app for GitHub Pages. It reads <code>ari_culture_resources_appjs.json</code> and <code>data/*.json</code>, including <code>data/courses.json</code>, to build routes, recommendation cards, and support information dynamically. Hours, prices, reservations, coordinates, and English-support status must be rechecked against official sources before operation.',
      factorsTitle: 'Recommendation Factors',
      factors: ['Tradition score', 'Visitor friendliness', 'Hidden cultural value', 'Walking convenience', 'Budget and indoor fit'],
      sourcesTitle: 'Data Source Expansion Plan',
      futureApiTitle: 'Future API',
      metrics: ['Seoul place data', 'Recommended routes', 'English support', 'Visitor favorite', 'Reservation needed', 'Image URLs', 'Data status'],
      status: { loaded: 'Loaded', fallback: 'Base data', seed: 'Seed data' },
      sourceStatus: { loaded: 'JSON data loaded', fallback: 'Base data ready', seed: 'Seed data active' },
      sources: ['Seoul Open Data Plaza', 'Korea Tourism Organization TourAPI / tourism data', 'National Heritage Administration / heritage data', 'Public Data Portal', 'Official cultural institution websites', 'Official guides from museums, theaters, and traditional markets'],
      sourceNote: 'The current dataset is Seoul heritage seed data for operation planning, and official information must be checked before launch.',
      logic: [
        { label: 'DB', title: 'Verified Cultural Facts', body: 'The current app uses JSON seed data, and a future backend can store official sources, places, categories, cost, indoor/outdoor status, English support, and reservation requirements.' },
        { label: 'Server', title: 'Filtering and Scores', body: 'JavaScript currently calculates filters and scores; a future server can calculate visit conditions, visitor friendliness, reservation burden, and weather fit.' },
        { label: 'AI', title: 'Simple Culture Guide', body: 'The current app provides data-based culture guidance, and AI should turn verified facts into simple explanations, keywords, and visit tips.' }
      ]
    },
    ari: {
      fabLabel: 'Open ARI chatbot',
      dialogLabel: 'ARI heritage AI guide',
      avatarAlt: 'ARI character',
      name: 'ARI',
      profileName: 'ARI',
      profileTitle: 'Heritage AI Guide',
      closeLabel: 'Close ARI chatbot',
      greeting: 'Hello, I am ARI. I can naturally guide you through Seoul heritage routes, place meanings, rainy-day alternatives, and English-friendly options using MARU data.',
      roleUser: 'Me',
      roleAssistant: 'ARI',
      placeholder: 'Ask naturally, like: It is my first time in Seoul, where should I start?',
      send: 'Send',
      busy: 'ARI is organizing the best answer for you.',
      error: 'The live reply connection is unstable right now. ARI will answer again using MARU data.',
      fallbackSuffix: 'A live model was unavailable, so ARI answered from MARU app data.',
      settingsToggle: 'LLM',
      settingsTitle: 'Live LLM Connection',
      settingsBody: 'Connect an OpenAI-compatible chat/completions endpoint or a local Ollama model. On GitHub Pages, the key stays only in this browser.',
      providerLabel: 'Reply source',
      providerOptionAuto: 'Auto: remote LLM, then Ollama, then MARU data',
      providerOptionRemote: 'OpenAI-compatible LLM only',
      providerOptionOllama: 'Local Ollama only',
      providerOptionFallback: 'MARU data only',
      remoteEndpointLabel: 'OpenAI-compatible endpoint',
      remoteModelLabel: 'Model name',
      remoteKeyLabel: 'API key',
      ollamaEndpointLabel: 'Ollama endpoint',
      ollamaModelLabel: 'Ollama model',
      providerNote: 'For a public release, move the API key to a server proxy. This browser-side key is best for demos or personal testing.',
      providerSave: 'Save LLM Settings',
      providerSavedLive: 'Live LLM settings saved. ARI will use the configured endpoint when available.',
      providerSavedLocal: 'Settings saved. Without a live API key, ARI will fall back to Ollama or MARU data.',
      providerSavedToast: 'ARI LLM settings saved.',
      quickQuestions: ['It is my first time in Seoul. Where should I start?', 'Why is this route recommended?', 'Where is good on a rainy day?', 'Is there a route with less walking?', 'Which places may have English support?']
    }
  },
  ja: {
    pageMeta: {
      home: { title: 'MARU | ソウル伝統文化AIガイド', description: 'MARU、海外旅行者のためのソウル伝統文化AIガイド' },
      planner: { title: '条件選択 | MARU', description: '旅行条件を段階的に選び、伝統文化ストーリールートを推薦します。' },
      routes: { title: 'おすすめコース | MARU', description: '選択条件に合わせた韓国伝統文化ストーリーコース' },
      routeDetail: { title: 'コース詳細 | MARU', description: '選択した伝統文化ストーリーコースの詳細と地図リンク' },
      map: { title: '地図 | MARU', description: 'Naver Map、Kakao Map、Google Mapsで開ける地図リンク' },
      weather: { title: 'ソウル天気 | MARU', description: 'ソウルの天気と天気別伝統文化コース推薦' },
      support: { title: '旅行者サポート | MARU', description: '緊急、紛失、観光案内、安全、翻訳サポート' },
      passport: { title: '保存したコース | MARU', description: 'MARUで保存したコースと伝統文化スタンプ' },
      about: { title: 'サービス紹介 | MARU', description: 'MARUのサービス概念と拡張計画' },
      cultureData: { title: '文化データ | MARU', description: '公共文化データ活用状況と推薦ロジック' },
      aiPhoto: { title: 'AIフォトカード | MARU', description: '朝鮮時代風の伝統フォトカード体験' }
    },
    home: {
      headerSub: 'ソウル伝統文化ガイド',
      heroAria: 'ソウル時間帯別推薦画像',
      languageAria: '言語選択'
    },
    planner: {
      header: 'MARU',
      headerSub: '条件選択',
      progressAria: '進行状況'
    },
    common: {
      bottomTabsAria: '下部ナビゲーション',
      timeImageAlt: '時間帯別の韓国伝統文化イメージ'
    },
    weather: {
      header: 'MARU',
      headerSub: 'ソウル天気',
      action: 'コースを見る',
      eyebrow: 'Weather Insight',
      title: '天気に合わせたおすすめコース',
      summary: 'ソウルの天気と予想混雑度をもとに、屋外コースと屋内代替案を一緒に案内します。',
      todayLabel: '今日のおすすめ',
      todayTitle: '宮殿・韓屋散策コース',
      todayBody: '晴れの日は宮殿の外部動線と韓屋の路地を一緒に歩きやすいです。',
      routeButton: 'おすすめコースを見る',
      forecastTitle: '3日予報',
      airTitle: '大気情報',
      pm10: '微細粉じん PM10',
      pm25: '超微細粉じん PM2.5',
      good: '良好',
      backupTitle: '天気別代替コース',
      rainProbability: '降水確率',
      values: {
        '오늘': '今日',
        '내일': '明日',
        '모레': '明後日',
        '맑음': '晴れ',
        '구름많음': '曇りがち',
        '흐림': '曇り',
        '해': '晴',
        '구름': '雲'
      },
      suggestions: [
        { label: '晴れの日おすすめ', title: '宮殿・韓屋散策コース', toast: '晴れの日おすすめコースを選択しました。' },
        { label: '雨の日おすすめ', title: '博物館・公演の屋内コース', toast: '雨の日の屋内コースを選択しました。' },
        { label: '暑い日おすすめ', title: '屋内展示・市場中心コース', toast: '暑い日の屋内中心コースを選択しました。' }
      ]
    },
    passport: {
      header: 'MARU',
      headerSub: '保存したコース',
      action: '新しいコース',
      eyebrow: 'Saved Routes',
      title: '私の文化旅行記録',
      body: '訪問した伝統文化コースを保存し、スタンプで記録します。',
      savedLabel: '保存したコース',
      empty: 'まだ保存したコースはありません。',
      choose: 'おすすめコースから選ぶ',
      again: 'もう一度見る',
      stampsTitle: '文化スタンプ',
      nextLabel: '次のおすすめ',
      nextTitle: '隠れた音と韓屋の路地',
      nextBody: '宮殿文化の次は、韓屋と国楽の静かな雰囲気を体験してみましょう。',
      view: 'コースを見る',
      status: { completed: '完了', locked: 'ロック中' },
      stamps: ['王室文化', '伝統市場', '韓屋通り', '国楽公演', '工芸体験', '近代遺産']
    },
    about: {
      header: 'MARU',
      headerSub: 'About MARU',
      action: 'データ',
      eyebrow: 'About',
      title: '海外旅行者のための伝統文化解説アプリ',
      body: 'MARUは観光地リストではなく、伝統文化の意味と流れを理解できるように助けるモバイル旅行パートナーです。',
      articles: [
        { title: '公共データ拡張', body: '現在のバージョンはGitHub Pagesに配布できる静的Webアプリで、文化資源JSONデータとJavaScript推薦ロジックで主要な流れを実装しています。今後はサーバー連携によって公式データ同期やリアルタイム推薦へ拡張できます。' },
        { title: '便利情報の提供', body: '英語案内の有無、外国人旅行者の人気、予約の必要性を一緒に表示し、現地での判断を助けます。' },
        { title: 'AI画像ポリシー', body: 'AI画像は公式写真ではなく理解を助ける視覚ガイドです。実運用では公式写真の使用権限または独自制作画像を別途管理する必要があります。' },
        { title: '一般旅行アプリとの違い', body: 'グルメや名所の羅列ではなく、宮殿、民俗、市場、公演を物語の流れでつなぎます。' },
        { title: 'AI利用原則', body: 'AIは未検証の事実を作らず、DBの事実をわかりやすい解説、キーワード、訪問ヒントに変換します。' },
        { title: '公式提携ではありません', body: 'ソウルオープンデータ、韓国観光公社、国家遺産庁、Visit Seoulなどはデータソースの参考名であり、公式提携を主張するものではありません。' }
      ],
      links: ['文化データ活用を見る', 'AI画像プロンプトを見る']
    },
    cultureData: {
      header: 'MARU',
      headerSub: '文化データ',
      action: '紹介',
      eyebrow: 'Data Dashboard',
      title: '公共文化データ拡張構造',
      body: '現在のバージョンはGitHub Pagesに配布できる静的Webアプリで、<code>ari_culture_resources_appjs.json</code> と <code>data/courses.json</code> を含む <code>data/*.json</code> を読み込み、推薦カード、コース、支援情報を動的に構成します。運用前に営業時間・料金・予約有無・座標・英語案内の有無を公式情報で再確認する必要があります。',
      factorsTitle: '推薦要素',
      factors: ['伝統性スコア', '外国人フレンドリー度', '隠れた文化価値', '徒歩の便利さ', '予算・屋内適合度'],
      sourcesTitle: 'データソース拡張計画',
      futureApiTitle: '今後のAPI',
      metrics: ['ソウル場所データ', 'おすすめコース', '英語案内あり', '外国人に人気', '予約必要', '画像URL', 'データ状態'],
      status: { loaded: 'ロード済み', fallback: '基本データ', seed: 'Seed data' },
      sourceStatus: { loaded: 'JSONデータをロード済み', fallback: '基本データ準備完了', seed: 'Seed data 使用中' },
      sources: ['ソウルオープンデータ広場', '韓国観光公社 TourAPI / 観光情報データ', '国家遺産庁 / 国家遺産関連データ', '公共データポータル', '文化機関公式サイト', '博物館・公演場・伝統市場の公式案内資料'],
      sourceNote: '現在のデータは運用準備用のソウル伝統文化seed dataであり、運用前に公式情報の確認が必要です。',
      logic: [
        { label: 'DB', title: '検証された文化事実', body: '現在はJSON seed dataで管理し、将来のバックエンドで公式出典、場所、分類、費用、屋内外、英語案内、予約必要性を保存できます。' },
        { label: 'Server', title: 'フィルタリングと推薦スコア', body: '現在はJavaScriptが条件と推薦スコアを計算し、将来のサーバーで訪問条件、外国人フレンドリー度、予約負担、天気適合度を計算できます。' },
        { label: 'AI', title: 'やさしい文化解説', body: '現在はアプリデータに基づく文化解説を提供し、AIは検証済みの事実をわかりやすい説明、キーワード、訪問ヒントに変換する役割です。' }
      ]
    },
    ari: {
      fabLabel: 'アリチャットを開く',
      dialogLabel: 'アリ伝統文化AIガイド',
      avatarAlt: 'アリキャラクター',
      name: 'アリ',
      profileName: 'アリ(ARI)',
      profileTitle: '伝統文化AIガイド',
      closeLabel: 'アリチャットを閉じる',
      greeting: 'こんにちは。アリです。MARUのデータをもとに、ソウル伝統文化コース、場所の意味、雨の日の代替案、英語案内の有無まで自然に案内します。',
      roleUser: '私',
      roleAssistant: 'アリ',
      placeholder: '初めてソウルに来たけど、どこから回ればいい？のように気軽に聞いてください。',
      send: '送信',
      busy: 'アリが内容を整理しています。',
      error: 'ライブ応答の接続が不安定です。MARUのデータをもとにもう一度案内します。',
      fallbackSuffix: 'ライブモデルに接続できなかったため、MARUアプリのデータをもとに案内しました。',
      quickQuestions: ['初めてソウルに来たけど、どこから回ればいい？', 'このコースはなぜおすすめ？', '雨の日はどこがいい？', 'あまり歩かないコースはある？', '英語案内がある場所は？']
    }
  },
  zh: {
    pageMeta: {
      home: { title: 'MARU | 首尔传统文化AI指南', description: 'MARU，为外国游客提供的首尔传统文化AI指南' },
      planner: { title: '条件选择 | MARU', description: '逐步选择旅行条件，获得传统文化故事路线推荐。' },
      routes: { title: '推荐路线 | MARU', description: '根据所选条件推荐韩国传统文化故事路线' },
      routeDetail: { title: '路线详情 | MARU', description: '所选传统文化故事路线详情和地图链接' },
      map: { title: '地图 | MARU', description: '可用Naver Map、Kakao Map和Google Maps打开的地图链接' },
      weather: { title: '首尔天气 | MARU', description: '首尔天气和按天气推荐的传统文化路线' },
      support: { title: '旅行者帮助 | MARU', description: '面向外国游客的紧急、遗失、旅游咨询、安全和翻译帮助' },
      passport: { title: '已保存路线 | MARU', description: '在MARU保存的路线和传统文化印章' },
      about: { title: '服务介绍 | MARU', description: 'MARU服务概念和扩展计划' },
      cultureData: { title: '文化数据 | MARU', description: '公共文化数据使用情况和推荐逻辑说明' },
      aiPhoto: { title: 'AI照片卡 | MARU', description: '朝鲜时代风传统照片卡体验' }
    },
    home: {
      headerSub: '首尔传统文化指南',
      heroAria: '首尔分时段推荐图片',
      languageAria: '语言选择'
    },
    planner: {
      header: 'MARU',
      headerSub: '条件选择',
      progressAria: '进度'
    },
    common: {
      bottomTabsAria: '底部导航',
      timeImageAlt: '按时间推荐的韩国传统文化图片'
    },
    weather: {
      header: 'MARU',
      headerSub: '首尔天气',
      action: '查看路线',
      eyebrow: 'Weather Insight',
      title: '基于天气的推荐路线',
      summary: '结合首尔天气和预计拥挤度，同时提供室外路线与室内替代方案。',
      todayLabel: '今日推荐',
      todayTitle: '宫殿与韩屋散步路线',
      todayBody: '晴天适合把宫殿外部动线和韩屋街巷一起安排。',
      routeButton: '查看推荐路线',
      forecastTitle: '3日预报',
      airTitle: '空气信息',
      pm10: '细颗粒物 PM10',
      pm25: '超细颗粒物 PM2.5',
      good: '良好',
      backupTitle: '按天气替代路线',
      rainProbability: '降雨概率',
      values: {
        '오늘': '今天',
        '내일': '明天',
        '모레': '后天',
        '맑음': '晴',
        '구름많음': '多云',
        '흐림': '阴',
        '해': '晴',
        '구름': '云'
      },
      suggestions: [
        { label: '晴天推荐', title: '宫殿与韩屋散步路线', toast: '已选择晴天推荐路线。' },
        { label: '雨天推荐', title: '博物馆与演出室内路线', toast: '已选择雨天室内路线。' },
        { label: '炎热天气推荐', title: '室内展览与市场路线', toast: '已选择炎热天气室内路线。' }
      ]
    },
    passport: {
      header: 'MARU',
      headerSub: '已保存路线',
      action: '新路线',
      eyebrow: 'Saved Routes',
      title: '我的文化旅行记录',
      body: '保存参观过的传统文化路线，并用印章记录。',
      savedLabel: '已保存路线',
      empty: '还没有保存的路线。',
      choose: '从推荐路线中选择',
      again: '再次查看',
      stampsTitle: '文化印章',
      nextLabel: '下一条推荐',
      nextTitle: '隐藏的声音与韩屋街巷',
      nextBody: '体验王室文化之后，可以感受韩屋和国乐的安静氛围。',
      view: '查看路线',
      status: { completed: '已完成', locked: '未解锁' },
      stamps: ['王室文化', '传统市场', '韩屋街', '国乐演出', '工艺体验', '近代遗产']
    },
    about: {
      header: 'MARU',
      headerSub: 'About MARU',
      action: '数据',
      eyebrow: 'About',
      title: '面向外国游客的传统文化解读应用',
      body: 'MARU不是普通景点列表，而是帮助游客理解传统文化意义和脉络的移动旅行伙伴。',
      articles: [
        { title: '公共数据扩展', body: '当前版本是可部署到GitHub Pages的静态网页应用，已经用文化资源JSON数据和JavaScript推荐逻辑实现核心流程。后续可通过服务器层扩展到官方数据同步和实时推荐。' },
        { title: '便利信息提供', body: '同时显示英语支持、外国游客人气和是否需要预约，帮助外国游客现场做决定。' },
        { title: 'AI图片政策', body: 'AI图片不是官方地点照片，而是帮助理解的视觉指南。实际运营时需要另行管理官方照片授权或自制图片。' },
        { title: '与普通旅行应用的区别', body: '不是罗列美食和景点，而是把宫殿、民俗、市场和演出连接成故事流。' },
        { title: 'AI使用原则', body: 'AI不会编造未经验证的事实，而是把数据库中的事实转化为简单说明、关键词和参观提示。' },
        { title: '并非官方合作', body: '首尔开放数据、韩国旅游发展局、国家遗产厅、Visit Seoul等仅作为数据来源参考名称，并不表示官方合作。' }
      ],
      links: ['查看文化数据使用', '查看AI图片提示词']
    },
    cultureData: {
      header: 'MARU',
      headerSub: '文化数据',
      action: '介绍',
      eyebrow: 'Data Dashboard',
      title: '公共文化数据扩展结构',
      body: '当前版本是可部署到GitHub Pages的静态网页应用，会读取 <code>ari_culture_resources_appjs.json</code> 和包含 <code>data/courses.json</code> 的 <code>data/*.json</code>，动态生成推荐卡片、路线和支援信息。正式运营前，开放时间、费用、预约状态、坐标和英语支持情况需要按官方来源重新确认。',
      factorsTitle: '推荐要素',
      factors: ['传统性分数', '外国游客友好度', '隐藏文化价值', '步行便利性', '预算与室内适合度'],
      sourcesTitle: '数据来源扩展计划',
      futureApiTitle: '未来API',
      metrics: ['首尔地点数据', '推荐路线', '提供英语信息', '外国游客喜爱', '需要预约', '图片URL', '数据状态'],
      status: { loaded: '已加载', fallback: '基础数据', seed: 'Seed data' },
      sourceStatus: { loaded: 'JSON数据已加载', fallback: '基础数据已准备', seed: 'Seed data 使用中' },
      sources: ['首尔开放数据广场', '韩国旅游发展局 TourAPI / 旅游信息数据', '国家遗产厅 / 国家遗产相关数据', '公共数据门户', '文化机构官方网站', '博物馆/演出场/传统市场官方指南资料'],
      sourceNote: '当前数据是用于运营准备的首尔传统文化seed data，正式运营前需要确认官方信息。',
      logic: [
        { label: 'DB', title: '已验证的文化事实', body: '当前以JSON seed data管理，未来后端可保存官方来源、地点、分类、费用、室内外、英语支持和是否需要预约。' },
        { label: 'Server', title: '筛选与推荐分数', body: '当前由JavaScript计算条件和推荐分数，未来服务器可计算访问条件、外国游客友好度、预约负担和天气适合度。' },
        { label: 'AI', title: '简单文化解读', body: '当前提供基于应用数据的文化说明；AI的角色是把已验证事实转化为简单说明、关键词和参观提示。' }
      ]
    },
    ari: {
      fabLabel: '打开ARI聊天',
      dialogLabel: 'ARI传统文化AI指南',
      avatarAlt: 'ARI角色',
      name: 'ARI',
      profileName: 'ARI',
      profileTitle: '传统文化AI指南',
      closeLabel: '关闭ARI聊天',
      greeting: '你好，我是ARI。我可以根据MARU数据，自然地帮你了解首尔传统文化路线、地点含义、雨天替代方案和英语支持信息。',
      roleUser: '我',
      roleAssistant: 'ARI',
      placeholder: '可以自然一点提问，比如：我第一次来首尔，应该先去哪里？',
      send: '发送',
      busy: 'ARI正在整理最合适的回答。',
      error: '实时回复连接暂时不稳定。ARI会根据MARU数据继续回答。',
      fallbackSuffix: '由于无法连接实时模型，ARI改为根据MARU应用数据回答。',
      quickQuestions: ['我第一次来首尔，应该先去哪里？', '为什么推荐这条路线？', '雨天适合去哪里？', '有没有少走路一点的路线？', '哪些地方可能有英语信息？']
    }
  }
};

function mergeI18nCopy(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    const targetValue = target[key];
    const shouldMerge =
      value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      targetValue &&
      typeof targetValue === 'object' &&
      !Array.isArray(targetValue);

    target[key] = shouldMerge ? mergeI18nCopy(targetValue, value) : value;
  });
  return target;
}

Object.entries(EXTENDED_UI_COPY).forEach(([language, copy]) => {
  mergeI18nCopy(translations[language], copy);
});

const PAGE_META_KEYS = {
  'index.html': 'home',
  'planner.html': 'planner',
  'routes.html': 'routes',
  'route-detail.html': 'routeDetail',
  'map.html': 'map',
  'weather.html': 'weather',
  'support.html': 'support',
  'passport.html': 'passport',
  'about.html': 'about',
  'culture-data.html': 'cultureData',
  'ai-photo.html': 'aiPhoto'
};

const CONVENIENCE_TRANSLATIONS = {
  ko: {
    englishAvailable: '영어 안내 가능',
    checkEnglish: '영어 안내 확인 필요',
    visitorFavorite: '외국인 인기',
    hiddenResource: '숨은 문화자원',
    reservationNeeded: '예약 필요',
    noReservation: '예약 불필요'
  },
  en: {
    englishAvailable: 'English available',
    checkEnglish: 'Check English support',
    visitorFavorite: 'Visitor favorite',
    hiddenResource: 'Hidden culture resource',
    reservationNeeded: 'Reservation needed',
    noReservation: 'No reservation needed'
  },
  ja: {
    englishAvailable: '英語案内あり',
    checkEnglish: '英語案内を確認',
    visitorFavorite: '外国人に人気',
    hiddenResource: '隠れた文化資源',
    reservationNeeded: '予約必要',
    noReservation: '予約不要'
  },
  zh: {
    englishAvailable: '提供英语导览',
    checkEnglish: '请确认英语支持',
    visitorFavorite: '外国游客喜爱',
    hiddenResource: '隐藏文化资源',
    reservationNeeded: '需要预约',
    noReservation: '无需预约'
  }
};

const GENERATED_ROUTE_TRANSLATIONS = {
  ja: {
    'first-visit-seoul-heritage': {
      title: '初めてのソウル伝統文化コース',
      subtitle: '宮殿・韓屋・伝統通りを一度に理解する入門ルート',
      reason: 'ソウルの代表的な伝統文化シーンを無理なくつなげて見られます。',
      summary: '宮殿、韓屋の街並み、伝統通りをつなぐ初訪問者向けのコースです。',
      tip: '景福宮周辺は歩く時間が多いので、歩きやすい靴がおすすめです。',
      time: '約3〜4時間',
      walking: '普通',
      fee: '低予算'
    },
    'rainy-day-indoor-heritage': {
      title: '雨の日おすすめコース',
      subtitle: '博物館と屋内文化施設を中心に巡るルート',
      reason: '天気の負担を減らしながら、展示と文化施設で伝統文化の流れを追えます。',
      summary: '雨の日でも安定して楽しめる屋内中心の文化コースです。',
      tip: '博物館の休館日と公演・体験の予約情報を先に確認してください。',
      time: '約3時間',
      walking: '少なめ',
      fee: '無料〜有料'
    },
    'photo-spot-heritage-walk': {
      title: '写真スポットコース',
      subtitle: '宮殿・韓屋・城郭の景色を楽しむルート',
      reason: '写真に残しやすいソウル伝統文化の代表的な場面を自然につなげます。',
      summary: '視覚的に印象的な場所を中心に構成した散策コースです。',
      tip: '夕方は城郭や石垣道が特にきれいです。雨の日は屋内コースに切り替えましょう。',
      time: '約3〜4時間',
      walking: '普通',
      fee: '低予算'
    },
    'deep-history-route': {
      title: '歴史を深く見るコース',
      subtitle: '王室儀礼・近現代史・都市史をつなぐルート',
      reason: '王室文化から近現代の記憶まで続くソウルの歴史の流れを見られます。',
      summary: '儀礼、近現代史、城門、都市史を深く理解するコースです。',
      tip: '展示解説を読む時間を考え、訪問地を増やしすぎないのがおすすめです。',
      time: '半日',
      walking: '普通',
      fee: '無料〜有料'
    },
    'easy-walking-heritage': {
      title: '気軽に歩くコース',
      subtitle: '歩行負担が少ない近距離の伝統文化散策',
      reason: '移動の負担を抑えながら、寺院、韓屋、伝統通り、小さな博物館を体験できます。',
      summary: '近い場所をつなぐ、軽めの伝統文化散策コースです。',
      tip: '益善洞と仁寺洞は混雑することがあるため、午前か早い夕方が歩きやすいです。',
      time: '約2〜3時間',
      walking: '少なめ',
      fee: '無料中心'
    },
    'southern-heritage-extension': {
      title: 'ソウル南部の伝統遺産コース',
      subtitle: '王陵・寺院・古墳をつなぐ拡張ルート',
      reason: '都心の宮殿以外にも、ソウル南部で王陵、寺院、古代遺跡を一緒に見られます。',
      summary: '江南・松坡エリアの伝統遺産を短くまとめた拡張コースです。',
      tip: '場所同士の距離があるため、公共交通やタクシー移動を前提に余裕を持って計画してください。',
      time: '半日',
      walking: '普通',
      fee: '無料〜有料'
    }
  },
  zh: {
    'first-visit-seoul-heritage': {
      title: '首次到访推荐路线',
      subtitle: '一次理解宫殿、韩屋与传统街区的入门路线',
      reason: '适合外国游客轻松串联首尔传统文化的代表场景。',
      summary: '连接宫殿、韩屋街区和传统街道的首尔传统文化入门路线。',
      tip: '景福宫周边步行较多，建议穿舒适的鞋。',
      time: '约3–4小时',
      walking: '普通',
      fee: '低预算'
    },
    'rainy-day-indoor-heritage': {
      title: '雨天推荐路线',
      subtitle: '以博物馆和室内文化空间为主的路线',
      reason: '以室内展览和文化设施为中心，降低天气影响并延续传统文化脉络。',
      summary: '雨天也能稳定参观的室内文化路线。',
      tip: '请先确认博物馆闭馆日以及演出、体验是否需要预约。',
      time: '约3小时',
      walking: '较少',
      fee: '免费至付费'
    },
    'photo-spot-heritage-walk': {
      title: '摄影名胜路线',
      subtitle: '围绕宫殿、韩屋、城墙和散步路的视觉路线',
      reason: '自然串联适合拍照留念的首尔传统文化代表场景。',
      summary: '以视觉印象强的地点为中心设计的传统文化散步路线。',
      tip: '傍晚时城墙和石墙路尤其适合拍照；下雨时建议改为室内路线。',
      time: '约3–4小时',
      walking: '普通',
      fee: '低预算'
    },
    'deep-history-route': {
      title: '深度历史路线',
      subtitle: '连接王室礼仪、近现代史和城市史的路线',
      reason: '可以看到首尔传统文化从王室文化延伸到近现代记忆的脉络。',
      summary: '深入理解王室礼仪、近现代史、城门与城市历史的路线。',
      tip: '建议预留阅读展览说明的时间，不要安排过多地点。',
      time: '半天',
      walking: '普通',
      fee: '免费至付费'
    },
    'easy-walking-heritage': {
      title: '轻松步行路线',
      subtitle: '步行难度较低、地点相近的传统文化散步',
      reason: '减少移动负担，同时体验寺庙、韩屋、传统街道和小型博物馆。',
      summary: '串联相近地点的轻量传统文化散步路线。',
      tip: '益善洞和仁寺洞可能较拥挤，上午或傍晚较早时段更舒适。',
      time: '约2–3小时',
      walking: '较少',
      fee: '以免费为主'
    },
    'southern-heritage-extension': {
      title: '首尔南部传统遗产路线',
      subtitle: '连接王陵、寺庙和古坟的扩展路线',
      reason: '除了市中心宫殿，也可以在首尔南部串联王陵、寺庙和古代遗址。',
      summary: '围绕江南和松坡传统遗产设计的短途扩展路线。',
      tip: '地点之间距离较远，建议预留交通时间并结合地铁或出租车移动。',
      time: '半天',
      walking: '普通',
      fee: '免费至付费'
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

const PLACE_NAME_JP = {
  '경복궁': '景福宮',
  '국립고궁박물관': '国立古宮博物館',
  '국립민속박물관': '国立民俗博物館',
  '통인시장': '通仁市場',
  '운현궁': '雲峴宮',
  '서울우리소리박물관': 'ソウルウリソリ博物館',
  '덕수궁': '徳寿宮',
  '익선동 한옥거리': '益善洞韓屋通り',
  '덕수궁 돌담길': '徳寿宮石垣道',
  '국립정동극장': '国立貞洞劇場'
};

const PLACE_NAME_CN = {
  '경복궁': '景福宫',
  '국립고궁박물관': '国立古宫博物馆',
  '국립민속박물관': '国立民俗博物馆',
  '통인시장': '通仁市场',
  '운현궁': '云岘宫',
  '서울우리소리박물관': '首尔我们的声音博物馆',
  '덕수궁': '德寿宫',
  '익선동 한옥거리': '益善洞韩屋街',
  '덕수궁 돌담길': '德寿宫石墙路',
  '국립정동극장': '国立贞洞剧场'
};

const PLACE_NAME_BY_LANGUAGE = {
  EN: PLACE_NAME_EN,
  JP: PLACE_NAME_JP,
  CN: PLACE_NAME_CN
};

const ROUTE_PLACE_COORDS = {
  '익선동 한옥거리': { latitude: 37.5742, longitude: 126.9898 },
  '덕수궁 돌담길': { latitude: 37.5662, longitude: 126.9748 },
  '국립정동극장': { latitude: 37.5664, longitude: 126.9729 }
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

const JP_ROUTE_TRANSLATIONS = {
  'royal-culture-local-life': {
    title: '王室文化から地域の日常へ',
    subtitle: '宮殿文化と市場の日常をつなぐコース',
    time: '約3時間',
    walking: '普通',
    fee: '低予算',
    reason: '王室文化、宮殿建築、民俗生活、伝統市場を一つの流れで理解できる初めての旅行者向けコースです。',
    summary: '王室の遺物から宮殿と民俗文化を見て、最後は地域市場の日常文化へ自然につなげます。',
    tip: '営業時間、料金、予約、休館日は訪問前に公式情報で確認してください。',
    convenienceLabels: ['英語案内あり', '旅行者に人気', '予約不要']
  },
  'hidden-sounds-hanok-streets': {
    title: '隠れた音と韓屋の路地',
    subtitle: '伝統音楽と韓屋の雰囲気を味わうコース',
    time: '約2.5時間',
    walking: '少なめ',
    fee: '主に無料',
    reason: '長く歩かずに韓屋の雰囲気と韓国の伝統音文化を一緒に体験できます。',
    summary: '王室ゆかりの空間から始め、韓国民謡の音文化を聞き、静かな韓屋通りで締めくくります。',
    tip: '博物館のプログラム時間と韓屋通りの混雑状況を事前に確認してください。',
    convenienceLabels: ['一部英語案内あり', '隠れた文化資源', '予約不要']
  },
  'modern-seoul-performing-heritage': {
    title: '近代ソウルと伝統公演',
    subtitle: '近代史と舞台芸術をつなぐコース',
    time: '約3時間',
    walking: '少なめ',
    fee: '有料あり',
    reason: '近代ソウルの歴史と伝統公演を夕方の流れで楽しみたい旅行者に向いています。',
    summary: '徳寿宮で近代ソウルの層を見て、石垣道を歩き、伝統公演で一日を締めくくります。',
    tip: '公演チケットは事前に予約し、石垣道を歩く時間を余裕を持って確保してください。',
    convenienceLabels: ['英語案内あり', '旅行者に人気', '公演予約確認']
  }
};

const CN_ROUTE_TRANSLATIONS = {
  'royal-culture-local-life': {
    title: '从王室文化到在地日常',
    subtitle: '连接宫殿文化与传统市场的路线',
    time: '约3小时',
    walking: '中等',
    fee: '低预算',
    reason: '这条路线把王室文化、宫殿建筑、民俗生活和传统市场串成一个容易理解的故事。',
    summary: '从王室文物开始，参观宫殿与民俗文化，最后在传统市场感受首尔的日常生活。',
    tip: '出发前请确认开放时间、费用、预约和休馆信息。',
    convenienceLabels: ['提供英语信息', '游客喜爱', '通常无需预约']
  },
  'hidden-sounds-hanok-streets': {
    title: '隐藏的声音与韩屋街巷',
    subtitle: '体验传统音乐和韩屋氛围的路线',
    time: '约2.5小时',
    walking: '少到中等',
    fee: '大多免费',
    reason: '适合想轻松体验韩屋氛围和韩国传统声音文化的游客。',
    summary: '从王室生活空间出发，聆听韩国民谣文化，最后走进安静的韩屋街巷。',
    tip: '建议提前确认博物馆体验项目时间和韩屋街区拥挤程度。',
    convenienceLabels: ['部分英语信息', '隐藏文化资源', '通常无需预约']
  },
  'modern-seoul-performing-heritage': {
    title: '近代首尔与传统演出',
    subtitle: '连接近代历史与传统舞台艺术的路线',
    time: '约3小时',
    walking: '较少',
    fee: '有付费选项',
    reason: '适合想在傍晚把近代首尔历史和传统演出结合起来体验的游客。',
    summary: '在德寿宫了解近代首尔，沿石墙路散步，最后以传统演出结束行程。',
    tip: '建议提前预订演出票，并为石墙路散步预留充足时间。',
    convenienceLabels: ['提供英语信息', '游客喜爱', '确认演出预约']
  }
};

const ROUTE_TRANSLATIONS = {
  EN: EN_ROUTE_TRANSLATIONS,
  JP: JP_ROUTE_TRANSLATIONS,
  CN: CN_ROUTE_TRANSLATIONS
};

const RESOURCE_TRANSLATIONS = {
  EN: EN_RESOURCE_TRANSLATIONS
};

const VISIT_SEOUL_SUPPORT_DATA = [
  {
    id: 'tourist-info',
    title: '관광안내소',
    description: '여행 중 길찾기, 교통, 축제, 현장 문의가 필요할 때 가까운 관광안내소를 이용하세요.',
    points: ['명동, 광화문, 홍대 등 주요 관광지 주변 안내소를 확인할 수 있습니다.', '언어 지원과 운영 시간은 방문 전 공식 정보를 확인하세요.'],
    url: 'https://korean.visitseoul.net/traveler-support'
  },
  {
    id: 'medical-tourism',
    title: '서울의료관광센터',
    description: '의료관광 상담과 외국인 환자 지원 정보가 필요할 때 연결되는 공식 지원 채널입니다.',
    points: ['의료기관 정보, 상담, 외국인 환자 관련 안내를 확인할 수 있습니다.', '건강 문제가 있으면 숙소 위치와 증상을 함께 준비하세요.'],
    url: 'https://medical.visitseoul.net/;jsessionid=DF884FB79D73D04174E0A50C7A13C585'
  },
  {
    id: 'emergency',
    title: '비상 연락처',
    description: '긴급 상황, 안전 문제, 응급 의료가 필요할 때 먼저 확인할 번호입니다.',
    points: ['경찰 112, 화재/구급 119, 관광통역안내 1330을 기억하세요.', '현재 위치와 숙소 주소를 지도 앱에서 먼저 확인하면 신고가 쉬워집니다.'],
    url: 'https://korean.visitseoul.net/traveler-support'
  },
  {
    id: 'complaint',
    title: '서울관광불편신고센터',
    description: '여행 중 불편 사항이나 관광 관련 민원이 생겼을 때 도움을 요청할 수 있습니다.',
    points: ['택시, 숙박, 쇼핑, 관광 서비스 불편 사항을 정리해두면 접수가 쉽습니다.', '가능하면 영수증, 위치, 시간 정보를 함께 보관하세요.'],
    url: 'https://korean.visitseoul.net/traveler-support'
  },
  {
    id: 'safety',
    title: '안전정보',
    description: '낯선 지역에서 안전하게 이동하기 위한 기본 정보를 확인하세요.',
    points: ['야간 이동 시 밝은 길과 대중교통 중심 동선을 우선 선택하세요.', '긴급 알림과 현지 안내 방송이 있으면 즉시 확인하세요.'],
    url: 'https://korean.visitseoul.net/traveler-support'
  },
  {
    id: 'lost-items',
    title: '분실물 찾기',
    description: '여행 중 물건을 잃어버렸을 때 경찰청 유실물 시스템과 관광안내 정보를 함께 확인하세요.',
    points: ['분실 장소, 시간, 물품 특징을 가능한 구체적으로 기록하세요.', '지하철/버스/택시 이용 중 분실했다면 이용 노선과 결제 정보를 확인하세요.'],
    url: 'https://www.lost112.go.kr/'
  },
  {
    id: 'translation',
    title: '번역/통역 도움',
    description: '현장에서 의사소통이 막힐 때 관광통역안내와 번역 도구를 함께 사용하세요.',
    points: ['관광통역안내 1330은 여행 상담과 통역 지원을 제공합니다.', '장소명, 예약명, 알레르기, 목적지는 짧은 문장으로 준비해두세요.'],
    url: 'https://1330chat.visitkorea.or.kr/'
  },
  {
    id: 'airport',
    title: '공항 이동 정보',
    description: '인천공항과 김포공항에서 서울 도심으로 이동하는 기본 동선을 확인하세요.',
    points: ['AREX 공항철도, 공항버스, 택시 중 도착 시간과 짐의 양에 맞춰 선택하세요.', '막차 시간과 숙소 주소는 출발 전에 반드시 확인하세요.'],
    url: 'https://www.airport.kr/ap/en/tpt/pblctpt/pblctpt.do'
  },
  {
    id: 'tmoney',
    title: '교통카드/T-money 안내',
    description: '지하철, 버스, 편의점 결제에 사용할 수 있는 교통카드 준비 안내입니다.',
    points: ['공항, 지하철역, 편의점에서 구매와 충전이 가능합니다.', '환승 할인은 같은 카드로 태그해야 적용됩니다.'],
    url: 'https://www.t-money.co.kr/'
  },
  {
    id: 'rainy',
    title: '날씨/우천 시 대체 코스',
    description: '비가 오거나 덥고 추운 날에는 실내 중심으로 코스를 바꿀 수 있습니다.',
    points: ['박물관, 전시관, 공연장, 전통시장 실내 구간을 우선 추천합니다.', '우산 이동이 부담되면 지하철역에서 가까운 장소를 먼저 보세요.'],
    url: 'https://www.weather.go.kr/w/index.do'
  }
];

const SUPPORT_TRANSLATIONS = {
  EN: {
    'tourist-info': {
      title: 'Tourist Information Centers',
      description: 'Use nearby centers for maps, transit questions, festivals, and on-site help.',
      points: ['Check centers near major areas such as Myeong-dong, Gwanghwamun, and Hongdae.', 'Confirm language support and opening hours before visiting.']
    },
    'medical-tourism': {
      title: 'Seoul Medical Tourism Center',
      description: 'Official support for medical tourism consultation and foreign patient information.',
      points: ['Check medical institution information, consultation options, and visitor support.', 'Prepare your location and symptoms if you need medical help.']
    },
    emergency: {
      title: 'Emergency Contacts',
      description: 'Numbers to check first for emergency, safety, or medical situations.',
      points: ['Police 112, fire/ambulance 119, and travel interpretation 1330 are the key numbers.', 'Open your map app first to confirm your current location and accommodation address.']
    },
    complaint: {
      title: 'Seoul Tourist Complaint Center',
      description: 'A support channel for problems or complaints during travel in Seoul.',
      points: ['Write down the place, time, receipt, and what happened if possible.', 'Keep taxi, shopping, lodging, or reservation details for easier reporting.']
    },
    safety: {
      title: 'Safety Information',
      description: 'Basic safety information for moving around unfamiliar areas.',
      points: ['At night, choose bright streets and transit-centered routes.', 'Check local alerts and announcements as soon as you see them.']
    },
    'lost-items': {
      title: 'Lost Items',
      description: 'Use the police lost-item system and tourist information when something goes missing.',
      points: ['Record the place, time, and item details as clearly as possible.', 'For transit losses, check route, station, taxi, and payment records.']
    },
    translation: {
      title: 'Translation / Interpretation Help',
      description: 'Use travel interpretation and translation tools when communication is difficult.',
      points: ['The 1330 travel helpline can support travel questions and interpretation.', 'Prepare short phrases for place names, reservation names, allergies, and destinations.']
    },
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
    rainy: {
      title: 'Weather / Rainy-Day Backup Routes',
      description: 'Switch to indoor-oriented routes during rain, heat, or cold.',
      points: ['Prioritize museums, exhibitions, theaters, and indoor market sections.', 'If umbrella travel is difficult, open places near subway stations first.']
    }
  },
  JP: {
    'tourist-info': {
      title: '観光案内所',
      description: '道案内、交通、イベント、現地での相談が必要な時に近くの案内所を利用できます。',
      points: ['明洞、光化門、弘大など主要エリア周辺の案内所を確認できます。', '言語対応と営業時間は訪問前に公式情報で確認してください。']
    },
    'medical-tourism': {
      title: 'ソウル医療観光センター',
      description: '医療観光相談と外国人患者向け情報につながる公式支援チャンネルです。',
      points: ['医療機関情報、相談、外国人患者支援を確認できます。', '体調不良時は現在地と症状を一緒に準備してください。']
    },
    emergency: {
      title: '緊急連絡先',
      description: '緊急、事故、安全、医療サポートが必要な時に最初に確認する番号です。',
      points: ['警察112、火災・救急119、観光通訳案内1330を覚えておきましょう。', '現在地と宿泊先住所を地図アプリで確認しておくと通報しやすくなります。']
    },
    complaint: {
      title: 'ソウル観光苦情申告センター',
      description: '旅行中の不便や観光関連のトラブルを相談できます。',
      points: ['場所、時間、領収書、状況をメモしておくと申告がスムーズです。', 'タクシー、宿泊、ショッピング、予約情報は保存しておきましょう。']
    },
    safety: {
      title: '安全情報',
      description: '慣れない地域を安全に移動するための基本情報です。',
      points: ['夜間は明るい道と公共交通中心の移動を優先してください。', '緊急アラートや現地案内があればすぐ確認してください。']
    },
    'lost-items': {
      title: '忘れ物・落とし物',
      description: '物をなくした時は警察の遺失物システムと観光案内を一緒に確認します。',
      points: ['なくした場所、時間、物の特徴をできるだけ詳しく記録してください。', '交通機関でなくした場合は路線、駅、タクシー、決済情報を確認してください。']
    },
    translation: {
      title: '翻訳・通訳サポート',
      description: '現地で会話が難しい時に観光通訳案内と翻訳ツールを使えます。',
      points: ['1330観光通訳案内は旅行相談と通訳を支援します。', '場所名、予約名、アレルギー、目的地は短い文で準備しておくと便利です。']
    },
    airport: {
      title: '空港アクセス情報',
      description: '仁川空港・金浦空港からソウル市内へ移動する基本手段です。',
      points: ['AREX空港鉄道、空港バス、タクシーを到着時間と荷物量に合わせて選びましょう。', '終電・終バスと宿泊先住所は出発前に確認してください。']
    },
    tmoney: {
      title: '交通カード/T-money案内',
      description: '地下鉄、バス、コンビニ決済に使える交通カードの案内です。',
      points: ['空港、地下鉄駅、コンビニで購入・チャージできます。', '乗り換え割引は同じカードでタッチする必要があります。']
    },
    rainy: {
      title: '天気・雨の日の代替コース',
      description: '雨、暑さ、寒さが強い日は屋内中心のコースに切り替えられます。',
      points: ['博物館、展示館、劇場、伝統市場の屋内エリアを優先します。', '傘での移動が大変な時は地下鉄駅に近い場所を先に選びましょう。']
    }
  },
  CN: {
    'tourist-info': {
      title: '旅游咨询处',
      description: '需要问路、交通、活动或现场帮助时，可以使用附近的旅游咨询处。',
      points: ['可查看明洞、光化门、弘大等主要区域附近的咨询处。', '建议出发前确认语言服务和开放时间。']
    },
    'medical-tourism': {
      title: '首尔医疗旅游中心',
      description: '提供医疗旅游咨询和外国患者相关信息的官方支持渠道。',
      points: ['可查看医疗机构信息、咨询方式和外国患者支持。', '如需医疗帮助，请准备当前位置和症状信息。']
    },
    emergency: {
      title: '紧急联系方式',
      description: '遇到紧急、安全或医疗情况时优先确认的号码。',
      points: ['警察112、消防/急救119、旅游翻译咨询1330是关键号码。', '先在地图中确认当前位置和住宿地址，会更容易求助。']
    },
    complaint: {
      title: '首尔旅游不便申报中心',
      description: '旅行中遇到不便或旅游服务问题时可以寻求帮助。',
      points: ['尽量记录地点、时间、收据和发生的情况。', '出租车、住宿、购物或预约信息请保留好。']
    },
    safety: {
      title: '安全信息',
      description: '在陌生地区安全移动所需的基本信息。',
      points: ['夜间优先选择明亮街道和公共交通方便的路线。', '如看到紧急提示或现场公告，请立即确认。']
    },
    'lost-items': {
      title: '寻找遗失物',
      description: '丢失物品时，可同时查询警方遗失物系统和旅游咨询信息。',
      points: ['请尽量详细记录丢失地点、时间和物品特征。', '如果是在交通工具上遗失，请确认路线、车站、出租车和支付记录。']
    },
    translation: {
      title: '翻译/口译帮助',
      description: '现场沟通困难时，可使用旅游翻译咨询和翻译工具。',
      points: ['1330旅游咨询热线可提供旅行咨询和翻译帮助。', '建议提前准备地点名、预约名、过敏信息和目的地短句。']
    },
    airport: {
      title: '机场交通信息',
      description: '从仁川机场或金浦机场前往首尔市中心的基本交通方式。',
      points: ['可根据到达时间和行李量选择AREX机场铁路、机场巴士或出租车。', '出发前请确认末班车时间和住宿地址。']
    },
    tmoney: {
      title: '交通卡/T-money指南',
      description: '用于地铁、公交和便利店支付的交通卡指南。',
      points: ['可在机场、地铁站和便利店购买及充值。', '换乘优惠通常需要使用同一张卡刷卡。']
    },
    rainy: {
      title: '天气/雨天替代路线',
      description: '下雨、炎热或寒冷时，可以切换为室内为主的路线。',
      points: ['优先选择博物馆、展览馆、剧场和传统市场室内区域。', '如果撑伞移动不方便，先选择靠近地铁站的地点。']
    }
  }
};

SUPPORT_DATA.splice(0, SUPPORT_DATA.length, ...VISIT_SEOUL_SUPPORT_DATA);

const SUPPORT_QUICK_ACTIONS = [
  { target: 'emergency', label: { KR: '비상 연락처', EN: 'Emergency', JP: '緊急連絡先', CN: '紧急联系' } },
  { target: 'medical-tourism', label: { KR: '의료 지원', EN: 'Medical help', JP: '医療サポート', CN: '医疗帮助' } },
  { target: 'translation', label: { KR: '번역 도움', EN: 'Translation', JP: '翻訳サポート', CN: '翻译帮助' } },
  { target: 'lost-items', label: { KR: '분실물 찾기', EN: 'Lost items', JP: '忘れ物', CN: '遗失物' } }
];

const PREFERENCE_TRANSLATIONS = {
  EN: {
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
  },
  JP: {
    '종로구': '鍾路区',
    '중구': '中区',
    '종로+중구': '鍾路区+中区',
    '2시간': '2時間',
    '3시간': '3時間',
    '반나절': '半日',
    '하루': '1日',
    '궁궐': '宮殿',
    '한옥': '韓屋',
    '전통시장': '伝統市場',
    '공예': '工芸',
    '공연': '公演',
    '박물관': '博物館',
    '무료 위주': '主に無料',
    '유료 가능': '有料可',
    '상관없음': '指定なし',
    '적게 걷기': '少なめに歩く',
    '보통': '普通',
    '많이 걸어도 괜찮음': 'たくさん歩いてもよい',
    '실내': '屋内',
    '실외': '屋外'
  },
  CN: {
    '종로구': '钟路区',
    '중구': '中区',
    '종로+중구': '钟路区+中区',
    '2시간': '2小时',
    '3시간': '3小时',
    '반나절': '半天',
    '하루': '一天',
    '궁궐': '宫殿',
    '한옥': '韩屋',
    '전통시장': '传统市场',
    '공예': '工艺',
    '공연': '演出',
    '박물관': '博物馆',
    '무료 위주': '以免费为主',
    '유료 가능': '可付费',
    '상관없음': '不限',
    '적게 걷기': '少走路',
    '보통': '普通',
    '많이 걸어도 괜찮음': '可多步行',
    '실내': '室内',
    '실외': '室外'
  }
};

const MAP_POSITIONS = [
  { left: '18%', top: '24%' },
  { left: '42%', top: '38%' },
  { left: '61%', top: '55%' },
  { left: '74%', top: '70%' }
];

const PRIORITY_PLACE_NAMES = [
  '경복궁',
  '창덕궁',
  '덕수궁',
  '종묘',
  '북촌한옥마을',
  '인사동',
  '남산골한옥마을',
  '조계사',
  '국립민속박물관',
  '국립고궁박물관',
  '서울역사박물관',
  '서대문형무소역사관',
  '숭례문',
  '한양도성',
  '운현궁',
  '선릉과 정릉',
  '석촌동 고분군'
];

const DETAIL_STORY_PATTERNS = [
  '나무',
  '유물',
  '전시품',
  '석물',
  '불상',
  '비석',
  '현판',
  '탑신',
  '초상',
  '문양',
  '부재'
];

let ROUTE_BLUEPRINTS = [
  {
    id: 'first-visit-seoul-heritage',
    title: '첫 방문자 추천 코스',
    englishTitle: 'First-Time Seoul Heritage Route',
    summary: '왕실 유물, 궁궐, 생활문화, 한옥, 전통거리를 한 번에 이해하는 입문 코스입니다.',
    englishExplanation: 'A first-time route connecting royal artifacts, a palace, folk culture, hanok, and a traditional street.',
    reason: '품질·전통성·외국인 친화 점수가 높은 대표 장소를 묶어 서울 전통문화의 큰 흐름을 가장 쉽게 보여줍니다.',
    reasonEn: 'This route combines high-quality, high-tradition, visitor-friendly places to show the core flow of Seoul heritage.',
    tip: '경복궁 권역은 걸을 구간이 많으니 편한 신발을 준비하고, 박물관을 먼저 보면 궁궐 해석이 쉬워집니다.',
    tipEn: 'Wear comfortable shoes around Gyeongbokgung. Starting with the museums makes the palace easier to understand.',
    tags: ['궁궐', '왕실문화', '한옥', '전통거리'],
    preferredNames: ['국립고궁박물관', '경복궁', '국립민속박물관', '북촌한옥마을', '인사동'],
    fallbackTags: ['first visit', 'palace', 'hanok'],
    time: '약 3~4시간',
    walking: '보통',
    fee: '저비용'
  },
  {
    id: 'rainy-day-indoor-heritage',
    title: '비 오는 날 추천 코스',
    englishTitle: 'Rainy-Day Indoor Heritage Route',
    summary: '우천 점수가 높은 박물관, 체험 공간, 공연장을 중심으로 비 오는 날에도 안정적으로 둘러보는 코스입니다.',
    englishExplanation: 'An indoor-focused route built from rainy-day-friendly museums, cultural experience spaces, and performance venues.',
    reason: 'rainyDayScore가 높은 실내 장소를 우선 연결해 날씨 영향을 줄이고, 왕실문화·생활문화·공연 경험을 이어갑니다.',
    reasonEn: 'It prioritizes high rainy-day-score indoor places and connects royal culture, everyday heritage, and performance experiences.',
    tip: '박물관 휴관일과 한국의집·정동극장 공연 또는 체험 예약 여부를 먼저 확인하세요.',
    tipEn: 'Check museum closing days and reservation needs for Korea House or Jeongdong Theater programs.',
    tags: ['실내', '박물관', '공연', '우천'],
    preferredNames: ['국립고궁박물관', '국립민속박물관', '서울역사박물관', '한국의집', '국립정동극장'],
    fallbackTags: ['rainy day', 'museum', 'performance'],
    preferIndoor: true,
    time: '약 3시간',
    walking: '낮음',
    fee: '무료~유료 가능'
  },
  {
    id: 'photo-spot-heritage-walk',
    title: '사진 명소 코스',
    englishTitle: 'Photo Spot Heritage Walk',
    summary: '사진 명소 점수가 높은 궁궐, 한옥마을, 한옥거리, 전통거리를 종로권 중심으로 묶은 코스입니다.',
    englishExplanation: 'A visual Jongno-centered route built from high photo-spot-score palaces, hanok streets, and traditional streets.',
    reason: 'photoSpotScore가 높은 장소 중 실제로 함께 걷기 좋은 종로권 장소를 우선 배치했습니다.',
    reasonEn: 'It prioritizes high photo-spot-score places that still work as a walkable Jongno-area route.',
    tip: '오전에는 북촌 골목이 비교적 걷기 편하고, 늦은 오후에는 궁궐과 한옥 지붕선이 사진에 잘 담깁니다.',
    tipEn: 'Bukchon is easier in the morning, while late afternoon light works well for palace and hanok rooflines.',
    tags: ['사진명소', '궁궐', '한옥', '전통거리'],
    preferredNames: ['경복궁', '북촌한옥마을', '창덕궁', '익선동 한옥거리', '인사동'],
    fallbackTags: ['photo spot', 'sunset', 'hanok'],
    preferPhoto: true,
    time: '약 3~4시간',
    walking: '보통',
    fee: '저비용'
  },
  {
    id: 'deep-history-route',
    title: '역사 깊이 보기 코스',
    englishTitle: 'Deep History Route',
    summary: '왕실 의례, 궁궐, 도시사, 근현대사의 기억을 이어 깊게 보는 코스입니다.',
    englishExplanation: 'A deeper route connecting royal rituals, palaces, urban history, and modern historical memory.',
    reason: '전통성 점수가 높은 왕실 유산에서 시작해 서울의 도시사와 근현대사까지 이어지는 학습형 동선입니다.',
    reasonEn: 'It begins with high-tradition royal heritage and expands into Seoul urban history and modern historical memory.',
    tip: '종묘와 박물관은 해설을 읽는 시간이 중요하므로 이동 장소를 너무 늘리지 마세요.',
    tipEn: 'Leave time to read interpretation at Jongmyo and the museums rather than adding too many stops.',
    tags: ['왕실', '궁궐', '근현대사', '유적지'],
    preferredNames: ['종묘', '창덕궁', '창경궁', '서울역사박물관', '서대문형무소역사관'],
    fallbackTags: ['history', 'modern history', 'royal ritual'],
    time: '반나절',
    walking: '보통',
    fee: '무료~유료 가능'
  },
  {
    id: 'easy-walking-heritage',
    title: '가볍게 걷는 코스',
    englishTitle: 'Easy Walking Heritage Route',
    summary: '도보 난이도 낮음으로 표시된 가까운 장소를 묶은 부담 적은 종로 산책 코스입니다.',
    englishExplanation: 'A lighter Jongno walking route linking nearby places marked with low walking difficulty.',
    reason: 'walkingLevel이 낮은 장소를 중심으로 운현궁, 소리문화, 한옥거리, 전통거리, 사찰을 짧게 연결합니다.',
    reasonEn: 'It connects low-walking-difficulty places: a royal residence, sound culture, hanok streets, a traditional street, and a temple.',
    tip: '익선동과 인사동은 붐빌 수 있어 오전이나 이른 저녁이 편하고, 중간에 카페 휴식을 넣기 좋습니다.',
    tipEn: 'Ikseon-dong and Insadong can get crowded, so morning or early evening is more comfortable.',
    tags: ['가벼운 산책', '한옥', '전통거리', '사찰'],
    preferredNames: ['운현궁', '서울우리소리박물관', '익선동 한옥거리', '인사동', '조계사'],
    fallbackTags: ['walking', 'quiet stop', 'low'],
    preferEasy: true,
    time: '약 2~3시간',
    walking: '낮음',
    fee: '무료 중심'
  },
  {
    id: 'southern-heritage-extension',
    title: '서울 남부 전통유산 코스',
    englishTitle: 'Southern Seoul Heritage Extension',
    summary: '강남·송파권 데이터에 포함된 왕릉, 사찰, 고분을 묶은 도심 밖 확장 코스입니다.',
    englishExplanation: 'An extension route using the Gangnam and Songpa heritage data: royal tombs, a temple, and ancient tombs.',
    reason: '업데이트된 데이터에 포함된 강남·송파권 장소를 별도 코스로 묶어, 종로·중구 중심 추천에서 놓치기 쉬운 전통유산을 보여줍니다.',
    reasonEn: 'It uses the updated Gangnam and Songpa data to show heritage places that can be missed in Jongno/Jung-gu-centered routes.',
    tip: '장소 간 거리가 있어 도보 코스보다는 지하철·택시 이동을 전제로 반나절 정도 여유를 두세요.',
    tipEn: 'These places are spread out, so plan a half day with subway or taxi transfers rather than a pure walking route.',
    tags: ['왕릉', '사찰', '고분', '확장 코스'],
    preferredNames: ['선릉과 정릉', '봉은사', '석촌동 고분군'],
    fallbackTags: ['royal tomb', 'temple', 'ancient tomb'],
    time: '반나절',
    walking: '보통',
    fee: '무료~유료 가능',
    maxStops: 3
  }
];

let plannerStep = 1;
let toastTimer;
let ariMessages = [];
let timeImageIndex = 0;
let timeImagePeriod = '';
let timeImageTimer = null;
let authState = {
  token: '',
  user: null,
  offline: false
};
let authConfigState = null;
let nearbyRecommendationState = {
  status: 'idle',
  messageKey: '',
  items: [],
  userLocation: null,
  accuracy: null
};
let deferredInstallPrompt = null;
let routeLeafletMap = null;
let routeLeafletLayer = null;
let routeLeafletUserLayer = null;
let aiPhotoDownloadUrl = '';
let aiPhotoSelectedStyle = 'minhwa';
let aiPhotoSegmenterPromise = null;
const memoryStorageFallback = {};

const AI_PHOTO_VISION_BUNDLE_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/vision_bundle.mjs';
const AI_PHOTO_WASM_ROOT_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm';
const AI_PHOTO_SEGMENTER_MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite';

const GEOLOCATION_OPTIONS = {
  enableHighAccuracy: true,
  timeout: 8000,
  maximumAge: 60000
};

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
    return Object.prototype.hasOwnProperty.call(memoryStorageFallback, key) ? memoryStorageFallback[key] : fallback;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    memoryStorageFallback[key] = String(value);
  }
}

function storageJsonGet(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    try {
      return Object.prototype.hasOwnProperty.call(memoryStorageFallback, key)
        ? JSON.parse(memoryStorageFallback[key])
        : fallback;
    } catch (nestedError) {
      return fallback;
    }
  }
}

function storageJsonSet(key, value) {
  storageSet(key, JSON.stringify(value));
}

function cloneJsonValue(value) {
  if (value === undefined) return undefined;
  return JSON.parse(JSON.stringify(value));
}

function getDataOverrides() {
  return storageJsonGet(STORAGE_KEYS.dataOverrides, {});
}

function getDataOverride(url) {
  const overrides = getDataOverrides();
  if (!Object.prototype.hasOwnProperty.call(overrides, url)) return null;
  const value = overrides[url];
  return Array.isArray(value) ? cloneJsonValue(value) : null;
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

function normalizeLanguage(language) {
  return LANGUAGE_ALIASES[String(language || '').trim()] || 'ko';
}

function getLegacyLanguage(language = getCurrentLanguage()) {
  return LANGUAGE_LEGACY_CODES[normalizeLanguage(language)] || 'KR';
}

function getCurrentLanguage() {
  return normalizeLanguage(storageGet(STORAGE_KEYS.language, 'ko'));
}

function textFrom(value, language = getCurrentLanguage()) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const code = normalizeLanguage(language);
    const legacyCode = getLegacyLanguage(code);
    return value[code] || value[legacyCode] || value.KR || value.EN || value.ko || value.en || '';
  }
  return value || '';
}

function t(path, fallback = '') {
  const language = getCurrentLanguage();
  const read = (source) => path.split('.').reduce((value, key) => value?.[key], source);
  return read(translations[language]) ?? read(translations.ko) ?? fallback;
}

const FEATURE_COPY = {
  ko: {
    home: {
      ranking: '외국인 인기 랭킹',
      installTitle: '홈 화면에 앱처럼 설치',
      installBody: 'PWA로 설치하면 앱처럼 전체 화면으로 열리고, 길찾기와 저장한 코스를 더 빠르게 이어서 볼 수 있습니다.',
      installAction: '설치하기',
      installHint: '브라우저 메뉴에서 홈 화면에 추가해도 같은 방식으로 사용할 수 있습니다.',
      installed: '이미 앱처럼 설치된 상태입니다.'
    },
    ai: {
      insightTitle: 'AI 추천 분석',
      insightBody: '선택 조건, 장소 성격, 이동 부담, 날씨 적합도를 함께 반영한 추천 근거입니다.',
      topRouteLabel: '현재 가장 잘 맞는 코스',
      factorLabel: '추천에 반영된 요인',
      scoreLabel: '추천 적합도',
      crowdLabel: '예상 혼잡도',
      bestForLabel: '추천 대상'
    },
    crowd: {
      title: '혼잡도 기반 대체 추천',
      body: '현재 시간, 날씨, 장소 인기도를 합쳐 예상 혼잡도를 계산했습니다.',
      current: '현재 코스',
      alternative: '대체 코스',
      low: '여유',
      medium: '보통',
      high: '혼잡',
      action: '이 대체 코스 보기',
      quietTip: '조용한 관람을 원하면 오전 첫 타임이나 저녁 산책형 코스가 유리합니다.'
    },
    bundle: {
      title: '문화행사 묶어보기',
      body: '코스와 연결되는 행사까지 하루 일정으로 자동 묶어 보여줍니다.',
      empty: '연결된 행사가 적어서 코스 중심 기본 일정으로 구성했습니다.',
      timeline: '자동 일정표',
      save: '이 일정 저장',
      saved: '문화행사 번들을 저장했습니다.',
      savedTitle: '저장한 문화행사 번들',
      open: '코스 열기'
    },
    ranking: {
      nav: '외국인 인기 랭킹',
      title: '외국인 인기 랭킹',
      body: '외국인 반응, 영어 안내, 사진성, 접근성을 합쳐 계산한 상위 추천입니다.',
      routes: '인기 코스 TOP 3',
      places: '인기 장소 TOP 5',
      score: '인기도',
      why: '인기 이유'
    },
    map: {
      live: '실제 지도 시각화',
      liveBody: '좌표 기반으로 경로를 실제 지도 위에 그립니다. 외부 스크립트를 불러오지 못하면 목업 지도로 전환됩니다.'
    },
    weather: {
      crowdTitle: '혼잡도까지 반영한 대체 추천'
    },
    photo: {
      styleTitle: '변환 스타일',
      styles: {
        minhwa: '민화 카드',
        ink: '수묵 엽서',
        night: '궁궐 야경'
      },
      action: '조선풍 카드 만들기',
      download: '카드 다운로드',
      ready: '이미지를 선택하고 스타일을 고르면 브라우저 안에서 카드가 생성됩니다.',
      working: '브라우저에서 조선풍 카드 효과를 적용하고 있습니다.',
      loadingModel: '인물 분리와 화풍 변환을 준비하고 있습니다.',
      done: '조선풍 카드가 준비되었습니다. 바로 다운로드할 수 있습니다.',
      transformed: {
        minhwa: '배경을 부드러운 전통 채색 분위기로 정리하고, 사진을 민화풍 색감으로 바꿨습니다.',
        ink: '사진 전체를 저채도 수묵화 느낌과 먹선 표현으로 정리했습니다.',
        night: '인물을 분리한 뒤 조선 왕실 궁궐 야경 배경을 생성해 다시 합성했습니다.'
      },
      fallback: '네트워크 또는 모델 로드가 어려워 브라우저 기본 인물 마스크와 왕실 야경 배경으로 처리했습니다.',
      empty: '먼저 변환할 이미지를 선택하세요.',
      privacy: '브라우저 안에서만 처리되며, 업로드 없이 바로 저장할 수 있습니다.'
    }
  },
  en: {
    home: {
      ranking: 'Foreigner Ranking',
      installTitle: 'Install Like an App',
      installBody: 'Install MARU as a PWA for a fullscreen mobile app feel and faster access to routes, maps, and saved plans.',
      installAction: 'Install',
      installHint: 'If the prompt is unavailable, use your browser menu and choose Add to Home Screen.',
      installed: 'MARU is already installed like an app on this device.'
    },
    ai: {
      insightTitle: 'AI Recommendation Breakdown',
      insightBody: 'This recommendation combines travel preferences, place type, walking effort, and weather fit.',
      topRouteLabel: 'Best route right now',
      factorLabel: 'Signals used',
      scoreLabel: 'Fit score',
      crowdLabel: 'Expected crowd',
      bestForLabel: 'Best for'
    },
    crowd: {
      title: 'Crowd-Aware Alternatives',
      body: 'Expected crowd is estimated from time, weather, and place popularity.',
      current: 'Current route',
      alternative: 'Alternative route',
      low: 'Relaxed',
      medium: 'Moderate',
      high: 'Busy',
      action: 'Open this alternative',
      quietTip: 'For a calmer visit, earlier morning slots and evening walks are usually better.'
    },
    bundle: {
      title: 'Bundle Cultural Events',
      body: 'MARU automatically combines the route with related cultural events into a one-day plan.',
      empty: 'Related event data is limited, so this plan focuses on the route itself.',
      timeline: 'Auto itinerary',
      save: 'Save this plan',
      saved: 'The cultural event bundle was saved.',
      savedTitle: 'Saved Event Bundles',
      open: 'Open route'
    },
    ranking: {
      nav: 'Foreigner Ranking',
      title: 'Foreigner Ranking',
      body: 'This ranking blends foreigner appeal, English support, photogenic value, and accessibility.',
      routes: 'Top 3 Routes',
      places: 'Top 5 Places',
      score: 'Score',
      why: 'Why it works'
    },
    map: {
      live: 'Live Route Map',
      liveBody: 'The route is drawn on a real map using saved coordinates. If the map library fails, MARU falls back to the mock map.'
    },
    weather: {
      crowdTitle: 'Weather plus crowd-aware alternatives'
    },
    photo: {
      styleTitle: 'Style',
      styles: {
        minhwa: 'Minhwa Card',
        ink: 'Ink Postcard',
        night: 'Palace Night'
      },
      action: 'Create Joseon Card',
      download: 'Download Card',
      ready: 'Choose an image and style to generate a browser-side card.',
      working: 'Applying a Joseon-inspired card effect in the browser.',
      loadingModel: 'Preparing subject separation and painterly rendering.',
      done: 'Your Joseon-style card is ready to download.',
      transformed: {
        minhwa: 'The background was softened into a traditional color-wash mood and the photo was restyled with a Minhwa palette.',
        ink: 'The whole image was remapped into a low-saturation ink-painting look with darker brush edges.',
        night: 'The subject was separated and recomposited over a generated Joseon royal palace night background.'
      },
      fallback: 'The segmentation model could not load, so MARU used a browser-side portrait mask with the generated royal night background.',
      empty: 'Choose an image first.',
      privacy: 'Everything stays in the browser, so you can save the result without uploading the image.'
    }
  },
  ja: {},
  zh: {}
};

function ft(path, fallback = '') {
  const language = getCurrentLanguage();
  const read = (source) => path.split('.').reduce((value, key) => value?.[key], source);
  return read(FEATURE_COPY[language]) ?? read(FEATURE_COPY.en) ?? read(FEATURE_COPY.ko) ?? fallback;
}

function langPick(values, language = getCurrentLanguage(), fallback = '') {
  if (!values || typeof values !== 'object' || Array.isArray(values)) return values || fallback;
  const normalizedLanguage = normalizeLanguage(language);
  return values[normalizedLanguage] ?? values.en ?? values.ko ?? fallback;
}

function authLabel(key) {
  return textFrom(AUTH_LABELS[key] || AUTH_LABELS.guest);
}

function convenienceText(key) {
  return CONVENIENCE_TRANSLATIONS[getCurrentLanguage()]?.[key] || CONVENIENCE_TRANSLATIONS.en[key] || key;
}

function setText(selector, value) {
  qsa(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setHtml(selector, value) {
  qsa(selector).forEach((element) => {
    element.innerHTML = value;
  });
}

function applyPageMetadata(fileName = getCurrentFileName()) {
  const metaKey = PAGE_META_KEYS[fileName];
  const meta = t(`pageMeta.${metaKey}`, null);
  if (!meta || typeof meta !== 'object') return;

  if (meta.title) document.title = meta.title;

  const description = qs('meta[name="description"]');
  if (description && meta.description) description.setAttribute('content', meta.description);
}

function translateWeatherValue(value) {
  const values = t('weather.values', {});
  return values?.[value] || value;
}

function interpolateTemplate(template, values = {}) {
  return String(template || '').replace(/\{(\w+)\}/g, (_, key) => values[key] ?? '');
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function getDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function formatDistanceKm(distanceKm) {
  if (!Number.isFinite(distanceKm)) return '';
  const distance = distanceKm < 10 ? distanceKm.toFixed(1) : String(Math.round(distanceKm));
  return interpolateTemplate(t('map.nearbyDistance'), { distance });
}

function toArray(value) {
  if (Array.isArray(value)) return value.filter(Boolean);
  if (typeof value === 'string') {
    return value
      .split(/[|,]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function toBoolean(value, fallback = false) {
  if (typeof value === 'boolean') return value;
  if (typeof value === 'number') return value > 0;
  if (typeof value === 'string') {
    const normalized = value.trim().toLowerCase();
    if (['true', 'yes', 'y', '1', '추천', '가능'].includes(normalized)) return true;
    if (['false', 'no', 'n', '0', '비추천', '불가'].includes(normalized)) return false;
  }
  return fallback;
}

function slugifyResource(raw, index = 0) {
  const source = raw.id || raw.slug || raw.nameEn || raw.nameKo || `resource-${index + 1}`;
  const slug = String(source)
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-');
  return slug || `resource-${index + 1}`;
}

function normalizeDistrict(raw) {
  const district = raw.district || raw.gu || raw.area || '';
  if (district) return district;
  const region = raw.region || '';
  return /구$/.test(region) ? region : '';
}

function isSeoulResource(resource) {
  const text = [resource.region, resource.district, resource.address].filter(Boolean).join(' ');
  if (/인천|김포|강화/.test(text)) return false;
  return !text || /서울|종로구|중구|서대문구|강남구|송파구|용산구/.test(text);
}

function isDetailStoryOnlyResource(resource) {
  if (toBoolean(resource.isDetailStoryOnly)) return true;
  const text = [resource.nameKo, resource.nameEn, resource.category, resource.globalTags?.join(' ')].filter(Boolean).join(' ');
  return DETAIL_STORY_PATTERNS.some((pattern) => text.includes(pattern));
}

function inferGeneratedPlaceImage(raw = {}) {
  const tags = toArray(raw.globalTags || raw.tags || raw.aiCulturalKeywords).join(' ');
  const text = [
    raw.id,
    raw.nameKo,
    raw.nameEn,
    raw.name,
    raw.title,
    raw.category,
    raw.categoryEn,
    raw.type,
    raw.address,
    raw.description,
    raw.aiSimpleExplanation,
    raw.aiWhyItMatters,
    raw.imagePrompt,
    tags
  ].filter(Boolean).join(' ').toLowerCase();

  if (/(종묘|jongmyo|사찰|temple|봉은사|bongeunsa|조계사|jogyesa|왕릉|고분|tomb|능|묘|burial)/i.test(text)) {
    return PLACE_IMAGE_ASSETS.templeTomb;
  }
  if (/(통인|tongin|시장|market|food culture|local life|먹거리|미식)/i.test(text)) {
    return PLACE_IMAGE_ASSETS.marketLife;
  }
  if (/(박물관|museum|전시|gallery|exhibition|민속|고궁)/i.test(text)) {
    return PLACE_IMAGE_ASSETS.museumGallery;
  }
  if (/(궁궐|왕실|왕가|palace|royal|gyeongbokgung|changdeokgung|changgyeonggung|deoksugung|gyeonghuigung|unhyeongung)/i.test(text)) {
    return PLACE_IMAGE_ASSETS.palaceRoyal;
  }
  if (/(한옥|hanok|북촌|bukchon|익선|ikseon|인사동|insadong|전통거리|traditional street|골목|alley|village|street)/i.test(text)) {
    return PLACE_IMAGE_ASSETS.hanokStreet;
  }
  if (/(공예|craft|체험|experience|공연|performance|국악|folk music|소리|theater|정동극장|한국의집|tea|shopping)/i.test(text)) {
    return PLACE_IMAGE_ASSETS.cultureExperience;
  }
  if (/(성곽|성문|gate|wall|광장|square|역사|history|근현대|modern history|산책길|stonewall|돌담길|형무소|prison|전쟁기념관|war memorial|ddp)/i.test(text)) {
    return PLACE_IMAGE_ASSETS.fortressHistory;
  }
  return PLACE_IMAGE_ASSETS.museumGallery;
}

function inferRouteImage(route = {}) {
  const text = [
    route.id,
    route.title,
    route.englishTitle,
    route.summary,
    route.reason,
    route.reasonEn,
    route.theme,
    toArray(route.tags).join(' '),
    toArray(route.target).join(' '),
    toArray(route.recommendedTime).join(' '),
    toArray(route.preferredNames).join(' '),
    toArray(route.fallbackTags).join(' ')
  ].filter(Boolean).join(' ').toLowerCase();

  if (/(rain|rainy|우천|비 오는 날|비오|indoor|실내|museum|박물관)/i.test(text)) return ROUTE_IMAGE_ASSETS.rainy;
  if (/(market|시장|food|미식)/i.test(text)) return ROUTE_IMAGE_ASSETS.market;
  if (/(craft|공예|인사동|experience|체험)/i.test(text)) return ROUTE_IMAGE_ASSETS.craft;
  if (/(night|야간|evening|공연|performance|돌담길|modern heritage|근대)/i.test(text)) return ROUTE_IMAGE_ASSETS.night;
  if (/(hanok|한옥|bukchon|북촌|ikseon|익선|sound|소리|walking|산책)/i.test(text)) return ROUTE_IMAGE_ASSETS.hanok;
  return ROUTE_IMAGE_ASSETS.palace;
}

function normalizeCultureResource(raw, index = 0) {
  const district = normalizeDistrict(raw);
  const tags = toArray(raw.globalTags || raw.tags || raw.aiCulturalKeywords);
  const latitude = toNumber(raw.latitude ?? raw.lat, NaN);
  const longitude = toNumber(raw.longitude ?? raw.lng ?? raw.lon, NaN);
  const hasCoordinates = Number.isFinite(latitude) && Number.isFinite(longitude);
  const qualityScore = toNumber(raw.qualityScore, toNumber(raw.score, 70));
  const traditionScore = toNumber(raw.traditionScore, 70);
  const photoSpotScore = toNumber(raw.photoSpotScore, tags.some((tag) => /photo|사진|view|야경|노을/i.test(tag)) ? 4 : 2);
  const rainyDayScore = toNumber(raw.rainyDayScore, /실내|Indoor/i.test(raw.indoorOutdoor || '') ? 4 : 2);
  const nameKo = raw.nameKo || raw.name_ko || getLocalizedValue(raw.name, 'ko') || raw.name || raw.title || `장소 ${index + 1}`;
  const nameEn = raw.nameEn || raw.name_en || raw.englishName || getLocalizedValue(raw.name, 'en') || nameKo || `Place ${index + 1}`;
  const descriptionKo = raw.aiSimpleExplanation || raw.descriptionKo || getLocalizedValue(raw.description, 'ko') || raw.description || raw.summary || '';
  const descriptionEn = raw.aiSimpleExplanationEn || raw.descriptionEn || raw.description_en || getLocalizedValue(raw.description, 'en') || descriptionKo;

  const resource = {
    ...raw,
    id: slugifyResource(raw, index),
    nameKo,
    nameEn,
    region: /구$/.test(raw.region || '') ? '서울' : (raw.region || '서울'),
    district,
    category: raw.category || raw.type || '전통문화 장소',
    categoryEn: raw.categoryEn || raw.category_en || raw.category || 'Heritage Place',
    address: raw.address || raw.addr || '',
    latitude: hasCoordinates ? latitude : undefined,
    longitude: hasCoordinates ? longitude : undefined,
    imageUrl: raw.imageUrl || raw.image_url || inferGeneratedPlaceImage(raw),
    globalTags: tags,
    aiSimpleExplanation: descriptionKo,
    aiSimpleExplanationEn: descriptionEn,
    aiWhyItMatters: raw.aiWhyItMatters || raw.recommendReasonKo || raw.why || descriptionKo || '',
    aiWhyItMattersEn: raw.aiWhyItMattersEn || raw.recommendReasonEn || raw.aiWhyItMatters || raw.why || descriptionEn || '',
    aiVisitTip: raw.aiVisitTip || raw.visitTipKo || raw.tip || '운영시간과 예약 여부는 방문 전 공식 정보를 확인하세요.',
    aiVisitTipEn: raw.aiVisitTipEn || raw.visitTipEn || raw.aiVisitTip || raw.tip || 'Check official hours and reservation details before visiting.',
    indoorOutdoor: raw.indoorOutdoor || raw.indoor_outdoor || '확인 필요',
    indoorOutdoorEn: raw.indoorOutdoorEn || raw.indoor_outdoor_en || raw.indoorOutdoor || 'Check',
    walkingLevel: raw.walkingLevel || raw.walking_level || '보통',
    walkingLevelEn: raw.walkingLevelEn || raw.walking_level_en || raw.walkingLevel || 'Moderate',
    rainyDayScore,
    photoSpotScore,
    qualityScore,
    traditionScore,
    foreignerScore: toNumber(raw.foreignerScore, toNumber(raw.foreignerPopularityScore, 70)),
    foreignerPopular: toBoolean(raw.foreignerPopular, toNumber(raw.foreignerScore, 0) >= 80),
    englishAvailable: toBoolean(raw.englishAvailable, Boolean(raw.nameEn || raw.descriptionEn || raw.aiSimpleExplanationEn)),
    reservationRequired: toBoolean(raw.reservationRequired, false),
    isIndependentSite: !isDetailStoryOnlyResource(raw) && toBoolean(raw.isIndependentSite, true),
    isDetailStoryOnly: isDetailStoryOnlyResource(raw),
    imageAlt: raw.imageAlt || `${nameKo || '서울 전통문화 장소'} 이미지`,
    feeType: raw.feeType || raw.fee || '공식 확인 필요',
    bookingNote: raw.bookingNote || '운영시간, 요금, 예약 여부는 방문 전 공식 정보를 확인하세요.',
    sourceName: raw.sourceName || raw.source || CULTURE_RESOURCE_DATA_URL,
    sourceUrl: raw.sourceUrl || '',
    verifiedStatus: raw.verifiedStatus || '데이터 검토 필요'
  };

  return resource;
}

function recommendationPriority(resource) {
  const priorityIndex = PRIORITY_PLACE_NAMES.indexOf(resource.nameKo);
  const hasCoordinates = Number.isFinite(resource.latitude) && Number.isFinite(resource.longitude);
  const hasText = Boolean(resource.aiSimpleExplanation && resource.aiWhyItMatters && resource.aiVisitTip);
  const hasImageOrFallback = Boolean(resource.imageUrl) || true;
  const tagText = resource.globalTags.join(' ');
  const detailPenalty = resource.isDetailStoryOnly || !resource.isIndependentSite ? -120 : 0;

  return (
    (priorityIndex >= 0 ? 120 - priorityIndex * 3 : 0) +
    (hasCoordinates ? 45 : 0) +
    (hasImageOrFallback ? 10 : 0) +
    resource.qualityScore * 0.8 +
    resource.traditionScore * 0.65 +
    resource.foreignerScore * 0.35 +
    (hasText ? 30 : 0) +
    (resource.photoSpotScore >= 4 ? 10 : 0) +
    (/palace|궁궐|hanok|한옥|temple|사찰|museum|박물관|history|역사/i.test(`${resource.category} ${tagText}`) ? 12 : 0) +
    detailPenalty
  );
}

function getRecommendedResources(limit = 24, options = {}) {
  const preference = options.preference || loadUserPreference();
  return CULTURE_RESOURCES
    .filter(isSeoulResource)
    .filter((resource) => options.includeDetail || (!resource.isDetailStoryOnly && resource.isIndependentSite))
    .sort((a, b) => scoreResourceForPreference(b, preference) - scoreResourceForPreference(a, preference))
    .slice(0, limit);
}

function matchesRouteBlueprint(resource, blueprint) {
  const text = `${resource.nameKo} ${resource.nameEn} ${resource.category} ${resource.globalTags.join(' ')}`.toLowerCase();
  if (blueprint.preferIndoor && resource.rainyDayScore >= 4) return true;
  if (blueprint.preferPhoto && resource.photoSpotScore >= 4) return true;
  if (blueprint.preferEasy && /낮음|low/i.test(`${resource.walkingLevel} ${resource.walkingLevelEn}`)) return true;
  return blueprint.fallbackTags.some((tag) => text.includes(String(tag).toLowerCase()));
}

function pickResourcesForRoute(blueprint, recommendedResources) {
  const selected = [];
  const addResource = (resource) => {
    if (resource && !selected.some((item) => item.id === resource.id)) selected.push(resource);
  };

  blueprint.preferredNames.forEach((name) => {
    addResource(CULTURE_RESOURCES.find((resource) => resource.nameKo === name || resource.nameEn === name));
  });

  recommendedResources
    .filter((resource) => matchesRouteBlueprint(resource, blueprint))
    .forEach(addResource);

  recommendedResources.forEach(addResource);
  return selected.slice(0, blueprint.maxStops || 5);
}

function makeRouteKeywords(routeResources, tags) {
  const keywords = [...new Set(tags.concat(routeResources.flatMap((resource) => resource.globalTags)).slice(0, 5))];
  return keywords.map((tag) => ({
    name: tag,
    description: `이 코스의 분위기를 설명하는 핵심 태그입니다.`
  }));
}

function buildRouteFromResources(blueprint, routeResources) {
  const average = (field) =>
    Math.round(routeResources.reduce((sum, resource) => sum + toNumber(resource[field], 0), 0) / Math.max(routeResources.length, 1));
  const score = Math.min(99, Math.round((average('qualityScore') * 0.45) + (average('traditionScore') * 0.35) + (average('foreignerScore') * 0.2)));

  return {
    id: blueprint.id,
    title: blueprint.title,
    englishTitle: blueprint.englishTitle,
    score,
    time: blueprint.time,
    walking: blueprint.walking,
    fee: blueprint.fee,
    resourceIds: routeResources.map((resource) => resource.id),
    flow: routeResources.map((resource) => resource.nameKo),
    reason: blueprint.reason,
    reasonEn: blueprint.reasonEn || blueprint.englishExplanation,
    tags: blueprint.tags,
    convenience: {
      englishAvailable: routeResources.some((resource) => resource.englishAvailable),
      foreignerPopular: average('foreignerScore') >= 80,
      reservationRequired: routeResources.some((resource) => resource.reservationRequired),
      labels: ['실제 데이터 기반', '서울 전통문화', `${routeResources.length}개 장소`]
    },
    imageUrl: inferRouteImage(blueprint),
    imageAlt: `${blueprint.title} 대표 이미지`,
    imageNotice: t('common.imageNotice'),
    summary: blueprint.summary,
    englishExplanation: blueprint.englishExplanation,
    tip: blueprint.tip,
    tipEn: blueprint.tipEn || 'Check official hours, reservations, and closures before visiting.',
    source: `${CULTURE_RESOURCE_DATA_URL}와 data JSON을 함께 읽어 구성한 추천 코스입니다. 운영 정보는 방문 전 공식 출처 확인이 필요합니다.`,
    keywords: makeRouteKeywords(routeResources, blueprint.tags)
  };
}

function generateRoutesFromResources() {
  const recommendedResources = getRecommendedResources(80);
  const routes = ROUTE_BLUEPRINTS
    .map((blueprint) => buildRouteFromResources(blueprint, pickResourcesForRoute(blueprint, recommendedResources)))
    .filter((route) => route.resourceIds.length >= 3);

  return routes.length >= 3 ? routes : ROUTE_DATA;
}

function getLocalizedValue(value, language = 'ko') {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    const code = normalizeLanguage(language);
    const legacyCode = getLegacyLanguage(code);
    return value[code] || value[legacyCode] || value.ko || value.en || value.KR || value.EN || '';
  }
  return value || '';
}

function normalizeCourseDuration(duration, language = 'ko') {
  const text = String(duration || '').trim();
  if (!text) return language === 'ko' ? '시간 확인 필요' : 'Check duration';
  if (language !== 'ko') return text;
  return text
    .replace(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*hours?/i, '약 $1~$2시간')
    .replace(/(\d+(?:\.\d+)?)\s*hours?/i, '약 $1시간');
}

function budgetLabel(value, language = 'ko') {
  const labels = {
    ko: {
      low: '저비용',
      medium: '유료 가능',
      high: '유료 중심',
      free: '무료 중심'
    },
    en: {
      low: 'Low cost',
      medium: 'Paid options',
      high: 'Mostly paid',
      free: 'Mostly free'
    }
  };
  return labels[normalizeLanguage(language)]?.[value] || value || '';
}

function indoorOutdoorLabel(value, language = 'ko') {
  const labels = {
    ko: {
      indoor: '실내 중심',
      outdoor: '실외 중심',
      mixed: '실내외 혼합'
    },
    en: {
      indoor: 'Indoor focused',
      outdoor: 'Outdoor focused',
      mixed: 'Indoor/outdoor mix'
    }
  };
  return labels[normalizeLanguage(language)]?.[value] || value || '';
}

function extractDistrictFromAddress(address = '') {
  const match = String(address).match(/서울특별시\s+([^\s]+구)/);
  return match?.[1] || '';
}

function normalizeCoursePlaceResource(rawPlace = {}, index = 0, course = {}) {
  const nameKo = getLocalizedValue(rawPlace.name, 'ko') || rawPlace.nameKo || rawPlace.name || `장소 ${index + 1}`;
  const nameEn = getLocalizedValue(rawPlace.name, 'en') || rawPlace.nameEn || rawPlace.englishName || nameKo;
  const descriptionKo = getLocalizedValue(rawPlace.description, 'ko') || rawPlace.descriptionKo || '';
  const descriptionEn = getLocalizedValue(rawPlace.description, 'en') || rawPlace.descriptionEn || descriptionKo;
  const latitude = toNumber(rawPlace.lat ?? rawPlace.latitude, NaN);
  const longitude = toNumber(rawPlace.lng ?? rawPlace.longitude ?? rawPlace.lon, NaN);
  const sourceName = rawPlace.publicDataSource || rawPlace.sourceName || COURSE_DATA_URL;
  const tags = [
    rawPlace.category,
    course.theme,
    ...toArray(course.target)
  ].filter(Boolean);

  return normalizeCultureResource({
    id: rawPlace.id,
    nameKo,
    nameEn,
    region: '서울',
    district: rawPlace.district || extractDistrictFromAddress(rawPlace.address),
    category: rawPlace.category || '전통문화 장소',
    categoryEn: rawPlace.categoryEn || rawPlace.category || 'Heritage Place',
    address: rawPlace.address || '',
    latitude,
    longitude,
    globalTags: tags,
    aiSimpleExplanation: descriptionKo,
    aiSimpleExplanationEn: descriptionEn,
    aiWhyItMatters: descriptionKo,
    aiWhyItMattersEn: descriptionEn,
    aiVisitTip: rawPlace.visitTip || '운영시간, 요금, 예약 여부는 방문 전 공식 정보를 확인하세요.',
    aiVisitTipEn: rawPlace.visitTipEn || 'Check official hours, fees, and reservation details before visiting.',
    indoorOutdoor: indoorOutdoorLabel(course.indoorOutdoor, 'ko') || '확인 필요',
    indoorOutdoorEn: indoorOutdoorLabel(course.indoorOutdoor, 'en') || 'Check',
    walkingLevel: getLocalizedValue(course.walking, 'ko') || '보통',
    walkingLevelEn: getLocalizedValue(course.walking, 'en') || 'Moderate',
    qualityScore: toNumber(course.score, 80),
    traditionScore: 90,
    foreignerScore: 85,
    englishAvailable: Boolean(nameEn && nameEn !== nameKo),
    sourceName,
    sourceUrl: rawPlace.sourceUrl || '',
    verifiedStatus: '공식 확인 필요'
  }, index);
}

function mergeCoursePlacesIntoResources(rawCourses = []) {
  const additions = [];
  const hasResource = (candidate) => CULTURE_RESOURCES.concat(additions).some((resource) =>
    resource.id === candidate.id ||
    resource.nameKo === candidate.nameKo ||
    resource.nameEn === candidate.nameEn
  );

  rawCourses.forEach((course, courseIndex) => {
    (course.places || []).forEach((place, placeIndex) => {
      const resource = normalizeCoursePlaceResource(place, courseIndex * 20 + placeIndex, course);
      if (!hasResource(resource)) additions.push(resource);
    });
  });

  if (additions.length) {
    CULTURE_RESOURCES = CULTURE_RESOURCES.concat(additions);
  }
}

function findResourceForCoursePlace(place = {}) {
  const nameKo = getLocalizedValue(place.name, 'ko') || place.nameKo || place.name;
  const nameEn = getLocalizedValue(place.name, 'en') || place.nameEn || place.englishName;
  return CULTURE_RESOURCES.find((resource) =>
    resource.id === place.id ||
    resource.nameKo === nameKo ||
    resource.nameEn === nameEn
  );
}

function normalizeCourseKeywords(rawKeywords = [], fallbackTags = []) {
  const keywords = Array.isArray(rawKeywords) && rawKeywords.length
    ? rawKeywords
    : fallbackTags.slice(0, 4).map((tag) => ({
      name: tag,
      description: {
        ko: '이 코스의 추천 조건을 설명하는 키워드입니다.',
        en: 'A keyword describing why this route is recommended.'
      }
    }));

  return keywords.map((keyword) => ({
    name: getLocalizedValue(keyword.name, 'en') || getLocalizedValue(keyword.name, 'ko') || keyword.name || '',
    description: getLocalizedValue(keyword.description, 'ko') || keyword.description || '이 코스의 추천 조건을 설명하는 키워드입니다.',
    descriptionEn: getLocalizedValue(keyword.description, 'en') || getLocalizedValue(keyword.description, 'ko') || 'A keyword describing why this route is recommended.'
  })).filter((keyword) => keyword.name);
}

function normalizeCourseRoute(rawCourse = {}, index = 0) {
  const places = Array.isArray(rawCourse.places) ? rawCourse.places : [];
  const routeResources = places.map(findResourceForCoursePlace).filter(Boolean);
  const flow = places
    .map((place) => findResourceForCoursePlace(place)?.nameKo || getLocalizedValue(place.name, 'ko') || place.nameKo)
    .filter(Boolean);
  const resourceIds = routeResources.map((resource) => resource.id);
  const targetTags = [...new Set([rawCourse.theme, ...toArray(rawCourse.target)].filter(Boolean))];
  const keywords = normalizeCourseKeywords(rawCourse.keywords, targetTags);
  const sources = [...new Set(places.map((place) => place.publicDataSource).filter(Boolean))];
  const score = toNumber(rawCourse.score, Math.min(99, Math.max(75, Math.round(
    routeResources.reduce((sum, resource) => sum + toNumber(resource.qualityScore, 80), 0) / Math.max(routeResources.length, 1)
  ))));
  const titleKo = getLocalizedValue(rawCourse.title, 'ko') || rawCourse.titleKo || `추천 코스 ${index + 1}`;
  const titleEn = getLocalizedValue(rawCourse.title, 'en') || rawCourse.titleEn || rawCourse.englishTitle || titleKo;
  const summaryKo = getLocalizedValue(rawCourse.aiSummary, 'ko') || getLocalizedValue(rawCourse.summary, 'ko') || '';
  const summaryEn = getLocalizedValue(rawCourse.aiSummary, 'en') || getLocalizedValue(rawCourse.summary, 'en') || summaryKo;
  const reasonKo = getLocalizedValue(rawCourse.reason, 'ko') || summaryKo;
  const reasonEn = getLocalizedValue(rawCourse.reason, 'en') || summaryEn;
  const tipKo = getLocalizedValue(rawCourse.tip, 'ko') || '운영시간, 요금, 예약 여부는 방문 전 공식 출처에서 확인하세요.';
  const tipEn = getLocalizedValue(rawCourse.tip, 'en') || 'Check official hours, fees, and reservations before visiting.';

  return {
    id: rawCourse.id || `public-data-course-${index + 1}`,
    title: titleKo,
    englishTitle: titleEn,
    score,
    time: getLocalizedValue(rawCourse.durationLabel, 'ko') || normalizeCourseDuration(rawCourse.duration, 'ko'),
    timeEn: getLocalizedValue(rawCourse.durationLabel, 'en') || normalizeCourseDuration(rawCourse.duration, 'en'),
    walking: getLocalizedValue(rawCourse.walking, 'ko') || indoorOutdoorLabel(rawCourse.indoorOutdoor, 'ko') || '보통',
    walkingEn: getLocalizedValue(rawCourse.walking, 'en') || indoorOutdoorLabel(rawCourse.indoorOutdoor, 'en') || 'Moderate',
    fee: getLocalizedValue(rawCourse.fee, 'ko') || budgetLabel(rawCourse.budget, 'ko') || '공식 확인 필요',
    feeEn: getLocalizedValue(rawCourse.fee, 'en') || budgetLabel(rawCourse.budget, 'en') || 'Check official source',
    resourceIds,
    flow,
    reason: reasonKo,
    reasonEn,
    tags: targetTags,
    convenience: {
      englishAvailable: routeResources.some((resource) => resource.englishAvailable),
      foreignerPopular: true,
      reservationRequired: /performance|booking|reservation|공연|예약/i.test(targetTags.join(' ')),
      labels: ['공공데이터 기반', `${flow.length}개 장소`, indoorOutdoorLabel(rawCourse.indoorOutdoor, 'ko') || '추천 코스']
    },
    convenienceLabelsEn: ['Public-data seed', `${flow.length} stops`, indoorOutdoorLabel(rawCourse.indoorOutdoor, 'en') || 'Recommended route'],
    imageUrl: rawCourse.image || rawCourse.imageUrl || inferRouteImage(rawCourse),
    imageAlt: rawCourse.imageAlt || `${titleKo} 대표 이미지`,
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
    imagePrompt: rawCourse.imagePrompt || '',
    summary: summaryKo,
    englishExplanation: summaryEn,
    tip: tipKo,
    tipEn,
    source: `${COURSE_DATA_URL} 기반 샘플 추천 코스입니다.${sources.length ? ` 참고 출처: ${sources.join(', ')}.` : ''} 운영 정보는 방문 전 공식 출처 확인이 필요합니다.`,
    keywords,
    keywordsEn: keywords.map((keyword) => ({
      name: keyword.name,
      description: keyword.descriptionEn || keyword.description
    })),
    theme: rawCourse.theme,
    target: toArray(rawCourse.target),
    recommendedTime: toArray(rawCourse.recommendedTime),
    mapLinks: rawCourse.mapLinks || {}
  };
}

function applyCourseData(rawCourses) {
  const courses = Array.isArray(rawCourses) ? rawCourses : [];
  if (!courses.length) {
    courseDataLoadStatus = 'fallback';
    courseDataLoadMessage = '추천 코스 JSON 데이터가 없어 fallback route data를 사용했습니다.';
    return;
  }

  mergeCoursePlacesIntoResources(courses);
  const normalizedRoutes = courses
    .map(normalizeCourseRoute)
    .filter((route) => route.flow.length && route.resourceIds.length);

  if (!normalizedRoutes.length) {
    courseDataLoadStatus = 'fallback';
    courseDataLoadMessage = '추천 코스 JSON 구조를 읽었지만 화면에 표시할 코스가 부족해 fallback route data를 사용했습니다.';
    return;
  }

  ROUTE_DATA = normalizedRoutes;
  courseDataLoadStatus = 'loaded';
  courseDataLoadMessage = `${COURSE_DATA_URL}에서 ${ROUTE_DATA.length}개 추천 코스를 불러왔습니다.`;
}

function getMaruApiBaseUrl() {
  let configured = '';
  try {
    configured = window.localStorage?.getItem(MARU_API_BASE_STORAGE_KEY) || '';
  } catch (error) {
    configured = '';
  }

  const normalized = String(configured).trim().replace(/\/+$/, '');
  if (normalized) return normalized;

  const host = window.location.hostname;
  const isLocalFrontend = host === 'localhost' || host === '127.0.0.1' || host === '';
  return isLocalFrontend ? MARU_LOCAL_API_BASE_URL : '';
}

function makeMaruApiUrl(path) {
  const baseUrl = getMaruApiBaseUrl();
  if (!baseUrl || !path) return '';
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

function getAuthToken() {
  return String(storageGet(STORAGE_KEYS.authToken, '') || '').trim();
}

function getCachedAuthUser() {
  const user = storageJsonGet(STORAGE_KEYS.authUser, null);
  return user && typeof user === 'object' ? user : null;
}

function setAuthSession(payload) {
  const token = String(payload?.accessToken || '').trim();
  const user = payload?.user && typeof payload.user === 'object' ? payload.user : null;

  if (token) {
    storageSet(STORAGE_KEYS.authToken, token);
  } else {
    storageSet(STORAGE_KEYS.authToken, '');
  }

  if (user) {
    storageJsonSet(STORAGE_KEYS.authUser, user);
  } else {
    storageSet(STORAGE_KEYS.authUser, '');
  }

  authState = {
    token,
    user,
    offline: false
  };
  renderHeaderAuthAction();
  renderAuthPage();
}

function clearAuthSession() {
  storageSet(STORAGE_KEYS.authToken, '');
  storageSet(STORAGE_KEYS.authUser, '');
  authState = {
    token: '',
    user: null,
    offline: false
  };
  renderHeaderAuthAction();
  renderAuthPage();
}

async function fetchMaruApiJson(path, options = {}) {
  const url = makeMaruApiUrl(path);
  if (!url) throw new Error('MARU API 서버 주소가 설정되지 않았습니다.');

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), options.timeoutMs || MARU_AUTH_TIMEOUT_MS);
  const headers = { ...(options.headers || {}) };
  const token = options.token || getAuthToken();

  if (options.body && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      cache: 'no-store',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal
    });

    let payload = null;
    try {
      payload = await response.json();
    } catch (error) {
      payload = null;
    }

    if (!response.ok) {
      const error = new Error(payload?.message || `HTTP ${response.status}`);
      error.status = response.status;
      error.payload = payload;
      throw error;
    }

    return payload;
  } finally {
    window.clearTimeout(timeout);
  }
}

async function refreshAuthSession() {
  const token = getAuthToken();
  const cachedUser = getCachedAuthUser();

  authState = {
    token,
    user: cachedUser,
    offline: false
  };

  if (!token) {
    renderHeaderAuthAction();
    renderAuthPage();
    return null;
  }

  try {
    const user = await fetchMaruApiJson(MARU_API_PATHS.authMe, { token });
    authState = {
      token,
      user,
      offline: false
    };
    storageJsonSet(STORAGE_KEYS.authUser, user);
    renderHeaderAuthAction();
    renderAuthPage();
    return user;
  } catch (error) {
    const message = String(error?.message || '');
    const isConnectionFailure = error?.name === 'AbortError'
        || error instanceof TypeError
        || /failed to fetch|networkerror|load failed/i.test(message);

    if (error?.status === 401 || error?.status === 403) {
      clearAuthSession();
      return null;
    }

    authState = {
      token,
      user: cachedUser,
      offline: isConnectionFailure
    };
    renderHeaderAuthAction();
    renderAuthPage();
    return cachedUser;
  }
}

async function fetchJsonFromMaruApi(path, options = {}) {
  const apiUrl = makeMaruApiUrl(path);
  if (!apiUrl || maruApiHostUnavailable || maruApiFailedPaths.has(path)) {
    return { ok: false, payload: null };
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), MARU_API_TIMEOUT_MS);
  const fetchOptions = {
    cache: 'no-store',
    signal: controller.signal,
    method: options.method || 'GET',
    headers: options.headers ? { ...options.headers } : {}
  };

  if (Object.prototype.hasOwnProperty.call(options, 'jsonBody')) {
    fetchOptions.headers['Content-Type'] = 'application/json';
    fetchOptions.body = JSON.stringify(options.jsonBody);
  }

  try {
    const response = await fetch(apiUrl, fetchOptions);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    const payload = text ? JSON.parse(text) : null;
    return { ok: true, payload };
  } catch (error) {
    const message = String(error?.message || '');
    const isConnectionFailure = error?.name === 'AbortError'
        || error instanceof TypeError
        || /failed to fetch|networkerror|load failed/i.test(message);
    if (isConnectionFailure) {
      maruApiHostUnavailable = true;
    } else {
      maruApiFailedPaths.add(path);
    }
    return { ok: false, payload: null, error };
  } finally {
    window.clearTimeout(timeout);
  }
}

async function fetchDataArrayFromApi(path) {
  const result = await fetchJsonFromMaruApi(path);
  if (!result.ok) return null;
  const payload = result.payload;
  const items = Array.isArray(payload) ? payload : (payload?.items || payload?.data || []);
  return Array.isArray(items) && items.length ? items : null;
}

async function loadCourseData() {
  try {
    const apiCourses = await fetchDataArrayFromApi(MARU_API_PATHS.courses);
    if (apiCourses) {
      applyCourseData(apiCourses);
      courseDataLoadMessage = `${makeMaruApiUrl(MARU_API_PATHS.courses)}에서 ${ROUTE_DATA.length}개 추천 코스를 불러왔습니다.`;
      return;
    }

    const response = await fetch(COURSE_DATA_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const courses = Array.isArray(payload) ? payload : (payload.courses || payload.data || []);
    applyCourseData(courses);
  } catch (error) {
    courseDataLoadStatus = 'fallback';
    courseDataLoadMessage = `${COURSE_DATA_URL} 로드 실패로 fallback route data를 사용했습니다.`;
  }
}

function applyCultureResources(rawResources) {
  const normalizedResources = rawResources
    .map(normalizeCultureResource)
    .filter(isSeoulResource);
  const deduped = [];
  const seenIds = new Set();

  normalizedResources.forEach((resource) => {
    if (seenIds.has(resource.id)) return;
    seenIds.add(resource.id);
    deduped.push(resource);
  });

  if (deduped.length < 5) {
    cultureResourceLoadStatus = 'fallback';
    cultureResourceLoadMessage = 'JSON 데이터가 부족해 fallback seed data를 사용했습니다.';
    return;
  }

  CULTURE_RESOURCES = deduped;
  ROUTE_DATA = generateRoutesFromResources();
  cultureResourceLoadStatus = 'loaded';
  cultureResourceLoadMessage = `${CULTURE_RESOURCE_DATA_URL}에서 ${CULTURE_RESOURCES.length}개 장소를 불러왔습니다.`;
}

async function loadCultureResources() {
  const overrideResources = getDataOverride(CULTURE_RESOURCE_DATA_URL);
  if (overrideResources) {
    applyCultureResources(overrideResources);
    cultureResourceLoadStatus = 'loaded';
    cultureResourceLoadMessage = `${CULTURE_RESOURCE_DATA_URL} 로컬 관리 오버라이드를 사용했습니다.`;
    return;
  }

  try {
    const apiResources = await fetchDataArrayFromApi(MARU_API_PATHS.places);
    if (apiResources) {
      applyCultureResources(apiResources);
      cultureResourceLoadMessage = `${makeMaruApiUrl(MARU_API_PATHS.places)}에서 ${CULTURE_RESOURCES.length}개 장소를 불러왔습니다.`;
      return;
    }

    const response = await fetch(CULTURE_RESOURCE_DATA_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const resources = Array.isArray(payload) ? payload : (payload.resources || payload.data || []);
    applyCultureResources(resources);
  } catch (error) {
    cultureResourceLoadStatus = 'fallback';
    cultureResourceLoadMessage = `${CULTURE_RESOURCE_DATA_URL} 로드 실패로 fallback seed data를 사용했습니다.`;
  }
}

async function loadDynamicArray(url, fallback, options = {}) {
  const overrideItems = getDataOverride(url);
  if (overrideItems) return overrideItems;

  try {
    if (options.apiPath) {
      const apiItems = await fetchDataArrayFromApi(options.apiPath);
      if (apiItems) return apiItems;
    }

    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    const items = Array.isArray(payload) ? payload : (payload.items || payload.data || []);
    return Array.isArray(items) && items.length ? items : fallback;
  } catch (error) {
    return fallback;
  }
}

async function loadDynamicAppData() {
  const [routeBlueprints, weather, support, passport, publicDataSources, festivals, heritage] = await Promise.all([
    loadDynamicArray(DYNAMIC_DATA_URLS.routeBlueprints, ROUTE_BLUEPRINTS),
    loadDynamicArray(DYNAMIC_DATA_URLS.weather, WEATHER_DATA),
    loadDynamicArray(DYNAMIC_DATA_URLS.support, SUPPORT_DATA),
    loadDynamicArray(DYNAMIC_DATA_URLS.passport, PASSPORT_DATA),
    loadDynamicArray(DYNAMIC_DATA_URLS.publicDataSources, PUBLIC_DATA_SOURCES, { apiPath: MARU_API_PATHS.publicDataSources }),
    loadDynamicArray(DYNAMIC_DATA_URLS.festivals, FESTIVAL_DATA, { apiPath: MARU_API_PATHS.festivals }),
    loadDynamicArray(DYNAMIC_DATA_URLS.heritage, HERITAGE_DATA, { apiPath: MARU_API_PATHS.heritage })
  ]);

  ROUTE_BLUEPRINTS = routeBlueprints;
  WEATHER_DATA = weather;
  SUPPORT_DATA = support;
  PASSPORT_DATA = passport;
  PUBLIC_DATA_SOURCES = publicDataSources;
  FESTIVAL_DATA = festivals;
  HERITAGE_DATA = heritage;
}

function getPreferenceInterests(preference = loadUserPreference()) {
  return Array.isArray(preference?.interests)
    ? preference.interests.filter(Boolean)
    : [preference?.interests].filter(Boolean);
}

function resourceSearchText(resource) {
  return [
    resource.nameKo,
    resource.nameEn,
    resource.category,
    resource.categoryEn,
    resource.district,
    resource.region,
    resource.globalTags?.join(' '),
    resource.aiSimpleExplanation,
    resource.aiWhyItMatters,
    resource.aiVisitTip
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function routeSearchText(route, resources = getRouteResources(route)) {
  return [
    route.title,
    route.englishTitle,
    route.reason,
    route.reasonEn,
    route.summary,
    route.englishExplanation,
    route.tags?.join(' '),
    resources.map((resource) => resourceSearchText(resource)).join(' ')
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

function matchesPreferenceInterest(resource, interest) {
  const text = resourceSearchText(resource);
  const keywordMap = {
    궁궐: ['궁궐', 'palace', 'royal'],
    한옥: ['한옥', 'hanok'],
    전통시장: ['전통시장', '시장', 'market', 'local life'],
    공예: ['공예', 'craft', 'museum of craft', 'traditional street'],
    공연: ['공연', 'theater', 'performance', '국악'],
    박물관: ['박물관', 'museum', 'exhibition']
  };

  return (keywordMap[interest] || [interest]).some((keyword) => text.includes(String(keyword).toLowerCase()));
}

function isLowWalkingResource(resource) {
  return /낮음|low/i.test(`${resource.walkingLevel || ''} ${resource.walkingLevelEn || ''}`);
}

function isIndoorResource(resource) {
  return /실내|indoor/i.test(`${resource.indoorOutdoor || ''} ${resource.indoorOutdoorEn || ''}`);
}

function isOutdoorResource(resource) {
  return /실외|outdoor/i.test(`${resource.indoorOutdoor || ''} ${resource.indoorOutdoorEn || ''}`);
}

function scoreResourceForPreference(resource, preference = loadUserPreference()) {
  const interests = getPreferenceInterests(preference);
  const requestText = `${preference?.request || ''}`.toLowerCase();
  const text = resourceSearchText(resource);
  let score = recommendationPriority(resource);

  if (preference?.region === '종로+중구') {
    score += ['종로구', '중구'].includes(resource.district) ? 24 : -10;
  } else if (preference?.region) {
    score += resource.district === preference.region ? 28 : -8;
  }

  if (interests.length) {
    const interestMatches = interests.filter((interest) => matchesPreferenceInterest(resource, interest)).length;
    score += interestMatches * 24;
    if (!interestMatches) score -= 10;
  }

  if (preference?.walking === '적게 걷기') {
    score += isLowWalkingResource(resource) ? 26 : -14;
  } else if (preference?.walking === '많이 걸어도 괜찮음') {
    score += /보통|높음|moderate|high/i.test(`${resource.walkingLevel || ''} ${resource.walkingLevelEn || ''}`) ? 8 : 2;
  }

  if (preference?.indoorOutdoor === '실내') {
    score += isIndoorResource(resource) ? 28 : -18;
  } else if (preference?.indoorOutdoor === '실외') {
    score += isOutdoorResource(resource) ? 22 : -12;
  }

  if (preference?.budget === '무료 위주') {
    score += /무료|free/i.test(resource.feeType || '') ? 18 : -12;
  } else if (preference?.budget === '유료 가능') {
    score += /유료|paid|선택/i.test(resource.feeType || '') ? 8 : 4;
  }

  if (preference?.groupType === '커플' && resource.photoSpotScore >= 4) score += 12;
  if ((preference?.groupType === '가족' || preference?.groupType === '아이 동반' || preference?.groupType === '부모님 동반') && (isLowWalkingResource(resource) || isIndoorResource(resource))) score += 14;
  if (preference?.groupType === '친구와' && /(market|시장|performance|공연|street|거리)/i.test(text)) score += 10;
  if (preference?.groupType === '혼자' && /(museum|박물관|history|역사|palace|궁궐)/i.test(text)) score += 10;

  if (hasAnyTerm(requestText, ['비 오는 날', '비오', '비 오', 'rain', '우천'])) score += Number(resource.rainyDayScore || 0) * 14;
  if (hasAnyTerm(requestText, ['사진', 'photo', 'photogenic'])) score += Number(resource.photoSpotScore || 0) * 6;
  if (hasAnyTerm(requestText, ['영어', 'english'])) score += resource.englishAvailable ? 12 : -4;
  if (hasAnyTerm(requestText, ['조용', 'quiet', 'hidden'])) score += /(quiet|hidden|조용)/i.test(text) ? 10 : 0;
  if (hasAnyTerm(requestText, ['시장', 'market', '먹거리'])) score += /(시장|market|food)/i.test(text) ? 12 : 0;

  return Math.round(score);
}

function estimateRouteHours(route) {
  const label = `${route.time || ''}`;
  if (label.includes('반나절')) return 4;
  if (label.includes('하루')) return 7;
  const matches = [...label.matchAll(/(\d+(?:\.\d+)?)/g)].map((match) => Number(match[1]));
  return matches.length ? Math.max(...matches) : 3;
}

function scoreRouteForPreference(route, preference = loadUserPreference()) {
  const resources = getRouteResources(route);
  const requestText = `${preference?.request || ''}`.toLowerCase();
  const interests = getPreferenceInterests(preference);
  const routeText = routeSearchText(route, resources);
  const indoorCount = resources.filter(isIndoorResource).length;
  const averageRainyScore = resources.length
    ? resources.reduce((sum, resource) => sum + Number(resource.rainyDayScore || 0), 0) / resources.length
    : 0;
  const averageResourceScore = resources.length
    ? resources.reduce((sum, resource) => sum + scoreResourceForPreference(resource, preference), 0) / resources.length
    : 0;
  let score = route.score * 1.2 + averageResourceScore;

  if (preference?.time === '2시간') {
    score += estimateRouteHours(route) <= 2.5 ? 24 : estimateRouteHours(route) <= 3.5 ? 8 : -12;
  } else if (preference?.time === '3시간') {
    score += estimateRouteHours(route) >= 2.5 && estimateRouteHours(route) <= 4 ? 18 : 4;
  } else if (preference?.time === '반나절') {
    score += estimateRouteHours(route) >= 3 && estimateRouteHours(route) <= 5 ? 18 : 6;
  } else if (preference?.time === '하루') {
    score += estimateRouteHours(route) >= 4 ? 16 : 8;
  }

  if (interests.length) {
    const routeInterestMatches = interests.filter((interest) => routeText.includes(String(interest).toLowerCase())).length;
    score += routeInterestMatches * 24;
  }

  if (preference?.region === '종로+중구') {
    score += resources.some((resource) => ['종로구', '중구'].includes(resource.district)) ? 14 : -10;
  } else if (preference?.region) {
    score += resources.some((resource) => resource.district === preference.region) ? 18 : -10;
  }

  if (preference?.walking === '적게 걷기' && /낮음|easy|light/i.test(`${route.walking || ''}`)) score += 20;
  if (preference?.indoorOutdoor === '실내') score += indoorCount * 8 + averageRainyScore * 6;
  if (preference?.indoorOutdoor === '실외' && resources.filter(isOutdoorResource).length >= Math.ceil(resources.length / 2)) score += 16;
  if (preference?.budget === '무료 위주' && /무료|저비용/i.test(route.fee || '')) score += 14;

  if (hasAnyTerm(requestText, ['비 오는 날', '비오', '비 오', 'rain', '우천']) && /(rain|우천|실내|museum|공연)/i.test(routeText)) score += 28 + averageRainyScore * 6;
  if (hasAnyTerm(requestText, ['사진', 'photo']) && /(사진|photo)/i.test(routeText)) score += 16;
  if (hasAnyTerm(requestText, ['영어', 'english']) && resources.some((resource) => resource.englishAvailable)) score += 10;
  if (interests.includes('공연') && /(공연|performance|theater)/i.test(routeText)) score += 18;
  if (interests.includes('박물관') && /(박물관|museum)/i.test(routeText)) score += 14;

  return Math.round(score);
}

function buildRoutePreferenceReason(route, preference = loadUserPreference()) {
  const resources = getRouteResources(route);
  const interests = getPreferenceInterests(preference);
  const reasons = [];

  if (preference?.region === '종로+중구' && resources.some((resource) => ['종로구', '중구'].includes(resource.district))) {
    reasons.push('종로·중구 중심 동선');
  } else if (preference?.region && resources.some((resource) => resource.district === preference.region)) {
    reasons.push(`${preference.region} 우선`);
  }

  const matchedInterests = interests.filter((interest) => routeSearchText(route, resources).includes(String(interest).toLowerCase()));
  if (matchedInterests.length) reasons.push(`${matchedInterests.slice(0, 2).join(', ')} 관심 반영`);

  if (preference?.walking === '적게 걷기' && /낮음|easy|light/i.test(`${route.walking || ''}`)) {
    reasons.push('걷기 부담 완화');
  }

  if (preference?.indoorOutdoor === '실내' && resources.filter(isIndoorResource).length >= Math.ceil(resources.length / 2)) {
    reasons.push('실내 비중 강화');
  }

  if (preference?.budget === '무료 위주' && /무료|저비용/i.test(route.fee || '')) {
    reasons.push('예산 부담 낮춤');
  }

  if (hasAnyTerm(`${preference?.request || ''}`, ['비 오는 날', '비오', '비 오', 'rain', '우천']) && /(rain|우천|실내|museum|공연)/i.test(routeSearchText(route, resources))) {
    reasons.push('우천 대응');
  }

  if (hasAnyTerm(`${preference?.request || ''}`, ['사진', 'photo']) && /(사진|photo)/i.test(routeSearchText(route, resources))) {
    reasons.push('사진 동선 반영');
  }

  return reasons.length
    ? `${reasons.join(' · ')} 조건에 잘 맞는 코스입니다.`
    : route.reason;
}

function getRankedRoutes(preference = loadUserPreference()) {
  return ROUTE_DATA
    .map((route) => ({
      route,
      preferenceScore: scoreRouteForPreference(route, preference),
      dynamicReason: buildRoutePreferenceReason(route, preference)
    }))
    .sort((left, right) => right.preferenceScore - left.preferenceScore);
}

function getTopRecommendedRoute(preference = loadUserPreference()) {
  return getRankedRoutes(preference)[0]?.route || ROUTE_DATA[0];
}

function isWeekendInSeoul(date = new Date()) {
  try {
    const weekday = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Seoul',
      weekday: 'short'
    }).format(date);
    return ['Sat', 'Sun'].includes(weekday);
  } catch (error) {
    const day = (date.getUTCDay() + 7) % 7;
    return day === 0 || day === 6;
  }
}

function normalizeUiScore(score, scale = 2.8) {
  return Math.max(48, Math.min(99, Math.round(score / scale)));
}

function currentWeatherSnapshot() {
  return WEATHER_DATA[0] || { day: '오늘', sky: '맑음', temp: '', rain: '' };
}

function estimateResourceCrowdScore(resource, options = {}) {
  const period = options.period || getTimePeriod();
  const weatherText = `${options.weather?.sky || currentWeatherSnapshot().sky || ''}`.toLowerCase();
  const weekend = typeof options.weekend === 'boolean' ? options.weekend : isWeekendInSeoul();
  let score = Number(resource.foreignerPopularityScore || 3) * 12;

  if (/궁궐|hanok|palace|village/i.test(`${resource.category || ''}`)) score += 10;
  if (/박물관|museum|market|공연|performance/i.test(`${resource.category || ''}`)) score += 6;
  if (resource.englishAvailable) score += 4;
  if (period === 'day') score += 10;
  if (period === 'evening' && /(공연|performance|market|night)/i.test(`${resource.category || ''}`)) score += 9;
  if (period === 'night' && !/(궁궐|market|performance|night)/i.test(`${resource.category || ''}`)) score -= 6;
  if (weekend) score += 12;
  if (/비|rain/.test(weatherText) && isIndoorResource(resource)) score += 12;
  if (/비|rain/.test(weatherText) && isOutdoorResource(resource)) score -= 8;
  if (String(resource.walkingLevel || '').includes('낮음')) score += 3;

  return Math.max(18, Math.min(95, Math.round(score)));
}

function estimateRouteCrowdScore(route, options = {}) {
  const resources = getRouteResources(route);
  if (!resources.length) return 40;
  const total = resources.reduce((sum, resource) => sum + estimateResourceCrowdScore(resource, options), 0);
  return Math.round(total / resources.length);
}

function getCrowdLevelKey(score) {
  if (score >= 72) return 'high';
  if (score >= 46) return 'medium';
  return 'low';
}

function getCrowdLabel(score) {
  return ft(`crowd.${getCrowdLevelKey(score)}`, getCrowdLevelKey(score));
}

function getRouteDecisionFactors(route, preference = loadUserPreference()) {
  const resources = getRouteResources(route);
  const routeText = routeSearchText(route, resources);
  const requestText = `${preference?.request || ''}`;
  const interests = getPreferenceInterests(preference);
  const factors = [];

  if (preference?.region === '종로+중구' && resources.some((resource) => ['종로구', '중구'].includes(resource.district))) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? '중심권 동선' : 'Central route', score: 18 });
  } else if (preference?.region && resources.some((resource) => resource.district === preference.region)) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? `${preference.region} 우선` : `${preference.region} match`, score: 18 });
  }

  if (interests.length) {
    const matched = interests.filter((interest) => routeText.includes(String(interest).toLowerCase()));
    if (matched.length) {
      factors.push({
        label: getCurrentLanguage() === 'ko' ? `${matched.slice(0, 2).join(', ')} 관심` : `${matched.slice(0, 2).join(', ')} match`,
        score: 20 + (matched.length * 4)
      });
    }
  }

  if (preference?.walking === '적게 걷기' && /낮음|easy|light/i.test(`${route.walking || ''}`)) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? '걷기 부담 낮음' : 'Low walking load', score: 16 });
  }

  if (preference?.budget === '무료 위주' && /무료|저비용/i.test(`${route.fee || ''}`)) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? '예산 친화' : 'Budget friendly', score: 14 });
  }

  if (preference?.indoorOutdoor === '실내' && resources.filter(isIndoorResource).length >= Math.ceil(resources.length / 2)) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? '실내 비중' : 'Indoor heavy', score: 14 });
  }

  if (hasAnyTerm(requestText, ['비 오는 날', '비오', '비 오', '우천', 'rain']) && /(실내|museum|공연|rain|우천)/i.test(routeText)) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? '우천 대응' : 'Rainy-day fit', score: 18 });
  }

  if (hasAnyTerm(requestText, ['사진', 'photo']) && /(사진|photo)/i.test(routeText)) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? '사진 포인트' : 'Photo friendly', score: 12 });
  }

  if (resources.some((resource) => resource.englishAvailable)) {
    factors.push({ label: getCurrentLanguage() === 'ko' ? '영어 안내 가능성' : 'English-friendly', score: 10 });
  }

  return factors.sort((left, right) => right.score - left.score);
}

function getRouteInsight(route, preference = loadUserPreference()) {
  const factors = getRouteDecisionFactors(route, preference);
  const fitScore = normalizeUiScore(scoreRouteForPreference(route, preference));
  const crowdScore = estimateRouteCrowdScore(route);
  const travelerLabel = preference?.groupType || preference?.people || (getCurrentLanguage() === 'ko' ? '개별 여행자' : 'independent travelers');

  return {
    fitScore,
    crowdScore,
    crowdLabel: getCrowdLabel(crowdScore),
    factors,
    travelerLabel
  };
}

function renderRouteMiniInsights(route, preference = loadUserPreference()) {
  const insight = getRouteInsight(route, preference);
  return `
    <div class="route-signal-row">
      <span class="route-signal-badge">${escapeHtml(ft('ai.scoreLabel', 'Fit score'))} ${escapeHtml(String(insight.fitScore))}</span>
      <span class="route-signal-badge crowd-${escapeHtml(getCrowdLevelKey(insight.crowdScore))}">${escapeHtml(ft('ai.crowdLabel', 'Expected crowd'))} ${escapeHtml(insight.crowdLabel)}</span>
    </div>
    <div class="route-signal-chips">
      ${insight.factors.slice(0, 3).map((factor) => `<span>${escapeHtml(factor.label)}</span>`).join('')}
    </div>
  `;
}

function scoreForeignerPlace(resource) {
  let score = Number(resource.foreignerPopularityScore || 3) * 20;
  if (resource.englishAvailable) score += 14;
  if (resource.foreignerPopular) score += 12;
  score += Number(resource.photoSpotScore || 0) * 5;
  score += Number(resource.qualityScore || 0) * 0.9;
  if (String(resource.indoorOutdoor || '').includes('실내')) score += 4;
  return Math.round(score);
}

function scoreForeignerRoute(route) {
  const resources = getRouteResources(route);
  const averagePlaceScore = resources.length
    ? resources.reduce((sum, resource) => sum + scoreForeignerPlace(resource), 0) / resources.length
    : 60;
  return Math.round((route.score * 0.9) + (averagePlaceScore * 0.6));
}

function getForeignerPlaceRanking(limit = 5) {
  return CULTURE_RESOURCES
    .filter((resource) => !resource.isDetailStoryOnly && resource.isIndependentSite)
    .map((resource) => ({ resource, score: scoreForeignerPlace(resource) }))
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

function getForeignerRouteRanking(limit = 3) {
  return ROUTE_DATA
    .map((route) => ({ route, score: scoreForeignerRoute(route) }))
    .sort((left, right) => right.score - left.score)
    .slice(0, limit);
}

function buildBundleStops(route, festival = null) {
  const startHour = getTimePeriod() === 'day' ? 10 : getTimePeriod() === 'evening' ? 15 : 18;
  const placeStops = route.flow.map((place, index) => {
    const hour = startHour + index;
    return {
      time: `${String(hour).padStart(2, '0')}:00`,
      label: localizePlaceName(place),
      type: 'place'
    };
  });

  if (!festival) return placeStops;

  const insertIndex = Math.min(1, placeStops.length);
  placeStops.splice(insertIndex + 1, 0, {
    time: `${String(startHour + insertIndex + 1).padStart(2, '0')}:30`,
    label: getLocalizedDataValue(festival.title),
    type: 'event'
  });
  return placeStops;
}

function getRouteBundles(route, limit = 3) {
  const festivals = getRelatedFestivals(route, limit);
  if (!festivals.length) {
    return [{
      id: `${route.id}-core-bundle`,
      routeId: route.id,
      festivalId: '',
      title: `${getRouteView(route).title} Bundle`,
      summary: ft('bundle.empty', 'This plan focuses on the route itself.'),
      stops: buildBundleStops(route, null)
    }];
  }

  return festivals.map((festival) => ({
    id: `${route.id}-${festival.id}`,
    routeId: route.id,
    festivalId: festival.id,
    title: `${getRouteView(route).title} + ${getLocalizedDataValue(festival.title)}`,
    summary: getLocalizedDataValue(festival.venue) || festival.aiUse || ft('bundle.body', ''),
    stops: buildBundleStops(route, festival)
  }));
}

function getSavedBundles() {
  return storageJsonGet(STORAGE_KEYS.savedBundles, []);
}

function saveBundlePlan(bundle) {
  const saved = getSavedBundles();
  const next = saved.some((item) => item.id === bundle.id)
    ? saved
    : [{ ...bundle, createdAt: Date.now() }, ...saved].slice(0, 12);
  storageJsonSet(STORAGE_KEYS.savedBundles, next);
}

function getCrowdSmartAlternatives(route, limit = 2) {
  const baseScore = estimateRouteCrowdScore(route);
  return getRankedRoutes(loadUserPreference())
    .filter((item) => item.route.id !== route.id)
    .map((item) => ({
      route: item.route,
      crowdScore: estimateRouteCrowdScore(item.route),
      fitScore: normalizeUiScore(item.preferenceScore)
    }))
    .filter((item) => item.crowdScore < baseScore + 6)
    .sort((left, right) => (left.crowdScore - right.crowdScore) || (right.fitScore - left.fitScore))
    .slice(0, limit);
}

function renderInstallCard() {
  const section = qs('[data-install-card]');
  if (!section) return;

  const isInstalled = window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone;
  section.classList.remove('is-hidden');

  if (isInstalled) {
    section.innerHTML = `
      <h2>${escapeHtml(ft('home.installTitle', 'Install Like an App'))}</h2>
      <p>${escapeHtml(ft('home.installed', 'Already installed.'))}</p>
    `;
    return;
  }

  section.innerHTML = `
    <h2>${escapeHtml(ft('home.installTitle', 'Install Like an App'))}</h2>
    <p>${escapeHtml(ft('home.installBody', 'Install the app for a better mobile experience.'))}</p>
    <button class="button button-secondary button-block" type="button" data-install-trigger>${escapeHtml(ft('home.installAction', 'Install'))}</button>
    <small>${escapeHtml(ft('home.installHint', 'Use Add to Home Screen if your browser does not show the prompt.'))}</small>
  `;
}

function initInstallPromptEvents() {
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    renderInstallCard();
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    renderInstallCard();
  });
}

async function triggerInstallPrompt() {
  if (!deferredInstallPrompt) {
    showToast(ft('home.installHint', 'Use Add to Home Screen from your browser menu.'));
    return;
  }

  deferredInstallPrompt.prompt();
  try {
    await deferredInstallPrompt.userChoice;
  } catch (error) {
    // Ignore dismissal and keep the manual hint path.
  }
  deferredInstallPrompt = null;
  renderInstallCard();
}

function applyStaticTranslations() {
  const language = getCurrentLanguage();
  const fileName = getCurrentFileName();
  document.documentElement.lang = LANGUAGE_HTML_LANG[language] || 'ko';
  applyPageMetadata(fileName);

  qsa('.bottom-tab').forEach((nav) => {
    nav.setAttribute('aria-label', t('common.bottomTabsAria'));
  });

  Object.entries({
    home: 'tabs.home',
    recommend: 'tabs.recommend',
    map: 'tabs.map',
    support: 'tabs.support',
    passport: 'tabs.passport'
  }).forEach(([tab, key]) => {
    setText(`[data-tab="${tab}"] strong`, t(key));
  });

  qsa('[data-language]').forEach((button) => {
    const code = normalizeLanguage(button.dataset.language);
    button.dataset.language = code;
    button.textContent = LANGUAGES[code] || LANGUAGES.ko;
  });

  const confirm = qs('[data-language-confirm]');
  if (confirm) confirm.textContent = t('home.languageConfirm');

  if (fileName === 'index.html') {
    setText('.app-header .brand strong', t('routes.header'));
    setText('.app-header .brand small', t('home.headerSub'));
    qs('.app-header .brand')?.setAttribute('aria-label', `${t('routes.header')} ${t('tabs.home')}`);
    qs('[data-home-time-hero]')?.setAttribute('aria-label', t('home.heroAria'));
    qs('.language-card')?.setAttribute('aria-label', t('home.languageAria'));
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
    if (links[2]) links[2].textContent = t('home.aiPhoto', links[2].textContent);
    if (links[3]) links[3].textContent = ft('ranking.nav', links[3].textContent);
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
    const reasonHeading = qs('[data-detail-reason]')?.closest('.mobile-card')?.querySelector('h2');
    const flowHeading = qs('[data-detail-flow]')?.closest('.mobile-card')?.querySelector('h2');
    const aiGuideHeading = qs('[data-detail-summary]')?.closest('.mobile-card')?.querySelector('h2');
    const keywordHeading = qs('[data-keyword-list]')?.closest('.mobile-card')?.querySelector('h2');
    const tipHeading = qs('[data-detail-tip]')?.closest('.mobile-card')?.querySelector('h2');
    if (reasonHeading) reasonHeading.textContent = t('detail.reason');
    if (flowHeading) flowHeading.textContent = t('detail.flow');
    if (aiGuideHeading) aiGuideHeading.textContent = t('detail.aiGuide');
    if (keywordHeading) keywordHeading.textContent = t('detail.keywords');
    if (tipHeading) tipHeading.textContent = t('detail.visitTip');
    setText('.verification-warning', t('detail.warning'));
    setText('[data-route-action="passport-current"]', t('detail.passport'));
  }

  if (fileName === 'map.html') {
    setText('.app-header .brand strong', t('map.header'));
    setText('.app-header .brand small', t('map.headerSub'));
    setText('.app-header .header-pill', t('map.changeRoute'));
    setText('.page-title-card .eyebrow', t('map.eyebrow'));
    setText('.page-title-card > p:not(.eyebrow)', t('map.body'));
    const timelineHeading = qs('[data-map-timeline]')?.closest('.mobile-card')?.querySelector('h2');
    if (timelineHeading) timelineHeading.textContent = t('map.timeline');

    const actions = qsa('.action-card');
    const actionData = [
      ['map.lessWalking', 'map.lessWalkingToast'],
      ['map.rainyIndoor', 'map.rainyIndoorToast']
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
    qs('.app-header .header-pill')?.setAttribute('data-support-jump', 'tourist-info');
    setText('.emergency-card .eyebrow', t('support.eyebrow'));
    setText('.emergency-card h1', t('support.title'));
    setText('.emergency-card > p:not(.eyebrow)', t('support.body'));

    const buttons = qsa('.emergency-grid button');
    SUPPORT_QUICK_ACTIONS.forEach((action, index) => {
      if (!buttons[index]) return;
      buttons[index].textContent = textFrom(action.label, language);
      buttons[index].dataset.supportJump = action.target;
    });
  }

  if (fileName === 'planner.html') {
    setText('.app-header .brand strong', t('planner.header'));
    setText('.app-header .brand small', t('planner.headerSub'));
    qs('.planner-progress')?.setAttribute('aria-label', t('planner.progressAria'));
    setText('.page-title-card .eyebrow', t('planner.eyebrow'));
    setText('.page-title-card h1', t('planner.title'));
    setText('.page-title-card > p:not(.eyebrow)', t('planner.body'));

    qsa('[data-step]').forEach((step, index) => {
      const copy = t('planner.steps')[index];
      if (!copy) return;
      const title = qs('h2', step);
      const body = qs(':scope > p', step);
      if (title) title.textContent = copy.title;
      if (body) body.textContent = copy.body;
    });

    qsa('.option-block > span').forEach((span, index) => {
      span.textContent = t('planner.optionLabels')[index] || span.textContent;
    });

    qsa('[data-pref-group] .choice-button').forEach((button) => {
      button.textContent = translatePreferenceValue(button.dataset.value);
    });

    const requestLabel = qs('.text-field span');
    if (requestLabel) requestLabel.textContent = t('planner.requestLabel');
    qs('[data-pref-request]')?.setAttribute('placeholder', t('planner.requestPlaceholder'));

    const summary = qs('.summary-preview');
    if (summary && !summary.textContent.trim()) summary.textContent = t('planner.summaryPlaceholder');

    setText('[data-planner-prev]', t('planner.prev'));
    setText('[data-planner-next]', t('planner.next'));
    setText('[data-planner-finish]', t('planner.finish'));
  }

  if (fileName === 'weather.html') {
    setText('.app-header .brand strong', t('weather.header'));
    setText('.app-header .brand small', t('weather.headerSub'));
    setText('.app-header .header-pill', t('weather.action'));
    setText('.weather-summary .eyebrow', t('weather.eyebrow'));
    setText('.weather-summary h1', t('weather.title'));
    setText('.weather-summary > p:not(.eyebrow)', t('weather.summary'));

    const todayRoute = qs('.today-route-card');
    if (todayRoute) {
      const label = qs(':scope > span', todayRoute);
      const title = qs(':scope > h2', todayRoute);
      const body = qs(':scope > p', todayRoute);
      const link = qs(':scope > a', todayRoute);
      if (label) label.textContent = t('weather.todayLabel');
      if (title) title.textContent = t('weather.todayTitle');
      if (body) body.textContent = t('weather.todayBody');
      if (link) link.textContent = t('weather.routeButton');
    }

    const weatherCards = qsa('.mobile-card');
    if (weatherCards[0]) {
      const heading = qs('h2', weatherCards[0]);
      if (heading) heading.textContent = t('weather.forecastTitle');
    }
    if (weatherCards[1]) {
      const heading = qs('h2', weatherCards[1]);
      const airRows = qsa('.air-row', weatherCards[1]);
      if (heading) heading.textContent = t('weather.airTitle');
      if (airRows[0]) {
        qs('span', airRows[0]).textContent = t('weather.pm10');
        qs('strong', airRows[0]).textContent = t('weather.good');
      }
      if (airRows[1]) {
        qs('span', airRows[1]).textContent = t('weather.pm25');
        qs('strong', airRows[1]).textContent = t('weather.good');
      }
    }
    if (weatherCards[2]) {
      const heading = qs('h2', weatherCards[2]);
      if (heading) heading.textContent = t('weather.backupTitle');
      const suggestions = t('weather.suggestions', []);
      qsa('.route-suggestion', weatherCards[2]).forEach((button, index) => {
        const copy = suggestions[index];
        if (!copy) return;
        qs('span', button).textContent = copy.label;
        qs('strong', button).textContent = copy.title;
        button.dataset.toast = copy.toast;
      });
    }
  }

  if (fileName === 'passport.html') {
    setText('.app-header .brand strong', t('passport.header'));
    setText('.app-header .brand small', t('passport.headerSub'));
    setText('.app-header .header-pill', t('passport.action'));
    setText('.page-title-card .eyebrow', t('passport.eyebrow'));
    setText('.page-title-card h1', t('passport.title'));
    setText('.page-title-card > p:not(.eyebrow)', t('passport.body'));

    const savedRoute = qs('[data-saved-route]');
    if (savedRoute && !storageJsonGet(STORAGE_KEYS.savedRoutes, []).length) {
      const label = qs(':scope > span', savedRoute);
      const empty = qs(':scope > strong', savedRoute);
      const link = qs(':scope > a', savedRoute);
      if (label) label.textContent = t('passport.savedLabel');
      if (empty) empty.textContent = t('passport.empty');
      if (link) link.textContent = t('passport.choose');
    }

    const stampHeading = qs('[data-passport-stamps]')?.closest('.mobile-card')?.querySelector('h2');
    if (stampHeading) stampHeading.textContent = t('passport.stampsTitle');

    const nextRoute = qs('.today-route-card');
    if (nextRoute) {
      const label = qs(':scope > span', nextRoute);
      const title = qs(':scope > h2', nextRoute);
      const body = qs(':scope > p', nextRoute);
      const link = qs(':scope > a', nextRoute);
      if (label) label.textContent = t('passport.nextLabel');
      if (title) title.textContent = t('passport.nextTitle');
      if (body) body.textContent = t('passport.nextBody');
      if (link) link.textContent = t('passport.view');
    }
  }

  if (fileName === 'about.html') {
    setText('.app-header .brand strong', t('about.header'));
    setText('.app-header .brand small', t('about.headerSub'));
    setText('.app-header .header-pill', t('about.action'));
    setText('.page-title-card .eyebrow', t('about.eyebrow'));
    setText('.page-title-card h1', t('about.title'));
    setText('.page-title-card > p:not(.eyebrow)', t('about.body'));

    const articles = t('about.articles', []);
    qsa('.about-stack article').forEach((article, index) => {
      const copy = articles[index];
      if (!copy) return;
      const title = qs('h2', article);
      const body = qs('p', article);
      if (title) title.textContent = copy.title;
      if (body) body.textContent = copy.body;
    });

    const links = t('about.links', []);
    qsa('.more-links a').forEach((link, index) => {
      if (links[index]) link.textContent = links[index];
    });
  }

  if (fileName === 'culture-data.html') {
    setText('.app-header .brand strong', t('cultureData.header'));
    setText('.app-header .brand small', t('cultureData.headerSub'));
    setText('.app-header .header-pill', t('cultureData.action'));
    setText('.page-title-card .eyebrow', t('cultureData.eyebrow'));
    setText('.page-title-card h1', t('cultureData.title'));
    setHtml('.page-title-card > p:not(.eyebrow)', t('cultureData.body'));

    const factorCard = qs('.mobile-card');
    if (factorCard) {
      const heading = qs('h2', factorCard);
      if (heading) heading.textContent = t('cultureData.factorsTitle');
      const factors = t('cultureData.factors', []);
      qsa('.factor-row span', factorCard).forEach((span, index) => {
        span.textContent = factors[index] || span.textContent;
      });
    }

    const sourceCard = qs('[data-source-list]')?.closest('.mobile-card');
    const sourceHeading = sourceCard ? qs('h2', sourceCard) : null;
    if (sourceHeading) sourceHeading.textContent = t('cultureData.sourcesTitle');

    const logic = t('cultureData.logic', []);
    qsa('.logic-stack article').forEach((article, index) => {
      const copy = logic[index];
      if (!copy) return;
      const label = qs('span', article);
      const title = qs('strong', article);
      const body = qs('p', article);
      if (label) label.textContent = copy.label;
      if (title) title.textContent = copy.title;
      if (body) body.textContent = copy.body;
    });

    const apiHeading = qsa('.mobile-card h2').find((heading) => heading.closest('.mobile-card')?.querySelector('code'));
    if (apiHeading) apiHeading.textContent = t('cultureData.futureApiTitle');
  }

  renderHeaderAuthAction();
  applyAriTranslations();
}

function renderLocalizedContent() {
  applyStaticTranslations();
  renderHomeTimeHero();
  renderInstallCard();
  renderRouteInsightPanel();
  renderRouteCards();
  renderForeignerRanking();
  renderRecommendedPlaces();
  renderRouteDetail();
  renderMap();
  renderNearbyRecommendations();
  renderWeather();
  renderSupport();
  renderPassport();
  renderCultureData();
  renderSavedBundles();
  renderAuthPage();
  renderConditionSummary();
  renderAriMessages();
  updatePlannerStep();
}

function setLanguage(language, options = {}) {
  const nextLanguage = normalizeLanguage(language);
  storageSet(STORAGE_KEYS.language, nextLanguage);

  qsa('[data-language]').forEach((button) => {
    const buttonLanguage = normalizeLanguage(button.dataset.language);
    button.dataset.language = buttonLanguage;
    const isActive = buttonLanguage === nextLanguage;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  qsa('[data-language-trigger]').forEach((button) => {
    button.textContent = LANGUAGE_PILL_LABELS[nextLanguage] || LANGUAGE_PILL_LABELS.ko;
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
  const language = getCurrentLanguage();
  if (language === 'ko') return value;
  const legacyLanguage = getLegacyLanguage(language);
  return PREFERENCE_TRANSLATIONS[legacyLanguage]?.[value] || PREFERENCE_TRANSLATIONS.EN[value] || value;
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

function findRouteByExactId(routeId) {
  return ROUTE_DATA.find((route) => route.id === routeId) || null;
}

function findRouteById(routeId) {
  return findRouteByExactId(routeId) || getTopRecommendedRoute();
}

function findResourceById(resourceId) {
  return CULTURE_RESOURCES.find((resource) => resource.id === resourceId);
}

function getRouteResources(route) {
  return route.resourceIds.map(findResourceById).filter(Boolean);
}

function getRouteFromUrlOrStorage() {
  const params = new URLSearchParams(window.location.search);
  const routeId = params.get('id') || storageGet(STORAGE_KEYS.selectedRoute, '');
  return findRouteById(routeId);
}

function renderConvenienceBadges(convenience) {
  if (!convenience) return '';
  const labels = convenience.labels || [
    convenience.englishAvailable ? convenienceText('englishAvailable') : convenienceText('checkEnglish'),
    convenience.foreignerPopular ? convenienceText('visitorFavorite') : convenienceText('hiddenResource'),
    convenience.reservationRequired ? convenienceText('reservationNeeded') : convenienceText('noReservation')
  ];
  return `<div class="convenience-badges">${labels.map((label) => `<span class="convenience-badge">${escapeHtml(label)}</span>`).join('')}</div>`;
}

function resourceConvenience(resource) {
  return {
    labels: [
      resource.englishAvailable ? convenienceText('englishAvailable') : convenienceText('checkEnglish'),
      resource.foreignerPopular ? convenienceText('visitorFavorite') : convenienceText('hiddenResource'),
      resource.reservationRequired ? convenienceText('reservationNeeded') : convenienceText('noReservation'),
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
      <strong>MARU</strong>
      <small>${escapeHtml(t('common.imageMissing'))}</small>
    </div>
  `;
}

window.imageExistsFallback = imageExistsFallback;

function renderImageFrame({ src, alt, notice, className = '' }) {
  const cleanClassName = className ? ` ${escapeHtml(className)}` : '';
  const fallbackNotice = notice || t('common.imageMissing');

  if (!src) {
    return `
      <div class="image-frame image-placeholder${cleanClassName}">
        <div class="image-placeholder-content">
          <strong>MARU</strong>
          <small>${escapeHtml(fallbackNotice)}</small>
        </div>
      </div>
    `;
  }

  return `
    <div class="image-frame${cleanClassName}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt || '')}" loading="lazy" onerror="imageExistsFallback(event)">
      <span class="ai-image-notice">${escapeHtml(notice || t('common.imageNotice'))}</span>
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
      alt: `${label} ${t('common.timeImageAlt')}`,
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
    notice: route.imageNotice || t('common.imageNotice'),
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
  const language = getCurrentLanguage();
  const legacyLanguage = getLegacyLanguage(language);
  const resource = CULTURE_RESOURCES.find((item) => item.nameKo === placeName || item.nameEn === placeName);
  if (resource && language !== 'ko') return resource.nameEn || resource.nameKo;
  if (language === 'ko') return placeName;
  return PLACE_NAME_BY_LANGUAGE[legacyLanguage]?.[placeName] || PLACE_NAME_EN[placeName] || placeName;
}

function getRouteView(route) {
  const language = getCurrentLanguage();
  const legacyLanguage = getLegacyLanguage(language);
  if (language === 'ko') {
    return {
      ...route,
      subtitle: route.englishTitle,
      displayFlow: route.flow,
      displayKeywords: route.keywords,
      displayConvenience: route.convenience
    };
  }

  const translated =
    ROUTE_TRANSLATIONS[legacyLanguage]?.[route.id] ||
    GENERATED_ROUTE_TRANSLATIONS[language]?.[route.id] ||
    EN_ROUTE_TRANSLATIONS[route.id] ||
    {};
  return {
    ...route,
    title: translated.title || route.englishTitle || route.title,
    subtitle: translated.subtitle || route.title,
    time: translated.time || route.timeEn || route.time,
    walking: translated.walking || route.walkingEn || route.walking,
    fee: translated.fee || route.feeEn || route.fee,
    reason: translated.reason || route.reasonEn || route.reason,
    summary: translated.summary || route.englishExplanation || route.summary,
    englishExplanation: route.summary,
    tip: translated.tip || route.tipEn || route.tip,
    displayFlow: translated.flow || route.flow.map(localizePlaceName),
    displayKeywords: translated.keywords || (language === 'en' && route.keywordsEn ? route.keywordsEn : route.keywords),
    displayConvenience: {
      ...route.convenience,
      labels: translated.convenienceLabels || (language === 'en' ? route.convenienceLabelsEn : null) || route.convenience?.labels
    }
  };
}

function getResourceView(resource) {
  const language = getCurrentLanguage();
  const legacyLanguage = getLegacyLanguage(language);
  if (language === 'ko') {
    return {
      ...resource,
      displayName: resource.nameKo,
      secondaryName: resource.nameEn,
      displayDistrict: resource.district || resource.region,
      displayTags: resource.globalTags || []
    };
  }

  const translated = RESOURCE_TRANSLATIONS[legacyLanguage]?.[resource.id] || EN_RESOURCE_TRANSLATIONS[resource.id] || {};
  return {
    ...resource,
    ...translated,
    displayName: localizePlaceName(resource.nameKo) || resource.nameEn || resource.nameKo,
    secondaryName: language === 'en' ? resource.nameKo : (resource.nameEn || resource.nameKo),
    category: translated.category || resource.categoryEn || resource.category,
    region: translated.region || resource.region,
    displayDistrict: resource.district || translated.region || resource.region,
    feeType: translated.feeType || resource.feeType,
    indoorOutdoor: translated.indoorOutdoor || resource.indoorOutdoorEn || resource.indoorOutdoor,
    walkingLevel: translated.walkingLevel || resource.walkingLevelEn || resource.walkingLevel,
    aiSimpleExplanation: translated.aiSimpleExplanation || resource.aiSimpleExplanationEn || resource.aiSimpleExplanation,
    aiWhyItMatters: translated.aiWhyItMatters || resource.aiWhyItMattersEn || resource.aiWhyItMatters,
    aiVisitTip: translated.aiVisitTip || resource.aiVisitTipEn || resource.aiVisitTip,
    bookingNote: translated.bookingNote || resource.bookingNote,
    displayTags: resource.globalTags || []
  };
}

function renderResourceCard(resource, index = 0, options = {}) {
  const resourceView = getResourceView(resource);
  const selectedService = getSelectedMapService();
  const target = getMapTargetForPlace(resource.nameKo);
  const mapUrl = createMapPlaceUrl(target, selectedService, { origin: options.userLocation });
  const tags = (resourceView.displayTags || []).slice(0, 4);
  const titlePrefix = options.showIndex === false ? '' : `${index + 1}. `;
  const distanceText = formatDistanceKm(options.distanceKm);
  const scoreTags = [
    `${t('places.quality')} ${Math.round(resource.qualityScore || 0)}`,
    `${t('places.photo')} ${Math.round(resource.photoSpotScore || 0)}/5`,
    `${t('places.rainy')} ${Math.round(resource.rainyDayScore || 0)}/5`
  ];

  return `
    <article class="place-card" data-resource-card="${escapeHtml(resource.id)}">
      ${renderPlaceImage(resource)}
      <h2>${escapeHtml(titlePrefix)}${escapeHtml(resourceView.displayName)}</h2>
      <p class="en">${escapeHtml(resourceView.secondaryName || '')}</p>
      <div class="meta-row">
        <span>${escapeHtml(resourceView.displayDistrict || resourceView.region || '서울')}</span>
        <span>${escapeHtml(resourceView.category || '')}</span>
        <span>${escapeHtml(resourceView.indoorOutdoor || '')}</span>
        <span>${escapeHtml(resourceView.walkingLevel || '')}</span>
      </div>
      <div class="tag-row place-score-row">
        ${scoreTags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}
      </div>
      ${distanceText ? `<div class="distance-badge">${escapeHtml(distanceText)}</div>` : ''}
      ${tags.length ? `<div class="tag-row">${tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
      <p>${escapeHtml(resourceView.aiSimpleExplanation || '')}</p>
      <p><strong>${escapeHtml(t('places.reason'))}</strong> ${escapeHtml(resourceView.aiWhyItMatters || '')}</p>
      <p><strong>${escapeHtml(t('places.tip'))}</strong> ${escapeHtml(resourceView.aiVisitTip || '')}</p>
      <a class="button button-secondary button-block place-map-link" href="${escapeHtml(mapUrl)}" target="_blank" rel="noopener">${escapeHtml(getMapServiceLabel(selectedService))} ${escapeHtml(t('places.map'))}</a>
    </article>
  `;
}

function renderRouteInsightPanel() {
  const panel = qs('[data-route-insight-panel]');
  if (!panel) return;

  const topRoute = getTopRecommendedRoute();
  const topRouteView = getRouteView(topRoute);
  const insight = getRouteInsight(topRoute);
  const top = qs('[data-route-insight-top]', panel);
  const list = qs('[data-route-factor-list]', panel);

  setText('[data-route-insight-title]', ft('ai.insightTitle', 'AI Recommendation Breakdown'));
  setText('[data-route-insight-body]', ft('ai.insightBody', 'This recommendation combines travel preferences and data signals.'));

  if (top) {
    top.innerHTML = `
      <div class="route-insight-top-card">
        <div>
          <span>${escapeHtml(ft('ai.topRouteLabel', 'Best route right now'))}</span>
          <strong>${escapeHtml(topRouteView.title)}</strong>
        </div>
        <div class="route-insight-metrics">
          <span>${escapeHtml(ft('ai.scoreLabel', 'Fit score'))} ${escapeHtml(String(insight.fitScore))}</span>
          <span>${escapeHtml(ft('ai.crowdLabel', 'Expected crowd'))} ${escapeHtml(insight.crowdLabel)}</span>
          <span>${escapeHtml(ft('ai.bestForLabel', 'Best for'))} ${escapeHtml(translatePreferenceValue(insight.travelerLabel))}</span>
        </div>
      </div>
    `;
  }

  if (list) {
    list.innerHTML = insight.factors.map((factor) => `
      <article class="ai-factor-card">
        <strong>${escapeHtml(factor.label)}</strong>
        <span>+${escapeHtml(String(factor.score))}</span>
      </article>
    `).join('');
  }
}

function renderRouteCards() {
  const container = qs('[data-route-list]');
  if (!container) return;

  const rankedRoutes = getRankedRoutes();
  const savedRouteId = storageGet(STORAGE_KEYS.selectedRoute, '');
  if (rankedRoutes[0] && !ROUTE_DATA.some((route) => route.id === savedRouteId)) {
    storageSet(STORAGE_KEYS.selectedRoute, rankedRoutes[0].route.id);
  }

  container.innerHTML = rankedRoutes.map(({ route, dynamicReason }) => {
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
        ${route.tags?.length ? `<div class="tag-row">${route.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>` : ''}
        ${renderRouteMiniInsights(route)}
        <div class="recommendation-reason">
          <span>${escapeHtml(t('routes.reason'))}</span>
          <p>${escapeHtml(dynamicReason || routeView.reason)}</p>
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

function renderRankingRow(label, score, body, link = '') {
  const action = link
    ? `<a class="button button-secondary" href="${escapeHtml(link)}">${escapeHtml(ft('bundle.open', 'Open'))}</a>`
    : '';

  return `
    <article class="ranking-card">
      <div class="ranking-card-top">
        <strong>${escapeHtml(label)}</strong>
        <span>${escapeHtml(ft('ranking.score', 'Score'))} ${escapeHtml(String(score))}</span>
      </div>
      <p>${escapeHtml(body)}</p>
      ${action}
    </article>
  `;
}

function renderForeignerRanking() {
  const section = qs('[data-foreigner-ranking-section]');
  if (!section) return;

  setText('[data-foreigner-ranking-title]', ft('ranking.title', 'Foreigner Ranking'));
  setText('[data-foreigner-ranking-body]', ft('ranking.body', 'This ranking blends foreigner appeal, English support, photogenic value, and accessibility.'));
  setText('[data-foreigner-route-title]', ft('ranking.routes', 'Top Routes'));
  setText('[data-foreigner-place-title]', ft('ranking.places', 'Top Places'));

  const routeContainer = qs('[data-foreigner-route-ranking]', section);
  const placeContainer = qs('[data-foreigner-place-ranking]', section);

  if (routeContainer) {
    routeContainer.innerHTML = getForeignerRouteRanking().map(({ route, score }) => {
      const routeView = getRouteView(route);
      return renderRankingRow(
        routeView.title,
        score,
        routeView.reason,
        `route-detail.html?id=${encodeURIComponent(route.id)}`
      );
    }).join('');
  }

  if (placeContainer) {
    placeContainer.innerHTML = getForeignerPlaceRanking().map(({ resource, score }) => {
      const resourceView = getResourceView(resource);
      return renderRankingRow(
        resourceView.displayName,
        score,
        resourceView.aiWhyItMatters || resourceView.aiSimpleExplanation,
        createMapPlaceUrl(getMapTargetForPlace(resource.nameKo))
      );
    }).join('');
  }
}

function renderRecommendedPlaces() {
  const container = qs('[data-recommended-place-list]');
  const heading = qs('[data-place-section-heading]');
  const body = qs('[data-place-section-body]');
  const count = qs('[data-place-count]');
  if (!container) return;

  const resources = getRecommendedResources(24, { preference: loadUserPreference() });
  if (heading) heading.textContent = t('places.title');
  if (body) body.textContent = `${t('places.body')} ${t('places.beta')}`.trim();
  if (count) count.textContent = `${resources.length} ${t('places.count')}`;
  container.innerHTML = resources.map((resource, index) => renderResourceCard(resource, index)).join('');
}

function getNearbyResources(userLocation, limit = 8) {
  if (!hasMapCoordinates(userLocation)) return [];
  return CULTURE_RESOURCES
    .filter(isSeoulResource)
    .filter((resource) => !resource.isDetailStoryOnly && resource.isIndependentSite)
    .filter(hasMapCoordinates)
    .map((resource) => ({
      resource,
      distanceKm: getDistanceKm(userLocation.latitude, userLocation.longitude, resource.latitude, resource.longitude)
    }))
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, limit);
}

function renderNearbyRecommendations() {
  const section = qs('[data-nearby-section]');
  if (!section) return;

  const title = qs('[data-nearby-title]', section);
  const notice = qs('[data-nearby-notice]', section);
  const button = qs('[data-nearby-location-button]', section);
  const status = qs('[data-nearby-status]', section);
  const results = qs('[data-nearby-results]', section);
  const state = nearbyRecommendationState;

  if (title) title.textContent = t('map.nearbyTitle');
  if (notice) notice.textContent = t('map.nearbyNotice');
  if (button) {
    button.textContent = state.status === 'loading' ? t('map.nearbyLoading') : t('map.nearbyButton');
    button.disabled = state.status === 'loading';
  }

  if (status) {
    const accuracyText = Number.isFinite(state.accuracy)
      ? interpolateTemplate(t('map.nearbyAccuracy'), { accuracy: Math.round(state.accuracy) })
      : '';
    status.textContent = state.status === 'success' ? accuracyText : (state.messageKey ? t(state.messageKey) : '');
  }

  if (!results) return;
  if (state.status !== 'success' || !state.items.length) {
    results.innerHTML = '';
    return;
  }

  results.innerHTML = `
    <div class="nearby-results-heading">
      <strong>${escapeHtml(t('map.nearbyResultTitle'))}</strong>
    </div>
    <div class="place-list nearby-place-list">
      ${state.items.map((item, index) => renderResourceCard(item.resource, index, {
        distanceKm: item.distanceKm,
        userLocation: state.userLocation
      })).join('')}
    </div>
  `;
}

function setNearbyFallback(messageKey) {
  nearbyRecommendationState = {
    status: 'fallback',
    messageKey,
    items: [],
    userLocation: null,
    accuracy: null
  };
  renderMap(getRouteFromUrlOrStorage());
  renderNearbyRecommendations();
  showToast(t(messageKey));
}

function handleNearbyLocationSuccess(position) {
  const coords = position?.coords || {};
  const userLocation = {
    latitude: Number(coords.latitude),
    longitude: Number(coords.longitude)
  };

  if (!hasMapCoordinates(userLocation)) {
    setNearbyFallback('map.nearbyFailed');
    return;
  }

  const items = getNearbyResources(userLocation, 8);
  if (!items.length) {
    setNearbyFallback('map.nearbyNoData');
    return;
  }

  nearbyRecommendationState = {
    status: 'success',
    messageKey: '',
    items,
    userLocation,
    accuracy: Number(coords.accuracy)
  };
  renderMap(getRouteFromUrlOrStorage());
  renderNearbyRecommendations();
}

function handleNearbyLocationError(error) {
  const denied = error?.code === 1;
  setNearbyFallback(denied ? 'map.nearbyDenied' : 'map.nearbyFailed');
}

function requestNearbyLocation() {
  if (!('geolocation' in navigator)) {
    setNearbyFallback('map.nearbyUnsupported');
    return;
  }

  nearbyRecommendationState = {
    status: 'loading',
    messageKey: 'map.nearbyLoading',
    items: [],
    userLocation: null,
    accuracy: null
  };
  renderNearbyRecommendations();

  navigator.geolocation.getCurrentPosition(
    handleNearbyLocationSuccess,
    handleNearbyLocationError,
    GEOLOCATION_OPTIONS
  );
}

function saveSelectedRoute(routeId) {
  const route = findRouteById(routeId);
  storageSet(STORAGE_KEYS.selectedRoute, route.id);
  return route;
}

function rememberSavedRouteLocally(routeId) {
  const saved = storageJsonGet(STORAGE_KEYS.savedRoutes, []);
  const savedRouteIds = Array.isArray(saved) ? saved.filter((item) => typeof item === 'string') : [];
  const nextSaved = savedRouteIds.includes(routeId) ? savedRouteIds : [...savedRouteIds, routeId];
  storageJsonSet(STORAGE_KEYS.savedRoutes, nextSaved);
}

function buildSavedRoutePayload(route) {
  const routeView = getRouteView(route);
  return {
    routeId: route.id,
    routeTitle: routeView.title || route.title || route.id,
    language: getCurrentLanguage(),
    theme: route.theme || '',
    memo: 'Saved from MARU route detail page'
  };
}

async function createSavedRouteOnApi(route) {
  const result = await fetchJsonFromMaruApi(MARU_API_PATHS.savedRoutes, {
    method: 'POST',
    jsonBody: buildSavedRoutePayload(route)
  });
  return result.ok ? result.payload : null;
}

async function saveRouteToPassport(route) {
  const savedRoute = await createSavedRouteOnApi(route);
  rememberSavedRouteLocally(route.id);
  storageSet(STORAGE_KEYS.selectedRoute, route.id);
  return savedRoute;
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
    PLACE_NAME_EN[resource.nameKo] === placeName ||
    PLACE_NAME_JP[resource.nameKo] === placeName ||
    PLACE_NAME_CN[resource.nameKo] === placeName
  );
}

function getMapTargetForPlace(placeName) {
  const resource = findResourceByPlaceName(placeName);
  const displayName = resource ? getResourceView(resource).displayName : localizePlaceName(placeName);
  const searchName = resource ? `${resource.nameKo} ${resource.region || '서울'}` : `${placeName} 서울`;
  const coords = resource || ROUTE_PLACE_COORDS[placeName] || {};

  return {
    name: displayName,
    query: getCurrentLanguage() === 'ko' ? searchName : `${displayName} Seoul`,
    latitude: coords.latitude,
    longitude: coords.longitude
  };
}

function createMapPlaceUrl(target, service = getSelectedMapService(), options = {}) {
  const hasCoordinates = hasMapCoordinates(target);
  const query = target.query || target.name;
  const origin = options.origin;

  if (service === 'google') {
    if (hasCoordinates && hasMapCoordinates(origin)) {
      const params = new URLSearchParams({
        api: '1',
        origin: `${origin.latitude},${origin.longitude}`,
        destination: `${target.latitude},${target.longitude}`,
        travelmode: 'walking'
      });
      return `https://www.google.com/maps/dir/?${params.toString()}`;
    }
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

function hasMapCoordinates(target) {
  return Boolean(target) && Number.isFinite(target.latitude) && Number.isFinite(target.longitude);
}

function mapPointQuery(target) {
  return hasMapCoordinates(target) ? `${target.latitude},${target.longitude}` : target.query;
}

function createNaverDirectionsUrl(targets) {
  const points = targets.filter(hasMapCoordinates);
  if (points.length < 2) return '';

  const [origin, ...rest] = points;
  const destination = rest.pop() || origin;
  const params = new URLSearchParams({
    slat: origin.latitude,
    slng: origin.longitude,
    sname: origin.name,
    dlat: destination.latitude,
    dlng: destination.longitude,
    dname: destination.name,
    appname: 'lovesome0405.github.io.ari'
  });

  rest.slice(0, 3).forEach((point, index) => {
    const order = index + 1;
    params.set(`v${order}lat`, point.latitude);
    params.set(`v${order}lng`, point.longitude);
    params.set(`v${order}name`, point.name);
  });

  return `nmap://route/walk?${params.toString()}`;
}

function createKakaoDirectionsUrl(targets) {
  const points = targets.filter(hasMapCoordinates).slice(0, 5);
  if (points.length < 2) return '';

  const encodedPoints = points
    .map((point) => `${encodeURIComponent(point.name)},${point.latitude},${point.longitude}`)
    .join('/');

  return `https://map.kakao.com/link/by/walk/${encodedPoints}`;
}

function createMapRouteUrl(route, service = getSelectedMapService()) {
  const configuredMapLink = route.mapLinks?.[service];
  if (configuredMapLink) return configuredMapLink;

  const targets = route.flow.map(getMapTargetForPlace);
  if (!targets.length) return '#';

  if (targets.length === 1) {
    return createMapPlaceUrl(targets[0], service);
  }

  if (service === 'naver') {
    return createNaverDirectionsUrl(targets) || createMapPlaceUrl(targets[0], service);
  }

  if (service === 'kakao') {
    return createKakaoDirectionsUrl(targets) || createMapPlaceUrl(targets[0], service);
  }

  const [origin, ...rest] = targets;
  const destination = rest.pop() || origin;
  const params = new URLSearchParams({
    api: '1',
    origin: mapPointQuery(origin),
    destination: mapPointQuery(destination),
    travelmode: 'walking'
  });

  if (rest.length) {
    params.set('waypoints', rest.map(mapPointQuery).join('|'));
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function setMapService(service, options = {}) {
  const nextService = MAP_SERVICES[service] ? service : 'google';
  storageSet(STORAGE_KEYS.mapService, nextService);
  renderMap(getRouteFromUrlOrStorage());
  renderNearbyRecommendations();
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
      ${escapeHtml(t('map.openRoute'))}
    </a>
  `;
}

function updateMapOpenLinks(route) {
  const selectedService = getSelectedMapService();
  qsa('[data-map-open-route]').forEach((link) => {
    link.href = createMapRouteUrl(route, selectedService);
    link.textContent = t('map.openRoute');
  });
}

function renderMockMapCanvas(route, canvas) {
  canvas.innerHTML = route.flow.map((place, index) => {
    const position = MAP_POSITIONS[index] || MAP_POSITIONS[MAP_POSITIONS.length - 1];
    return `
      <span class="map-pin" style="--pin-left:${position.left};--pin-top:${position.top};"><span>${index + 1}</span></span>
      <span class="map-label" style="--pin-left:${position.left};--pin-top:${position.top};">${escapeHtml(localizePlaceName(place))}</span>
    `;
  }).join('');
}

function renderLeafletRouteMap(route, canvas) {
  if (!window.L) {
    renderMockMapCanvas(route, canvas);
    return;
  }

  const targets = route.flow.map(getMapTargetForPlace).filter(hasMapCoordinates);
  if (!targets.length) {
    renderMockMapCanvas(route, canvas);
    return;
  }

  canvas.innerHTML = `
    <div class="leaflet-route-map" data-leaflet-route-map></div>
    <p class="map-live-note">${escapeHtml(ft('map.liveBody', 'The route is drawn on a real map using stored coordinates.'))}</p>
  `;

  const mapRoot = qs('[data-leaflet-route-map]', canvas);
  if (!mapRoot) return;

  if (!routeLeafletMap) {
    routeLeafletMap = window.L.map(mapRoot, { zoomControl: true });
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(routeLeafletMap);
    routeLeafletLayer = window.L.layerGroup().addTo(routeLeafletMap);
    routeLeafletUserLayer = window.L.layerGroup().addTo(routeLeafletMap);
  } else {
    routeLeafletMap.remove();
    routeLeafletMap = window.L.map(mapRoot, { zoomControl: true });
    window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(routeLeafletMap);
    routeLeafletLayer = window.L.layerGroup().addTo(routeLeafletMap);
    routeLeafletUserLayer = window.L.layerGroup().addTo(routeLeafletMap);
  }

  const points = targets.map((target) => [target.latitude, target.longitude]);
  routeLeafletLayer.clearLayers();
  routeLeafletUserLayer.clearLayers();

  window.L.polyline(points, {
    color: '#0f766e',
    weight: 5,
    opacity: 0.9
  }).addTo(routeLeafletLayer);

  targets.forEach((target, index) => {
    window.L.marker([target.latitude, target.longitude]).addTo(routeLeafletLayer)
      .bindPopup(`<strong>${escapeHtml(target.name)}</strong>`);
  });

  if (nearbyRecommendationState.status === 'success' && hasMapCoordinates(nearbyRecommendationState.userLocation)) {
    const userLocation = nearbyRecommendationState.userLocation;
    window.L.circleMarker([userLocation.latitude, userLocation.longitude], {
      radius: 8,
      color: '#1d4ed8',
      fillColor: '#3b82f6',
      fillOpacity: 0.9
    }).addTo(routeLeafletUserLayer).bindPopup('You are here');
  }

  routeLeafletMap.fitBounds(points, { padding: [24, 24] });
}

function renderCrowdPanel(container, route) {
  if (!container || !route) return;

  const routeView = getRouteView(route);
  const crowdScore = estimateRouteCrowdScore(route);
  const alternatives = getCrowdSmartAlternatives(route);

  container.innerHTML = `
    <h2>${escapeHtml(ft('crowd.title', 'Crowd-Aware Alternatives'))}</h2>
    <p>${escapeHtml(ft('crowd.body', 'Expected crowd is estimated from time, weather, and place popularity.'))}</p>
    <div class="crowd-summary-card crowd-${escapeHtml(getCrowdLevelKey(crowdScore))}">
      <strong>${escapeHtml(ft('crowd.current', 'Current route'))}</strong>
      <span>${escapeHtml(routeView.title)}</span>
      <b>${escapeHtml(getCrowdLabel(crowdScore))}</b>
    </div>
    <div class="crowd-alt-list">
      ${alternatives.map((item) => {
        const altView = getRouteView(item.route);
        return `
          <article class="crowd-alt-card">
            <strong>${escapeHtml(altView.title)}</strong>
            <p>${escapeHtml(ft('crowd.alternative', 'Alternative route'))} · ${escapeHtml(getCrowdLabel(item.crowdScore))} · ${escapeHtml(ft('ai.scoreLabel', 'Fit score'))} ${escapeHtml(String(item.fitScore))}</p>
            <a class="button button-secondary" href="route-detail.html?id=${encodeURIComponent(item.route.id)}">${escapeHtml(ft('crowd.action', 'Open this alternative'))}</a>
          </article>
        `;
      }).join('')}
    </div>
    <small>${escapeHtml(ft('crowd.quietTip', 'For a calmer visit, earlier morning slots and evening walks are usually better.'))}</small>
  `;
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
    renderLeafletRouteMap(route, canvas);
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

  renderCrowdPanel(qs('[data-map-crowd-panel]'), route);
}

function getLocalizedDataValue(value) {
  return getLocalizedValue(value, getCurrentLanguage()) || getLocalizedValue(value, 'ko') || getLocalizedValue(value, 'en') || value || '';
}

function normalizeMatchToken(value) {
  return String(value || '').trim().toLowerCase();
}

function getRouteMatchTokens(route) {
  return new Set([
    route.id,
    route.theme,
    ...toArray(route.target),
    ...toArray(route.tags),
    ...toArray(route.recommendedTime)
  ].map(normalizeMatchToken).filter(Boolean));
}

function getRoutePlaceIds(route) {
  return new Set(toArray(route.resourceIds).map(normalizeMatchToken).filter(Boolean));
}

function hasTokenIntersection(values, tokenSet) {
  return toArray(values).some((item) => tokenSet.has(normalizeMatchToken(item)));
}

function getRelatedFestivals(route, limit = 4) {
  const routeTokens = getRouteMatchTokens(route);
  const placeIds = getRoutePlaceIds(route);
  const currentRouteId = new Set([normalizeMatchToken(route.id)]);

  return FESTIVAL_DATA
    .map((festival) => {
      const courseMatched = hasTokenIntersection(festival.relatedCourseIds, currentRouteId);
      const placeMatchCount = toArray(festival.relatedPlaceIds)
        .filter((item) => placeIds.has(normalizeMatchToken(item))).length;
      const tagMatchCount = toArray(festival.recommendedFor)
        .filter((item) => routeTokens.has(normalizeMatchToken(item))).length;
      const score = (courseMatched ? 100 : 0) + (placeMatchCount * 35) + (tagMatchCount * 12);
      return { festival, score, courseMatched, placeMatchCount, tagMatchCount };
    })
    .filter((item) => item.courseMatched || item.placeMatchCount > 0 || item.tagMatchCount >= 2)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.festival)
    .slice(0, limit);
}

function getRelatedHeritage(route, limit = 5) {
  const placeIds = getRoutePlaceIds(route);
  return HERITAGE_DATA
    .filter((heritage) => placeIds.has(normalizeMatchToken(heritage.id)))
    .slice(0, limit);
}

function renderFestivalCard(festival) {
  const title = getLocalizedDataValue(festival.title);
  const venue = getLocalizedDataValue(festival.venue);
  return `
    <article class="related-data-card related-event-card">
      <span>${escapeHtml(festival.category || 'culture-event')}</span>
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml([festival.district, venue, festival.dateType].filter(Boolean).join(' · '))}</p>
      <dl>
        <div><dt>MARU 적용</dt><dd>${escapeHtml(festival.aiUse || '코스 추천 이유와 방문 팁을 보강합니다.')}</dd></div>
        <div><dt>데이터 출처</dt><dd>${escapeHtml(festival.publicDataSource || '서울시 문화행사 정보')}</dd></div>
      </dl>
    </article>
  `;
}

function renderHeritageCard(heritage) {
  const name = getLocalizedDataValue(heritage.name);
  return `
    <article class="related-data-card related-heritage-card">
      <span>${escapeHtml(heritage.heritageType || 'heritage')}</span>
      <strong>${escapeHtml(name)}</strong>
      <p>${escapeHtml([heritage.district, heritage.address].filter(Boolean).join(' · '))}</p>
      <dl>
        <div><dt>간단 설명</dt><dd>${escapeHtml(heritage.aiInterpretationRole || '문화유산 의미 해설에 활용됩니다.')}</dd></div>
        <div><dt>활용 데이터 출처</dt><dd>${escapeHtml(heritage.publicDataSource || '국가유산청 문화재 공간정보')}</dd></div>
      </dl>
    </article>
  `;
}

function renderRelatedCourseData(route) {
  const eventsContainer = qs('[data-related-events]');
  if (eventsContainer) {
    const festivals = getRelatedFestivals(route);
    eventsContainer.innerHTML = festivals.length
      ? festivals.map(renderFestivalCard).join('')
      : '<p class="empty-related-data">현재 연결된 문화행사 샘플이 없습니다. 향후 서울시 문화행사 API와 연동 예정입니다.</p>';
  }

  const heritageContainer = qs('[data-related-heritage]');
  if (heritageContainer) {
    const heritageItems = getRelatedHeritage(route);
    heritageContainer.innerHTML = heritageItems.length
      ? heritageItems.map(renderHeritageCard).join('')
      : '<p class="empty-related-data">현재 연결된 국가유산 샘플이 없습니다. 향후 국가유산청 문화재 공간정보와 연동 예정입니다.</p>';
  }
}

function renderRouteBundlePanel(route) {
  const panel = qs('[data-route-bundle-panel]');
  const list = qs('[data-route-bundle-list]');
  if (!panel || !list) return;

  setText('[data-route-bundle-title]', ft('bundle.title', 'Bundle Cultural Events'));
  setText('[data-route-bundle-body]', ft('bundle.body', 'MARU automatically combines the route with related cultural events into a one-day plan.'));
  const fallbackBundle = {
    id: `${route.id}-fallback-bundle`,
    routeId: route.id,
    festivalId: '',
    title: `${getRouteView(route).title} Bundle`,
    summary: ft('bundle.empty', 'This plan focuses on the route itself.'),
    stops: buildBundleStops(route, null)
  };
  const bundles = getRouteBundles(route);
  const cards = (bundles.length ? bundles : [fallbackBundle]).map((bundle) => `
    <article class="bundle-card">
      <strong>${escapeHtml(bundle.title)}</strong>
      <p>${escapeHtml(bundle.summary)}</p>
      <div class="bundle-timeline">
        <span>${escapeHtml(ft('bundle.timeline', 'Auto itinerary'))}</span>
        <ol>
          ${bundle.stops.map((stop) => `
            <li>
              <b>${escapeHtml(stop.time)}</b>
              <span>${escapeHtml(stop.label)}</span>
            </li>
          `).join('')}
        </ol>
      </div>
      <button class="button button-secondary button-block" type="button" data-save-bundle="${escapeHtml(bundle.id)}" data-save-bundle-route="${escapeHtml(bundle.routeId)}" data-save-bundle-festival="${escapeHtml(bundle.festivalId || '')}">
        ${escapeHtml(ft('bundle.save', 'Save this plan'))}
      </button>
    </article>
  `).join('');

  list.innerHTML = cards || `
    <article class="bundle-card">
      <strong>${escapeHtml(fallbackBundle.title)}</strong>
      <p>${escapeHtml(fallbackBundle.summary)}</p>
    </article>
  `;
}

function renderRouteDetail() {
  if (!qs('[data-detail-title]')) return;
  const route = getRouteFromUrlOrStorage();
  const resources = getRouteResources(route);
  const routeView = getRouteView(route);
  const dynamicReason = getRankedRoutes().find((item) => item.route.id === route.id)?.dynamicReason || routeView.reason;
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
  if (reason) reason.textContent = dynamicReason;

  const convenience = qs('[data-detail-convenience]');
  if (convenience) convenience.innerHTML = renderConvenienceBadges(routeView.displayConvenience);

  const flow = qs('[data-detail-flow]');
  if (flow) flow.innerHTML = route.flow.map((place) => `<li>${escapeHtml(localizePlaceName(place))}</li>`).join('');

  const placeCards = qs('[data-place-cards]');
  if (placeCards) {
    placeCards.innerHTML = resources.map((resource, index) => renderResourceCard(resource, index)).join('');
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

  renderRelatedCourseData(route);
  renderRouteBundlePanel(route);
  renderCrowdPanel(qs('[data-detail-crowd-panel]'), route);
  const detailFactors = qs('[data-detail-ai-factors]');
  if (detailFactors) {
    detailFactors.innerHTML = getRouteInsight(route).factors.map((factor) => `
      <article class="ai-factor-card">
        <strong>${escapeHtml(factor.label)}</strong>
        <span>+${escapeHtml(String(factor.score))}</span>
      </article>
    `).join('');
  }
  setText('[data-detail-ai-title]', ft('ai.insightTitle', 'AI Recommendation Breakdown'));
  setText('[data-detail-ai-body]', ft('ai.insightBody', 'This recommendation combines travel preferences and data signals.'));
  renderMap(route);
}

function renderWeather() {
  const container = qs('[data-weather-list]');
  if (!container) return;

  container.innerHTML = WEATHER_DATA.map((item) => `
    <article class="weather-day">
      <span class="weather-icon">${escapeHtml(translateWeatherValue(item.icon))}</span>
      <div>
        <strong>${escapeHtml(translateWeatherValue(item.day))} · ${escapeHtml(translateWeatherValue(item.sky))}</strong>
        <small>${escapeHtml(item.temp)} · ${escapeHtml(t('weather.rainProbability'))} ${escapeHtml(item.rain)}</small>
      </div>
    </article>
  `).join('');

  const weatherPanel = qs('[data-weather-crowd-panel]');
  if (weatherPanel) {
    const topRoute = getTopRecommendedRoute();
    renderCrowdPanel(weatherPanel, topRoute);
    const heading = qs('h2', weatherPanel);
    if (heading) heading.textContent = ft('weather.crowdTitle', heading.textContent);
  }
}

function renderSupport() {
  const container = qs('[data-support-list]');
  if (!container) return;

  container.innerHTML = SUPPORT_DATA.map((item) => {
    const translated = SUPPORT_TRANSLATIONS[getLegacyLanguage()]?.[item.id] || item;
    const safeUrl = item.url || '#';
    const linkAttributes = item.url ? 'target="_blank" rel="noopener"' : '';
    return `
    <a class="support-card" href="${escapeHtml(safeUrl)}" ${linkAttributes} data-support-card="${escapeHtml(item.id)}">
      <span class="support-card-kicker">${escapeHtml(t('support.action'))}</span>
      <h2>${escapeHtml(translated.title)}</h2>
      <p>${escapeHtml(translated.description)}</p>
      <ul class="support-points">
        ${(translated.points || []).map((point) => `<li>${escapeHtml(point)}</li>`).join('')}
      </ul>
    </a>
  `;
  }).join('');
}

function normalizeSavedRouteItem(item) {
  const routeId = String(item?.routeId || item?.route_id || '').trim();
  if (!routeId) return null;
  return {
    id: item?.id ?? null,
    routeId,
    routeTitle: String(item?.routeTitle || item?.route_title || routeId).trim(),
    language: String(item?.language || '').trim(),
    theme: String(item?.theme || '').trim(),
    memo: String(item?.memo || '').trim(),
    createdAt: item?.createdAt || item?.created_at || null
  };
}

function normalizeSavedRouteItems(payload) {
  const items = Array.isArray(payload) ? payload : (payload?.items || payload?.data || []);
  return Array.isArray(items) ? items.map(normalizeSavedRouteItem).filter(Boolean) : [];
}

async function getSavedRouteItemsFromApi() {
  const result = await fetchJsonFromMaruApi(MARU_API_PATHS.savedRoutes);
  return result.ok ? normalizeSavedRouteItems(result.payload) : null;
}

function getLocalSavedRouteItems() {
  const savedRouteIds = storageJsonGet(STORAGE_KEYS.savedRoutes, []).filter((routeId) => typeof routeId === 'string');
  return [...new Set(savedRouteIds)]
    .reverse()
    .map((routeId) => {
      const route = findRouteByExactId(routeId);
      if (!route) return null;
      const routeView = getRouteView(route);
      return {
        id: null,
        routeId: route.id,
        routeTitle: routeView.title || route.title || route.id,
        language: getCurrentLanguage(),
        theme: route.theme || '',
        memo: '',
        createdAt: null
      };
    })
    .filter(Boolean);
}

function formatSavedRouteDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleString(getCurrentLanguage(), {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function renderSavedRouteItem(item) {
  const route = findRouteByExactId(item.routeId);
  const routeView = route ? getRouteView(route) : null;
  const title = routeView?.title || item.routeTitle || item.routeId;
  const theme = item.theme || route?.theme || '';
  const meta = [formatSavedRouteDate(item.createdAt), item.language, theme]
    .filter(Boolean)
    .join(' / ');
  const href = route ? `route-detail.html?id=${encodeURIComponent(route.id)}` : 'routes.html';
  const actionText = route ? t('passport.again') : t('passport.choose');

  return `
    <article class="saved-route-item">
      <div class="saved-route-item-copy">
        <strong>${escapeHtml(title)}</strong>
        ${meta ? `<p>${escapeHtml(meta)}</p>` : ''}
        ${item.memo ? `<small>${escapeHtml(item.memo)}</small>` : ''}
      </div>
      <a class="button button-secondary" href="${escapeHtml(href)}">${escapeHtml(actionText)}</a>
    </article>
  `;
}

function renderSavedRoutes(savedRouteCard, savedRouteItems) {
  if (!savedRouteCard) return;

  if (!savedRouteItems.length) {
    savedRouteCard.innerHTML = `
      <span>${escapeHtml(t('passport.savedLabel'))}</span>
      <strong>${escapeHtml(t('passport.empty'))}</strong>
      <a class="button button-secondary button-block" href="routes.html">${escapeHtml(t('passport.choose'))}</a>
    `;
    return;
  }

  savedRouteCard.innerHTML = `
    <span>${escapeHtml(t('passport.savedLabel'))}</span>
    <div class="saved-route-list">
      ${savedRouteItems.slice(0, 8).map(renderSavedRouteItem).join('')}
    </div>
  `;
}

async function renderPassport() {
  const savedRouteCard = qs('[data-saved-route]');
  const stamps = qs('[data-passport-stamps]');

  if (savedRouteCard) {
    const apiSavedRouteItems = await getSavedRouteItemsFromApi();
    const savedRouteItems = apiSavedRouteItems === null ? getLocalSavedRouteItems() : apiSavedRouteItems;
    renderSavedRoutes(savedRouteCard, savedRouteItems);
  }

  if (stamps) {
    const stampTitles = t('passport.stamps', []);
    stamps.innerHTML = PASSPORT_DATA.map((stamp, index) => `
      <article class="stamp-card ${stamp.status === 'completed' ? 'completed' : ''}">
        <span>${escapeHtml(t(`passport.status.${stamp.status}`, stamp.status))}</span>
        <strong>${escapeHtml(stampTitles[index] || stamp.title)}</strong>
      </article>
    `).join('');
  }
  return;

  const savedRouteIds = storageJsonGet(STORAGE_KEYS.savedRoutes, []);
  const selectedRoute = savedRouteIds.length ? findRouteById(savedRouteIds[savedRouteIds.length - 1]) : null;

  if (savedRouteCard && selectedRoute) {
    const routeView = getRouteView(selectedRoute);
    savedRouteCard.innerHTML = `
      <span>${escapeHtml(t('passport.savedLabel'))}</span>
      ${renderRouteImage(selectedRoute)}
      <strong>${escapeHtml(routeView.title)}</strong>
      <p>${escapeHtml(routeView.time)} · ${escapeHtml(routeView.walking)} · ${escapeHtml(routeView.fee)}</p>
      ${renderConvenienceBadges(routeView.displayConvenience || selectedRoute.convenience)}
      <a class="button button-primary button-block" href="route-detail.html?id=${encodeURIComponent(selectedRoute.id)}">${escapeHtml(t('passport.again'))}</a>
    `;
  }

  if (stamps) {
    const stampTitles = t('passport.stamps', []);
    stamps.innerHTML = PASSPORT_DATA.map((stamp, index) => `
      <article class="stamp-card ${stamp.status === 'completed' ? 'completed' : ''}">
        <span>${escapeHtml(t(`passport.status.${stamp.status}`, stamp.status))}</span>
        <strong>${escapeHtml(stampTitles[index] || stamp.title)}</strong>
      </article>
    `).join('');
  }
}

function renderSavedBundles() {
  const title = qs('[data-saved-bundle-title]');
  const container = qs('[data-saved-bundles]');
  if (!container) return;

  if (title) title.textContent = ft('bundle.savedTitle', 'Saved Event Bundles');
  const bundles = getSavedBundles();
  if (!bundles.length) {
    container.innerHTML = `
      <article class="saved-bundle-empty">
        <strong>${escapeHtml(ft('bundle.savedTitle', 'Saved Event Bundles'))}</strong>
        <p>${escapeHtml(ft('bundle.body', 'Save a cultural event bundle from the route detail page to see it here.'))}</p>
      </article>
    `;
    return;
  }

  container.innerHTML = bundles.map((bundle) => {
    const route = findRouteById(bundle.routeId);
    return `
      <article class="saved-bundle-card">
        <strong>${escapeHtml(bundle.title)}</strong>
        <p>${escapeHtml(bundle.summary)}</p>
        <ol>
          ${toArray(bundle.stops).slice(0, 4).map((stop) => `
            <li><b>${escapeHtml(stop.time)}</b> ${escapeHtml(stop.label)}</li>
          `).join('')}
        </ol>
        <a class="button button-secondary button-block" href="route-detail.html?id=${encodeURIComponent(route.id)}">${escapeHtml(ft('bundle.open', 'Open route'))}</a>
      </article>
    `;
  }).join('');
}

function renderPublicDataSourceCard(source) {
  const useFor = source.useDescription || source.use || toArray(source.useFor).join(', ') || '공공문화데이터 활용';
  const maruApplication = source.connectedFeature || source.maruApplication || source.application || 'MARU 추천/해설 기능에 연결 예정';
  const currentStatus = source.currentStatus || source.status || '정적 JSON 샘플 데이터로 반영';
  const futureIntegration = source.futureIntegration || source.futureExpansion || '서버 API 연동 후 실시간 동기화 예정';

  return `
    <article class="data-source-card public-data-card">
      <span>${escapeHtml(source.provider || '제공/참고 기관 확인 필요')}</span>
      <strong>${escapeHtml(source.name || source.id || '공공데이터 소스')}</strong>
      <dl>
        <div><dt>활용</dt><dd>${escapeHtml(useFor)}</dd></div>
        <div><dt>MARU 적용</dt><dd>${escapeHtml(maruApplication)}</dd></div>
        <div><dt>현재 상태</dt><dd>${escapeHtml(currentStatus)}</dd></div>
        <div><dt>향후 확장</dt><dd>${escapeHtml(futureIntegration)}</dd></div>
      </dl>
    </article>
  `;
}

function renderCultureData() {
  const metrics = qs('[data-culture-metrics]');
  const dataLoadStatus = cultureResourceLoadStatus === 'loaded' && courseDataLoadStatus === 'loaded'
    ? 'loaded'
    : 'fallback';
  if (metrics) {
    const englishCount = CULTURE_RESOURCES.filter((item) => item.englishAvailable).length;
    const popularCount = CULTURE_RESOURCES.filter((item) => item.foreignerPopular).length;
    const reservationCount = CULTURE_RESOURCES.filter((item) => item.reservationRequired).length;
    const imageCount = CULTURE_RESOURCES.filter((item) => item.imageUrl).length + ROUTE_DATA.filter((item) => item.imageUrl).length;
    const metricLabels = t('cultureData.metrics', []);
    metrics.innerHTML = `
      <article><span>${escapeHtml(metricLabels[0])}</span><strong>${CULTURE_RESOURCES.length}</strong></article>
      <article><span>${escapeHtml(metricLabels[1])}</span><strong>${ROUTE_DATA.length}</strong></article>
      <article><span>${escapeHtml(metricLabels[2])}</span><strong>${englishCount}</strong></article>
      <article><span>${escapeHtml(metricLabels[3])}</span><strong>${popularCount}</strong></article>
      <article><span>${escapeHtml(metricLabels[4])}</span><strong>${reservationCount}</strong></article>
      <article><span>${escapeHtml(metricLabels[5])}</span><strong>${imageCount}</strong></article>
      <article><span>${escapeHtml(metricLabels[6])}</span><strong>${escapeHtml(t(`cultureData.status.${dataLoadStatus}`, dataLoadStatus))}</strong></article>
    `;
  }

  const sources = qs('[data-source-list]');
  if (sources) {
    sources.innerHTML = PUBLIC_DATA_SOURCES.length
      ? PUBLIC_DATA_SOURCES.map(renderPublicDataSourceCard).join('')
      : `
        <article class="data-source-card public-data-card">
          <strong>공공데이터 소스 로딩 대기</strong>
          <p>${escapeHtml(t('cultureData.sourceNote'))}</p>
        </article>
      `;
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
    'passport.html',
    'culture-data.html',
    'ai-photo.html'
  ].includes(getCurrentFileName());
}

function sanitizeAriProviderSettings(raw = {}) {
  const mode = ['auto', 'openai-compatible', 'ollama', 'fallback'].includes(raw.mode)
    ? raw.mode
    : AI_PROVIDER_CONFIG.mode;

  return {
    mode,
    remoteEndpoint: String(raw.remoteEndpoint ?? AI_PROVIDER_CONFIG.remoteEndpoint ?? '').trim(),
    remoteModel: String(raw.remoteModel ?? AI_PROVIDER_CONFIG.remoteModel ?? '').trim(),
    remoteApiKey: String(raw.remoteApiKey ?? AI_PROVIDER_CONFIG.remoteApiKey ?? '').trim(),
    ollamaEndpoint: String(raw.ollamaEndpoint ?? AI_PROVIDER_CONFIG.ollamaEndpoint ?? '').trim(),
    ollamaModel: String(raw.ollamaModel ?? AI_PROVIDER_CONFIG.ollamaModel ?? '').trim(),
    timeoutMs: Math.max(1500, Number(raw.timeoutMs ?? AI_PROVIDER_CONFIG.timeoutMs) || AI_PROVIDER_CONFIG.timeoutMs)
  };
}

function getAriProviderSettings() {
  return sanitizeAriProviderSettings(storageJsonGet(STORAGE_KEYS.ariProviderSettings, {}));
}

function saveAriProviderSettings(settings) {
  const next = sanitizeAriProviderSettings(settings);
  storageJsonSet(STORAGE_KEYS.ariProviderSettings, next);
  ollamaHostUnavailable = false;
  return next;
}

function normalizeAriRemoteEndpoint(endpoint) {
  const trimmed = String(endpoint || '').trim().replace(/\/+$/, '');
  if (!trimmed) return '';
  if (/\/chat\/completions$/i.test(trimmed)) return trimmed;
  if (/\/v1$/i.test(trimmed)) return `${trimmed}/chat/completions`;
  return trimmed;
}

function normalizeAriOllamaEndpoint(endpoint) {
  const trimmed = String(endpoint || '').trim().replace(/\/+$/, '');
  if (!trimmed) return '';
  if (/\/api\/chat$/i.test(trimmed)) return trimmed;
  if (/\/api$/i.test(trimmed)) return `${trimmed}/chat`;
  if (/^https?:\/\/[^/]+(?::\d+)?$/i.test(trimmed)) return `${trimmed}/api/chat`;
  return trimmed;
}

function isAriRemoteConfigured(settings = getAriProviderSettings()) {
  return Boolean(
    normalizeAriRemoteEndpoint(settings.remoteEndpoint)
    && settings.remoteModel
    && settings.remoteApiKey
  );
}

function buildAriContext() {
  const selectedRoute = getRouteFromUrlOrStorage();
  const selectedRouteView = getRouteView(selectedRoute);
  const routeResources = getRouteResources(selectedRoute);
  const routeResourceViews = routeResources.map((resource) => getResourceView(resource));
  const language = getCurrentLanguage();

  return {
    currentPage: getCurrentFileName(),
    language,
    preference: loadUserPreference(),
    recentMessages: ariMessages.slice(-6).map((item) => ({
      role: item.role,
      message: item.message
    })),
    selectedRoute: {
      id: selectedRoute.id,
      title: selectedRouteView.title,
      englishTitle: selectedRoute.englishTitle,
      subtitle: selectedRouteView.subtitle,
      reason: selectedRouteView.reason,
      summary: selectedRouteView.summary,
      time: selectedRouteView.time,
      walking: selectedRouteView.walking,
      fee: selectedRouteView.fee,
      flow: selectedRouteView.displayFlow || selectedRoute.flow,
      convenience: selectedRouteView.displayConvenience || selectedRoute.convenience,
      resources: routeResourceViews.map((resource) => resource.displayName || resource.nameKo)
    },
    routes: ROUTE_DATA.map((route) => {
      const routeView = getRouteView(route);
      return {
        id: route.id,
        title: routeView.title,
        englishTitle: route.englishTitle,
        subtitle: routeView.subtitle,
        reason: routeView.reason,
        summary: routeView.summary,
        time: routeView.time,
        walking: routeView.walking,
        fee: routeView.fee,
        flow: routeView.displayFlow || route.flow,
        convenience: routeView.displayConvenience || route.convenience,
        tags: [
          ...toArray(route.tags),
          ...toArray(routeView.displayKeywords).map((keyword) => typeof keyword === 'string' ? keyword : keyword?.name)
        ].filter(Boolean)
      };
    }),
    resources: CULTURE_RESOURCES.map((resource) => {
      const resourceView = getResourceView(resource);
      return {
        id: resource.id,
        nameKo: resource.nameKo,
        nameEn: resource.nameEn,
        displayName: resourceView.displayName || resource.nameKo,
        secondaryName: resourceView.secondaryName || resource.nameEn,
        category: resourceView.category,
        feeType: resourceView.feeType,
        indoorOutdoor: resourceView.indoorOutdoor,
        englishAvailable: resource.englishAvailable,
        foreignerPopular: resource.foreignerPopular,
        reservationRequired: resource.reservationRequired,
        bookingNote: resourceView.bookingNote || resource.bookingNote,
        verifiedStatus: resource.verifiedStatus,
        explanation: resourceView.aiSimpleExplanation,
        whyItMatters: resourceView.aiWhyItMatters,
        visitTip: resourceView.aiVisitTip,
        tags: resourceView.displayTags || resource.globalTags || []
      };
    }),
    weather: WEATHER_DATA.map((item) => ({
      day: textFrom(item.day, language) || item.day,
      sky: textFrom(item.sky, language) || item.sky,
      temp: item.temp,
      rain: item.rain
    })),
    support: SUPPORT_DATA.map((item) => ({
      title: textFrom(item.title, language) || item.title,
      body: textFrom(item.body, language) || item.body
    })),
    bundles: getRouteBundles(selectedRoute).map((bundle) => ({
      id: bundle.id,
      title: bundle.title,
      stops: bundle.stops.map((stop) => ({
        time: stop.time,
        label: textFrom(stop.label, language) || stop.label
      }))
    })),
    ranking: {
      topRoutes: getForeignerRouteRanking().map((item) => ({
        id: item.route.id,
        title: getRouteView(item.route).title
      })),
      topPlaces: getForeignerPlaceRanking().map((item) => ({
        id: item.resource.id,
        name: getResourceView(item.resource).displayName || item.resource.nameKo
      }))
    },
    crowd: {
      selectedRouteScore: estimateRouteCrowdScore(selectedRoute),
      selectedRouteLabel: getCrowdLabel(estimateRouteCrowdScore(selectedRoute))
    }
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
    normalized.includes(normalizeSearchText(resource.displayName)) ||
    normalized.includes(normalizeSearchText(resource.secondaryName)) ||
    normalized.includes(normalizeSearchText(resource.id))
  );
}

function findMatchingRoute(message, routes) {
  const normalized = normalizeSearchText(message);
  return routes.find((route) =>
    normalized.includes(normalizeSearchText(route.title)) ||
    normalized.includes(normalizeSearchText(route.englishTitle)) ||
    normalized.includes(normalizeSearchText(route.subtitle)) ||
    normalized.includes(normalizeSearchText(route.id))
  );
}

function buildAriRecentText(messages = []) {
  return messages.map((item) => item.message).join(' ');
}

function routeSearchText(route) {
  return [
    route.id,
    route.title,
    route.englishTitle,
    route.subtitle,
    route.summary,
    route.reason,
    toArray(route.tags).join(' '),
    toArray(route.flow).join(' ')
  ].filter(Boolean).join(' ');
}

function resourceSearchText(resource) {
  return [
    resource.id,
    resource.nameKo,
    resource.nameEn,
    resource.displayName,
    resource.secondaryName,
    resource.category,
    resource.explanation,
    resource.whyItMatters,
    toArray(resource.tags).join(' ')
  ].filter(Boolean).join(' ');
}

function findRouteByHints(routes, hints = []) {
  return routes.find((route) => hasAnyTerm(routeSearchText(route), hints));
}

function findResourceByHints(resources, hints = []) {
  return resources.find((resource) => hasAnyTerm(resourceSearchText(resource), hints));
}

function tokenizeAriSearchText(value) {
  return Array.from(new Set(
    normalizeSearchText(value)
      .split(/[\s,.;:!?()[\]{}"'/\\|_-]+/)
      .map((token) => token.trim())
      .filter((token) => token.length >= 2)
  ));
}

function scoreAriTextMatch(message, haystack) {
  const text = normalizeSearchText(haystack);
  const tokens = tokenizeAriSearchText(message);
  if (!tokens.length || !text) return 0;

  return tokens.reduce((total, token) => {
    if (text.includes(` ${token} `)) return total + 4;
    if (text.startsWith(token) || text.endsWith(token)) return total + 3;
    if (text.includes(token)) return total + 2;
    return total;
  }, 0);
}

function rankAriItemsByMessage(message, items, toText) {
  return items
    .map((item) => ({
      item,
      score: scoreAriTextMatch(message, toText(item))
    }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score)
    .map((entry) => entry.item);
}

function dedupeAriItems(items, getKey) {
  const seen = new Set();
  return items.filter((item) => {
    const key = getKey(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function buildAriLlmKnowledgePack(message, context) {
  const relevantRoutes = dedupeAriItems([
    context.selectedRoute,
    ...rankAriItemsByMessage(message, context.routes, routeSearchText).slice(0, 4),
    ...context.ranking.topRoutes.slice(0, 2).map((item) => context.routes.find((route) => route.id === item.id)).filter(Boolean)
  ], (item) => item.id).slice(0, 4);

  const relevantResources = dedupeAriItems([
    ...rankAriItemsByMessage(message, context.resources, resourceSearchText).slice(0, 6),
    ...context.ranking.topPlaces.slice(0, 3).map((item) => context.resources.find((resource) => resource.id === item.id)).filter(Boolean)
  ], (item) => item.id).slice(0, 6);

  const relevantSupport = rankAriItemsByMessage(
    message,
    context.support,
    (item) => `${item.title} ${item.body}`
  ).slice(0, 3);

  return {
    currentPage: context.currentPage,
    language: context.language,
    preference: context.preference,
    selectedRoute: context.selectedRoute,
    relevantRoutes,
    relevantResources,
    weather: context.weather.slice(0, 3),
    support: relevantSupport.length ? relevantSupport : context.support.slice(0, 2),
    bundles: context.bundles.slice(0, 1),
    ranking: {
      topRoutes: context.ranking.topRoutes.slice(0, 3),
      topPlaces: context.ranking.topPlaces.slice(0, 5)
    },
    crowd: context.crowd
  };
}

function buildAriLlmMessages(message, context) {
  const history = [...context.recentMessages];
  if (!history.length || history[history.length - 1].message !== message) {
    history.push({ role: 'user', message });
  }

  return [
    { role: 'system', content: ARI_LLM_SYSTEM_PROMPT.trim() },
    {
      role: 'system',
      content: `Preferred language: ${context.language}\nUse the user's latest message language when possible.\nMARU app context:\n${JSON.stringify(buildAriLlmKnowledgePack(message, context), null, 2)}`
    },
    ...history.slice(-8).map((item) => ({
      role: item.role === 'assistant' ? 'assistant' : 'user',
      content: item.message
    }))
  ];
}

function extractAriLlmTextContent(content) {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content.map((part) => {
      if (typeof part === 'string') return part;
      if (typeof part?.text === 'string') return part.text;
      if (typeof part?.content === 'string') return part.content;
      if (typeof part?.value === 'string') return part.value;
      if (typeof part?.text?.value === 'string') return part.text.value;
      return '';
    }).join('\n').trim();
  }
  if (typeof content?.text === 'string') return content.text;
  if (typeof content?.value === 'string') return content.value;
  return '';
}

function fallbackAriReply(message, context) {
  const language = context.language || getCurrentLanguage();
  const reply = (values, fallback = '') => langPick(values, language, fallback);
  const recentText = buildAriRecentText(context.recentMessages);
  const combinedMessage = `${recentText} ${message}`.trim();
  const normalizedMessage = ` ${normalizeSearchText(combinedMessage)} `;
  const route = findMatchingRoute(message, context.routes) || findMatchingRoute(combinedMessage, context.routes) || context.selectedRoute;
  const resource = findMatchingResource(message, context.resources) || findMatchingResource(combinedMessage, context.resources);
  const rainyRoute = findRouteByHints(context.routes, ['rain', 'rainy', '우천', '비 오는 날', '비오', '실내', 'indoor', 'museum', '박물관']) || context.selectedRoute;
  const easyRoute = findRouteByHints(context.routes, ['less walking', 'low walking', 'easy', '가볍게', '적게 걷', '많이 걷지', '한옥', 'quiet']) || context.selectedRoute;
  const foodRoute = findRouteByHints(context.routes, ['market', '시장', 'food', '미식', 'local life']) || context.selectedRoute;
  const foodPlace = findResourceByHints(context.resources, ['market', '시장', 'food', '미식', '한국의집', 'korea house']);
  const topRouteNames = context.ranking.topRoutes.map((item) => item.title);
  const topPlaceNames = context.ranking.topPlaces.map((item) => item.name);
  const rainyRouteTitle = rainyRoute && rainyRoute.id !== context.selectedRoute.id
    ? rainyRoute.title
    : reply({
      ko: '비 오는 날 실내 전통문화 코스',
      en: 'Rainy-Day Indoor Traditional Culture Course',
      ja: '雨の日の屋内伝統文化コース',
      zh: '雨天室内传统文化路线'
    });
  const isGeneralRecommendationQuestion =
    hasAnyTerm(message, ['추천해줘', '추천해 줘', 'recommend', 'suggest', 'where should i start', '어디부터', '처음', 'first time', 'first-time', '처음 왔', '뭐가 좋아', 'not sure'])
    && !hasAnyTerm(message, ['비 오는 날', '비오', '우천', 'rain', '영어', 'english', '예약', 'reservation', '시장', 'food', '걷', 'walk']);

  if (hasAnyTerm(message, ['안녕', 'hello', 'hi', 'hey', 'こんにちは', '你好'])) {
    return reply({
      ko: `안녕하세요. 아리예요. 지금 보고 있는 ${context.selectedRoute.title}부터 설명해드릴 수도 있고, 비 오는 날 대안이나 영어 안내 가능 장소도 바로 추천해드릴게요.`,
      en: `Hello, I am ARI. I can start with ${context.selectedRoute.title}, or jump right into rainy-day alternatives and English-friendly places.`,
      ja: `こんにちは。アリです。今見ている ${context.selectedRoute.title} から案内してもいいですし、雨の日の代替案や英語案内がある場所もすぐ紹介できます。`,
      zh: `你好，我是ARI。我可以先从你现在看到的 ${context.selectedRoute.title} 开始，也可以直接推荐雨天替代路线或有英语信息的地点。`
    });
  }

  if (hasAnyTerm(message, ['고마워', '감사', 'thanks', 'thank you', 'arigato', '谢谢'])) {
    return reply({
      ko: '천만에요. 원하면 이 코스 추천 이유를 더 풀어드리거나, 하루 일정처럼 순서까지 정리해드릴게요.',
      en: 'You are welcome. I can also unpack why this route fits you or turn it into a simple day itinerary.',
      ja: 'どういたしまして。必要なら、このコースのおすすめ理由をもう少し詳しく説明したり、1日の流れとして整理したりできます。',
      zh: '不客气。如果你愿意，我还可以把这条路线为什么适合你讲得更清楚，或者整理成一天的行程顺序。'
    });
  }

  if (hasAnyTerm(message, ['누구', '뭐 할 수', 'who are you', 'what can you do', '자기소개', '自己紹介', '你是谁'])) {
    return reply({
      ko: '저는 마루 안에서 움직이는 전통문화 가이드 아리예요. 코스 추천 이유, 장소 의미, 비 오는 날 대체 코스, 영어 안내 가능 여부, 일정 묶기까지 앱 데이터 기준으로 자연스럽게 도와드릴 수 있어요.',
      en: 'I am ARI, MARU’s heritage guide. I can explain route logic, place meaning, rainy-day alternatives, English-friendly options, and simple itinerary bundles using MARU data.',
      ja: '私はMARUの中で案内する伝統文化ガイドのアリです。コース推薦の理由、場所の意味、雨の日の代替案、英語案内の有無、簡単な日程の組み立てまで、MARUのデータをもとに手伝えます。',
      zh: '我是MARU里的传统文化向导ARI。我可以根据MARU数据，帮你说明路线推荐理由、地点意义、雨天替代方案、英语支持情况，以及简单行程组合。'
    });
  }

  if (hasAnyTerm(message, ['기분', '잘 지내', '뭐해', 'how are you', 'what are you doing', '元気', '怎么样'])) {
    return reply({
      ko: '저는 여행 계획 도와드릴 준비가 잘 되어 있어요. 편하게 말 걸어주시면 분위기에 맞는 전통문화 코스를 바로 골라드릴게요.',
      en: 'I am ready to help with your trip. If you tell me the mood you want, I can quickly point you to a fitting heritage route.',
      ja: '旅行計画を手伝う準備はばっちりです。雰囲気や気分を教えてもらえれば、それに合う伝統文化コースをすぐ選べます。',
      zh: '我已经准备好帮你规划旅行了。只要告诉我你想要的氛围，我就能很快帮你挑一条合适的传统文化路线。'
    });
  }

  if (hasAnyTerm(message, ['비 오는 날', '비오', '비 오', '우천', 'rain', 'rainy'])) {
    const indoorNames = context.resources
      .filter((item) => /실내|indoor/i.test(item.indoorOutdoor || ''))
      .slice(0, 4)
      .map((item) => item.displayName || item.nameKo)
      .join(', ');
    return reply({
      ko: `비 오는 날에는 ${rainyRouteTitle}처럼 실내 비중이 높은 코스가 좋아요. 앱 데이터 기준으로는 ${indoorNames || '박물관 중심 장소'}를 먼저 보면 흐름이 안정적이고, 날씨 화면에서 대체 코스도 바로 확인할 수 있어요.`,
      en: `On a rainy day, a route like ${rainyRouteTitle} works best because it leans indoor. In MARU data, ${indoorNames || 'museum-focused places'} are the safest first picks, and the weather screen also shows alternatives.`,
      ja: `雨の日は ${rainyRouteTitle} のように屋内比重の高いコースが向いています。MARUデータでは ${indoorNames || '博物館中心の場所'} を先に見ると流れが安定し、天気画面でも代替コースを確認できます。`,
      zh: `下雨天更适合像 ${rainyRouteTitle} 这样室内比重更高的路线。按照MARU数据，先看 ${indoorNames || '以博物馆为主的地点'} 会更稳妥，在天气页面也能继续查看替代路线。`
    });
  }

  if (hasAnyTerm(message, ['많이 걷', '적게 걷', '걷기 싫', '피곤', 'less walking', 'easy walk', 'tired', 'walk less'])) {
    return reply({
      ko: `많이 걷고 싶지 않다면 ${easyRoute.title} 쪽이 잘 맞아요. 현재 선택 코스보다 동선이 가볍고, ${easyRoute.flow.slice(0, 3).join(' → ')}처럼 짧게 끊어 보기 좋습니다.`,
      en: `If you want less walking, ${easyRoute.title} is the better fit. It feels lighter than the current route and is easy to follow in a short sequence like ${easyRoute.flow.slice(0, 3).join(' → ')}.`,
      ja: `あまり歩きたくないなら ${easyRoute.title} が合っています。現在のコースより負担が軽く、${easyRoute.flow.slice(0, 3).join(' → ')} のように短く回りやすいです。`,
      zh: `如果你不想走太多路，${easyRoute.title} 会更适合。它比当前路线更轻松，像 ${easyRoute.flow.slice(0, 3).join(' → ')} 这样也比较容易分段安排。`
    });
  }

  if (hasAnyTerm(message, ['시장', '먹', 'food', 'meal', 'restaurant', '미식'])) {
    return reply({
      ko: `먹거리와 생활문화 분위기를 같이 보고 싶다면 ${foodRoute.title} 쪽이 좋아요. 장소로는 ${foodPlace?.displayName || '통인시장'}이 가장 바로 연결되고, 전통시장의 생활감이 살아 있어요.`,
      en: `If you want food plus everyday culture, ${foodRoute.title} is the strongest fit. The clearest place match is ${foodPlace?.displayName || 'Tongin Market'}, which carries a lively local-market atmosphere.`,
      ja: `食や生活文化の雰囲気を一緒に楽しみたいなら ${foodRoute.title} が合っています。場所では ${foodPlace?.displayName || '通仁市場'} が最もつながりやすく、伝統市場ならではの生活感があります。`,
      zh: `如果你想把吃的和生活文化一起体验，${foodRoute.title} 会比较合适。地点上最直接的是 ${foodPlace?.displayName || '通仁市场'}，传统市场的生活感会更明显。`
    });
  }

  if (isGeneralRecommendationQuestion) {
    return reply({
      ko: `처음 방문이라면 ${topRouteNames[0] || route.title}부터 시작하는 게 가장 무난해요. 왕실문화, 대표 장소, 외국인 이해도가 좋은 흐름이 잡혀 있고, 비가 오면 ${rainyRouteTitle}, 가볍게 걷고 싶으면 ${easyRoute.title}로 바꾸면 됩니다.`,
      en: `For a first visit, ${topRouteNames[0] || route.title} is the safest place to start. It gives you strong royal-heritage context and familiar landmark flow. If it rains, switch to ${rainyRouteTitle}; if you want less walking, move to ${easyRoute.title}.`,
      ja: `初めての訪問なら ${topRouteNames[0] || route.title} から始めるのがいちばん無難です。王室文化と代表的な場所を理解しやすく、雨なら ${rainyRouteTitle}、歩きを減らしたいなら ${easyRoute.title} に切り替えるとよいです。`,
      zh: `如果是第一次来，先从 ${topRouteNames[0] || route.title} 开始最稳妥。它能先建立王室文化和代表性地点的整体感；下雨就换成 ${rainyRouteTitle}，想少走一点就换成 ${easyRoute.title}。`
    });
  }

  if (hasAnyTerm(message, ['추천 이유', '왜 추천', 'why recommend', 'why recommended', 'why is this route recommended', 'why this route', 'recommendation reason'])) {
    return reply({
      ko: `${route.title} 추천 이유는 ${route.reason} 이동 흐름은 ${route.flow.join(' → ')}입니다. 자세한 길찾기는 지도 화면에서 선택한 지도 서비스 버튼을 사용하세요.`,
      en: `${route.title} is recommended because ${route.reason} The route flow is ${route.flow.join(' → ')}. For live navigation, use the map-service button on the map screen.`,
      ja: `${route.title} をおすすめする理由は ${route.reason} です。移動の流れは ${route.flow.join(' → ')} です。実際のナビは地図画面の地図サービスボタンを使ってください。`,
      zh: `${route.title} 之所以被推荐，是因为 ${route.reason} 移动顺序是 ${route.flow.join(' → ')}。实际导航请使用地图页面中的地图服务按钮。`
    });
  }

  if (resource) {
    const resourceLabel = resource.secondaryName && resource.secondaryName !== resource.displayName
      ? `${resource.displayName} (${resource.secondaryName})`
      : (resource.displayName || resource.nameKo);
    return reply({
      ko: `${resourceLabel}은 ${resource.category} 자원입니다. ${resource.explanation} ${resource.whyItMatters} 방문 전 운영시간, 요금, 예약 여부는 공식 출처 확인이 필요합니다.`,
      en: `${resourceLabel} is a ${resource.category} stop. ${resource.explanation} ${resource.whyItMatters} Please confirm official hours, fees, and reservations before visiting.`,
      ja: `${resourceLabel} は ${resource.category} の文化スポットです。${resource.explanation} ${resource.whyItMatters} 訪問前に営業時間、料金、予約有無は公式情報を確認してください。`,
      zh: `${resourceLabel} 是一个${resource.category}文化地点。${resource.explanation} ${resource.whyItMatters} 参观前请确认官方开放时间、费用和预约信息。`
    });
  }

  if (hasAnyTerm(message, ['택시', 'taxi'])) {
    return reply({
      ko: '현재는 실제 택시 호출이 아니라 지도 앱 길찾기 연결 방식입니다. 이후 서버와 모빌리티 API를 연동하면 택시 호출 기능으로 확장할 수 있습니다.',
      en: 'Right now MARU opens map navigation rather than calling a taxi directly. Later, a server and mobility API could extend this into real taxi booking.',
      ja: '現在は実際のタクシー配車ではなく、地図アプリの経路案内につなぐ方式です。今後サーバーとモビリティAPIを連携すれば、タクシー呼び出しへ拡張できます。',
      zh: '目前不是直接叫出租车，而是连接到地图应用的导航。后续如果接入服务器和出行 API，可以扩展成真正的打车功能。'
    });
  }

  if (hasAnyTerm(message, ['생성형 AI', '생성형ai', 'generative', 'generative ai']) || /\bai\b/.test(normalizedMessage)) {
    return reply({
      ko: 'MARU는 생성형 AI를 활용해 공공문화데이터를 외국인용 문화 해설, 추천 이유, 코스 스토리, 코스 이미지, 조선풍 포토카드로 재구성합니다.',
      en: 'MARU uses generative AI to turn public culture data into simple heritage explanations, recommendation reasons, route stories, route visuals, and Joseon-style photo cards.',
      ja: 'MARUは生成AIを使って、公共文化データをわかりやすい文化解説、推薦理由、コースストーリー、コース画像、朝鮮時代風フォトカードへ再構成します。',
      zh: 'MARU会利用生成式 AI，把公共文化数据重组为更容易理解的文化解说、推荐理由、路线故事、路线视觉和朝鲜风照片卡。'
    });
  }

  if (hasAnyTerm(message, ['공공데이터', '공공 데이터', 'public data', 'data source', '문화데이터']) || /\bdata\b/.test(normalizedMessage)) {
    return reply({
      ko: 'MARU는 한국관광공사 TourAPI, 서울시 문화행사 정보, 서울 실시간 도시데이터, 국가유산청 문화재 공간정보, 전통문화포털 데이터를 추천 근거로 확장할 수 있도록 설계되었습니다.',
      en: 'MARU is designed to expand with Korea Tourism Organization TourAPI, Seoul cultural-event data, Seoul real-time city data, National Heritage spatial data, and traditional-culture portal resources.',
      ja: 'MARUは韓国観光公社TourAPI、ソウル市文化イベント情報、ソウル実時間都市データ、国家遺産庁の空間情報、伝統文化ポータルのデータへ拡張できる設計です。',
      zh: 'MARU的结构可以继续接入韩国旅游发展局 TourAPI、首尔文化活动信息、首尔实时城市数据、国家遗产空间信息以及传统文化门户的数据。'
    });
  }

  if (hasAnyTerm(message, ['조선풍', '포토카드', 'photo card', 'photo-card', 'ai photo'])) {
    return reply({
      ko: 'AI 조선풍 포토카드는 여행 사진을 한국 전통미술 분위기의 카드로 바꾸는 체험 기능입니다. 지금 버전은 브라우저 안에서 바로 처리하고 저장할 수 있고, 이후에는 서버 기반 이미지 생성 API로 확장할 수 있습니다.',
      en: 'The Joseon-style photo card turns a travel photo into a Korean traditional-art mood card. In the current version it runs fully in the browser, and later it can expand into a server-backed image generation flow.',
      ja: 'AI朝鮮風フォトカードは、旅行写真を韓国伝統美術の雰囲気を持つカードに変える体験機能です。現在はブラウザ内で完結し、今後はサーバー連携の画像生成APIへ拡張できます。',
      zh: 'AI 朝鲜风照片卡会把旅行照片转成韩国传统美术氛围的卡片。当前版本可以直接在浏览器中完成处理和保存，后续也能扩展到服务器侧的图像生成 API。'
    });
  }

  if (hasAnyTerm(message, ['축제', '행사', 'festival', 'event'])) {
    const bundle = context.bundles[0];
    if (!bundle) {
      return reply({
        ko: '현재 연결된 대표 행사 샘플은 많지 않지만, 코스와 문화행사를 자동으로 묶어보는 기능은 준비되어 있습니다.',
        en: 'Related event samples are still limited, but MARU is ready to bundle a route with cultural events automatically.',
        ja: '現在つながっている代表的なイベント例は多くありませんが、コースと文化イベントを自動で束ねる機能は用意されています。',
        zh: '目前已连接的代表性活动样例还不多，但 MARU 已经具备把路线和文化活动自动组合起来的能力。'
      });
    }
    return reply({
      ko: `문화행사 데이터는 오늘 갈 수 있는 전통문화 체험을 코스에 연결하는 데 사용됩니다. ${bundle.title} 일정은 ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')}입니다.`,
      en: `Cultural-event data helps connect the route to something you can experience today. ${bundle.title} runs as ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')}.`,
      ja: `文化イベントデータは、その日に行ける伝統文化体験をコースへつなぐために使われます。${bundle.title} の流れは ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')} です。`,
      zh: `文化活动数据会把今天能参加的传统文化体验接到路线里。${bundle.title} 的安排是 ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')}。`
    });
  }

  if (hasAnyTerm(message, ['혼잡도', '혼잡', 'crowded', 'congestion', 'crowd'])) {
    return reply({
      ko: `${context.selectedRoute.title}의 현재 예상 혼잡도는 ${context.crowd.selectedRouteLabel}입니다. 더 조용한 흐름을 원하면 ${easyRoute.title} 같은 가벼운 코스나 날씨 화면의 대체 추천을 같이 보세요.`,
      en: `The current expected crowd level for ${context.selectedRoute.title} is ${context.crowd.selectedRouteLabel}. If you want something calmer, compare it with a lighter route like ${easyRoute.title} or check the weather alternatives.`,
      ja: `${context.selectedRoute.title} の現在の予想混雑度は ${context.crowd.selectedRouteLabel} です。より静かな流れを望むなら、${easyRoute.title} のような軽めのコースや天気画面の代替案も見てみてください。`,
      zh: `${context.selectedRoute.title} 当前的预计拥挤度是 ${context.crowd.selectedRouteLabel}。如果你想更安静一点，可以同时看看 ${easyRoute.title} 这类更轻松的路线，或天气页面里的替代推荐。`
    });
  }

  if (hasAnyTerm(message, ['랭킹', '인기', 'top', 'ranking', 'popular'])) {
    return reply({
      ko: `현재 외국인 인기 상위 코스는 ${topRouteNames.join(', ')}입니다. 장소 기준 인기 상위는 ${topPlaceNames.join(', ')}입니다.`,
      en: `The top foreigner-friendly routes right now are ${topRouteNames.join(', ')}. For individual places, the leading picks are ${topPlaceNames.join(', ')}.`,
      ja: `現在の外国人向け人気上位コースは ${topRouteNames.join(', ')} です。場所単位の人気上位は ${topPlaceNames.join(', ')} です。`,
      zh: `目前面向外国游客的人气路线前列是 ${topRouteNames.join(', ')}。按地点来看，人气较高的是 ${topPlaceNames.join(', ')}。`
    });
  }

  if (hasAnyTerm(message, ['일정', '번들', '묶어', 'bundle', 'itinerary', 'schedule'])) {
    const bundle = context.bundles[0];
    if (!bundle) {
      return reply({
        ko: '현재 선택한 코스의 자동 일정 번들은 아직 준비되지 않았습니다.',
        en: 'The auto itinerary bundle for the current route is not ready yet.',
        ja: '現在選択しているコースの自動日程バンドルはまだ用意されていません。',
        zh: '当前所选路线的自动行程组合还没有准备好。'
      });
    }
    return reply({
      ko: `${bundle.title} 일정은 ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' → ')} 순서입니다. 코스 상세 화면에서 저장할 수도 있습니다.`,
      en: `${bundle.title} follows ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' → ')}. You can also save it from the route detail screen.`,
      ja: `${bundle.title} の順序は ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' → ')} です。コース詳細画面から保存することもできます。`,
      zh: `${bundle.title} 的顺序是 ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' → ')}。你也可以在路线详情页保存它。`
    });
  }

  if (hasAnyTerm(message, ['영어', 'english', 'language', 'guide'])) {
    const englishRoutes = context.routes
      .filter((item) => item.convenience?.englishAvailable)
      .map((item) => item.title)
      .join(', ');
    const englishPlaces = context.resources
      .filter((item) => item.englishAvailable)
      .slice(0, 5)
      .map((item) => item.displayName || item.nameKo)
      .join(', ');
    return reply({
      ko: `영어 안내 가능성이 있는 코스는 ${englishRoutes || '공식 확인 필요'}입니다. 장소 기준으로는 ${englishPlaces || '아직 앱 데이터에 없습니다'}가 표시되어 있습니다. 실제 안내 제공 여부는 방문 전 공식 출처를 확인하세요.`,
      en: `Routes likely to have English support are ${englishRoutes || 'still needs official confirmation'}. At the place level, MARU currently highlights ${englishPlaces || 'no confirmed place yet'}. Please confirm the real support level with official sources before visiting.`,
      ja: `英語案内の可能性があるコースは ${englishRoutes || '公式確認が必要です'} です。場所単位では ${englishPlaces || 'まだアプリデータに十分ありません'} が表示されています。実際の案内可否は訪問前に公式情報で確認してください。`,
      zh: `可能提供英语信息的路线有 ${englishRoutes || '仍需官方确认'}。按地点来看，MARU 当前标出的有 ${englishPlaces || '应用数据里还没有明确标注'}。实际英语支持情况请在出发前查看官方信息。`
    });
  }

  if (hasAnyTerm(message, ['예약', '예매', 'booking', 'reservation'])) {
    const reservationRoutes = context.routes
      .filter((item) => item.convenience?.reservationRequired)
      .map((item) => item.title)
      .join(', ');
    const reservationPlaces = context.resources
      .filter((item) => item.reservationRequired)
      .map((item) => item.displayName || item.nameKo)
      .join(', ');
    return reply({
      ko: `예약 확인이 필요한 코스는 ${reservationRoutes || '현재 route 데이터에는 많지 않습니다'}입니다. 장소 데이터에서는 ${reservationPlaces || '대부분 일반 관람은 예약 불필요로 표시되어 있지만 특별 프로그램은 확인이 필요합니다'}. 공연, 특별 관람, 체험은 공식 예매 안내를 꼭 확인하세요.`,
      en: `Routes that may need reservation checks are ${reservationRoutes || 'still limited in the current route data'}. At the place level, MARU points to ${reservationPlaces || 'mostly general admission, but special programs should still be checked'}. Performances, special viewings, and hands-on programs should always be confirmed officially.`,
      ja: `予約確認が必要な可能性のあるコースは ${reservationRoutes || '現在のルートデータでは多くありません'} です。場所データでは ${reservationPlaces || '一般観覧は不要でも特別プログラムは確認が必要です'} と見てください。公演、特別観覧、体験は必ず公式案内を確認してください。`,
      zh: `可能需要确认预约的路线有 ${reservationRoutes || '当前路线数据里还不算多'}。地点层面可以先看 ${reservationPlaces || '大多是普通参观无需预约，但特别项目仍需确认'}。演出、特别参观和体验项目请务必查看官方预约说明。`
    });
  }

  if (hasAnyTerm(message, ['응급', '분실', '불편', '지원', 'emergency', 'lost', 'help'])) {
    const supportList = context.support.map((item) => item.title).join(', ');
    return reply({
      ko: `여행 중 도움이 필요하면 지원 메뉴를 확인하세요. 현재 지원 항목은 ${supportList}입니다. 응급상황, 분실물, 관광불편은 지원 화면에서 이어서 확인하는 것이 가장 빠릅니다.`,
      en: `If you need help while traveling, open the support menu. MARU currently lists ${supportList}. For emergencies, lost items, or tourist complaints, the support screen is the fastest next step.`,
      ja: `旅行中に助けが必要ならサポートメニューを見てください。現在の項目は ${supportList} です。緊急、紛失、観光トラブルはサポート画面から続けて確認するのが最も早いです。`,
      zh: `如果旅行中需要帮助，请打开支持菜单。当前支持项目包括 ${supportList}。遇到紧急情况、遗失物或旅游不便时，直接进入支持页面会最快。`
    });
  }

  if (hasAnyTerm(message, ['날씨', 'weather', 'temperature'])) {
    const weatherSummary = context.weather.map((item) => `${item.day} ${item.sky} ${item.temp}`).join(' / ');
    return reply({
      ko: `현재 앱의 날씨 데이터는 ${weatherSummary}입니다. 맑은 날은 궁궐과 한옥 산책, 비 오는 날은 ${rainyRouteTitle} 같은 실내 중심 코스를 추천합니다.`,
      en: `The current weather data in MARU is ${weatherSummary}. Clear days work well for palace and hanok walks, while rainy conditions are better handled by indoor-heavy options like ${rainyRouteTitle}.`,
      ja: `現在のMARU天気データは ${weatherSummary} です。晴れの日は宮殿と韓屋の散策、雨の日は ${rainyRouteTitle} のような屋内中心コースがおすすめです。`,
      zh: `MARU 当前的天气数据是 ${weatherSummary}。晴天适合宫殿和韩屋散步，雨天则更适合像 ${rainyRouteTitle} 这样以室内为主的路线。`
    });
  }

  if (hasAnyTerm(message, ['지도', '길찾기', 'maps', 'navigation', 'route'])) {
    return reply({
      ko: `${route.title}의 이동 순서는 ${route.flow.join(' → ')}입니다. 실제 길찾기는 코스 상세 또는 지도 화면에서 네이버지도, 카카오맵, Google Maps 중 선택해 여세요.`,
      en: `The movement order for ${route.title} is ${route.flow.join(' → ')}. For live navigation, open it from the route detail or map screen with Naver Map, Kakao Map, or Google Maps.`,
      ja: `${route.title} の移動順は ${route.flow.join(' → ')} です。実際のナビはコース詳細または地図画面から Naver Map、Kakao Map、Google Maps を選んで開いてください。`,
      zh: `${route.title} 的移动顺序是 ${route.flow.join(' → ')}。实际导航请在路线详情页或地图页中选择 Naver Map、Kakao Map 或 Google Maps 打开。`
    });
  }

  return reply({
    ko: `앱 데이터에 없는 내용을 단정해서 말하긴 어렵지만, 대신 지금 바로 도와드릴 수 있는 건 ${route.title} 추천 이유, 비 오는 날 대체 코스, 영어 안내 가능 장소 정리예요. 편하게 하나만 물어봐 주세요.`,
    en: `I should not state details outside MARU data as facts, but I can still help right now with the reason for ${route.title}, a rainy-day alternative, or English-friendly places. Ask whichever sounds most useful.`,
    ja: `MARUデータの外にある内容を断定して言うことは避けたいですが、${route.title} のおすすめ理由、雨の日の代替コース、英語案内がある場所ならすぐ案内できます。気になるものを一つ聞いてください。`,
    zh: `对于超出 MARU 数据范围的内容，我不想把它说成确定事实；不过我现在可以马上帮你说明 ${route.title} 的推荐理由、雨天替代路线，或者有英语信息的地点。你随便挑一个问我就好。`
  });
}

async function askOpenAiCompatible(message, context, settings = getAriProviderSettings()) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), settings.timeoutMs);
  const endpoint = normalizeAriRemoteEndpoint(settings.remoteEndpoint);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${settings.remoteApiKey}`
  };

  if (endpoint.includes('openrouter.ai')) {
    headers['HTTP-Referer'] = window.location.href;
    headers['X-Title'] = 'MARU ARI';
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      signal: controller.signal,
      body: JSON.stringify({
        model: settings.remoteModel,
        temperature: 0.7,
        messages: buildAriLlmMessages(message, context)
      })
    });

    if (!response.ok) throw new Error(`Remote LLM error: ${response.status}`);
    const data = await response.json();
    const responseOutput = Array.isArray(data?.output)
      ? data.output.flatMap((item) => item?.content || [])
      : [];
    return extractAriLlmTextContent(
      data?.choices?.[0]?.message?.content
      || data?.choices?.[0]?.delta?.content
      || responseOutput
      || data?.response
      || ''
    );
  } finally {
    window.clearTimeout(timeout);
  }
}

async function askOllama(message, context, settings = getAriProviderSettings()) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), settings.timeoutMs);

  try {
    const response = await fetch(normalizeAriOllamaEndpoint(settings.ollamaEndpoint), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        model: settings.ollamaModel,
        stream: false,
        messages: buildAriLlmMessages(message, context)
      })
    });

    if (!response.ok) throw new Error(`Ollama error: ${response.status}`);
    const data = await response.json();
    return data?.message?.content || data?.response || '';
  } finally {
    window.clearTimeout(timeout);
  }
}

function shouldTryRemoteAriProvider(settings = getAriProviderSettings()) {
  if (settings.mode === 'fallback' || settings.mode === 'ollama') return false;
  return isAriRemoteConfigured(settings);
}

function shouldTryOllamaProvider(settings = getAriProviderSettings()) {
  const endpoint = normalizeAriOllamaEndpoint(settings.ollamaEndpoint);
  if (!endpoint || !settings.ollamaModel) return false;
  if (settings.mode === 'fallback') return false;
  if (ollamaHostUnavailable) return false;
  if (settings.mode === 'ollama') return true;
  if (settings.mode === 'openai-compatible') return false;
  const isLocalEndpoint = endpoint.includes('localhost') || endpoint.includes('127.0.0.1') || endpoint.includes('[::1]');
  const isPublicHttpsPage = window.location.protocol === 'https:' && isLocalEndpoint;
  return !isPublicHttpsPage;
}

async function askAri(message) {
  const context = buildAriContext();
  const settings = getAriProviderSettings();

  if (shouldTryRemoteAriProvider(settings)) {
    try {
      const reply = await askOpenAiCompatible(message, context, settings);
      if (reply.trim()) return reply.trim();
    } catch (error) {
      if (settings.mode === 'openai-compatible') {
        return `${fallbackAriReply(message, context)}\n\n${t('ari.fallbackSuffix')}`;
      }
    }
  }

  if (shouldTryOllamaProvider(settings)) {
    try {
      const reply = await askOllama(message, context, settings);
      if (reply.trim()) return reply.trim();
    } catch (error) {
      ollamaHostUnavailable = true;
      if (settings.mode === 'ollama') {
        return `${fallbackAriReply(message, context)}\n\n${t('ari.fallbackSuffix')}`;
      }
    }
  }

  return fallbackAriReply(message, context);
}

function applyAriTranslations() {
  const root = qs('[data-ari-root]');
  if (!root) return;

  const openButton = qs('[data-ari-open]', root);
  if (openButton) {
    openButton.setAttribute('aria-label', t('ari.fabLabel'));
    const openLabel = qs('span', openButton);
    if (openLabel) openLabel.textContent = t('ari.name');
  }

  const panel = qs('[data-ari-panel]', root);
  if (panel) panel.setAttribute('aria-label', t('ari.dialogLabel'));

  const headerAvatar = qs('.ari-header-avatar', root);
  if (headerAvatar) headerAvatar.setAttribute('alt', t('ari.avatarAlt'));
  setText('.ari-header-profile span', t('ari.profileName'));
  setText('.ari-header-profile strong', t('ari.profileTitle'));

  const closeButton = qs('[data-ari-close]', root);
  if (closeButton) closeButton.setAttribute('aria-label', t('ari.closeLabel'));

  const quickQuestions = t('ari.quickQuestions', ARI_QUICK_QUESTIONS);
  qsa('[data-ari-quick]', root).forEach((button, index) => {
    const question = quickQuestions[index] || ARI_QUICK_QUESTIONS[index] || button.textContent;
    button.textContent = question;
    button.dataset.ariQuick = question;
  });

  const input = qs('[data-ari-input]', root);
  if (input) input.setAttribute('placeholder', t('ari.placeholder'));
  setText('[data-ari-send]', t('ari.send'));
  setText('[data-ari-settings-toggle-label]', t('ari.settingsToggle', 'LLM'));
  setText('[data-ari-settings-title]', t('ari.settingsTitle', '실시간 LLM 연결'));
  setText('[data-ari-settings-body]', t('ari.settingsBody', 'OpenAI 호환 chat/completions 엔드포인트나 로컬 Ollama 모델을 연결할 수 있어요. GitHub Pages에서는 키가 이 브라우저에만 저장됩니다.'));
  setText('[data-ari-provider-label]', t('ari.providerLabel', '응답 방식'));
  setText('[data-ari-remote-endpoint-label]', t('ari.remoteEndpointLabel', 'OpenAI 호환 엔드포인트'));
  setText('[data-ari-remote-model-label]', t('ari.remoteModelLabel', '모델 이름'));
  setText('[data-ari-remote-key-label]', t('ari.remoteKeyLabel', 'API 키'));
  setText('[data-ari-ollama-endpoint-label]', t('ari.ollamaEndpointLabel', 'Ollama 엔드포인트'));
  setText('[data-ari-ollama-model-label]', t('ari.ollamaModelLabel', 'Ollama 모델'));
  setText('[data-ari-provider-note]', t('ari.providerNote', '정식 공개 버전에서는 API 키를 서버 프록시로 옮기는 것이 안전합니다. 지금 방식은 데모나 개인 테스트용에 적합해요.'));
  setText('[data-ari-provider-save]', t('ari.providerSave', 'LLM 설정 저장'));

  const providerSelect = qs('[data-ari-provider-mode]', root);
  if (providerSelect) {
    const optionLabels = {
      auto: t('ari.providerOptionAuto', '자동: 실시간 LLM → Ollama → MARU 데이터'),
      'openai-compatible': t('ari.providerOptionRemote', 'OpenAI 호환 LLM만 사용'),
      ollama: t('ari.providerOptionOllama', '로컬 Ollama만 사용'),
      fallback: t('ari.providerOptionFallback', 'MARU 데이터만 사용')
    };
    Array.from(providerSelect.options).forEach((option) => {
      option.textContent = optionLabels[option.value] || option.textContent;
    });
  }

  populateAriProviderForm();
}

function setAriProviderStatus(message = '', tone = '') {
  const status = qs('[data-ari-provider-status]');
  if (!status) return;
  status.textContent = message;
  status.dataset.status = tone;
}

function syncAriProviderFieldVisibility() {
  const mode = qs('[data-ari-provider-mode]')?.value || getAriProviderSettings().mode;
  const remoteFields = qs('[data-ari-remote-fields]');
  const ollamaFields = qs('[data-ari-ollama-fields]');
  if (remoteFields) remoteFields.hidden = !(mode === 'auto' || mode === 'openai-compatible');
  if (ollamaFields) ollamaFields.hidden = !(mode === 'auto' || mode === 'ollama');
}

function populateAriProviderForm(settings = getAriProviderSettings()) {
  const modeField = qs('[data-ari-provider-mode]');
  const remoteEndpointField = qs('[data-ari-remote-endpoint]');
  const remoteModelField = qs('[data-ari-remote-model]');
  const remoteKeyField = qs('[data-ari-remote-key]');
  const ollamaEndpointField = qs('[data-ari-ollama-endpoint]');
  const ollamaModelField = qs('[data-ari-ollama-model]');

  if (modeField) modeField.value = settings.mode;
  if (remoteEndpointField) remoteEndpointField.value = settings.remoteEndpoint;
  if (remoteModelField) remoteModelField.value = settings.remoteModel;
  if (remoteKeyField) remoteKeyField.value = settings.remoteApiKey;
  if (ollamaEndpointField) ollamaEndpointField.value = settings.ollamaEndpoint;
  if (ollamaModelField) ollamaModelField.value = settings.ollamaModel;

  syncAriProviderFieldVisibility();
}

function readAriProviderForm() {
  return sanitizeAriProviderSettings({
    mode: qs('[data-ari-provider-mode]')?.value,
    remoteEndpoint: qs('[data-ari-remote-endpoint]')?.value,
    remoteModel: qs('[data-ari-remote-model]')?.value,
    remoteApiKey: qs('[data-ari-remote-key]')?.value,
    ollamaEndpoint: qs('[data-ari-ollama-endpoint]')?.value,
    ollamaModel: qs('[data-ari-ollama-model]')?.value
  });
}

function toggleAriSettings(forceOpen) {
  const root = qs('[data-ari-root]');
  const panel = qs('[data-ari-settings]', root);
  const trigger = qs('[data-ari-settings-toggle]', root);
  if (!root || !panel || !trigger) return;

  const nextOpen = typeof forceOpen === 'boolean'
    ? forceOpen
    : !root.classList.contains('ari-settings-open');

  root.classList.toggle('ari-settings-open', nextOpen);
  panel.hidden = !nextOpen;
  trigger.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
  if (nextOpen) populateAriProviderForm();
}

function renderAriMessages() {
  const container = qs('[data-ari-messages]');
  if (!container) return;

  if (!ariMessages.length) {
    container.innerHTML = `
      <div class="ari-message ari-message-assistant">
        <strong>${escapeHtml(t('ari.roleAssistant'))}</strong>
        <p>${escapeHtml(t('ari.greeting'))}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = ariMessages.map((item) => `
    <div class="ari-message ari-message-${escapeHtml(item.role)}">
      <strong>${escapeHtml(item.role === 'user' ? t('ari.roleUser') : t('ari.roleAssistant'))}</strong>
      <p>${escapeHtml(item.message)}</p>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function getCompactDisplayName(user) {
  const source = String(user?.displayName || user?.email || '').trim();
  if (!source) return authLabel('member');
  const firstWord = source.split(/\s+/)[0];
  return firstWord.length > 10 ? `${firstWord.slice(0, 10)}…` : firstWord;
}

function ensureHeaderActionGroup() {
  const header = qs('.app-header');
  const brand = qs('.brand', header);
  if (!header || !brand) return null;

  let group = qs('.header-action-group', header);
  if (!group) {
    group = document.createElement('div');
    group.className = 'header-action-group';

    Array.from(header.children)
      .filter((child) => child !== brand)
      .forEach((child) => group.appendChild(child));

    header.appendChild(group);
  }

  return group;
}

function renderHeaderAuthAction() {
  const group = ensureHeaderActionGroup();
  if (!group) return;

  let link = qs('[data-auth-header-link]', group);
  if (!link) {
    link = document.createElement('a');
    link.className = 'header-pill header-auth-pill';
    link.href = 'account.html';
    link.dataset.authHeaderLink = 'true';
    group.appendChild(link);
  }

  link.textContent = authState.user ? getCompactDisplayName(authState.user) : authLabel('guest');
  link.setAttribute('aria-label', authState.user ? authLabel('member') : authLabel('guest'));
}

function setAuthStatus(message = '', tone = 'info') {
  const status = qs('[data-auth-status]');
  if (!status) return;
  status.textContent = message;
  status.className = `auth-status${message ? ` is-${tone}` : ''}`;
}

async function renderGoogleSignInButton() {
  const root = qs('[data-auth-page]');
  if (!root) return;

  const section = qs('[data-auth-google-section]', root);
  const container = qs('[data-auth-google-button]', root);
  const note = qs('[data-auth-google-note]', root);
  if (!section || !container || !note) return;

  if (authState.user?.googleLinked) {
    section.classList.add('is-hidden');
    container.innerHTML = '';
    note.textContent = 'Google 계정이 이미 연결되어 있습니다.';
    return;
  }

  section.classList.remove('is-hidden');

  if (!authConfigState?.googleEnabled || !authConfigState?.googleClientId) {
    container.innerHTML = '';
    note.textContent = '관리자가 Google 로그인 Client ID를 설정하면 여기서 바로 로그인할 수 있습니다.';
    return;
  }

  let attempts = 0;
  while (!(window.google?.accounts?.id) && attempts < 60) {
    await new Promise((resolve) => window.setTimeout(resolve, 100));
    attempts += 1;
  }

  if (!(window.google?.accounts?.id)) {
    container.innerHTML = '';
    note.textContent = 'Google 로그인 스크립트를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';
    return;
  }

  note.textContent = authState.user
    ? '현재 로그인된 MARU 계정과 같은 이메일의 Google 계정을 연결할 수 있습니다.'
    : 'Google 계정으로 바로 가입하거나 로그인할 수 있습니다.';

  window.google.accounts.id.initialize({
    client_id: authConfigState.googleClientId,
    callback: async (response) => {
      const isLinkMode = Boolean(authState.user && !authState.user.googleLinked);
      try {
        const payload = await fetchMaruApiJson(
            isLinkMode ? MARU_API_PATHS.authGoogleLink : MARU_API_PATHS.authGoogle,
            {
              method: 'POST',
              body: { credential: response.credential }
            }
        );
        setAuthSession(payload);
        setAuthStatus(isLinkMode ? 'Google 계정 연결이 완료되었습니다.' : 'Google 로그인에 성공했습니다.', 'success');
        showToast(isLinkMode ? 'Google 계정 연결 완료' : 'Google 로그인 완료');
      } catch (error) {
        setAuthStatus(error?.message || 'Google 로그인에 실패했습니다.', 'error');
      }
    }
  });

  container.innerHTML = '';
  window.google.accounts.id.renderButton(container, {
    theme: 'outline',
    size: 'large',
    shape: 'pill',
    width: 320,
    text: authState.user ? 'continue_with' : 'signin_with'
  });
}

function renderAuthPage() {
  const root = qs('[data-auth-page]');
  if (!root) return;

  const user = authState.user;
  const sessionTitle = qs('[data-auth-session-title]', root);
  const sessionBody = qs('[data-auth-session-body]', root);
  const methods = qs('[data-auth-methods]', root);
  const avatar = qs('[data-auth-avatar]', root);
  const loginCard = qs('[data-auth-login-card]', root);
  const registerCard = qs('[data-auth-register-card]', root);
  const logoutButton = qs('[data-auth-logout]', root);
  const registerTitle = qs('[data-auth-register-title]', root);
  const registerHint = qs('[data-auth-register-hint]', root);
  const displayNameInput = qs('[data-auth-register-display-name]', root);
  const emailInput = qs('[data-auth-register-email]', root);
  const passwordInput = qs('[data-auth-register-password]', root);
  const passwordConfirmInput = qs('[data-auth-register-password-confirm]', root);

  if (sessionTitle) {
    sessionTitle.textContent = user
      ? `${user.displayName || user.email} 님이 로그인 중입니다`
      : 'MARU 계정으로 로그인하거나 새로 가입할 수 있습니다.';
  }

  if (sessionBody) {
    if (user) {
      const offlineNote = authState.offline ? ' 현재는 서버 연결을 확인하지 못해 저장된 세션 정보를 표시 중입니다.' : '';
      sessionBody.textContent = `${user.email}${offlineNote}`;
    } else {
      sessionBody.textContent = '이메일/비밀번호 회원가입과 Google 로그인을 모두 지원합니다.';
    }
  }

  if (methods) {
    methods.innerHTML = user ? [
      `<span class="auth-method-badge">${escapeHtml(user.localLoginEnabled ? '비밀번호 로그인 연결됨' : '비밀번호 로그인 미연결')}</span>`,
      `<span class="auth-method-badge">${escapeHtml(user.googleLinked ? 'Google 로그인 연결됨' : 'Google 로그인 미연결')}</span>`,
      `<span class="auth-method-badge">${escapeHtml(user.emailVerified ? '이메일 확인됨' : '이메일 확인 전')}</span>`
    ].join('') : '';
  }

  if (avatar) {
    if (user?.pictureUrl) {
      avatar.innerHTML = `<img src="${escapeHtml(user.pictureUrl)}" alt="MARU account avatar">`;
    } else if (user) {
      avatar.textContent = (user.displayName || user.email || 'M').trim().slice(0, 1).toUpperCase();
    } else {
      avatar.textContent = 'M';
    }
  }

  if (logoutButton) logoutButton.classList.toggle('is-hidden', !user);
  if (loginCard) loginCard.classList.toggle('is-hidden', Boolean(user));

  if (registerCard) {
    const hideRegisterCard = Boolean(user && user.localLoginEnabled);
    registerCard.classList.toggle('is-hidden', hideRegisterCard);

    if (registerTitle) {
      registerTitle.textContent = user ? 'MARU 비밀번호 로그인 추가' : 'MARU 회원가입';
    }

    if (registerHint) {
      registerHint.textContent = user
        ? '현재 계정에 비밀번호 로그인을 추가하려면 같은 이메일로 비밀번호를 설정하세요.'
        : '회원가입 후 바로 로그인 상태가 유지됩니다.';
    }

    if (user && displayNameInput && !displayNameInput.value.trim()) displayNameInput.value = user.displayName || '';
    if (user && emailInput) {
      emailInput.value = user.email || '';
      emailInput.readOnly = true;
    } else if (emailInput) {
      emailInput.readOnly = false;
    }

    if (!user && displayNameInput && displayNameInput.readOnly) displayNameInput.readOnly = false;
    if (!user && emailInput && emailInput.readOnly) emailInput.readOnly = false;
  }

  if (!user) {
    if (displayNameInput && displayNameInput.dataset.resetOnGuest === 'true') displayNameInput.value = '';
    if (emailInput && emailInput.dataset.resetOnGuest === 'true') emailInput.value = '';
  }

  if (!user && passwordInput && !passwordInput.value) passwordInput.value = '';
  if (!user && passwordConfirmInput && !passwordConfirmInput.value) passwordConfirmInput.value = '';

  void renderGoogleSignInButton();
}

function bindAuthPage() {
  const root = qs('[data-auth-page]');
  if (!root || root.dataset.authBound === 'true') return;
  root.dataset.authBound = 'true';

  const loginForm = qs('[data-auth-login-form]', root);
  const registerForm = qs('[data-auth-register-form]', root);
  const logoutButton = qs('[data-auth-logout]', root);

  const syncAuthConfig = async () => {
    try {
      authConfigState = await fetchMaruApiJson(MARU_API_PATHS.authConfig, { timeoutMs: MARU_AUTH_TIMEOUT_MS });
    } catch (error) {
      authConfigState = { googleEnabled: false, googleClientId: '' };
    }
    renderAuthPage();
  };

  loginForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = qs('[data-auth-login-email]', loginForm)?.value.trim() || '';
    const password = qs('[data-auth-login-password]', loginForm)?.value || '';

    try {
      const payload = await fetchMaruApiJson(MARU_API_PATHS.authLogin, {
        method: 'POST',
        body: { email, password }
      });
      setAuthSession(payload);
      setAuthStatus('로그인에 성공했습니다.', 'success');
      showToast('로그인 완료');
      loginForm.reset();
    } catch (error) {
      setAuthStatus(error?.message || '로그인에 실패했습니다.', 'error');
    }
  });

  registerForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const displayName = qs('[data-auth-register-display-name]', registerForm)?.value.trim() || '';
    const email = qs('[data-auth-register-email]', registerForm)?.value.trim() || '';
    const password = qs('[data-auth-register-password]', registerForm)?.value || '';
    const passwordConfirm = qs('[data-auth-register-password-confirm]', registerForm)?.value || '';

    if (password !== passwordConfirm) {
      setAuthStatus('비밀번호 확인이 일치하지 않습니다.', 'error');
      return;
    }

    try {
      const payload = await fetchMaruApiJson(MARU_API_PATHS.authRegister, {
        method: 'POST',
        body: { displayName, email, password }
      });
      setAuthSession(payload);
      setAuthStatus(authState.user?.localLoginEnabled && authState.user?.googleLinked
        ? '비밀번호 로그인이 추가되었습니다.'
        : '회원가입과 로그인에 성공했습니다.', 'success');
      showToast('계정 저장 완료');
      registerForm.reset();
    } catch (error) {
      setAuthStatus(error?.message || '회원가입에 실패했습니다.', 'error');
    }
  });

  logoutButton?.addEventListener('click', () => {
    clearAuthSession();
    setAuthStatus('로그아웃되었습니다.', 'success');
    showToast('로그아웃 완료');
  });

  void syncAuthConfig();
  renderAuthPage();
}

function appendChatMessage(role, message) {
  ariMessages = [...ariMessages, { role, message, createdAt: Date.now() }].slice(-14);
  storageJsonSet(STORAGE_KEYS.ariMessages, ariMessages);
  renderAriMessages();
}

function setAriBusy(isBusy) {
  const status = qs('[data-ari-status]');
  const sendButton = qs('[data-ari-send]');
  if (status) status.textContent = isBusy ? t('ari.busy') : '';
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
  toggleAriSettings(false);
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
    appendChatMessage('assistant', t('ari.error'));
  } finally {
    setAriBusy(false);
  }
}

function mountAriChat() {
  if (!shouldShowAri() || qs('[data-ari-root]')) return;
  const shell = qs('.app-shell') || document.body;
  if (qs('.bottom-cta')) document.body.classList.add('ari-has-bottom-cta');

  ariMessages = storageJsonGet(STORAGE_KEYS.ariMessages, []);
  const quickQuestions = t('ari.quickQuestions', ARI_QUICK_QUESTIONS);
  shell.insertAdjacentHTML('beforeend', `
    <section class="ari-chat" data-ari-root>
      <button class="ari-fab" type="button" data-ari-open aria-label="${escapeHtml(t('ari.fabLabel'))}">
        <img class="ari-fab-avatar" src="${ARI_CHARACTER_IMAGE}" alt="" aria-hidden="true">
        <span>${escapeHtml(t('ari.name'))}</span>
      </button>
      <div class="ari-panel" data-ari-panel role="dialog" aria-hidden="true" aria-label="${escapeHtml(t('ari.dialogLabel'))}">
        <header class="ari-header">
          <div class="ari-header-profile">
            <img class="ari-header-avatar" src="${ARI_CHARACTER_IMAGE}" alt="${escapeHtml(t('ari.avatarAlt'))}">
            <div>
              <span>${escapeHtml(t('ari.profileName'))}</span>
              <strong>${escapeHtml(t('ari.profileTitle'))}</strong>
            </div>
          </div>
          <button type="button" data-ari-close aria-label="${escapeHtml(t('ari.closeLabel'))}">×</button>
        </header>
        <button type="button" class="ari-settings-toggle ari-settings-strip" data-ari-settings-toggle aria-expanded="false">
          <span data-ari-settings-toggle-label>${escapeHtml(t('ari.settingsToggle', 'LLM'))}</span>
        </button>
        <section class="ari-settings" data-ari-settings hidden>
          <div class="ari-settings-copy">
            <strong data-ari-settings-title>${escapeHtml(t('ari.settingsTitle', '실시간 LLM 연결'))}</strong>
            <p data-ari-settings-body>${escapeHtml(t('ari.settingsBody', 'OpenAI 호환 chat/completions 엔드포인트나 로컬 Ollama 모델을 연결할 수 있어요. GitHub Pages에서는 키가 이 브라우저에만 저장됩니다.'))}</p>
          </div>
          <label class="ari-settings-field">
            <span data-ari-provider-label>${escapeHtml(t('ari.providerLabel', '응답 방식'))}</span>
            <select data-ari-provider-mode>
              <option value="auto">${escapeHtml(t('ari.providerOptionAuto', '자동: 실시간 LLM → Ollama → MARU 데이터'))}</option>
              <option value="openai-compatible">${escapeHtml(t('ari.providerOptionRemote', 'OpenAI 호환 LLM만 사용'))}</option>
              <option value="ollama">${escapeHtml(t('ari.providerOptionOllama', '로컬 Ollama만 사용'))}</option>
              <option value="fallback">${escapeHtml(t('ari.providerOptionFallback', 'MARU 데이터만 사용'))}</option>
            </select>
          </label>
          <div class="ari-settings-group" data-ari-remote-fields>
            <label class="ari-settings-field">
              <span data-ari-remote-endpoint-label>${escapeHtml(t('ari.remoteEndpointLabel', 'OpenAI 호환 엔드포인트'))}</span>
              <input data-ari-remote-endpoint type="text" placeholder="https://api.openai.com/v1/chat/completions" autocomplete="off">
            </label>
            <label class="ari-settings-field">
              <span data-ari-remote-model-label>${escapeHtml(t('ari.remoteModelLabel', '모델 이름'))}</span>
              <input data-ari-remote-model type="text" placeholder="gpt-4.1-mini" autocomplete="off">
            </label>
            <label class="ari-settings-field">
              <span data-ari-remote-key-label>${escapeHtml(t('ari.remoteKeyLabel', 'API 키'))}</span>
              <input data-ari-remote-key type="password" placeholder="sk-..." autocomplete="off">
            </label>
          </div>
          <div class="ari-settings-group" data-ari-ollama-fields hidden>
            <label class="ari-settings-field">
              <span data-ari-ollama-endpoint-label>${escapeHtml(t('ari.ollamaEndpointLabel', 'Ollama 엔드포인트'))}</span>
              <input data-ari-ollama-endpoint type="text" placeholder="http://localhost:11434/api/chat" autocomplete="off">
            </label>
            <label class="ari-settings-field">
              <span data-ari-ollama-model-label>${escapeHtml(t('ari.ollamaModelLabel', 'Ollama 모델'))}</span>
              <input data-ari-ollama-model type="text" placeholder="llama3.2" autocomplete="off">
            </label>
          </div>
          <p class="ari-settings-note" data-ari-provider-note>${escapeHtml(t('ari.providerNote', '정식 공개 버전에서는 API 키를 서버 프록시로 옮기는 것이 안전합니다. 지금 방식은 데모나 개인 테스트용에 적합해요.'))}</p>
          <div class="ari-settings-actions">
            <button type="button" data-ari-provider-save>${escapeHtml(t('ari.providerSave', 'LLM 설정 저장'))}</button>
          </div>
          <p class="ari-settings-status" data-ari-provider-status aria-live="polite"></p>
        </section>
        <div class="ari-quick-list">
          ${quickQuestions.map((question) => `<button type="button" data-ari-quick="${escapeHtml(question)}">${escapeHtml(question)}</button>`).join('')}
        </div>
        <div class="ari-messages" data-ari-messages></div>
        <p class="ari-status" data-ari-status aria-live="polite"></p>
        <form class="ari-form" data-ari-form>
          <input data-ari-input type="text" placeholder="${escapeHtml(t('ari.placeholder'))}" autocomplete="off">
          <button type="submit" data-ari-send>${escapeHtml(t('ari.send'))}</button>
        </form>
      </div>
    </section>
  `);

  applyAriTranslations();
  renderAriMessages();
  qs('[data-ari-open]')?.addEventListener('click', openAriChat);
  qs('[data-ari-close]')?.addEventListener('click', closeAriChat);
  qs('[data-ari-settings-toggle]')?.addEventListener('click', () => toggleAriSettings());
  qs('[data-ari-provider-mode]')?.addEventListener('change', syncAriProviderFieldVisibility);
  qs('[data-ari-provider-save]')?.addEventListener('click', () => {
    const settings = saveAriProviderSettings(readAriProviderForm());
    const usedRemote = isAriRemoteConfigured(settings);
    const message = usedRemote
      ? t('ari.providerSavedLive', '실시간 LLM 설정을 저장했어요. 연결 가능할 때 이 모델을 우선 사용합니다.')
      : t('ari.providerSavedLocal', '설정을 저장했어요. 라이브 API 키가 없으면 Ollama 또는 MARU 데이터 답변으로 이어집니다.');
    setAriProviderStatus(message, 'success');
    showToast(t('ari.providerSavedToast', 'ARI LLM 설정을 저장했어요.'));
  });
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
  if (label) label.textContent = `${t('planner.stepLabel')} ${plannerStep} / 5`;

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

function drawRoundedRectPath(context, x, y, width, height, radius) {
  const corner = Math.min(radius, width / 2, height / 2);
  context.beginPath();
  context.moveTo(x + corner, y);
  context.lineTo(x + width - corner, y);
  context.quadraticCurveTo(x + width, y, x + width, y + corner);
  context.lineTo(x + width, y + height - corner);
  context.quadraticCurveTo(x + width, y + height, x + width - corner, y + height);
  context.lineTo(x + corner, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - corner);
  context.lineTo(x, y + corner);
  context.quadraticCurveTo(x, y, x + corner, y);
  context.closePath();
}

function getAiPhotoStyleConfig(style = aiPhotoSelectedStyle) {
  const styles = {
    minhwa: {
      paper: '#efe0bc',
      border: '#7f5539',
      accent: '#b45309',
      filter: 'sepia(0.24) saturate(1.18) contrast(1.06)',
      levels: 6,
      tint: [227, 194, 140]
    },
    ink: {
      paper: '#e9e2d2',
      border: '#1f2937',
      accent: '#475569',
      filter: 'grayscale(0.35) contrast(1.24) saturate(0.82)',
      levels: 5,
      tint: [190, 190, 190]
    },
    night: {
      paper: '#e8dcc6',
      border: '#0f172a',
      accent: '#d59c38',
      filter: 'contrast(1.16) saturate(1.2) brightness(1.02)',
      levels: 8,
      tint: [202, 180, 137]
    }
  };

  return styles[style] || styles.minhwa;
}

function posterizeChannel(value, levels) {
  const step = 255 / Math.max(2, levels - 1);
  return Math.round(Math.round(value / step) * step);
}

async function loadAiPhotoSegmenter() {
  if (aiPhotoSegmenterPromise) return aiPhotoSegmenterPromise;

  aiPhotoSegmenterPromise = (async () => {
    const vision = await import(AI_PHOTO_VISION_BUNDLE_URL);
    const filesetResolver = await vision.FilesetResolver.forVisionTasks(AI_PHOTO_WASM_ROOT_URL);
    return vision.ImageSegmenter.createFromOptions(filesetResolver, {
      baseOptions: {
        modelAssetPath: AI_PHOTO_SEGMENTER_MODEL_URL
      },
      runningMode: 'IMAGE',
      outputCategoryMask: true,
      outputConfidenceMasks: false
    });
  })().catch((error) => {
    aiPhotoSegmenterPromise = null;
    throw error;
  });

  return aiPhotoSegmenterPromise;
}

function getSegmentMaskArray(categoryMask, width, height) {
  if (!categoryMask) return null;
  if (typeof categoryMask.getAsUint8Array === 'function') return categoryMask.getAsUint8Array();
  if (typeof categoryMask.getAsFloat32Array === 'function') {
    const values = categoryMask.getAsFloat32Array();
    const converted = new Uint8ClampedArray(width * height);
    for (let index = 0; index < converted.length; index += 1) {
      const value = Math.max(0, Math.min(1, values[index] || 0));
      converted[index] = Math.round(value * 255);
    }
    return converted;
  }
  return null;
}

function blurAlphaMask(alphaMask, width, height, radius = 2) {
  if (!radius) return alphaMask;
  const horizontal = new Uint8ClampedArray(alphaMask.length);
  const vertical = new Uint8ClampedArray(alphaMask.length);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let total = 0;
      let count = 0;
      for (let offset = -radius; offset <= radius; offset += 1) {
        const sampleX = x + offset;
        if (sampleX < 0 || sampleX >= width) continue;
        total += alphaMask[(y * width) + sampleX];
        count += 1;
      }
      horizontal[(y * width) + x] = Math.round(total / Math.max(count, 1));
    }
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let total = 0;
      let count = 0;
      for (let offset = -radius; offset <= radius; offset += 1) {
        const sampleY = y + offset;
        if (sampleY < 0 || sampleY >= height) continue;
        total += horizontal[(sampleY * width) + x];
        count += 1;
      }
      vertical[(y * width) + x] = Math.round(total / Math.max(count, 1));
    }
  }

  return vertical;
}

function buildForegroundAlphaMask(maskArray, width, height) {
  let maxValue = 0;
  for (let index = 0; index < maskArray.length; index += 1) {
    if (maskArray[index] > maxValue) maxValue = maskArray[index];
  }

  const threshold = maxValue <= 3 ? 0.5 : Math.max(12, maxValue * 0.35);
  const createCandidate = (invert = false) => {
    const binary = new Uint8ClampedArray(width * height);
    let foregroundCount = 0;

    for (let index = 0; index < binary.length; index += 1) {
      const value = maskArray[index];
      const isForeground = invert ? value <= threshold : value > threshold;
      if (isForeground) {
        binary[index] = 255;
        foregroundCount += 1;
      }
    }

    return {
      binary,
      coverage: foregroundCount / Math.max(binary.length, 1)
    };
  };

  const direct = createCandidate(false);
  const inverted = createCandidate(true);
  const scoreCoverage = (coverage) => {
    if (coverage < 0.04 || coverage > 0.88) return 10 + Math.abs(coverage - 0.34);
    return Math.abs(coverage - 0.34);
  };
  const selected = scoreCoverage(direct.coverage) <= scoreCoverage(inverted.coverage)
    ? direct
    : inverted;

  return blurAlphaMask(selected.binary, width, height, 3);
}

function alphaMaskToCanvas(alphaMask, width, height) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const imageData = context.createImageData(width, height);
  for (let index = 0; index < alphaMask.length; index += 1) {
    const pixelIndex = index * 4;
    imageData.data[pixelIndex] = 255;
    imageData.data[pixelIndex + 1] = 255;
    imageData.data[pixelIndex + 2] = 255;
    imageData.data[pixelIndex + 3] = alphaMask[index];
  }
  canvas.width = width;
  canvas.height = height;
  context.putImageData(imageData, 0, 0);
  return canvas;
}

async function segmentAiPhotoSubject(sourceImage, width, height) {
  const inputCanvas = document.createElement('canvas');
  const inputContext = inputCanvas.getContext('2d');
  inputCanvas.width = width;
  inputCanvas.height = height;
  inputContext.drawImage(sourceImage, 0, 0, width, height);

  const segmenter = await loadAiPhotoSegmenter();
  const segmentation = await segmenter.segment(inputCanvas);
  const rawMask = getSegmentMaskArray(segmentation?.categoryMask, width, height);
  if (!rawMask) return null;
  const alphaMask = buildForegroundAlphaMask(rawMask, width, height);
  return {
    alphaMask,
    maskCanvas: alphaMaskToCanvas(alphaMask, width, height)
  };
}

function drawCoverImage(context, image, x, y, width, height) {
  const scale = Math.max(width / Math.max(image.naturalWidth || image.width, 1), height / Math.max(image.naturalHeight || image.height, 1));
  const drawWidth = (image.naturalWidth || image.width) * scale;
  const drawHeight = (image.naturalHeight || image.height) * scale;
  const drawX = x + ((width - drawWidth) / 2);
  const drawY = y + ((height - drawHeight) / 2);
  context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function createPaintedPhotoCanvas(sourceImage, config, width, height, options = {}) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d', { willReadFrequently: true });
  const grainSeed = (width * 17) + (height * 13);
  canvas.width = width;
  canvas.height = height;

  context.filter = config.filter;
  context.drawImage(sourceImage, 0, 0, width, height);

  const imageData = context.getImageData(0, 0, width, height);
  const pixels = imageData.data;
  const luminance = new Float32Array(width * height);

  for (let index = 0; index < pixels.length; index += 4) {
    const pixelIndex = index / 4;
    const red = pixels[index];
    const green = pixels[index + 1];
    const blue = pixels[index + 2];
    luminance[pixelIndex] = (red * 0.3) + (green * 0.59) + (blue * 0.11);
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const pixelIndex = (y * width) + x;
      const index = pixelIndex * 4;
      const red = pixels[index];
      const green = pixels[index + 1];
      const blue = pixels[index + 2];
      const light = luminance[pixelIndex];
      const left = luminance[Math.max(0, pixelIndex - 1)];
      const right = luminance[Math.min(luminance.length - 1, pixelIndex + 1)];
      const up = luminance[Math.max(0, pixelIndex - width)];
      const down = luminance[Math.min(luminance.length - 1, pixelIndex + width)];
      const edgeStrength = Math.min(255, Math.abs(left - right) + Math.abs(up - down));
      const grain = ((((x * 13) + (y * 7) + grainSeed) % 17) - 8) * 1.4;
      const edgeWeight = options.inkHeavy ? 0.44 : 0.26;

      pixels[index] = Math.max(0, Math.min(255, posterizeChannel((red * 0.68) + (light * 0.24) + (config.tint[0] * 0.12) + grain - (edgeStrength * edgeWeight), config.levels)));
      pixels[index + 1] = Math.max(0, Math.min(255, posterizeChannel((green * 0.7) + (light * 0.18) + (config.tint[1] * 0.1) + grain - (edgeStrength * edgeWeight), config.levels)));
      pixels[index + 2] = Math.max(0, Math.min(255, posterizeChannel((blue * 0.66) + (light * 0.28) + (config.tint[2] * 0.12) + grain - (edgeStrength * (edgeWeight + 0.04)), config.levels)));
    }
  }

  context.putImageData(imageData, 0, 0);

  context.globalCompositeOperation = 'multiply';
  const wash = context.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, options.inkHeavy ? 'rgba(34, 44, 59, 0.18)' : 'rgba(180, 112, 49, 0.12)');
  wash.addColorStop(1, options.inkHeavy ? 'rgba(212, 205, 193, 0.14)' : 'rgba(245, 224, 184, 0.18)');
  context.fillStyle = wash;
  context.fillRect(0, 0, width, height);
  context.globalCompositeOperation = 'source-over';

  return canvas;
}

function createMaskedCanvas(sourceCanvas, maskCanvas, width, height) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;
  context.drawImage(sourceCanvas, 0, 0);
  context.globalCompositeOperation = 'destination-in';
  context.drawImage(maskCanvas, 0, 0);
  context.globalCompositeOperation = 'source-over';
  return canvas;
}

function createFallbackPortraitMask(width, height) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = width;
  canvas.height = height;

  const centerX = width * 0.5;
  const centerY = height * 0.47;
  const radiusX = width * 0.28;
  const radiusY = height * 0.42;
  const gradient = context.createRadialGradient(centerX, centerY, Math.min(radiusX, radiusY) * 0.52, centerX, centerY, Math.max(radiusX, radiusY));
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(0.72, 'rgba(255, 255, 255, 0.96)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
  context.fillStyle = gradient;
  context.beginPath();
  context.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
  context.fill();

  const shoulder = context.createRadialGradient(centerX, height * 0.72, width * 0.12, centerX, height * 0.76, width * 0.5);
  shoulder.addColorStop(0, 'rgba(255, 255, 255, 0.88)');
  shoulder.addColorStop(0.64, 'rgba(255, 255, 255, 0.46)');
  shoulder.addColorStop(1, 'rgba(255, 255, 255, 0)');
  context.fillStyle = shoulder;
  context.beginPath();
  context.ellipse(centerX, height * 0.76, width * 0.36, height * 0.22, 0, 0, Math.PI * 2);
  context.fill();

  return canvas;
}

function drawPalaceRoof(context, x, y, width, height, options = {}) {
  const roofHeight = Math.max(34, height * 0.36);
  const eave = Math.max(18, width * 0.07);
  const roofTop = y;
  const roofBase = y + roofHeight;
  const bodyTop = roofBase - 6;
  const bodyHeight = height - roofHeight;
  const accent = options.accent || '#d69a38';
  const roof = options.roof || '#14203a';
  const body = options.body || '#7a1f23';

  context.save();
  context.shadowColor = options.shadow || 'rgba(0, 0, 0, 0.34)';
  context.shadowBlur = options.shadowBlur || 16;
  context.shadowOffsetY = options.shadowOffsetY || 8;

  const roofGradient = context.createLinearGradient(x, roofTop, x, roofBase);
  roofGradient.addColorStop(0, '#273856');
  roofGradient.addColorStop(0.46, roof);
  roofGradient.addColorStop(1, '#071121');
  context.fillStyle = roofGradient;
  context.beginPath();
  context.moveTo(x - eave, roofBase);
  context.quadraticCurveTo(x + width * 0.18, roofTop + roofHeight * 0.08, x + width * 0.5, roofTop);
  context.quadraticCurveTo(x + width * 0.82, roofTop + roofHeight * 0.08, x + width + eave, roofBase);
  context.quadraticCurveTo(x + width * 0.84, roofBase + roofHeight * 0.2, x + width * 0.5, roofBase + 2);
  context.quadraticCurveTo(x + width * 0.16, roofBase + roofHeight * 0.2, x - eave, roofBase);
  context.closePath();
  context.fill();

  context.shadowBlur = 0;
  context.strokeStyle = 'rgba(245, 204, 116, 0.58)';
  context.lineWidth = Math.max(2, width * 0.006);
  context.beginPath();
  context.moveTo(x - eave * 0.78, roofBase - 4);
  context.quadraticCurveTo(x + width * 0.2, roofTop + roofHeight * 0.16, x + width * 0.5, roofTop + 6);
  context.quadraticCurveTo(x + width * 0.8, roofTop + roofHeight * 0.16, x + width + eave * 0.78, roofBase - 4);
  context.stroke();

  const bodyGradient = context.createLinearGradient(x, bodyTop, x, y + height);
  bodyGradient.addColorStop(0, '#a73531');
  bodyGradient.addColorStop(0.45, body);
  bodyGradient.addColorStop(1, '#311016');
  context.fillStyle = bodyGradient;
  context.fillRect(x + width * 0.08, bodyTop, width * 0.84, bodyHeight);

  context.fillStyle = 'rgba(251, 221, 151, 0.88)';
  const columnCount = options.columns || 5;
  const columnWidth = Math.max(3, width * 0.025);
  for (let index = 0; index < columnCount; index += 1) {
    const ratio = columnCount === 1 ? 0.5 : 0.16 + ((0.68 * index) / Math.max(columnCount - 1, 1));
    const columnX = x + width * ratio;
    context.fillRect(columnX, bodyTop + 8, columnWidth, bodyHeight - 8);
  }

  context.fillStyle = 'rgba(255, 205, 111, 0.72)';
  const windowCount = Math.max(3, columnCount - 1);
  for (let index = 0; index < windowCount; index += 1) {
    const ratio = windowCount === 1 ? 0.5 : 0.22 + ((0.56 * index) / Math.max(windowCount - 1, 1));
    const windowX = x + width * ratio;
    context.fillRect(windowX, bodyTop + bodyHeight * 0.28, width * 0.08, bodyHeight * 0.22);
  }

  context.strokeStyle = accent;
  context.lineWidth = Math.max(2, width * 0.005);
  context.beginPath();
  context.moveTo(x + width * 0.06, bodyTop);
  context.lineTo(x + width * 0.94, bodyTop);
  context.moveTo(x + width * 0.1, bodyTop + bodyHeight * 0.74);
  context.lineTo(x + width * 0.9, bodyTop + bodyHeight * 0.74);
  context.stroke();

  context.restore();
}

function drawRoyalCloud(context, x, y, width, alpha = 0.18) {
  context.save();
  context.fillStyle = `rgba(255, 239, 200, ${alpha})`;
  context.beginPath();
  context.ellipse(x, y, width * 0.42, width * 0.09, -0.08, 0, Math.PI * 2);
  context.ellipse(x + width * 0.22, y + 2, width * 0.34, width * 0.07, 0.08, 0, Math.PI * 2);
  context.ellipse(x - width * 0.24, y + 4, width * 0.26, width * 0.06, 0.12, 0, Math.PI * 2);
  context.fill();
  context.restore();
}

function drawRoyalPalaceNightBackground(context, width, height) {
  const sky = context.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, '#071329');
  sky.addColorStop(0.38, '#14294a');
  sky.addColorStop(0.68, '#331b37');
  sky.addColorStop(1, '#0b1020');
  context.fillStyle = sky;
  context.fillRect(0, 0, width, height);

  const moonGlow = context.createRadialGradient(width * 0.78, height * 0.16, 8, width * 0.78, height * 0.16, width * 0.32);
  moonGlow.addColorStop(0, 'rgba(255, 234, 180, 0.52)');
  moonGlow.addColorStop(0.34, 'rgba(255, 211, 122, 0.18)');
  moonGlow.addColorStop(1, 'rgba(255, 211, 122, 0)');
  context.fillStyle = moonGlow;
  context.fillRect(0, 0, width, height);

  context.fillStyle = 'rgba(255, 238, 190, 0.94)';
  context.beginPath();
  context.arc(width * 0.78, height * 0.16, Math.max(22, width * 0.045), 0, Math.PI * 2);
  context.fill();

  context.fillStyle = 'rgba(10, 23, 41, 0.34)';
  context.beginPath();
  context.arc(width * 0.795, height * 0.15, Math.max(19, width * 0.04), 0, Math.PI * 2);
  context.fill();

  for (let index = 0; index < 34; index += 1) {
    const x = 24 + ((index * 83) % Math.max(width - 48, 1));
    const y = 18 + ((index * 47) % Math.max(height * 0.32, 1));
    const radius = 0.8 + ((index % 4) * 0.42);
    context.fillStyle = `rgba(255, 246, 214, ${0.2 + ((index % 5) * 0.08)})`;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }

  drawRoyalCloud(context, width * 0.3, height * 0.15, width * 0.42, 0.14);
  drawRoyalCloud(context, width * 0.58, height * 0.25, width * 0.34, 0.12);
  drawRoyalCloud(context, width * 0.16, height * 0.31, width * 0.32, 0.1);

  const mountain = context.createLinearGradient(0, height * 0.3, 0, height * 0.62);
  mountain.addColorStop(0, 'rgba(39, 69, 79, 0.5)');
  mountain.addColorStop(1, 'rgba(8, 18, 33, 0.72)');
  context.fillStyle = mountain;
  context.beginPath();
  context.moveTo(0, height * 0.52);
  context.lineTo(width * 0.18, height * 0.34);
  context.lineTo(width * 0.34, height * 0.5);
  context.lineTo(width * 0.52, height * 0.29);
  context.lineTo(width * 0.74, height * 0.51);
  context.lineTo(width, height * 0.36);
  context.lineTo(width, height * 0.72);
  context.lineTo(0, height * 0.72);
  context.closePath();
  context.fill();

  const courtyard = context.createLinearGradient(0, height * 0.68, 0, height);
  courtyard.addColorStop(0, 'rgba(59, 39, 47, 0.94)');
  courtyard.addColorStop(0.45, 'rgba(31, 27, 38, 0.96)');
  courtyard.addColorStop(1, 'rgba(6, 10, 22, 0.98)');
  context.fillStyle = courtyard;
  context.fillRect(0, height * 0.66, width, height * 0.34);

  drawPalaceRoof(context, width * 0.12, height * 0.42, width * 0.76, height * 0.26, {
    columns: 7,
    shadowBlur: 22,
    shadowOffsetY: 10
  });
  drawPalaceRoof(context, width * -0.08, height * 0.5, width * 0.34, height * 0.18, {
    columns: 3,
    shadowBlur: 14,
    accent: '#bf7e2b'
  });
  drawPalaceRoof(context, width * 0.74, height * 0.51, width * 0.32, height * 0.17, {
    columns: 3,
    shadowBlur: 14,
    accent: '#bf7e2b'
  });

  const path = context.createLinearGradient(width * 0.5, height * 0.66, width * 0.5, height);
  path.addColorStop(0, 'rgba(168, 111, 56, 0.26)');
  path.addColorStop(1, 'rgba(236, 197, 116, 0.05)');
  context.fillStyle = path;
  context.beginPath();
  context.moveTo(width * 0.42, height * 0.67);
  context.lineTo(width * 0.58, height * 0.67);
  context.lineTo(width * 0.82, height);
  context.lineTo(width * 0.18, height);
  context.closePath();
  context.fill();

  for (let index = 0; index < 8; index += 1) {
    const x = width * (0.18 + (index * 0.09));
    const y = height * (0.69 + ((index % 2) * 0.035));
    const glow = context.createRadialGradient(x, y, 2, x, y, width * 0.055);
    glow.addColorStop(0, 'rgba(255, 202, 104, 0.72)');
    glow.addColorStop(0.34, 'rgba(255, 163, 70, 0.2)');
    glow.addColorStop(1, 'rgba(255, 163, 70, 0)');
    context.fillStyle = glow;
    context.fillRect(x - width * 0.06, y - width * 0.06, width * 0.12, width * 0.12);
    context.fillStyle = 'rgba(255, 214, 127, 0.86)';
    context.fillRect(x - 3, y - 7, 6, 14);
  }

  context.globalCompositeOperation = 'soft-light';
  for (let y = 0; y < height; y += 3) {
    context.fillStyle = `rgba(255, 244, 218, ${0.018 + ((y % 9) * 0.002)})`;
    context.fillRect(0, y, width, 1);
  }
  context.globalCompositeOperation = 'source-over';

  const vignette = context.createRadialGradient(width * 0.5, height * 0.48, width * 0.2, width * 0.5, height * 0.5, width * 0.74);
  vignette.addColorStop(0, 'rgba(255, 255, 255, 0)');
  vignette.addColorStop(0.62, 'rgba(7, 16, 33, 0.08)');
  vignette.addColorStop(1, 'rgba(2, 6, 23, 0.5)');
  context.fillStyle = vignette;
  context.fillRect(0, 0, width, height);
}

function applyRoyalAnimationFinish(context, width, height) {
  context.save();
  context.globalCompositeOperation = 'screen';
  const warmBloom = context.createRadialGradient(width * 0.5, height * 0.62, width * 0.04, width * 0.5, height * 0.62, width * 0.64);
  warmBloom.addColorStop(0, 'rgba(255, 206, 125, 0.22)');
  warmBloom.addColorStop(0.46, 'rgba(246, 176, 103, 0.08)');
  warmBloom.addColorStop(1, 'rgba(246, 176, 103, 0)');
  context.fillStyle = warmBloom;
  context.fillRect(0, 0, width, height);
  context.restore();

  context.save();
  context.globalCompositeOperation = 'multiply';
  const contrastWash = context.createLinearGradient(0, 0, 0, height);
  contrastWash.addColorStop(0, 'rgba(12, 22, 41, 0.04)');
  contrastWash.addColorStop(0.56, 'rgba(62, 30, 47, 0.04)');
  contrastWash.addColorStop(1, 'rgba(2, 6, 23, 0.18)');
  context.fillStyle = contrastWash;
  context.fillRect(0, 0, width, height);
  context.restore();
}

function drawNightBackground(context, width, height) {
  drawRoyalPalaceNightBackground(context, width, height);
  applyRoyalAnimationFinish(context, width, height);
}

function drawForegroundShadow(context, maskCanvas, x, y, width, height) {
  context.save();
  context.globalAlpha = 0.26;
  context.filter = 'blur(14px)';
  context.drawImage(maskCanvas, x + 6, y + 14, width, height);
  context.restore();
}

function drawNightSubjectGlow(context, maskCanvas, x, y, width, height) {
  context.save();
  context.globalAlpha = 0.34;
  context.filter = 'blur(18px)';
  context.drawImage(maskCanvas, x, y, width, height);
  context.globalCompositeOperation = 'source-in';
  const glow = context.createLinearGradient(x, y, x, y + height);
  glow.addColorStop(0, 'rgba(255, 222, 163, 0.95)');
  glow.addColorStop(1, 'rgba(120, 168, 255, 0.44)');
  context.fillStyle = glow;
  context.fillRect(x, y, width, height);
  context.restore();
}

function drawMinhwaMotif(context, x, y, width, height) {
  context.save();
  context.strokeStyle = 'rgba(180, 83, 9, 0.34)';
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(x + 28, y + height - 42);
  context.quadraticCurveTo(x + 96, y + height - 116, x + 164, y + height - 126);
  context.stroke();
  for (let index = 0; index < 4; index += 1) {
    const centerX = x + 138 + (index * 22);
    const centerY = y + height - 130 + ((index % 2) * 6);
    context.beginPath();
    context.arc(centerX, centerY, 10, 0, Math.PI * 2);
    context.stroke();
  }
  context.restore();
}

async function createJoseonPhotoCard(sourceImage, style = aiPhotoSelectedStyle) {
  const config = getAiPhotoStyleConfig(style);
  const maxWidth = 840;
  const scale = Math.min(1, maxWidth / Math.max(sourceImage.naturalWidth || sourceImage.width, 1));
  const imageWidth = Math.round((sourceImage.naturalWidth || sourceImage.width) * scale);
  const imageHeight = Math.round((sourceImage.naturalHeight || sourceImage.height) * scale);
  const cardWidth = imageWidth + 112;
  const cardHeight = imageHeight + 188;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const tempCanvas = document.createElement('canvas');
  const tempContext = tempCanvas.getContext('2d', { willReadFrequently: true });

  canvas.width = cardWidth;
  canvas.height = cardHeight;
  tempCanvas.width = imageWidth;
  tempCanvas.height = imageHeight;

  const background = context.createLinearGradient(0, 0, cardWidth, cardHeight);
  background.addColorStop(0, config.paper);
  background.addColorStop(1, '#f8f3eb');
  context.fillStyle = background;
  context.fillRect(0, 0, cardWidth, cardHeight);

  const painterlyCanvas = createPaintedPhotoCanvas(sourceImage, config, imageWidth, imageHeight, {
    inkHeavy: style === 'ink'
  });

  let transformNote = ft(`photo.transformed.${style}`, ft('photo.done', 'Your Joseon-style card is ready to download.'));
  let usedFallback = false;

  if (style === 'night') {
    try {
      const segmentedSubject = await segmentAiPhotoSubject(sourceImage, imageWidth, imageHeight);
      if (!segmentedSubject?.maskCanvas) throw new Error('Subject mask unavailable');
      const maskedSubject = createMaskedCanvas(painterlyCanvas, segmentedSubject.maskCanvas, imageWidth, imageHeight);
      drawNightBackground(tempContext, imageWidth, imageHeight);
      drawForegroundShadow(tempContext, segmentedSubject.maskCanvas, 0, 0, imageWidth, imageHeight);
      drawNightSubjectGlow(tempContext, segmentedSubject.maskCanvas, 0, 0, imageWidth, imageHeight);
      tempContext.drawImage(maskedSubject, 0, 0);
      applyRoyalAnimationFinish(tempContext, imageWidth, imageHeight);
    } catch (error) {
      usedFallback = true;
      const fallbackMask = createFallbackPortraitMask(imageWidth, imageHeight);
      const maskedSubject = createMaskedCanvas(painterlyCanvas, fallbackMask, imageWidth, imageHeight);
      drawNightBackground(tempContext, imageWidth, imageHeight);
      drawForegroundShadow(tempContext, fallbackMask, 0, 0, imageWidth, imageHeight);
      drawNightSubjectGlow(tempContext, fallbackMask, 0, 0, imageWidth, imageHeight);
      tempContext.drawImage(maskedSubject, 0, 0);
      applyRoyalAnimationFinish(tempContext, imageWidth, imageHeight);
      transformNote = `${transformNote} ${ft('photo.fallback', 'The segmentation model could not load, so MARU used a browser-side portrait mask with the generated royal night background.')}`;
    }
  } else {
    tempContext.drawImage(painterlyCanvas, 0, 0);
    if (style === 'minhwa') {
      tempContext.globalCompositeOperation = 'screen';
      const wash = tempContext.createRadialGradient(imageWidth * 0.16, imageHeight * 0.24, 20, imageWidth * 0.16, imageHeight * 0.24, imageWidth * 0.88);
      wash.addColorStop(0, 'rgba(255, 242, 211, 0.42)');
      wash.addColorStop(1, 'rgba(248, 221, 173, 0.08)');
      tempContext.fillStyle = wash;
      tempContext.fillRect(0, 0, imageWidth, imageHeight);
      tempContext.globalCompositeOperation = 'source-over';
    }
  }

  drawRoundedRectPath(context, 26, 26, cardWidth - 52, cardHeight - 52, 28);
  context.fillStyle = 'rgba(255,255,255,0.26)';
  context.fill();
  context.lineWidth = 2.5;
  context.strokeStyle = config.border;
  context.stroke();

  drawRoundedRectPath(context, 46, 58, imageWidth + 20, imageHeight + 20, 24);
  context.fillStyle = 'rgba(255,255,255,0.48)';
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = config.accent;
  context.stroke();

  context.drawImage(tempCanvas, 56, 68);
  if (style === 'minhwa') drawMinhwaMotif(context, 56, 68, imageWidth, imageHeight);

  context.strokeStyle = config.border;
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(56, imageHeight + 88);
  context.lineTo(cardWidth - 56, imageHeight + 88);
  context.stroke();

  context.fillStyle = config.border;
  context.font = 'bold 30px Georgia, serif';
  context.fillText('MARU', 56, imageHeight + 126);
  context.font = '18px Georgia, serif';
  context.fillText(style === 'ink' ? 'Ink Heritage Postcard' : style === 'night' ? 'Palace Night Card' : 'Minhwa Heritage Card', 56, imageHeight + 154);

  context.strokeStyle = config.accent;
  context.lineWidth = 1.2;
  context.beginPath();
  context.arc(cardWidth - 76, 76, 20, 0, Math.PI * 2);
  context.stroke();
  context.beginPath();
  context.moveTo(cardWidth - 108, 76);
  context.lineTo(cardWidth - 44, 76);
  context.moveTo(cardWidth - 76, 44);
  context.lineTo(cardWidth - 76, 108);
  context.stroke();

  return {
    canvas,
    transformNote,
    usedFallback
  };
}

function bindAiPhotoDemo() {
  const root = qs('[data-ai-photo-demo]');
  if (!root || root.dataset.aiPhotoBound === 'true') return;
  root.dataset.aiPhotoBound = 'true';

  const fileInput = qs('[data-ai-photo-file]', root);
  const previewImage = qs('[data-ai-photo-preview]', root);
  const previewPlaceholder = qs('[data-ai-photo-placeholder]', root);
  const actionButton = qs('[data-ai-photo-action]', root);
  const status = qs('[data-ai-photo-status]', root);
  const result = qs('[data-ai-photo-result]', root);
  const toolbar = qs('[data-ai-photo-toolbar]', root);
  const downloadButton = qs('[data-ai-photo-download]', root);
  let previewUrl = '';

  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  const resetResult = () => {
    if (result) {
      result.innerHTML = '';
      result.classList.add('is-hidden');
    }
    if (toolbar) toolbar.classList.add('is-hidden');
    aiPhotoDownloadUrl = '';
  };

  setText('[data-ai-photo-action]', ft('photo.action', 'Create Joseon Card'));
  setText('[data-ai-photo-download]', ft('photo.download', 'Download Card'));
  setStatus(ft('photo.ready', 'Choose an image and style to generate a browser-side card.'));

  qsa('[data-ai-photo-style]', root).forEach((button) => {
    button.textContent = ft(`photo.styles.${button.dataset.aiPhotoStyle}`, button.textContent);
    button.addEventListener('click', () => {
      aiPhotoSelectedStyle = button.dataset.aiPhotoStyle || 'minhwa';
      qsa('[data-ai-photo-style]', root).forEach((item) => item.classList.toggle('is-active', item === button));
      setStatus(ft('photo.ready', 'Choose an image and style to generate a browser-side card.'));
    });
  });

  fileInput?.addEventListener('change', () => {
    const file = fileInput.files?.[0];
    resetResult();

    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = '';

    if (!file) {
      if (previewImage) {
        previewImage.removeAttribute('src');
        previewImage.classList.add('is-hidden');
      }
      if (previewPlaceholder) previewPlaceholder.classList.remove('is-hidden');
      setStatus(ft('photo.ready', 'Choose an image and style to generate a browser-side card.'));
      return;
    }

    previewUrl = URL.createObjectURL(file);
    if (previewImage) {
      previewImage.src = previewUrl;
      previewImage.alt = file.name || 'Uploaded preview';
      previewImage.classList.remove('is-hidden');
    }
    if (previewPlaceholder) previewPlaceholder.classList.add('is-hidden');
    setStatus(`${file.name || 'Selected image'} · ${ft('photo.ready', 'Choose an image and style to generate a browser-side card.')}`);
  });

  actionButton?.addEventListener('click', () => {
    if (!previewUrl) {
      setStatus(ft('photo.empty', 'Choose an image first.'));
      return;
    }

    const image = new Image();
    image.onload = async () => {
      if (!result) return;
      actionButton.disabled = true;
      actionButton.textContent = ft('photo.working', 'Applying a Joseon-inspired card effect in the browser.');
      setStatus(aiPhotoSelectedStyle === 'night'
        ? ft('photo.loadingModel', 'Preparing subject separation and painterly rendering.')
        : ft('photo.working', 'Applying a Joseon-inspired card effect in the browser.'));

      try {
        const { canvas, transformNote, usedFallback } = await createJoseonPhotoCard(image, aiPhotoSelectedStyle);
        result.innerHTML = `
          <article class="ai-photo-result-card ai-photo-canvas-card">
            <div class="ai-photo-canvas-host"></div>
            <div class="ai-photo-result-copy">
              <strong>${escapeHtml(ft(`photo.styles.${aiPhotoSelectedStyle}`, aiPhotoSelectedStyle))}</strong>
              <p>${escapeHtml(transformNote || ft('photo.done', 'Your Joseon-style card is ready to download.'))}</p>
              <small>${escapeHtml(ft('photo.privacy', 'Everything stays in the browser, so you can save the result without uploading the image.'))}</small>
            </div>
          </article>
        `;
        const host = qs('.ai-photo-canvas-host', result);
        host?.appendChild(canvas);
        result.classList.remove('is-hidden');
        if (toolbar) toolbar.classList.remove('is-hidden');
        aiPhotoDownloadUrl = canvas.toDataURL('image/png');
        setStatus(usedFallback ? transformNote : ft('photo.done', 'Your Joseon-style card is ready to download.'));
      } catch (error) {
        setStatus(ft('photo.fallback', 'The segmentation model could not load, so MARU used a browser-side portrait mask with the generated royal night background.'));
      } finally {
        actionButton.disabled = false;
        actionButton.textContent = ft('photo.action', 'Create Joseon Card');
      }
    };
    image.src = previewUrl;
  });

  downloadButton?.addEventListener('click', () => {
    if (!aiPhotoDownloadUrl) {
      setStatus(ft('photo.empty', 'Choose an image first.'));
      return;
    }
    const anchor = document.createElement('a');
    anchor.href = aiPhotoDownloadUrl;
    anchor.download = `maru-joseon-card-${aiPhotoSelectedStyle}.png`;
    anchor.click();
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
      const current = normalizeLanguage(storageGet(STORAGE_KEYS.language, 'ko'));
      const currentIndex = order.indexOf(current);
      const next = order[((currentIndex >= 0 ? currentIndex : 0) + 1) % order.length];
      setLanguage(next);
      showToast(`${LANGUAGES[next]} ${t('common.selectedLanguage')}`);
    });
  });

  document.addEventListener('click', async (event) => {
    const installButton = event.target.closest('[data-install-trigger]');
    if (installButton) {
      triggerInstallPrompt();
      return;
    }

    const nearbyLocationButton = event.target.closest('[data-nearby-location-button]');
    if (nearbyLocationButton) {
      requestNearbyLocation();
      return;
    }

    const mapServiceButton = event.target.closest('[data-map-service]');
    if (mapServiceButton) {
      setMapService(mapServiceButton.dataset.mapService, { toast: true });
    }

    const selectRouteButton = event.target.closest('[data-select-route]');
    if (selectRouteButton) {
      const route = saveSelectedRoute(selectRouteButton.dataset.selectRoute);
      showToast(t('common.savedRouteToast'));
      window.location.href = `route-detail.html?id=${encodeURIComponent(route.id)}`;
    }

    const routeLink = event.target.closest('[data-route-link], [data-map-link]');
    if (routeLink) {
      saveSelectedRoute(routeLink.dataset.routeLink || routeLink.dataset.mapLink);
    }

    const routeActionButton = event.target.closest('[data-route-action="save-current"], [data-route-action="passport-current"]');
    if (routeActionButton) {
      const route = getRouteFromUrlOrStorage();
      routeActionButton.disabled = true;
      try {
        await saveRouteToPassport(route);
        showToast(t('common.passportToast'));
        renderPassport();
        renderSavedBundles();
      } finally {
        routeActionButton.disabled = false;
      }
    }

    const saveBundleButton = event.target.closest('[data-save-bundle]');
    if (saveBundleButton) {
      const route = findRouteById(saveBundleButton.dataset.saveBundleRoute);
      const bundle = getRouteBundles(route).find((item) => item.id === saveBundleButton.dataset.saveBundle);
      if (bundle) {
        saveBundlePlan(bundle);
        renderSavedBundles();
        showToast(ft('bundle.saved', 'The cultural event bundle was saved.'));
      }
    }

    const supportJumpButton = event.target.closest('[data-support-jump]');
    if (supportJumpButton) {
      const target = qs(`[data-support-card="${supportJumpButton.dataset.supportJump}"]`) || qs('#traveler-support');
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const toastButton = event.target.closest('[data-toast]');
    if (toastButton) showToast(toastButton.dataset.toast);
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
    const preference = saveUserPreference();
    const topRoute = getTopRecommendedRoute(preference);
    if (topRoute) storageSet(STORAGE_KEYS.selectedRoute, topRoute.id);
    window.location.href = 'routes.html';
  });

}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;
  if (!/^https?:$/.test(window.location.protocol)) return;
  navigator.serviceWorker.register('service-worker.js').catch(() => {});
}

async function initialize() {
  startTimeImageRotation();
  setLanguage(storageGet(STORAGE_KEYS.language, 'ko'), { rerender: false });
  initInstallPromptEvents();
  await loadDynamicAppData();
  await loadCultureResources();
  await loadCourseData();
  await refreshAuthSession();
  renderLocalizedContent();
  markActiveBottomTab();
  bindMobileInteractions();
  bindAuthPage();
  bindAiPhotoDemo();
  mountAriChat();
  registerServiceWorker();
}

initialize();
