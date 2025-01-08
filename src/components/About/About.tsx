import { IMAGE_BASE_URL } from "@/config";
import styles from "./styles.module.css";
import Image from "next/image";

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
					<span className='title'>About Case study</span>
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
				<div>
					<span>Main Tech Stack</span>
					<div>
						{mainTechStack.map((el, i) => (
							<span key={i}>{el}</span>
						))}
					</div>
				</div>
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
						<Image
							src={`${IMAGE_BASE_URL}${image.img}`}
							alt={image.alt}
							className='image'
							width={image.width}
							height={image.height}
							key={i}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default About;
