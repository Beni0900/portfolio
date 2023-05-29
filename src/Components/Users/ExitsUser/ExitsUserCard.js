import { useState } from 'react'
import Swal from 'sweetalert2'
import api from '../../../api'
import styles from './exitsUser.module.css'

export const ExitsUserCard = (props) => {
    const [identifier] = useState(props.identifier)
    const [name, setName] = useState(props.name)
    const [username, setUsername] = useState(props.username)
    const [group, setGroup] = useState(props.group)
    const [email, setEmail] = useState(props.email)
    const [money, setMoney] = useState(props.money)
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
        setShowChangeOption(!showChangeOption)

        switch(type) {
            case 'name':
                Swal.fire({
                    title: 'Írd be az új nevet:',
                    icon: 'warning',
                    input: 'text',
                    inputValue: name,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Módosítás',
                    cancelButtonText: 'Nem'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setShowChangeOption(false)
                        setName(result.value)
                        api.post('setuserdata', {type: 'name', value: result.value, identifier: identifier})
                        .then(res => {
                            if (res.status === 200) {
                                Swal.fire({
                                    icon: res.data.icon,
                                    title: res.data.title,
                                    html: res.data.text
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
                            }
                        })
                    }
                });
                break;
            case 'username':
                Swal.fire({
                    title: 'Írd be az új felhasználónevet:',
                    icon: 'warning',
                    input: 'text',
                    inputValue: username,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Módosítás',
                    cancelButtonText: 'Nem'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setUsername(result.value)
                        setShowChangeOption(false)
                        api.post('setuserdata', {type: 'username', value: result.value, identifier: identifier})
                        .then(res => {
                            if (res.status === 200) {
                                Swal.fire({
                                    icon: res.data.icon,
                                    title: res.data.title,
                                    html: res.data.text
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
                            }
                        })
                    }
                });
                break;
            case 'group':
                Swal.fire({
                    title: 'Írd be az új csoportot:',
                    icon: 'warning',
                    input: 'text',
                    inputValue: group,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Módosítás',
                    cancelButtonText: 'Nem'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setGroup(result.value)
                        setShowChangeOption(false)
                        api.post('setuserdata', {type: 'groupName', value: result.value, identifier: identifier})
                        .then(res => {
                            if (res.status === 200) {
                                Swal.fire({
                                    icon: res.data.icon,
                                    title: res.data.title,
                                    html: res.data.text
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
                            }
                        })
                    }
                });
                break;
            case 'email':
                Swal.fire({
                    title: 'Írd be az új emailt:',
                    icon: 'warning',
                    input: 'text',
                    inputValue: email,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Módosítás',
                    cancelButtonText: 'Nem'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setEmail(result.value)
                        setShowChangeOption(false)
                        api.post('setuserdata', {type: 'email', value: result.value, identifier: identifier})
                        .then(res => {
                            if (res.status === 200) {
                                Swal.fire({
                                    icon: res.data.icon,
                                    title: res.data.title,
                                    html: res.data.text
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
                            }
                        })
                    }
                });
                break;
            case 'money':
                Swal.fire({
                    title: 'Írd be az új összeget:',
                    icon: 'warning',
                    input: 'number',
                    inputValue: money,
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Módosítás',
                    cancelButtonText: 'Nem'
                }).then((result) => {
                    if (result.isConfirmed) {
                        setMoney(result.value)
                        setShowChangeOption(false)
                        api.post('setuserdata', {type: 'money', value: result.value, identifier: identifier})
                        .then(res => {
                            if (res.status === 200) {
                                Swal.fire({
                                    icon: res.data.icon,
                                    title: res.data.title,
                                    html: res.data.text
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
                            }
                        })
                    }
                });
                break;
            default:
                console.log("We didnt't find anything")
        }
    }
    
    return (
        <div className={styles.card}>
            <div className={styles.hightSection}>
                <i className={`fa-solid fa-cloud ${styles.exitsCloud}`} onClick={(e) => {handleCloudClick(e)}}></i>
                <i onClick={() => setShowChangeOption(!showChangeOption)} className={`fa-solid fa-ellipsis ${styles.faEllipsis}`}></i>
                {showChangeOption && <div className={styles.selectTypeMenu}>
                    <ul>
                        <li onClick={(e) => setData(e, 'name')}>Név megváltoztatása <i className="fa-solid fa-pen"></i></li>
                        <li onClick={(e) => setData(e, 'username')}>Felhasználónév megváltoztatása <i className="fa-solid fa-pen"></i></li>
                        <li onClick={(e) => setData(e, 'group')}>Rang megváltoztatása <i className="fa-solid fa-pen"></i></li>
                        <li onClick={(e) => setData(e, 'email')}>Emailcím megváltoztatása <i className="fa-solid fa-pen"></i></li>
                        <li onClick={(e) => setData(e, 'money')}>Pénz megváltoztatása <i className="fa-solid fa-pen"></i></li>
                    </ul>
                </div>}
            </div>
            <div className={styles.underSection}>
                <p>{name}</p>
                <p>{username}</p>
                <p>{group}</p>
                <p>{email}</p>
                <p>{money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Ft</p>
            </div>
        </div>
    )
}
export default ExitsUserCard