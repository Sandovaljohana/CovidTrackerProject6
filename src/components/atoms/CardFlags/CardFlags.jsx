import React from "react";
import "../CardFlags/cardFlags.css";

const CardFlags = ({ onSelectCountry, flagValue, countryValue }) => {
  const handleClick = () => {
    onSelectCountry(countryValue);
  };

  return (
    <div clasname="cardFlags">
      <div className="cardFlagContainer" onClick={handleClick}>
        <img
          className="cardFlagImg"
          src={flagValue}
          alt={`Flag of ${countryValue}`}
        />
        <p className="cardFlagCountry">{countryValue}</p>
      </div>
    </div>
  );
};

export default CardFlags;
