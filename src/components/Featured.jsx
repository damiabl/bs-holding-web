import { FEATURED_DATA } from '../data/projects';
import { fmt } from '../utils/format';

const TAB_NAMES = ['Central Park', 'Avenue Park', 'Adal Town'];

export default function Featured({ activeTab, setActiveTab }) {
  const featured = FEATURED_DATA[activeTab];

  return (
    <section className="section featured">
      <h2 className="section-title">Наши новостройки</h2>
      <div className="featured-tabs">
        {TAB_NAMES.map((name) => {
          const active = name === activeTab;
          return (
            <button
              key={name}
              type="button"
              onClick={() => setActiveTab(name)}
              className={`featured-tab${active ? ' is-active' : ''}`}
            >
              <span className="featured-tab__name">{name}</span>
              <span className="featured-tab__price">
                от {fmt(FEATURED_DATA[name].price)} ₸
              </span>
            </button>
          );
        })}
      </div>
      <div className="featured-media">
        <img src={featured.image} alt={featured.name} />
        <div className="featured-media__badges">
          <span className="badge">{featured.klass}</span>
          <span className="badge">{featured.termBadge}</span>
        </div>
      </div>
      <div className="featured-info">
        <div className="featured-info__name">{featured.name}</div>
        <div className="featured-info__loc">{featured.location}</div>
      </div>
      <div className="featured-desc">
        {featured.desc.map((d, i) => (
          <p key={i}>{d}</p>
        ))}
      </div>
      <div>
        <a href="#" className="btn-primary">
          Подробнее
        </a>
      </div>
    </section>
  );
}
