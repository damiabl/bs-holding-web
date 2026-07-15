import { computeCalc, fmt, onlyDigits } from '../utils/format';

function CalcField({ label, value, onChange, suffix, min, max, step, onRangeChange }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <label style={{ fontSize: 16, fontWeight: 500 }}>{label}</label>
      <div style={{ border: '1px solid #D8D8D8', borderRadius: 8, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <input
          value={value}
          onChange={onChange}
          style={{ border: 'none', fontSize: 21, fontWeight: 500, width: '100%', background: 'none' }}
        />
        <span style={{ fontSize: 21, fontWeight: 500 }}>{suffix}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={typeof value === 'number' ? value : onlyDigits(value)}
        onChange={onRangeChange}
        style={{ accentColor: '#0D403B', width: '100%' }}
      />
    </div>
  );
}

export default function Calculator({
  calcMode,
  setCalcMode,
  price,
  setPrice,
  down,
  setDown,
  termY,
  setTermY,
  rate,
  setRate,
  termM,
  setTermM,
  leadName,
  setLeadName,
  leadPhone,
  setLeadPhone,
  leadState,
  submitLead,
}) {
  const calc = computeCalc({ price, down, termY, rate, termM, calcMode });
  const calcTab = (active) => ({
    padding: '16px 40px',
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 700,
    cursor: 'pointer',
    border: '1px solid #0D403B',
    background: active ? '#0D403B' : 'transparent',
    color: active ? '#fff' : '#0D403B',
  });

  return (
    <section style={{ padding: '0 64px 64px', display: 'flex', flexDirection: 'column', gap: 40 }}>
      <h2 style={{ fontSize: 51, fontWeight: 700, margin: 0 }}>Ипотечный калькулятор</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        <button type="button" onClick={() => setCalcMode('Ипотека')} style={calcTab(calcMode === 'Ипотека')}>Ипотека</button>
        <button type="button" onClick={() => setCalcMode('Рассрочка')} style={calcTab(calcMode === 'Рассрочка')}>Рассрочка</button>
      </div>
      <div style={{ display: 'flex', border: '1px solid #54493C', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ flex: 1, background: '#fff', padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <CalcField
            label="Стоимость недвижимости"
            value={fmt(price)}
            onChange={(e) => setPrice(onlyDigits(e.target.value))}
            suffix="₸"
            min={5000000}
            max={100000000}
            step={100000}
            onRangeChange={(e) => setPrice(Number(e.target.value))}
          />
          <CalcField
            label="Первоначальный взнос"
            value={fmt(down)}
            onChange={(e) => setDown(onlyDigits(e.target.value))}
            suffix="₸"
            min={0}
            max={price}
            step={100000}
            onRangeChange={(e) => setDown(Number(e.target.value))}
          />
          {calcMode === 'Ипотека' && (
            <>
              <CalcField
                label="Срок займа"
                value={termY}
                onChange={(e) => setTermY(onlyDigits(e.target.value))}
                suffix="лет"
                min={1}
                max={25}
                step={1}
                onRangeChange={(e) => setTermY(Number(e.target.value))}
              />
              <CalcField
                label="Процентная ставка"
                value={rate}
                onChange={(e) => setRate(Number(String(e.target.value).replace(',', '.').replace(/[^0-9.]/g, '')) || 0)}
                suffix="%"
                min={1}
                max={25}
                step={0.1}
                onRangeChange={(e) => setRate(Number(e.target.value))}
              />
            </>
          )}
          {calcMode === 'Рассрочка' && (
            <CalcField
              label="Срок рассрочки"
              value={termM}
              onChange={(e) => setTermM(onlyDigits(e.target.value))}
              suffix="мес."
              min={1}
              max={12}
              step={1}
              onRangeChange={(e) => setTermM(Number(e.target.value))}
            />
          )}
          <p style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.3, color: 'rgba(0,0,0,0.6)', margin: '8px 0 0' }}>
            Результат ипотечного калькулятора не является публичной офертой. Для более точного расчёта оставьте заявку.
          </p>
        </div>
        <div style={{ flex: 1, background: '#0D403B', padding: 40, display: 'flex', flexDirection: 'column', gap: 32, color: '#fff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 21, fontWeight: 500 }}>{calc.mainLabel}</div>
            <div style={{ fontSize: 60, fontWeight: 800, lineHeight: 1.1 }}>{calc.mainValue}</div>
            <div style={{ fontSize: 16, fontWeight: 500, opacity: 0.8 }}>{calc.mainSub}</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1 }}>{calc.statValue}</div>
            <div style={{ fontSize: 16, fontWeight: 500, opacity: 0.8 }}>{calc.statLabel}</div>
          </div>
          {leadState === 'success' ? (
            <div style={{ marginTop: 'auto', background: '#0A332F', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 21, fontWeight: 700 }}>Заявка отправлена!</div>
              <div style={{ fontSize: 16, opacity: 0.85, marginTop: 8 }}>Мы свяжемся с вами в течение 10 минут и рассчитаем ваши условия.</div>
            </div>
          ) : (
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <input
                  className="input-dark"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="Ваше имя"
                  style={{ flex: 1, background: '#0A332F', border: '1px solid transparent', borderRadius: 8, padding: '18px 20px', color: '#fff', fontSize: 16 }}
                />
                <input
                  className="input-dark"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="Номер телефона"
                  style={{ flex: 1, background: '#0A332F', border: '1px solid transparent', borderRadius: 8, padding: '18px 20px', color: '#fff', fontSize: 16 }}
                />
              </div>
              {leadState === 'error' && (
                <div style={{ fontSize: 14, color: '#ffb4a8' }}>Укажите имя и корректный номер телефона.</div>
              )}
              <button type="button" className="btn-white" onClick={submitLead}>
                {leadState === 'loading' ? 'Отправка…' : 'Получить расчёт'}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
