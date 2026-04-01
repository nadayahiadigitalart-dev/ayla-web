import React from 'react';
import './WhyAyla.css';
import Button from './Button';
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";



const WhyAyla = (props) => {
    const cards = [
        { title: "Reminders", desc: "Track yourself and your baby vaccines and health", icon: "🔔" },
        { title: "Parenting Advice", desc: "Learn to understand your child and parent him perfectly...", icon: "❤️" },
        { title: "Community", desc: "Share experiences, discuss with other mothers...", icon: "👥" },
        { title: "Ask Experts", desc: "Connect with experts, psychologists and experts...", icon: "🏥" },
    ];

    return (
        <section className="ayla_section">
            <h2 className="ayla_title">Why ayla?</h2>
            <div className="cards_container">
                {/* {cards.map((card, index) => (
                    <div className="ayla_card" key={index}>
                        <span className="card_icon">{card.icon}</span>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))} */}

                <div className='ayla_card'>
                    <img src={icon1} alt="Reminder icon"/>
                    <p className='pf' >Reminder</p>
                    <p className='bf' >Track yourself and your baby vaccines and health </p>

                </div>

                 <div className='ayla_card2'>
                    <img src={icon2} alt="Parenting Advice"/>
                    <p className='pf' >Parenting Advice</p>
                    <p className='bf' >Learn to understand your 
                        child and parent him perfectly in every 
                        phase they go to and learn how to deal 
                        with real situations. </p>

                </div>

                 <div className='ayla_card3'>
                    <img src={icon3} alt="community"/>
                    <p className='pf' >Community</p>
                    <p className='bf' >Share experiences,
                         discuss with other mothers and see 
                         other opinions and problems and 
                         encourage each other.</p>

                </div>

                 <div className='ayla_card4'>
                    <img src={icon4} alt="ask experts icon"/>
                    <p className='pf' >Ask Experts</p>
                    <p className='bf' >Connect with experts, psychologists 
                        and experts to understand your children and 
                        raise them carefully.</p>

                </div>
            </div>
            <Button bu="See more" />
        </section>
    );
};

export default WhyAyla;