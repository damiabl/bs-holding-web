export default function Paida({ onOpenCall }) {
  return (
    <section id="paida" className="section paida">
      <h2 className="section-title paida__title">
        Покупайте выгодно вместе с BS Пайда
      </h2>
      <div className="paida__media">
        <img src="/images/paida-family.webp" alt="Семья в квартире BS Пайда" />
      </div>
      <div className="paida__body">
        <h3 className="paida__subtitle">Выгода до 9.5% при покупке в рассрочку</h3>
        <div className="paida__cols">
          <p>
            При покупке квартиры до ввода в эксплуатацию на I и II очередях вы получаете выгодные условия с экономией до
            9.5%.
          </p>
          <p>
            Рассрочка предоставляется максимально до 12 месяцев и до срока сдачи объекта в эксплуатацию.
          </p>
          <button type="button" className="btn-primary paida__cta" onClick={onOpenCall}>
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  );
}
