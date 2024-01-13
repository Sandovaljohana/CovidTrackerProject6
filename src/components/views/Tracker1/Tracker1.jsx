import React from 'react';
import NavbarTracker from '../../molecules/Navbars/NavbarTracker/NavbarTracker'
import '../Tracker1/tracker1.css';
import CardCases from '../../atoms/CardCases/CardCases';
import useFetch from '../../services/UseFetch';
import { useState, useEffect } from 'react';
import Tracker2 from '../Tracker2/Tracker2';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import CardData from '../../atoms/CardData/CardData';
import '../../../components/atoms/CardData/cardData.css';
import card01 from '../../../../src/images/covid-blue.svg'

const Tracker1 = () => {
  const url = "https://disease.sh/v3/covid-19/";
  const { data } = useFetch(url + "countries");
  
  
  if (data === null) {
    return <>Loading</>;
  }

  return (
    <>
      <div className='backgroundTracker'>

        <Tracker2 />
        <div className="tracker1Container">
          <Dropdown />
          <CardData
            key="totalCasesCard"
            iconCard={card01}
            dataTitleGlobal="dataTitleGlobal"
            cardDataTittle="Total Cases"
            dataGlobalstyle="dataGlobalstyleBlue"
            dataGlobalCountriesValue={data.cases}
      />
        </div>



      </div>

    </>
  );

};


export default Tracker1;
