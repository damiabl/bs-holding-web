import SectionLabel from './SectionLabel';
import MediaCard from './MediaCard';

export default function ProjectGym({ data }) {
  const { gym } = data;
  if (!gym) return null;
  const accentDark = data.theme?.accentDark ?? '#1F6059';
  return (
    <section className="easton-section easton-section--cream">
      <SectionLabel color={accentDark}>{gym.label}</SectionLabel>
      <div className="easton-hall">
        <div className="easton-hall__text">
          <h2 className="easton-h2 easton-h2--dark">{gym.title}</h2>
          <p className="easton-body easton-body--dark">{gym.text}</p>
        </div>
        <div className="easton-hall__image">
          <img src={gym.image} alt="" />
        </div>
      </div>
      {gym.gallery?.length > 0 && (
        <div className="easton-kids__grid" style={{ marginTop: 32 }}>
          {gym.gallery.map((g, i) => (
            <MediaCard key={i} image={g.image} title={g.title} />
          ))}
        </div>
      )}
    </section>
  );
}
