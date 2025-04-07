import { useState } from "react";
import "./mywork.scss";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillPicture } from "react-icons/ai";
import { RiLinksFill } from "react-icons/ri";
import Viewer from "react-viewer";
import { Category } from "./types/category";
import { Project } from "./types/project";

export const MyWork = () => {
  const [currentCategory, setCurrentCategory] = useState<string>("all");
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);
  const [currImg, setCurrImg] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectsLimit, setProjectsLimit] = useState<number>(10);

  const projects: Project[] = [
    {
      label: "Online School Buffet",
      category: ["app", "web"],
      imgs: ["buffet/pic1.webp", "buffet/pic2.webp", "buffet/pic3.webp"],
    },
    {
      label: "Trailer work",
      category: ["fivem"],
      link: "https://youtu.be/LKwFxUbyFhs",
    },
    {
      label: "NYDBT - React-ts",
      category: ["web", "react"],
      link: "http://nydbt.hu",
    },
    {
      label: "Pannonland.hu - WordPress",
      category: ["web"],
      link: "http://https://pannonland.hu/",
    },
    {
      label: "Nerdwise - weboldal",
      category: ["web"],
      link: "https://rp.nerdwise.hu/",
    },
    {
      label: "BS - Billing system (UI)",
      category: ["fivem", "react"],
      link: "https://youtu.be/HxPsbwMGgYw",
    },
    {
      label: "NW - Hud_v3 (UI)",
      category: ["fivem", "react"],
      imgs: ["nw/hud/hud_v3.png", "nw/hud/hud_v2.png"],
    },
    {
      label: "NW - Report system (UI)",
      category: ["fivem", "react"],
      imgs: [
        "nw/report/image.png",
        "nw/report/image2.png",
        "nw/report/image3.png",
      ],
    },
    {
      label: "NW - Minigames UI (UI)",
      category: ["fivem", "react"],
      imgs: [
        "nw/minigames/image.png",
        "nw/minigames/image2.png",
        "nw/minigames/image3.png",
        "nw/minigames/image4.png",
        "nw/minigames/image5.png",
        "nw/minigames/image6.png",
        "nw/minigames/image7.png",
        "nw/minigames/image8.png",
        "nw/minigames/image9.png",
      ],
    },
    {
      label: "NW - Identity system (UI)",
      category: ["fivem", "react"],
      imgs: ["nw/identity/image.png", "nw/identity/image2.png"],
    },
    {
      label: "NW - Driving license system (UI)",
      category: ["fivem", "react"],
      imgs: ["nw/identity/image.png", "nw/identity/image2.png"],
    },
    {
      label: "NW - Inventory system (resdesign only)",
      category: ["fivem", "react"],
      imgs: ["nw/inv/image.png", "nw/inv/image2.png", "nw/inv/image3.png"],
    },
    {
      label: "NW - Loading screen (UI)",
      category: ["fivem", "react"],
      imgs: ["nw/loading/image.png"],
    },
    {
      label: "GMR - Vehicle shop (UI)",
      category: ["fivem", "react"],
      imgs: ["gmr/vehshop/image.png"],
    },
    {
      label: "KR - Joblisting (UI)",
      category: ["fivem", "react"],
      imgs: ["kr/image.png"],
    },
    {
      label: "Vue UI - FiveM",
      category: ["fivem", "vue"],
      link: "https://github.com/vue-ui-fivem",
    },
    {
      label: "Vue - todo app",
      category: ["vue"],
      link: "https://github.com/Beni0900/vue-todo",
    },
    {
      label: "Vue - test project",
      category: ["vue"],
      link: "https://github.com/Beni0900/test-project",
    },
  ];

  const categories: Category[] = [
    { label: "All", value: "all" },
    { label: "Websites", value: "web" },
    { label: "Applications", value: "app" },
    { label: "FiveM", value: "fivem" },
    { label: "Vue", value: "vue" },
    { label: "React", value: "react" },
  ];

  const filteredProjectsFull = projects.filter(
    (project) =>
      currentCategory === "all" || project.category.includes(currentCategory)
  );

  const filteredProjects = filteredProjectsFull.slice(0, projectsLimit);

  const images = selectedProject?.imgs
    ? selectedProject.imgs.map((img: string) => ({
        src: `${import.meta.env.BASE_URL}projects/` + img,
        alt: selectedProject.label,
      }))
    : [];

  const openViewer = (project: Project) => {
    setSelectedProject(project);
    setCurrImg(0);
    setViewerIsOpen(true);
  };

  const closeViewer = () => {
    setViewerIsOpen(false);
  };

  return (
    <div className="myWork">
      <div className="headerSection">
        <h3>My Works</h3>
        <h6>
          Some of the projects I've uploaded do not have publicly available
          source code, so I've only included preview images. However, I can
          provide access to the source code upon request. All projects showcased
          here are fully responsive.
        </h6>
        <div className="filterMenuList">
          {categories.map((el, i) => (
            <p
              key={i}
              onClick={() => {
                setCurrentCategory(el.value);
                setProjectsLimit(10);
              }}
            >
              {el.label}
            </p>
          ))}
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          className="imgContainer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {filteredProjects.map((element, i) => (
            <motion.div
              className="card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={i}
            >
              <p>{element.label}</p>
              <div
                className="popUpWindow"
                onClick={() =>
                  element.imgs
                    ? openViewer(element)
                    : window.open(element.link, "_blank")
                }
              >
                <a
                  className="designedLink"
                  style={{ width: "80%", height: "30%" }}
                  rel="noopener noreferrer"
                >
                  {element.imgs ? (
                    <>
                      <AiFillPicture /> View images
                    </>
                  ) : (
                    <>
                      <RiLinksFill /> check it
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {(projectsLimit < filteredProjectsFull.length ||
        projectsLimit == filteredProjectsFull.length) && (
        <button
          className="loadButton"
          onClick={() =>
            setProjectsLimit(
              projectsLimit == filteredProjectsFull.length
                ? 10
                : filteredProjectsFull.length
            )
          }
        >
          {projectsLimit == filteredProjectsFull.length
            ? "Close all projects"
            : "Load all projects"}
        </button>
      )}

      <Viewer
        visible={viewerIsOpen}
        onClose={closeViewer}
        images={images}
        activeIndex={currImg}
      />
    </div>
  );
};

export default MyWork;
