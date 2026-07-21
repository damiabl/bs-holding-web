const BANKS = [
  { name: 'FREEDOM BANK', logo: '/images/bank-freedom.webp' },
  { name: 'Altyn Bank', logo: '/images/bank-altyn.webp' },
  { name: 'bcc.kz', logo: '/images/bank-bcc.webp' },
  { name: 'ОТБАСЫ БАНК', logo: '/images/bank-otbasy.webp' },
];

export default function Banks() {
  return (
    <section style={{ padding: '0 64px 64px', display: 'flex', flexDirection: 'column', gap: 40 }}>
      <h2 style={{ fontSize: 51, fontWeight: 700, margin: 0, maxWidth: 640, lineHeight: 1.2 }}>
        Сотрудничаем с доверенными банками
      </h2>
      <div style={{ display: 'flex', gap: 24 }}>
        {BANKS.map((b) => (
          <div
            key={b.name}
            style={{
              flex: 1,
              height: 72,
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 20px',
            }}
          >
            <img
              src={b.logo}
              alt={b.name}
              style={{ maxWidth: '100%', maxHeight: 40, objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
