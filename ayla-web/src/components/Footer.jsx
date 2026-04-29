import React from 'react';
import './Footer.css';
import aylaLogo from '../assets/logo-footer.png'; 
import phoneImg from '../assets/download.svg';   
// import { FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import insta from '../assets/insta.svg';   
import f from '../assets/facebook.svg';   
import t from '../assets/tiktok.svg';   


const Footer = () => {
  return (
    <footer className="footer-container">
      {/* 1. The Hover Content (App and Text) */}
      <div className="hover-content">
        {/* <h2 className="download-text">Download app <br /> now</h2> */}
        <img  src={phoneImg} alt="Ayla App" className="phone-mockup" />
      </div>

      
      <div className="footer-main">
        {/* <div className="footer-top-row"> */}
          <div className="footer-brand">
            <img  src={aylaLogo} alt="Ayla Logo" className="footer-logo" />
            {/* <br></br> */}
            <div className="social-icons">
              <img src={insta} alt=''/>
              <img src={f} alt=''/>
              <img src={t} alt=''/>

            </div>
            <p className="ww">
              Supporting mothers and families with trusted care, helpful services, and smart tools for everyday life.
            </p>
            <p className="www">© 2026 ayla, Inc. All rights reserved.</p>
          </div>

          <div className="footerlinks">
          <div className='col_footer'>

          <div className='col_footer2'>

           <p className='mmf2'>Explore</p>
           <br></br>
           <div className='footer_col'>
            <p className='wf2'>Home</p>
            <p className='wf2'>About</p>
            <p className='wf2'>Discover</p>
            <p className='wf2'>Parenting</p>
            {/* <p className='wf2'>Ayla Store</p> */}

           </div>
</div>

          <div className='col_footer2'>

             <p className='mmf2'>Services</p>
           <br></br>
           <div className='footer_col'>
            <p className='wf2'>Tutor</p>
            <p className='wf2'>Nurses</p>
            <p className='wf2'>Find Babysitters</p>
            <p className='wf2'>Special Needs Care</p>
            {/* <p className='wf2'>Housekeeping</p> */}

           </div>
           </div>

          <div className='col_footer2'>


             <p className='mmf2'>Support</p>
           <br></br>
           <div className='footer_col'>
            <p className='wf2'>Contact us</p>
            <p className='wf2'>FAQ</p>
            <p className='wf2'>Privacy Policy</p>
            <p className='wf2'>Terms & Conditions</p>
            
</div>
           </div>

          <div className='col_footer2'>


             <p className='mmf2'>Work with us</p>
           <br></br>
           <div className='footer_col'>
            <p className='wf2'>Careers</p>
            <p className='wf2'>join ayla</p>
            <p className='wf2'>apply as careiver</p>
          
           </div>
           </div>
</div>
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;