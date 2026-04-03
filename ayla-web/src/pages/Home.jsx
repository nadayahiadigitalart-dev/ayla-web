// import React, { Component } from 'react';

import React, { useRef, useEffect, useState } from 'react';

import Hero from '../components/Hero';
import Header from '../components/Header';
// import bg from "../assets/bg-img.svg";
// import bg from "../assets/bg1-img.svg";
import parent from "../assets/parent.svg";
import G189 from "../assets/Group 189.png";

import '@google/model-viewer';
import glb from "../components/baby_bed.glb";


import "./Home.css";
import WhyAyla from '../components/whyAyla';
import Button from '../components/Button';
// import DiscoverCarousel from '../components/CircularGallery';
import CircularGallery from '../components/CircularGallery';
// import Discover from '../components/Discover';

import care from "../assets/4285 6.png";
import activity from "../assets/4285 8.png";
import shops from "../assets/4285 1.png";
import illu from "../assets/illu.png";


import img1 from '../assets/10918 1.svg'; 
import img2 from '../assets/10918 1-1.svg';
import img3 from '../assets/10918 1-2.svg';
import img4 from '../assets/10918 1-1.svg';
import StoryCard from '../components/StoryCard';
import PureCSSGallery from '../components/PureCSSGallery';

import tc1 from '../assets/trusticon-1.svg'; 
import tc2 from '../assets/trusticon-2.svg'; 
import tc3 from '../assets/trusticon-3.svg'; 
import G193 from '../assets/Group 193.png'; 
import careg from '../assets/careg3.png'; 
import ppl from '../assets/ppl.png'; 







const myGalleryData = [
  { image: care, text: "Mother Care" },
  { image: activity, text: "Activities & Kids area" },
  { image: shops, text: "Shops" }

];



const Home = () => {
   const modelRef = useRef(null);
    // 1. Add a "ready" state
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // 2. Set to true only after the first render
        setIsReady(true);
        
        const modelViewer = modelRef.current;
        if (modelViewer) {
            modelViewer.addEventListener('load', () => {
                console.log("3D Model is ready!");
            });
        }
    }, []);

    return (<>

    <div className='bg'>

    {/* <img className='bgsize' src={bg} alt="ayla_background" /> */}


<div className='header'>

</div>

<div className='absolute_bg'>
    <Header />
    <Hero />

<WhyAyla />
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

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

<div className='discover_bg'>


<div className='shop'>
    <div className='shop_col'>
        <p className='mfw'>Make better & faster Shopping decision by visiting ayla store</p>
        <p className='wf1'>Explore our curated collection of baby essentials, mom self-care products, and smart devices recommended for you to make life easier</p>
        <Button bu="Go to store" />
    </div>

        {/* <model-viewer 
        id="main-3d-model"
    src={glb} 
    alt="3D Product Model showing ux ui soundfix project" 
    auto-rotate 
    camera-controls 
    camera-orbit="10deg 60deg auto"
    shadow-intensity="2"
    exposure="1.5"
    environment-image="neutral"
    
   style={{ width: "100%", height: "500px" }}>
    <div slot="poster" className="loading_text">Loading 3D Experience...</div>
    </model-viewer> */}
    <model-viewer 
    id="main-3d-model"
    ref={modelRef}
    loading="lazy"
    src={glb} 
    alt="3D Product Model" 
    auto-rotate 
    // camera-controls 
    // camera-orbit="10deg 60deg auto"
    shadow-intensity="2"
    exposure="1.5"
    environment-image="neutral"
    style={{ width: "100%", height: "500px", display: 'block' }} 
>
    <div slot="poster" className="loading_text">Loading 3D Experience...</div>
</model-viewer>
<br></br><br></br>

</div>


{/* </div> */}

{/* <CircularGallery /> */}


<div className='discover_section' >

{/* <div style={{ width:'100%', height: '600px', position: 'relative' }}>
  <CircularGallery  textColor="#ffffff"  
  bend={3}
  borderRadius={0.08}
  scrollSpeed={1.5}
  scrollEase={0.05}
  items={myGalleryData}
/>
</div> */}

<div className='discover_section'>
  <div style={{ width:'100%', height: '600px', overflow: 'hidden' }}>
     <PureCSSGallery />
  </div>



<div className='discover_col'>

<p className='mfw'>Find everything your family need, in one place.</p>
<p className='wf1'>From kid-friendly restaurants and activity spaces to workshops and experiences. ayla helps you discover what’s safe, fun, and convenient.</p>
<Button bu="Discover" />

</div>
</div>

<br></br>
<br></br>




<div className='stories'>
    <div className="story_col1">
           <div className='story_title'>
                <h1 className="mfw">ayla stories</h1>
                <p className="wf1">
                    Because every mother carries a story & every story deserves space.
                </p>
            </div>
           
              
                <StoryCard 
                    img={img1} 
                    date="20 Feb, 2026" 
                    title="Family Balance" 
                    par="Creating harmony between care, work, and life." 
                    // shiftDirection="shift-top-left"
                />
                <StoryCard 
                    img={img2} 
                    date="4 Feb, 2026" 
                    title="Ayla expands its caregiver community" 
                    par="We're growing our trusted care network to support more..." 
                    // shiftDirection="shift-top-right"
                />

    </div>

    <div className='story_col2'>            
                <StoryCard 
                    img={img3} 
                    date="7 Jan, 2026" 
                    title="New live connection feature" 
                    par="Mothers can now go live with their children anytime..." 
                    // shiftDirection="shift-bottom-left"
                />
                <StoryCard 
                    img={img4}
                    date="28 Dec, 2025" 
                    title="Family Balance" 
                    par="Creating harmony between care, work, and life." 
                    // shiftDirection="shift-bottom-right"
                />
        

            {/* <button className="stories_global_btn">See more</button> */}
            <Button bu="See more"/>
        </div>
</div>

{/* <br></br>
<br></br> */}

        </div>
<section className='caregiver_section'>

    <div className='caregiver_row'>
    <img className='tt2' src={careg} alt='ayla_trusted_caregiver_img_bg' />

    <img className='illus' style={{position: 'relative',
    left: 0,float: 'left', marginBottom: '100'}} src={illu} alt='ayla_illustration' />
    <div className='caregiver_col'>
        <p className='mf'>Looking for trusted care?</p>
        <p className='f'>
            Finding the right care for your child and home 
            shouldn’t feel stressful.With Ayla, you can 
            connect with verified babysitters and 
            housekeepers you can trust.
        </p>
        <Button bu="Request a Caregiver"/>
    </div>
    {/* <img className='tt' src={G193} alt='ayla_trusted_caregiver_img' /> */}

    </div>

    <div className='trust_section'>
        <div className='tc'>
            <img src={tc1} alt='icon'/>
            <p className='f'>Verified Profile</p>
        </div>

        <div className='tc'>
            <img src={tc2} alt='icon'/>
            <p className='f'>Verified Profile</p>
        </div>

        <div className='tc'>
            <img src={tc3} alt='icon'/>
            <p className='f'>Verified Profile</p>
        </div>
    </div>


</section>


<section className='wt_ppl_say'>

    <img className='ppl_say' src={ppl} alt='what people say about ayla' />

    <div className='ppl_col'>
        <p className='mf'>What other People say?</p>
        <div className='ppl_box_row'>
            <img className='' src='' alt=''/>
            <p className='f'>“This app made my life easier, it has features that helps me in”<br></br>
            ~Huda Abdelsalam</p>
        </div>

        <div className='ppl_buttons'>

        </div>
    </div>



</section>
</div>









</div>

    
    
    </>  );
}
 
export default Home;