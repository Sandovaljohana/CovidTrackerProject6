import React from 'react'
import '../CardFlags/cardFlags.css'

const CardFlags = ({ onSelectCountry, flagValue, countryValue }) => {
    const handleClick = () => {
      onSelectCountry(countryValue);
    };
  
    return (
      <div className="cardFlags cardFlagContainer" onClick={handleClick}>
        <img className='cardFlagImg' src={flagValue} alt={`Flag of ${countryValue}`} />
        <p className='cardFlagCountry'>{countryValue}</p>
      </div>
    );
  };
  
  export default CardFlags;