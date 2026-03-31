import React, { PureComponent } from 'react';

// import bg from "../assets/image transformation mom and baby.svg";
import "./Hero.css";
import Button from './Button';

const Hero = () => {
    return ( <>

    {/* <img className='bgsize' src={bg} alt="ayla_background" /> */}
    
    <div className='col_hero'>
        <p className='main_f_hero'>
            Motherhood is hard, but you are not alone
        </p>
        <p className='wf'>
            ayla is a safe, calm digital space designed to support mothers through care, connection, and everyday life.
            </p>
            <Button bu="About ayla"  />
  
    </div>
    
    
    
    </> );
}
 
export default Hero;