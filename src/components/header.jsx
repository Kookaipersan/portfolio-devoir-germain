import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"><small>William</small></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse text-uppercase" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="./index.html"><ins>Home</ins></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline-hover" href="./offre.html">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline-hover" href="./portfolio.html">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline-hover" href="./contact.html">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link underline-hover" href="./mentions-legales.html">Mentions legales</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  );
};

export default Header;