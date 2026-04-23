import { useState } from "react";
import Icon from "@/components/ui/icon";
import { navLinks } from "@/components/Navbar";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyIcon = any;

const SAVE_CLIENT_URL = "https://functions.poehali.dev/1e3f942e-95c3-401a-8a00-49a97d58439d";

export default function ContactsFooter() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SAVE_CLIENT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", service: "", comment: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
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
              {status === "success" ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-sage-pale flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={32} className="text-sage" />
                  </div>
                  <h4 className="font-display text-xl text-foreground mb-2">Заявка отправлена!</h4>
                  <p className="text-muted-foreground font-body text-sm">Мы свяжемся с вами в течение 30 минут</p>
                  <button
                    className="mt-6 text-sage font-body text-sm underline underline-offset-2"
                    onClick={() => setStatus("idle")}
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-body text-foreground mb-2">Ваша фамилия и имя</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Как вас зовут?"
                      required
                      className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-foreground mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-foreground mb-2">Интересующая процедура</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors text-muted-foreground"
                    >
                      <option value="">Выберите процедуру</option>
                      <option>LPG массаж тела</option>
                      <option>LPG массаж лица</option>
                      <option>Кавитация</option>
                      <option>Вибрационный массаж</option>
                      <option>Эндосфера</option>
                      <option>EMS скульпт</option>
                      <option>RF-лифтинг лица и тела</option>
                      <option>Роликовый массажёр</option>
                      <option>Индиба терапия</option>
                      <option>Лазерный липолиз</option>
                      <option>Прессотерапия с прогревом</option>
                      <option>Субдермальный массаж</option>
                      <option>Не знаю — нужна консультация</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-body text-foreground mb-2">Комментарий (необязательно)</label>
                    <textarea
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      placeholder="Расскажите о своём запросе..."
                      rows={3}
                      className="w-full border border-warm-beige rounded-2xl px-4 py-3 font-body text-sm bg-cream focus:outline-none focus:border-sage transition-colors resize-none"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-body text-center">Ошибка отправки. Попробуйте ещё раз.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-sage text-white py-4 rounded-2xl font-body font-medium hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {status === "loading" ? "Отправляем..." : "Записаться на процедуру"}
                  </button>
                  <p className="text-xs text-muted-foreground font-body text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/privacy" target="_blank" className="underline underline-offset-2 hover:text-sage transition-colors">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-3xl p-8 border border-warm-beige">
                <h3 className="font-display text-2xl text-foreground mb-6">Как нас найти</h3>
                <div className="space-y-5">
                  {[
                    { icon: "MapPin", label: "Адрес", value: "г. Иркутск, ул. Багратиона, 46/4" },
                    { icon: "Phone", label: "Телефон", value: "+7 (902) 544-51-19" },
                    { icon: "Mail", label: "Email", value: "bodyanetka@анетка.рф" },
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
                  <a
                    href="https://t.me/Anetkalpg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-4 py-2.5 text-sm font-body transition-all duration-200"
                  >
                    <Icon name="MessageCircle" size={15} />
                    Telegram
                  </a>
                  <a
                    href="https://wa.me/+79996842080"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-4 py-2.5 text-sm font-body transition-all duration-200"
                  >
                    <Icon name="Phone" size={15} />
                    WhatsApp
                  </a>
                  <a
                    href="https://max.ru/u/f9LHodD0cOIMIMF8u5iukSxhPFrqQ86xn6HKnSSVhOCDTIAor-ykj6jNl_g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-4 py-2.5 text-sm font-body transition-all duration-200"
                  >
                    <span className="text-sm font-bold leading-none">MAX</span>
                  </a>
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
          <p className="font-display text-xl text-foreground">г. Иркутск, ул. Багратиона, 46/4</p>
          <p className="font-body text-sm text-muted-foreground mt-1">Схема проезда — уточните в разделе контактов</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/fbdd8c30-03fa-4929-b997-7be7b56e3ad3/bucket/bfbe4af2-44dc-4960-b2c1-932ef14ee796.png"
                alt="Body Slim"
                className="h-12 w-auto"
              />
              <p className="text-white/50 text-sm font-body mt-1">Студия LPG массажа</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm font-body text-white/60 justify-center">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="text-white/40 text-xs font-body text-center rounded-sm">© 2026 BODY SLIM BY ANETKA
Все права защищены</div>
          </div>
        </div>
      </footer>
    </>
  );
}