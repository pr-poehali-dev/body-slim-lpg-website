export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 border border-warm-beige">
        <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">Политика конфиденциальности</h1>
        <p className="text-muted-foreground font-body text-sm mb-8">Последнее обновление: 23 апреля 2026 г.</p>

        <div className="space-y-8 font-body text-sm text-foreground leading-relaxed">

          <section>
            <h2 className="font-display text-xl mb-3">1. Общие положения</h2>
            <p>Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки персональных данных пользователей сайта <strong>bodyslim-anetka.ru</strong> (далее — «Сайт»).</p>
            <p className="mt-2">Оператор персональных данных: <strong>Индивидуальный предприниматель Тищенко Анна Александровна</strong>, ИНН 381205675968 (далее — «Оператор»).</p>
            <p className="mt-2">Политика разработана в соответствии с требованиями Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3">2. Персональные данные, которые мы обрабатываем</h2>
            <p>При заполнении формы записи на Сайте мы собираем следующие данные:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Имя</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты (при наличии)</li>
              <li>Интересующая услуга и комментарий (при наличии)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3">3. Цели обработки персональных данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Запись клиента на процедуру и организация оказания услуг</li>
              <li>Связь с клиентом для подтверждения записи</li>
              <li>Улучшение качества обслуживания</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3">4. Правовые основания обработки</h2>
            <p>Обработка персональных данных осуществляется на основании:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Согласия субъекта персональных данных (ст. 6 ч. 1 п. 1 ФЗ-152)</li>
              <li>Исполнения договора, стороной которого является субъект (ст. 6 ч. 1 п. 5 ФЗ-152)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3">5. Хранение и защита данных</h2>
            <p>Персональные данные хранятся на защищённых серверах и не передаются третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством РФ.</p>
            <p className="mt-2">Срок хранения данных — до достижения целей обработки или до отзыва согласия субъектом персональных данных.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3">6. Права субъекта персональных данных</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Получить информацию об обработке ваших данных</li>
              <li>Потребовать уточнения, блокировки или уничтожения данных</li>
              <li>Отозвать согласие на обработку персональных данных</li>
              <li>Обжаловать действия Оператора в Роскомнадзоре</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3">7. Cookies</h2>
            <p>Сайт использует файлы cookie для корректной работы и улучшения пользовательского опыта. Продолжая использовать Сайт, вы соглашаетесь с использованием cookie.</p>
          </section>

          <section>
            <h2 className="font-display text-xl mb-3">8. Контакты</h2>
            <p>По вопросам обработки персональных данных обращайтесь:</p>
            <ul className="list-none mt-2 space-y-1">
              <li>Email: <a href="mailto:hello@bodyslim-anetka.ru" className="text-sage underline">hello@bodyslim-anetka.ru</a></li>
              <li>Телефон: <a href="tel:+79025445119" className="text-sage underline">+7 (902) 544-51-19</a></li>
              <li>Адрес: г. Иркутск, ул. Багратиона, 46/4</li>
            </ul>
          </section>

        </div>

        <div className="mt-10 pt-6 border-t border-warm-beige">
          <a href="/" className="text-sage font-body text-sm underline underline-offset-2">← Вернуться на главную</a>
        </div>
      </div>
    </div>
  );
}
