import styles from './mainDirectorPage.module.css'
import { useNavigate } from "react-router-dom";


export const MainDirectorWin =()=>{
    const navigate = useNavigate();

    return(
        <>
        <div className={styles.likeBody}>
            <div className={styles.header}>
                <div className={styles.fullname}>
                    <div className={styles.name}>Name</div>
                    <div className={styles.surname}>Surname</div>
                </div>
                <div className={styles.post}>director</div>
                <div className={styles.manageButtons}>
                    <button className={styles.manageBut}>Receive</button>
                    <button className={styles.manageBut}>Manage</button>
                    <button className={styles.manageBut}>Reports</button>
                </div>
                <button className={styles.settingBut}><img src="./src/assets/Settings.svg" alt="" /></button>
                <button className={styles.logOutBut} onClick={()=> navigate('/login')}><img src="./src/assets/Log out.svg" alt="" /></button>
            </div>
            <div className={styles.between}>
                <div className={styles.search}>
                    <img className={styles.searchIcon} src="./src/assets/Search.svg" alt="" />
                    <input className={styles.searchLine} type="text" placeholder='search'/></div>
                <button className={styles.sellAll}>sell all</button>
            </div>
            <div className={styles.productLines}>
                <ProductLine></ProductLine>
                <ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine><ProductLine></ProductLine>
            </div>            
        </div>


          
    </>)
}

const ProductLine =()=>{
    return(
        <div className={styles.bodyLine}>
            <div className={styles.productImage}><img className={styles.productImg} src="./src/assets/sticker.svg" alt="" /></div>
            <div className={styles.info}>
                <div className={styles.productName}>Product</div>
                <div className={styles.productCategory}>Category</div>
                <div className={styles.productPrice}>Price: n$</div>
            </div>
            <div className={styles.buttonsAtC}>
                <button className={styles.butAtCard}>sell</button>
                <button className={styles.butAtCard}>edit qty</button>
                <button className={styles.butAtCard}>history</button>                
            </div>
            <div className={styles.qty}>Qty: 15 <div className={styles.indicator}></div></div>

        </div>
    )
}