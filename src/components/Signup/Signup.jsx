import styles from './Signup.module.css';
import { useState } from 'react';
function Signup(){
    const [data, setData] = useState({
        name:'',
        email: '',
        password: ''
      });
    
      function handleInput(e) {
        const { name, value } = e.target;
        setData({
          ...data,
          [name]: value
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log('Data Submitted', data);
      }
    return(
        <div className={styles.container}>
        <div className={styles.inputDiv}>
        <p>Name</p>
        <input type='text' name='name' value={data.name} onChange={handleInput}/>
        </div >
        <div className={styles.inputDiv}>
        <p>Email</p>
        <input type='text' name='email' value={data.email} onChange={handleInput}/>
        </div >
        <div className={styles.inputDiv}>
        <p>Password</p>
        <input type='password' name='password' value={data.password} onChange={handleInput}/>
        </div>
        <div className={styles.inputDiv}>
        <p>Confirm Password</p>
        <input type='password' name='password' value={data.password} onChange={handleInput}/>
        </div >
        <div >
            <button className={styles.btn} onClick={handleSubmit}>Sign-Up</button>
        </div> 
    </div>
    )
}

export default Signup;