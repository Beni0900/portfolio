import { useState } from 'react'
import { useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import urlData from './reduxs/urlData'

export const Navbar = () => {
    const [navSize, setNavSize] = useState('flex')
    const navigation = useNavigate()
    const location = useLocation().pathname.split('/')
    const userData = useSelector(state => state.userData.value)

    return (
        <div className="navBar rounded-r-lg" style={{width: navSize === 'flex' ? '20rem' : '3.999rem'}}>
            <div className="options" style={{width: navSize === 'flex' ? '20%' : '100%'}}>
                <i className="navIcon fa-solid fa-sliders inline-block px-4 py-2.5 bg-zinc-500 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg transition duration-150 ease-in-out" onClick={(e) => { navSize === 'flex' ? setNavSize('none') : setNavSize('flex')}}></i>
                <button onClick={() => {navigation('/users/'+urlData.users[0].urlDirection)}} className={`btnDesignMainColumn ${location[1] === 'users' ? 'btnDesignMainColumnFocus' : ''}`}><i className="fa-solid fa-user"></i></button>
                <button onClick={() => {navigation('/money/'+urlData.money[0].urlDirection)}} className={`btnDesignMainColumn ${location[1] === 'money' ? 'btnDesignMainColumnFocus' : ''}`}><i className="fa-solid fa-money-bill"></i></button>
                <button onClick={() => {navigation('/projects/'+urlData.projects[0].urlDirection)}} className={`btnDesignMainColumn ${location[1] === 'projects' ? 'btnDesignMainColumnFocus' : ''}`}><i className="fa-solid fa-screwdriver-wrench"></i></button>
                {userData.group == 'owner' && <button onClick={() => {navigation('/calender/'+urlData.calender[0].urlDirection)}}  className={`btnDesignMainColumn ${location[1] === 'calender' ? 'btnDesignMainColumnFocus' : ''}`}><i className="fa-solid fa-calendar-check"></i></button>}
            </div>
            <div className="optionInOptions" style={{display: navSize}}>
                {urlData[location[1]].map((element, index) => {
                    return <p key={index}>{element.urlDirection === location[2] && element.title}</p>
                })}
                {urlData[location[1]].map((element, index) => {
                    if (element.group[userData.group] === userData.group) {
                        return <button className={`${location[2] === element.urlDirection ? 'btnDesignFocus' : ''} btnDesign`} onClick={()=> {navigation('/' + location[1] + '/' + element.urlDirection)}} key={index}><i className="fa-solid fa-envelope"></i> {element.title}</button>
                    }
                })}
            </div>
        </div>
    )
}

export default Navbar;