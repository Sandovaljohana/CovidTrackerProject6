import React from 'react'
import CardCases from '../../atoms/CardCases/CardCases'
import useFetch from '../../services/UseFetch';
import '../Tracker1/tracker1.css';
import NavbarTracker from '../../molecules/Navbars/NavbarTracker/NavbarTracker';


const Tracker2 = () => {
  const url = 'https://disease.sh/v3/covid-19/';
  const { data } = useFetch(url + "all");
  if (data === null){
    return <>Loading</>
  }
  return (
    <div className='flex flex-row'>
      <NavbarTracker />
      <CardCases
    key="cases"
    cardsBgStyle="cardsBgStyleTotal"
    cardText="Total Case"
    smallTextValue={`+ ${data.todayCases}`}
    globalTextDataValue={data.cases}
    />
    </div>
  )
}

export default Tracker2