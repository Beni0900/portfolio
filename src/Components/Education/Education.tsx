import "./education.scss";
import educationPicture from "../../assets/story1.png";
import { EducationData } from "./types/education";

const Education = () => {
  const educationData: EducationData[] = [
    {
      date: "18 March 2021",
      title: "My first curse",
      description: (
        <p>
          On this day, I enrolled in my first programming course, where
          everything about coding finally started to make sense. When I was
          younger, still in elementary school, I attended LogiSchool, a
          programming school for kids. However, at the time, I struggled to
          understand the logic behind coding concepts and why things worked the
          way they did.
          <br />
          <br />
          This course was a turning point for me. It gave meaning to the concept
          of variables and helped me grasp their importance in programming. I
          began to understand how variables act as placeholders for data and how
          they enable dynamic changes within a program. This realization opened
          my eyes to the purpose and power of programming as a whole.
          <br />
          <br />
          Since then, programming has become much more than just a skill; it has
          turned into a passion. This course laid the foundation for my journey
          into coding, sparking an interest that continues to grow as I explore
          new technologies and challenges.
        </p>
      ),
    },
    {
      date: "2021 - 2023",
      title: "Learning time",
      description: (
        <p>
          Between 2021 and 2023, I embarked on a transformative learning
          journey, significantly enhancing my skills and knowledge. During this
          period, I began to explore frameworks(vue, react, tailwind, sass,
          etc.) and gradually build upon my foundation. The projects from this
          time can be accessed via this{" "}
          <a href="https://github.com/vue-ui-fivem" target="_blank">
            link
          </a>
          .
        </p>
      ),
    },
    {
      date: "Aug - 2022",
      title: "School buffet project",
      description: (
        <p>
          In August, I began working on my largest and most complex project to
          date: the online buffet system. This project was a significant
          milestone in my development journey, as it not only required extensive
          programming but also demanded project management skills to ensure its
          successful completion. Initially, the system was designed as a web
          application, but later, I transformed it into a fully functional
          mobile application that was made available on both the Google Play
          Store and the App Store.
          <br />
          <br />
          The web component of the project was developed using Vue.js, as I was
          actively working with this framework at the time. Later, I
          transitioned to React Native for the mobile application, leveraging
          its capabilities to create a seamless and user-friendly experience.
          The backend of the system was entirely built on Node.js, ensuring
          robust performance and scalability throughout the development process.
          <br />
          <br />
          This project taught me invaluable lessons about both programming and
          managing complex systems. From conceptualizing the idea to executing
          every detail, I handled all aspects of the project independently. It
          remains one of my proudest achievements, showcasing my ability to
          adapt and innovate across multiple technologies while delivering a
          high-quality product.
        </p>
      ),
    },
    {
      date: "June 2023",
      title: "Own business",
      description: (
        <p>
          In June, I officially launched my own business as a web developer and
          began working professionally in this field. Since then, I have been
          actively engaged as a frontend developer, particularly focusing on
          FiveM servers. I continuously seek new challenges and projects to
          further develop my skills. Despite feeling successful in this area, I
          am eager to explore opportunities in larger companies to expand my
          professional experience.
        </p>
      ),
    },
    {
      date: "2024 - 2025",
      title: "Nowadays",
      description: (
        <p>
          Currently, I am a university student studying Computer Science at
          Széchenyi István University in Győr. Following my high school
          graduation, I faced the challenge of balancing work and studies, but
          my excellent high school result and perseverance enabled me to secure
          admission to my top-choice university. Notably, this institution had
          the highest entrance threshold in the country compared to other
          universities.
        </p>
      ),
    },
  ];

  return (
    <div className="education" id="education">
      <div className="headerSection">
        <h3>Education & Experience</h3>
      </div>
      <div className="lineSection">
        <div className="column">
          {educationData.map((el, i) => (
            <div className="card" key={i}>
              <div className="imgSection">
                <img src={educationPicture} alt="" />
              </div>
              <div className="textsSection">
                <h4>{el.date}</h4>
                <h3>{el.title}</h3>
                {el.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
