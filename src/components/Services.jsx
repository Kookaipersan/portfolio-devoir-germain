import React from 'react';

const Services = () => {
  return (
    <>
    <div className="image-container position-relative">
  <img
    src= "/src/assets/images/banner.jpg"
    className="w-100 min-vh-50"
    alt="banner"
  />
</div>
    
    <div className="container-fluid">
      <h2 className="fw-bold text-center mt-4">Mon offre de services</h2>
      <p className="text-center">
        Voici les prestations sur lesquelles je peux intervenir
      </p>
    </div>
    <hr
      className="w-25 p-1 bg-primary mx-auto d-block mt-3"
      style={{ maxWidth: "100%", width: "50%" }}
    />
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-12 p-4 d-flex justify-content-center">
          <div className="card hover-card h-100" style={{ width: "18rem" }}>
            <i className="bi bi-brush text-center text-primary fs-1 mt-4" />
            <h5 className="text-center mt-4 fw-bold">UX Design</h5>
            <div className="card-body">
              <p className="card-text">
                <small>
                  L'UX design est une discipline qui consiste à concevoir des
                  produits (site web, application mobile, logiciels, objets
                  connectés, etc.) en plaçant l'utilisateur au centre de la
                  préoccupation. L'objectif est de rendre l'expérience utilisateur
                  la plus fluide et agréable possible.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 p-4 d-flex justify-content-center">
          <div className="card hover-card h-100" style={{ width: "18rem" }}>
            <i className="bi bi-code-slash text-center text-primary fs-1 mt-4" />
            <h5 className="text-center mt-4 fw-bold">Développement Web</h5>
            <div className="card-body">
              <p className="card-text">
                <small>
                  Le développement de site web consiste à créer des sites internet
                  en utilisant des langages de programmation (HTML, CSS,
                  javascript, PHP, etc) et des framworks (Bootstrap, React,
                  Angular, etc.)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 p-4 d-flex justify-content-center">
          <div className="card hover-card h-100" style={{ width: "18rem" }}>
            <i className="bi bi-search text-center text-primary fs-1 mt-4" />
            <h5 className="text-center mt-4 fw-bold ">Référencement</h5>
            <div className="card-body">
              <p className="card-text">
                <small>
                  Le référencement naturel (SEO) est une technique qui constiste à
                  optimiser un site web pour le faire remonter dans les résultats
                  des moteurs de recherche (Google, Bing, Yahoo, etc.) lobjectif
                  est d'attirer un maximum de visiteurs qualifiés sur le site.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  

    
  );
};

export default Services;