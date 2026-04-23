import Navbar from "@/components/Navbar";
import Icon from "@/components/ui/icon";

const sections = [
  {
    num: "01",
    title: "Общие положения",
    content: (
      <>
        <p>Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта <strong>bodyslim-anetka.ru</strong>.</p>
        <p className="mt-3">Оператор персональных данных: <strong>ИП Тищенко Анна Александровна</strong>, ИНН 381205675968.</p>
        <p className="mt-3">Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
      </>
    ),
  },
  {
    num: "02",
    title: "Данные, которые мы собираем",
    content: (
      <ul className="space-y-2 mt-1">
        {["Имя", "Номер телефона", "Адрес электронной почты (при наличии)", "Интересующая услуга и комментарий (при наличии)"].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "03",
    title: "Цели обработки",
    content: (
      <ul className="space-y-2 mt-1">
        {["Запись клиента на процедуру и организация оказания услуг", "Связь с клиентом для подтверждения записи", "Улучшение качества обслуживания"].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "04",
    title: "Правовые основания",
    content: (
      <ul className="space-y-2 mt-1">
        {["Согласие субъекта персональных данных (ст. 6 ч. 1 п. 1 ФЗ-152)", "Исполнение договора, стороной которого является субъект (ст. 6 ч. 1 п. 5 ФЗ-152)"].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "05",
    title: "Хранение и защита данных",
    content: (
      <>
        <p>Персональные данные хранятся на защищённых серверах и не передаются третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством РФ.</p>
        <p className="mt-3">Срок хранения — до достижения целей обработки или до отзыва согласия субъектом персональных данных.</p>
      </>
    ),
  },
  {
    num: "06",
    title: "Ваши права",
    content: (
      <ul className="space-y-2 mt-1">
        {["Получить информацию об обработке ваших данных", "Потребовать уточнения, блокировки или уничтожения данных", "Отозвать согласие на обработку персональных данных", "Обжаловать действия Оператора в Роскомнадзоре"].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    num: "07",
    title: "Cookies",
    content: (
      <p>Сайт использует файлы cookie для корректной работы и улучшения пользовательского опыта. Продолжая использовать сайт, вы соглашаетесь с их использованием.</p>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <Navbar />

      {/* Hero */}
      <div className="pt-28 pb-16 px-6 text-center">
        <div className="text-sage text-sm tracking-widest uppercase mb-4">Документы</div>
        <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">Политика конфиденциальности</h1>
        <p className="text-muted-foreground text-sm">Последнее обновление: 23 апреля 2026 г.</p>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 pb-20 space-y-6">
        {sections.map((s) => (
          <div key={s.num} className="bg-white rounded-3xl p-8 border border-warm-beige">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-sage-pale flex items-center justify-center flex-shrink-0">
                <span className="text-sage font-display text-sm font-semibold">{s.num}</span>
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl text-foreground mb-3">{s.title}</h2>
                <div className="text-muted-foreground text-sm leading-relaxed">{s.content}</div>
              </div>
            </div>
          </div>
        ))}

        {/* Контакты */}
        <div className="bg-sage rounded-3xl p-8">
          <h2 className="font-display text-2xl text-white mb-5">Контакты оператора</h2>
          <div className="space-y-4">
            {[
              { icon: "Mail", label: "Email", value: "bodyanetka@анетка.рф", href: "mailto:bodyanetka@анетка.рф" },
              { icon: "Phone", label: "Телефон", value: "+7 (902) 544-51-19", href: "tel:+79025445119" },
              { icon: "MapPin", label: "Адрес", value: "г. Иркутск, ул. Багратиона, 46/4", href: undefined },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon as "Mail"} size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-white/60 text-xs mb-0.5">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-white text-sm font-medium hover:text-white/80 transition-colors">{c.value}</a>
                  ) : (
                    <span className="text-white text-sm font-medium">{c.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Назад */}
        <div className="text-center pt-4">
          <a href="/" className="inline-flex items-center gap-2 text-sage font-body text-sm hover:opacity-70 transition-opacity">
            <Icon name="ArrowLeft" size={16} />
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
}