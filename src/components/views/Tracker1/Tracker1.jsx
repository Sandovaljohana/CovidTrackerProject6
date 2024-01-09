import React from 'react';
import  NavbarTracker from '../../molecules/Navbars/NavbarTracker/NavbarTracker'
import '../Tracker1/tracker1.css';
import CardCases from '../../atoms/CardCases/CardCases';
import useFetch from '../../services/UseFetch';
import { useState, useEffect} from 'react';

const Tracker1 = () => {
 
  return (
    <>
    <div className='backgroundTracker'>
      <NavbarTracker /> 
    
    </div>
      
      </>
  );

  };

  
export default Tracker1;
