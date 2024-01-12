import React from 'react';
import  NavbarTracker from '../../molecules/Navbars/NavbarTracker/NavbarTracker'
import '../Tracker1/tracker1.css';
import CardCases from '../../atoms/CardCases/CardCases';
import useFetch from '../../services/UseFetch';
import { useState, useEffect} from 'react';
import Tracker2 from '../Tracker2/Tracker2';
import Dropdown from '../../atoms/Dropdown/Dropdown';

const Tracker1 = () => {
 
  return (
    <>
    <div className='backgroundTracker'>
      <Tracker2 />
      <div className="tracker1Container">
      <Dropdown />
      </div>
    </div>
      
      </>
  );

  };

  
export default Tracker1;
