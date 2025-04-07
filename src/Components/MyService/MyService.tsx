import "./myservice.scss";
import servicePic from "../../assets/service1.png";
import { Service } from "./types/service";

const MyService = () => {
  const servicesDescription: Service[] = [
    {
      title: "Web Development",
      description: (
        <p>
          Web development complexity can range from simple static landing pages
          to highly dynamic websites requiring backend server integration. A
          basic landing page typically consists of HTML and CSS, providing a
          straightforward structure and styling without interactivity or backend
          functionality. On the other hand, more complex websites involve
          dynamic content, user authentication, database management, and backend
          frameworks such as Node.js or Python. These advanced projects demand a
          higher level of expertise and are ideal for applications like
          e-commerce platforms or interactive web apps. The complexity depends
          on the project's goals and the technologies required to achieve them.
        </p>
      ),
    },
    {
      title: "FiveM - What is FiveM ?",
      description: (
        <p>
          FiveM is a modification framework for Grand Theft Auto V that allows
          players to create and customize their own multiplayer servers. Unlike
          GTA Online, where players connect to Rockstar's centralized servers,
          FiveM enables users to connect to dedicated servers hosted by
          individuals or groups. These servers offer unlimited customization,
          allowing players to modify gameplay modes, rules, and assets such as
          cars, maps, and weapons.
          <br />
          <br />
          The UI in FiveM plays a crucial role in enhancing the gameplay
          experience. It allows server owners and developers to create
          interactive and visually appealing interfaces tailored to their
          server's needs. Common UI components include:
          <br />
          <br />
          Custom Menus: Players can interact with features like inventory
          systems, job menus, or roleplay-specific options through dynamic
          menus.
          <br />
          <br />
          HUD (Heads-Up Display): Essential information like health, money, or
          mission objectives can be displayed directly on the screen.
          <br />
          <br />
          Notifications: Pop-up messages inform players about server events,
          missions, or roleplay scenarios. Interactive Maps and Panels: These
          allow players to navigate the game world or access server-specific
          functionalities seamlessly. Developers often use programming languages
          like Lua or JavaScript(React and other frameworks) to design and
          implement these UI elements, making them fully customizable and
          adaptable to any server type.
        </p>
      ),
    },
  ];

  return (
    <div className="myService" id="expreience">
      <div className="leftSection">
        <h3>My Services</h3>
        <p>
          Currently, I offer services in creating a variety of custom websites
          regardless of complexity, as well as designing and developing unique
          FiveM scripts. I adjust each project to meet specific client needs,
          ensuring high-quality solutions for both web development and FiveM
          scripting.
        </p>
      </div>
      <div className="rightSection">
        {servicesDescription.map((el, i) => (
          <div key={i} className="card">
            <img src={servicePic} alt="service_pic" />
            <h3>{el.title}</h3>
            {el.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyService;
