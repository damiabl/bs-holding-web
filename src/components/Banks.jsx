const BANKS = [
  { name: 'FREEDOM BANK', logo: '/images/bank-freedom.webp' },
  { name: 'Altyn Bank', logo: '/images/bank-altyn.webp' },
  { name: 'bcc.kz', logo: '/images/bank-bcc.webp' },
  { name: 'ОТБАСЫ БАНК', logo: '/images/bank-otbasy.webp' },
];

export default function Banks() {
  return (
    <section className="section banks">
      <h2 className="section-title banks__title">
        Сотрудничаем с доверенными банками
      </h2>
      <div className="banks-grid">
        {BANKS.map((b) => (
          <div key={b.name} className="banks-item">
            <img src={b.logo} alt={b.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
