export default function Dropdown({
  current,
  open,
  onToggle,
  options,
  onSelect,
  active,
  variant = 'light',
  style,
  className = '',
}) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`dropdown${isDark ? ' dropdown--dark' : ''}${active ? ' is-active' : ''}${className ? ` ${className}` : ''}`}
    >
      <button
        type="button"
        className="dropdown__btn"
        onClick={onToggle}
        style={style}
        aria-expanded={open}
      >
        <span className="dropdown__label">{current}</span>
        <span className="dropdown__chev" aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="dropdown__menu" role="listbox">
          {options.map((o) => (
            <button
              key={o}
              type="button"
              role="option"
              aria-selected={o === current}
              className={`dropdown__option${o === current ? ' is-active' : ''}`}
              onClick={() => onSelect(o)}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
