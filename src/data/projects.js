export const PROJECTS = [
  {
    id: 1,
    name: 'Central Park',
    city: 'Актау',
    klass: 'Бизнес',
    classFull: 'Бизнес-класс',
    term: 'Сдан',
    termBadge: 'Сдан',
    rooms: [2, 3],
    floors: 12,
    price: 22534000,
    image: '/images/project-central-park.jpg',
    meta: ['Актау', 'Море', '8 мин'],
  },
  {
    id: 2,
    name: 'Avenue Park',
    city: 'Актобе',
    klass: 'Бизнес+',
    classFull: 'Бизнес +',
    term: 'I квартал 2026 года',
    termBadge: 'I квартал 2026',
    rooms: [1, 2, 3],
    floors: 10,
    price: 17001000,
    image: '/images/project-avenue-park.jpg',
    meta: ['Актобе', 'Парк', '8 мин'],
  },
  {
    id: 3,
    name: 'Adal Town',
    city: 'Актау',
    klass: 'Комфорт',
    classFull: 'Комфорт-класс',
    term: 'II квартал 2026 года',
    termBadge: 'II квартал 2026',
    rooms: [1, 2],
    floors: 9,
    price: 8316000,
    image: '/images/project-adal-town.jpg',
    meta: ['Актау', 'Море', '10 мин'],
  },
  {
    id: 4,
    name: 'Orda Palace',
    city: 'Усть-Каменогорск',
    klass: 'Комфорт+',
    classFull: 'Комфорт +',
    term: 'Сдан',
    termBadge: 'Сдан',
    rooms: [2, 3, 4],
    floors: 14,
    price: 18200000,
    image: '/images/project-orda-palace.jpg',
    meta: ['Усть-Каменогорск', 'Центр', '5 мин'],
  },
];

export const FEATURED_DATA = {
  'Central Park': {
    name: 'Central Park',
    klass: 'Бизнес-класс',
    termBadge: 'Сдан',
    price: 22534000,
    location: 'г. Актау · первая береговая линия',
    image: '/images/project-central-park.jpg',
    desc: [
      'Жилой комплекс бизнес-класса в престижном районе Актау с видом на Каспийское море.',
      '5 минут до набережной и городского пляжа, 10 минут до центра города.',
      'Закрытый двор без машин, детские и спортивные площадки, зоны отдыха.',
      'Монолитно-каркасное строение, панорамные окна, потолки 3 метра.',
    ],
  },
  'Avenue Park': {
    name: 'Avenue Park',
    klass: 'Бизнес +',
    termBadge: 'I квартал 2026',
    price: 17001000,
    location: 'г. Актобе · Парк Первого Президента',
    image: '/images/featured-avenue-park.jpg',
    desc: [
      'Жилой комплекс бизнес-класса в самом сердце города Актобе на пересечении двух континентов.',
      'В 8 минутах от Парка Первого Президента, в 5 минутах от мечети Нур Гасыр, в 2 минутах от реки Илек.',
      '№1 школа имени Тасмагамбетова, сад «Триатлон», 3 садика, областная больница и роддом.',
      'Монолитное строение, большие панорамные окна, потолки 3 метра.',
    ],
  },
  'Adal Town': {
    name: 'Adal Town',
    klass: 'Комфорт-класс',
    termBadge: 'II квартал 2026',
    price: 8316000,
    location: 'г. Актау · развивающийся район',
    image: '/images/project-adal-town.jpg',
    desc: [
      'Современный комфортный жилой комплекс для молодых семей в развивающемся районе Актау.',
      'Школы, детские сады и торговые центры в шаговой доступности.',
      'Благоустроенная территория, спортивные и игровые площадки.',
      'Надёжное строение, продуманные планировки, доступные цены.',
    ],
  },
};

export const BANK_LIST = ['FREEDOM BANK', 'Altyn Bank', 'bcc.kz', 'ОТБАСЫ БАНК'];

export const COMMERCIAL = [
  {
    title: 'Парковочное место',
    from: 'от 1 500 000 ₸',
    meta: ['от 10 кв.м.', 'электрозарядка'],
    image: '/images/commercial-parking.jpg',
  },
  {
    title: 'Складское помещение',
    from: 'от 800 000 ₸',
    meta: ['от 20 кв.м.', 'огнезащита'],
    image: '/images/commercial-storage.jpg',
  },
  {
    title: 'Коммерческое помещение',
    from: 'от 25 000 000 ₸',
    meta: ['от 150 кв.м.', 'отдельный вход'],
    image: '/images/commercial-space.jpg',
  },
];

export const CONTACTS = [
  { title: '+7 701 083-66-06', sub: 'Принимаем звонки ежедневно с 09:00 до 18:00 — для клиентов и общих обращений', href: 'tel:+77010836606' },
  { title: '+7 701 083-66-06', sub: 'Для бизнес-клиентов, агентств и по вопросам коммерческой недвижимости', href: 'tel:+77010836606' },
  { title: 'bsholding@gmail.com', sub: 'Для потенциальных инвесторов, вопросов и деловых предложений', href: 'mailto:bsholding@gmail.com' },
];

export const FOOTER_COLS = [
  { title: 'Проекты', items: ['Central Park', 'Avenue Park', 'Adal Town', 'Orda Palace'] },
  { title: 'Компания', items: ['О нас', 'Вакансии', 'Новости'] },
  { title: 'Поддержка', items: ['Контакты', 'График работы'] },
  { title: 'Офисы продаж', items: ['Актау', 'Актобе', 'Усть-Каменогорск'] },
  { title: 'BS Пайда', items: ['Рассрочка', 'Ипотека', 'Условия'] },
];

export const SOCIALS = ['IG', 'TG', 'FB', 'TT', 'YT'];

export const FILTER_SPEC = [
  ['city', ['Все города', 'Актау', 'Актобе', 'Усть-Каменогорск']],
  ['klass', ['Все классы', 'Бизнес', 'Бизнес+', 'Комфорт', 'Комфорт+']],
  ['term', ['Любой срок', 'Сдан', '2026 год']],
  ['floor', ['Любой этаж', 'до 5 этажей', '5–10 этажей', '10 и выше']],
  ['rooms', ['Все комнаты', '1', '2', '3', '4']],
];

export const DEFAULT_FILTER = {
  city: 'Все города',
  klass: 'Все классы',
  term: 'Любой срок',
  floor: 'Любой этаж',
  rooms: 'Все комнаты',
};
