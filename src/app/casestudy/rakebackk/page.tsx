import About from "@/components/About/About";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import data from "@/json/rakebackk.json";
import ProjectTeam from "@/components/ProjectTeam/ProjectTeam";
import Solution from "@/components/Solution/Solution";
import BTS from "@/components/BTS/BTS";
import UI from "@/components/UI/UI";
import parse from "html-react-parser";
import { AboutProps } from "@/components/Header/Header";

export default function Home() {
  const about: AboutProps = data.about;
  return (
    <div>
      <Header about={about} />
      <Hero />
      <About />
      <ProjectTeam />

      <div className="section container">
        <div className="section_info">
          <h2 className="section_heading">What was the Problem?</h2>
          <div className="section_info_right">
            <span className="title">Problem Description</span>
            <p>{data.problem?.desc || "Problem description not available"}</p>
          </div>
        </div>
      </div>

      <div className="section container">
        <div className="section_info">
          <h2 className="section_heading">What was the Goal?</h2>
          <div className="section_info_right">
            <span className="title">What were the Goals:</span>
            <ul>
              {data.goals?.map((el: Goal, i: number) => (
                <li key={i}>
                  <strong>{el.title}: </strong>
                  <p>{parse(el.desc || "")}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Solution />
      <BTS />
      <UI />

      <div className="section container">
        <div className="section_info">
          <h2 className="section_heading">Conclusion</h2>
          <div className="section_info_right">
            <span className="title">What did we achieve from the project?</span>
            <ul>
              {data.conclusion?.achievements?.map((el: string, i: number) => (
                <li key={i}>{parse(el || "")}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
