import { useEffect, useRef, useState } from 'react';
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
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [spacerH, setSpacerH] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;

    const sync = () => setSpacerH(el.offsetHeight);
    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [showTopBar]);

  const navStyle = (active) => ({
    fontSize: 16,
    fontWeight: active ? 700 : 500,
    color: active ? '#0D403B' : '#000',
    padding: '6px 0',
    borderBottom: active ? '2px solid #0D403B' : 'none',
  });

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}
      >
        {showTopBar && (
          <div className="site-header__promo">
            <span className="site-header__promo-text">
              Рассрочка на жилой комплекс White Hill начинается с 23 января
            </span>
            <a href="#paida" className="site-header__promo-link">Подробнее →</a>
          </div>
        )}
        <div className="site-header__bar">
          <a href="#top" aria-label="BS Holding" className="site-header__logo">
            <Logo />
          </a>
          <nav className="site-header__nav">
            {NAV_ITEMS.map((item) => (
              <a key={item.label} href={item.href} style={navStyle(item.active)}>{item.label}</a>
            ))}
          </nav>
          <a href="tel:+77010836606" className="site-header__phone">+7 701 083-66-06</a>
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
      <div className="site-header-spacer" style={{ height: spacerH }} aria-hidden="true" />
    </>
  );
}
