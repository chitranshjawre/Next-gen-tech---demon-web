import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer'
import InfinityLogoSlide from './components/InfinityLogoSlide';
import OurServices from './components/OurServices';
import ItDigital from './components/ItDigital';
import AGlimpse from './components/AGlimpse';
import FullSetGreat from './components/FullSetGreat';
import CardCrousal from './components/CardCrousal';
import StartJourney from './components/StartJourney';
import FormWithAcord from './components/FormWithAcord';
import Next from './components/Next';


function App() {

 
  return (
    <>
     <Header/>
     <Hero/>
     <InfinityLogoSlide/>
     <OurServices/>
     <ItDigital/>
     <AGlimpse/>
     <FullSetGreat/> 
     <CardCrousal/>               
     <StartJourney/>
     <FormWithAcord/>           
     <Footer/>
     <Next/>
    </>
  )
}

export default App
