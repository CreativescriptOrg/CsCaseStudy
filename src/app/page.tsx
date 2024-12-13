import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import data from "../case_study_1.json";
import ProjectTeam from "@/components/ProjectTeam/ProjectTeam";
import Solution from "@/components/Solution/Solution";
import BTS from "@/components/BTS/BTS";
import UI from "@/components/UI/UI";
import parse from "html-react-parser";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<About />
			<ProjectTeam />

			<div className={`section container`}>
				<div className='section_info'>
					<h2 className={`section_heading`}>What was the Problem?</h2>
					<div className='section_info_right'>
						<span className='title'>Problem Description</span>
						<p>{parse(data.problem.desc)}</p>
					</div>
				</div>
			</div>
			<div className={`section container`}>
				<div className='section_info'>
					<h2 className={`section_heading`}>What was the Goal?</h2>
					<div className='section_info_right'>
						<span className='title'>What were the Goals:</span>
						<ul>
							{data.goals.map((el, i) => (
								<li key={i}>
									<strong>{el.title}: </strong>
									<p>{parse(el.desc)}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
			<Solution />
			<BTS />
			<UI />
			<div className={`section container`}>
				<div className='section_info'>
					<h2 className={`section_heading`}>Conclusion</h2>
					<div className='section_info_right'>
						<span className='title'>What did we achieve from the project?</span>
						<ul>
							{data.conclusion.achievements.map((el, i) => (
								<li key={i}>{parse(el)}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
