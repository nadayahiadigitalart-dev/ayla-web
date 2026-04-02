import React from 'react';
import './Discover.css';

const cards = [
    { title: "Mother Care", img: "path_to_spa.jpg" },
    { title: "Activities & Experiences", img: "path_to_climbing.jpg" },
    { title: "Kids Shops", img: "path_to_shop.jpg" },
    { title: "Workshops", img: "path_to_workshops.jpg" },
    { title: "Family Dining", img: "path_to_dining.jpg" },
];

const Discover = () => {
    return (
        <section className="discover_section">
            <div className="discover_arc_stage">
                <div className="discover_orbit_path">
                    {cards.map((card, index) => (
                        <div className="discover_card_node" key={index}>
                            <div className="discover_card_content">
                                <div className="discover_image_box">
                                    <img src={card.img} alt={card.title} />
                                </div>
                                <p className="discover_label">{card.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="discover_text_area">
                <h2 className="discover_main_title">Find everything your family need, in one place.</h2>
                <p className="discover_description">
                    From kid-friendly restaurants and activity spaces to workshops and 
                    experiences. Ayla helps you discover what's safe, fun, and convenient.
                </p>
                <button className="discover_cta">Discover</button>
            </div>
        </section>
    );
};

export default Discover;