import React from "react";
import styles from './actions.css';
import { SaveBtn } from "./SaveBtn/SaveBtn";
import { ShareBtn } from "./ShareBtn";

export function Actions(){
    return (
        <div className={styles.actions}>
                   <ShareBtn/>
                    <SaveBtn/>
                </div>
    )
}