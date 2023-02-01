import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo,homeObjFour  } from './components/InfoSection/Data';
import Services from './components/Services';
import SigninPage from './pages/signin';
import Footer from './components/Footer';


function App() {
  return (
    <Router>

    <Sidebar/>
      <Navbar/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <Footer/>
    </Router>
  );
}

export default App;
