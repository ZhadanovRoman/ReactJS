import React from "react";
 import styles from './cardImg.css';

 export function CardImg(){
         return(
            <div className={styles.preview}>
            <img
            className={styles.previewImg}
            src="https://mtdata.ru/u30/photo09A3/20276216782-0/original.jpg"
            />
           </div>
         )
    
 }