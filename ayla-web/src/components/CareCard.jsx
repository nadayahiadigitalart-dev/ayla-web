import React from 'react';
import './CareCard.css';

const CareCard = (props) => {
  return (<>

  <div className='card'>
    <img className='' src={props.src} alt={props.alt}/>
    <p className='pf'>{props.t}</p>
    <p className='ff'>{props.par}</p>
  </div>
  
  </>
    
  );
};

export default CareCard;