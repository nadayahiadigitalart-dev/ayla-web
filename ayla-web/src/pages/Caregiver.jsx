import React, { PureComponent } from 'react';
import Button from '../components/Button';
// import caree from '../assets/care_bg.svg';
import caree from '../assets/Group 201.png';


import "./Caregiver.css";
import Header from '../components/Header';


// import Caree from './Caregiver.svg';


const Caregiver = () => {
    return ( <>
<div className='bg'>

        <img className='c' src={caree} alt='Caregiver_ayla_services'/>

        <Header />

    <div className='car'>
        <div className='car_col'>
            <p className='mfb'>
                Find Trusted Help for Your Home and Kids
            </p>
            <p className='bf'>From babysitters and nannies
                 to housekeepers and home cooks, Ayla 
                 connects families with reliable caregivers
                  you can trust.</p>
            <Button bu="Request a Caregiver" />
        </div>
    </div>

</div>


    
    
    
    
    </> );
}
 
export default Caregiver;