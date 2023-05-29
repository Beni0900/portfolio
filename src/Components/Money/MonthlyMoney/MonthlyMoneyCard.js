
import { useNavigate } from 'react-router-dom'
import styles from './monhtlymoney.module.css'

export const MonthlyMoneyCardMain = (props) => {
    const navigate = useNavigate()
    const paymentsData = props.payments

    const watchTheMonth = (e) => {
        e.preventDefault();

        navigate('/money/monthlypayment/' + props.date.split('/')[0] + props.date.split('/')[1], { id: 1 })
    }

    return (
        <>
            <div className={styles.cardForMonthlyCard} onClick={(e) => watchTheMonth(e)}>
                <i className={`fa-solid fa-cloud ${styles.exitsCloud}`}></i>
                <div>
                    <p><span style={{fontWeight: '700'}}>{props.date}</span>-os hónap</p> 
                    <p>kiadásai/összegzése</p>
                </div>
            </div>
        </>
    )
}

export default MonthlyMoneyCardMain;