import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Legale = () => {
  return (
    <>
  <div className="container-fluid">
    <h2 className="fw-bold text-center mt-4">Mentions légales</h2>
  </div>
  <hr
    className="w-25 p-1 bg-primary mx-auto d-block mt-3"
    style={{ maxWidth: "100%", width: "50%" }}
  />
  <div className="accordion" id="accordionPanelsStayOpenExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          Editeur du Site
        </button>
      </h2>
      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body d-flex flex-column mb-2">
          <i className="bi bi-card-text">
            <span className="ms-3">44 rue Camille</span>
          </i>
          <i className="bi bi-geo-alt">
            <span className="ms-3">63800 Cournon, France</span>
          </i>
          <i className="bi bi-tablet">
            <span className="ms-3"> 06.24.90.00.00</span>
          </i>
          <i className="bi bi-envelope-at">
            <span className="ms-3">william.germain@club-internet.fr</span>
          </i>
        </div>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseTwo"
      >
        Hebergeur
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseTwo"
      className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingTwo"
    >
      <div className="accordion-body">a remplir</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseThree"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseThree"
      >
        Crédit
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseThree"
      className="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingThree"
    >
      <div className="accordion-body">
        <a href="https://www.flaticon.com/">Lien pour le Favicon</a>
        <br />
        <a href="https://pixabay.com/fr/">Liens vers Pixabay pour les images</a>
      </div>
    </div>
  </div>
</>

    
  );
};

export default Legale;
