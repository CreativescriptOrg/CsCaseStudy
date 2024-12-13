import styles from "./styles.module.css";
import data from "../../case_study_1.json";
import parse from "html-react-parser";
import Image from "next/image";
import MasonryGrid from "@/components/MasonryGrid/MasonryGrid";
const UI = () => {
	return (
		<div className={`section container ${styles.container}`}>
			<div className='section_info'>
				<h2 className={`section_heading`}>
					User Interface and Product Outlook
				</h2>
				<div className='section_info_right'>
					<div>
						<span className='title'>Gamified Approach for Engagement </span>
						<div>{parse(data.behindTheScenes.ui.approach)}</div>
					</div>
				</div>
			</div>
			<div className='section_info'>
				<span></span>
				<div className={`${styles.grid_1}`}>
					<div>
						<span>Social Proof</span>
						<div>{parse(data.behindTheScenes.ui.socialProof)}</div>
					</div>
					<div>
						<span>Future Scope</span>
						<div>{parse(data.behindTheScenes.ui.futureScope)}</div>
					</div>
				</div>
			</div>
			<MasonryGrid data={data.behindTheScenes.ui.mockups} />
		</div>
	);
};

export default UI;
