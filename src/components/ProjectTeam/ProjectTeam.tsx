import styles from "./styles.module.css";
import data from "../../case_study_1.json";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/config";

export interface ProjectTeamProps {
	desc: string;
	img: string;
	members?: string[];
}

const ProjectTeam = ({ data }: { data: ProjectTeamProps }) => {
	return (
		<div className={`section container ${styles.container}`}>
			<div className='section_info'>
				<h2 className={`${styles.name} section_heading`}>Project Team</h2>
				<div className='section_info_right'>
					<span className='title'>Team Description</span>
					<p>{data.desc}</p>
					{data.members && (
						<>
							<br />
							<br />
							<span>The project team consisted of the following members :</span>
							<ul>
								{data.members.map((member, i) => (
									<li key={i}>{member}</li>
								))}
							</ul>
						</>
					)}
				</div>
			</div>
			{data.img && (
				<Image
					src={`${IMAGE_BASE_URL}${data.img}`}
					alt='Project Team'
					className='image'
					width={1200}
					height={440}
				/>
			)}
		</div>
	);
};

export default ProjectTeam;
