import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container-fluid mt-2 p-2 mb-1 bg-dark text-white">
      <div className="row">
        <div className="col-lg-4 col-sm-12 mt-3">
          <h5>William Germain</h5>
          <address className="m-0">
            44 rue Camille St Saêns <br />
            63800 Cournon <br />
            03.24.90.00.00 <br />
            Kookaipersan@gmail.com
          </address>
          <div className="social-icons">
            <a href="https://github.com/Kookaipersan" className="text-decoration-none">
              <FaGithub className="fs-5 me-2" />
            </a>
            <a href="https://x.com/?lang=fr&mx=2" className="text-decoration-none">
              <FaTwitter className="fs-5 me-2" />
            </a>
            <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" className="text-decoration-none">
              <FaLinkedin className="fs-5" />
            </a>
          </div>
        </div>

        <div className="col-lg-4 col-sm-12 mt-3">
          <h5>Liens utiles</h5>
          <ul className="liens list-unstyled">
            <li>
              <Link to="/" className="text-decoration-none text-white hover-bold">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/Services" className="text-decoration-none text-white hover-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-decoration-none text-white hover-bold">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-decoration-none text-white hover-bold">
                Me contacter
              </Link>
            </li>
            <li>
              <Link to="/legal" className="text-decoration-none text-white hover-bold">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-lg-4 col-sm-12 mt-3">
          <h5>Mes dernières réalisations</h5>
          <ul className="liens list-unstyled">
            <li>
              <Link to="/" className="text-decoration-none text-white hover-bold">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/Services" className="text-decoration-none text-white hover-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="text-decoration-none text-white hover-bold">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-decoration-none text-white hover-bold">
                Me contacter
              </Link>
            </li>
            <li>
              <Link to="/legal" className="text-decoration-none text-white hover-bold">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;