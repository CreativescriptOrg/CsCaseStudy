import data from "@/json/konster.json";
import About, { AboutProps } from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ProjectTeam from "@/components/ProjectTeam/ProjectTeam";
import { HeroProps } from "@/components/Hero/Hero";
import { ProjectTeamProps } from "@/components/ProjectTeam/ProjectTeam";
import { IMAGE_BASE_URL } from "@/config";
import ProjectDetailsSection from "@/components/ProjectDetailsSection/ProjectDetailsSection";

export default function Home() {
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

			<div className='container konster_mockup_grid mockup_grid'>
				{data.mockups_1.map((el: any, i: number) => (
					<img
						key={i}
						src={`${IMAGE_BASE_URL}${el.img}`}
						alt={el.alt}
						className='image'
						width={el.width}
						height={el.height}
						loading='lazy'
					/>
				))}
			</div>
			<ProjectDetailsSection data={data.projectDetails_2} />
			<div className='container mockup_grid konster_affinity'>
				{data.mockups_2.map((el: any, i: number) => (
					<img
						key={i}
						src={`${IMAGE_BASE_URL}${el.img}`}
						alt={el.alt}
						className='image'
						width={el.width}
						height={el.height}
						loading='lazy'
					/>
				))}
			</div>
			<ProjectDetailsSection data={data.projectDetails_3} />

			<div className='container look_mockup mockup_grid'>
				{data.mockups_3.map((el: any, i: number) => (
					<img
						key={i}
						src={`${IMAGE_BASE_URL}${el.img}`}
						alt={el.alt}
						className='image'
						width={el.width}
						height={el.height}
						loading='lazy'
					/>
				))}
			</div>
			<ProjectDetailsSection data={data.projectDetails_4} />
		</div>
	);
}
