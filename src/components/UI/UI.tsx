import styles from "./styles.module.css";
import data from "../../case_study_1.json";

import MasonryGrid from "@/components/MasonryGrid/MasonryGrid";
const UI = () => {
  return (
    <div className={`section container ${styles.container}`}>
      <div className="section_info">
        <h2 className={`section_heading`}>
          User Interface and Product Outlook
        </h2>
        <div className="section_info_right">
          <span className="title">Gamified Approach for Engagement </span>
          <div>{data.behindTheScenes.ui.approach}</div>
        </div>
      </div>
      <div className="section_info">
        <span></span>
        <div className={`${styles.grid_1}`}>
          <div className="section_info_right">
            <span>Social Proof</span>
            <div>{data.behindTheScenes.ui.socialProof}</div>
          </div>
          <div className="section_info_right">
            <span>Future Scope</span>
            <div>{data.behindTheScenes.ui.futureScope}</div>
          </div>
        </div>
      </div>
      <MasonryGrid data={data.behindTheScenes.ui.mockups} />
    </div>
  );
};

export default UI;
