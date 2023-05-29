import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import api from "../../api"
import avatar from '../../assets/avatar.png'
import './register.css'

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordAgain, setPasswordAgain] = useState('')
    const [email, setEmail] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            html: 'Kérlek add meg a <span style="font-weight: 700;">teljes nevedet!</span>',
        })
        if (name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Kérlek add meg a <span style="font-weight: 700;">teljes nevedet!</span>',
            })
        } else if (username === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Kérlek add meg a <span style="font-weight: 700;">felhasználó nevedet!</span>',
            })
        } else if (password === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Kérlek add meg a <span style="font-weight: 700;">jelszavadat!</span>',
            })
        } else if (passwordAgain === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Kérlek add meg újra a <span style="font-weight: 700;">jelszavadat!</span>',
            })
        } else if (password !== passwordAgain) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'A jelszavak nem egyeznek, kérlek add meg őket <span style="font-weight: 700;">újra!</span>',
            })
        } else if (email === '' || email === 'asd') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: 'Kérlek add meg az <span style="font-weight: 700;">email címedet!</span>',
            })
        } else {
            api.post('register', {
                name: name, 
                username: username, 
                password: password, 
                email: email,
            })
            .then(result => {
                if (result.status === 200) {
                    const response = result.data
                    Swal.fire({
                        icon: response.icon,
                        title: response.title,
                        html: response.text,
                    })
                    .then(res => {
                        navigate('/login')
                    })
                }
            }).catch(error => {
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
    }

    return (
        <div className="formPos">
            <main className="registerContainer shadow-2xl">
                <header>
                    <h3>Regisztráció</h3>
                </header>
                <form>
                    <img src={avatar} alt="" />
                    <div className="relative z-0 w-full mb-6 group mt-5">
                        <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Neved</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Felhasználónév</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jelszó</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={passwordAgain} onChange={(e) => {setPasswordAgain(e.target.value)}} type="password" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Jelszó újra</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" name="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <button type="submit" onClick={(e) => handleRegister(e)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Regisztráció</button>
                </form>
            </main>
        </div>
    )
}

export default Register;