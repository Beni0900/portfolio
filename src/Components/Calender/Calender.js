import Navbar from "../../Navbar";
import styles from './calender.module.css'

export const Calender = () => {
    return (
        <>
            <Navbar />
            <div className={styles.calenderContainer}>
            <iframe src="https://calendar.google.com/calendar/embed?src=darabosbeni%40gmail.com&ctz=Europe%2FBudapest&bgcolor=%23616161"  width="800" height="600" frameBorder="0" scrolling="no"></iframe>
            </div>
        </>
    )
}

export default Calender;
