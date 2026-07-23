import { FOOTER_COLS, SOCIALS } from '../data/projects';
import { projectHash, projectSlugFromName } from '../data/projectPages';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <Logo fill="#fff" />
        <div className="site-footer__cols">
          {FOOTER_COLS.map((col) => (
            <div key={col.title} className="site-footer__col">
              <div className="site-footer__col-title">{col.title}</div>
              <div className="site-footer__links">
                {col.items.map((item) => {
                  const slug = col.title === 'Проекты' ? projectSlugFromName(item) : null;
                  const href = slug ? projectHash(slug) : '#';
                  return (
                    <a key={item} href={href}>
                      {item}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="site-footer__bottom">
        <p className="site-footer__policy">
          Используя данный сайт, вы соглашаетесь с нашей политикой обработки конфиденциальных данных.
        </p>
        <div className="site-footer__meta">
          <span className="site-footer__copy">© 2026 BS Holding. Все права защищены.</span>
          <div className="site-footer__socials">
            {SOCIALS.map((s) => (
              <a key={s} href="#" className="site-footer__social">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
