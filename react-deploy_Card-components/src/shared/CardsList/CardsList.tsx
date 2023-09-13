import React from "react";
import { Card } from "./Card";
import styles from './cardslist.css';
import { usePostsData } from "../../hooks/usePostData";




export function CardsList() {
    const [data1] = usePostsData()



    return (
        <ul className={styles.cardslist}>
            <Card />
        </ul>
    );
}