import { COMMERCIAL } from '../data/projects';

export default function Commercial() {
  return (
    <section style={{ padding: '0 64px 64px', display: 'flex', flexDirection: 'column', gap: 40 }}>
      <h2 style={{ fontSize: 51, fontWeight: 700, margin: 0, maxWidth: 520, lineHeight: 1.2 }}>
        К квартире так же можно приобрести
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {COMMERCIAL.map((c) => (
          <div key={c.title} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ fontSize: 21, fontWeight: 700 }}>{c.title}</div>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {c.meta.map((m) => (
                <span key={m} style={{ fontSize: 12, fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>
                  {m}
                </span>
              ))}
            </div>
            <div style={{ height: 300, borderRadius: 16, overflow: 'hidden', background: '#e9e9e4' }}>
              <img
                src={c.image}
                alt={c.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ fontSize: 21, fontWeight: 500 }}>{c.from}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
