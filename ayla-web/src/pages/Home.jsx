import React, { Component } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';
// import bg from "../assets/bg-img.svg";
// import bg from "../assets/bg1-img.svg";
import parent from "../assets/parent.svg";
import G189 from "../assets/Group 189.png";

import '@google/model-viewer';
import glb from "../assets/baby_bed.glb";


import "./Home.css";
import WhyAyla from '../components/whyAyla';
import Button from '../components/Button';
// import DiscoverCarousel from '../components/CircularGallery';
import CircularGallery from '../components/CircularGallery';
import Discover from '../components/Discover';



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

<div className='shop'>
    <div className='shop_col'>
        <p className='mfw'>Make better & faster Shopping decision by visiting ayla store</p>
        <p className='wf1'>Explore our curated collection of baby essentials, mom self-care products, and smart devices recommended for you to make life easier</p>
        <Button bu="Go to store" />
    </div>

        <model-viewer 
    src={glb} 
    alt="3D Product Model showing ux ui soundfix project" 
    auto-rotate 
    camera-controls 
    shadow-intensity="2"
    exposure="1.5"
    environment-image="neutral"
    
   style={{ width: "100%", height: "500px" }}>
    <div slot="poster" className="loading_text">Loading 3D Experience...</div>
    </model-viewer>
<br></br><br></br>
<br></br><br></br>

</div>


<div className='discover'>

<Discover />

</div>





{/* <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery  textColor="#ffffff"  
  bend={5}
  borderRadius={0.08}
  scrollSpeed={2}
  scrollEase={0.05}
/>
</div> */}







</div>
    
    
    </>  );
}
 
export default Home;