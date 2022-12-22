import logo from './logo.svg';
import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SectionSkills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <SectionSkills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
