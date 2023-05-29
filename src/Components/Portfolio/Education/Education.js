import styles from './education.module.css'
import educationPicture from '../../../assets/story1.png'
import { useRef } from 'react';

export const Education = () => {
    const myRef = useRef(null);

    const asd = (e) => {
        e.preventDefault()

        console.log('aslmas')
        myRef.current.scrollIntoView({ behavior: 'smooth'});
    }
    
    return (
        <div className={styles.education} id="education">
            <div className={styles.headerSection}>
                <h3>Education & Experience</h3>
            </div>
            <div className={styles.lineSection}>
                <div className={styles.column}>
                    <div className={styles.card} onClick={(e) => asd(e)}>
                        <div className={styles.imgSection}>
                            <img src={educationPicture} alt="" />
                        </div>
                        <div className={styles.textsSection}>
                            <h4>27 Sept 2020</h4>
                            <h3>Senior Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectu adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgSection}>
                            <img src={educationPicture} alt="" />
                        </div>
                        <div className={styles.textsSection}>
                            <h4>27 Sept 2020</h4>
                            <h3>Senior Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectu adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgSection}>
                            <img src={educationPicture} alt="" />
                        </div>
                        <div className={styles.textsSection}>
                            <h4>27 Sept 2020</h4>
                            <h3>Senior Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectu adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.imgSection}>
                            <img src={educationPicture} alt="" />
                        </div>
                        <div className={styles.textsSection}>
                            <h4>27 Sept 2020</h4>
                            <h3>Senior Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectu adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={educationPicture} alt="" style={{width: 'auto', height: '50%'}} />
                        <div className={styles.textsSection}>
                            <h4>27 Sept 2020</h4>
                            <h3>Senior Web Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectu adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;