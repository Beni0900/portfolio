import { useState } from "react"
import Swal from "sweetalert2"
import api from "../../../api"
import styles from './queue.module.css'

export const QueueCard = (props) => {
    const [identifier] = useState(props.identifier)
    const [name] = useState(props.name)
    const [username] = useState(props.username)
    const [email] = useState(props.email)
    const [showChangeOption, setShowChangeOption] = useState(false)


     // Methods
    const handleCloudClick = (e) => {
        e.preventDefault()

        Swal.fire({
            title: 'Légy boldog :)',
            icon: 'success',
            html: 'Sose légy ideges minden menni fog a maga idejében :) Legyen szép napod! :)'
        })
    }

    const setData = (e, type) => {
        e.preventDefault();

        api.post('accessuser', {id: identifier, type: type})
        .then(res => {
            if (res.status === 200) {
                Swal.fire({
                    icon: res.data.type,
                    title: res.data.title,
                    html: res.data.text
                })
                .then(res => {
                    window.location.reload()
                })
            }
        })
        .catch(err => {
            const response = err.response
            if (response.status === 400) {
                Swal.fire({
                    icon: response.data.icon,
                    title: response.data.title,
                    html: response.data.text,
                })
                .then(res => {
                    window.location.reload()
                })
            }
        })
    }

    return (
        <div className={styles.queueCard}>
            <div className={styles.hightSection}>
                <i className={`fa-solid fa-cloud ${styles.queueCloud}`} onClick={(e) => {handleCloudClick(e)}}></i>
                <i onClick={() => setShowChangeOption(!showChangeOption)} className={`fa-solid fa-ellipsis ${styles.faEllipsis}`}></i>
                {showChangeOption && <div className={styles.selectTypeMenu}>
                    <ul>
                        <li onClick={(e) => setData(e, 'access')}>Regisztráció elfogadása <i className="fa-solid fa-check"></i></li>
                        <li onClick={(e) => setData(e, 'deny')}>Regisztráció elutasítása <i className="fa-solid fa-x"></i></li>
                    </ul>
                </div>}
            </div>
            <div className={styles.underSection}>
                <p>{name}</p>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default QueueCard
