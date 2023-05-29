import { useState } from 'react'
import styles from './mywork.module.css'

export const MyWork = () => {
    const [currentCategoryInMyWork, setCurrentCategoryInMyWork] = useState('all')

    const [myWorks, setMyWorks] = useState([
        {name: 'PPshop', category: 'fivem', link: 'https://discord.gg/cgfm7x4zjh'},
        {name: 'Online School Buffet', category: 'web', link: 'https://netibufe.hu'},
        {name: 'Trailer work', category: 'fivem', link: 'https://discord.gg/cgfm7x4zjh'},
        {name: 'Own react projects', category: 'web', link: ''},
        {name: 'Carlock system', category: 'fivem', link: 'https://discord.gg/cgfm7x4zjh'},
        {name: 'Own Vue projects', category: 'web', link: ''},
        {name: 'Private scripts', category: 'fivem', link: 'https://discordapp.com/users/550383476033978369'},

    ])

    return (
        <div className={styles.myWork}>
            <div className={styles.headerSection}>
                <h3>My Works</h3>
                <div className={styles.filterMenuList}>
                    <p onClick={(e) => {e.preventDefault();setCurrentCategoryInMyWork('all')}}>All</p>
                    <p onClick={(e) => {e.preventDefault();setCurrentCategoryInMyWork('web')}}>WebPages</p>
                    <p onClick={(e) => {e.preventDefault();setCurrentCategoryInMyWork('fivem')}}>FiveM</p>
                </div>
            </div>
            <div className={styles.imgContainer}>
                {myWorks.map((element, index) => {
                    if (currentCategoryInMyWork !== 'all') {
                        if (currentCategoryInMyWork === element.category) {
                            return(
                                <div className={styles.card} key={index} >
                                    <p>{element.name}</p>
                                    <div className={styles.popUpWindow}>
                                        <a style={{width: '80%', height: '30%'}} href={element.link} className={`${styles.buttonDesign}`} target='_blank'><i className="fa-brands fa-discord"></i> Load more</a>
                                    </div>
                                </div>
                            )
                        } else {
                            return(
                                <div className={styles.card} style={{opacity: '0'}} key={index} >
                                    <p>{element.name}</p>
                                    <div className={styles.popUpWindow}>
                                        <a style={{width: '80%', height: '30%'}} href={element.link} className={`${styles.buttonDesign}`} target='_blank'><i className="fa-brands fa-discord"></i> Load more</a>
                                    </div>
                                </div>
                            )
                        }
                    } else {
                        return(
                            <div className={styles.card} key={index}>
                                <p>{element.name}</p>
                                <div className={styles.popUpWindow}>
                                    <a style={{width: '80%', height: '30%'}} href={element.link} className={`${styles.buttonDesign}`} target='_blank'><i className="fa-brands fa-discord"></i> Load more</a>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default MyWork;