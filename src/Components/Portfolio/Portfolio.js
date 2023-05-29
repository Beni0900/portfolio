import styles from './portfolio.module.css'
import waves from '../../assets/slider-1.png'

// komponenesek
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import AboutMe from './AboutMe/AboutMe'
import MyService from './MyService/MyService'
import MyWork from './MyWork/MyWork'
import Education from './Education/Education'
import Skills from './Skills/Skills'

export const Portfolio = () => {
    return (
        <div>
            <div className={styles.portfolio}>
                <div className={styles.goUp} onClick={(e) => document.getElementById('home').scrollIntoView({behavior: 'smooth', block: 'start'})}>
                    <i className="fa-solid fa-angle-up"></i>
                </div>
                <Navbar/>
                <Main />
                <img src={waves} alt="" className={styles.separator} />
                <AboutMe />
                <MyService />
                <MyWork />
                <Education />
                <Skills />
            </div>
        </div>
    )
}

export default Portfolio;
