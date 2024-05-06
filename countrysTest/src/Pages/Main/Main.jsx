import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { useGetData } from '../../Hooks/useGetData';


const Main = () => {
    const [countryDescr, setCountryDescr] = useState();
  

     const data = useGetData()
     


    useEffect(() => {

        if(data){
            const countries = data.map((item, index) => (
                <ListGroup.Item key={Math.random()} ><Link to='/country-descr' onClick={(e) => localStorage.setItem('country', JSON.stringify(e.target.textContent))}>{item.name.common}</Link></ListGroup.Item>
            ));
            setCountryDescr(countries);
        }
       
    
    }, [data])


    return (
        <>

            <ListGroup>{countryDescr ? countryDescr : <Link to='/404'></Link>}</ListGroup>
        </>
    );
}

export default Main;