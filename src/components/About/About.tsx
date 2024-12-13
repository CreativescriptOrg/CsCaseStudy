import styles from "./styles.module.css";
import data from "../../case_study_1.json";
import Image from "next/image";
import parse from "html-react-parser";

const About = () => {
  return (
    <div className={`section container ${styles.container}`}>
      <div className="section_info">
        <h2 className={`${styles.name} section_heading`}>{data.about.name}</h2>
        <div className="section_info_right">
          <span className="title">About Case study</span>
          <p>{parse(data.about.desc)}</p>
        </div>
      </div>
      <div className={styles.grid}>
        <div>
          <span>Domain</span>
          <div>{data.about.domain}</div>
        </div>
        <div>
          <span>Year</span>
          <div>{data.about.year}</div>
        </div>
        <div>
          <span>Services</span>
          <div>
            {data.about.services.map((el, i) => (
              <span key={i}>{el}</span>
            ))}
          </div>
        </div>
        <div>
          <span>Main Tech Stack</span>
          <div>
            {data.about.mainTechStack.map((el, i) => (
              <span key={i}>{el}</span>
            ))}
          </div>
        </div>
        <div>
          <span>Platform</span>
          <div>{data.about.platform}</div>
        </div>
      </div>
      <Image
        src={data.about.image}
        alt=""
        className="image"
        width={1200}
        height={440}
      />
    </div>
  );
};

export default About;
