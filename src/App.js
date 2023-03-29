import './App.css';
import { useState,useEffect } from 'react';
import NavbarRoll from './components/NavbarRoll';
import VideoComp from './components/VideoComp';
import SchemeStrip from './components/SchemeStrip';
import DataStrip from './components/DataStrip';
import CarsBanner from './components/CarsBanner';
import TemplateStrip from './components/TemplateStrip';
import PatentStrip from './components/PatentStrip';
import MapStrip from './components/MapStrip';
import ButtonStrip from './components/ButtonStrip';
import Expectation from './components/Expectation';
import Gravel from './components/Gravel';
import IndustryStrip from './components/IndustryStrip';
import InterestStrip from './components/InterestStrip';
import Footer from './components/Footer';
import NavbarTail from './components/NavbarTail';






function App() {
  
 
  return (<div
    >
      
     
     
    <div className='bg-white'>
      
       <VideoComp/>
      

     <SchemeStrip/>
    <DataStrip/>
    <CarsBanner/>
    <TemplateStrip/>
    <hr/>
    <PatentStrip/>
    <MapStrip/>
    <ButtonStrip/>
    <hr/>
    <Expectation/>
    <Gravel/>
    <IndustryStrip/>
    <InterestStrip/>
      </div>
      
     
      <Footer/>


     
      </div>
  );
}

export default App;
