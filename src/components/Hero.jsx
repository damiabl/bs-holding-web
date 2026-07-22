export default function Hero({ onOpenCall }) {
  return (
    <section id="top" className="hero">
      <div className="hero__main">
        <img
          className="hero__bg"
          src="/images/hero-building.webp"
          alt="BS Holding — флагманский жилой комплекс"
        />
        <div className="hero__overlay" />
        <div className="hero__content">
          <h1 className="hero__title">Качество, которое Вы заслуживаете!</h1>
          <a href="#catalog" className="btn-white hero__cta">
            Все проекты BS Holding
          </a>
        </div>
      </div>

      <div className="hero__paida">
        <img
          className="hero__paida-img"
          src="/images/paida-card-ref.webp"
          alt="BS Пайда — выгода до 9.5% при покупке в рассрочку. Партнёры: Freedom Bank, Altyn Bank, bcc.kz, Отбасы Банк. Ваша ипотека одобрена!"
        />
        <button
          type="button"
          className="hero__paida-btn"
          aria-label="Подробнее о BS Пайда"
          onClick={onOpenCall}
        />
      </div>
    </section>
  );
}
