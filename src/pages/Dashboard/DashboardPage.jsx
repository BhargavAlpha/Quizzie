import styles from './DashboardPage.module.css';
const DashboardPage=()=>{
    return(
        <>
         <div className={styles.container}>
            <div className={styles.navigationBar}>
                <p className={styles.top}>QUIZZIE</p>
                <div className={`${styles.buttonWrapper} ${styles.middle}`}>
                <button className={styles.btn}>Dashboard</button>
                <button className={styles.btn}>Analytics</button>
                <button className={styles.btn}>Create Quiz</button>
                </div>
                <button className={styles.logoutbtn}>LOGOUT</button>
                
                </div>
                
            <div className={styles.statistics}>
                <div className={styles.quizInfo}>
                    <div className={styles.qsInfo}>
                      12  Quizzes Created
                    </div>
                    <div className={styles.qsInfo}>

                    </div>
                    <div className={styles.qsInfo}>

                    </div>
                </div>
                <div>

                </div>
            </div>
         </div>
         
        </>
    )
}

export default DashboardPage;