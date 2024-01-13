import React from "react";
import "./cardData.css";

const CardData = (props) => {
  return (
    <div className="border-blue-700 border-solid border-2 cardDataContainer">
      <div className="border-teal-700 border-solid border-2 containerDataIcon">
        <div>
          <h5 className={props.dataTitleGlobal}>{props.cardDataTittle}</h5>
          <h3 className={props.dataGlobalstyle}>
            {props.dataGlobalCountriesValue}
          </h3>
          <div className="iconContent border-blue-700 border-solid border-2">
          <img src={props.iconCard} alt="" />
        </div>
        </div>

        
      </div>
    </div>
  );
};

export default CardData;
