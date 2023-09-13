import React from "react";
import style from './closeItem.css';
import { DdText,EColor } from "../DdTextStyle";


export function CloseItem(){
    return(
        <div className={style.closeItemBlock}>
           <DdText size={14} mobileSize={12} color={EColor.gray66}>Закрыть</DdText>
        </div>
    )
}