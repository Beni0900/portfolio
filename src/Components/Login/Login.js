import { useState } from "react"
import {useNavigate } from 'react-router-dom'
import avatar from '../../assets/avatar.png'
import './login.css'
import api from '../../api'
import Swal from "sweetalert2"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const HandleLogin = (e) => {
        e.preventDefault()
        
        if (username === '' || password === '') { 
            Swal.fire({
                icon: "error",
                title: "Hiba!",
                html: "Kérlek töltsd ki a mezőket!",
            })
            return
        }

        api.post('login', {username: username, password: password})
        .then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                navigate('/users/users')
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
    
    return (
        <div className="formPos">
            <main className="loginContainer shadow-2xl">
                <header>
                    <h3>Belépés</h3>
                </header>
                <form>
                    <img src={avatar} alt="" />
                    <div className="relative z-0 w-full mb-6 group mt-5">
                        <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Felhasználónév/E-mail cím</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jelszó</label>
                    </div>
                    <button onClick={(e) => {HandleLogin(e)}} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Belépés</button>
                </form>
            </main>
        </div>
    )
}

export default Login;
