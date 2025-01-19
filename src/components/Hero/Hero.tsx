import styles from "./styles.module.css";
import { IMAGE_BASE_URL } from "../../config";
export interface HeroProps {
	title: string;
	subtitle?: string;
	image: string;
	caption?: string;
}

const Hero = ({ data }: { data: HeroProps }) => {
	return (
		<div className={styles.hero}>
			<div className={styles.container}>
				<div>
					<h1>{data.title}</h1>
					<p>{data.subtitle}</p>
				</div>
				<img src={`${IMAGE_BASE_URL}${data.image}`} alt='' width={940} />

				<div className={styles.backdrop}></div>
			</div>
			<p className={styles.caption}>{data.caption}</p>
		</div>
	);
};

export default Hero;
