import React from 'react';
import { Link } from 'react-router-dom'; 
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">William</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-uppercase" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline-hover" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline-hover" to="/portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline-hover" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link underline-hover" to="/legal">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
