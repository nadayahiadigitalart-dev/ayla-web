import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import HomeAR from './pages/HomeAR';
import Caregiver from './pages/Caregiver';
import DiscoverPage from './pages/DiscoverPage';
import Test from './pages/Test';
import Career from './pages/Career';
import JobDetails from './pages/JobDetails';
import JobForm from './pages/JobForm';
import StorePage from './pages/StorePage';



// import Contact from './components/Contact';

  const Routing = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
           <Route path="/ar" element={<HomeAR />} />
           <Route path="/caregiver-services" element={<Caregiver />} />
           <Route path="/discover" element={<DiscoverPage />} />
           <Route path="/careers" element={<Career />} />
           <Route path="/jobdetails/:id" element={<JobDetails />} />
           <Route path="/apply" element={<JobForm />} />
           <Route path="/store" element={<StorePage />} />


           <Route path="/test" element={<Test />} />

           
            {/* <Route path='*' element={<Error />} /> */}

        </Routes>
        </BrowserRouter>
     );
  }
   
  export default Routing;