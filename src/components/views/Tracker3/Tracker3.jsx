import React, { useState, useEffect } from "react";
import "../Tracker3/tracker3.css";
import Tracker0 from "../Tracker0/Tracker0";
import CardFlags from "../../atoms/CardFlags/CardFlags";
import useFetch from "../../services/UseFetch";
import CardData from "../../atoms/CardData/CardData";

const Tracker3 = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data, loading, error } = useFetch(url + "countries");
  const sortedData = data?.sort((a, b) => b.cases - a.cases);
  const tenCountries = sortedData?.slice(0, 9);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {}, [selectedCountry]);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>Error with data charge</>;
  }

  const countryData = data?.find(
    (country) => country.country === selectedCountry
  );

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="tracker03Container">
        <Tracker0 />
        <div className="tenCountriesContainer">
          <div>
            <h1 className="trackerTitle">Covid-19 Country Wise - Tabs</h1>
          </div>
          <div className="tenCountriesRow">
            {tenCountries?.map((element) => (
              <CardFlags
                onSelectCountry={handleCountryChange}
                key={element.country}
                flagValue={element.countryInfo.flag}
                countryValue={element.country}
              />
            ))}
          </div>
          <div className="tenCountriesCard flex fle-row flex-wrap">
            {selectedCountry && countryData && (
              <>
                <CardData
                  key={countryData.country}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`Total Cases`}
                  dataGlobalstyle="dataGlobalstyleBlue"
                  dataGlobalCountriesValue={countryData.cases}
                />
                <CardData
                  key={`TotalDeaths-${countryData.country}`}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`Total Deaths`}
                  dataGlobalstyle="dataGlobalstyleEnglishRed"
                  dataGlobalCountriesValue={countryData.deaths}
                />
                <CardData
                  key={`TotalRecovered-${countryData.country}`}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`Total Recovered`}
                  dataGlobalstyle="dataGlobalstyleGreen"
                  dataGlobalCountriesValue={countryData.recovered}
                />
                <CardData
                  key={`TotalActive-${countryData.country}`}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`Total Active`}
                  dataGlobalstyle="dataGlobalstyleLightBlue"
                  dataGlobalCountriesValue={countryData.active}
                />
                <CardData
                  key={`NewCases-${countryData.country}`}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`New Cases`}
                  dataGlobalstyle="dataGlobalstyleOrange"
                  dataGlobalCountriesValue={countryData.todayCases}
                />
                <CardData
                  key={`NewDeaths-${countryData.country}`}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`New Deaths`}
                  dataGlobalstyle="dataGlobalstyleRed"
                  dataGlobalCountriesValue={countryData.todayDeaths}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracker3;
