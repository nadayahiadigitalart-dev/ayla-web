import React from 'react';
import './PureCSSGallery.css';

import care from "../assets/4285 6.png";
import activity from "../assets/4285 8.png";
import shops from "../assets/4285 1.png";

const galleryItems = [
  { image: care, text: "Mother Care" },
  { image: activity, text: "Activities" },
  { image: shops, text: "Shops" },
];

const PureCSSGallery = () => {
  // We double the array to create the "infinite" tail
  const doubledItems = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <div className="css-gallery-viewport">
      <div className="css-gallery-track">
        {doubledItems.map((item, index) => (
          <div className="css-gallery-card" key={index}>
            <img src={item.image} alt={item.text} />
            <div className="card-overlay">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PureCSSGallery;