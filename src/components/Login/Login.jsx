import styles from './Login.module.css';
import { useState } from 'react';

function Login() {
  const [data, setData] = useState({
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

  return (
    <div className={styles.container}>
        <div className={styles.inputDiv}>
        <p>Email</p>
        <input type='text' name='email' value={data.email} onChange={handleInput}/>
        </div >
        <div className={styles.inputDiv}>
        <p>Password</p>
        <input type='password' name='password' value={data.password} onChange={handleInput}/>
        </div>
        <div className={styles.inputDiv}>
            <button className={styles.btn} onClick={handleSubmit}>Log In</button>
        </div> 
    </div>
  );
}

export default Login;
