import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Skills } from "./components/skills";
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { AboutMe } from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
       


    </div>
  );
}

export default App;
