import styles from "./styles.module.css";
import Image from "next/image";
import parse from "html-react-parser";

interface AboutProps {
  name: string;
  desc: string;
  domain: string;
  year: string;
  services: string[];
  mainTechStack: string[];
  platform: string;
  image: string;
}

const About = ({
  data: { name, desc, domain, year, services, mainTechStack, platform, image },
}: {
  data: AboutProps;
}) => {
  return (
    <div className={`section container ${styles.container}`}>
      <div className="section_info">
        <h2 className={`${styles.name} section_heading`}>{name}</h2>
        <div className="section_info_right">
          <span className="title">About Case study</span>
          <p>{parse(desc)}</p>
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
      <Image src={image} alt="" className="image" width={1200} height={440} />
    </div>
  );
};

export default About;
