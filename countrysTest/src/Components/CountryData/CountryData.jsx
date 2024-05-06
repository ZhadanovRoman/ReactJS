import { useEffect, useState } from "react";
import { useGetData } from "../../Hooks/useGetData";
import ListGroup from 'react-bootstrap/ListGroup';
const CountryData = () => {
    const country = JSON.parse(localStorage.getItem('country'));
    const [countryDone, setCountryDone] = useState();
    const data = useGetData();

    useEffect(() => {
        if (data) {
            const coutryDescr = data.filter((el) => el.name.common === country)
            setCountryDone(coutryDescr)
        }
    }, [data, country])


    return (
        <ListGroup>
            <ListGroup.Item key={Math.random()} >{countryDone ? `name : ${countryDone[0].name.common}` : ''} </ListGroup.Item>
            <ListGroup.Item key={Math.random()} >{countryDone ? `capital : ${countryDone[0].capital[0]}` : ''} </ListGroup.Item>
            <ListGroup.Item key={Math.random()} >{countryDone ? `population : ${countryDone[0].population}` : ''}  </ListGroup.Item>
            <ListGroup.Item key={Math.random()} ><img src={countryDone ? countryDone[0].flags.png : ''} alt="" /> </ListGroup.Item>
        </ListGroup>
    )
}
export default CountryData;