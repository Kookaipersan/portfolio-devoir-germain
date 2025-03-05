import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import de React Router
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Legale from './components/Legale';

const App = () => {
  return (
    <Router>
      <Header /> {/* Afficher l'entête sur toutes les pages */}
      <Routes> {/* Gérer les différentes pages de votre application */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legale />} />
      </Routes>
      <Footer /> {/* Afficher le footer sur toutes les pages */}
    </Router>
  );
};

export default App;
