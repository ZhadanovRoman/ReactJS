import React from "react";
import style from './closeItem.css';

export function CloseItem(){
    return(
        <div className={style.closeItemBlock}>
            <span className={style.closeItemSpan}>Закрыть</span>
        </div>
    )
}