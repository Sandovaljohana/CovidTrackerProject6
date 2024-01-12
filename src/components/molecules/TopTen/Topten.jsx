import React from "react";
import "../TopTen/topTen.css";
import CardTopten from "../../atoms/cardTopten/CardTopten";
import useFetch from "../../services/UseFetch";

const Topten = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "countries");
  const sortedData = data?.sort((a, b) => b.cases - a.cases);
  const topTenCountries = sortedData?.slice(0, 10);
  if (data === null) {
    return <>Loading</>;
  }
  return (
    <> <div className="topTenTitle">
    <p>Top 10 Country</p>
  </div>
    <div>
      {topTenCountries?.map((element) => (
        <CardTopten
          key={element.cases}
          toptenFlagValue={element.countryInfo.flag}
          toptenNameCountryValue={element.country}
          toptenConfirmedCaseCountryValue={element.cases}
        />
      ))}
    </div>
    </>
  );
};

export default Topten;
