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
      KR: '산업부 공공데이터 기반 K-공예·디자인 탐색',
      EN: 'Industrial Public-Data K-Craft and Design Guide',
      JP: '産業公共データベースのK-工芸・デザインガイド',
      CN: '基于产业公共数据的 K-工艺与设计向导'
    },
    description: {
      KR: '외국인 방문객이 한국의 공예·디자인 브랜드와 체험을 발견하고 방문·구매 동선까지 연결하도록 돕습니다.',
      EN: 'Helps global visitors discover Korean craft and design brands, then connect those discoveries to visits and purchases.',
      JP: '外国人訪問者が韓国の工芸・デザインブランドと体験を見つけ、訪問と購入動線までつなげられるよう助けます。',
      CN: '帮助外国访客发现韩国工艺与设计品牌和体验，并进一步连接到访问与购买动线。'
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
      KR: '브랜드와 체험을 연결하는 K-디자인 가이드',
      EN: 'A K-Design Guide Linking Brands and Experiences',
      JP: 'ブランドと体験をつなぐK-デザインガイド',
      CN: '连接品牌与体验的 K-设计向导'
    },
    description: {
      KR: '공공데이터 해설, 전시 동선, 로컬 브랜드 방문 흐름을 저녁 일정에 맞춰 자연스럽게 이어줍니다.',
      EN: 'Connects public-data explanation, exhibition flow, and local-brand stops into an easy evening route.',
      JP: '公共データの解説、展示動線、ローカルブランド訪問の流れを夕方の 일정에 맞게自然につなげます。',
      CN: '把公共数据解说、展览动线与本地品牌访问流自然地连接成适合傍晚的路线。'
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
      KR: '밤에도 이어지는 로컬 브랜드·디자인 동선',
      EN: 'Night Routes for Local Brands and Design',
      JP: '夜にも続くローカルブランドとデザイン動線',
      CN: '夜晚继续延伸的本地品牌与设计动线'
    },
    description: {
      KR: '야간 전시, 쇼룸, 구매 동선을 통해 공공데이터 기반 추천이 하루 일정 끝까지 이어지도록 보여줍니다.',
      EN: 'Shows how public-data-based recommendations can continue through night exhibitions, showrooms, and late buying stops.',
      JP: '夜間展示、ショールーム、購入動線まで公共データベースの推薦が続くことを見せます。',
      CN: '展示夜间展览、展厅与购买动线如何把公共数据型推荐延续到一天结束。'
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
아리는 마루 앱 안에서 K-공예·디자인 코스와 브랜드 발견 동선을 안내하는 AI 가이드다.
사용자에게 앱 이름을 말해야 할 때는 마루 또는 MARU라고 부른다.
ARI를 앱 이름처럼 말하지 않는다.

역할:
- 한국의 공예·디자인 브랜드, 전시, 공예 체험, 로컬 스토어, 구매 동선을 친절하게 설명한다.
- 외국인 방문객도 이해하기 쉬운 말로 설명한다.
- 사용자의 언어 선택에 맞춰 가능한 범위에서 답한다.
- 현재 앱의 추천 코스와 장소 데이터를 바탕으로 답한다.
- 짧은 인사, 감사, 망설임 같은 일상 대화에는 자연스럽게 반응하되 다시 여행 도움으로 부드럽게 연결한다.

중요 원칙:
- DB나 앱 데이터에 없는 장소, 운영시간, 요금, 예약 정보를 확정적으로 말하지 않는다.
- 모르는 정보는 공식 출처 확인이 필요하다고 말한다.
- 길찾기는 사용자가 선택한 지도 서비스 버튼을 사용하라고 안내한다.
- 응급상황, 분실물, 관광불편은 여행자 지원 메뉴를 안내한다.
- AI는 사실을 새로 만들어내는 것이 아니라, 산업부 공공데이터와 검증된 앱 데이터를 쉽게 설명하는 역할이다.
`;

const ARI_LLM_SYSTEM_PROMPT = `
You are ARI, the craft-and-design guide inside the MARU app.
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
  '처음 서울 왔는데 공예·디자인 코스는 어디부터 가면 좋아?',
  '이 브랜드 발견 코스가 왜 추천됐어?',
  '비 오는 날엔 어떤 실내 코스가 좋아?',
  '선물 사기 좋은 코스도 있어?',
  '영어로 설명하기 쉬운 장소가 어디야?'
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
const MARU_API_PATHS = {
  courses: '/api/courses',
  places: '/api/places',
  festivals: '/api/festivals',
  heritage: '/api/heritage',
  publicDataSources: '/api/public-data-sources',
  savedRoutes: '/api/saved-routes',
  analyticsEngagement: '/api/analytics/engagement',
  analyticsSummary: '/api/analytics/summary'
};
const ANALYTICS_RECENT_WINDOW_HOURS = 6;
const ANALYTICS_LOCAL_EVENT_LIMIT = 480;
const ANALYTICS_ROUTE_VIEW_SESSION_KEY = 'maruRouteDetailViewed';
const ANALYTICS_ACTION_WEIGHTS = Object.freeze({
  detail_view: 1,
  visit_intent: 2.6,
  save: 4.2,
  recommend: 5.8
});
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
let analyticsSummaryCache = null;
let analyticsSummaryPromise = null;

// Contest-oriented fallback seed data only. The primary static datasets are data/courses.json and ari_culture_resources_appjs.json.
let CULTURE_RESOURCES = [
  {
    id: 'seoul-museum-of-craft-art',
    nameKo: '서울공예박물관',
    nameEn: 'Seoul Museum of Craft Art',
    region: '서울',
    district: '종로구',
    category: '공예 박물관',
    categoryEn: 'Craft museum',
    address: '서울특별시 종로구 율곡로3길 4',
    latitude: 37.576371,
    longitude: 126.983395,
    feeType: '무료',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내',
    indoorOutdoorEn: 'Indoor',
    walkingLevel: '낮음',
    walkingLevelEn: 'Low',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 5,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '기획전과 체험 프로그램은 일정별 확인이 필요합니다.',
    sourceName: '서울공예박물관 공식 안내 / 한국디자인진흥원 공공데이터 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 94,
    traditionScore: 88,
    foreignerScore: 91,
    hiddenScore: 3,
    photoSpotScore: 4,
    rainyDayScore: 5,
    globalTags: ['craft', 'design', 'museum', 'indoor exhibition', 'first-time-visitor'],
    aiSimpleExplanation: '한국 공예 재료와 생활 문화가 오늘의 디자인 감각으로 이어지는 흐름을 이해하기 좋은 박물관입니다.',
    aiWhyItMatters: '산업부 공공데이터가 설명하는 디자인 상품성과 현장 공예 해설을 연결하는 시작점 역할을 합니다.',
    aiVisitTip: '기획전 주제와 체험 프로그램 유무를 먼저 확인하면 추천 설명이 더 자연스럽습니다.',
    imageUrl: '',
    imageAlt: '서울공예박물관 공예·디자인 가이드 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A refined editorial illustration of a Korean craft museum interior with materials, objects, and calm exhibition lighting, no text, no logos.'
  },
  {
    id: 'kcdf-gallery',
    nameKo: 'KCDF 갤러리',
    nameEn: 'KCDF Gallery',
    region: '서울',
    district: '종로구',
    category: '공예 갤러리',
    categoryEn: 'Craft gallery',
    address: '서울특별시 종로구 인사동11길 8',
    latitude: 37.57374,
    longitude: 126.98601,
    feeType: '무료',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내',
    indoorOutdoorEn: 'Indoor',
    walkingLevel: '낮음',
    walkingLevelEn: 'Low',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '전시 교체 주기가 빨라 현재 전시 구성을 확인하는 편이 좋습니다.',
    sourceName: 'KCDF 공식 안내 / 한국디자인진흥원_글로벌생활명품 선정기업 및 제품정보 목록',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 91,
    traditionScore: 86,
    foreignerScore: 88,
    hiddenScore: 4,
    photoSpotScore: 3,
    rainyDayScore: 5,
    globalTags: ['craft', 'gallery', 'brand discovery', 'gift', 'indoor'],
    aiSimpleExplanation: '공예 작가성과 상품성을 함께 보여주는 전시 공간으로 브랜드 설명에 유리합니다.',
    aiWhyItMatters: '한국디자인진흥원 데이터가 말하는 공예 상품성을 방문객이 현장에서 체감하도록 도와줍니다.',
    aiVisitTip: '선물 추천이 목적이면 작품 감상보다 상품 중심 섹션을 먼저 보는 편이 효율적입니다.',
    imageUrl: '',
    imageAlt: 'KCDF 갤러리 공예 브랜드 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'An elegant craft gallery illustration with Korean objects, display shelves, and refined neutral lighting, no text.'
  },
  {
    id: 'anyoung-insadong',
    nameKo: '안녕인사동',
    nameEn: 'Anyoung Insadong',
    region: '서울',
    district: '종로구',
    category: '브랜드 복합공간',
    categoryEn: 'Brand complex',
    address: '서울특별시 종로구 인사동길 49',
    latitude: 37.57453,
    longitude: 126.98346,
    feeType: '선택 지출',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내외',
    indoorOutdoorEn: 'Indoor/outdoor',
    walkingLevel: '낮음',
    walkingLevelEn: 'Low',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '선물 구매가 목적이라면 마지막 동선에 두는 편이 짐 관리에 유리합니다.',
    sourceName: '현장 운영 정보 / 대한무역투자진흥공사_해외시장뉴스 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 89,
    traditionScore: 74,
    foreignerScore: 87,
    hiddenScore: 3,
    photoSpotScore: 4,
    rainyDayScore: 4,
    globalTags: ['local brand', 'shopping', 'gift', 'lifestyle', 'design goods'],
    aiSimpleExplanation: '전통 소재를 현대 취향으로 풀어낸 브랜드와 라이프스타일 상품을 함께 볼 수 있는 복합 공간입니다.',
    aiWhyItMatters: '방문이 실제 구매로 이어지는 흐름을 보여주기 좋아 공모전형 서비스 가치 설명에 유리합니다.',
    aiVisitTip: '예산이 적다면 둘러보기 중심으로, 예산이 있으면 마지막에 선물 구매를 연결하는 식으로 설명하세요.',
    imageUrl: '',
    imageAlt: '안녕인사동 로컬 브랜드 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A contemporary Korean lifestyle mall illustration with gift items, warm storefronts, and curated local-brand mood, no text.'
  },
  {
    id: 'mmca-seoul',
    nameKo: '국립현대미술관 서울',
    nameEn: 'MMCA Seoul',
    region: '서울',
    district: '종로구',
    category: '디자인 전시관',
    categoryEn: 'Design museum',
    address: '서울특별시 종로구 삼청로 30',
    latitude: 37.57863,
    longitude: 126.9806,
    feeType: '유료 가능',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내',
    indoorOutdoorEn: 'Indoor',
    walkingLevel: '낮음',
    walkingLevelEn: 'Low',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 5,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '기획전 티켓과 현재 전시 주제는 방문 전 확인이 필요합니다.',
    sourceName: '국립현대미술관 공식 안내 / 대한무역투자진흥공사_해외시장뉴스 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 92,
    traditionScore: 72,
    foreignerScore: 90,
    hiddenScore: 2,
    photoSpotScore: 4,
    rainyDayScore: 5,
    globalTags: ['design exhibition', 'museum', 'indoor', 'visual culture', 'brand story'],
    aiSimpleExplanation: '현대 전시 연출과 시각문화 흐름을 통해 한국 디자인의 현재형을 읽기 좋은 공간입니다.',
    aiWhyItMatters: '공예에서 시작한 설명을 현대 디자인 감각으로 확장할 수 있어 K-디자인 탐색 서비스 정체성을 강화합니다.',
    aiVisitTip: '전시가 많을 때는 한두 개 전시에 집중해 설명하는 편이 오히려 이해가 쉽습니다.',
    imageUrl: '',
    imageAlt: '국립현대미술관 서울 디자인 전시 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A sleek modern museum illustration with Korean design exhibition lighting and calm visitors, no text.'
  },
  {
    id: 'bukchon-hanok-village-design',
    nameKo: '북촌한옥마을',
    nameEn: 'Bukchon Hanok Village',
    region: '서울',
    district: '종로구',
    category: '생활 디자인 거리',
    categoryEn: 'Lifestyle design street',
    address: '서울특별시 종로구 계동길 일대',
    latitude: 37.582604,
    longitude: 126.983998,
    feeType: '무료',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실외',
    indoorOutdoorEn: 'Outdoor',
    walkingLevel: '보통',
    walkingLevelEn: 'Moderate',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '주민 생활 공간이므로 조용한 이동이 필요합니다.',
    sourceName: '서울 관광 정보 / 한국디자인진흥원_산업디자인전문회사 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 86,
    traditionScore: 84,
    foreignerScore: 86,
    hiddenScore: 3,
    photoSpotScore: 5,
    rainyDayScore: 2,
    globalTags: ['hanok', 'lifestyle design', 'architecture', 'photo-friendly', 'walking'],
    aiSimpleExplanation: '건축 재료와 골목 스케일을 통해 한국 생활 디자인의 분위기를 체감할 수 있는 거리입니다.',
    aiWhyItMatters: '단순 관광 포인트가 아니라 공간과 생활 감각이 어떻게 디자인 언어로 읽히는지 보여주는 역할을 합니다.',
    aiVisitTip: '주민 공간이어서 짧고 조용한 동선으로 보는 편이 가장 적절합니다.',
    imageUrl: '',
    imageAlt: '북촌한옥마을 생활 디자인 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A warm hanok alley illustration focused on material texture, rooftops, and residential calm, no text.'
  },
  {
    id: 'ssamziegil',
    nameKo: '쌈지길',
    nameEn: 'Ssamziegil',
    region: '서울',
    district: '종로구',
    category: '디자인 쇼핑몰',
    categoryEn: 'Design mall',
    address: '서울특별시 종로구 인사동길 44',
    latitude: 37.57403,
    longitude: 126.98527,
    feeType: '선택 지출',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내외',
    indoorOutdoorEn: 'Indoor/outdoor',
    walkingLevel: '낮음',
    walkingLevelEn: 'Low',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '층별 매장 구성은 변동 가능하므로 방문 전 안내가 필요합니다.',
    sourceName: '현장 운영 정보 / 한국디자인진흥원_우수디자인전문회사 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 88,
    traditionScore: 75,
    foreignerScore: 86,
    hiddenScore: 3,
    photoSpotScore: 4,
    rainyDayScore: 4,
    globalTags: ['shopping', 'gift', 'craft goods', 'local brand', 'design mall'],
    aiSimpleExplanation: '공예 상품과 개성 있는 선물 아이템을 비교하기 좋은 대표 구매 스팟입니다.',
    aiWhyItMatters: '공공데이터 기반 브랜드 설명이 현장 구매 행동으로 이어지는 지점을 보여줍니다.',
    aiVisitTip: '시간이 짧으면 전체를 다 보기보다 관심 카테고리 층을 먼저 정해 보는 편이 좋습니다.',
    imageUrl: '',
    imageAlt: '쌈지길 공예 쇼핑 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A layered Korean design shopping complex illustration with ramps, gift shops, and craft goods, no text.'
  },
  {
    id: 'seongsu-yeonbang',
    nameKo: '성수연방',
    nameEn: 'Seongsu Yeonbang',
    region: '서울',
    district: '성동구',
    category: '로컬 브랜드 복합공간',
    categoryEn: 'Local-brand complex',
    address: '서울특별시 성동구 아차산로5길 10',
    latitude: 37.54152,
    longitude: 127.05697,
    feeType: '선택 지출',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내외',
    indoorOutdoorEn: 'Indoor/outdoor',
    walkingLevel: '보통',
    walkingLevelEn: 'Moderate',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '공간 내 매장 교체가 있을 수 있어 방문 전 기본 구성을 확인하세요.',
    sourceName: '현장 운영 정보 / 대한무역투자진흥공사_해외시장뉴스 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 90,
    traditionScore: 68,
    foreignerScore: 87,
    hiddenScore: 4,
    photoSpotScore: 5,
    rainyDayScore: 3,
    globalTags: ['local brand', 'shopping', 'lifestyle', 'seongsu', 'photo-friendly'],
    aiSimpleExplanation: '로컬 브랜드와 라이프스타일 상점이 밀집해 있어 외국인 취향 탐색에 유리한 복합 공간입니다.',
    aiWhyItMatters: 'KOTRA 데이터가 설명하는 글로벌 수요 가능성을 서울의 현재형 브랜드 거리 경험과 연결하는 데 유리합니다.',
    aiVisitTip: '브랜드 종류가 많으니 예산과 취향을 먼저 좁혀 설명하면 훨씬 자연스럽습니다.',
    imageUrl: '',
    imageAlt: '성수연방 로컬 브랜드 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A stylish local-brand complex illustration in Seongsu with brick textures, curated stores, and calm people, no text.'
  },
  {
    id: 'lcdc-seoul',
    nameKo: 'LCDC SEOUL',
    nameEn: 'LCDC SEOUL',
    region: '서울',
    district: '성동구',
    category: '디자인 쇼룸',
    categoryEn: 'Design showroom',
    address: '서울특별시 성동구 연무장17길 10',
    latitude: 37.54158,
    longitude: 127.06146,
    feeType: '무료',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내',
    indoorOutdoorEn: 'Indoor',
    walkingLevel: '낮음',
    walkingLevelEn: 'Low',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '공간 연출과 전시성 비중이 높아 구매보다 설명 중심으로 접근하는 편이 좋습니다.',
    sourceName: '현장 운영 정보 / 한국디자인진흥원_우수디자인전문회사 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 91,
    traditionScore: 64,
    foreignerScore: 86,
    hiddenScore: 4,
    photoSpotScore: 5,
    rainyDayScore: 5,
    globalTags: ['design showroom', 'local brand', 'seongsu', 'indoor exhibition', 'taste'],
    aiSimpleExplanation: '브랜드 편집과 공간 연출을 함께 보여줘 오늘의 한국 취향을 설명하기 좋은 쇼룸입니다.',
    aiWhyItMatters: '단순 쇼핑 공간이 아니라 브랜드 감도와 공간 연출이 함께 작동하는 K-디자인 설명 지점입니다.',
    aiVisitTip: '빠른 구매보다 브랜드 맥락과 공간 연출을 같이 풀어주는 식으로 안내하는 편이 좋습니다.',
    imageUrl: '',
    imageAlt: 'LCDC SEOUL 디자인 쇼룸 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A curated design showroom illustration with minimalist interiors, objects, and modern Korean taste, no text.'
  },
  {
    id: 'ddp',
    nameKo: '동대문디자인플라자',
    nameEn: 'Dongdaemun Design Plaza',
    region: '서울',
    district: '중구',
    category: '디자인 랜드마크',
    categoryEn: 'Design landmark',
    address: '서울특별시 중구 을지로 281',
    latitude: 37.56719,
    longitude: 127.01049,
    feeType: '전시 선택',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내외',
    indoorOutdoorEn: 'Indoor/outdoor',
    walkingLevel: '낮음~보통',
    walkingLevelEn: 'Low to moderate',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 5,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '전시 일정과 야간 개방 구역은 방문 전 확인이 필요합니다.',
    sourceName: 'DDP 공식 안내 / 한국디자인진흥원 공공데이터 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 95,
    traditionScore: 62,
    foreignerScore: 92,
    hiddenScore: 2,
    photoSpotScore: 5,
    rainyDayScore: 4,
    globalTags: ['design landmark', 'night mood', 'exhibition', 'urban design', 'shopping'],
    aiSimpleExplanation: '서울 디자인 이미지를 가장 직관적으로 보여주는 대표 랜드마크이자 야간 코스의 중심입니다.',
    aiWhyItMatters: '산업부 공공데이터 기반 설명을 도시 디자인 이미지와 연결해 발표 임팩트를 높여줍니다.',
    aiVisitTip: '전시가 없더라도 외관과 광장 동선만으로 설명력이 있으니 야간 시작점으로 안정적입니다.',
    imageUrl: '',
    imageAlt: '동대문디자인플라자 야간 디자인 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A futuristic night illustration of DDP with curved architecture, soft glow, and urban design atmosphere, no text.'
  },
  {
    id: 'ddp-design-store',
    nameKo: 'DDP 디자인 스토어',
    nameEn: 'DDP Design Store',
    region: '서울',
    district: '중구',
    category: '디자인 스토어',
    categoryEn: 'Design store',
    address: '서울특별시 중구 을지로 281',
    latitude: 37.56719,
    longitude: 127.01049,
    feeType: '선택 지출',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실내',
    indoorOutdoorEn: 'Indoor',
    walkingLevel: '낮음',
    walkingLevelEn: 'Low',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '상품 구성과 팝업 여부는 시기별로 달라질 수 있습니다.',
    sourceName: 'DDP 공식 안내 / 한국디자인진흥원_글로벌생활명품 선정기업 및 제품정보 목록',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 90,
    traditionScore: 60,
    foreignerScore: 88,
    hiddenScore: 3,
    photoSpotScore: 3,
    rainyDayScore: 5,
    globalTags: ['design store', 'shopping', 'gift', 'indoor', 'brand discovery'],
    aiSimpleExplanation: '전시 감상 뒤 바로 디자인 상품을 비교해볼 수 있어 소비 전환 설명에 좋습니다.',
    aiWhyItMatters: '산업부 공공데이터가 설명하는 상품성과 현장 구매 선택지를 자연스럽게 연결합니다.',
    aiVisitTip: '기념품이 아니라 디자인 굿즈와 브랜드 편집 관점으로 설명하면 공모전 방향성과 더 잘 맞습니다.',
    imageUrl: '',
    imageAlt: 'DDP 디자인 스토어 상품 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A polished design store illustration with curated shelves, Korean design goods, and exhibition-like lighting, no text.'
  },
  {
    id: 'euljiro-lighting-street',
    nameKo: '을지로 조명거리',
    nameEn: 'Euljiro Lighting Street',
    region: '서울',
    district: '중구',
    category: '야간 디자인 거리',
    categoryEn: 'Night design street',
    address: '서울특별시 중구 을지로3가 272-1 일대',
    latitude: 37.5666,
    longitude: 126.9917,
    feeType: '무료',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실외',
    indoorOutdoorEn: 'Outdoor',
    walkingLevel: '보통',
    walkingLevelEn: 'Moderate',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: false,
    foreignerPopularityScore: 3,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '야간 이동 시간과 주변 영업 시간을 함께 보는 편이 좋습니다.',
    sourceName: '현장 공간 정보 / 대한무역투자진흥공사_해외시장뉴스 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 84,
    traditionScore: 58,
    foreignerScore: 82,
    hiddenScore: 5,
    photoSpotScore: 5,
    rainyDayScore: 1,
    globalTags: ['night', 'lighting', 'urban design', 'photo-friendly', 'walk'],
    aiSimpleExplanation: '빛과 산업 재료가 어우러져 서울의 도시 디자인 감각을 밤에 체감하기 좋은 거리입니다.',
    aiWhyItMatters: '전시와 상품만이 아니라 도시 무드까지 K-디자인 탐색의 일부로 확장해 보여줍니다.',
    aiVisitTip: '늦은 밤보다는 해 진 직후가 사진과 이동 모두에 가장 안정적입니다.',
    imageUrl: '',
    imageAlt: '을지로 조명거리 야간 무드 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A cinematic night street illustration with Korean lighting shops, glowing signs, and urban industrial mood, no text.'
  },
  {
    id: 'seongsu-yeonmujang-gil',
    nameKo: '성수 연무장길',
    nameEn: 'Seongsu Yeonmujang-gil',
    region: '서울',
    district: '성동구',
    category: '브랜드 거리',
    categoryEn: 'Brand street',
    address: '서울특별시 성동구 연무장길 일대',
    latitude: 37.5423,
    longitude: 127.0586,
    feeType: '무료',
    openingHours: '공식 확인 필요',
    indoorOutdoor: '실외',
    indoorOutdoorEn: 'Outdoor',
    walkingLevel: '보통',
    walkingLevelEn: 'Moderate',
    languageSupport: ['English'],
    englishAvailable: true,
    foreignerPopular: true,
    foreignerPopularityScore: 4,
    reservationRequired: false,
    reservationUrl: '',
    bookingNote: '주말 혼잡도가 높은 편이라 평일 오후가 더 설명하기 좋습니다.',
    sourceName: '성수 현장 정보 / 대한무역투자진흥공사_4대 소비재 국가별 수출금액 해석',
    sourceUrl: '',
    verifiedStatus: '정적 시드 데이터 / 공식 확인 필요',
    lastVerifiedAt: '2026-07-05',
    qualityScore: 87,
    traditionScore: 60,
    foreignerScore: 85,
    hiddenScore: 4,
    photoSpotScore: 5,
    rainyDayScore: 2,
    globalTags: ['local brand', 'street', 'shopping', 'photo-friendly', 'seongsu'],
    aiSimpleExplanation: '팝업과 편집숍이 이어지는 거리라 한국의 현재형 로컬 브랜드 분위기를 체감하기 좋습니다.',
    aiWhyItMatters: '지역 브랜드 노출과 방문 동선을 동시에 설명하기 좋아 공모전 문제 정의와 잘 맞습니다.',
    aiVisitTip: '브랜드 설명 위주 데모라면 주말보다 평일 오후가 훨씬 안정적입니다.',
    imageUrl: '',
    imageAlt: '성수 연무장길 로컬 브랜드 거리 이미지',
    imageType: 'ai_generated',
    imagePrompt: 'A trendy Seoul street illustration with pop-up stores, select shops, and modern local-brand atmosphere, no text.'
  }
];

// Contest-oriented fallback route data. Used only if JSON loading fails.
let ROUTE_DATA = [
  {
    id: 'craft-design-intro-course',
    title: 'K-공예·디자인 입문 코스',
    englishTitle: 'K-Craft and Design Intro Route',
    score: 95,
    time: '약 2~3시간',
    timeEn: '2 to 3 hours',
    walking: '낮음~보통',
    walkingEn: 'Low to moderate',
    fee: '무료 관람 + 유료 체험 선택 가능',
    feeEn: 'Free browsing with optional paid experiences',
    resourceIds: ['seoul-museum-of-craft-art', 'kcdf-gallery', 'anyoung-insadong'],
    flow: ['서울공예박물관', 'KCDF 갤러리', '안녕인사동'],
    reason: '산업통상부 공공데이터가 설명하는 공예 상품성과 디자인 브랜드 맥락을 이해하고, 마지막에 실제 구매 동선까지 연결하기 좋은 대표 코스입니다.',
    reasonEn: 'A strong entry route that turns industrial public-data context into a clear sequence of understanding, browsing, and possible buying.',
    summary: '마루의 핵심 정체성을 가장 쉽게 보여주는 공예·디자인 입문 코스입니다.',
    englishExplanation: 'The clearest first route for understanding MARU as a craft-and-design discovery service.',
    tags: ['공예 체험', '디자인 전시', '로컬 브랜드', '쇼핑'],
    target: ['공예 체험', '디자인 전시', '로컬 브랜드', '쇼핑'],
    theme: 'craft-design',
    recommendedTime: ['morning', 'afternoon'],
    convenience: {
      englishAvailable: true,
      foreignerPopular: true,
      reservationRequired: false,
      labels: ['공공데이터 기반', '구매 동선 연결', '실내 중심']
    },
    convenienceLabelsEn: ['Public-data based', 'Purchase-connected', 'Indoor-friendly'],
    imageUrl: 'assets/images/routes/course-craft.webp',
    imageAlt: 'K-공예·디자인 입문 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
    imagePrompt: 'A refined editorial travel illustration of a Korean craft and design route from museum to gallery to concept mall, no text.',
    tip: '발표에서는 공공데이터 설명이 실제 방문과 구매로 이어지는 구조를 보여주는 대표 코스로 소개하면 좋습니다.',
    tipEn: 'Use this in demos to show the clearest path from public-data explanation to real on-site exploration and buying.',
    source: 'Contest-oriented fallback seed built from industrial public-data storytelling and Seoul craft/design route structure.',
    keywords: [
      { name: 'Brand Discovery', description: '전시 감상에서 끝나지 않고 브랜드 발견과 구매로 이어지는 흐름입니다.' },
      { name: 'Public Data Story', description: '기업·상품·수요 데이터를 현장 방문 이유로 풀어내는 방식입니다.' }
    ]
  },
  {
    id: 'insadong-brand-buying-course',
    title: '인사동 브랜드 발견·구매 코스',
    englishTitle: 'Insadong Brand Discovery and Buying Route',
    score: 93,
    time: '약 2~3시간',
    timeEn: '2 to 3 hours',
    walking: '낮음',
    walkingEn: 'Low',
    fee: '무료 관람 + 구매 선택',
    feeEn: 'Free browsing with optional purchases',
    resourceIds: ['kcdf-gallery', 'ssamziegil', 'anyoung-insadong'],
    flow: ['KCDF 갤러리', '쌈지길', '안녕인사동'],
    reason: '전시 감상에서 끝나지 않고 선물 구매와 브랜드 발견까지 이어지는 외국인 소비 전환형 코스입니다.',
    reasonEn: 'A route built not just for viewing, but for turning brand discovery into real gift-oriented buying.',
    summary: '브랜드 발견과 선물 구매를 함께 보여주기 좋은 인사동 중심 코스입니다.',
    englishExplanation: 'An Insadong-centered route for showing brand discovery and purchase flow together.',
    tags: ['로컬 브랜드', '쇼핑', '공예 체험', 'gift-buying'],
    target: ['로컬 브랜드', '쇼핑', '공예 체험'],
    theme: 'brand-shopping',
    recommendedTime: ['afternoon', 'evening'],
    convenience: {
      englishAvailable: true,
      foreignerPopular: true,
      reservationRequired: false,
      labels: ['브랜드 발견', '선물 구매', '도보 부담 낮음']
    },
    convenienceLabelsEn: ['Brand discovery', 'Gift buying', 'Low walking'],
    imageUrl: 'assets/images/routes/course-craft.webp',
    imageAlt: '인사동 브랜드 발견·구매 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
    imagePrompt: 'A stylish Seoul craft-shopping route illustration around Insadong galleries and gift stores, no text.',
    tip: '사업화 가능성을 설명할 때 가장 쓰기 좋은 소비 전환형 코스입니다.',
    tipEn: 'This is the strongest route when discussing commercialization potential.',
    source: 'Contest-oriented fallback seed focused on gift buying and local-brand discovery.',
    keywords: [
      { name: 'Gift Conversion', description: '체험과 감상이 실제 선물 구매로 이어지는 장면을 의미합니다.' },
      { name: 'Local Brand Search', description: '설명 가능한 작은 브랜드를 발견하는 흐름입니다.' }
    ]
  },
  {
    id: 'rainy-day-indoor-design-course',
    title: '비 오는 날 실내 디자인 코스',
    englishTitle: 'Rainy-Day Indoor Design Route',
    score: 94,
    time: '약 2~3시간',
    timeEn: '2 to 3 hours',
    walking: '낮음',
    walkingEn: 'Low',
    fee: '무료~유료 선택',
    feeEn: 'Free to paid options',
    resourceIds: ['seoul-museum-of-craft-art', 'mmca-seoul', 'ddp-design-store'],
    flow: ['서울공예박물관', '국립현대미술관 서울', 'DDP 디자인 스토어'],
    reason: '우천 상황에서도 해설력, 실내 안정성, 상품 탐색 가능성을 유지하는 실내 중심 코스입니다.',
    reasonEn: 'An indoor-first route that keeps explanation quality, weather stability, and product exploration intact.',
    summary: '날씨가 나빠도 공예·디자인 탐색 경험을 유지하는 실내 대체 코스입니다.',
    englishExplanation: 'A rainy-day alternative that keeps the craft-and-design experience intact indoors.',
    tags: ['실내 전시', '공예 체험', '쇼핑', 'low-walking'],
    target: ['실내 전시', '공예 체험', '쇼핑'],
    theme: 'rainy-indoor',
    recommendedTime: ['morning', 'afternoon'],
    convenience: {
      englishAvailable: true,
      foreignerPopular: true,
      reservationRequired: false,
      labels: ['우천 대응', '실내 중심', '브랜드 탐색 유지']
    },
    convenienceLabelsEn: ['Rainy-day fit', 'Indoor-first', 'Brand exploration kept'],
    imageUrl: 'assets/images/routes/course-rainy.webp',
    imageAlt: '비 오는 날 실내 디자인 코스 이미지',
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
    imagePrompt: 'A rainy-day indoor Korean design route illustration with museums and a design store, no text.',
    tip: '날씨 화면과 챗봇 데모를 함께 보여줄 때 가장 안정적인 fallback 코스입니다.',
    tipEn: 'This is the most stable fallback route for weather and chatbot demos.',
    source: 'Contest-oriented fallback seed for indoor route continuity without shared real-time data claims.',
    keywords: [
      { name: 'Indoor Resilience', description: '날씨 변수에도 일정이 무너지지 않도록 실내 비중을 높인 구조입니다.' },
      { name: 'Rainy-Day Conversion', description: '우천 대안도 브랜드 발견과 구매 흐름을 유지하는 것을 뜻합니다.' }
    ]
  }
];

// EDIT USER PREFERENCE OPTIONS HERE
const USER_PREFERENCE = {
  region: '종로구',
  time: '2시간',
  interests: ['공예 체험'],
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
  analyticsEvents: 'hanroute.mobile.analyticsEvents'
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

const CONTEST_ROUTE_OVERRIDES = {};

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
      timeEyebrow: '산업부 공공데이터 기반 추천',
      languageConfirm: '한국어로 시작합니다.',
      introTitle: '산업부 공공데이터 기반 K-디자인 탐색',
      introBody: '마루는 산업통상부 공공데이터를 바탕으로 외국인 방문객이 한국의 공예·디자인 브랜드와 체험을 발견하고, 방문·구매 동선까지 연결하도록 돕는 K-디자인 AI 가이드입니다.',
      principles: ['DB = 산업부 공공데이터 + 현장 정보', 'Logic = 조건 필터링과 추천 점수', 'Guide = 쉬운 공예·디자인 해설'],
      proofPoints: ['산업통상부 공공데이터 기반', '외국인 대상 K-공예·디자인 탐색', '로컬 브랜드 노출 + 방문·구매 동선 연결'],
      quickLabel: '빠른 시작',
      todayRoute: '대표 탐색 코스',
      todayRouteDesc: '공예·디자인·구매 동선 먼저 보기',
      rainyRoute: '우천 대체 코스',
      rainyRouteDesc: '실내 중심 보조 동선',
      support: '여행자 지원',
      supportDesc: '긴급·분실·번역 도움',
      about: '서비스 소개',
      data: '산업부 데이터 근거 보기',
      start: '시작하기'
    },
    routes: {
      header: '마루',
      headerSub: '추천 코스',
      edit: '조건 수정',
      eyebrow: 'Recommended Routes',
      title: '추천 K-공예·디자인 코스',
      body: '선택한 조건을 바탕으로 공예 체험, 디자인 전시, 로컬 브랜드 발견, 방문·구매 동선을 하나의 흐름으로 추천합니다.',
      condition: '선택 조건',
      reason: '추천 이유',
      select: '이 코스 선택하기',
      detail: '자세히 보기',
      map: '지도 열기'
    },
    places: {
      title: '서울 공예·디자인 장소 추천',
      body: '산업부 공공데이터와 연결해 설명하기 좋은 공예·디자인 공간을 우선 정렬했습니다.',
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
      aiGuide: 'AI형 공예·디자인 해설',
      keywords: '탐색 키워드',
      visitTip: '방문 팁',
      why: '왜 중요한가:',
      tip: '방문 팁:',
      booking: '예약 안내:',
      warning: '운영시간, 요금, 예약 여부는 방문 전 공식 출처에서 확인하세요.',
      passport: '탐색 기록에 저장'
    },
    map: {
      header: '마루',
      headerSub: '지도 길찾기',
      changeRoute: '코스 변경',
      eyebrow: 'Route Map',
      fallbackTitle: '선택한 코스',
      body: '현재 위치를 허용하면 가까운 서울 공예·디자인 장소를 거리순으로 추천합니다. 위치 정보는 저장하지 않으며, 선택한 지도 서비스로 코스와 이동 순서도 열 수 있습니다.',
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
      nearbyTitle: '내 주변 공예·디자인 장소',
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
      title: '나에게 맞는 K-공예·디자인 코스 찾기',
      body: '공예 체험, 디자인 전시, 로컬 브랜드 발견, 구매 동선을 기준으로 추천 조건을 정리합니다.',
      stepLabel: 'Step',
      steps: [
        { title: '지역과 시간', body: '어디에서 얼마나 여행하나요?' },
        { title: '관심사', body: '어떤 공예·디자인 경험을 원하나요?' },
        { title: '동행 정보', body: '누구와 함께 여행하나요?' },
        { title: '여행 스타일', body: '어떤 방식으로 여행하고 싶나요?' },
        { title: '추가 요청', body: '원하는 조건이 더 있나요?' }
      ],
      optionLabels: ['지역', '시간', '인원', '여행 형태', '예산', '이동 부담', '실내/실외'],
      requestLabel: '자연어 요청',
      requestPlaceholder: '성수에서 3시간 정도 로컬 브랜드와 쇼핑이 같이 있는 코스를 추천해줘. 비 오면 실내 전시 위주면 좋겠어.',
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
      passportToast: '탐색 기록에 저장되었습니다.'
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
      timeEyebrow: 'Industrial Public-Data Recommendation',
      languageConfirm: 'Starting in English.',
      introTitle: 'Industrial-data-based K-design exploration',
      introBody: 'MARU helps global visitors discover Korean craft, design brands, and purchase-friendly routes using industrial public data.',
      principles: ['DB = industrial public data + field info', 'Logic = filters and recommendation score', 'Guide = simple craft and design interpretation'],
      proofPoints: ['Industrial public-data based', 'K-craft and design discovery for global visitors', 'Local-brand exposure plus visit and purchase flow'],
      quickLabel: 'Quick start',
      todayRoute: "Today's Routes",
      todayRouteDesc: 'Browse representative craft and design routes',
      rainyRoute: 'Rainy Day Route',
      rainyRouteDesc: 'Indoor-focused alternatives',
      support: 'Traveler Help',
      supportDesc: 'Emergency, lost items, translation',
      about: 'About the service',
      data: 'View industry public data',
      start: 'Get Started'
    },
    routes: {
      header: 'MARU',
      headerSub: 'Recommended Routes',
      edit: 'Edit filters',
      eyebrow: 'Recommended Routes',
      title: 'K-Craft and Design Routes',
      body: 'MARU recommends story-based routes across experiences, exhibitions, brands, and local buying spots.',
      condition: 'Selected filters',
      reason: 'Why this route',
      select: 'Choose this route',
      detail: 'View details',
      map: 'Open map'
    },
    places: {
      title: 'Recommended Seoul Craft and Design Places',
      body: 'Places are sorted by industrial-data fit, coordinates, data quality, visitor-friendly explanations, and travel value.',
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
      aiGuide: 'Simple AI Craft and Design Guide',
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
      body: 'Allow location access to find nearby Seoul craft and design places by distance. Your location is not saved, and you can also open the route with your selected map service.',
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
      nearbyToast: 'Finding nearby craft and design places from your current location.',
      savedToast: 'Map service saved.',
      nearbyTitle: 'Craft and Design Places Near Me',
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
      title: 'Find a craft and design route that fits you',
      body: 'Choose one item at a time and MARU will save your route preferences.',
      stepLabel: 'Step',
      steps: [
        { title: 'Area and Time', body: 'Where and how long will you travel?' },
        { title: 'Interests', body: 'What kind of craft, design, or local-brand experience do you want?' },
        { title: 'Travel Party', body: 'Who are you traveling with?' },
        { title: 'Travel Style', body: 'How would you like to explore?' },
        { title: 'Extra Request', body: 'Any extra conditions?' }
      ],
      optionLabels: ['Area', 'Time', 'People', 'Group type', 'Budget', 'Walking', 'Indoor/Outdoor'],
      requestLabel: 'Free-text request',
      requestPlaceholder: 'Recommend a 3-hour craft and design route around Jongno. I prefer less walking.',
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
      timeEyebrow: '産業公共データベースの推薦',
      languageConfirm: '日本語で始めます。',
      introTitle: '産業公共データベースのK-工芸・デザインガイド',
      introBody: 'MARUは産業通商資源部系の公共データをもとに、外国人訪問者が韓国の工芸・デザインブランドと体験を見つけ、訪問と購入動線までつなげられるよう助けるガイドです。',
      principles: ['DB = 産業公共データ + 現場情報', 'Logic = 条件フィルターと推薦スコア', 'Guide = わかりやすい工芸・デザイン解説'],
      proofPoints: ['産業公共データベース', '外国人向けK-工芸・デザイン探索', 'ローカルブランド露出と訪問・購入動線連結'],
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
      nearbyToast: '現在地から近い工芸・デザインスポットを探します。',
      savedToast: '地図サービスを保存しました。',
      nearbyTitle: '現在地周辺の工芸・デザインスポット',
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
      timeEyebrow: '基于产业公共数据的推荐',
      languageConfirm: '将以中文开始。',
      introTitle: '基于产业公共数据的 K-工艺与设计向导',
      introBody: 'MARU以产业通商资源部系公共数据为基础，帮助外国访客发现韩国工艺与设计品牌和体验，并连接到访问与购买动线。',
      principles: ['DB = 产业公共数据 + 现场信息', 'Logic = 条件筛选与推荐分数', 'Guide = 易懂工艺与设计解说'],
      proofPoints: ['基于产业公共数据', '面向外国访客的 K-工艺与设计探索', '本地品牌曝光与访问购买动线连接'],
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
      nearbyToast: '正在根据当前位置查找附近工艺与设计地点。',
      savedToast: '地图服务已保存。',
      nearbyTitle: '当前位置附近的工艺与设计地点',
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
      home: { title: '마루 | K-공예·디자인 AI 가이드', description: '마루, 외국인을 위한 K-공예·디자인 AI 가이드' },
      planner: { title: '조건 선택 | 마루', description: '여행 조건을 단계별로 선택해 K-공예·디자인 스토리 코스를 추천받습니다.' },
      routes: { title: '추천 코스 | 마루', description: '선택 조건에 맞춘 K-공예·디자인 스토리 코스 추천' },
      routeDetail: { title: '코스 상세 | 마루', description: '선택한 K-공예·디자인 스토리 코스 상세와 지도 서비스 길찾기' },
      map: { title: '지도 | 마루', description: '선택한 코스의 지도와 네이버지도, 카카오맵, Google Maps 링크' },
      weather: { title: '서울 날씨 | 마루', description: '서울 날씨를 바탕으로 실내 중심 보조 동선을 보여주는 마루의 이동 편의 화면' },
      support: { title: '여행자 지원 | 마루', description: '외국인 여행자를 위한 긴급, 분실, 관광 안내, 안전, 번역 도움' },
      passport: { title: '문화여행 기록 | 마루', description: '마루에서 저장한 코스와 공예·디자인 스탬프를 확인하는 문화여행 기록' },
      about: { title: '서비스 소개 | 마루', description: '산업통상부 공공데이터 기반 K-공예·디자인 탐색 서비스 마루 소개' },
      cultureData: { title: '공공데이터 | 마루', description: '산업통상부 공공데이터 활용 근거와 현재 정적 웹앱 구조 설명' },
      aiPhoto: { title: 'AI 포토카드 | 마루', description: '조선풍 전통 포토카드 체험' }
    },
    home: {
      headerSub: 'K-Craft Discovery Guide',
      heroAria: '서울 공예·디자인 추천 이미지',
      languageAria: '언어 선택'
    },
    planner: {
      header: '마루',
      headerSub: '조건 선택',
      progressAria: '진행 상태'
    },
    common: {
      bottomTabsAria: '하단 탭',
      timeImageAlt: '시간대 공예·디자인 추천 이미지'
    },
    weather: {
      header: '마루',
      headerSub: '서울 날씨',
      action: '코스 보기',
      eyebrow: 'Weather Insight',
      title: '날씨 기반 보조 코스',
      summary: '이 화면은 핵심 서비스가 아니라 이동 편의를 위한 보조 기능입니다. 서울 날씨와 예상 혼잡 흐름을 참고해 실내 중심 대안을 함께 보여줍니다.',
      todayLabel: '오늘의 보조 추천',
      todayTitle: '공예·디자인 이동 보정 코스',
      todayBody: '맑은 날에는 야외 동선을 살리고, 비가 오면 실내 전시와 디자인 스토어 비중을 높이는 식으로 조정합니다.',
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
        { label: '맑은 날 보조', title: '야외 디자인 산책 비중 확대', toast: '맑은 날 보조 코스가 선택되었습니다.' },
        { label: '비 오는 날 보조', title: '실내 전시·디자인 스토어 중심', toast: '비 오는 날 실내 보조 코스가 선택되었습니다.' },
        { label: '더운 날 보조', title: '실내 체류 비중 확대', toast: '더운 날 실내 보조 코스가 선택되었습니다.' }
      ]
    },
    passport: {
      header: '마루',
      headerSub: '문화여행 기록',
      action: '새 코스',
      eyebrow: 'Saved Routes',
      title: '나의 문화여행 기록',
      body: '방문한 공예·디자인 코스를 저장하고 관심 키워드를 기록합니다.',
      savedLabel: '저장한 코스',
      empty: '아직 저장한 코스가 없습니다.',
      choose: '추천 코스에서 선택하기',
      again: '다시 보기',
      stampsTitle: '탐색 키워드',
      nextLabel: '다음 추천',
      nextTitle: '성수 로컬 브랜드 탐색 코스',
      nextBody: '전시와 공예 입문 다음에는 로컬 브랜드와 쇼핑 흐름을 연결해 보세요.',
      view: '코스 보기',
      status: { completed: 'Completed', locked: 'Locked' },
      stamps: ['공예 체험', '디자인 전시', '로컬 브랜드', '쇼핑', '야간 무드', '실내 전시']
    },
    about: {
      header: '마루',
      headerSub: 'About MARU',
      action: '데이터',
      eyebrow: 'About',
      title: '산업부 공공데이터 기반 K-공예·디자인 탐색 서비스',
      body: '마루는 산업통상부 공공데이터를 바탕으로 외국인 방문객이 한국의 공예·디자인 브랜드와 체험을 발견하고, 방문·구매 동선까지 연결하도록 돕는 K-디자인 AI 가이드입니다.',
      articles: [
        { title: '공모전 적합성 중심 구조', body: '현재 버전은 관광지 나열 앱이 아니라 산업통상부 산하 공공기관 데이터를 중심축으로 잡고, 서울 현장 공간과 이동 동선을 보조 데이터로 연결하는 제출형 정적 웹앱입니다.' },
        { title: '방문과 구매를 함께 연결', body: '전시 감상에서 끝나지 않고 공예 체험, 로컬 브랜드 발견, 선물 구매까지 이어지도록 코스를 구성해 외국인 방문객의 소비 의사결정을 돕습니다.' },
        { title: 'AI 가이드 표현 원칙', body: '현재 마루의 챗봇과 추천 해설은 브라우저 내 규칙 기반 AI 가이드형 인터페이스에 가깝습니다. 별도 서버형 LLM을 운영하지 않는 만큼, 가능한 범위와 한계를 과장하지 않습니다.' },
        { title: '일반 관광 앱과의 차이', body: '맛집·명소 나열이 아니라 산업부 공공데이터가 설명하는 기업·브랜드·상품성 맥락을 현장 방문과 구매 동선으로 번역한다는 점이 핵심 차이입니다.' },
        { title: '공공데이터 활용 방식', body: '한국디자인진흥원과 KOTRA 데이터를 핵심 근거로 사용하고, 서울 현장 공간 정보는 이를 보여주기 위한 보조 레이어로만 사용합니다.' },
        { title: '파트너십 아님', body: '한국디자인진흥원, 대한무역투자진흥공사, 각 전시·공간 운영기관은 공공데이터 및 현장 정보 출처로만 참조하며 공식 제휴를 주장하지 않습니다.' }
      ],
      links: ['산업부 공공데이터 활용 보기', 'AI 이미지 프롬프트 보기']
    },
    cultureData: {
      header: '마루',
      headerSub: '공공데이터',
      action: '소개',
      eyebrow: 'Data Dashboard',
      title: '산업통상부 공공데이터 활용 구조',
      body: '현재 버전은 GitHub Pages에 배포 가능한 정적 웹앱으로 <code>data/courses.json</code>과 <code>data/public-data-sources.json</code>을 함께 읽어 K-공예·디자인 코스, 브랜드 발견 흐름, 공공데이터 설명을 동적으로 구성합니다. 이 화면의 핵심은 관광 정보가 아니라 산업부 계열 공공데이터가 서비스 중심축이라는 점을 보여주는 것입니다.',
      factorsTitle: '추천 요소',
      factors: ['산업부 데이터 적합도', '외국인 체험 친화도', '구매·체험 전환 가능성', '도보 편의성', '실내·날씨 적합도'],
      sourcesTitle: '산업부 데이터 소스 계획',
      futureApiTitle: '향후 API',
      metrics: ['K-디자인 장소 데이터', '추천 코스', '영어 설명 가능', '브랜드 연결', '구매 연결성', '이미지 URL', '데이터 상태'],
      status: { loaded: '로드됨', fallback: '기본 데이터', seed: '시드 데이터' },
      sourceStatus: { loaded: 'JSON 데이터 로드 완료', fallback: '기본 데이터 준비 완료', seed: '시드 데이터 사용 중' },
      sources: ['한국디자인진흥원 / 산업디자인전문회사', '한국디자인진흥원 / 우수디자인전문회사', '한국디자인진흥원 / 글로벌생활명품 선정기업 및 제품정보', '대한무역투자진흥공사 / 해외시장뉴스', '대한무역투자진흥공사 / 4대 소비재 국가별 수출금액'],
      sourceNote: '현재 데이터는 산업통상부 공공데이터 중심의 제출용 시드 구조이며, GitHub Pages 기반 정적 웹앱에서 동작합니다. 기기 공통 실시간 집계는 포함하지 않습니다.',
      logic: [
        { label: 'DB', title: '산업부 공공데이터', body: '현재는 JSON 시드 데이터를 기반으로 하며, 한국디자인진흥원과 KOTRA 데이터를 코스 설명과 브랜드 발견 로직의 근거로 사용합니다.' },
        { label: 'Client', title: '브라우저 내 추천 계산', body: '현재는 JavaScript가 조건 필터링, 코스 점수, 로컬 반응 기반 랭킹 시뮬레이션을 계산합니다. 기기 공통 실시간 집계는 하지 않습니다.' },
        { label: 'AI', title: '공예·디자인 해설 인터페이스', body: '현재는 검증된 앱 데이터를 쉬운 추천 문장과 방문 팁으로 바꾸는 역할이며, 이후 서버 연동 시 더 정교한 모델로 확장할 수 있습니다.' }
      ]
    },
    ari: {
      fabLabel: '아리 챗봇 열기',
      dialogLabel: '아리 공예·디자인 AI 가이드',
      avatarAlt: '아리 캐릭터',
      name: '아리',
      profileName: '아리(ARI)',
      profileTitle: '공예·디자인 추천 가이드',
      closeLabel: '아리 챗봇 닫기',
      greeting: '안녕하세요. 아리예요. 공예·디자인 코스 추천, 브랜드 설명, 구매 동선, 비 오는 날 대안까지 앱 데이터 기준으로 자연스럽게 도와드릴게요.',
      roleUser: '나',
      roleAssistant: '아리',
      placeholder: '처음 서울에 왔어, 공예 체험은 어디가 좋아?처럼 편하게 물어보세요.',
      send: '보내기',
      busy: '아리가 내용을 정리하고 있어요.',
      error: '지금 답변 연결이 잠시 불안정해요. 앱 데이터 기준 추천 가이드로 다시 안내해볼게요.',
      fallbackSuffix: '별도 모델 연결 없이 앱 데이터 기반 추천 가이드로 답변했습니다.',
      quickQuestions: ['처음 서울 왔는데 공예·디자인 코스는 어디부터 가면 좋아?', '이 브랜드 발견 코스가 왜 추천됐어?', '비 오는 날엔 어떤 실내 코스가 좋아?', '선물 사기 좋은 코스도 있어?', '영어로 설명하기 쉬운 장소가 어디야?']
    }
  },
  en: {
    pageMeta: {
      home: { title: 'MARU | K-Craft and Design AI Guide', description: 'MARU, a K-craft and design AI guide for global travelers' },
      planner: { title: 'Route Planner | MARU', description: 'Choose travel conditions step by step and receive a K-craft and design route.' },
      routes: { title: 'Recommended Routes | MARU', description: 'K-craft and design story routes matched to your selected conditions' },
      routeDetail: { title: 'Route Detail | MARU', description: 'Details and map links for your selected craft and design route' },
      map: { title: 'Map | MARU', description: 'Map links for Naver Map, Kakao Map, and Google Maps' },
      weather: { title: 'Seoul Weather | MARU', description: 'Seoul weather and weather-based craft and design route suggestions' },
      support: { title: 'Traveler Support | MARU', description: 'Emergency, lost items, tourist information, safety, and translation help for visitors' },
      passport: { title: 'Saved Routes | MARU', description: 'Saved MARU routes and craft and design stamps' },
      about: { title: 'About | MARU', description: 'MARU service concept and expansion plan' },
      cultureData: { title: 'Public Data | MARU', description: 'Industrial public data usage and recommendation logic' },
      aiPhoto: { title: 'AI Photo Card | MARU', description: 'Joseon-inspired traditional photo card experience' }
    },
    home: {
      headerSub: 'K-Craft Discovery Guide',
      heroAria: 'Seoul time-based craft and design image',
      languageAria: 'Language selection'
    },
    planner: {
      header: 'MARU',
      headerSub: 'Route Planner',
      progressAria: 'Progress'
    },
    common: {
      bottomTabsAria: 'Bottom navigation',
      timeImageAlt: 'Time-based Korean craft and design mood image'
    },
    weather: {
      header: 'MARU',
      headerSub: 'Seoul Weather',
      action: 'View Routes',
      eyebrow: 'Weather Insight',
      title: 'Weather-Based Support Guide',
      summary: 'This screen is a support layer for movement planning. It uses Seoul weather and local crowd estimates to suggest indoor alternatives.',
      todayLabel: "Today's Support Pick",
      todayTitle: 'Craft and Design Route Adjustment',
      todayBody: 'On a clear day, MARU keeps more outdoor design walks. When it rains, it shifts toward exhibitions and design stores.',
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
        { label: 'Clear-day support', title: 'More outdoor design walking', toast: 'Clear-day support route selected.' },
        { label: 'Rainy-day support', title: 'Indoor exhibitions and design stores', toast: 'Rainy-day indoor support route selected.' },
        { label: 'Hot-day support', title: 'Longer indoor stays', toast: 'Hot-day indoor support route selected.' }
      ]
    },
    passport: {
      header: 'MARU',
      headerSub: 'Saved Routes',
      action: 'New Route',
      eyebrow: 'Saved Routes',
      title: 'My Craft and Design Record',
      body: 'Save craft and design routes and keep track of your discovery keywords.',
      savedLabel: 'Saved route',
      empty: 'No saved route yet.',
      choose: 'Choose from recommended routes',
      again: 'View again',
      stampsTitle: 'Discovery Keywords',
      nextLabel: 'Next Pick',
      nextTitle: 'Seongsu Local Brand Discovery',
      nextBody: 'After museum-led routes, try a stronger local-brand and shopping flow.',
      view: 'View route',
      status: { completed: 'Completed', locked: 'Locked' },
      stamps: ['Craft Experience', 'Design Exhibition', 'Local Brand', 'Shopping', 'Night Mood', 'Indoor Exhibition']
    },
    about: {
      header: 'MARU',
      headerSub: 'About MARU',
      action: 'Data',
      eyebrow: 'About',
      title: 'A K-craft and design interpretation app for global travelers',
      body: 'MARU is a mobile travel companion that connects craft experiences, design spots, and local buying journeys instead of listing tourist spots.',
      articles: [
        { title: 'Industry-Data Expansion', body: 'The current version is a submission-focused prototype that uses industrial public data as the main axis and connects on-site Seoul route context as supporting data. It can later expand into official synchronization and live scoring through a server layer.' },
        { title: 'Visit and Purchase Together', body: 'English support, visitor popularity, experience readiness, and buying-conversion signals are shown together to help international visitors decide on site.' },
        { title: 'AI Image Policy', body: 'AI images are visual guides for understanding, not official place photos. A real service should separately manage official photo rights or original image production.' },
        { title: 'Different From Generic Travel Apps', body: 'MARU connects craft experiences, design brands, local stores, and exhibitions as a story flow instead of listing restaurants and attractions.' },
        { title: 'AI Use Principle', body: 'AI does not invent unverified facts. It turns industrial public data and field information into simple explanations, keywords, and visit tips.' },
        { title: 'Not an Official Partnership', body: 'Korea Institute of Design Promotion and KOTRA are referenced only as public-data sources, not as official partnerships.' }
      ],
      links: ['View industrial public data usage', 'View AI image prompts']
    },
    cultureData: {
      header: 'MARU',
      headerSub: 'Public Data',
      action: 'About',
      eyebrow: 'Data Dashboard',
      title: 'Industrial Public Data Expansion Structure',
      body: 'The current version is a deployable static web app for GitHub Pages. It reads <code>data/courses.json</code> and <code>data/public-data-sources.json</code> to build craft and design routes, recommendation cards, and support information dynamically. Hours, experience availability, brand information, and English-support status must be rechecked against official sources before operation.',
      factorsTitle: 'Recommendation Factors',
      factors: ['Industrial-data fit', 'Visitor experience friendliness', 'Buy/experience conversion', 'Walking convenience', 'Indoor and weather fit'],
      sourcesTitle: 'Industrial Data Source Plan',
      futureApiTitle: 'Future API',
      metrics: ['Seoul place data', 'Recommended routes', 'English support', 'Visitor favorite', 'Brand linkage', 'Image URLs', 'Data status'],
      status: { loaded: 'Loaded', fallback: 'Base data', seed: 'Seed data' },
      sourceStatus: { loaded: 'JSON data loaded', fallback: 'Base data ready', seed: 'Seed data active' },
      sources: ['KIDP / Industrial Design Firms', 'KIDP / Excellent Design Firms', 'KIDP / Global Premium Product Companies and Products', 'KOTRA / Overseas Market News', 'KOTRA / Country-Level Export Value for Consumer Goods'],
      sourceNote: 'The current dataset is a submission-oriented seed structure centered on industrial public data, and official information should be checked before launch.',
      logic: [
        { label: 'DB', title: 'Industrial Public Data', body: 'The current app uses JSON seed data, and a future backend can store official company, product, market, and experience metadata based on primary public sources.' },
        { label: 'Server', title: 'Filtering and Scores', body: 'JavaScript currently calculates filters and scores; a future server can calculate conversion likelihood, country-level demand, visit conditions, and weather fit.' },
        { label: 'AI', title: 'Simple Craft and Design Guide', body: 'The current app provides data-based craft and design guidance, and AI should turn verified data into simple explanations, keywords, and visit tips.' }
      ]
    },
    ari: {
      fabLabel: 'Open ARI chatbot',
      dialogLabel: 'ARI craft and design AI guide',
      avatarAlt: 'ARI character',
      name: 'ARI',
      profileName: 'ARI',
      profileTitle: 'Craft and Design AI Guide',
      closeLabel: 'Close ARI chatbot',
      greeting: 'Hello, I am ARI. I can naturally guide you through Seoul craft and design routes, place meanings, rainy-day alternatives, and English-friendly options using MARU data.',
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
      passport: { title: '保存したコース | MARU', description: 'MARUで保存したコースと工芸・デザイン探索キーワード' },
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
      title: '私の工芸・デザイン探索記録',
      body: '訪問した工芸・デザインコースを保存し、探索キーワードを記録します。',
      savedLabel: '保存したコース',
      empty: 'まだ保存したコースはありません。',
      choose: 'おすすめコースから選ぶ',
      again: 'もう一度見る',
      stampsTitle: '探索キーワード',
      nextLabel: '次のおすすめ',
      nextTitle: '聖水ローカルブランド探索コース',
      nextBody: '展示中心ルートの次は、ローカルブランドとショッピング動線を強めたコースへ広げてみましょう。',
      view: 'コースを見る',
      status: { completed: '完了', locked: 'ロック中' },
      stamps: ['工芸体験', 'デザイン展示', 'ローカルブランド', 'ショッピング', 'ナイトムード', '屋内展示']
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
      passport: { title: '已保存路线 | MARU', description: '在MARU保存的路线与工艺设计探索关键词' },
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
      title: '我的工艺与设计探索记录',
      body: '保存参观过的工艺与设计路线，并记录探索关键词。',
      savedLabel: '已保存路线',
      empty: '还没有保存的路线。',
      choose: '从推荐路线中选择',
      again: '再次查看',
      stampsTitle: '探索关键词',
      nextLabel: '下一条推荐',
      nextTitle: '圣水本地品牌探索路线',
      nextBody: '看完展览后，可以继续走向更强的本地品牌与购物动线。',
      view: '查看路线',
      status: { completed: '已完成', locked: '未解锁' },
      stamps: ['工艺体验', '设计展览', '本地品牌', '购物', '夜间氛围', '室内展览']
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
    'craft-design-intro-course': {
      title: 'K-工芸・デザイン入門コース',
      subtitle: '工芸博物館、ギャラリー、購入動線を短くつなぐ基本ルート',
      reason: '公共データで説明できる企業・商品性の文脈を、展示と購入動線で最もわかりやすく体験できます。',
      summary: '理解、比較、ギフト購入までを一度に見せやすい入門コースです。',
      tip: '発表では「公共データから現場消費までつながる最短ルート」として見せると伝わりやすいです。',
      time: '約2〜3時間',
      walking: '少なめ〜普通',
      fee: '無料見学 + 一部有料体験'
    },
    'samcheong-design-story-course': {
      title: '三清デザイン・ストーリーコース',
      subtitle: '韓屋景観を補助文脈にしながら工芸と現代デザインを読む散策ルート',
      reason: '歴史的な街並みを背景にしつつ、工芸解釈と現代デザイン展示を一つのストーリーでつなげられます。',
      summary: '景観、展示、ギャラリー解説が自然につながる散策型コースです。',
      tip: '写真よりも「なぜここで工芸とデザインを一緒に説明できるのか」を中心に案内すると効果的です。',
      time: '約3時間',
      walking: '普通',
      fee: '無料〜一部有料'
    },
    'insadong-brand-buying-course': {
      title: '仁寺洞ブランド発見・購入コース',
      subtitle: '工芸ブランド比較とギフト購入に強い都心ルート',
      reason: '外国人がその場で比較しやすいブランド、ギャラリー、複合商業空間を短距離でまとめています。',
      summary: '展示説明から実際の購入判断まで流れを切らずに見せられるコースです。',
      tip: 'ギフト予算や好みを先に聞いてから案内すると、購買導線の説得力が上がります。',
      time: '約2〜3時間',
      walking: '少なめ',
      fee: '購入可変'
    },
    'seongsu-local-brand-course': {
      title: '聖水ローカルブランド探索コース',
      subtitle: 'ショールームと感度の高いローカルブランドをめぐるルート',
      reason: '公共データが説明するデザイン企業・商品性を、今の消費空間と結びつけて見せやすいエリアです。',
      summary: 'ローカルブランド発見、ショールーム体験、ショッピング動線をまとめたコースです。',
      tip: '平日午後の方が比較的動きやすく、ブランドの違いも説明しやすいです。',
      time: '約3〜4時間',
      walking: '普通',
      fee: '購入可変'
    },
    'ddp-night-design-course': {
      title: 'DDPナイトデザインコース',
      subtitle: '夜間展示とデザインストア、照明街をつなぐコース',
      reason: '夜にもデザイン消費が続く流れを見せやすく、視覚的なデモ効果も強いです。',
      summary: 'DDPを中心に展示、購入、夜景ムードを一度に体験するコースです。',
      tip: '夜間営業とイベント日程を先に確認すると、デモの安定性が上がります。',
      time: '約3時間',
      walking: '少なめ〜普通',
      fee: '無料〜有料'
    },
    'rainy-day-indoor-design-course': {
      title: '雨の日の屋内デザインコース',
      subtitle: '博物館とギャラリー、屋内展示を中心に回る安定ルート',
      reason: '天気変数を抑えながらも工芸・デザイン解説と購入接点を維持できます。',
      summary: '雨の日でも説明品質を落とさずに見せやすい屋内中心コースです。',
      tip: '休館日だけ先に確認しておけば、発表用デモもかなり安定します。',
      time: '約2〜3時間',
      walking: '少なめ',
      fee: '無料〜有料'
    }
  },
  zh: {
    'craft-design-intro-course': {
      title: 'K-工艺与设计入门路线',
      subtitle: '把工艺博物馆、画廊与购买动线连成一条的基础路线',
      reason: '最适合把公共数据里的企业与商品故事，转化成现场展览与购买体验。',
      summary: '从理解韩国工艺，到比较品牌，再到礼物购买都能顺着看完。',
      tip: '演示时可以把它定位成“从公共数据走到现场消费”的最短说明路线。',
      time: '约2-3小时',
      walking: '较少到中等',
      fee: '免费浏览 + 部分付费体验'
    },
    'samcheong-design-story-course': {
      title: '三清设计故事路线',
      subtitle: '以韩屋街景为辅助背景，连接工艺与当代设计的散步路线',
      reason: '可以一边借助历史街区氛围，一边讲清工艺解读与当代设计展示的关系。',
      summary: '风景、展览与画廊解说连接自然，适合讲故事式介绍。',
      tip: '介绍时重点放在“为什么这里能同时讲工艺与设计”，会比单纯观光更贴题。',
      time: '约3小时',
      walking: '中等',
      fee: '免费到部分付费'
    },
    'insadong-brand-buying-course': {
      title: '仁寺洞品牌发现与购买路线',
      subtitle: '适合比较工艺品牌与礼物购买的市中心路线',
      reason: '把外国访客容易理解和比较的品牌、画廊与复合商业空间压缩在短动线里。',
      summary: '从展览理解一路延续到实际购买判断，不容易中断。',
      tip: '如果先问预算和送礼对象，再带看品牌，会更像真实消费引导。',
      time: '约2-3小时',
      walking: '较少',
      fee: '按购买决定'
    },
    'seongsu-local-brand-course': {
      title: '圣水本地品牌探索路线',
      subtitle: '围绕展厅与高感度本地品牌的探索路线',
      reason: '很适合把公共数据里的设计企业与商品价值，连接到当下的本地消费空间。',
      summary: '本地品牌发现、展厅体验与购物动线能一次展示出来。',
      tip: '工作日下午通常更顺，讲品牌风格差异也更轻松。',
      time: '约3-4小时',
      walking: '中等',
      fee: '按购买决定'
    },
    'ddp-night-design-course': {
      title: 'DDP 夜间设计路线',
      subtitle: '连接夜间展览、设计商店与照明街的路线',
      reason: '适合展示“设计消费在夜间也持续发生”的场景，视觉演示效果也更强。',
      summary: '围绕 DDP 一次体验展览、购买与夜景氛围。',
      tip: '先确认夜间营业和活动安排，演示稳定性会更高。',
      time: '约3小时',
      walking: '较少到中等',
      fee: '免费到付费'
    },
    'rainy-day-indoor-design-course': {
      title: '雨天室内设计路线',
      subtitle: '以博物馆、画廊和室内展览为主的稳定路线',
      reason: '在降低天气变量的同时，仍能保留工艺与设计解说以及购买连接。',
      summary: '雨天也能稳定展示的室内型说明路线。',
      tip: '只要先确认闭馆日，现场演示会稳定很多。',
      time: '约2-3小时',
      walking: '较少',
      fee: '免费到付费'
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
  'craft-design-intro-course': {
    title: 'K-Craft and Design Intro Route',
    subtitle: 'A clear first route connecting museum context, gallery comparison, and gift buying',
    time: 'About 2-3 hours',
    walking: 'Low to moderate',
    fee: 'Free browsing with optional paid experiences',
    reason: 'This route translates industrial public data into a simple on-site story with craft interpretation, design comparison, and a purchase-friendly ending.',
    summary: 'Start with craft context, compare exhibition spaces, and finish with a brand and gift stop.',
    tip: 'For demos, frame this as the clearest route from public-data explanation to real visitor spending.',
    flow: ['Seoul Museum of Craft Art', 'KCDF Gallery', 'Anyoung Insadong'],
    convenienceLabels: ['Public-data based', 'Purchase-linked', 'English-friendly']
  },
  'samcheong-design-story-course': {
    title: 'Samcheong Design Story Route',
    subtitle: 'A walk that uses hanok scenery as context while focusing on craft and design explanation',
    time: 'About 3 hours',
    walking: 'Moderate',
    fee: 'Free to partially paid',
    reason: 'It uses a familiar Seoul streetscape as a supporting layer while keeping the recommendation centered on craft, exhibition, and design interpretation.',
    summary: 'Scenery, exhibitions, and gallery storytelling connect naturally in one route.',
    tip: 'Guide this route as a design narrative, not as a generic sightseeing walk.',
    flow: ['Bukchon Hanok Village', 'Seoul Museum of Craft Art', 'MMCA Seoul', 'KCDF Gallery'],
    convenienceLabels: ['Story-focused', 'Photo-friendly', 'Exhibition-linked']
  },
  'insadong-brand-buying-course': {
    title: 'Insadong Brand Discovery and Buying Route',
    subtitle: 'A short central route built for comparing craft brands and buying gifts',
    time: 'About 2-3 hours',
    walking: 'Low',
    fee: 'Flexible by purchase',
    reason: 'It keeps brand comparison, gallery interpretation, and gift shopping close together for foreign visitors.',
    summary: 'A compact route for moving from explanation to purchase without breaking the flow.',
    tip: 'Ask about budget and gift style first, then use the stops to narrow the brand fit.',
    flow: ['KCDF Gallery', 'Anyoung Insadong', 'Ssamziegil'],
    convenienceLabels: ['Gift-friendly', 'Low walking', 'Brand comparison']
  },
  'seongsu-local-brand-course': {
    title: 'Seongsu Local Brand Discovery Route',
    subtitle: 'A showroom and local-brand route for visitors who want stronger consumer signals',
    time: 'About 3-4 hours',
    walking: 'Moderate',
    fee: 'Flexible by purchase',
    reason: 'Seongsu is the strongest area for turning design-company and product-story data into a contemporary local-brand experience.',
    summary: 'Explore showrooms, concept spaces, and shopping streets shaped by local-brand culture.',
    tip: 'Weekday afternoons tend to be easier for browsing and explaining brand differences.',
    flow: ['Seongsu Yeonbang', 'LCDC SEOUL', 'Seongsu Yeonmujang-gil'],
    convenienceLabels: ['Local-brand focused', 'Showroom route', 'Shopping-linked']
  },
  'ddp-night-design-course': {
    title: 'DDP Night Design Route',
    subtitle: 'A night route linking design exhibitions, stores, and urban lighting mood',
    time: 'About 3 hours',
    walking: 'Low to moderate',
    fee: 'Free to paid',
    reason: 'It shows that design discovery and consumption continue into the evening, which is useful for a stronger demo moment.',
    summary: 'Use DDP, its design store, and nearby lighting streets as a clear night-design story.',
    tip: 'Check night opening hours and current events before relying on this route for a presentation.',
    flow: ['Dongdaemun Design Plaza', 'DDP Design Store', 'Euljiro Lighting Street'],
    convenienceLabels: ['Night mood', 'Design retail', 'Presentation-friendly']
  },
  'rainy-day-indoor-design-course': {
    title: 'Rainy-Day Indoor Design Route',
    subtitle: 'An indoor-safe route centered on museums, galleries, and controlled demo flow',
    time: 'About 2-3 hours',
    walking: 'Low',
    fee: 'Free to paid',
    reason: 'It keeps weather risk low while preserving craft explanation, gallery comparison, and purchase-oriented stops.',
    summary: 'A stable indoor route for rainy days and presentation environments.',
    tip: 'If the weather changes, this is the easiest route to pivot to without changing the service story.',
    flow: ['Seoul Museum of Craft Art', 'MMCA Seoul', 'KCDF Gallery', 'Dongdaemun Design Plaza'],
    convenienceLabels: ['Indoor-safe', 'Weather backup', 'Data story intact']
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
    aiVisitTip: 'Focus on everyday-life exhibits to connect Korean craft and design context more easily.'
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
    aiWhyItMatters: 'It shows how local craft sensibility continues through everyday goods and market culture.',
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
    '성동구': 'Seongdong-gu',
    '종로+중구': 'Jongno + Jung-gu',
    '2시간': '2 hours',
    '3시간': '3 hours',
    '반나절': 'Half day',
    '하루': 'Full day',
    '공예 체험': 'Craft experience',
    '디자인 전시': 'Design exhibition',
    '로컬 브랜드': 'Local brand',
    '쇼핑': 'Shopping',
    '실내 전시': 'Indoor exhibition',
    '야간 무드': 'Night mood',
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
    '성동구': '城東区',
    '종로+중구': '鍾路区+中区',
    '2시간': '2時間',
    '3시간': '3時間',
    '반나절': '半日',
    '하루': '1日',
    '공예 체험': '工芸体験',
    '디자인 전시': 'デザイン展示',
    '로컬 브랜드': 'ローカルブランド',
    '쇼핑': 'ショッピング',
    '실내 전시': '屋内展示',
    '야간 무드': '夜のムード',
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
    '성동구': '城东区',
    '종로+중구': '钟路区+中区',
    '2시간': '2小时',
    '3시간': '3小时',
    '반나절': '半天',
    '하루': '一天',
    '공예 체험': '工艺体验',
    '디자인 전시': '设计展览',
    '로컬 브랜드': '本地品牌',
    '쇼핑': '购物',
    '실내 전시': '室内展览',
    '야간 무드': '夜间氛围',
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
  '서울공예박물관',
  'KCDF 갤러리',
  '안녕인사동',
  '국립현대미술관 서울',
  '동대문디자인플라자',
  'DDP 디자인 스토어',
  '성수연방',
  'LCDC SEOUL',
  '쌈지길',
  '성수 연무장길',
  '을지로 조명거리',
  '북촌한옥마을',
  '인사동'
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
    id: 'craft-design-intro-course',
    title: 'K-공예·디자인 입문 코스',
    englishTitle: 'K-Craft and Design Intro Route',
    summary: '공예 박물관, 갤러리, 구매 가능한 브랜드 공간을 짧고 명확하게 연결하는 대표 입문 코스입니다.',
    englishExplanation: 'A concise starter route linking a craft museum, a gallery, and a purchase-friendly brand stop.',
    reason: '산업부 공공데이터가 설명하는 디자인 기업·상품성 맥락을 전시 해설과 구매 동선으로 가장 쉽게 번역할 수 있습니다.',
    reasonEn: 'It is the clearest route for turning industrial public-data stories into on-site explanation and purchase flow.',
    tip: '발표에서는 공공데이터 설명이 현장 방문과 소비 연결로 이어진다는 점을 가장 분명하게 보여주기 좋습니다.',
    tipEn: 'Use this route in demos when you want the clearest link from public data to on-site spending.',
    tags: ['공예 체험', '디자인 전시', '로컬 브랜드', '쇼핑'],
    preferredNames: ['서울공예박물관', 'KCDF 갤러리', '안녕인사동'],
    fallbackTags: ['craft', 'design', 'first visit', 'brand'],
    time: '약 2~3시간',
    walking: '낮음~보통',
    fee: '무료 관람 + 유료 체험 선택 가능'
  },
  {
    id: 'samcheong-design-story-course',
    title: '삼청 디자인 스토리 코스',
    englishTitle: 'Samcheong Design Story Route',
    summary: '한옥 경관을 보조 맥락으로 두고 공예와 현대 디자인 해설을 한 흐름으로 묶는 산책형 코스입니다.',
    englishExplanation: 'A walk that uses hanok scenery as supporting context while keeping the focus on craft and design interpretation.',
    reason: '역사 경관을 관광 포인트가 아니라 보조 설명 레이어로 활용해 공예·디자인의 스토리텔링 밀도를 높입니다.',
    reasonEn: 'It treats historic scenery as a supporting layer so the route can stay centered on craft and design storytelling.',
    tip: '사진 명소 소개보다 왜 이 구간에서 공예와 디자인을 함께 설명할 수 있는지에 초점을 맞추면 공모전형 메시지가 더 선명합니다.',
    tipEn: 'Keep the narration on why this area works for craft-and-design interpretation rather than generic sightseeing.',
    tags: ['디자인 전시', '사진 포인트', '산책', '스토리텔링'],
    preferredNames: ['북촌한옥마을', '서울공예박물관', '국립현대미술관 서울', 'KCDF 갤러리'],
    fallbackTags: ['samcheong', 'design story', 'gallery', 'photo'],
    time: '약 3시간',
    walking: '보통',
    fee: '무료~유료 가능',
    preferPhoto: true
  },
  {
    id: 'insadong-brand-buying-course',
    title: '인사동 브랜드 발견·구매 코스',
    englishTitle: 'Insadong Brand Discovery and Buying Route',
    summary: '공예 브랜드 비교, 선물 구매, 외국인 설명 편의성이 높은 도심형 코스입니다.',
    englishExplanation: 'A central route optimized for craft-brand comparison, gift buying, and visitor-friendly explanation.',
    reason: '짧은 이동으로 브랜드와 상품을 비교할 수 있어 외국인 소비 연결성을 설명하기 가장 쉬운 구간입니다.',
    reasonEn: 'Its short distances and dense brand mix make it easy to explain consumer conversion for foreign visitors.',
    tip: '예산, 선물 목적, 취향 키워드를 먼저 물은 뒤 코스를 보여주면 추천 설득력이 올라갑니다.',
    tipEn: 'Ask about budget, gift goals, and taste before walking through the route so the recommendation feels more precise.',
    tags: ['로컬 브랜드', '쇼핑', '선물', '실내 전시'],
    preferredNames: ['KCDF 갤러리', '안녕인사동', '쌈지길'],
    fallbackTags: ['brand', 'shopping', 'gift', 'insadong'],
    time: '약 2~3시간',
    walking: '낮음',
    fee: '구매 선택에 따라 변동',
    preferEasy: true
  },
  {
    id: 'seongsu-local-brand-course',
    title: '성수 로컬 브랜드 탐색 코스',
    englishTitle: 'Seongsu Local Brand Discovery Route',
    summary: '쇼룸, 편집 공간, 로컬 브랜드 거리를 중심으로 현재형 소비 흐름을 보여주는 코스입니다.',
    englishExplanation: 'A showroom- and local-brand-focused route that highlights contemporary consumer flow.',
    reason: '공공데이터로 설명한 디자인 기업과 상품성을 현재의 로컬 브랜드 소비 공간에 연결해 보여주기 좋습니다.',
    reasonEn: 'It makes it easy to connect public-data-backed brand stories to contemporary local-brand consumption spaces.',
    tip: '발표에서는 성수를 관광지보다 브랜드 소비 실험장이자 현장 검증 구간으로 설명하는 편이 더 적합합니다.',
    tipEn: 'Describe Seongsu as a brand-consumption testbed rather than as a generic tourist district.',
    tags: ['로컬 브랜드', '쇼핑', '쇼룸', '사진 포인트'],
    preferredNames: ['성수연방', 'LCDC SEOUL', '성수 연무장길'],
    fallbackTags: ['local brand', 'showroom', 'shopping', 'seongsu'],
    time: '약 3~4시간',
    walking: '보통',
    fee: '구매 선택에 따라 변동',
    preferPhoto: true
  },
  {
    id: 'ddp-night-design-course',
    title: 'DDP 나이트 디자인 코스',
    englishTitle: 'DDP Night Design Route',
    summary: '야간 전시, 디자인 스토어, 조명 거리를 연결해 밤에도 이어지는 디자인 소비 흐름을 보여주는 코스입니다.',
    englishExplanation: 'A night route linking exhibitions, design retail, and lighting streets into one design-consumption story.',
    reason: '야간 시간대에도 K-디자인 탐색과 구매 연결이 가능하다는 점을 시각적으로 강하게 보여줄 수 있습니다.',
    reasonEn: 'It demonstrates that design discovery and purchase flow continue into the evening.',
    tip: '시연 전 야간 운영 시간만 확인하면 발표 임팩트가 가장 큰 코스 중 하나입니다.',
    tipEn: 'This can become one of the strongest demo routes if night opening hours are checked in advance.',
    tags: ['야간 무드', '디자인 전시', '쇼핑', '도시 디자인'],
    preferredNames: ['동대문디자인플라자', 'DDP 디자인 스토어', '을지로 조명거리'],
    fallbackTags: ['night', 'ddp', 'design store', 'lighting'],
    time: '약 3시간',
    walking: '낮음~보통',
    fee: '무료~유료 가능',
    preferPhoto: true
  },
  {
    id: 'rainy-day-indoor-design-course',
    title: '비 오는 날 실내 디자인 코스',
    englishTitle: 'Rainy-Day Indoor Design Route',
    summary: '비나 더위에도 설명 흐름이 흔들리지 않도록 실내 전시와 갤러리 중심으로 구성한 안정형 코스입니다.',
    englishExplanation: 'A stable indoor route built to preserve the service story even in rain or extreme weather.',
    reason: '날씨 리스크를 줄이면서도 공예·디자인 해설, 브랜드 발견, 구매 연결성을 유지할 수 있습니다.',
    reasonEn: 'It lowers weather risk without losing craft interpretation, brand discovery, or purchase links.',
    tip: '정적 웹앱 데모에서는 날씨 변수에 가장 덜 흔들리는 기본 안전 코스로 설명하기 좋습니다.',
    tipEn: 'For static-web demos, this is the safest route to keep the story consistent when the weather changes.',
    tags: ['실내 전시', '우천', '공예 체험', '디자인 전시'],
    preferredNames: ['서울공예박물관', '국립현대미술관 서울', 'KCDF 갤러리', '동대문디자인플라자'],
    fallbackTags: ['rainy day', 'indoor', 'museum', 'gallery'],
    preferIndoor: true,
    time: '약 2~3시간',
    walking: '낮음',
    fee: '무료~유료 가능'
  }
];

let plannerStep = 1;
let toastTimer;
let ariMessages = [];
let timeImageIndex = 0;
let timeImagePeriod = '';
let timeImageTimer = null;
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
const aiPhotoAssetCache = new Map();
const memoryStorageFallback = {};

const AI_PHOTO_VISION_BUNDLE_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/vision_bundle.mjs';
const AI_PHOTO_WASM_ROOT_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm';
const AI_PHOTO_SEGMENTER_MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/image_segmenter/selfie_segmenter/float16/latest/selfie_segmenter.tflite';
const AI_PHOTO_NIGHT_BACKGROUND_URL = 'assets/images/routes/course-night.webp';

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
      insightBody: '선택 조건과 산업부 공공데이터 기반 코스 특성을 함께 반영한 추천 근거입니다.',
      topRouteLabel: '현재 가장 잘 맞는 코스',
      factorLabel: '추천에 반영된 요인',
      scoreLabel: '추천 적합도',
      crowdLabel: '예상 혼잡도',
      bestForLabel: '추천 대상'
    },
    crowd: {
      title: '혼잡도 기반 대체 추천',
      body: '현재 시간, 날씨, 장소 특성을 합쳐 예상 혼잡 흐름을 계산했습니다. 기기 공통 실시간 수집값은 아닙니다.',
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
      nav: '브라우저 반응 기반 랭킹',
      title: '브라우저 반응 기반 랭킹',
      body: '현재 기기에 저장된 열람, 저장, 추천 반응과 기본 점수를 합쳐 계산한 시뮬레이션 랭킹입니다.',
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
        night: '인물을 분리한 뒤 궁궐 야경 배경으로 다시 합성했습니다.'
      },
      fallback: '네트워크 또는 모델 로드가 어려워 브라우저 기본 화풍 변환으로 처리했습니다.',
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
      insightBody: 'This recommendation blends travel preferences with MARU’s industrial public-data route structure.',
      topRouteLabel: 'Best route right now',
      factorLabel: 'Signals used',
      scoreLabel: 'Fit score',
      crowdLabel: 'Expected crowd',
      bestForLabel: 'Best for'
    },
    crowd: {
      title: 'Crowd-Aware Alternatives',
      body: 'Expected crowd is estimated from time, weather, and place patterns. It is not a shared live crowd feed.',
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
      nav: 'Browser-Based Ranking',
      title: 'Browser-Based Ranking',
      body: 'This simulated ranking blends local interactions stored on this device with MARU base scores.',
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
        night: 'The subject was separated and recomposited over a palace night background.'
      },
      fallback: 'The segmentation model could not load, so MARU used the built-in browser art filter instead.',
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
  const metaKey = PAGE_META_KEYS[fileName] || PAGE_META_KEYS['index.html'];
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
    category: raw.category || raw.type || '공예·디자인 장소',
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
    imageAlt: raw.imageAlt || `${nameKo || '서울 공예·디자인 장소'} 이미지`,
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
    (/craft|공예|design|디자인|gallery|갤러리|museum|박물관|exhibition|전시|showroom|스토어|brand|브랜드/i.test(`${resource.category} ${tagText}`) ? 12 : 0) +
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
      labels: ['실제 데이터 기반', 'K-공예·디자인', `${routeResources.length}개 장소`]
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
    category: rawPlace.category || '공예·디자인 장소',
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
  const override = CONTEST_ROUTE_OVERRIDES[rawCourse.id] || null;
  const course = override
    ? {
        ...rawCourse,
        ...override,
        title: override.title || rawCourse.title,
        aiSummary: override.aiSummary || rawCourse.aiSummary,
        reason: override.reason || rawCourse.reason,
        tip: override.tip || rawCourse.tip,
        keywords: override.keywords || rawCourse.keywords,
        target: override.target || rawCourse.target,
        recommendedTime: override.recommendedTime || rawCourse.recommendedTime,
        places: override.places || rawCourse.places
      }
    : rawCourse;
  const places = Array.isArray(course.places) ? course.places : [];
  const routeResources = places.map(findResourceForCoursePlace).filter(Boolean);
  const flow = places
    .map((place) => findResourceForCoursePlace(place)?.nameKo || getLocalizedValue(place.name, 'ko') || place.nameKo)
    .filter(Boolean);
  const resourceIds = routeResources.map((resource) => resource.id);
  const targetTags = [...new Set([course.theme, ...toArray(course.target)].filter(Boolean))];
  const keywords = normalizeCourseKeywords(course.keywords, targetTags);
  const sources = [...new Set(
    (Array.isArray(course.sourceNames) && course.sourceNames.length
      ? course.sourceNames
      : places.map((place) => place.publicDataSource)
    ).filter(Boolean)
  )];
  const score = toNumber(course.score, Math.min(99, Math.max(75, Math.round(
    routeResources.reduce((sum, resource) => sum + toNumber(resource.qualityScore, 80), 0) / Math.max(routeResources.length, 1)
  ))));
  const titleKo = getLocalizedValue(course.title, 'ko') || course.titleKo || `추천 코스 ${index + 1}`;
  const titleEn = getLocalizedValue(course.title, 'en') || course.titleEn || course.englishTitle || titleKo;
  const summaryKo = getLocalizedValue(course.aiSummary, 'ko') || getLocalizedValue(course.summary, 'ko') || '';
  const summaryEn = getLocalizedValue(course.aiSummary, 'en') || getLocalizedValue(course.summary, 'en') || summaryKo;
  const reasonKo = getLocalizedValue(course.reason, 'ko') || summaryKo;
  const reasonEn = getLocalizedValue(course.reason, 'en') || summaryEn;
  const tipKo = getLocalizedValue(course.tip, 'ko') || '운영시간, 요금, 예약 여부는 방문 전 공식 출처에서 확인하세요.';
  const tipEn = getLocalizedValue(course.tip, 'en') || 'Check official hours, fees, and reservations before visiting.';

  return {
    id: course.id || `public-data-course-${index + 1}`,
    title: titleKo,
    englishTitle: titleEn,
    score,
    time: getLocalizedValue(course.durationLabel, 'ko') || normalizeCourseDuration(course.duration, 'ko'),
    timeEn: getLocalizedValue(course.durationLabel, 'en') || normalizeCourseDuration(course.duration, 'en'),
    walking: getLocalizedValue(course.walking, 'ko') || indoorOutdoorLabel(course.indoorOutdoor, 'ko') || '보통',
    walkingEn: getLocalizedValue(course.walking, 'en') || indoorOutdoorLabel(course.indoorOutdoor, 'en') || 'Moderate',
    fee: getLocalizedValue(course.fee, 'ko') || budgetLabel(course.budget, 'ko') || '공식 확인 필요',
    feeEn: getLocalizedValue(course.fee, 'en') || budgetLabel(course.budget, 'en') || 'Check official source',
    resourceIds,
    flow,
    reason: reasonKo,
    reasonEn,
    tags: targetTags,
    convenience: {
      englishAvailable: routeResources.some((resource) => resource.englishAvailable),
      foreignerPopular: true,
      reservationRequired: /performance|booking|reservation|공연|예약/i.test(targetTags.join(' ')),
      labels: ['공공데이터 기반', `${flow.length}개 장소`, indoorOutdoorLabel(course.indoorOutdoor, 'ko') || '추천 코스']
    },
    convenienceLabelsEn: ['Public-data seed', `${flow.length} stops`, indoorOutdoorLabel(course.indoorOutdoor, 'en') || 'Recommended route'],
    imageUrl: course.image || course.imageUrl || inferRouteImage(course),
    imageAlt: rawCourse.imageAlt || `${titleKo} 대표 이미지`,
    imageNotice: 'AI 생성 이미지 · 실제 장소 사진이 아닌 코스 이해를 돕는 시각 가이드',
    imagePrompt: course.imagePrompt || '',
    summary: summaryKo,
    englishExplanation: summaryEn,
    tip: tipKo,
    tipEn,
    source: course.source || `${COURSE_DATA_URL} 기반 샘플 추천 코스입니다.${sources.length ? ` 참고 출처: ${sources.join(', ')}.` : ''} 운영 정보는 방문 전 공식 출처 확인이 필요합니다.`,
    keywords,
    keywordsEn: keywords.map((keyword) => ({
      name: keyword.name,
      description: keyword.descriptionEn || keyword.description
    })),
    theme: course.theme,
    target: toArray(course.target),
    recommendedTime: toArray(course.recommendedTime),
    mapLinks: course.mapLinks || {}
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
    headers: options.headers ? { ...options.headers } : {},
    keepalive: Boolean(options.keepalive)
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
    '공예 체험': ['공예', 'craft', 'workshop', 'maker', 'craft museum', '체험'],
    '디자인 전시': ['디자인', 'design', 'gallery', 'museum', 'exhibition', 'show'],
    '로컬 브랜드': ['브랜드', 'brand', 'local brand', 'showroom', 'flagship', '편집숍'],
    쇼핑: ['쇼핑', 'shopping', 'store', 'shop', 'gift', 'buy'],
    '실내 전시': ['실내', 'indoor', 'gallery', 'museum', 'exhibition', 'design store'],
    '야간 무드': ['야간', 'night', 'evening', 'lighting', 'late', 'night design']
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
  if (preference?.groupType === '친구와' && /(store|shop|brand|거리|street|popup|showroom)/i.test(text)) score += 10;
  if (preference?.groupType === '혼자' && /(museum|박물관|gallery|exhibition|design|공예)/i.test(text)) score += 10;

  if (hasAnyTerm(requestText, ['비 오는 날', '비오', '비 오', 'rain', '우천'])) score += Number(resource.rainyDayScore || 0) * 14;
  if (hasAnyTerm(requestText, ['사진', 'photo', 'photogenic'])) score += Number(resource.photoSpotScore || 0) * 6;
  if (hasAnyTerm(requestText, ['영어', 'english'])) score += resource.englishAvailable ? 12 : -4;
  if (hasAnyTerm(requestText, ['조용', 'quiet', 'hidden'])) score += /(quiet|hidden|조용)/i.test(text) ? 10 : 0;
  if (hasAnyTerm(requestText, ['쇼핑', 'brand', '브랜드', 'gift', 'buy', 'shop'])) score += /(쇼핑|shopping|brand|store|shop|gift|buy)/i.test(text) ? 12 : 0;

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
  if (interests.includes('실내 전시') && /(실내|indoor|전시|exhibition|museum|gallery)/i.test(routeText)) score += 18;
  if (interests.includes('로컬 브랜드') && /(로컬 브랜드|brand|showroom|store|편집숍)/i.test(routeText)) score += 14;
  if (interests.includes('쇼핑') && /(쇼핑|shopping|store|shop|gift|buy)/i.test(routeText)) score += 14;

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

  if (/craft|공예|design|디자인|gallery|showroom|brand/i.test(`${resource.category || ''}`)) score += 10;
  if (/박물관|museum|store|shop|전시|exhibition|performance/i.test(`${resource.category || ''}`)) score += 6;
  if (resource.englishAvailable) score += 4;
  if (period === 'day') score += 10;
  if (period === 'evening' && /(공연|performance|night|store|showroom|design)/i.test(`${resource.category || ''}`)) score += 9;
  if (period === 'night' && !/(night|design|store|showroom|performance)/i.test(`${resource.category || ''}`)) score -= 6;
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

function getForeignerPlaceRanking(limit = 10, summary = analyticsSummaryCache) {
  return CULTURE_RESOURCES
    .filter((resource) => !resource.isDetailStoryOnly && resource.isIndependentSite)
    .map((resource) => {
      const stats = getPlaceAnalyticsStats(resource, summary);
      const crowdScore = getLiveResourceCrowdScore(resource, summary);
      return {
        resource,
        stats,
        crowdScore,
        crowdLabel: getCrowdLabel(crowdScore),
        score: scoreLiveForeignerPlace(resource, summary)
      };
    })
    .sort((left, right) =>
      (right.score - left.score)
      || (right.stats.recommends - left.stats.recommends)
      || (right.stats.saves - left.stats.saves)
      || (right.stats.totalSignals - left.stats.totalSignals)
    )
    .slice(0, limit);
}

function getForeignerRouteRanking(limit = ROUTE_DATA.length, summary = analyticsSummaryCache) {
  return ROUTE_DATA
    .map((route) => {
      const stats = getRouteAnalyticsStats(route, summary);
      const crowdScore = getLiveRouteCrowdScore(route, summary);
      return {
        route,
        stats,
        crowdScore,
        crowdLabel: getCrowdLabel(crowdScore),
        score: scoreLiveForeignerRoute(route, summary)
      };
    })
    .sort((left, right) =>
      (right.score - left.score)
      || (right.stats.recommends - left.stats.recommends)
      || (right.stats.saves - left.stats.saves)
      || (right.stats.totalSignals - left.stats.totalSignals)
    )
    .slice(0, limit);
}

function getQuietRouteRanking(limit = 10, summary = analyticsSummaryCache) {
  return ROUTE_DATA
    .map((route) => {
      const stats = getRouteAnalyticsStats(route, summary);
      const crowdScore = getLiveRouteCrowdScore(route, summary);
      return {
        route,
        stats,
        crowdScore,
        crowdLabel: getCrowdLabel(crowdScore),
        score: scoreQuietRoute(route, summary)
      };
    })
    .sort((left, right) =>
      (right.score - left.score)
      || (left.crowdScore - right.crowdScore)
      || (right.stats.recommends - left.stats.recommends)
      || (right.stats.saves - left.stats.saves)
    )
    .slice(0, limit);
}

function getHiddenGemRanking(limit = 10, summary = analyticsSummaryCache) {
  return CULTURE_RESOURCES
    .filter((resource) => !resource.isDetailStoryOnly && resource.isIndependentSite)
    .map((resource) => {
      const stats = getPlaceAnalyticsStats(resource, summary);
      const crowdScore = getLiveResourceCrowdScore(resource, summary);
      const satisfactionScore = getPlaceSatisfactionScore(resource, summary);
      return {
        resource,
        stats,
        crowdScore,
        crowdLabel: getCrowdLabel(crowdScore),
        satisfactionScore,
        score: scoreHiddenGem(resource, summary)
      };
    })
    .sort((left, right) =>
      (right.score - left.score)
      || (right.satisfactionScore - left.satisfactionScore)
      || (right.stats.recommends - left.stats.recommends)
      || (left.stats.totalSignals - right.stats.totalSignals)
    )
    .slice(0, limit);
}

function getRankingActionLabel(kind = 'route') {
  if (kind === 'place') {
    return getCurrentLanguage() === 'ko' ? '지도 열기' : 'Open map';
  }
  return getCurrentLanguage() === 'ko' ? '코스 보기' : 'Open route';
}

function renderRankingStatChips(chips) {
  const visibleChips = chips.filter(Boolean);
  if (!visibleChips.length) return '';
  return `
    <div class="ranking-stat-chips">
      ${visibleChips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join('')}
    </div>
  `;
}

function renderNumberedRankingRow({
  rank,
  title,
  body,
  meta = '',
  chips = [],
  link = '',
  actionLabel = '',
  kind = 'route',
  crowdLabel = '',
  crowdScore = 46,
  external = false
}) {
  const badge = crowdLabel
    ? `<span class="route-signal-badge crowd-${escapeHtml(getCrowdLevelKey(crowdScore))}">${escapeHtml(crowdLabel)}</span>`
    : '';
  const action = link
    ? `<a class="button button-secondary" href="${escapeHtml(link)}"${external ? ' target="_blank" rel="noopener"' : ''}>${escapeHtml(actionLabel || getRankingActionLabel(kind))}</a>`
    : '';

  return `
    <article class="ranking-card">
      <div class="ranking-card-head">
        <span class="ranking-rank">${escapeHtml(String(rank))}</span>
        <div class="ranking-card-meta">
          <strong>${escapeHtml(title)}</strong>
          ${meta ? `<span>${escapeHtml(meta)}</span>` : ''}
        </div>
        ${badge}
      </div>
      <p>${escapeHtml(body)}</p>
      ${renderRankingStatChips(chips)}
      ${action ? `<div class="ranking-card-actions">${action}</div>` : ''}
    </article>
  `;
}

function renderRankingList(items, renderItem, emptyMessage) {
  if (!items.length) {
    return `
      <article class="ranking-card">
        <p>${escapeHtml(emptyMessage)}</p>
      </article>
    `;
  }
  return items.map((item, index) => renderItem(item, index)).join('');
}

function getRankingStatusNote(summary) {
  const eventCount = summary?.totals?.events || 0;
  if (!eventCount) {
    return getCurrentLanguage() === 'ko'
      ? '아직 추천과 저장 데이터가 많지 않아 기본 추천 점수와 코스 특성으로 랭킹을 시작합니다.'
      : 'There is not enough interaction data yet, so the ranking starts from the base recommendation scores.';
  }
  if (summary?.source === 'sqlite') {
    return getCurrentLanguage() === 'ko'
      ? `실행 중인 MARU 로컬 저장소의 반응 ${eventCount}건을 반영한 로컬 집계 기준입니다.`
      : `Using ${eventCount} interactions from the local MARU database on this machine.`;
  }
  return getCurrentLanguage() === 'ko'
    ? `이 브라우저에 저장된 반응 ${eventCount}건 기준으로 로컬 랭킹을 계산합니다.`
    : `Using ${eventCount} interactions stored in this browser.`;
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

function getLocalDateKey(date = new Date()) {
  const value = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(value.getTime())) return '';
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getTravelerTypeForLanguage(language = getCurrentLanguage()) {
  return normalizeLanguage(language) === 'ko' ? 'domestic' : 'foreigner';
}

function buildRouteAnalyticsPlaces(route) {
  const seen = new Set();
  return getRouteResources(route)
    .map((resource) => {
      if (!resource?.id || seen.has(resource.id)) return null;
      seen.add(resource.id);
      const resourceView = getResourceView(resource);
      return {
        id: resource.id,
        name: resourceView.displayName || resource.nameKo || resource.nameEn || resource.id
      };
    })
    .filter(Boolean);
}

function normalizeAnalyticsEventPlace(item) {
  const placeId = String(item?.id || item?.placeId || '').trim();
  if (!placeId) return null;
  return {
    id: placeId,
    name: String(item?.name || item?.label || item?.displayName || placeId).trim()
  };
}

function normalizeAnalyticsEvent(item) {
  const action = String(item?.action || '').trim();
  if (!ANALYTICS_ACTION_WEIGHTS[action]) return null;

  const routeId = String(item?.routeId || item?.route_id || '').trim();
  const routeTitle = String(item?.routeTitle || item?.route_title || routeId).trim();
  const language = normalizeLanguage(item?.language || getCurrentLanguage());
  const travelerType = String(item?.travelerType || item?.traveler_type || getTravelerTypeForLanguage(language)).trim() || 'foreigner';
  const places = Array.isArray(item?.places) ? item.places.map(normalizeAnalyticsEventPlace).filter(Boolean) : [];
  if (!routeId && !places.length) return null;

  const parsedDate = new Date(item?.createdAt || item?.created_at || Date.now());
  const createdAt = Number.isNaN(parsedDate.getTime()) ? new Date().toISOString() : parsedDate.toISOString();

  return {
    action,
    routeId,
    routeTitle: routeTitle || routeId,
    language,
    travelerType,
    places,
    createdAt
  };
}

function getLocalAnalyticsEvents() {
  const saved = storageJsonGet(STORAGE_KEYS.analyticsEvents, []);
  return Array.isArray(saved) ? saved.map(normalizeAnalyticsEvent).filter(Boolean) : [];
}

function saveAnalyticsEventLocally(payload) {
  const event = normalizeAnalyticsEvent(payload);
  if (!event) return null;
  const nextEvents = [event, ...getLocalAnalyticsEvents()].slice(0, ANALYTICS_LOCAL_EVENT_LIMIT);
  storageJsonSet(STORAGE_KEYS.analyticsEvents, nextEvents);
  analyticsSummaryCache = null;
  return event;
}

function buildAnalyticsEventPayload(route, action, options = {}) {
  const routeView = getRouteView(route);
  const language = normalizeLanguage(options.language || getCurrentLanguage());
  const places = Array.isArray(options.places) && options.places.length
    ? options.places.map(normalizeAnalyticsEventPlace).filter(Boolean)
    : buildRouteAnalyticsPlaces(route);
  return {
    action,
    routeId: route.id,
    routeTitle: routeView.title || route.title || route.id,
    language,
    travelerType: options.travelerType || getTravelerTypeForLanguage(language),
    places,
    createdAt: new Date().toISOString()
  };
}

async function createAnalyticsEventOnApi(payload, options = {}) {
  return fetchJsonFromMaruApi(MARU_API_PATHS.analyticsEngagement, {
    method: 'POST',
    keepalive: Boolean(options.keepalive),
    jsonBody: payload
  });
}

async function trackRouteEngagement(route, action, options = {}) {
  if (!route?.id || !ANALYTICS_ACTION_WEIGHTS[action]) return null;
  const payload = buildAnalyticsEventPayload(route, action, options);
  const localEvent = saveAnalyticsEventLocally(payload);
  const result = await createAnalyticsEventOnApi(payload, options);
  analyticsSummaryCache = null;
  return result.ok ? (result.payload || localEvent) : localEvent;
}

function getTrackedRouteDetailIds() {
  try {
    const raw = sessionStorage.getItem(ANALYTICS_ROUTE_VIEW_SESSION_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((item) => typeof item === 'string') : [];
  } catch (error) {
    return [];
  }
}

function wasRouteDetailTracked(routeId) {
  return getTrackedRouteDetailIds().includes(routeId);
}

function markRouteDetailTracked(routeId) {
  const tracked = new Set(getTrackedRouteDetailIds());
  tracked.add(routeId);
  try {
    sessionStorage.setItem(ANALYTICS_ROUTE_VIEW_SESSION_KEY, JSON.stringify([...tracked].slice(-40)));
  } catch (error) {
    // Ignore sessionStorage errors and continue without dedupe persistence.
  }
}

function ensureRouteDetailAnalyticsTracked(route) {
  if (!route?.id || wasRouteDetailTracked(route.id)) return;
  markRouteDetailTracked(route.id);
  void trackRouteEngagement(route, 'detail_view', { keepalive: true });
}

function createEmptyAnalyticsCounter(overrides = {}) {
  return {
    totalSignals: 0,
    todaySignals: 0,
    recentSignals: 0,
    foreignerSignals: 0,
    detailViews: 0,
    visitIntents: 0,
    saves: 0,
    recommends: 0,
    lastEventAt: '',
    ...overrides
  };
}

function normalizeAnalyticsCount(value) {
  const numeric = Number(value || 0);
  if (!Number.isFinite(numeric)) return 0;
  return Math.max(0, Math.round(numeric));
}

function normalizeAnalyticsCounter(raw, scope = 'route') {
  const base = createEmptyAnalyticsCounter({
    totalSignals: normalizeAnalyticsCount(raw?.totalSignals),
    todaySignals: normalizeAnalyticsCount(raw?.todaySignals),
    recentSignals: normalizeAnalyticsCount(raw?.recentSignals),
    foreignerSignals: normalizeAnalyticsCount(raw?.foreignerSignals),
    detailViews: normalizeAnalyticsCount(raw?.detailViews),
    visitIntents: normalizeAnalyticsCount(raw?.visitIntents),
    saves: normalizeAnalyticsCount(raw?.saves),
    recommends: normalizeAnalyticsCount(raw?.recommends),
    lastEventAt: String(raw?.lastEventAt || raw?.last_event_at || '').trim()
  });

  if (scope === 'place') {
    return {
      ...base,
      placeId: String(raw?.placeId || raw?.place_id || raw?.id || '').trim(),
      placeName: String(raw?.placeName || raw?.place_name || raw?.name || '').trim(),
      routeId: String(raw?.routeId || raw?.route_id || '').trim()
    };
  }

  return {
    ...base,
    routeId: String(raw?.routeId || raw?.route_id || raw?.id || '').trim(),
    routeTitle: String(raw?.routeTitle || raw?.route_title || raw?.title || '').trim()
  };
}

function sortAnalyticsCounters(items, labelKey) {
  return [...items].sort((left, right) =>
    (right.todaySignals - left.todaySignals)
    || (right.recentSignals - left.recentSignals)
    || (right.recommends - left.recommends)
    || (right.saves - left.saves)
    || (right.foreignerSignals - left.foreignerSignals)
    || (right.totalSignals - left.totalSignals)
    || String(left?.[labelKey] || '').localeCompare(String(right?.[labelKey] || ''))
  );
}

function applyAnalyticsSignal(counter, action, createdAt, language, travelerType, now = new Date()) {
  const created = new Date(createdAt || Date.now());
  const safeCreated = Number.isNaN(created.getTime()) ? now : created;
  const recentCutoff = now.getTime() - (ANALYTICS_RECENT_WINDOW_HOURS * 60 * 60 * 1000);

  counter.totalSignals += 1;
  if (getLocalDateKey(safeCreated) === getLocalDateKey(now)) counter.todaySignals += 1;
  if (safeCreated.getTime() >= recentCutoff) counter.recentSignals += 1;
  if (String(travelerType || '').trim() === 'foreigner' || normalizeLanguage(language || '') !== 'ko') counter.foreignerSignals += 1;

  if (action === 'detail_view') counter.detailViews += 1;
  if (action === 'visit_intent') counter.visitIntents += 1;
  if (action === 'save') counter.saves += 1;
  if (action === 'recommend') counter.recommends += 1;
  if (!counter.lastEventAt || safeCreated.getTime() > new Date(counter.lastEventAt).getTime()) {
    counter.lastEventAt = safeCreated.toISOString();
  }
}

function createAnalyticsSummaryBase(source = 'browser-storage') {
  return {
    generatedAt: new Date().toISOString(),
    today: getLocalDateKey(),
    recentWindowHours: ANALYTICS_RECENT_WINDOW_HOURS,
    source,
    totals: {
      events: 0,
      routeEvents: 0,
      placeEvents: 0
    },
    routes: [],
    places: []
  };
}

function buildAnalyticsSummaryFromEvents(events, source = 'browser-storage') {
  const summary = createAnalyticsSummaryBase(source);
  const routeMap = new Map();
  const placeMap = new Map();
  const now = new Date();

  events.map(normalizeAnalyticsEvent).filter(Boolean).forEach((event) => {
    summary.totals.events += 1;

    if (event.routeId) {
      summary.totals.routeEvents += 1;
      if (!routeMap.has(event.routeId)) {
        routeMap.set(event.routeId, createEmptyAnalyticsCounter({
          routeId: event.routeId,
          routeTitle: event.routeTitle || event.routeId
        }));
      }
      applyAnalyticsSignal(routeMap.get(event.routeId), event.action, event.createdAt, event.language, event.travelerType, now);
    }

    event.places.forEach((place) => {
      summary.totals.placeEvents += 1;
      if (!placeMap.has(place.id)) {
        placeMap.set(place.id, createEmptyAnalyticsCounter({
          placeId: place.id,
          placeName: place.name || place.id,
          routeId: event.routeId
        }));
      }
      applyAnalyticsSignal(placeMap.get(place.id), event.action, event.createdAt, event.language, event.travelerType, now);
    });
  });

  summary.routes = sortAnalyticsCounters([...routeMap.values()], 'routeTitle');
  summary.places = sortAnalyticsCounters([...placeMap.values()], 'placeName');
  return summary;
}

function normalizeAnalyticsSummary(payload) {
  if (!payload || typeof payload !== 'object') return null;

  const summary = createAnalyticsSummaryBase(String(payload.source || 'api').trim() || 'api');
  summary.generatedAt = String(payload.generatedAt || new Date().toISOString()).trim();
  summary.today = String(payload.today || getLocalDateKey()).trim();
  summary.recentWindowHours = normalizeAnalyticsCount(payload.recentWindowHours) || ANALYTICS_RECENT_WINDOW_HOURS;

  const totals = payload.totals || {};
  summary.totals = {
    events: normalizeAnalyticsCount(totals.events),
    routeEvents: normalizeAnalyticsCount(totals.routeEvents),
    placeEvents: normalizeAnalyticsCount(totals.placeEvents)
  };
  summary.routes = Array.isArray(payload.routes)
    ? sortAnalyticsCounters(payload.routes.map((item) => normalizeAnalyticsCounter(item, 'route')).filter((item) => item.routeId), 'routeTitle')
    : [];
  summary.places = Array.isArray(payload.places)
    ? sortAnalyticsCounters(payload.places.map((item) => normalizeAnalyticsCounter(item, 'place')).filter((item) => item.placeId), 'placeName')
    : [];

  return summary;
}

async function getAnalyticsSummaryFromApi() {
  const result = await fetchJsonFromMaruApi(MARU_API_PATHS.analyticsSummary);
  return result.ok ? normalizeAnalyticsSummary(result.payload) : null;
}

async function getAnalyticsSummary(forceRefresh = false) {
  if (!forceRefresh && analyticsSummaryCache) return analyticsSummaryCache;
  if (!forceRefresh && analyticsSummaryPromise) return analyticsSummaryPromise;

  analyticsSummaryPromise = (async () => {
    const apiSummary = await getAnalyticsSummaryFromApi();
    analyticsSummaryCache = apiSummary || buildAnalyticsSummaryFromEvents(getLocalAnalyticsEvents(), 'browser-storage');
    return analyticsSummaryCache;
  })();

  try {
    return await analyticsSummaryPromise;
  } finally {
    analyticsSummaryPromise = null;
  }
}

function getPlaceAnalyticsStats(resource, summary = analyticsSummaryCache) {
  const resourceView = getResourceView(resource);
  const fallback = createEmptyAnalyticsCounter({
    placeId: resource.id,
    placeName: resourceView.displayName || resource.nameKo || resource.nameEn || resource.id
  });
  const rows = summary?.places || [];
  return rows.find((item) => item.placeId === resource.id) || fallback;
}

function getAverageAnalyticsCounter(counters, overrides = {}) {
  if (!counters.length) return createEmptyAnalyticsCounter(overrides);

  const keys = ['totalSignals', 'todaySignals', 'recentSignals', 'foreignerSignals', 'detailViews', 'visitIntents', 'saves', 'recommends'];
  const averaged = createEmptyAnalyticsCounter(overrides);
  keys.forEach((key) => {
    averaged[key] = Math.round(counters.reduce((sum, item) => sum + normalizeAnalyticsCount(item?.[key]), 0) / counters.length);
  });
  averaged.lastEventAt = counters.find((item) => item?.lastEventAt)?.lastEventAt || '';
  return averaged;
}

function getRouteAnalyticsStats(route, summary = analyticsSummaryCache) {
  const routeView = getRouteView(route);
  const direct = (summary?.routes || []).find((item) => item.routeId === route.id) || createEmptyAnalyticsCounter({
    routeId: route.id,
    routeTitle: routeView.title || route.title || route.id
  });
  const placeStats = getRouteResources(route).map((resource) => getPlaceAnalyticsStats(resource, summary));
  const placeAverage = getAverageAnalyticsCounter(placeStats);
  const boost = 0.8;

  return createEmptyAnalyticsCounter({
    routeId: route.id,
    routeTitle: direct.routeTitle || routeView.title || route.title || route.id,
    totalSignals: direct.totalSignals + Math.round(placeAverage.totalSignals * boost),
    todaySignals: direct.todaySignals + Math.round(placeAverage.todaySignals * boost),
    recentSignals: direct.recentSignals + Math.round(placeAverage.recentSignals * boost),
    foreignerSignals: direct.foreignerSignals + Math.round(placeAverage.foreignerSignals * boost),
    detailViews: direct.detailViews + Math.round(placeAverage.detailViews * boost),
    visitIntents: direct.visitIntents + Math.round(placeAverage.visitIntents * boost),
    saves: direct.saves + Math.round(placeAverage.saves * boost),
    recommends: direct.recommends + Math.round(placeAverage.recommends * boost),
    lastEventAt: direct.lastEventAt || placeAverage.lastEventAt || ''
  });
}

function getAnalyticsWeightedSignal(stats) {
  return (
    (normalizeAnalyticsCount(stats?.detailViews) * ANALYTICS_ACTION_WEIGHTS.detail_view)
    + (normalizeAnalyticsCount(stats?.visitIntents) * ANALYTICS_ACTION_WEIGHTS.visit_intent)
    + (normalizeAnalyticsCount(stats?.saves) * ANALYTICS_ACTION_WEIGHTS.save)
    + (normalizeAnalyticsCount(stats?.recommends) * ANALYTICS_ACTION_WEIGHTS.recommend)
    + (normalizeAnalyticsCount(stats?.foreignerSignals) * 1.4)
  );
}

function getLiveResourceCrowdScore(resource, summary = analyticsSummaryCache) {
  const base = estimateResourceCrowdScore(resource);
  const stats = getPlaceAnalyticsStats(resource, summary);
  const liveBoost = Math.min(26, (stats.todaySignals * 3.4) + (stats.recentSignals * 4.2) + (stats.visitIntents * 1.8) + (stats.detailViews * 1.1));
  return Math.max(18, Math.min(98, Math.round(base + liveBoost)));
}

function getLiveRouteCrowdScore(route, summary = analyticsSummaryCache) {
  const base = estimateRouteCrowdScore(route);
  const routeStats = getRouteAnalyticsStats(route, summary);
  const resources = getRouteResources(route);
  const liveAverage = resources.length
    ? resources.reduce((sum, resource) => sum + getLiveResourceCrowdScore(resource, summary), 0) / resources.length
    : base;
  const routeBoost = Math.min(18, (routeStats.todaySignals * 2.6) + (routeStats.recentSignals * 3.2) + (routeStats.visitIntents * 1.4));
  return Math.max(18, Math.min(98, Math.round((base * 0.45) + (liveAverage * 0.55) + routeBoost)));
}

function getPlaceSatisfactionScore(resource, summary = analyticsSummaryCache) {
  const stats = getPlaceAnalyticsStats(resource, summary);
  const baseQuality = Number(resource.qualityScore || 4);
  const positiveSignals = (stats.saves * 2.3) + (stats.recommends * 4.1) + (stats.foreignerSignals * 0.8) + (baseQuality * 2.4);
  const demandSignals = Math.max(1, stats.detailViews + (stats.visitIntents * 1.2) + 1);
  return Math.max(52, Math.min(99, Math.round((positiveSignals / demandSignals) * 18 + (baseQuality * 5))));
}

function scoreLiveForeignerPlace(resource, summary = analyticsSummaryCache) {
  const stats = getPlaceAnalyticsStats(resource, summary);
  const liveSignals = getAnalyticsWeightedSignal(stats);
  const freshnessBoost = (stats.todaySignals * 3.1) + (stats.recentSignals * 2.6);
  return Math.round(scoreForeignerPlace(resource) + (liveSignals * 2.7) + freshnessBoost);
}

function scoreLiveForeignerRoute(route, summary = analyticsSummaryCache) {
  const stats = getRouteAnalyticsStats(route, summary);
  const liveSignals = getAnalyticsWeightedSignal(stats);
  const crowdBalance = getLiveRouteCrowdScore(route, summary) >= 84 ? -8 : 4;
  return Math.round(scoreForeignerRoute(route) + (liveSignals * 2.4) + crowdBalance);
}

function scoreQuietRoute(route, summary = analyticsSummaryCache) {
  const stats = getRouteAnalyticsStats(route, summary);
  const crowdScore = getLiveRouteCrowdScore(route, summary);
  const calmBase = Math.max(0, 100 - crowdScore);
  const satisfaction = (stats.saves * 2.8) + (stats.recommends * 3.8);
  const demandPenalty = (stats.todaySignals * 1.9) + (stats.recentSignals * 2.4);
  return Math.round((calmBase * 1.3) + satisfaction + (route.score * 0.28) - demandPenalty);
}

function scoreHiddenGem(resource, summary = analyticsSummaryCache) {
  const stats = getPlaceAnalyticsStats(resource, summary);
  const satisfactionScore = getPlaceSatisfactionScore(resource, summary);
  const lowTrafficBoost = Math.max(0, 16 - stats.totalSignals) * 3.4;
  const qualityBoost = Number(resource.qualityScore || 0) * 3.2;
  const uniquenessBoost = resource.foreignerPopular ? -8 : 10;
  const crowdRelief = Math.max(0, 72 - getLiveResourceCrowdScore(resource, summary)) * 0.45;
  const popularityPenalty = stats.totalSignals * 0.9;
  return Math.round(satisfactionScore + lowTrafficBoost + qualityBoost + uniquenessBoost + crowdRelief - popularityPenalty);
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
  const proofPoints = toArray(t('home.proofPoints', []));

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
      <div class="home-proof-grid" aria-label="${escapeHtml(t('home.quickLabel'))}">
        ${proofPoints.map((point) => `<span class="home-proof-chip">${escapeHtml(point)}</span>`).join('')}
      </div>
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

  const requestId = `${Date.now()}`;
  section.dataset.analyticsRenderId = requestId;

  const paint = (summary = analyticsSummaryCache) => {
    const popularPlaces = getForeignerPlaceRanking(10, summary);
    const quietRoutes = getQuietRouteRanking(10, summary);
    const hiddenGems = getHiddenGemRanking(10, summary);

    section.innerHTML = `
      <div class="section-heading compact">
        <div>
          <p class="eyebrow">Ranking</p>
          <h2>${escapeHtml(getCurrentLanguage() === 'ko' ? '브라우저 반응 기반 랭킹' : 'Browser-Based Ranking')}</h2>
          <p>${escapeHtml(getCurrentLanguage() === 'ko'
            ? '앱 안에 저장된 열람, 지도 열기, 저장, 추천 반응을 바탕으로 외국인 인기와 조용한 대체 코스를 함께 봅니다.'
            : 'This ranking blends local interactions such as opens, map launches, saves, and recommendations on this device.')}</p>
        </div>
      </div>
      <p class="ranking-status-note">${escapeHtml(getRankingStatusNote(summary))}</p>
      <div class="ranking-grid ranking-grid-analytics">
        <section class="ranking-block">
          <div class="ranking-section-copy">
            <h3>${escapeHtml(getCurrentLanguage() === 'ko' ? '외국인 선호 K-디자인 스팟 TOP 10' : 'Top 10 K-Design Spots')}</h3>
            <p>${escapeHtml(getCurrentLanguage() === 'ko'
              ? '영어 설명 가능성, 브랜드 발견성, 외국인 반응 신호를 함께 반영합니다.'
              : 'Blends English support, photo value, and foreign visitor signals.')}</p>
          </div>
          <div class="ranking-list">
            ${renderRankingList(
              popularPlaces,
              ({ resource, stats, crowdScore, crowdLabel }, index) => {
                const resourceView = getResourceView(resource);
                return renderNumberedRankingRow({
                  rank: index + 1,
                  title: resourceView.displayName,
                  meta: [resourceView.category, resourceView.region].filter(Boolean).join(' · '),
                  body: resourceView.aiWhyItMatters || resourceView.aiSimpleExplanation || resourceView.aiVisitTip || resource.nameEn || resource.nameKo,
                  chips: [
                    `오늘 반응 ${stats.todaySignals}`,
                    `외국인 ${stats.foreignerSignals}`,
                    `추천 ${stats.recommends}`,
                    `저장 ${stats.saves}`
                  ],
                  link: createMapPlaceUrl(getMapTargetForPlace(resource.nameKo)),
                  actionLabel: getRankingActionLabel('place'),
                  kind: 'place',
                  crowdLabel,
                  crowdScore,
                  external: true
                });
              },
              '아직 누적된 반응이 없어 기본 추천 순위로 대기 중입니다.'
            )}
          </div>
        </section>
        <section class="ranking-block">
          <div class="ranking-section-copy">
            <h3>${escapeHtml(getCurrentLanguage() === 'ko' ? '조용한 코스 추천 TOP 10' : 'Top Quiet Route Picks')}</h3>
            <p>${escapeHtml(getCurrentLanguage() === 'ko'
              ? `현재 등록된 ${ROUTE_DATA.length}개 코스 안에서 혼잡 추정치를 피해 추천합니다.`
              : `Calculated across the ${ROUTE_DATA.length} currently registered routes.`)}</p>
          </div>
          <div class="ranking-list">
            ${renderRankingList(
              quietRoutes,
              ({ route, stats, crowdScore, crowdLabel }, index) => {
                const routeView = getRouteView(route);
                return renderNumberedRankingRow({
                  rank: index + 1,
                  title: routeView.title,
                  meta: `${routeView.time} · ${routeView.walking}`,
                  body: routeView.reason || routeView.summary || routeView.subtitle,
                  chips: [
                    `오늘 반응 ${stats.todaySignals}`,
                    `저장 ${stats.saves}`,
                    `추천 ${stats.recommends}`,
                    `${ft('ai.scoreLabel', 'Fit score')} ${route.score}`
                  ],
                  link: `route-detail.html?id=${encodeURIComponent(route.id)}`,
                  actionLabel: getRankingActionLabel('route'),
                  crowdLabel,
                  crowdScore
                });
              },
              '등록된 코스가 아직 부족해 조용한 코스 랭킹이 비어 있습니다.'
            )}
          </div>
        </section>
        <section class="ranking-block">
          <div class="ranking-section-copy">
            <h3>${escapeHtml(getCurrentLanguage() === 'ko' ? '숨은 명소 랭킹 TOP 10' : 'Top 10 Hidden Gems')}</h3>
            <p>${escapeHtml(getCurrentLanguage() === 'ko'
              ? '방문량은 많지 않아도 저장과 추천 비율이 좋은 장소를 우선으로 올립니다.'
              : 'Favors places with lower traffic but stronger save and recommendation ratios.')}</p>
          </div>
          <div class="ranking-list">
            ${renderRankingList(
              hiddenGems,
              ({ resource, stats, crowdScore, crowdLabel, satisfactionScore }, index) => {
                const resourceView = getResourceView(resource);
                return renderNumberedRankingRow({
                  rank: index + 1,
                  title: resourceView.displayName,
                  meta: [resourceView.category, resourceView.region].filter(Boolean).join(' · '),
                  body: resourceView.aiVisitTip || resourceView.aiSimpleExplanation || resourceView.aiWhyItMatters || resource.nameEn || resource.nameKo,
                  chips: [
                    `만족도 ${satisfactionScore}`,
                    `추천 ${stats.recommends}`,
                    `저장 ${stats.saves}`,
                    `누적 반응 ${stats.totalSignals}`
                  ],
                  link: createMapPlaceUrl(getMapTargetForPlace(resource.nameKo)),
                  actionLabel: getRankingActionLabel('place'),
                  kind: 'place',
                  crowdLabel,
                  crowdScore,
                  external: true
                });
              },
              '저장과 추천이 쌓이면 숨은 명소 랭킹이 더 정확해집니다.'
            )}
          </div>
        </section>
      </div>
    `;
  };

  paint(analyticsSummaryCache);

  void (async () => {
    const summary = await getAnalyticsSummary();
    if (section.dataset.analyticsRenderId !== requestId) return;
    paint(summary);
  })();
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
  await trackRouteEngagement(route, 'save');
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

function renderRouteFeedbackPanel(route) {
  const sourceBox = qs('.source-box');
  if (!sourceBox?.parentElement) return;

  let panel = qs('[data-route-feedback-panel]');
  if (!panel) {
    panel = document.createElement('section');
    panel.className = 'mobile-card route-feedback-card';
    panel.setAttribute('data-route-feedback-panel', '');
    sourceBox.parentElement.insertBefore(panel, sourceBox);
  }

  panel.innerHTML = `
    <h2>${escapeHtml(getCurrentLanguage() === 'ko' ? '이 코스가 좋았다면' : 'If you liked this route')}</h2>
    <p>${escapeHtml(getCurrentLanguage() === 'ko'
      ? '추천과 저장 반응이 이 기기 안의 인기, 숨은 명소, 혼잡도 시뮬레이션 계산에 반영됩니다.'
      : 'Recommendations and saves on this device feed the popularity, hidden-gem, and crowd simulations.')}</p>
    <div class="route-feedback-actions">
      <button class="button button-secondary" type="button" data-route-action="recommend-current">${escapeHtml(getCurrentLanguage() === 'ko' ? '추천 남기기' : 'Recommend')}</button>
      <span>${escapeHtml(getCurrentLanguage() === 'ko' ? '한 번의 추천도 브라우저 내 반응 데이터로 누적됩니다.' : 'Each recommendation becomes a local browser signal.')}</span>
    </div>
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
  renderRouteFeedbackPanel(route);
  ensureRouteDetailAnalyticsTracked(route);
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
  const futureIntegration = source.futureIntegration || source.futureExpansion || '서버 또는 BaaS 연동 후 공식 데이터 동기화 예정';

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

function buildAriChatReply(values, language = getCurrentLanguage(), fallback = '') {
  return langPick(values, language, fallback);
}

function getAriLanguageTag(language = getCurrentLanguage()) {
  if (language === 'ko') return 'ko-KR';
  if (language === 'ja') return 'ja-JP';
  if (language === 'zh') return 'zh-CN';
  return 'en-US';
}

function buildAriLocalChatContext(context, message) {
  const liveRankingSummary = analyticsSummaryCache || buildAnalyticsSummaryFromEvents(getLocalAnalyticsEvents(), 'browser-storage');
  return {
    language: context.language || getCurrentLanguage(),
    selectedRoute: findMatchingRoute(message, context.routes) || context.selectedRoute,
    matchedResource: findMatchingResource(message, context.resources) || null,
    rainyRoute: findRouteByHints(context.routes, ['rain', 'rainy', 'indoor', 'museum']) || context.selectedRoute,
    easyRoute: findRouteByHints(context.routes, ['less walking', 'low walking', 'easy', 'quiet']) || context.selectedRoute,
    foodRoute: findRouteByHints(context.routes, ['market', 'food', 'local life']) || context.selectedRoute,
    foodPlace: findResourceByHints(context.resources, ['market', 'food', 'korea house']) || null,
    liveTopPlaces: getForeignerPlaceRanking(10, liveRankingSummary),
    quietRoutes: getQuietRouteRanking(10, liveRankingSummary),
    hiddenGems: getHiddenGemRanking(10, liveRankingSummary),
    routeRanking: getForeignerRouteRanking(Math.max(3, ROUTE_DATA.length), liveRankingSummary),
    liveRankingSummary
  };
}

function buildAriLocalSmallTalkReply(message, context, helperContext) {
  const language = helperContext.language;
  const reply = (values, fallback = '') => buildAriChatReply(values, language, fallback);
  const normalized = normalizeSearchText(message);
  const compact = normalized.replace(/\s+/g, '');

  const has = (...terms) => terms.some((term) => normalized.includes(normalizeSearchText(term)) || compact.includes(normalizeSearchText(term).replace(/\s+/g, '')));

  if (has('안녕', '반가워', 'hello', 'hi', 'hey', 'こんにちは', '你好')) {
    return reply({
      ko: `안녕하세요. 아리예요. 지금 보고 있는 ${helperContext.selectedRoute.title}부터 바로 설명할 수도 있고, 브랜드 추천이나 비 오는 날 대안도 자연스럽게 이어서 도와드릴게요.`,
      en: `Hello, I am ARI. I can start with ${helperContext.selectedRoute.title}, or move straight into brand picks and rainy-day alternatives.`,
      ja: `こんにちは、アリです。今見ている ${helperContext.selectedRoute.title} から案内してもいいですし、ブランドおすすめや雨の日の代替案にもすぐつなげられます。`,
      zh: `你好，我是ARI。我可以先从你现在看到的 ${helperContext.selectedRoute.title} 开始，也可以马上接着推荐品牌路线或雨天替代方案。`
    });
  }

  if (has('고마워', '감사', 'thanks', 'thank you', 'arigato', '谢谢')) {
    return reply({
      ko: '천만에요. 원하면 추천 이유를 더 풀어드리거나, 조용한 코스와 실내 대안까지 이어서 정리해드릴게요.',
      en: 'You are welcome. I can keep going with route reasons, quieter options, or indoor backups.',
      ja: 'どういたしまして。必要なら、おすすめ理由や静かなコース、屋内代替案まで続けて整理できます。',
      zh: '不客气。如果你愿意，我也可以继续帮你整理推荐理由、安静路线和室内备选方案。'
    });
  }

  if (has('배고파', '배고프', 'hungry', 'お腹すいた', '饿')) {
    return reply({
      ko: '배고프면 먼저 가볍게 드시고 움직이는 게 좋아요. 식사 후에는 실내 공예 코스나 선물 쇼핑 코스로 이어서 다시 맞춰드릴 수 있어요.',
      en: 'If you are hungry, it is better to eat something light first. After that, I can rework the plan into an indoor craft route or a gift-shopping route.',
      ja: 'お腹が空いているなら、まず軽く食べてから動くのがおすすめです。その後で屋内コースやギフト購入コースに組み直せます。',
      zh: '如果你饿了，建议先简单吃一点再继续走。吃完后我可以再帮你改成室内工艺路线或礼物购物路线。'
    });
  }

  if (has('피곤', '졸려', 'sleepy', 'tired', '疲れ', '累')) {
    return reply({
      ko: `피곤하면 잠깐 쉬었다가 가는 게 좋아요. 원하면 지금 바로 ${helperContext.easyRoute.title}처럼 이동 부담이 낮은 코스로 바꿔드릴게요.`,
      en: `If you feel tired, take a short break first. I can switch you right away to an easier route like ${helperContext.easyRoute.title}.`,
      ja: `疲れているなら少し休んでから動くのがおすすめです。必要なら今すぐ ${helperContext.easyRoute.title} のような負担の少ないコースに切り替えられます。`,
      zh: `如果你累了，先休息一下会更好。需要的话，我可以马上改成像 ${helperContext.easyRoute.title} 这样移动负担更低的路线。`
    });
  }

  if (has('잠 깨', '깨는 법', 'wake me up', 'stay awake', '眠気', '提神')) {
    return reply({
      ko: '물 한 잔, 가벼운 스트레칭, 잠깐 걷기가 먼저 도움이 돼요. 괜찮다면 커피나 차를 마시는 것도 좋고, 원하면 실내 위주 코스로 더 편하게 바꿔드릴게요.',
      en: 'A glass of water, a short walk, and a quick stretch usually help first. Coffee or tea can also help, and I can switch your plan to an easier indoor route if you want.',
      ja: '水を飲んで、少し歩いて、軽く伸ばすだけでもかなり違います。コーヒーやお茶もよく効きますし、必要なら屋内中心の楽なコースに変えられます。',
      zh: '先喝点水、稍微走一走、活动一下身体通常会有帮助。咖啡或茶也可以，如果你愿意，我也能把路线改成更轻松的室内方案。'
    });
  }

  if (has('몇 시', '몇시', '현재 시간', 'what time is it', 'time is it', '何時', '几点')) {
    const now = new Date();
    const timeText = new Intl.DateTimeFormat(getAriLanguageTag(language), { hour: 'numeric', minute: '2-digit' }).format(now);
    return reply({
      ko: `지금 시간은 ${timeText}예요. 원하면 이 시간대에 맞는 실내 코스나 쇼핑 동선도 바로 추천해드릴게요.`,
      en: `It is ${timeText} right now. If you want, I can suggest an indoor route or a shopping flow that fits this time of day.`,
      ja: `今は ${timeText} です。必要なら、この時間帯に合う屋内コースやショッピング動線もすぐおすすめできます。`,
      zh: `现在时间是 ${timeText}。如果你愿意，我也可以马上推荐适合这个时间段的室内路线或购物动线。`
    });
  }

  if (has('실시간 인기', '지금 인기', '인기 랭킹', 'live ranking', 'top ranking', '人気ランキング', '热门排行')) {
    const topPlacesText = helperContext.liveTopPlaces.slice(0, 3).map((item, index) => `${index + 1}. ${getResourceView(item.resource).displayName}`).join(', ');
    const quietText = helperContext.quietRoutes.slice(0, 2).map((item, index) => `${index + 1}. ${getRouteView(item.route).title}`).join(', ');
    const hiddenText = helperContext.hiddenGems.slice(0, 2).map((item, index) => `${index + 1}. ${getResourceView(item.resource).displayName}`).join(', ');
    return reply({
      ko: `현재 브라우저 저장 반응 기준 인기 장소는 ${topPlacesText || '아직 집계 중'}예요. 조용한 코스는 ${quietText || '아직 집계 중'}, 숨은 명소는 ${hiddenText || '아직 집계 중'}처럼 보여드릴 수 있어요.`,
      en: `On this browser, the current popularity picks are ${topPlacesText || 'still being collected'}. Quiet routes are ${quietText || 'still being collected'}, and hidden gems are ${hiddenText || 'still being collected'}.`,
      ja: `このブラウザに保存された反応基準では、人気スポットは ${topPlacesText || 'まだ集計中'} です。静かなコースは ${quietText || 'まだ集計中'}、隠れたおすすめは ${hiddenText || 'まだ集計中'} のように案内できます。`,
      zh: `按照当前这个浏览器保存的反应数据，热门地点是 ${topPlacesText || '仍在汇总中'}。安静路线是 ${quietText || '仍在汇总中'}，隐藏推荐是 ${hiddenText || '仍在汇总中'}。`
    });
  }

  if (has('1위', '1 등', 'rank', 'top place', 'top route')) {
    const topPlace = helperContext.liveTopPlaces[0];
    const quietRoute = helperContext.quietRoutes[0];
    return reply({
      ko: `현재 이 브라우저 기준 1위 장소는 ${topPlace ? getResourceView(topPlace.resource).displayName : '아직 집계 중'}이고, 조용한 코스 추천 1순위는 ${quietRoute ? getRouteView(quietRoute.route).title : '아직 집계 중'}예요.`,
      en: `On this browser, the current number one place is ${topPlace ? getResourceView(topPlace.resource).displayName : 'still being collected'}, and the quiet-route pick is ${quietRoute ? getRouteView(quietRoute.route).title : 'still being collected'}.`,
      ja: `このブラウザ基準の1位スポットは ${topPlace ? getResourceView(topPlace.resource).displayName : 'まだ集計中'} で、静かなコースの優先候補は ${quietRoute ? getRouteView(quietRoute.route).title : 'まだ集計中'} です。`,
      zh: `按照当前这个浏览器的数据，第1位地点是 ${topPlace ? getResourceView(topPlace.resource).displayName : '仍在汇总中'}，安静路线优先推荐是 ${quietRoute ? getRouteView(quietRoute.route).title : '仍在汇总中'}。`
    });
  }

  return '';
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
  const liveRankingSummary = analyticsSummaryCache || buildAnalyticsSummaryFromEvents(getLocalAnalyticsEvents(), 'browser-storage');
  const helperContext = buildAriLocalChatContext(context, message);
  const liveTopPlaces = helperContext.liveTopPlaces;
  const quietRoutes = helperContext.quietRoutes;
  const hiddenGems = helperContext.hiddenGems;
  const smallTalkReply = buildAriLocalSmallTalkReply(message, context, helperContext);
  if (smallTalkReply) return smallTalkReply;
  const route = findMatchingRoute(message, context.routes) || findMatchingRoute(combinedMessage, context.routes) || context.selectedRoute;
  const resource = findMatchingResource(message, context.resources) || findMatchingResource(combinedMessage, context.resources);
  const rainyRoute = findRouteByHints(context.routes, ['rain', 'rainy', '우천', '비 오는 날', '비오', '실내', 'indoor', 'museum', '박물관']) || context.selectedRoute;
  const easyRoute = findRouteByHints(context.routes, ['less walking', 'low walking', 'easy', '가볍게', '적게 걷', '많이 걷지', 'quiet', '실내', 'low-walking']) || context.selectedRoute;
  const shoppingRoute = findRouteByHints(context.routes, ['shopping', 'shop', 'brand', 'store', '쇼핑', '브랜드', '로컬 브랜드', 'gift']) || context.selectedRoute;
  const shoppingPlace = findResourceByHints(context.resources, ['shopping', 'shop', 'brand', 'store', '쇼핑', '브랜드', '편집숍', 'showroom']);
  const topRouteNames = context.ranking.topRoutes.map((item) => item.title);
  const topPlaceNames = context.ranking.topPlaces.map((item) => item.name);
  const rainyRouteTitle = rainyRoute && rainyRoute.id !== context.selectedRoute.id
    ? rainyRoute.title
    : reply({
      ko: '비 오는 날 실내 공예·디자인 코스',
      en: 'Rainy-Day Indoor Craft and Design Course',
      ja: '雨の日の屋内工芸・デザインコース',
      zh: '雨天室内工艺与设计路线'
    });
  const isGeneralRecommendationQuestion =
    hasAnyTerm(message, ['추천해줘', '추천해 줘', 'recommend', 'suggest', 'where should i start', '어디부터', '처음', 'first time', 'first-time', '처음 왔', '뭐가 좋아', 'not sure'])
    && !hasAnyTerm(message, ['비 오는 날', '비오', '우천', 'rain', '영어', 'english', '예약', 'reservation', '쇼핑', 'brand', 'shop', '걷', 'walk']);

  if (hasAnyTerm(message, ['안녕', 'hello', 'hi', 'hey', 'こんにちは', '你好'])) {
    return reply({
      ko: `안녕하세요. 아리예요. 지금 보고 있는 ${context.selectedRoute.title}부터 설명해드릴 수도 있고, 브랜드 발견 코스나 비 오는 날 실내 대안도 바로 추천해드릴게요.`,
      en: `Hello, I am ARI. I can start with ${context.selectedRoute.title}, or jump right into brand-discovery routes and rainy-day indoor alternatives.`,
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
      ko: '저는 마루 안에서 움직이는 공예·디자인 가이드 아리예요. 코스 추천 이유, 장소 의미, 비 오는 날 대체 코스, 영어 안내 가능 여부, 일정 묶기까지 앱 데이터 기준으로 자연스럽게 도와드릴 수 있어요.',
      en: 'I am ARI, MARU’s craft and design guide. I can explain route logic, place meaning, rainy-day alternatives, English-friendly options, and simple itinerary bundles using MARU data.',
      ja: '私はMARUの中で案内する工芸・デザインガイドのアリです。コース推薦の理由、場所の意味、雨の日の代替案、英語案内の有無、簡単な日程の組み立てまで、MARUのデータをもとに手伝えます。',
      zh: '我是MARU里的工艺与设计向导ARI。我可以根据MARU数据，帮你说明路线推荐理由、地点意义、雨天替代方案、英语支持情况，以及简单行程组合。'
    });
  }

  if (hasAnyTerm(message, ['기분', '잘 지내', '뭐해', 'how are you', 'what are you doing', '元気', '怎么样'])) {
    return reply({
      ko: '저는 여행 계획 도와드릴 준비가 잘 되어 있어요. 편하게 말 걸어주시면 분위기에 맞는 공예·디자인 코스를 바로 골라드릴게요.',
      en: 'I am ready to help with your trip. If you tell me the mood you want, I can quickly point you to a fitting craft and design route.',
      ja: '旅行計画を手伝う準備はばっちりです。雰囲気や気分を教えてもらえれば、それに合う工芸・デザインコースをすぐ選べます。',
      zh: '我已经准备好帮你规划旅行了。只要告诉我你想要的氛围，我就能很快帮你挑一条合适的工艺与设计路线。'
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

  if (hasAnyTerm(message, ['쇼핑', '브랜드', '선물', 'buy', 'shop', 'shopping', 'gift'])) {
    return reply({
      ko: `브랜드 발견과 선물 구매를 같이 보고 싶다면 ${shoppingRoute.title} 쪽이 좋아요. 장소로는 ${shoppingPlace?.displayName || 'KCDF 갤러리'}가 가장 바로 연결되고, 공예 상품성과 로컬 브랜드 감도를 함께 설명하기 좋습니다.`,
      en: `If you want brand discovery plus gift shopping, ${shoppingRoute.title} is the strongest fit. The clearest place match is ${shoppingPlace?.displayName || 'KCDF Gallery'}, which helps explain both craft value and local-brand taste.`,
      ja: `ブランド発見とギフト購入を一緒に見たいなら ${shoppingRoute.title} が合っています。場所では ${shoppingPlace?.displayName || 'KCDF Gallery'} が最もつながりやすく、工芸商品の価値とローカルブランドの感度を一緒に説明しやすいです。`,
      zh: `如果你想把品牌发现和礼物购买一起安排，${shoppingRoute.title} 会更合适。地点上最直接的是 ${shoppingPlace?.displayName || 'KCDF Gallery'}，它很适合同时说明工艺商品价值和本地品牌氛围。`
    });
  }

  if (isGeneralRecommendationQuestion) {
    return reply({
      ko: `처음 방문이라면 ${topRouteNames[0] || route.title}부터 시작하는 게 가장 무난해요. 공예·디자인 입문 설명, 브랜드 발견, 구매 연결 흐름이 고르게 잡혀 있고, 비가 오면 ${rainyRouteTitle}, 가볍게 걷고 싶으면 ${easyRoute.title}로 바꾸면 됩니다.`,
      en: `For a first visit, ${topRouteNames[0] || route.title} is the safest place to start. It balances craft introduction, brand discovery, and purchase flow. If it rains, switch to ${rainyRouteTitle}; if you want less walking, move to ${easyRoute.title}.`,
      ja: `初めての訪問なら ${topRouteNames[0] || route.title} から始めるのがいちばん無難です。工芸・デザインの入門説明、ブランド発見、購入導線のバランスが良く、雨なら ${rainyRouteTitle}、歩きを減らしたいなら ${easyRoute.title} に切り替えるとよいです。`,
      zh: `如果是第一次来，先从 ${topRouteNames[0] || route.title} 开始最稳妥。它兼顾工艺与设计入门、品牌发现和购买动线；下雨就换成 ${rainyRouteTitle}，想少走一点就换成 ${easyRoute.title}。`
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
      ko: '현재 버전의 MARU는 별도 서버형 LLM을 전제로 하지 않고, 브라우저 내 규칙 기반 AI 가이드형 인터페이스로 공공데이터와 현장 정보를 쉬운 공예·디자인 설명으로 풀어줍니다.',
      en: 'The current MARU build does not assume a server-scale LLM. Instead, it uses a browser-based AI-style guide interface to turn public data and field context into simple craft-and-design explanations.',
      ja: '現在のMARUはサーバー型LLMを前提にしておらず、ブラウザ内のAIガイド型インターフェースとして公共データと現場情報をわかりやすい工芸・デザイン解説に変えます。',
      zh: '当前版本的 MARU 并不以前置服务器型 LLM 为基础，而是用浏览器内的 AI 风格引导界面，把公共数据与现场信息转成易懂的工艺与设计说明。'
    });
  }

  if (hasAnyTerm(message, ['공공데이터', '공공 데이터', 'public data', 'data source', '문화데이터']) || /\bdata\b/.test(normalizedMessage)) {
    return reply({
      ko: 'MARU는 한국디자인진흥원 산업디자인전문회사·우수디자인전문회사·글로벌생활명품 데이터와 대한무역투자진흥공사 해외시장뉴스·4대 소비재 수출 데이터를 핵심 근거로 활용하도록 설계되었습니다.',
      en: 'MARU is designed around Korea Institute of Design Promotion data and KOTRA market/export data as its core public-data evidence.',
      ja: 'MARUは韓国デザイン振興院のデータとKOTRAの市場・輸出データを中核の公共データ根拠として活用する設計です。',
      zh: 'MARU的结构以韩国设计振兴院数据和KOTRA市场/出口数据作为核心公共数据依据。'
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
      ko: `문화행사 데이터는 오늘 갈 수 있는 공예·디자인 체험이나 전시를 코스에 연결하는 데 사용됩니다. ${bundle.title} 일정은 ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')}입니다.`,
      en: `Cultural-event data helps connect the route to something you can experience today. ${bundle.title} runs as ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')}.`,
      ja: `文化イベントデータは、その日に行ける伝統文化体験をコースへつなぐために使われます。${bundle.title} の流れは ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')} です。`,
      zh: `文化活动数据会把今天能参加的传统文化体验接到路线里。${bundle.title} 的安排是 ${bundle.stops.map((stop) => `${stop.time} ${stop.label}`).join(' / ')}。`
    });
  }

  if (hasAnyTerm(message, ['혼잡도', '혼잡', 'crowded', 'congestion', 'crowd'])) {
    return reply({
      ko: `${context.selectedRoute.title}의 현재 예상 혼잡도는 ${context.crowd.selectedRouteLabel}입니다. 이 값은 브라우저 안의 반응과 코스 특성 기반 시뮬레이션이며, 더 조용한 흐름을 원하면 ${easyRoute.title} 같은 가벼운 코스나 날씨 화면의 대체 추천을 같이 보세요.`,
      en: `The current expected crowd level for ${context.selectedRoute.title} is ${context.crowd.selectedRouteLabel}. This is a local browser-based estimate, so compare it with a lighter route like ${easyRoute.title} or check the weather alternatives if you want something calmer.`,
      ja: `${context.selectedRoute.title} の現在の予想混雑度は ${context.crowd.selectedRouteLabel} です。より静かな流れを望むなら、${easyRoute.title} のような軽めのコースや天気画面の代替案も見てみてください。`,
      zh: `${context.selectedRoute.title} 当前的预计拥挤度是 ${context.crowd.selectedRouteLabel}。如果你想更安静一点，可以同时看看 ${easyRoute.title} 这类更轻松的路线，或天气页面里的替代推荐。`
    });
  }

  if (hasAnyTerm(message, ['랭킹', '인기', 'top', 'ranking', 'popular'])) {
    return reply({
      ko: `현재 브라우저 반응 기준 상위 코스는 ${topRouteNames.join(', ')}입니다. 장소 기준 상위는 ${topPlaceNames.join(', ')}입니다. 이 랭킹은 기기 공통 실시간 집계가 아니라 현재 기기에 저장된 반응 기반 시뮬레이션입니다.`,
      en: `The top routes in this browser right now are ${topRouteNames.join(', ')}. The leading places are ${topPlaceNames.join(', ')}. This is a device-local simulation rather than a shared live ranking.`,
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
      ko: `현재 앱의 날씨 데이터는 ${weatherSummary}입니다. 맑은 날은 야외 공예·디자인 산책을, 비 오는 날은 ${rainyRouteTitle} 같은 실내 중심 코스를 추천합니다.`,
      en: `The current weather data in MARU is ${weatherSummary}. Clear days work well for outdoor craft and design walks, while rainy conditions are better handled by indoor-heavy options like ${rainyRouteTitle}.`,
      ja: `現在のMARU天気データは ${weatherSummary} です。晴れの日は屋外の工芸・デザイン散策、雨の日は ${rainyRouteTitle} のような屋内中心コースがおすすめです。`,
      zh: `MARU 当前的天气数据是 ${weatherSummary}。晴天适合户外工艺与设计散步，雨天则更适合像 ${rainyRouteTitle} 这样以室内为主的路线。`
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
    ko: `확정된 앱 데이터 밖의 내용을 사실처럼 단정하진 않겠지만, 대신 지금 바로 ${route.title} 추천 이유, 브랜드 설명, 비 오는 날 대체 코스, 구매 동선 정리까지는 자연스럽게 도와드릴 수 있어요. 편하게 하나만 물어봐 주세요.`,
    en: `I should not state details outside MARU data as facts, but I can still help right now with the reason for ${route.title}, brand context, rainy-day alternatives, or purchase-flow suggestions. Ask whichever sounds most useful.`,
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
        return `${fallbackAriReply(message, context)}

${t('ari.fallbackSuffix')}`;
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
        return `${fallbackAriReply(message, context)}

${t('ari.fallbackSuffix')}`;
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
          <button type="button" data-ari-close aria-label="${escapeHtml(t('ari.closeLabel'))}">?</button>
        </header>
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
      paper: '#e6dcc8',
      border: '#0f172a',
      accent: '#c0841a',
      filter: 'contrast(1.12) saturate(1.06) brightness(0.96)',
      levels: 7,
      tint: [178, 164, 126]
    }
  };

  return styles[style] || styles.minhwa;
}

function posterizeChannel(value, levels) {
  const step = 255 / Math.max(2, levels - 1);
  return Math.round(Math.round(value / step) * step);
}

function loadAiPhotoAsset(src) {
  if (aiPhotoAssetCache.has(src)) return aiPhotoAssetCache.get(src);

  const loader = new Promise((resolve, reject) => {
    const image = new Image();
    if (/^https?:/i.test(src)) image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load image asset: ${src}`));
    image.src = src;
  });

  aiPhotoAssetCache.set(src, loader);
  return loader;
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

function drawNightBackground(context, width, height, backgroundImage) {
  context.save();
  context.filter = 'saturate(0.95) brightness(0.82)';
  drawCoverImage(context, backgroundImage, 0, 0, width, height);
  context.restore();

  const overlay = context.createLinearGradient(0, 0, width, height);
  overlay.addColorStop(0, 'rgba(8, 20, 44, 0.22)');
  overlay.addColorStop(0.6, 'rgba(11, 18, 32, 0.16)');
  overlay.addColorStop(1, 'rgba(2, 6, 23, 0.56)');
  context.fillStyle = overlay;
  context.fillRect(0, 0, width, height);

  context.fillStyle = 'rgba(255, 235, 179, 0.9)';
  context.beginPath();
  context.arc(width - 118, 98, 34, 0, Math.PI * 2);
  context.fill();

  for (let index = 0; index < 18; index += 1) {
    const x = 40 + ((index * 71) % Math.max(width - 80, 1));
    const y = 26 + ((index * 37) % 128);
    const radius = 1.2 + ((index % 3) * 0.45);
    context.fillStyle = `rgba(255, 248, 220, ${0.32 + ((index % 4) * 0.11)})`;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fill();
  }
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
      const [nightBackground, segmentedSubject] = await Promise.all([
        loadAiPhotoAsset(AI_PHOTO_NIGHT_BACKGROUND_URL),
        segmentAiPhotoSubject(sourceImage, imageWidth, imageHeight)
      ]);
      if (!segmentedSubject?.maskCanvas) throw new Error('Subject mask unavailable');
      const maskedSubject = createMaskedCanvas(painterlyCanvas, segmentedSubject.maskCanvas, imageWidth, imageHeight);
      drawNightBackground(tempContext, imageWidth, imageHeight, nightBackground);
      drawForegroundShadow(tempContext, segmentedSubject.maskCanvas, 0, 0, imageWidth, imageHeight);
      drawNightSubjectGlow(tempContext, segmentedSubject.maskCanvas, 0, 0, imageWidth, imageHeight);
      tempContext.drawImage(maskedSubject, 0, 0);
    } catch (error) {
      usedFallback = true;
      tempContext.drawImage(painterlyCanvas, 0, 0);
      tempContext.globalCompositeOperation = 'multiply';
      const fallbackOverlay = tempContext.createLinearGradient(0, 0, imageWidth, imageHeight);
      fallbackOverlay.addColorStop(0, 'rgba(15, 23, 42, 0.12)');
      fallbackOverlay.addColorStop(1, 'rgba(30, 41, 59, 0.38)');
      tempContext.fillStyle = fallbackOverlay;
      tempContext.fillRect(0, 0, imageWidth, imageHeight);
      tempContext.globalCompositeOperation = 'source-over';
      transformNote = `${transformNote} ${ft('photo.fallback', 'The segmentation model could not load, so MARU used the built-in browser art filter instead.')}`;
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
        setStatus(ft('photo.fallback', 'The segmentation model could not load, so MARU used the built-in browser art filter instead.'));
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

    const mapOpenRouteButton = event.target.closest('[data-map-open-route]');
    if (mapOpenRouteButton) {
      const route = getRouteFromUrlOrStorage();
      void trackRouteEngagement(route, 'visit_intent', { keepalive: true });
    }

    const placeMapLink = event.target.closest('.place-map-link');
    if (placeMapLink) {
      const route = qs('[data-detail-title]') ? getRouteFromUrlOrStorage() : null;
      const resourceCard = placeMapLink.closest('[data-resource-card]');
      const resource = resourceCard ? findResourceById(resourceCard.dataset.resourceCard) : null;
      if (route && resource) {
        const resourceView = getResourceView(resource);
        void trackRouteEngagement(route, 'visit_intent', {
          keepalive: true,
          places: [{
            id: resource.id,
            name: resourceView.displayName || resource.nameKo || resource.nameEn || resource.id
          }]
        });
      }
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

    const recommendRouteButton = event.target.closest('[data-route-action="recommend-current"]');
    if (recommendRouteButton) {
      const route = getRouteFromUrlOrStorage();
      recommendRouteButton.disabled = true;
      try {
        await trackRouteEngagement(route, 'recommend');
        if (qs('[data-foreigner-ranking-section]')) renderForeignerRanking();
        showToast(getCurrentLanguage() === 'ko' ? '추천이 랭킹 데이터에 반영되었습니다.' : 'Recommendation added to the ranking data.');
      } finally {
        recommendRouteButton.disabled = false;
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
  renderLocalizedContent();
  markActiveBottomTab();
  bindMobileInteractions();
  bindAiPhotoDemo();
  mountAriChat();
  registerServiceWorker();
}

initialize();
