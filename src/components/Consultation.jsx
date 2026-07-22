import { useState } from 'react';
import Dropdown from './Dropdown';

const CITIES = ['Актау', 'Актобе', 'Усть-Каменогорск'];

export default function Consultation({
  consultName,
  setConsultName,
  consultPhone,
  setConsultPhone,
  consultCity,
  setConsultCity,
  consultState,
  submitConsult,
}) {
  const [cityOpen, setCityOpen] = useState(false);

  return (
    <section className="section consultation">
      <div className="consult-card">
        <div className="consult-card__intro">
          <h2 className="consult-card__title">
            Чтобы получить индивидуальную консультацию, оставьте заявку
          </h2>
          <p className="consult-card__sub">
            Мы наберём вас в течение 10 минут после заявки и проконсультируем по объектам, способам оплаты и ипотеке.
          </p>
        </div>
        {consultState === 'success' ? (
          <div className="consult-card__success">
            <div className="consult-card__success-title">Спасибо! Заявка принята.</div>
            <div className="consult-card__success-sub">Наш менеджер перезвонит вам в течение 10 минут.</div>
          </div>
        ) : (
          <div className="consult-card__form">
            <div className="consult-card__row">
              <input
                className="input-dark consult-card__input"
                value={consultName}
                onChange={(e) => setConsultName(e.target.value)}
                placeholder="Ваше имя"
              />
              <input
                className="input-dark consult-card__input"
                value={consultPhone}
                onChange={(e) => setConsultPhone(e.target.value)}
                placeholder="Номер телефона"
              />
              <div className="consult-card__city">
                <Dropdown
                  variant="dark"
                  current={consultCity}
                  open={cityOpen}
                  onToggle={() => setCityOpen((v) => !v)}
                  options={CITIES}
                  onSelect={(city) => {
                    setConsultCity(city);
                    setCityOpen(false);
                  }}
                />
              </div>
              <button type="button" className="btn-white consult-card__submit" onClick={submitConsult}>
                {consultState === 'loading' ? 'Отправка…' : 'Оставить заявку'}
              </button>
            </div>
            {consultState === 'error' && (
              <div className="form-error">Укажите имя и корректный номер телефона.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
