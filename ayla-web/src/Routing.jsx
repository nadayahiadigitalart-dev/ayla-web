import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import HomeAR from './pages/HomeAR';

// import Contact from './components/Contact';

  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/projectdetails' element={<Projectdetails />} /> */}
           <Route path="/ar" element={<HomeAR />} />


            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;