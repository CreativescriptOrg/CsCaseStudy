import About, { AboutProps } from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import data from "@/json/docchase.json";
import ProjectTeam from "@/components/ProjectTeam/ProjectTeam";
import { HeroProps } from "@/components/Hero/Hero";
import { ProjectTeamProps } from "@/components/ProjectTeam/ProjectTeam";
import ProjectDetailsSection from "@/components/ProjectDetailsSection/ProjectDetailsSection";
import Media from "@/components/Media/Media";

export default function Docchase() {
	const hero: HeroProps = {
		title: data.title,
		image: data.hero_img,
		subtitle: data.subtitle,
	};
	const about: AboutProps = {
		name: data.about.name,
		desc: data.about.desc,
		domain: data.about.domain,
		year: data.about.year,
		services: data.about.services,
		mainTechStack: data.about.mainTechStack,
		platform: data.about.platform,
		images: data.about.images,
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
			<About data={about} about_grid='four_section_grid' />
			<ProjectTeam data={projectTeam} />
			<ProjectDetailsSection data={data.projectDetails_1} />

			<div className='container two_col_grid mockup_grid'>
				{data.mockups_1.map((el: any, i: number) => (
					<Media key={i} data={el} />
				))}
			</div>
			<ProjectDetailsSection data={data.projectDetails_2} />

			<ProjectDetailsSection data={data.projectDetails_3} />

			<div className='caption_container'>
				<div className='container mockup_grid packed_grid'>
					{data.mockups_2.map((el: any, i: number) => (
						<Media key={i} data={el} />
					))}
				</div>
				<span>Doc Chase Branding</span>
			</div>
			<br />
			<br />
			<br />

			<div className='container mockup_grid one_col_grid'>
				{data.mockups_3.map((el: any, i: number) => (
					<Media key={i} data={el} />
				))}
			</div>

			<ProjectDetailsSection data={data.projectDetails_4} />
		</div>
	);
}
