import React, {useState} from 'react'
import '../App.css';
import Navbar from '../components/Navbar';
import {BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo,homeObjFour  } from '../components/InfoSection/Data';
import Services from '../components/Services';
import SignIn from '../components/Signin';

const Home = () => {
    
  return (
    <Router>
    <Sidebar/>
      <Navbar/>
      <HeroSection/>
      <InfoSection {...homeObjOne}/>
      <Services/>
      <SignIn/>

    </Router>
  )
}

export default Home