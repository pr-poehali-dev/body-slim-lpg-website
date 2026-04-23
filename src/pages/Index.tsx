import { useState } from "react";
import Icon from "@/components/ui/icon";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const HERO_IMAGE = "https://cdn.poehali.dev/projects/fbdd8c30-03fa-4929-b997-7be7b56e3ad3/files/34012ef3-4791-4a45-a14c-360736a6a7d5.jpg";
const MASSAGE_IMAGE = "https://cdn.poehali.dev/projects/fbdd8c30-03fa-4929-b997-7be7b56e3ad3/files/533341bb-b359-4977-b715-c1a867e017ce.jpg";

const services = [
  {
    icon: "Sparkles",
    title: "LPG массаж тела",
    desc: "Аппаратный массаж для коррекции фигуры, устранения целлюлита и моделирования силуэта. Видимый результат уже с первых процедур.",
    duration: "45–60 мин",
    effect: "Коррекция фигуры",
  },
  {
    icon: "Flower2",
    title: "LPG массаж лица",
    desc: "Омолаживающий аппаратный массаж лица. Подтяжка контуров, уменьшение морщин, сияющая кожа без инъекций.",
    duration: "30–45 мин",
    effect: "Омоложение",
  },
  {
    icon: "Droplets",
    title: "Антицеллюлитная программа",
    desc: "Комплексная программа из 10 сеансов LPG для интенсивного устранения целлюлита и улучшения качества кожи.",
    duration: "Курс 10 сеансов",
    effect: "Гладкость кожи",
  },
  {
    icon: "Heart",
    title: "Моделирование силуэта",
    desc: "Программа для точечной работы с проблемными зонами: живот, бёдра, ягодицы. Мягкое и деликатное воздействие.",
    duration: "60 мин",
    effect: "Стройность",
  },
];

const benefits = [
  { icon: "ShieldCheck", title: "Безопасно", desc: "Неинвазивная процедура без боли и реабилитации" },
  { icon: "TrendingUp", title: "Эффективно", desc: "Клинически доказанные результаты уже после 5–7 сеансов" },
  { icon: "Clock", title: "Быстро", desc: "Сеанс занимает всего 45 минут в обеденный перерыв" },
  { icon: "Star", title: "Профессионально", desc: "Сертифицированное оборудование последнего поколения" },
];

const reviews = [
  {
    name: "Марина К.",
    age: "34 года",
    text: "Прошла курс из 10 процедур и результат превзошёл все ожидания! Минус 4 см в талии и кожа стала как шёлк. Анетка — настоящий профессионал, объясняет каждый шаг.",
    rating: 5,
    result: "−4 см в талии",
  },
  {
    name: "Елена В.",
    age: "41 год",
    text: "Делала LPG массаж лица. Через 8 сеансов заметила, что овал лица подтянулся, щёчки приподнялись. Коллеги думают, что отдохнула на море! Очень рекомендую.",
    rating: 5,
    result: "Подтяжка лица",
  },
  {
    name: "Ирина С.",
    age: "28 лет",
    text: "Долго сомневалась, но рискнула. Целлюлит на бёдрах уменьшился значительно уже к 5-му сеансу. Студия очень уютная, атмосфера расслабляющая. Буду ходить регулярно!",
    rating: 5,
    result: "Ушёл целлюлит",
  },
  {
    name: "Наталья П.",
    age: "45 лет",
    text: "Пришла с комплексом проблем — живот, бока, дряблая кожа. Анетка составила индивидуальную программу. Уже после 7 сеансов муж спросил, не похудела ли я. Это лучший комплимент!",
    rating: 5,
    result: "Подтянутое тело",
  },
];

const prices = [
  {
    title: "Пробная процедура",
    subtitle: "Познакомьтесь с LPG",
    price: "1 500",
    features: ["1 сеанс LPG массажа", "Консультация специалиста", "Зона по вашему выбору"],
    highlight: false,
  },
  {
    title: "Курс «Старт»",
    subtitle: "Первые результаты",
    price: "12 000",
    oldPrice: "15 000",
    features: ["5 сеансов LPG массажа", "Составление программы", "Замеры до и после", "Рекомендации по уходу"],
    highlight: true,
    badge: "Популярный",
  },
  {
    title: "Курс «Трансформация»",
    subtitle: "Максимальный эффект",
    price: "22 000",
    oldPrice: "28 000",
    features: ["10 сеансов LPG массажа", "Индивидуальная программа", "Замеры каждые 3 сеанса", "Фото до/после", "Поддержка между сеансами"],
    highlight: false,
  },
];

