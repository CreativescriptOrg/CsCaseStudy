import styles from "./styles.module.css";
import Image from "next/image";

interface AffinityMap {
  img: string;
  alt: string;
  width: number;
  height: number;
}

interface Problem {
  title: string;
  desc: string;
}

interface DiscoveryPhase {
  identification: string;
  validation: string;
  analysis: string;
}

interface IdeaExploration {
  analogyUsed: string;
  doctor: string;
  child: string;
  parent: string;
}

interface BTSProps {
  data: {
    discoveryPhase: DiscoveryPhase;
    problemsIdentified: Problem[];
    affinityMapping: AffinityMap[];
    ideaExploration: IdeaExploration;
    naming: string;
  };
}

const BTS = ({ data }: BTSProps) => {
  return (
    <div className={`section container ${styles.container}`}>
      <div className="section_info">
        <h2 className={`section_heading`}>Behind the Scenes...</h2>
        <div className="section_info_right">
          <span className="title">Discovery Phase:</span>
          <div className="section_info_inner">
            <div>
              <span>Identification</span>
              <div>{data.discoveryPhase.identification}</div>
            </div>
            <div>
              <span>Validation</span>
              <div>{data.discoveryPhase.validation}</div>
            </div>
            <div>
              <span>Analysis</span>
              <div>{data.discoveryPhase.analysis}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_info">
        <div></div>
        <div className="section_info_right">
          <span className="title">Problems Identified</span>
          <ul>
            {data.problemsIdentified.map((el, i) => (
              <li key={i}>
                {el.title} - {el.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.grid_1}>
        {data.affinityMapping.map((el, i) => (
          <div key={i}>
            <Image
              src={el.img}
              alt={el.alt}
              className="image"
              width={el.width}
              height={el.height}
            />
          </div>
        ))}
      </div>
      <div className="section_info">
        <div></div>
        <div className="section_info_right">
          <span className="title">Idea Exploration</span>
          <div className="section_info_inner">
            <div>
              <span>Analogy Used:</span>
              <div>{data.ideaExploration.analogyUsed}</div>
            </div>
            <div>
              <span>Doctor:</span>
              <div>{data.ideaExploration.doctor}</div>
            </div>
            <div>
              <span>Child (Patient):</span>
              <div>{data.ideaExploration.child}</div>
            </div>
            <div>
              <span>Parent:</span>
              <div>{data.ideaExploration.parent}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_info">
        <div></div>
        <div className="section_info_right">
          <span className="title">Naming The Product</span>
          <div>{data.naming}</div>
        </div>
      </div>
    </div>
  );
};

export default BTS;
