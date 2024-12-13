import styles from "./styles.module.css";

const Hero = () => {
	return (
		<div className={styles.container}>
			<h1>Case Study Title</h1>
			<img src='/images/hero.png' alt='' />
			<div className={styles.backdrop}></div>
		</div>
	);
};

export default Hero;
