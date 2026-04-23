import Icon from "@/components/ui/icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const HERO_IMAGE = "https://cdn.poehali.dev/projects/fbdd8c30-03fa-4929-b997-7be7b56e3ad3/files/34012ef3-4791-4a45-a14c-360736a6a7d5.jpg";
const MASSAGE_IMAGE = "https://cdn.poehali.dev/projects/fbdd8c30-03fa-4929-b997-7be7b56e3ad3/files/533341bb-b359-4977-b715-c1a867e017ce.jpg";

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
  { title: "Аппаратный массаж LPG", price: "1 300" },
  { title: "Аппаратный массаж LPG лица", price: "1 300" },
  { title: "Кавитация", price: "1 100" },
  { title: "Вибрационный массаж", price: "1 000" },
  { title: "Эндосфера", price: "1 300" },
  { title: "EMS (увеличение объёма мышц)", price: "1 200" },
  { title: "RF-лифтинг лица и тела", price: "1 100" },
  { title: "Роликовый тренажёр", price: "500" },
  { title: "Индиба терапия", price: "1 400" },
  { title: "Лазерный липолиз", price: "800" },
  { title: "Прессотерапия с прогревом", price: "800" },
  { title: "Субдермальный массаж", price: "1 000" },
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

export default function AboutPricesReviews() {
  return (
    <>
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
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">Моя история и мои миссии</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-5">Меня зовут Анна, и я создала эту студию с одной простой мечтой — помочь каждой женщине почувствовать себя красивой и уверенной в своём теле. Без хирургии, без боли, без стресса.</p>
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

      {/* PRICES */}
      <section id="prices" className="section-padding bg-sage-pale">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sage text-sm font-body tracking-widest uppercase mb-4">Стоимость</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">Прайс-лист</h2>
            <p className="text-muted-foreground font-body max-w-xl mx-auto">
              Стоимость одного сеанса каждой процедуры
            </p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-warm-beige overflow-hidden">
            {prices.map((p, i) => (
              <div
                key={p.title}
                className={`flex items-center justify-between px-8 py-5 group hover:bg-sage-pale transition-colors duration-200 ${
                  i !== prices.length - 1 ? "border-b border-warm-beige" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-sage opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="font-body text-foreground text-sm md:text-base">{p.title}</span>
                </div>
                <span className="font-display text-xl md:text-2xl text-sage font-light whitespace-nowrap ml-6">
                  {p.price} ₽
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="#contacts"
              className="inline-flex items-center gap-2 bg-sage text-white px-8 py-4 rounded-full font-body hover:opacity-90 transition-opacity"
            >
              Записаться на процедуру
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
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
                <p className="text-muted-foreground font-body text-sm leading-relaxed italic">«Прошла курс из 10 процедур и результат превзошёл все ожидания! Минус 4 см в талии и кожа стала как шёлк. Анна — настоящий профессионал, объясняет каждый шаг.»</p>
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
    </>
  );
}