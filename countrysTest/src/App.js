import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Pages/Error/Error';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CountryDescr from './Pages/CountryDescr/CountryDescr';
import Main from './Pages/Main/Main';
function App() {
  return (


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/country-descr' element={<CountryDescr />} />
        <Route path="/404" element={<Error />} />
        <Route path="/*" element={<Error />} />
      </Routes>


    </BrowserRouter>


  );
}

export default App;
