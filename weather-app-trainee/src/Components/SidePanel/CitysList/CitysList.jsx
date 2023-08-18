
import './city-list.css'
import CityLiVector from './CityLiVector/CityLiVector';

function CitysList(props) {
    
   
    

   const arrCity = props.locationCity
    if(arrCity.length>5){
        arrCity.shift()
    }
    const listItems = arrCity.map((el)=>
        <li className="city-list-li" key={el}  >
           
            <CityLiVector city={el}/>
            </li>
    )
      
    return (
      <ul className="city-list">{listItems}</ul>
    );
  }

  export default CitysList;