const articles = [
  {
    tag: "LPG массаж",
    title: "Как работает LPG массаж: механизм воздействия",
    excerpt: "LPG массаж использует технологию механической стимуляции тканей. Специальный аппарат с роликами воздействует на кожу, подкожный жир и соединительную ткань...",
  },
  {
    tag: "Целлюлит",
    title: "5 мифов о целлюлите, в которые пора перестать верить",
    excerpt: "Целлюлит — это не болезнь и не показатель лишнего веса. Это особенность строения жировой ткани, с которой сталкиваются 85% женщин...",
  },
  {
    tag: "Уход за телом",
    title: "Как поддержать результат LPG между сеансами",
    excerpt: "Чтобы результаты LPG массажа держались как можно дольше, важно соблюдать несколько простых правил в повседневной жизни...",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#about", label: "О нас" },
    { href: "#prices", label: "Прайс" },
    { href: "#reviews", label: "Отзывы" },
    { href: "#gallery", label: "Фото" },
    { href: "#blog", label: "Блог" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-warm-beige">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-display text-xl font-semibold tracking-wide text-foreground">
            BODY SLIM <span className="text-sage text-sm font-light">by Anetka</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-sage transition-colors duration-200 font-body"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contacts"
            className="hidden md:block bg-sage text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-all duration-200 font-body"
          >
            Записаться
          </a>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-warm-beige px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-muted-foreground hover:text-sage transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={() => setMenuOpen(false)}
              className="bg-sage text-white text-sm px-5 py-2.5 rounded-full text-center"
            >
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Студия LPG массажа"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-body">Запись открыта</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
              Тело,<br />
              <em className="not-italic" style={{ color: "hsl(142 25% 72%)" }}>которое вы</em><br />
              заслуживаете
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-10 font-body font-light max-w-lg">
              Профессиональный LPG массаж для коррекции фигуры, омоложения кожи и глубокого расслабления в уютной студии Анетки
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contacts"
                className="bg-sage text-white px-8 py-4 rounded-full text-base font-body font-medium hover:opacity-90 transition-all duration-200 shadow-lg"
              >
                Записаться на пробный сеанс
              </a>
              <a
                href="#services"
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-base font-body hover:bg-white/20 transition-all duration-200"
              >
                Узнать об услугах
              </a>
            </div>
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { num: "500+", label: "довольных клиентов" },
                { num: "5 лет", label: "опыта работы" },
                { num: "98%", label: "рекомендуют нас" },
              ].map((s) => (
                <div key={s.num}>
                  <div className="font-display text-3xl text-white font-light">{s.num}</div>
                  <div className="text-white/60 text-sm font-body mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a
          href="#services"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2 animate-bounce"
        >
          <span className="text-xs font-body">Листайте вниз</span>
          <Icon name="ChevronDown" size={20} />
        </a>
      </section>

      {/* BENEFITS STRIP */}
      <section className="bg-sage py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name={b.icon as AnyIcon} size={22} className="text-white" />
              </div>
              <div>
                <div className="text-white font-display text-lg font-medium">{b.title}</div>
                <div className="text-white/70 text-sm font-body mt-1">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Наши услуги</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Процедуры LPG массажа
            </h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
              Каждая процедура подбирается индивидуально под ваши цели и особенности тела
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-3xl p-8 border border-warm-beige hover:border-sage transition-colors duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-sage-pale flex items-center justify-center flex-shrink-0 group-hover:bg-sage group-hover:scale-105 transition-all duration-300">
                    <Icon name={s.icon as AnyIcon} size={24} className="text-sage group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-foreground mb-3">{s.title}</h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{s.desc}</p>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                        <Icon name="Clock" size={13} />
                        {s.duration}
                      </span>
                      <span className="bg-sage-pale text-sage text-xs font-body px-3 py-1 rounded-full">
                        {s.effect}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-full font-body hover:opacity-90 transition-opacity"
            >
              Записаться на консультацию
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section-padding bg-warm-beige">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={MASSAGE_IMAGE}
                alt="Анетка — специалист LPG массажа"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-sage-pale flex items-center justify-center">
                    <Icon name="Award" size={18} className="text-sage" />
                  </div>
                  <div>
                    <div className="font-body font-semibold text-foreground text-sm">Сертифицированный специалист</div>
                    <div className="text-muted-foreground text-xs font-body">Международный сертификат LPG</div>
                  </div>
                </div>
                <div className="text-sage font-display text-2xl">5 лет</div>
                <div className="text-muted-foreground text-xs font-body">профессионального опыта</div>
              </div>
            </div>
            <div>
              <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">О студии</div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                История Анетки<br />и её миссии
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">
                Меня зовут Анетка, и я создала эту студию с одной простой мечтой — помочь каждой женщине почувствовать себя красивой и уверенной в своём теле. Без хирургии, без боли, без стресса.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">
                5 лет назад я сама прошла курс LPG массажа и была поражена результатами. Тогда я решила получить профессиональную сертификацию и открыть собственную студию, где каждая клиентка будет чувствовать себя желанным гостем.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Сегодня BODY SLIM BY ANETKA — это уютное пространство с профессиональным оборудованием, индивидуальным подходом и искренней заботой о каждой клиентке.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "GraduationCap", text: "Диплом косметолога" },
                  { icon: "BadgeCheck", text: "Сертификат LPG Alliance" },
                  { icon: "Users", text: "500+ клиентов" },
                  { icon: "BookOpen", text: "Регулярное обучение" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sage-pale flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as AnyIcon} size={16} className="text-sage" />
                    </div>
                    <span className="text-sm font-body text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW LPG WORKS */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Технология</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Как работает LPG массаж</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Научно обоснованная технология механического воздействия на ткани тела
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "Zap",
                title: "Стимуляция клеток",
                desc: "Специальный аппликатор с роликами мягко захватывает кожную складку и создаёт вакуумное воздействие, пробуждая спящие клетки",
              },
              {
                step: "02",
                icon: "Activity",
                title: "Активация обмена",
                desc: "Механическая стимуляция запускает выработку коллагена, эластина и гиалуроновой кислоты. Ускоряется лимфодренаж и кровообращение",
              },
              {
                step: "03",
                icon: "Sparkles",
                title: "Видимый результат",
                desc: "Уменьшение объёмов, разглаживание целлюлита, подтяжка кожи и ощущение лёгкости уже после первых процедур",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="font-display font-light leading-none mb-4 select-none" style={{ fontSize: "80px", color: "hsl(142 20% 94%)" }}>
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-sage-pale flex items-center justify-center mb-5">
                  <Icon name={item.icon as AnyIcon} size={22} className="text-sage" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="section-padding bg-sage-pale">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Стоимость</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Прайс-лист</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Выберите подходящую программу. Все курсы включают бесплатную консультацию
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prices.map((p) => (
              <div
                key={p.title}
                className={`rounded-3xl p-8 relative overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
                  p.highlight
                    ? "bg-sage text-white shadow-2xl"
                    : "bg-white border border-warm-beige"
                }`}
              >
                {p.badge && (
                  <div className="absolute top-6 right-6 bg-white/20 text-white text-xs font-body px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                )}
                <div className={`text-sm font-body tracking-widest uppercase mb-2 ${p.highlight ? "text-white/60" : "text-sage"}`}>
                  {p.subtitle}
                </div>
                <h3 className={`font-display text-2xl mb-6 ${p.highlight ? "text-white" : "text-foreground"}`}>
                  {p.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className={`font-display text-4xl font-light ${p.highlight ? "text-white" : "text-foreground"}`}>
                    {p.price} ₽
                  </span>
                </div>
                {p.oldPrice && (
                  <div className={`text-sm line-through mb-6 ${p.highlight ? "text-white/50" : "text-muted-foreground"}`}>
                    {p.oldPrice} ₽
                  </div>
                )}
                {!p.oldPrice && <div className="mb-6" />}
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Icon
                        name="Check"
                        size={16}
                        className={p.highlight ? "text-white/70" : "text-sage"}
                      />
                      <span className={`text-sm font-body ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacts"
                  className={`block text-center py-3 px-6 rounded-full text-sm font-body font-medium transition-all duration-200 ${
                    p.highlight
                      ? "bg-white text-sage hover:bg-white/90"
                      : "bg-sage text-white hover:opacity-90"
                  }`}
                >
                  Выбрать программу
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm font-body mt-8">
            Также доступны разовые процедуры и индивидуальные пакеты. Уточните у специалиста.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Отзывы</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Что говорят клиенты</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Настоящие истории реальных людей о своём опыте в BODY SLIM BY ANETKA
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-3xl p-8 border border-warm-beige">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-sage-pale flex items-center justify-center">
                      <span className="font-display text-sage text-lg">{r.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-body font-semibold text-foreground text-sm">{r.name}</div>
                      <div className="text-muted-foreground text-xs font-body">{r.age}</div>
                    </div>
                  </div>
                  <span className="bg-sage-pale text-sage text-xs font-body px-3 py-1.5 rounded-full">
                    {r.result}
                  </span>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed italic">
                  «{r.text}»
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Интерьер</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Атмосфера студии</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Мы создали пространство, где вы можете полностью расслабиться и насладиться процедурой
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 rounded-3xl overflow-hidden h-80 md:h-96">
              <img
                src={HERO_IMAGE}
                alt="Интерьер студии"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-5 rounded-3xl overflow-hidden h-80 md:h-96">
              <img
                src={MASSAGE_IMAGE}
                alt="Процедура LPG"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="md:col-span-12 bg-sage-pale rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
                  Хотите увидеть студию вживую?
                </h3>
                <p className="text-muted-foreground font-body">
                  Запишитесь на бесплатную экскурсию и первую консультацию
                </p>
              </div>
              <a
                href="#contacts"
                className="flex-shrink-0 bg-sage text-white px-8 py-4 rounded-full font-body hover:opacity-90 transition-opacity"
              >
                Прийти в студию
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="section-padding bg-warm-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Полезное</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Статьи о красоте и здоровье</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded-3xl p-8 border border-warm-beige hover:border-sage transition-colors duration-300 group cursor-pointer"
              >
                <span className="bg-sage-pale text-sage text-xs font-body px-3 py-1.5 rounded-full">
                  {a.tag}
                </span>
                <h3 className="font-display text-xl text-foreground mt-5 mb-3 group-hover:text-sage transition-colors duration-200">
                  {a.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">{a.excerpt}</p>
                <div className="flex items-center gap-2 text-sage text-sm font-body group-hover:gap-3 transition-all duration-200">
                  Читать далее
                  <Icon name="ArrowRight" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="section-padding bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Контакты</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Запишитесь на процедуру</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Оставьте заявку и мы свяжемся с вами в течение 30 минут для записи на удобное время
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 border border-warm-beige">
              <h3 className="font-display text-2xl text-foreground mb-6">Оставить заявку</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-body text-foreground mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Как вас зовут?"
                    className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-foreground mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-foreground mb-2">Интересующая процедура</label>
                  <select className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors text-muted-foreground">
                    <option value="">Выберите процедуру</option>
                    <option>LPG массаж тела</option>
                    <option>LPG массаж лица</option>
                    <option>Антицеллюлитная программа</option>
                    <option>Моделирование силуэта</option>
                    <option>Не знаю — нужна консультация</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-body text-foreground mb-2">Комментарий (необязательно)</label>
                  <textarea
                    placeholder="Расскажите о своём запросе..."
                    rows={3}
                    className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors resize-none"
                  />
                </div>
                <button className="w-full bg-sage text-white py-4 rounded-2xl font-body font-medium hover:opacity-90 transition-opacity">
                  Записаться на процедуру
                </button>
                <p className="text-xs text-muted-foreground font-body text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 border border-warm-beige">
                <h3 className="font-display text-2xl text-foreground mb-6">Как нас найти</h3>
                <div className="space-y-5">
                  {[
                    { icon: "MapPin", label: "Адрес", value: "г. Москва, ул. Цветочная, 15, офис 204" },
                    { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
                    { icon: "Mail", label: "Email", value: "hello@bodyslim-anetka.ru" },
                    { icon: "Clock", label: "Режим работы", value: "Пн–Сб: 9:00–21:00, Вс: 10:00–18:00" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sage-pale flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name={c.icon as AnyIcon} size={17} className="text-sage" />
                      </div>
                      <div>
                        <div className="text-xs font-body text-muted-foreground mb-0.5">{c.label}</div>
                        <div className="text-sm font-body text-foreground font-medium">{c.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sage rounded-3xl p-8">
                <h3 className="font-display text-2xl text-white mb-3">Мы в соцсетях</h3>
                <p className="text-white/70 font-body text-sm mb-6">
                  Следите за нашими новостями, акциями и результатами клиентов
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: "Instagram", label: "Instagram" },
                    { icon: "MessageCircle", label: "Telegram" },
                    { icon: "Phone", label: "WhatsApp" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-4 py-2.5 text-sm font-body transition-all duration-200"
                    >
                      <Icon name={s.icon as AnyIcon} size={15} />
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <div className="h-64 bg-warm-beige relative overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <Icon name="MapPin" size={32} className="text-sage mx-auto mb-3" />
          <p className="font-display text-xl text-foreground">г. Москва, ул. Цветочная, 15</p>
          <p className="font-body text-sm text-muted-foreground mt-1">Схема проезда — уточните в разделе контактов</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display text-2xl font-semibold mb-1">
                BODY SLIM <span className="font-light text-base" style={{ color: "hsl(142 25% 72%)" }}>by Anetka</span>
              </div>
              <p className="text-white/50 text-sm font-body">Студия LPG массажа</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-body text-white/60 justify-center">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="text-white/40 text-xs font-body text-center">
              © 2024 BODY SLIM BY ANETKA<br />
              Все права защищены
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}