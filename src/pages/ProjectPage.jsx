import ProjectHeader from '../components/project/ProjectHeader';
import ProjectHero from '../components/project/ProjectHero';
import ProjectAbout from '../components/project/ProjectAbout';
import ProjectStandards from '../components/project/ProjectStandards';
import ProjectLocation from '../components/project/ProjectLocation';
import ProjectArchitecture from '../components/project/ProjectArchitecture';
import ProjectYard from '../components/project/ProjectYard';
import ProjectPlayground from '../components/project/ProjectPlayground';
import ProjectKids from '../components/project/ProjectKids';
import ProjectGym from '../components/project/ProjectGym';
import ProjectHall from '../components/project/ProjectHall';
import ProjectApartments from '../components/project/ProjectApartments';
import ProjectFloorPlans from '../components/project/ProjectFloorPlans';
import ProjectParking from '../components/project/ProjectParking';
import ProjectBoxroom from '../components/project/ProjectBoxroom';
import ProjectExtras from '../components/project/ProjectExtras';
import ProjectConsultForm from '../components/project/ProjectConsultForm';
import ProjectFooter from '../components/project/ProjectFooter';

export default function ProjectPage({ data, onBack, onOpenCall, onNavigateProject }) {
  const accent = data.theme?.accent ?? '#61D0C5';
  const accentDark = data.theme?.accentDark ?? '#1F6059';

  const scrollToConsult = () => {
    document.getElementById(`${data.slug}-consult`)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ProjectHeader data={data} onBack={onBack} onOpenCall={onOpenCall} />
      <div
        className="page easton-page"
        style={{
          '--project-accent': accent,
          '--project-accent-dark': accentDark,
        }}
      >
        <ProjectHero data={data} onScrollToConsult={scrollToConsult} />
        <ProjectAbout data={data} />
        <ProjectStandards data={data} />
        <ProjectLocation data={data} />
        <ProjectArchitecture data={data} onScrollToConsult={scrollToConsult} />
        <ProjectYard data={data} />
        {data.playground && <ProjectPlayground data={data} onScrollToConsult={scrollToConsult} />}
        {data.kids && <ProjectKids data={data} />}
        {data.gym && <ProjectGym data={data} />}
        <ProjectHall data={data} />
        <ProjectApartments data={data} onScrollToConsult={scrollToConsult} />
        {data.floorPlans && <ProjectFloorPlans data={data} onScrollToConsult={scrollToConsult} />}
        <ProjectParking data={data} />
        {data.extras ? <ProjectExtras data={data} /> : data.boxroom ? <ProjectBoxroom data={data} /> : null}
        <ProjectConsultForm data={data} />
        <ProjectFooter data={data} onBack={onBack} onNavigateProject={onNavigateProject} />
      </div>
    </>
  );
}
