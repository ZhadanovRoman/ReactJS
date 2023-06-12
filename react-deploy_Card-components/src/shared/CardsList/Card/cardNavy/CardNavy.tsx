import React from 'react';
import styles from './cardNavy.css';
import { KarmaCount } from './KarmaCount';
import { CommentsButton } from './CommentsButton';
import { Actions } from './Actions';


export function CardNavy(){
    return(
   
        <div className={styles.controls}>
                <KarmaCount/>
                <CommentsButton/>
                <Actions/>
            </div>
       
    )
}