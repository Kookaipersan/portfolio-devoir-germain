import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components//Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Legale from './components/Legale';


const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Portfolio />
      <Contact />
      <Legale />
      

    </div>
  );
};

export default App;
