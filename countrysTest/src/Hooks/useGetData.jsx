
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetData =  () => {    
    const [arr,setArr] = useState();
    useEffect(()=>{
        try {
             axios('https://restcountries.com/v3.1/all')
            .then(res=>setArr(res.data));
           
        } catch (err) {
            console.log('Ошибка', err.message);
        }
    },[])
   if(arr){
    return arr
   }

}

