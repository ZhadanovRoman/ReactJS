import React from "react";
import { preventDefault } from './prevDefault';
import { stopPropagation } from './stopProp';




export function NotStandardLink(props: any){
    
    return (
        <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
    )
}