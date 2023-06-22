import React from "react";
import styles from './cardTextContent.css';

export function CardTextContent(){
    return(
        <div className={styles.textContent}>
        <div className={styles.metaData}>
           <div className={styles.userLink}>
               <img
               className={styles.avatar}
               src = 'https://img.icons8.com/?size=512&id=GwYVu5UZRjBe&format=png'
               alt= 'avatar'
               />
               <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
           </div>
           <span className={styles.createdAt}>
               <span className={styles.publishedLabel}>опубликовано</span>
               4 часа назад</span>
         </div>  
         <h2 className={styles.title}>
               <a href="#post-url" className={styles.postLink}>
               Противоположная точка зрения на данную проблему
               </a>
               </h2>
        
      </div>
    )
}