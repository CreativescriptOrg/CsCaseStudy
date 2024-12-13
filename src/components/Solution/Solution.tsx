import data from "../../case_study_1.json";
import parse from "html-react-parser";
import MasonryGrid from "@/components/MasonryGrid/MasonryGrid";

const Solution = () => {
  return (
    <div className={`section container `}>
      <div className="section_info">
        <h2 className={`section_heading`}>What was the Solution?</h2>
        <div className="section_info_right">
          <div>{parse(data.projectTeam.desc)}</div>
        </div>
      </div>
      <MasonryGrid data={data.mockups} />
    </div>
  );
};

export default Solution;
