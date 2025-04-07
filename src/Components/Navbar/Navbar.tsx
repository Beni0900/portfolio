import { useCallback, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import "./navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavbarTitle } from "./types/navbarTitle";

const Navbar = () => {
  const [showNavBar, setShowNavbar] = useState<boolean>(false);

  const scrollToDiv = (divId: string) => {
    if (divId !== undefined) {
      const el = document.getElementById(divId);
      el?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const [y, setY] = useState<number>(window.scrollY);

  const handleNavigation = useCallback(() => {
    const el = document.getElementById("navbar") as HTMLElement;

    if (el) {
      if (y > window.scrollY) {
        el.style.opacity = "1";
      } else if (y < window.scrollY) {
        el.style.opacity = "0";
      }
    }

    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    const handleScroll = () => {
      handleNavigation();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleNavigation]);

  const navbarTitles: NavbarTitle[] = [
    {
      title: "Home",
      div: "home",
    },
    {
      title: "About me",
      div: "aboutme",
    },
    {
      title: "Experience",
      div: "expreience",
    },
    {
      title: "Education",
      div: "education",
    },
    {
      title: "Portfolio",
      div: "skills",
    },
  ];

  return (
    <div
      className="navBarContainerInPort"
      id="navbar"
      style={{ zIndex: showNavBar ? "9999" : "2" }}
    >
      <div className="leftOptions">
        <img src={logo} alt="Logo" />
        <p>Beni</p>
      </div>
      <GiHamburgerMenu
        onClick={() => setShowNavbar(!showNavBar)}
        className="navIcon"
      />
      <div className="rightOptions">
        {navbarTitles.map((item, index) => (
          <p key={index} onClick={() => scrollToDiv(item.div)}>
            {item.title}
          </p>
        ))}
      </div>
      <div
        style={{
          visibility: showNavBar ? "visible" : "hidden",
          zIndex: showNavBar ? "9999" : "-1",
          opacity: showNavBar ? "1.0" : "0.0",
        }}
        className="optionsContainer"
      >
        {navbarTitles.map((item, index) => (
          <p
            key={index}
            onClick={() => {
              setShowNavbar(!showNavBar);
              scrollToDiv(item.div);
            }}
          >
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
