import React, { Component } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
import bg from "../assets/bg-img.svg";

import "./Home.css";
import WhyAyla from '../components/whyAyla';



const Home = () => {
    return (<>

    <div className='bg'>

    <img className='bgsize' src={bg} alt="ayla_background" />


<div className='header'>

    <Header />
</div>

{/* <div className='absolute_bg'> */}
    <Hero />
{/* </div> */}

<WhyAyla />



</div>
    
    
    </>  );
}
 
export default Home;