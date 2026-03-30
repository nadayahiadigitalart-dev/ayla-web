import React, { PureComponent } from 'react';

import logo from "../assets/ayla logo.svg";
import vector from "../assets/Vector.svg";
import arrow from "../assets/image transformation mom and baby.svg";

import "./Hero.css";
import "./Header.css";

const Hero = () => {
    return ( <>

    <div className='header_row'>
    
    <img className='logo' src={logo} alt='ayla_logo_Parenting' />

    <ul>
        <p className='clicked'>Home</p>
        <p className='unclicked'>About</p>
        <p className='unclicked'>Features</p>
        <p className='unclicked'>Parenting</p>
        <p className='unclicked'>Store</p>
        <p className='unclicked'>Discover</p>
        <div className='header_row'>
            <p className='unclicked'>Contact us</p>
            <img className='' src={arrow} alt='arrow_down' />
            
        </div>

    </ul>

    <div className='sign_row'>
        <p className='lang_row'>
            <img src={vector} alt='vector_language'  />
            <p className='clicked'>Ar</p>
        </p>

        <p className='main_button'>Sign in</p>
    </div>

    </div>
    
    
    </> );
}
 
export default Hero;