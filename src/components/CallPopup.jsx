export default function CallPopup({ call, onClose, onSubmit }) {
  if (!call.open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: 16,
          padding: 40,
          width: 480,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', fontSize: 24, lineHeight: 1, cursor: 'pointer', color: '#000' }}
        >
          ×
        </button>
        {call.state === 'success' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 28, fontWeight: 700 }}>Спасибо за заявку!</div>
            <div style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)' }}>Мы перезвоним вам в течение 10 минут.</div>
            <button type="button" className="btn-primary" style={{ marginTop: 12 }} onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ fontSize: 28, fontWeight: 700 }}>Заказать звонок</div>
              <div style={{ fontSize: 16, color: 'rgba(0,0,0,0.6)' }}>Оставьте контакты — перезвоним в течение 10 минут.</div>
            </div>
            <input
              value={call.name}
              onChange={(e) => call.setName(e.target.value)}
              placeholder="Ваше имя"
              style={{ border: '1px solid #D8D8D8', borderRadius: 8, padding: '18px 20px', fontSize: 16 }}
            />
            <input
              value={call.phone}
              onChange={(e) => call.setPhone(e.target.value)}
              placeholder="Номер телефона"
              style={{ border: '1px solid #D8D8D8', borderRadius: 8, padding: '18px 20px', fontSize: 16 }}
            />
            {call.state === 'error' && (
              <div style={{ fontSize: 14, color: '#c0392b' }}>Укажите имя и корректный номер телефона.</div>
            )}
            <button type="button" className="btn-primary" onClick={onSubmit}>
              {call.state === 'loading' ? 'Отправка…' : 'Заказать звонок'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
