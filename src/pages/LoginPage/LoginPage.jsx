import styles from './LoginPage.module.css';
import Login from '../../components/Login/Login';
import Signup from '../../components/Signup/SignUp';
import { useEffect, useState } from 'react';
function LoginPage(){
    const [activeButton,setActiveButton]=useState('signup');
  return(
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.heading}>QUIZZIE</div>
            <div className={styles.buttonsWrapper}>
                <div className={`${styles.btnDiv} ${activeButton==='signup' ? styles.activeBtn : ''}`}>
                   <button className={styles.btn} onClick={()=>
                    setActiveButton('signup')
                   }>Sign Up</button>
                </div>
                <div className={`${styles.btnDiv} ${activeButton==='login' ? styles.activeBtn : ''}`}>
                <button className={styles.btn} onClick={
                    ()=>setActiveButton('login')
                }>Log In</button>
                </div>
            </div>
            <div className={styles.comp}>
               {activeButton==='signup'? <Signup/>:<Login/>}
            </div>
        </div>
    </div>
  )
}

export default LoginPage;