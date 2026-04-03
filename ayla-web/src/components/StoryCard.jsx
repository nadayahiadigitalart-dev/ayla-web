import React from 'react';
import './StoryCard.css';



const StoryCard = (props) => {
    return (
      <>

      <div className='storycard'>
        <img src={props.img} alt={props.alt}/>
        <div className='card_col'>
            <p className='pink_small'>{props.date}</p>
            <p className='title'>{props.title}</p>
            <p className='par'>{props.par}</p>
        </div>
      </div>



      </>
    );
};

export default StoryCard;