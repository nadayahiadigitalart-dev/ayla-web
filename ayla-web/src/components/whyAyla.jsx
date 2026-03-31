import React from 'react';
import '.WhyAyla.css';

const WhyAyla = () => {
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
                {cards.map((card, index) => (
                    <div className="ayla_card" key={index}>
                        <span className="card_icon">{card.icon}</span>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>
            <button className="see_more_btn">See more</button>
        </section>
    );
};

export default WhyAyla;