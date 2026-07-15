import { FOOTER_COLS, SOCIALS } from '../data/projects';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer style={{ background: '#0D403B', padding: 64, color: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <Logo fill="#fff" />
        <div style={{ display: 'flex', gap: 24 }}>
          {FOOTER_COLS.map((col) => (
            <div key={col.title} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ fontSize: 21, fontWeight: 700 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.items.map((i) => (
                  <a key={i} href="#" style={{ fontSize: 16, fontWeight: 500, color: '#fff', opacity: 0.9 }}>
                    {i}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <p style={{ fontSize: 16, fontWeight: 500, margin: 0, maxWidth: 800, opacity: 0.9 }}>
          Используя данный сайт, вы соглашаетесь с нашей политикой обработки конфиденциальных данных.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 16, fontWeight: 500, opacity: 0.4 }}>© 2026 BS Holding. Все права защищены.</span>
          <div style={{ display: 'flex', gap: 16 }}>
            {SOCIALS.map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  width: 36,
                  height: 36,
                  border: '1px solid rgba(255,255,255,0.4)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#fff',
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
