import { Typewriter } from "react-simple-typewriter";
import "./main.scss";
import profPicture from "../../assets/profilkep.jpg";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "./types/link";

const Main = () => {
  const links: Link[] = [
    { link: "https://www.facebook.com/Beni.darabos", icon: <FaFacebook /> },
    { link: "https://www.instagram.com/beni_vagyok_/", icon: <FaInstagram /> },
    { link: "https://github.com/Beni0900", icon: <FaGithub /> },
    {
      link: "https://discordapp.com/users/550383476033978369",
      icon: <FaDiscord />,
    },
  ];

  return (
    <div className="main" id="home">
      <h2>
        <Typewriter
          words={[
            "Hello, ",
            "Hello, I`m Darabos Benjamin!",
            "Full-Stack Developer",
            "FiveM server Developer",
          ]}
          cursor={true}
          cursorStyle="|"
          cursorBlinking={true}
          loop={false}
        />
      </h2>
      <div className="desPicContainer">
        <p>
          I am a 20-year-old university student living in Győr, Hungary. In my
          free time, I enjoy playing the guitar and spending time with my two
          huskies, who are a big part of my life. I am currently pursuing a
          degree in software and computer engineering and I am in my second
          semester at university. My passion for learning and self-improvement
          drives me both academically and personally.
          <br />
          <br />
          Outside of my studies, I dedicate time to restoring my car, which has
          become both a rewarding hobby and a practical skill. I also enjoy
          taking care of my dogs, ensuring they are well-trained and happy.
          Whether I’m working on personal projects or spending quality time with
          my girlfriend, I make the most of every moment to grow and learn.
          Music is another outlet for creativity, as playing the guitar allows
          me to relax and express myself.
          <br />
          <br />
          In addition to being a full-time student, I work part-time to gain
          practical experience while continuing to develop my skills in
          programming and software development. My goal is to become proficient
          in both frontend and backend technologies, with a particular interest
          in creating innovative solutions for FiveM servers and websites.
          Balancing work, studies, hobbies, and personal relationships has
          taught me the importance of discipline and time management, which I
          strive to apply in all areas of my life.
        </p>
        <img src={profPicture} alt="profile_pciture" />
      </div>
      <div className="links">
        {links.map((el) => (
          <a className="designedLink" href={el.link} key={el.link}>
            {el.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Main;
