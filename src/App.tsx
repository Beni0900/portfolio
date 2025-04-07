import Navbar from "./Components/Navbar/Navbar";
import "./portfolio.scss";
import { FaChevronUp } from "react-icons/fa";
import wave from "./assets/wave.png";
import Main from "./Components/Main/Main";
import AboutMe from "./Components/AboutMe/AboutMe";
import MyService from "./Components/MyService/MyService";
import MyWork from "./Components/MyWork/MyWork";
import Education from "./Components/Education/Education";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <div className="portfolio">
      <div
        className="goUp"
        onClick={() => {
          const el = document.getElementById("home");
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      >
        <FaChevronUp className="icon" />
      </div>
      <Navbar />
      <Main />
      <img src={wave} alt="separator" className="separator" />
      <AboutMe />
      <MyService />
      <MyWork />
      <Education />
      <Skills />
    </div>
  );
};

export default App;
