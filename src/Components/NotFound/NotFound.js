import styles from './notfound.module.css'

export const Teszt = () => {
    return (
		<div className={styles.container}>
			<h2 className={styles.firstFour}>4</h2>
			<div className={styles.cogWheel1}>
				<div className={styles.cog1}>
					<div className={styles.top}></div>
					<div className={styles.down}></div>
					<div className={styles.leftTop}></div>
					<div className={styles.leftDown}></div>
					<div className={styles.rightTop}></div>
					<div className={styles.rightDown}></div>
					<div className={styles.left}></div>
					<div className={styles.right}></div>
				</div>
			</div>
			<div className={styles.cogWheel2}> 
				<div className={styles.cog2}>
					<div className={styles.top}></div>
					<div className={styles.down}></div>
					<div className={styles.leftTop}></div>
					<div className={styles.leftDown}></div>
					<div className={styles.rightTop}></div>
					<div className={styles.rightDown}></div>
					<div className={styles.left}></div>
					<div className={styles.right}></div>
				</div>
			</div>
			<h2 className={styles.secondFour}>4</h2>
			<p className={styles.wrongPara}>Uh Oh! Ilyen oldal nem található :(</p>
		</div>
    )
}

export default Teszt;