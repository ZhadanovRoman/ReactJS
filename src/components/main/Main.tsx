import styles from './main.module.css';

const Main = ()=>{
    return(
        <div className={styles.main}>
             <span className={`${styles.first_item} ${styles.item}`} >first_item</span>
             <span className={`${styles.second_item} ${styles.item}`}>second_item</span>
             <span className={`${styles.third_item} ${styles.item}`}>third_item</span>
        </div>

    )
}

export default Main;