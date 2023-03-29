import './App.css';
import { useState,useEffect } from 'react';
// import Navbar from './components/Navbar';
// import Pagination from './components/Pagination';
// import Cards from './components/Cards';
// import Section from './components/Section';
// import RightSection from './components/RightSection';
// import Animation from './components/Animation';
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


//Used dummy api
// const api = "https://jsonplaceholder.typicode.com/photos";



function App() {
  
  // kept loggedIn variable true to show functionalities of add and delete images buttons

  /*
  const [loggedIn,setLoggedIn]= useState(true);
  const [key,setKey] = useState("");

  const searchtext = (text) =>{
        setKey(text);
  }


*/      
  return (<div
    >
      {/*   style={{ */}
      {/*  "overflow":"hidden"}} */}
    {/* <div className="App">
     
     <Navbar func = {searchtext}></Navbar>
     <div className="main flex flex-wrap ">
      
        {loggedIn == true && <RightSection/>}
<Pagination API = "https://jsonplaceholder.typicode.com/photos" numberOfPostsPerPage={9}/>
      


     </div>
     
    </div> */}

    {/* <Animation></Animation>
     */}
     
     
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

{/* <NavbarTail/> */}
     
      </div>
  );
}

export default App;
