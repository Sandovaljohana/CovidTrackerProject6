import React, { useState, useEffect } from "react";
import "../Tracker1/tracker1.css";
import useFetch from "../../services/UseFetch";
import Tracker0 from "../Tracker0/Tracker0";
import Dropdown from "../../atoms/Dropdown/Dropdown";
import CardData from "../../atoms/CardData/CardData";
import "../../../components/atoms/CardData/cardData.css";
import covidMap from "../../../images/tracker1-map.png/";

const Tracker1 = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "countries");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {}, [selectedCountry]);

  if (!data) {
    return <>Loading</>;
  }

  const countryData = data.find(
    (country) => country.country === selectedCountry
  );

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
    <div className="tracker1View">
    <div>
    <Tracker0 />
    </div>
      <div className="backgroundTracker">
        <div className="tracker1Container">
          <div className="headerTracker">
          <div className="dropdownContainer">
            <Dropdown
              className="dropdownCountry"
              onSelectCountry={handleCountryChange}
            />
          </div>
          <div>
            <p className="updateData">Updated January 15, 2024</p>
          </div>
          </div>
        </div>
        <div className="cardsAndMapContainer">
        <div className="CardsContainer">
          {selectedCountry && countryData && (
            <>
            <div className="flex flex-col">
              <CardData
                key={countryData.country}
                dataTitleGlobal="dataTitleGlobal"
                cardDataTittle={`Total Cases - ${countryData.country}`}
                dataGlobalstyle="dataGlobalstyleBlue"
                dataGlobalCountriesValue={countryData.cases}
              />
              <CardData
                key={`TotalDeaths-${countryData.country}`}
                dataTitleGlobal="dataTitleGlobal"
                cardDataTittle={`Total Deaths - ${countryData.country}`}
                dataGlobalstyle="dataGlobalstyleEnglishRed"
                dataGlobalCountriesValue={countryData.deaths}
              />
              <CardData
                key={`TotalRecovered-${countryData.country}`}
                dataTitleGlobal="dataTitleGlobal"
                cardDataTittle={`Total Recovered - ${countryData.country}`}
                dataGlobalstyle="dataGlobalstyleGreen"
                dataGlobalCountriesValue={countryData.recovered}
              />
              </div>
              <div className="flex flex-col">
              <CardData
                key={`TotalActive-${countryData.country}`}
                dataTitleGlobal="dataTitleGlobal"
                cardDataTittle={`Total Active - ${countryData.country}`}
                dataGlobalstyle="dataGlobalstyleLightBlue"
                dataGlobalCountriesValue={countryData.active}
              />
              <CardData
                key={`NewCases-${countryData.country}`}
                dataTitleGlobal="dataTitleGlobal"
                cardDataTittle={`New Cases - ${countryData.country}`}
                dataGlobalstyle="dataGlobalstyleOrange"
                dataGlobalCountriesValue={countryData.todayCases}
              />
              <CardData
                key={`NewDeaths-${countryData.country}`}
                dataTitleGlobal="dataTitleGlobal"
                cardDataTittle={`New Deaths - ${countryData.country}`}
                dataGlobalstyle="dataGlobalstyleRed"
                dataGlobalCountriesValue={countryData.todayDeaths}
              />
              </div>
            </>
          )}
        </div>
        <div className="mapTracker1">
          <img className="mapTracker1" src={covidMap} />
        </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Tracker1;
