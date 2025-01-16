import data from "@/json/konster.json";
import About, { AboutProps } from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ProjectTeam from "@/components/ProjectTeam/ProjectTeam";
import { HeroProps } from "@/components/Hero/Hero";
import { ProjectTeamProps } from "@/components/ProjectTeam/ProjectTeam";
import ProjectDetailsSection from "@/components/ProjectDetailsSection/ProjectDetailsSection";
import Media from "@/components/Media/Media";

export default function Konster() {
	const hero: HeroProps = {
		title: data.title,
		image: data.hero_img,
		subtitle: data.subtitle,
		caption: data.hero_img_caption,
	};
	const about: AboutProps = {
		name: data.about.name,
		desc: data.about.desc,
		domain: data.about.domain,
		year: data.about.year,
		services: data.about.services,
		mainTechStack: data.about.mainTechStack,
		platform: data.about.platform,
		images: data.about.image,
	};
	const projectTeam: ProjectTeamProps = {
		desc: data.projectTeam?.desc || "",
		img: data.projectTeam?.img || "",
		members: data.projectTeam?.members || [],
	};

	return (
		<div style={{ "--theme-color": data.theme_color } as React.CSSProperties}>
			<Header />
			<Hero data={hero} />
			<About data={about} />
			<ProjectTeam data={projectTeam} />
			<ProjectDetailsSection data={data.projectDetails_1} />

			<div className='container four_section_grid mockup_grid'>
				{data.mockups_1.map((el: any, i: number) => (
					<Media key={i} data={el} />
				))}
			</div>
			<ProjectDetailsSection data={data.projectDetails_2} />
			<div className='container mockup_grid packed_grid'>
				{data.mockups_2.map((el: any, i: number) => (
					<Media key={i} data={el} />
				))}
			</div>
			<ProjectDetailsSection data={data.projectDetails_3} />

			<div className='container look_mockup mockup_grid'>
				{data.mockups_3.map((el: any, i: number) => (
					<Media key={i} data={el} />
				))}
			</div>
			<ProjectDetailsSection data={data.projectDetails_4} />
		</div>
	);
}
