import Typical from 'react-typical'
import styles from './main.module.css'
import profPicture from '../../../assets/profilkep.jpg'

export const Main = () => {
    return (
        <div className={styles.main} id="home">
            <Typical
                steps={['Hello, ', 1000, 'Hello, I`m Darabos Benjamin!', 1000]}
                loop={Infinity}
                wrapper="h2"
            />
            <div className={styles.desPicContainer}>
                <p>I'm a Full-Stack Web Developer with extensive experience for over 4 years. My expertise is to create and design Websites</p>
                <img src={profPicture} alt=""/>
            </div>
            <div className={styles.links}>
                <a href="https://www.facebook.com/Beni.darabos"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/beni_vagyok_/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/Beni0900"><i className="fa-brands fa-github"></i></a>
                <a href="https://discordapp.com/users/550383476033978369"><i className="fa-brands fa-discord"></i></a>
            </div>
        </div>
    )
}

export default Main;