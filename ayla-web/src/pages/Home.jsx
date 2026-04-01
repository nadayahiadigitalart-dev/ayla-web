import React, { Component } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
// import bg from "../assets/bg-img.svg";
// import bg from "../assets/bg1-img.svg";
import parent from "../assets/parent.svg";
import G189 from "../assets/Group 189.png";

import "./Home.css";
import WhyAyla from '../components/whyAyla';
import Button from '../components/Button';



const Home = () => {
    return (<>

    <div className='bg'>

    {/* <img className='bgsize' src={bg} alt="ayla_background" /> */}


<div className='header'>

</div>

<div className='absolute_bg'>
    <Header />
    <Hero />

<WhyAyla />
</div>

<div className='parenting'>
    <img className='absolute_parent' src={G189} alt='parenting image'/>
    <div className='parent_col'>
    <p className='mf'>Ever wondered how to deal with difficult parent decisions?</p>
    <p className='sf'>Discover what your child is experiencing and learn how to support them with confidence.</p>
    <p className='f'>From baby to teenage years, Ayla helps parents understand how children think, feel, and behave with guidance from child development experts and how to behave in difficult parenting situations</p>
    <Button bu="Explore each stage"/>
    </div>
</div>



</div>
    
    
    </>  );
}
 
export default Home;