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
  const tenCountries = sortedData?.slice(0, 10);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    // Puedes hacer algo aquí si es necesario
  }, [selectedCountry]);

  if (loading) {
    return <>Cargando...</>;
  }

  if (error) {
    return <>Error al cargar los datos</>;
  }

  const countryData = data?.find((country) => country.country === selectedCountry);

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <>
      <div className="tracker03Container">
        <Tracker0 />
        <div className="tenCountriesContainer">
          <div className="tenCountriesRow">
            {tenCountries?.map((element) => (
              <CardFlags
                onSelectCountry={handleCountryChange}
                key={element.country} // Utilizar un identificador único como clave
                flagValue={element.countryInfo.flag}
                countryValue={element.country}
              />
            ))}
          </div>
          <div className="tenCountriesCard">
            {selectedCountry && countryData && (
              <>
                <CardData
                  key={countryData.country}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`Casos totales - ${countryData.country}`}
                  dataGlobalstyle="dataGlobalstyleBlue"
                  dataGlobalCountriesValue={countryData.cases}
                />
                <CardData
                  key={`TotalDeaths-${countryData.country}`}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`Muertes totales - ${countryData.country}`}
                  dataGlobalstyle="dataGlobalstyleEnglishRed"
                  dataGlobalCountriesValue={countryData.deaths}
                />
                <CardData
                  key={`TotalRecovered-${countryData.country}`}
                  dataTitleGlobal="dataTitleGlobal"
                  cardDataTittle={`Recuperados totales - ${countryData.country}`}
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
      </div>
    </>
  );
};

export default Tracker3;
