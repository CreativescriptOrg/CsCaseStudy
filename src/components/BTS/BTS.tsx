import styles from "./styles.module.css";
import data from "../../case_study_1.json";
import Image from "next/image";
import parse from "html-react-parser";
import MasonryGrid from "@/components/MasonryGrid/MasonryGrid";

const BTS = () => {
	return (
		<div className={`section container ${styles.container}`}>
			<div className='section_info'>
				<h2 className={`section_heading`}>Behind the Scenes...</h2>
				<div className='section_info_right'>
					<span className='title'>Discovery Phase:</span>
					<div className='section_info_inner'>
						<div>
							<span>Identification</span>
							<div>
								{parse(data.behindTheScenes.discoveryPhase.identification)}
							</div>
						</div>
						<div>
							<span>Validation</span>
							<div>{parse(data.behindTheScenes.discoveryPhase.validation)}</div>
						</div>
						<div>
							<span>Analysis</span>
							<div>{parse(data.behindTheScenes.discoveryPhase.analysis)}</div>
						</div>
					</div>
				</div>
			</div>
			<div className='section_info'>
				<div></div>
				<div className='section_info_right'>
					<span className='title'>Problems Identified</span>
					<ul>
						{data.behindTheScenes.problemsIdentified.map((el, i) => (
							<li key={i}>
								<strong>{el.title} - </strong>
								{parse(el.desc)}
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.grid_1}>
				{data.behindTheScenes.affinityMapping.map((el, i) => (
					<div key={i}>
						<Image
							src={el.img}
							alt={el.alt}
							className='image'
							width={el.width}
							height={el.height}
						/>
					</div>
				))}
			</div>
			<div className='section_info'>
				<div></div>
				<div className='section_info_right'>
					<span className='title'>Idea Exploration</span>
					<div className='section_info_inner'>
						<div>
							<span>Analogy Used:</span>
							<div>
								{parse(data.behindTheScenes.ideaExploration.analogyUsed)}
							</div>
						</div>
						<div>
							<span>Doctor:</span>
							<div>{parse(data.behindTheScenes.ideaExploration.doctor)}</div>
						</div>
						<div>
							<span>Child (Patient):</span>
							<div>{parse(data.behindTheScenes.ideaExploration.child)}</div>
						</div>
						<div>
							<span>Parent:</span>
							<div>{parse(data.behindTheScenes.ideaExploration.parent)}</div>
						</div>
					</div>
				</div>
			</div>
			<div className='section_info'>
				<div></div>
				<div className='section_info_right'>
					<span className='title'>Naming The Product</span>
					<div>{parse(data.behindTheScenes.naming)}</div>
				</div>
			</div>
			<MasonryGrid data={data.behindTheScenes.moreImages} />
		</div>
	);
};

export default BTS;
