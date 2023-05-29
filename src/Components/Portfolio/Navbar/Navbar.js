import { useCallback, useEffect, useState } from 'react'
import logo from '../../../assets/logo.png'
import styles from './navbar.module.css'

export const Navbar = () => {
    const [showNavBar, setShowNavbar] = useState(false)

    const scrollToDiv = (e, divId) => {
        if (divId !== undefined) {
            document.getElementById(divId).scrollIntoView({ behavior: 'smooth', block: "end"})
        }
    }

    const [y, setY] = useState(window.scrollY);

    const handleNavigation = useCallback(e => {
        const window = e.currentTarget;
        if (y > window.scrollY) {
            if (document.getElementById('navbar') !== undefined) {
                document.getElementById('navbar').style.opacity = '1'
            }
        } else if (y < window.scrollY) {
            if (document.getElementById('navbar') !== undefined) {
                document.getElementById('navbar').style.opacity = '0'
                setShowNavbar(false)
            }
        }
        setY(window.scrollY);
    }, [y]);

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);

    return (
        <div className={styles.navBarContainerInPort} id="navbar" style={{zIndex: showNavBar ? '9999' : '2'}}>
            <div className={styles.leftOptions}>
                <img src={logo} alt="Logo" />
                <p>Beni</p>
            </div>
            <i onClick={() => setShowNavbar(!showNavBar)} className={`fa-solid fa-bars ${styles.navIcon} bg-zinc-500 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg transition duration-150 ease-in-out`}></i>
            <div className={styles.rightOptions}>
                <p onClick={(e) => scrollToDiv(e, 'home')}>Home </p>
                <p onClick={(e) => scrollToDiv(e, 'aboutme')}>About me</p>
                <p onClick={(e) => scrollToDiv(e, 'expreience')}>Expreience </p>
                <p onClick={(e) => scrollToDiv(e, 'education')}>Education </p>
                <p onClick={(e) => scrollToDiv(e, 'skills')}>Portfolio </p>
                {/* <p onClick={(e) => scrollToDiv(e, 'contact')}>Contact </p> */}
            </div>
            <div style={{visibility: showNavBar ? 'visible' : 'hidden', zIndex: showNavBar ? '9999' : '-1', opacity: showNavBar ? '1.0' : '0.0'}} className={styles.optionsContainer}>
                <p onClick={(e) => {setShowNavbar(!showNavBar);scrollToDiv(e, 'home')}}>Home </p>
                <p onClick={(e) => {setShowNavbar(!showNavBar);scrollToDiv(e, 'aboutme')}}>About me</p>
                <p onClick={(e) => {setShowNavbar(!showNavBar);scrollToDiv(e, 'expreience')}}>Expreience </p>
                <p onClick={(e) => {setShowNavbar(!showNavBar);scrollToDiv(e, 'education')}}>Education </p>
                <p onClick={(e) => {setShowNavbar(!showNavBar);scrollToDiv(e, 'skills')}}>Portfolio </p>
                {/* <p onClick={(e) => scrollToDiv(e, 'contact')}>Contact </p> */}
            </div>
        </div>
    )
}
export default Navbar;