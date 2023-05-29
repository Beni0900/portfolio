import styles from './myservice.module.css'
import servicePic from '../../../assets/service1.png'

export const MyService = () => {
    return (
        <div className={styles.myService} id="expreience">
            <div className={styles.leftSection}>
                <h3>My Service</h3>
                <p>
                    Lorem ipsum dolor sit amet, conse adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.
                </p>
            </div>
            <div className={styles.rightSection}>
                <div className={styles.card}>
                    <img src={servicePic} alt="" />
                    <h3>Web Developer</h3>
                    <p>Lorem ipsum dolor sit  consectetur adipisicing elit. Quidem voluptate Quidem, facere voluptate.</p>
                </div>
                {/* <div className={styles.buttonSection}>
                    <a>
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                    <a>
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </div> */}
                <div className={styles.card}>
                    <img src={servicePic} alt="" />
                    <h3>FiveM Developer</h3>
                    <p>Lorem ipsum dolor sit  consectetur adipisicing elit. Quidem voluptate Quidem, facere voluptate.</p>
                </div>
                {/* <div className={styles.buttonSection}>
                    <a>
                        <i class="fa-solid fa-arrow-left"></i>
                    </a>
                    <a>
                        <i class="fa fa-arrow-right"></i>
                    </a>
                </div> */}
            </div>
        </div>
    )
}

export default MyService;
