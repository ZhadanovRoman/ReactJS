import './humidity-scale.css';

function HumidityScale(){
    return(
<div className='humidity-scale-box'>
    <div className='humidity-scale-num'>
        <span>0</span>
        <span>50</span>
        <span>100</span>
    </div>
    <div className='humidity-scale-bg'><div className='humidity-scale-span'></div> </div>
    <span className='humidity-scale-percent'>%</span>
</div>
    )
}

export default HumidityScale;