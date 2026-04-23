import Icon from "@/components/ui/icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const HERO_IMAGE = "https://cdn.poehali.dev/projects/fbdd8c30-03fa-4929-b997-7be7b56e3ad3/files/34012ef3-4791-4a45-a14c-360736a6a7d5.jpg";

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

export default function HeroAndServices() {
  return (
    <>
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
    </>
  );
}
