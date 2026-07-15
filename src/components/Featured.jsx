import { FEATURED_DATA } from '../data/projects';
import { fmt } from '../utils/format';

const TAB_NAMES = ['Central Park', 'Avenue Park', 'Adal Town'];

export default function Featured({ activeTab, setActiveTab }) {
  const featured = FEATURED_DATA[activeTab];

  const tabStyle = (active) => ({
    flex: 1,
    textAlign: 'left',
    padding: '20px 24px',
    borderRadius: 12,
    cursor: 'pointer',
    border: `1px solid ${active ? '#0D403B' : 'rgba(0,0,0,0.12)'}`,
    background: active ? '#0D403B' : '#fff',
    color: active ? '#fff' : '#000',
  });

  return (
    <section style={{ padding: '0 64px 64px', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <h2 style={{ fontSize: 51, fontWeight: 700, margin: 0 }}>Наши новостройки</h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {TAB_NAMES.map((name) => (
          <button
            key={name}
            type="button"
            onClick={() => setActiveTab(name)}
            style={tabStyle(name === activeTab)}
          >
            <span style={{ display: 'block', fontSize: 18, fontWeight: 700 }}>{name}</span>
            <span style={{ display: 'block', fontSize: 13, marginTop: 4, opacity: 0.7 }}>
              от {fmt(FEATURED_DATA[name].price)} ₸
            </span>
          </button>
        ))}
      </div>
      <div
        style={{
          position: 'relative',
          height: 520,
          borderRadius: 16,
          overflow: 'hidden',
          background: '#dfe4e2',
        }}
      >
        <img
          src={featured.image}
          alt={featured.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ background: '#fff', borderRadius: 8, padding: '6px 10px', fontSize: 12, fontWeight: 500 }}>
            {featured.klass}
          </span>
          <span style={{ background: '#fff', borderRadius: 8, padding: '6px 10px', fontSize: 12, fontWeight: 500 }}>
            {featured.termBadge}
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ fontSize: 38, fontWeight: 700 }}>{featured.name}</div>
        <div style={{ fontSize: 16, fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>{featured.location}</div>
      </div>
      <div style={{ display: 'flex', gap: 24 }}>
        {featured.desc.map((d, i) => (
          <p
            key={i}
            style={{ flex: 1, fontSize: 16, fontWeight: 500, lineHeight: 1.2, margin: 0, color: 'rgba(0,0,0,0.85)' }}
          >
            {d}
          </p>
        ))}
      </div>
      <div>
        <a href="#" className="btn-primary" style={{ display: 'inline-block' }}>
          Подробнее
        </a>
      </div>
    </section>
  );
}
