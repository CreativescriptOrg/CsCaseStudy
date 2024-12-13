import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import data from "@/json/docchase.json";
import ProjectTeam from "@/components/ProjectTeam/ProjectTeam";
import Solution from "@/components/Solution/Solution";
import BTS from "@/components/BTS/BTS";
import UI from "@/components/UI/UI";

import { AboutProps } from "@/components/Header/Header";
import { HeroProps } from "@/components/Hero/Hero";
import { ProjectTeamProps } from "@/components/ProjectTeam/ProjectTeam";
import Goals from "@/components/Goals/Goals";

export default function Home() {
  const header: AboutProps = data.about;
  const hero: HeroProps = { title: data.title, image: data.hero_img };
  const about: AboutProps = {
    name: data.about.name,
    desc: data.about.desc,
    domain: data.about.domain,
    year: data.about.year,
    services: data.about.services,
    mainTechStack: data.about.mainTechStack,
    platform: data.about.platform,
    image: data.about.image,
  };
  const projectTeam: ProjectTeamProps = {
    desc: data.projectTeam?.desc || "",
    img: data.projectTeam?.img || "",
  };
  const goalsData = {
    goals: data.goals,
  };
  const solutionData = {
    problem: data.problem,
  };
  const btsData = {
    discoveryPhase: data.behindTheScenes.discoveryPhase,
    problemsIdentified: data.behindTheScenes.problemsIdentified,
    affinityMapping: data.behindTheScenes.affinityMapping,
    ideaExploration: data.behindTheScenes.ideaExploration,
    naming: data.behindTheScenes.naming,
  };
  return (
    <div>
      <Header about={header} />
      <Hero data={hero} />
      <About data={about} />
      <ProjectTeam data={projectTeam} />
      <Solution data={solutionData} />
      <BTS data={btsData} />
      <UI />
      <Goals data={goalsData} />
    </div>
  );
}
