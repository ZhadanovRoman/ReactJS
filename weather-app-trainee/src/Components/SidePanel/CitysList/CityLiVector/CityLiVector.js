import './city-li-vector.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SelectedCityItem } from '../../../../action';

function CityLiVector(prop){
    const dispatch = useDispatch()
    const [liBackground,setLiBackground] = useState({});
    const [liVector,setLiVector] = useState({});
   
    function getItemData(e){
        let x = e.currentTarget.textContent;
       dispatch(SelectedCityItem(x))
        console.log(x)
    }

    function liMouseOver(){
        
        setLiBackground(()=>{
            return{
               background: 'var(--light-gray)'
            }  
        })
        setLiVector(()=>{
            return{
                visibility: 'visible'
            }
        })
       
    }
    function liMouseOut(){
        setLiBackground(()=>{
            return{
                background: 'transparent'
            }  
        })
        setLiVector(()=>{
            return{
                visibility: 'hidden'
            }
        })
    }

    return(
        <div className='li-block' onClick={getItemData} onMouseOut={liMouseOut} onMouseOver={liMouseOver} style={liBackground}>{prop.city}
          <img style={liVector} className='city-search-vector' src='./img/Vector-search-li.png' alt={'vector item'}></img>
          </div>
    )
}

export default CityLiVector;

