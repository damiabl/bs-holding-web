import Dropdown from './Dropdown';
import { FILTER_SPEC } from '../data/projects';
import { fmt } from '../utils/format';

function ProjectCard({ p, onOpen }) {
  const clickable = Boolean(p.href || onOpen);
  const Wrapper = clickable ? 'button' : 'div';
  const wrapperProps = clickable
    ? {
        type: 'button',
        onClick: () => {
          if (p.href?.startsWith('#/')) {
            window.location.hash = p.href.slice(1);
          }
          onOpen?.(p);
        },
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          textAlign: 'left',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          color: 'inherit',
          font: 'inherit',
          width: '100%',
        },
      }
    : { style: { display: 'flex', flexDirection: 'column', gap: 20 } };

  return (
    <Wrapper {...wrapperProps}>
      <div
        style={{
          position: 'relative',
          height: 320,
          borderRadius: 16,
          overflow: 'hidden',
          background: '#e9e9e4',
        }}
      >
        <img
          src={p.image}
          alt={p.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 6,
            maxWidth: '90%',
          }}
        >
          <span style={{ background: '#fff', borderRadius: 8, padding: '6px 10px', fontSize: 12, fontWeight: 500 }}>
            {p.classFull}
          </span>
          <span style={{ background: '#fff', borderRadius: 8, padding: '6px 10px', fontSize: 12, fontWeight: 500 }}>
            {p.termBadge}
          </span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 28, fontWeight: 700 }}>{p.name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 14, color: 'rgba(0,0,0,0.7)' }}>
          {(p.meta || [p.city, p.classFull]).map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
      <div style={{ fontSize: 16, fontWeight: 500 }}>от {fmt(p.price)} ₸</div>
    </Wrapper>
  );
}

export default function Catalog({
  filter,
  setFilter,
  openMenu,
  toggleMenu,
  applyFilter,
  resetFilter,
  filtered,
  onOpenProject,
}) {
  return (
    <>
      <section id="catalog" style={{ padding: '0 64px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        <h2 style={{ fontSize: 51, fontWeight: 700, margin: 0 }}>Все проекты BS Holding</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          {FILTER_SPEC.map(([key, opts]) => (
            <Dropdown
              key={key}
              current={filter[key]}
              open={openMenu === `f_${key}`}
              onToggle={() => toggleMenu(`f_${key}`)}
              options={opts}
              onSelect={(o) => setFilter(key, o)}
              active={filter[key] !== opts[0]}
            />
          ))}
          <button
            type="button"
            className="btn-primary"
            style={{ flex: 1, minWidth: 200, padding: '16px 40px' }}
            onClick={applyFilter}
          >
            Найти квартиру
          </button>
          <button
            type="button"
            onClick={resetFilter}
            style={{
              background: 'none',
              border: 'none',
              color: '#0D403B',
              fontSize: 16,
              fontWeight: 500,
              cursor: 'pointer',
              padding: 16,
            }}
          >
            Сбросить фильтр
          </button>
        </div>
      </section>

      <section style={{ padding: '40px 64px 64px' }}>
        {filtered.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 24,
            }}
          >
            {filtered.map((p) => (
              <ProjectCard key={p.id} p={p} onOpen={onOpenProject} />
            ))}
          </div>
        ) : (
          <div
            style={{
              background: '#fff',
              borderRadius: 16,
              padding: 64,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div style={{ fontSize: 28, fontWeight: 700 }}>По вашему запросу ничего не найдено</div>
            <div style={{ fontSize: 16, color: 'rgba(0,0,0,0.6)' }}>
              Попробуйте изменить параметры фильтра или сбросьте их.
            </div>
            <button type="button" className="btn-primary" style={{ marginTop: 8 }} onClick={resetFilter}>
              Сбросить фильтр
            </button>
          </div>
        )}
      </section>
    </>
  );
}
