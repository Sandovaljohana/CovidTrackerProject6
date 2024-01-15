import React from "react";
import CardCases from "../../atoms/CardCases/CardCases";
import useFetch from "../../services/UseFetch";
import NavbarTracker from "../../molecules/Navbars/NavbarTracker/NavbarTracker";
import "./tracker0.css";
import Topten from "../../molecules/TopTen/Topten";

const Tracker0 = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "all");
  if (data === null) {
    return <>Loading</>;
  }
  return (
    <div className="flex flex-row">
      <NavbarTracker />
      <div className="cardCasesRow">
        <div className="titleTracker0">
          <h1>COVID-19 Tracker</h1>
        </div>
        <CardCases
          key="total"
          cardsBgStyle="cardsBgStyleTotal"
          cardText="Total Case"
          smallTextValue={`+ ${data.todayCases}`}
          cardDataStyle="cardDataStyleTotal"
          globalTextDataValue={data.cases}
        />
        <CardCases
          key="active"
          cardsBgStyle="cardsBgStyleActive"
          cardText="Active Case"
          globalTextDataValue={data.active}
          cardDataStyle="cardDataStyleActive"
        />
        <CardCases
          key="recovered"
          cardsBgStyle="cardsBgStyleRecovered"
          cardText="Recovered Case"
          smallTextValue={`+ ${data.todayRecovered}`}
          globalTextDataValue={data.recovered}
          cardDataStyle="cardDataStyleRecovered"
        />
        <CardCases
          key="deaths"
          cardsBgStyle="cardsBgStyleDeaths"
          cardText="Deaths Case"
          smallTextValue={`+ ${data.todayDeaths}`}
          globalTextDataValue={data.deaths}
          cardDataStyle="cardDataStyleDeaths"
        />
        <Topten />
      </div>
    </div>
  );
};

export default Tracker0;
