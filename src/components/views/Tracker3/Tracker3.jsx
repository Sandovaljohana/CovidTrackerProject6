import React from 'react'
import MyTable from '../../molecules/Table/MyTable'
import useFetch from '../../services/UseFetch';


const Tracker3 = () => {
  const url = 'https://disease.sh/v3/covid-19/all';
  const { data } = useFetch(url + "countries");

  return (
    <>
     <div>
    <MyTable useFetch={useFetch}/>
    </div>
    </>
   
  )
}

export default Tracker3