import styles from "./styles.module.css";
import data from "../../case_study_1.json";

export interface HeroProps {
  title: string;
  image: string;
}

const Hero = ({ data }: { data: HeroProps }) => {
  return (
    <div className={styles.container}>
      <h1>{data.title}</h1>
      <img src="/images/hero.png" alt="" />
      <div className={styles.backdrop}></div>
    </div>
  );
};

export default Hero;
