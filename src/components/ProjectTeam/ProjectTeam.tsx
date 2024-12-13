import styles from "./styles.module.css";
import data from "../../case_study_1.json";
import Image from "next/image";
import parse from "html-react-parser";

const ProjectTeam = () => {
	return (
		<div className={`section container ${styles.container}`}>
			<div className='section_info'>
				<h2 className={`${styles.name} section_heading`}>Project Team</h2>
				<div className='section_info_right'>
					<span className='title'>Team Description</span>
					<p>{parse(data.projectTeam.desc)}</p>
				</div>
			</div>
			<Image
				src={data.projectTeam.img}
				alt='Project Team'
				className='image'
				width={1200}
				height={440}
			/>
		</div>
	);
};

export default ProjectTeam;
