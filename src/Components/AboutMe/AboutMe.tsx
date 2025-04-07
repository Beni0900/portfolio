import "./aboutme.scss";
import profPicture from "../../assets/profilkep.jpg";
import CV from "../../assets/files/CV.pdf";

const AboutMe = () => {
  return (
    <div className="aboutMe" id="aboutme">
      <div className="leftSection">
        <img src={profPicture} alt="profile_picture" />
        <div className="box bounce"></div>
      </div>
      <div className="rightSection">
        <h3>I'am Darabos Benjamin</h3>
        <p>
          I began my journey in development back in 2019-2020, initially
          focusing on FiveM scripts. These early projects taught me the
          fundamentals of programming and laid the groundwork for my future
          endeavors. As I progressed, I delved into other technologies,
          including frameworks and various programming languages. I have
          participated in numerous courses to enhance my skills, which
          ultimately enabled me to create my own unique School buffet
          comprehensive mobile system with a dedicated application. This
          project, which started as a web-based interface, remains functional to
          this day, although I currently lack the time to actively manage it due
          to my studies and work commitments.
        </p>
        <p>
          At the age of 18, I established my own business, marking the beginning
          of my professional journey. Since then, I have been continuously
          developing my skills and expanding my knowledge. Now, as a university
          student studying software engineering, I am finally pursuing the
          education I have always desired. Throughout my journey, I have sought
          to take on projects and collaborate with others to enhance my
          expertise and prepare for future success. My entrepreneurial spirit
          and academic pursuits have equipped me with a strong foundation in
          both theoretical and practical aspects of software development.
        </p>
        <p>
          I am a highly motivated and adaptable individual with a strong passion
          for learning. I thrive in team environments and am confident in my
          abilities to tackle challenges head-on. My resilience and
          determination drive me to continuously improve and expand my skill
          set. As I move forward in my career, I aim to leverage these qualities
          to excel in the field of software development. My goal is to become a
          proficient developer capable of creating impactful projects that
          contribute positively to the tech community.
        </p>
        <div className="buttonContainer">
          <a
            href={CV}
            download="DarabosBenjaminCV"
            className="buttonDesign"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
