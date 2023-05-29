import styles from './justhemonth.module.css'

export const JustTheMonthCard = (props) => {
    return (
        <>
            {props.amount < 0 && <div className={`${styles.cardNegative} ${styles.card}`}>
                <i style={{width: '5%'}} className={`fa-solid fa-money-bill ${styles.movementIconNegative}`}></i>
                <p style={{width: '50%'}}>Indok: <span style={{fontWeight: '700'}}>{props.reason}</span></p>
                <p style={{width: '20%'}}>Összeg: <span style={{fontWeight: '700'}}>{props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Ft</span></p>
                <p style={{width: '20%'}}>Dátum: <span style={{fontWeight: '700'}}>{props.date}</span></p>
            </div>}
            {props.amount > 0 && <div className={`${styles.cardPositive} ${styles.card}`}>
                <i style={{width: '5%'}} className={`fa-solid fa-money-bill ${styles.movementIconPositive}`}></i>
                <p style={{width: '50%'}}>Indok: <span style={{fontWeight: '700'}}>{props.reason}</span></p>
                <p style={{width: '20%'}}>Összeg: <span style={{fontWeight: '700'}}>{props.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Ft</span></p>
                <p style={{width: '20%'}}>Dátum: <span style={{fontWeight: '700'}}>{props.date}</span></p>
            </div>}
        </>
    )
}

export default JustTheMonthCard
