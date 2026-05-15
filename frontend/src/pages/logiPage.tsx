import styles from './loginPage.module.css'
import { useNavigate } from "react-router-dom";


export const StartWin = ()=>{
    const navigate = useNavigate();

    return(
        <div className={styles.mainWin}>
            <div className={styles.heheIcon}><img src="./src/assets/Smile.svg" alt="" /></div>
            <div className={styles.winForLogin}>
                <div className={`${styles.email} ${styles.input}`}><input className= {styles.inputInput} type="text" placeholder='email'/></div>
                <div className={`${styles.password} ${styles.input}`}><input className= {styles.inputInput} type="text" placeholder='password'/></div>
            </div>
            <button className={styles.loginBut} onClick={()=>{navigate('/main')}}>LOG IN</button>
        </div>
    )
}