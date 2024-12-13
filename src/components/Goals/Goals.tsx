import { FC } from "react";

interface Goal {
  title: string;
  desc: string;
}

interface GoalsProps {
  data: {
    goals?: Goal[];
  };
}

const Goals: FC<GoalsProps> = ({ data }) => {
  return (
    <div className="section container">
      <div className="section_info">
        <h2 className="section_heading">What was the Goal?</h2>
        <div className="section_info_right">
          <span className="title">What were the Goals:</span>
          <ul>
            {data.goals?.map((el: Goal, i: number) => (
              <li key={i}>
                <strong>{el.title}: </strong>
                <p>{el.desc || ""}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Goals;
