import React from "react";

export function MyHooks({title,id}: {title: string,id?:string}){
   // React.useEffect(()=>{
     //   console.log('componentDidMount');
   //   console.log('componentWillUpdate')
 // });
    
       // React.useEffect(()=>{
         //   console.log('componentDidMount');  
         //   return()=>{
            //    console.log('componentWillUnmount')
           // }
       // },[]);

      //  React.useEffect(()=>{
        //    console.log('componentWillReceiveProps:', title);
        //},[title]);

       

    return(
        <div style={{width: window.innerWidth}}>{title}{id}</div>
    )
}

export function useIsMounted(){
  const [isMounted,setIsMounted] = React.useState(false);
  
  React.useEffect(()=>{
    setIsMounted(true)
  },[])

  return [isMounted]
}