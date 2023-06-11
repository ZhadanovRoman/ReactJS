import React from "react";
import styles from './card.css';
import { CardImg } from "./cardImg";
import { CardTextContent } from "./cardTextCont";
import { CardNavy } from "./cardNavy";
import { CardMenu } from "./cardMenu";



export function Card(){
    return(
    <li className={styles.card}>
      <CardTextContent/>
      <CardImg/>
      <CardNavy/>
      <CardMenu/>
    </li>
    );
}