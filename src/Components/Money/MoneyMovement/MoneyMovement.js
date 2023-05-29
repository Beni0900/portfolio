import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../../api";
import Navbar from "../../../Navbar";
import styles from './money.module.css'
import Card from './MoneyMovementCard'

export const MoneyMovement = () => {
    const [amount, setAmount] = useState('')
    const [reason, setReason] = useState('')
    const [moneyData, setMoneyData] = useState({paymentData: [], userMoney: 0, percent: 0})
    const [query, setQuery] = useState("")

    useEffect(()=> {
        api.get('moneymovement', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(res => {
            if (res.status === 200) {
                setMoneyData(res.data)
            }
        })
    }, [])

    const handlePayment = (e) => {
        e.preventDefault()

        if (moneyData.userMoney > (moneyData.userMoney + Number(amount))) {
            Swal.fire({
                icon: 'error',
                title: 'Hiba',
                html: 'Ennyi pénzt nem tudsz elkölteni. Max keret: ' + moneyData.userMoney + ' Ft'
            })
            return
        }

        api.post('addpayment', {identifier: localStorage.getItem('token'), value: amount, reason: reason})
        .then(res => {
            if (res.status === 200) {
                Swal.fire({
                    icon: res.data.icon,
                    title: res.data.title,
                    html: res.data.text,
                })
                .then(res => {
                    api.get('moneymovement', {
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(res => {
                        if (res.status === 200) {
                            setMoneyData(res.data)
                        }
                    })
                })
            }
        })
        .catch(error => {
            const response = error.response.data
            if (error.response.status === 400) {
                Swal.fire({
                    icon: response.icon,
                    title: response.title,
                    html: response.text,
                })
            }
        })
    }

    return (
        <>
            <Navbar />
            <div className={styles.movementContainer}>
                <div className="searchBar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input autoComplete="off" type="text" className="search" onChange={e => setQuery(e.target.value)} placeholder="Keresés bármelyik adat alapján..." />
                </div>
                <div className={styles.addNewPayment}>
                    <h1>Jelenlegi keret: {Math.floor(moneyData.userMoney*moneyData.percent/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Ft</h1>
                    <div className={styles.inputContainer}>
                        <div className="relative z-0 w-34 mb-6 group">
                            <input autoComplete='off' value={amount} onChange={(e) => {setAmount(e.target.value)}} type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" " />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Összeg</label>
                        </div>
                        <div className="relative z-0 w-34 mb-6 group">
                            <input autoComplete='off' value={reason}  onChange={(e) => {setReason(e.target.value)}} type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer" placeholder=" "  />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Indok</label>
                        </div>
                        <button onClick={(e) => handlePayment(e)} type="button" className={styles.buttonDes}>Hozzáadás</button>
                    </div>
                </div>
                <div className={styles.cardContainer}>
                    {moneyData.paymentData.filter(element => {
                        
                        if (query === '') {
                            return element;
                        } else if (element.reason.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (String(element.amount).toLowerCase().replace(/\B(?=(\d{3})+(?!\d))/g, ".").includes(query.toLowerCase())) {
                            return element;
                        } else if (String(element.amount).toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (element.date.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        }
                    }).map((element, index) => {
                        return <Card key={index} reason={element.reason} amount={element.amount} date={element.date}/>
                    })}
                </div>
            </div>
        </>
    )
}
export default MoneyMovement;