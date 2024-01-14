import React from 'react';
import Table from '../../molecules/Table/Table';
import Tracker0 from '../Tracker0/Tracker0';
import './tracker2.css';


const Tracker2 = () => {
  return (
    <>
      <div className='tracker2Container'>
        <Tracker0 />
        <div className='tableContainer'>
          <h2 className="">Ajax Data Table - Covid-19 Country Wise State</h2>
        <Table />
        </div>
       
      </div>
    </>

  )
}

export default Tracker2