import React from "react";
import "../Dropdown/dropdown.css";
import useFetch from "../../services/UseFetch";

const Dropdown = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "countries");
  const allCountries = data;

  if (!allCountries) {
    return <>Loading</>;
  }

  return (
    <div>
      <select name="countries" id="countries">
        <option value="country">...</option>
        {allCountries.map((countryObject) => (
          <option key={countryObject.country} value={countryObject.country}>
            {countryObject.country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;