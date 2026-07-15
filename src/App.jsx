import { useCallback, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Featured from './components/Featured';
import Paida from './components/Paida';
import Calculator from './components/Calculator';
import Banks from './components/Banks';
import Consultation from './components/Consultation';
import Commercial from './components/Commercial';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import CallPopup from './components/CallPopup';
import { DEFAULT_FILTER, PROJECTS } from './data/projects';
import { filterProjects, nameOk, phoneOk } from './utils/format';

export default function App() {
  const [openMenu, setOpenMenu] = useState(null);
  const [headerCity, setHeaderCity] = useState('Актау');
  const [langCur, setLangCur] = useState('RU');
  const [call, setCall] = useState({ open: false, name: '', phone: '', state: 'idle' });
  const [filter, setFilterState] = useState({ ...DEFAULT_FILTER });
  const [appliedFilter, setAppliedFilter] = useState({ ...DEFAULT_FILTER });
  const [activeTab, setActiveTab] = useState('Central Park');
  const [calcMode, setCalcMode] = useState('Ипотека');
  const [price, setPrice] = useState(15000000);
  const [down, setDown] = useState(7500000);
  const [termY, setTermY] = useState(15);
  const [rate, setRate] = useState(7.5);
  const [termM, setTermM] = useState(12);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadState, setLeadState] = useState('idle');
  const [consultName, setConsultName] = useState('');
  const [consultPhone, setConsultPhone] = useState('');
  const [consultCity, setConsultCity] = useState('Актау');
  const [consultState, setConsultState] = useState('idle');

  const toggleMenu = useCallback((key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  }, []);

  const setFilter = useCallback((key, value) => {
    setFilterState((prev) => {
      const next = { ...prev, [key]: value };
      setAppliedFilter(next);
      return next;
    });
    setOpenMenu(null);
  }, []);

  const applyFilter = useCallback(() => {
    setAppliedFilter({ ...filter });
    setOpenMenu(null);
  }, [filter]);

  const resetFilter = useCallback(() => {
    const d = { ...DEFAULT_FILTER };
    setFilterState(d);
    setAppliedFilter(d);
    setOpenMenu(null);
  }, []);

  const filtered = useMemo(
    () => filterProjects(PROJECTS, appliedFilter),
    [appliedFilter],
  );

  const openCall = useCallback(() => {
    setCall({ open: true, name: '', phone: '', state: 'idle' });
  }, []);

  const closeCall = useCallback(() => {
    setCall((prev) => ({ ...prev, open: false }));
  }, []);

  const submitCall = useCallback(() => {
    setCall((prev) => {
      if (!nameOk(prev.name) || !phoneOk(prev.phone)) {
        return { ...prev, state: 'error' };
      }
      setTimeout(() => {
        setCall((c) => ({ ...c, state: 'success' }));
      }, 900);
      return { ...prev, state: 'loading' };
    });
  }, []);

  const submitLead = useCallback(() => {
    if (!nameOk(leadName) || !phoneOk(leadPhone)) {
      setLeadState('error');
      return;
    }
    setLeadState('loading');
    setTimeout(() => setLeadState('success'), 900);
  }, [leadName, leadPhone]);

  const submitConsult = useCallback(() => {
    if (!nameOk(consultName) || !phoneOk(consultPhone)) {
      setConsultState('error');
      return;
    }
    setConsultState('loading');
    setTimeout(() => setConsultState('success'), 900);
  }, [consultName, consultPhone]);

  return (
    <div className="page">
      <Header
        showTopBar
        headerCity={headerCity}
        setHeaderCity={setHeaderCity}
        langCur={langCur}
        setLangCur={setLangCur}
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        onOpenCall={openCall}
      />
      <Hero onOpenCall={openCall} />
      <Catalog
        filter={filter}
        setFilter={setFilter}
        openMenu={openMenu}
        toggleMenu={toggleMenu}
        applyFilter={applyFilter}
        resetFilter={resetFilter}
        filtered={filtered}
      />
      <Featured activeTab={activeTab} setActiveTab={setActiveTab} />
      <Paida onOpenCall={openCall} />
      <Calculator
        calcMode={calcMode}
        setCalcMode={setCalcMode}
        price={price}
        setPrice={setPrice}
        down={down}
        setDown={setDown}
        termY={termY}
        setTermY={setTermY}
        rate={rate}
        setRate={setRate}
        termM={termM}
        setTermM={setTermM}
        leadName={leadName}
        setLeadName={setLeadName}
        leadPhone={leadPhone}
        setLeadPhone={setLeadPhone}
        leadState={leadState}
        submitLead={submitLead}
      />
      <Banks />
      <Consultation
        consultName={consultName}
        setConsultName={setConsultName}
        consultPhone={consultPhone}
        setConsultPhone={setConsultPhone}
        consultCity={consultCity}
        setConsultCity={setConsultCity}
        consultState={consultState}
        submitConsult={submitConsult}
      />
      <Commercial />
      <Contacts />
      <Footer />
      <CallPopup
        call={{
          ...call,
          setName: (name) => setCall((prev) => ({ ...prev, name })),
          setPhone: (phone) => setCall((prev) => ({ ...prev, phone })),
        }}
        onClose={closeCall}
        onSubmit={submitCall}
      />
    </div>
  );
}
