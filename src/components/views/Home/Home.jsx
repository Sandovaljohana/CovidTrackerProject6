import './home.css';
import NavbarHome from '../../molecules/Navbars/NavbarHome/NavbarHome';
import CardHome from '../../atoms/Cards/CardHome';
import useFetch from '../../services/UseFetch';
import { useState, useEffect } from 'react';

const Home = () => {
  const url = 'https://disease.sh/v3/covid-19/';
  const { data } = useFetch(url + "countries");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else { 
        setCurrentIndex(0);
      }
    }, 5000); 
    return () => clearInterval(intervalId);
  }, [currentIndex, data]);
  if (!data) {
    return <> Loading </>;
  }

  const currentCard = data[currentIndex];
  return (
    <div className="home text-white ">
      <NavbarHome />
      <div className="backgroundHome flex ">
        <div className="flex-1 size-3/12 mx-20 font-bold sm:w-80 ml-10 ">
          <h1 className="text-4xl sm:text-4xl tracking-wider -mt-40  lg:text-5xl xl:text-6xl font-bold mb-4 text-white text-left">Stay Home, And Prayer For Victim Of Corona Virus.</h1>
          <p className="text-lg text-white text-left  sm:text-sm text-justify">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold. The coronavirus COVID-19 is affecting 210 countries & territories around the world and 2 international conveyances.</p>
          <div>
            <CardHome
              imgFlagsValue={currentCard.countryInfo.flag}
              textCardCasesValue={currentCard.cases}
              textCardDeathsValue={currentCard.deaths}
              textCardRecoveredValue={currentCard.recovered}
            />
          </div>
        </div>
        <div className="container sm:size-6/12 -ml-12 ">
          <img className="imgBanner sm: mt-0 -ml-8 md:w-72 h-80 ml-8" src="/src/images/imageHome1.png" alt="Girl sick" />
        </div>
      </div>
    </div>
  );
}

export default Home;
