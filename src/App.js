import logo from './logo.svg';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionSkills } from './components/SectionSkills';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SectionSkills/>
    </>
  );
}

export default App;
