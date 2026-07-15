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
    <section style={{ padding: '0 64px 64px' }}>
      <div style={{ background: '#0D403B', borderRadius: 16, padding: 40, display: 'flex', flexDirection: 'column', gap: 24, color: '#fff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h2 style={{ fontSize: 38, fontWeight: 700, margin: 0, maxWidth: 729, lineHeight: 1.2 }}>
            Чтобы получить индивидуальную консультацию, оставьте заявку
          </h2>
          <p style={{ fontSize: 16, fontWeight: 500, margin: 0, maxWidth: 520, opacity: 0.85 }}>
            Мы наберём вас в течение 10 минут после заявки и проконсультируем по объектам, способам оплаты и ипотеке.
          </p>
        </div>
        {consultState === 'success' ? (
          <div style={{ background: '#0A332F', borderRadius: 12, padding: 24 }}>
            <div style={{ fontSize: 21, fontWeight: 700 }}>Спасибо! Заявка принята.</div>
            <div style={{ fontSize: 16, opacity: 0.85, marginTop: 6 }}>Наш менеджер перезвонит вам в течение 10 минут.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', gap: 24, alignItems: 'stretch' }}>
              <input
                className="input-dark"
                value={consultName}
                onChange={(e) => setConsultName(e.target.value)}
                placeholder="Ваше имя"
                style={{ flex: 1, background: '#0A332F', border: '1px solid transparent', borderRadius: 8, padding: '20px 24px', color: '#fff', fontSize: 16 }}
              />
              <input
                className="input-dark"
                value={consultPhone}
                onChange={(e) => setConsultPhone(e.target.value)}
                placeholder="Номер телефона"
                style={{ flex: 1, background: '#0A332F', border: '1px solid transparent', borderRadius: 8, padding: '20px 24px', color: '#fff', fontSize: 16 }}
              />
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
              <button type="button" className="btn-white" style={{ flex: 'none', padding: '20px 40px' }} onClick={submitConsult}>
                {consultState === 'loading' ? 'Отправка…' : 'Оставить заявку'}
              </button>
            </div>
            {consultState === 'error' && (
              <div style={{ fontSize: 14, color: '#ffb4a8' }}>Укажите имя и корректный номер телефона.</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
