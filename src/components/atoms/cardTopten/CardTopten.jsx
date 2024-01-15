import React from "react";
import "./cardTopten.css";

const CardTopten = (props) => {
  return (
    <>
    <div className="countryContainer">
      <div className="topTenInfoData">
        <div className="toptenFlag">
          <img src={props.toptenFlagValue} />
        </div>
        <div className="toptenCountry">
          <p>{props.toptenNameCountryValue}</p>
        </div>
      </div>
      <div className="toptenConfirmedCase">
        <p>{props.toptenConfirmedCaseCountryValue}</p>
      </div>
    </div>
    </>
  );
};

export default CardTopten;
