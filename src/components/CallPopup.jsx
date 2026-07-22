export default function CallPopup({ call, onClose, onSubmit }) {
  if (!call.open) return null;

  return (
    <div className="call-popup" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="call-popup__panel" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="call-popup__close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        {call.state === 'success' ? (
          <div className="call-popup__success">
            <div className="call-popup__title">Спасибо за заявку!</div>
            <div className="call-popup__sub">Мы перезвоним вам в течение 10 минут.</div>
            <button type="button" className="btn-primary" onClick={onClose}>
              Закрыть
            </button>
          </div>
        ) : (
          <>
            <div className="call-popup__intro">
              <div className="call-popup__title">Заказать звонок</div>
              <div className="call-popup__sub">Оставьте контакты — перезвоним в течение 10 минут.</div>
            </div>
            <input
              value={call.name}
              onChange={(e) => call.setName(e.target.value)}
              placeholder="Ваше имя"
              className="call-popup__input"
            />
            <input
              value={call.phone}
              onChange={(e) => call.setPhone(e.target.value)}
              placeholder="Номер телефона"
              className="call-popup__input"
            />
            {call.state === 'error' && (
              <div className="form-error form-error--light">Укажите имя и корректный номер телефона.</div>
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
