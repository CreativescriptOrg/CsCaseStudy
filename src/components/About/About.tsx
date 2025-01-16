import styles from "./styles.module.css";
import Media from "@/components/Media/Media";

export interface AboutProps {
	name: string;
	desc: string;
	domain: string;
	year: string;
	services: string[];
	mainTechStack: string[];
	platform: string;
	images?: any[];
}

const About = ({
	data: { name, desc, domain, year, services, mainTechStack, platform, images },
	about_grid,
}: {
	data: AboutProps;
	about_grid?: string;
}) => {
	return (
		<div className={`section container ${styles.container}`}>
			<div className='section_info'>
				<h2 className={`${styles.name} section_heading`}>{name}</h2>
				<div className='section_info_right'>
					{/* <span className='title'>About Case study</span> */}
					<p>{desc}</p>
				</div>
			</div>
			<div className={styles.grid}>
				<div>
					<span>Domain</span>
					<div>{domain}</div>
				</div>
				<div>
					<span>Year</span>
					<div>{year}</div>
				</div>
				<div>
					<span>Services</span>
					<div>
						{services.map((el, i) => (
							<span key={i}>{el}</span>
						))}
					</div>
				</div>
				{mainTechStack && mainTechStack.length > 0 && (
					<div>
						<span>Main Tech Stack</span>
						<div>
							{mainTechStack.map((el, i) => (
								<span key={i}>{el}</span>
							))}
						</div>
					</div>
				)}

				<div>
					<span>Platform</span>
					<div>{platform}</div>
				</div>
			</div>
			{images && images.length > 0 && (
				<div
					className={`mockup_grid ${about_grid ? about_grid : styles.images}`}
				>
					{images.map((image: any, i: number) => (
						<Media key={i} data={image} />
					))}
				</div>
			)}
		</div>
	);
};

export default About;
