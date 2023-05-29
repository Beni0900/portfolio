import styles from './aboutme.module.css'
import profPicture from '../../../assets/profilkep.jpg'
import ExampleDoc from '../../../assets/files/CV.pdf'

export const AboutMe = () => {
    return (
        <div className={styles.aboutMe} id="aboutme">
            <div className={styles.leftSection}>
                <img src={profPicture} alt=""/>
                <div className={`${styles.box} ${styles.bounce1}`}></div>
            </div>
            <div className={styles.rightSection}>
                <h6>Hi!</h6>
                <h3>Hello. I'am Darabos Benjamin</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim is minim is veniam, quis nostrud exercitatiullamco labor is nisi ut aliquipthe ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                <p>voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatt non proident, sunt in culpa qui officia deserunt mollit anim id from the best creative marino</p>
                <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                    <a href={ExampleDoc} download="DarabosBenjaminCV"  className={`${styles.buttonDesign}`} target='_blank'>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;