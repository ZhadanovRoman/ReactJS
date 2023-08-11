import './humidity-scale.css';
import { useState,useEffect } from 'react';
function HumidityScale(props){
    
const [humidityChange,setHumidityChange] = useState({});
useEffect(()=>{
        setHumidityChange(()=>{
            return{
                width: props.props+'%' 
            }
        })
},[props])

    return(
<div className='humidity-scale-box'>
    <div className='humidity-scale-num'>
        <span>0</span>
        <span>50</span>
        <span>100</span>
    </div>
    <div className='humidity-scale-bg'><div className='humidity-scale-span' style={humidityChange}></div> </div>
    <span className='humidity-scale-percent'>%</span>
</div>
    )
}

export default HumidityScale;