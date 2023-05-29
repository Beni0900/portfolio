import { useState } from 'react'
import styles from './skills.module.css'

export const Skills = () => {
    const [skills, setSkills] = useState([
        {name: 'VUE-js', percent: '85', bgC: 'green'},
        {name: 'PhotoShop', percent: '25', bgC: 'blue'},
        {name: 'React', percent: '50', bgC: '#61DBFB'},
        {name: 'SQL', percent: '80', bgC: 'white'},
        {name: 'HTML', percent: '100', bgC: 'orange'},
        {name: 'SASS', percent: '95', bgC: 'purple'},
        {name: 'LUA', percent: '80', bgC: '#00007c'},
        {name: 'Native Javascript', percent: '85', bgC: '#f7df1e'},
        {name: 'Node JS', percent: '55', bgC: '#488945'},
        {name: 'Linux', percent: '30', bgC: '#efb80f'},
    ])

    return (
        <div className={styles.internalSkills} id="skills">
            <div className={styles.headerSection}>
                <h3>My Internal Skills</h3>
            </div>
            <div className={styles.skillsSection}>
                {skills.map((element, index) => {
                    return (
                        <div key={index} className={styles.skillContainer}>
                            <h3>{element.name}</h3>
                            <div className={styles.progressBar}><div className={styles.progressLine} style={{width: element.percent + '%', backgroundColor: element.bgC, borderRadius: element.percent > 97 ? '1rem' : ''}}>{element.percent}%</div></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;