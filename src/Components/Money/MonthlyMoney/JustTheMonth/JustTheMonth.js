import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../../../api";
import Navbar from "../../../../Navbar";
import styles from '../monhtlymoney.module.css'
import Card from './JustTheMonthCard'

export const JustTheMonth = () => {
    const navigate = useNavigate()
    const { queryid } = useParams()
    const [query, setQuery] = useState("")
    const [monthMoney, setMonthMoney] = useState(0)
    const [monthlyData, setMonthlyData] = useState([])

    useEffect(() => {
        api.get('getmonthlypayment', {
            headers: {
                token: localStorage.getItem('token'),
                queryid: queryid
            }
        })
        .then(res => {
            if (res.status === 200) {
                setMonthlyData(res.data.monthlyData)
                console.log(res.data.monthlyData)
                let number = 0;
                for (let i = 0; i < res.data.monthlyData.length; i++) {
                    console.log(res.data.monthlyData[i])
                    number = number + res.data.monthlyData[i].amount
                }
                setMonthMoney(number)
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
                navigate('/users/users')
            }
        })
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <div className={styles.exitsContainer}>
                <div className="searchBar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input autoComplete="off" type="text" className="search" onChange={e => setQuery(e.target.value)} placeholder="Keresés bármelyik adat alapján..." />
                </div>
                <h1>Havi pénmozgás összesen: {monthMoney} Ft</h1>
                <div className={styles.cardContainer}>
                    {monthlyData.filter(element => {
                        if (query === '') {
                            return element;
                        } else if (element.date.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (element.reason.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (String(element.amount).toLowerCase().includes(query.toLowerCase())) {
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

export default JustTheMonth;
