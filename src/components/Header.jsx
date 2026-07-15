import Dropdown from './Dropdown';
import Logo from './Logo';

const NAV_ITEMS = [
  { label: 'Главная', href: '#top', active: true },
  { label: 'Жилые комплексы', href: '#', active: false },
  { label: 'О компании', href: '#', active: false },
  { label: 'Акции и предложения', href: '#', active: false },
];

const CITIES = ['Актау', 'Актобе', 'Усть-Каменогорск'];
const LANGS = ['RU', 'KZ', 'EN'];

export default function Header({
  showTopBar,
  headerCity,
  setHeaderCity,
  langCur,
  setLangCur,
  openMenu,
  toggleMenu,
  onOpenCall,
}) {
  const navStyle = (active) => ({
    fontSize: 16,
    fontWeight: active ? 700 : 500,
    color: active ? '#0D403B' : '#000',
    padding: '6px 0',
    borderBottom: active ? '2px solid #0D403B' : 'none',
  });

  return (
    <header style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: 12 }}>
      {showTopBar && (
        <div style={{ background: '#0D403B', padding: '12px 64px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 24 }}>
          <span style={{ flex: 1, fontSize: 16, fontWeight: 500, color: '#fff' }}>
            Рассрочка на жилой комплекс White Hill начинается с 23 января
          </span>
          <a href="#paida" style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>Подробнее →</a>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, padding: '20px 64px 0' }}>
        <a href="#top" aria-label="BS Holding" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Logo />
        </a>
        <nav style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 44, marginLeft: 24 }}>
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} style={navStyle(item.active)}>{item.label}</a>
          ))}
        </nav>
        <a href="tel:+77010836606" style={{ fontSize: 16, fontWeight: 600, color: '#000', whiteSpace: 'nowrap' }}>+7 701 083-66-06</a>
        <Dropdown
          current={headerCity}
          open={openMenu === 'hcity'}
          onToggle={() => toggleMenu('hcity')}
          options={CITIES}
          onSelect={(o) => { setHeaderCity(o); toggleMenu(null); }}
        />
        <Dropdown
          current={langCur}
          open={openMenu === 'lang'}
          onToggle={() => toggleMenu('lang')}
          options={LANGS}
          onSelect={(o) => { setLangCur(o); toggleMenu(null); }}
        />
        <button type="button" className="btn-outline" onClick={onOpenCall}>Заказать звонок</button>
      </div>
    </header>
  );
}
