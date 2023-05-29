import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import api from "../../../api";
import Navbar from "../../../Navbar";
import styles from './monhtlymoney.module.css'
import Card from './MonthlyMoneyCard'

export const MonthlyMoney = () => {
    const [query, setQuery] = useState("")
    const [monthlyData, setMonthlyData] = useState([])

    useEffect(() => {
        api.get('getallmonthlypayments', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(res => {
            if (res.status === 200) {
                setMonthlyData(res.data.monthlyData)
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
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.exitsContainer}>
                <div className="searchBar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input autoComplete="off" type="text" className="search" onChange={e => setQuery(e.target.value)} placeholder="Keresés bármelyik adat alapján..." />
                </div>
                <div className={styles.cardContainer}>
                    {monthlyData.filter(element => {
                        if (query === '') {
                            return element;
                        } else if (element.date.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        }
                    }).map((element, index) => {
                        return <Card key={index} date={element.date} payments={element.payments} />
                    })}
                </div>
            </div>
        </>
    )
}

export default MonthlyMoney;
