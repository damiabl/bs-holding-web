export default function Hero({ onOpenCall }) {
  return (
    <section id="top" style={{ display: 'flex', gap: 20, padding: 64 }}>
      <div
        style={{
          flex: 1,
          position: 'relative',
          height: 497,
          borderRadius: 16,
          overflow: 'hidden',
          background: '#0D403B',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <img
          src="/images/hero-building.webp"
          alt="BS Holding — флагманский жилой комплекс"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'right center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg,rgba(13,64,59,0.92) 0%,rgba(13,64,59,0.35) 45%,rgba(13,64,59,0.15) 100%)',
          }}
        />
        <div style={{ position: 'relative', padding: 44, maxWidth: 560 }}>
          <h1
            style={{
              fontSize: 51,
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#fff',
              margin: '0 0 24px',
              textWrap: 'balance',
            }}
          >
            Качество, которое Вы заслуживаете!
          </h1>
          <a href="#catalog" className="btn-white" style={{ display: 'inline-block', padding: '18px 36px' }}>
            Все проекты BS Holding
          </a>
        </div>
      </div>

      {/* BS Пайда — exact Figma export; button stays interactive */}
      <div
        style={{
          position: 'relative',
          width: 400,
          height: 497,
          borderRadius: 16,
          overflow: 'hidden',
          flexShrink: 0,
          background: '#0D403B',
        }}
      >
        <img
          src="/images/paida-card-ref.webp"
          alt="BS Пайда — выгода до 9.5% при покупке в рассрочку. Партнёры: Freedom Bank, Altyn Bank, bcc.kz, Отбасы Банк. Ваша ипотека одобрена!"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <button
          type="button"
          aria-label="Подробнее о BS Пайда"
          onClick={onOpenCall}
          style={{
            position: 'absolute',
            left: 24,
            right: 24,
            bottom: 24,
            height: 58,
            border: 'none',
            borderRadius: 8,
            background: 'transparent',
            cursor: 'pointer',
          }}
        />
      </div>
    </section>
  );
}
