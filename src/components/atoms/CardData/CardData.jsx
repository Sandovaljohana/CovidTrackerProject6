import React from "react";
import "./cardData.css";

const CardData = (props) => {
  return (
    <div className="cardDataContainer">
      <div className=" containerDataIcon">
        <div>
          <h5 className={props.dataTitleGlobal}>{props.cardDataTittle}</h5>
          <h3 className={props.dataGlobalstyle}>
            {props.dataGlobalCountriesValue}
          </h3>
        </div>
        </div>

        
      </div>
  );
};

export default CardData;
