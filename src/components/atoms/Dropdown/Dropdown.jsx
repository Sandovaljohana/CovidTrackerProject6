import React, { useState } from "react";
import "../Dropdown/dropdown.css";
import useFetch from "../../services/UseFetch";

const Dropdown = ({ onSelectCountry }) => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "countries");
  const allCountries = data;

  const handleCountryChange = (selectedCountry) => {
    onSelectCountry(selectedCountry);
  };

  if (!allCountries) {
    return <>Loading</>;
  }

  return (
    <div className="dropdown-container">
      <select
        className="dropdown-select"
        name="countries"
        id="countries"
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option  value="country">Select a Country</option>
        {allCountries.map((countryObject) => (
          <option className="option" key={countryObject.country} value={countryObject.country}>
            {countryObject.country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
