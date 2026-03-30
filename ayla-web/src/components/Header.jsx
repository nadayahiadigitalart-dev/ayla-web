import React, { useState } from 'react';
import logo from "../assets/ayla logo.svg";
import vector from "../assets/Vector.svg";
import arrow from "../assets/arrow.svg";
// import "./Hero.css";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <>
            <div className='header_row'>
                <img className='logo' src={logo} alt='ayla_logo_Parenting' />

                {/* The Main Navigation */}
                <ul className={`nav_links ${isMenuOpen ? 'active' : ''}`}>
                    <li className='clicked'>Home</li>
                    <li className='unclicked'>About</li>
                    <li className='unclicked'>Features</li>
                    <li className='unclicked'>Parenting</li>
                    <li className='unclicked'>Store</li>
                    <li className='unclicked'>Discover</li>
                    
                    {/* FIX: Move the dropdown list INSIDE the Contact Us container */}
                    <li className='dropdown_parent'>
                        <div className='header_row2'>
                            <p className='unclicked'>Contact us</p>
                            <img src={arrow} alt='arrow_down' />
                        </div>
                        {/* This now sits inside dropdown_parent */}
                        <ul className='dropdown_menu'>
                            <li>Careers</li>
                            <li>How it works</li>
                            <li>Request a caregiver</li>
                        </ul>
                    </li>
                </ul>

                <div className='sign_row'>
                    {/* FIX: Wrap language in a container to handle the click/dropdown */}
                    <div className='lang_container' onClick={() => setIsLangOpen(!isLangOpen)}>
                        <div className='lang_row'>
                            <img src={vector} alt='vector_language' />
                            <p className='clicked'>En</p>
                            <img className={isLangOpen ? 'rotate' : ''} src={arrow} alt='arrow_down' />
                        </div>
                        
                        {isLangOpen && (
                            <ul className='lang_dropdown'>
                                <li>Arabic</li>
                                <li>English</li>
                            </ul>
                        )}
                    </div>

                    <p className='main_button'>Sign up</p>

                    <div className='burger' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className={isMenuOpen ? 'line1 toggle' : 'line1'}></div>
                        <div className={isMenuOpen ? 'line2 toggle' : 'line2'}></div>
                        <div className={isMenuOpen ? 'line3 toggle' : 'line3'}></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;