import React, { useState, useEffect } from 'react';
import NavbarTracker from '../../molecules/Navbars/NavbarTracker/NavbarTracker';
import '../Tracker1/tracker1.css';
import CardCases from '../../atoms/CardCases/CardCases';
import useFetch from '../../services/UseFetch';
import Tracker2 from '../Tracker2/Tracker2';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import CardData from '../../atoms/CardData/CardData';
import '../../../components/atoms/CardData/cardData.css';

const Tracker1 = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "countries");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
  }, [selectedCountry]);

  if (!data) {
    return <>Loading</>;
  }

  const countryData = data.find((country) => country.country === selectedCountry);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className='backgroundTracker'>
        <Tracker2 />
        <div className="tracker1Container">
          <Dropdown onSelectCountry={handleCountryChange} />
          <div>
            
          </div>
          {selectedCountry && countryData && (
            <>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Tracker1;
