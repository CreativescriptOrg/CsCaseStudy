import { FC } from "react";

interface SolutionProps {
  data: {
    problem?: {
      desc: string;
    };
  }
}

const Solution: FC<SolutionProps> = ({ data }) => {
  return (
    <div className="section container">
      <div className="section_info">
        <h2 className="section_heading">What was the Problem?</h2>
        <div className="section_info_right">
          <span className="title">Problem Description</span>
          <p>{data.problem?.desc || "Problem description not available"}</p>
        </div>
      </div>
    </div>
  );
};

export default Solution;
