import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../../api";
import Navbar from "../../../Navbar";
import urlData from "../../../reduxs/urlData";
import styles from './queue.module.css'
import Card from './QueueCard'

export const Queue = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')
    const userData = useSelector(state => state.userData.value)
    const [query, setQuery] = useState("")
    const [queueData, setQueueData] = useState([])

    // GROUP CHECK
    useEffect(() => {
        for (let i = 0; i < urlData[location[1]].length; i++) {
            if (urlData[location[1]][i].urlDirection === location[2] && urlData[location[1]][i].group[userData.group] === userData.group) {
                return
            } else {
                navigate('/users/'+urlData[location[1]][i+1 > urlData[location[1]].length ? 0 : i+1].urlDirection)
                return
            }
        }
    }, [])

    useEffect(() => {
        api.get('getqueue')
        .then(res => {
            if (res.status === 200) {
                setQueueData(res.data.queueData)
            }
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.queueContainer}>
                <div className="searchBar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input autoComplete="off" type="text" className="search" onChange={e => setQuery(e.target.value)} placeholder="Keresés bármelyik adat alapján..." />
                </div>
                <div className={styles.cardContainer}>
                    {queueData.filter(element => {
                        if (query === '') {
                            return element;
                        } else if (element.name.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (element.username.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (element.email.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        }
                    }).map(element => {
                        return <Card key={element.id} name={element.name} username={element.username} email={element.email} identifier={element.id} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Queue;
