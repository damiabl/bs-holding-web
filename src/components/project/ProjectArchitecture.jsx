import SectionLabel from './SectionLabel';

export default function ProjectArchitecture({ data, onScrollToConsult }) {
  const { architecture } = data;
  const accentDark = data.theme?.accentDark ?? '#1F6059';
  return (
    <section id={architecture.id} className="easton-section easton-section--cream">
      <SectionLabel color={accentDark}>{architecture.label}</SectionLabel>
      <h2 className="easton-h2 easton-h2--dark">{architecture.title}</h2>
      <div className="easton-arch__image">
        <img src={architecture.image} alt={`Архитектура ${data.name}`} />
      </div>
      <div className="easton-arch__points">
        {architecture.points.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="easton-banner">
        <div>{architecture.ctaQuestion}</div>
        <button type="button" className="easton-btn easton-btn--light" onClick={onScrollToConsult}>
          {architecture.ctaButton}
        </button>
      </div>
    </section>
  );
}
