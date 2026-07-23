export default function MediaCard({ image, title, tall, solid, icon }) {
  return (
    <div
      className={`easton-media-card${tall ? ' easton-media-card--tall' : ''}${solid ? ' easton-media-card--solid' : ''}`}
    >
      {!solid && image && <img src={image} alt="" />}
      {!solid && <div className="easton-media-card__shade" />}
      {icon && <img className="easton-media-card__icon" src={icon} alt="" width={48} height={48} />}
      {title && <div className="easton-media-card__title">{title}</div>}
    </div>
  );
}
