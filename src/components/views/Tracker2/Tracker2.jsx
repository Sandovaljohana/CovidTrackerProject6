import React from "react";
import CardCases from "../../atoms/CardCases/CardCases";
import useFetch from "../../services/UseFetch";
import NavbarTracker from "../../molecules/Navbars/NavbarTracker/NavbarTracker";
import "../Tracker2/tracker2.css";
import Topten from "../../molecules/TopTen/Topten";

const Tracker2 = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "all");
  if (data === null) {
    return <>Loading</>;
  }
  return (
    <div className="flex flex-row">
      <NavbarTracker />
      <div className="cardCasesRow">
        <CardCases
          key="total"
          cardsBgStyle="cardsBgStyleTotal"
          cardText="Total Case"
          smallTextValue={`+ ${data.todayCases}`}
          globalTextDataValue={data.cases}
        />
        <Topten />

      </div>
    </div>
  );
};

export default Tracker2;
