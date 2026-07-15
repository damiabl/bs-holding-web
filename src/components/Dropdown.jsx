export default function Dropdown({
  current,
  open,
  onToggle,
  options,
  onSelect,
  active,
  variant = 'light',
  style,
}) {
  const isDark = variant === 'dark';

  const btnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    padding: isDark ? '20px 24px' : '16px 24px',
    borderRadius: isDark ? 8 : 12,
    background: isDark
      ? '#0A332F'
      : active
        ? 'rgba(13,64,59,0.04)'
        : '#fff',
    border: isDark
      ? '1px solid transparent'
      : `1px solid ${active ? '#0D403B' : 'rgba(0,0,0,0.1)'}`,
    color: isDark ? '#fff' : active ? '#0D403B' : '#000',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    width: isDark ? '100%' : undefined,
    textAlign: 'left',
    ...style,
  };

  return (
    <div style={{ position: 'relative', ...(isDark ? { flex: 1 } : {}) }}>
      <button type="button" onClick={onToggle} style={btnStyle}>
        {current} <span style={{ fontSize: 11, opacity: isDark ? 0.7 : 1 }}>▾</span>
      </button>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 0,
            right: isDark ? 0 : undefined,
            background: isDark ? '#0A332F' : '#fff',
            border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.1)',
            borderRadius: isDark ? 8 : 12,
            padding: 8,
            zIndex: 25,
            boxShadow: isDark
              ? '0 12px 32px rgba(0,0,0,0.35)'
              : '0 12px 32px rgba(0,0,0,0.12)',
            display: 'flex',
            flexDirection: 'column',
            minWidth: '100%',
            whiteSpace: 'nowrap',
          }}
        >
          {options.map((o) => (
            <div
              key={o}
              role="button"
              tabIndex={0}
              onClick={() => onSelect(o)}
              onKeyDown={(e) => e.key === 'Enter' && onSelect(o)}
              style={{
                padding: '10px 14px',
                borderRadius: 8,
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: o === current ? 700 : 400,
                color: isDark
                  ? o === current
                    ? '#fff'
                    : 'rgba(255,255,255,0.75)'
                  : o === current
                    ? '#0D403B'
                    : '#000',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark
                  ? 'rgba(255,255,255,0.08)'
                  : '#F7F7F5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
