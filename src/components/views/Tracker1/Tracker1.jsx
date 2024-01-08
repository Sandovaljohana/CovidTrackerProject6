import React from 'react';
import CardHome from '../../atoms/Cards/CardHome';
import  NavbarTracker from '../../molecules/Navbars/NavbarTracker/NavbarTracker'
import './tracker1.css';

const Tracker1 = () => {
 
  return (
    <>
    <div className='backgroundTracker'>
      <NavbarTracker /> 
    <CardHome />
    </div>
      
      </>
  );

  };

  
export default Tracker1;
