export function fmt(n) {
  if (n == null || isNaN(n) || !isFinite(n)) n = 0;
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function onlyDigits(v) {
  return Number(String(v).replace(/\D/g, '')) || 0;
}

export function phoneOk(p) {
  return String(p).replace(/\D/g, '').length >= 10;
}

export function nameOk(n) {
  return String(n).trim().length >= 2;
}

export function filterProjects(projects, filter) {
  return projects.filter((p) => {
    if (filter.city !== 'Все города' && p.city !== filter.city) return false;
    if (filter.klass !== 'Все классы' && p.klass !== filter.klass) return false;
    if (filter.term === 'Сдан' && p.term !== 'Сдан') return false;
    if (filter.term === '2026 год' && !/2026/.test(p.term)) return false;
    if (filter.rooms !== 'Все комнаты') {
      const n = Number(filter.rooms);
      if (!p.rooms.includes(n)) return false;
    }
    if (filter.floor !== 'Любой этаж') {
      const fl = p.floors;
      if (filter.floor === 'до 5 этажей' && !(fl <= 5)) return false;
      if (filter.floor === '5–10 этажей' && !(fl >= 5 && fl <= 10)) return false;
      if (filter.floor === '10 и выше' && !(fl > 10)) return false;
    }
    return true;
  });
}

export function computeCalc({ price, down, termY, rate, termM, calcMode }) {
  const isIp = calcMode === 'Ипотека';
  const loan = Math.max(price - down, 0);

  if (isIp) {
    const r = rate / 100 / 12;
    const n = termY * 12;
    const monthly = r > 0 ? (loan * r) / (1 - Math.pow(1 + r, -n)) : loan / n;
    return {
      isIp,
      mainLabel: 'Ежемесячный платёж',
      mainValue: `${fmt(monthly)} ₸`,
      mainSub: 'На весь срок ипотеки',
      statValue: `${rate}%`,
      statLabel: 'Ставка вознаграждения (диапазон 18.5–22.5%)',
    };
  }

  const monthly = termM > 0 ? loan / termM : 0;
  return {
    isIp,
    mainLabel: 'Ежемесячный платёж',
    mainValue: `${fmt(monthly)} ₸`,
    mainSub: 'До срока сдачи объекта',
    statValue: `${fmt(loan)} ₸`,
    statLabel: 'Остаток после первоначального взноса',
  };
}
