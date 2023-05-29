import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../../Navbar'
import styles from './exitsUser.module.css'
import urlData from '../../../reduxs/urlData'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from './ExitsUserCard'
import api from '../../../api'

export const Home = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')
    const [query, setQuery] = useState("")
    const userData = useSelector(state => state.userData.value)
    const [usersData, setUsersData] = useState([])

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

    // Get DATA
    useEffect(() => {
        api.get('alluser')
        .then(res => {
            if (res.status === 200) {
                setUsersData(res.data.userData)
            }
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className={styles.exitsUserContainer}>
                <div className="searchBar">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input autoComplete="off" type="text" className="search" onChange={e => setQuery(e.target.value)} placeholder="Keresés bármelyik adat alapján..." />
                </div>
                <div className={styles.cardContainer}>
                    {usersData.filter(element => {
                        if (query === '') {
                            return element;
                        } else if (element.name.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (element.username.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (element.email.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        } else if (element.groupName.toLowerCase().includes(query.toLowerCase())) {
                            return element;
                        }
                    }).map(element => {
                        return <Card key={element.id} identifier={element.id} name={element.name} username={element.username} group={element.groupName} email={element.email} money={element.money} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Home;