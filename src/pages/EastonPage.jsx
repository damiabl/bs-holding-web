import { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import { EASTON } from '../data/easton';
import { nameOk, phoneOk } from '../utils/format';

function SectionLabel({ children, color = '#61D0C5' }) {
  return <div className="easton-label" style={{ color }}>{children}</div>;
}

function MediaCard({ image, title, tall, solid, icon }) {
  return (
    <div className={`easton-media-card${tall ? ' easton-media-card--tall' : ''}${solid ? ' easton-media-card--solid' : ''}`}>
      {!solid && image && <img src={image} alt="" />}
      {!solid && <div className="easton-media-card__shade" />}
      {icon && <img className="easton-media-card__icon" src={icon} alt="" width={48} height={48} />}
      {title && <div className="easton-media-card__title">{title}</div>}
    </div>
  );
}

export default function EastonPage({ onBack, onOpenCall }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [formState, setFormState] = useState('idle');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const submit = () => {
    if (!nameOk(name) || !phoneOk(phone)) {
      setFormState('error');
      return;
    }
    setFormState('loading');
    setTimeout(() => setFormState('success'), 900);
  };

  const scrollToConsult = () => {
    document.getElementById('easton-consult')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`easton-header${scrolled ? ' easton-header--scrolled' : ''}`}>
        <div className="easton-header__inner">
          <div className="easton-header__left">
            <button type="button" className="easton-header__logo" onClick={onBack} aria-label="На главную">
              <Logo fill="#fff" width={51} height={48} />
            </button>
            <nav className="easton-header__nav">
              {EASTON.nav.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </nav>
          </div>
          <div className="easton-header__right">
            <a href={EASTON.phoneHref} className="easton-header__phone">{EASTON.phone}</a>
            <button type="button" className="easton-btn easton-btn--ghost" onClick={onOpenCall}>
              Заказать звонок
            </button>
          </div>
        </div>
      </header>

      <div className="page easton-page">
      <section className="easton-hero">
        <img className="easton-hero__bg" src={EASTON.hero.image} alt="" />
        <div className="easton-hero__overlay" />

        <div className="easton-hero__content">
          <h1>{EASTON.hero.title}</h1>
          <p className="easton-hero__city">{EASTON.hero.location}</p>
          <div className="easton-hero__cta">
            <button type="button" className="easton-btn easton-btn--solid" onClick={scrollToConsult}>
              Оставить заявку
            </button>
            <button type="button" className="easton-btn easton-btn--ghost" onClick={scrollToConsult}>
              Скачать презентацию
            </button>
          </div>
        </div>
      </section>

      <section className="easton-section easton-section--dark easton-about">
        <SectionLabel>{EASTON.about.label}</SectionLabel>
        <p className="easton-about__text">{EASTON.about.text}</p>
        <div className="easton-about__stats">
          {EASTON.about.stats.map((s) => (
            <div key={s.text} className="easton-about__stat">
              <img src={s.icon} alt="" width={48} height={48} />
              <span>{s.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="easton-section easton-section--dark">
        <div className="easton-split easton-split--top">
          <div>
            <SectionLabel>{EASTON.standards.label}</SectionLabel>
            <h2 className="easton-h2">{EASTON.standards.title}</h2>
          </div>
          <p className="easton-body">{EASTON.standards.text}</p>
        </div>
        <div className="easton-standards-grid">
          <MediaCard image={EASTON.standards.cards[0].image} title={EASTON.standards.cards[0].title} tall />
          <div className="easton-standards-grid__stack">
            {EASTON.standards.cards.slice(1).map((c) => (
              <MediaCard key={c.title} image={c.image} title={c.title} />
            ))}
          </div>
        </div>
      </section>

      <section id={EASTON.location.id} className="easton-section easton-section--cream">
        <SectionLabel color="#1F6059">{EASTON.location.label}</SectionLabel>
        <h2 className="easton-h2 easton-h2--dark easton-location__title">{EASTON.location.title}</h2>
        <div className="easton-location__cards">
          {EASTON.location.cards.map((c) => (
            <MediaCard key={c.title} {...c} />
          ))}
        </div>
        <div className="easton-location__notes">
          {EASTON.location.notes.map((n) => (
            <p key={n} className="easton-body easton-body--dark">{n}</p>
          ))}
        </div>
      </section>

      <section id={EASTON.architecture.id} className="easton-section easton-section--cream">
        <SectionLabel color="#1F6059">{EASTON.architecture.label}</SectionLabel>
        <h2 className="easton-h2 easton-h2--dark">{EASTON.architecture.title}</h2>
        <div className="easton-arch__image">
          <img src={EASTON.architecture.image} alt="Архитектура Easton" />
        </div>
        <div className="easton-arch__points">
          {EASTON.architecture.points.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="easton-banner">
          <div>{EASTON.architecture.ctaQuestion}</div>
          <button type="button" className="easton-btn easton-btn--light" onClick={scrollToConsult}>
            {EASTON.architecture.ctaButton}
          </button>
        </div>
      </section>

      <section className="easton-yard">
        <img className="easton-yard__bg" src={EASTON.yard.image} alt="" />
        <div className="easton-yard__overlay" />
        <div className="easton-yard__content">
          <div className="easton-yard__label">{EASTON.yard.label}</div>
          <h2>{EASTON.yard.title}</h2>
        </div>
      </section>

      <section className="easton-section easton-section--cream easton-playground">
        <div className="easton-playground__text">
          <h2 className="easton-h2 easton-h2--dark">{EASTON.playground.title}</h2>
          <p className="easton-body easton-body--dark">{EASTON.playground.text}</p>
          <button type="button" className="easton-btn easton-btn--solid" onClick={scrollToConsult}>
            {EASTON.playground.cta}
          </button>
        </div>
        <div className="easton-playground__image">
          <img src={EASTON.playground.image} alt="" />
        </div>
      </section>

      <section className="easton-section easton-section--cream">
        <SectionLabel color="#1F6059">{EASTON.kids.label}</SectionLabel>
        <div className="easton-kids__grid">
          {EASTON.kids.gallery.map((g, i) => (
            <MediaCard key={i} image={g.image} title={g.title} />
          ))}
        </div>
        <div className="easton-kids__room">
          <div className="easton-kids__room-label">{EASTON.kids.roomLabel}</div>
          <div>
            <h3 className="easton-h2 easton-h2--dark">{EASTON.kids.roomTitle}</h3>
            <p className="easton-body easton-body--dark">{EASTON.kids.roomText}</p>
          </div>
        </div>
      </section>

      <section className="easton-section easton-section--cream">
        <div className="easton-hall">
          <div className="easton-hall__text">
            <SectionLabel color="#1F6059">{EASTON.hall.label}</SectionLabel>
            <h2 className="easton-h2 easton-h2--dark">{EASTON.hall.title}</h2>
            <p className="easton-body easton-body--dark">{EASTON.hall.text1}</p>
            <p className="easton-body easton-body--dark">{EASTON.hall.text2}</p>
          </div>
          <div className="easton-hall__image">
            <img src={EASTON.hall.image} alt="" />
          </div>
        </div>
        <div className="easton-hall__features">
          {EASTON.hall.features.map((f) => (
            <div key={f}>{f}</div>
          ))}
        </div>
      </section>

      <section id={EASTON.apartments.id} className="easton-section easton-section--dark">
        <div className="easton-split easton-split--top">
          <div>
            <SectionLabel>{EASTON.apartments.label}</SectionLabel>
            <h2 className="easton-h2">{EASTON.apartments.title}</h2>
          </div>
          <p className="easton-body">{EASTON.apartments.text}</p>
        </div>
        <div className="easton-apartments__image">
          <img src={EASTON.apartments.image} alt="" />
          <button type="button" className="easton-btn easton-btn--light" onClick={scrollToConsult}>
            {EASTON.apartments.cta}
          </button>
        </div>
        <div className="easton-feature-row">
          {EASTON.apartments.features.map((f) => (
            <div key={f}>{f}</div>
          ))}
        </div>
      </section>

      <section className="easton-section easton-section--dark">
        <SectionLabel>{EASTON.parking.label}</SectionLabel>
        <h2 className="easton-h2">{EASTON.parking.title}</h2>
        <div className="easton-parking">
          <div className="easton-parking__image">
            <img src={EASTON.parking.image} alt="" />
          </div>
          <div className="easton-parking__text">
            {EASTON.parking.points.map((p) => (
              <div key={p} className="easton-parking__point">{p}</div>
            ))}
            <p className="easton-body">{EASTON.parking.note}</p>
          </div>
        </div>
      </section>

      <section className="easton-section easton-section--dark">
        <SectionLabel>{EASTON.boxroom.label}</SectionLabel>
        <h2 className="easton-h2">{EASTON.boxroom.title}</h2>
        <div className="easton-boxroom__image">
          <img src={EASTON.boxroom.image} alt="" />
        </div>
        <p className="easton-body">{EASTON.boxroom.text}</p>
      </section>

      <section id="easton-consult" className="easton-consult">
        <div className="easton-consult__info">
          <h2>{EASTON.consult.title}</h2>
          <p>{EASTON.consult.subtitle}</p>
          <div className="easton-consult__contacts">
            <div>{EASTON.consult.address}</div>
            <div>{EASTON.consult.instagram}</div>
            <div>{EASTON.consult.hours}</div>
          </div>
        </div>
        <div className="easton-consult__form">
          {formState === 'success' ? (
            <div>
              <div className="easton-consult__success-title">Спасибо! Заявка принята.</div>
              <div className="easton-consult__success-sub">Мы свяжемся с вами в течение дня.</div>
            </div>
          ) : (
            <>
              <label>Ваше Ф.И.О.</label>
              <input
                className="input-dark"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
              />
              <label>Ваш номер телефона</label>
              <input
                className="input-dark"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Номер телефона"
              />
              {formState === 'error' && (
                <div className="easton-consult__error">Укажите имя и корректный номер телефона.</div>
              )}
              <button type="button" className="easton-btn easton-btn--light" onClick={submit}>
                {formState === 'loading' ? 'Отправка…' : 'Оставить заявку'}
              </button>
              <div className="easton-consult__policy">{EASTON.consult.policy}</div>
            </>
          )}
        </div>
      </section>

      <footer className="easton-footer">
        <button type="button" className="easton-footer__logo" onClick={onBack} aria-label="BS Holding">
          <Logo fill="#fff" />
        </button>
        <div className="easton-footer__cols">
          {EASTON.footer.cols.map((col) => (
            <div key={col.title}>
              <div className="easton-footer__col-title">{col.title}</div>
              <div className="easton-footer__links">
                {col.items.map((item) => {
                  const isProject = ['Central Park', 'Avenue Park', 'Adal Town', 'Orda Palace', 'White Hill'].includes(item);
                  return isProject ? (
                    <button key={item} type="button" onClick={onBack}>{item}</button>
                  ) : (
                    <div key={item}>{item}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="easton-footer__policy">{EASTON.footer.policy}</p>
        <div className="easton-footer__copy">{EASTON.footer.copyright}</div>
      </footer>
      </div>
    </>
  );
}
