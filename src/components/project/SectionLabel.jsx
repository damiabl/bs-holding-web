export default function SectionLabel({ children, color = '#61D0C5' }) {
  return (
    <div className="easton-label" style={{ color }}>
      {children}
    </div>
  );
}
