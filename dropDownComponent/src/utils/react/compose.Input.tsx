import React  from "react";
import { preventDefault } from './prevDefault';
import { stopPropagation } from './stopProp';
import { getValue } from './pickFromSyntheticEvent'

interface InputProps {
    onChange: (value: string) => void;
    value: string;
}

function Input({value, onChange }: InputProps){
    return (
        <input
        value={value}
        onChange={pipe(preventDefault,stopPropagation,getValue,onChange)
        }
        />
       
    )
}


function compose<U>(...fns: Function[]){
    return <E,>(initialValue: any): U =>
    fns.reduceRight((previousValue, fn)=>fn(previousValue),initialValue)
}

function pipe<U>(...fns: Function[]){
    return <E,>(initialValue: any): U =>
    fns.reduce((previousValue, fn)=>fn(previousValue),initialValue)
}