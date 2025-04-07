import "./skills.scss";
import { Skill } from "./types/skill";

export const Skills = () => {
  const skills: Skill[] = [
    {
      name: "Frontend(Vue, React-ts, Tailwind, React-Native, SASS)",
      percent: 85,
      bgC: "rgb(16, 111, 244)",
    },
    {
      name: "Backend(Lua, node-js, ASP.net, SQL, SQLite, Java, PHP)",
      percent: 72,
      bgC: "grey",
    },
    { name: "UX(Figma, Photoshop)", percent: 68, bgC: "#61DBFB" },
    { name: "Adatbázisok(SQL, SQLite, Mongo-DB)", percent: 93, bgC: "white" },
    { name: "Linux - devoops", percent: 8, bgC: "orange" },
    {
      name: "Other applications(Git, Microsoft-365, Jura, Trello)",
      percent: 89,
      bgC: "purple",
    },
  ];

  return (
    <div className="internalSkills" id="skills">
      <div className="headerSection">
        <h3>My Internal Skills</h3>
      </div>
      <div className="skillsSection">
        {skills.map((element, index) => {
          return (
            <div key={index} className="skillContainer">
              <h3>{element.name}</h3>
              <div className="progressBar">
                <div
                  className="progressLine"
                  style={{
                    width: element.percent + "%",
                    backgroundColor: element.bgC,
                    borderRadius: element.percent > 97 ? "1rem" : "",
                  }}
                >
                  {element.percent}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
