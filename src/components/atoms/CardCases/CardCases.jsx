import React from "react";
import "../CardCases/cardCases.css";
import "../../../App.css";

const CardCases = (props) => {
  return (
    <>
      <div className={`cardCasesContainer ${props.cardsBgStyle}`}>
        <div className="primaryColor cardCasesTitle">
          <h2>{props.cardText}</h2>
        </div>
        <div className="flex bg-white updatedCasesContainer">
        
            <p className="todayCasesText text-gray-300">{props.smallTextValue}</p>
          
        </div>
        <div className="cardCasesData"><p className={` ${props.cardDataStyle}`}>{props.globalTextDataValue}</p></div>
      </div>
    </>
  );
};

export default CardCases;
