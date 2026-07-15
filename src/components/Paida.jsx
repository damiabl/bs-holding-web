export default function Paida({ onOpenCall }) {
  return (
    <section id="paida" style={{ padding: 64, display: 'flex', flexDirection: 'column', gap: 40 }}>
      <h2 style={{ fontSize: 51, fontWeight: 700, margin: 0, lineHeight: 1.2, maxWidth: 700 }}>
        Покупайте выгодно вместе с BS Пайда
      </h2>
      <div
        style={{
          height: 420,
          borderRadius: 16,
          overflow: 'hidden',
          position: 'relative',
          background: '#0D403B',
        }}
      >
        <img
          src="/images/paida-family.jpg"
          alt="Семья в квартире BS Пайда"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div style={{ display: 'flex', gap: 60, alignItems: 'flex-start' }}>
        <h3 style={{ flex: 'none', width: 405, fontSize: 38, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
          Выгода до 9.5% при покупке в рассрочку
        </h3>
        <div style={{ flex: 1, display: 'flex', gap: 24 }}>
          <p style={{ flex: 1, fontSize: 16, fontWeight: 500, lineHeight: 1.2, margin: 0, color: 'rgba(0,0,0,0.85)' }}>
            При покупке квартиры до ввода в эксплуатацию на I и II очередях вы получаете выгодные условия с экономией до
            9.5%.
          </p>
          <p style={{ flex: 1, fontSize: 16, fontWeight: 500, lineHeight: 1.2, margin: 0, color: 'rgba(0,0,0,0.85)' }}>
            Рассрочка предоставляется максимально до 12 месяцев и до срока сдачи объекта в эксплуатацию.
          </p>
          <div style={{ flex: 'none', display: 'flex', alignItems: 'flex-start' }}>
            <button
              type="button"
              className="btn-primary"
              style={{ padding: '18px 32px', whiteSpace: 'nowrap' }}
              onClick={onOpenCall}
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
