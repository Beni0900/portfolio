import { useEffect, useState } from "react";
import api from "../../../api";
import Navbar from "../../../Navbar";
import styles from './currentmoney.module.css'

export const CurrentMoney = () => {
    const [userMoney, setUserMoney] = useState(0)
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        api.get('getmoney', { 
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(res => {
            if (res.status === 200) {
                setUserMoney(res.data.userMoney)
                setPercent(res.data.percent)
            }
        })
    }, [])
    
    return (
        <>
            <Navbar />
            <div className={styles.currentMoneyContainer}>
                <div className={styles.inputContainer}>
                    <div className="relative z-0 w-34 mb-6 group">
                        <input autoComplete='off' value={percent}  onChange={(e) => {setPercent(e.target.value)}} type="number" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Százalék</label>
                    </div>
                    <button type="button" className={styles.buttonDes}>Módosítás</button>
                </div>
                <div className={styles.cardContainer}>
                    <div className={`${styles.cardNear}`}>
                        <i className={`fa-solid fa-money-bill ${styles.currentMoneyIconNear}`}></i>
                        <div className={styles.cardData}>
                            <p>Elhasználható összeg:</p>
                            <p style={{fontWeight: '700'}}>{(Math.floor(userMoney*percent/100)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Ft</p>
                        </div>
                    </div>
                    <div className={`${styles.card}`}>
                        <i className={`fa-solid fa-money-bill ${styles.currentMoneyIcon}`}></i>
                        <div className={styles.cardData}>
                            <p>Hosszútávú összeg:</p>
                            <p style={{fontWeight: '700'}}>{userMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Ft</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CurrentMoney