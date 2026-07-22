import { COMMERCIAL } from '../data/projects';

export default function Commercial() {
  return (
    <section className="section commercial">
      <h2 className="section-title commercial__title">
        К квартире так же можно приобрести
      </h2>
      <div className="commercial-grid">
        {COMMERCIAL.map((c) => (
          <div key={c.title} className="commercial-item">
            <div className="commercial-item__title">{c.title}</div>
            <div className="commercial-item__meta">
              {c.meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <div className="commercial-item__media">
              <img src={c.image} alt={c.title} />
            </div>
            <div className="commercial-item__from">{c.from}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
