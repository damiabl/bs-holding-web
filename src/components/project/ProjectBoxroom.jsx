import SectionLabel from './SectionLabel';

export default function ProjectBoxroom({ data }) {
  const { boxroom } = data;
  return (
    <section className="easton-section easton-section--dark">
      <SectionLabel>{boxroom.label}</SectionLabel>
      <h2 className="easton-h2">{boxroom.title}</h2>
      <div className="easton-boxroom__image">
        <img src={boxroom.image} alt="" />
      </div>
      <p className="easton-body">{boxroom.text}</p>
    </section>
  );
}
