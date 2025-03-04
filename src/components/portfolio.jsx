import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Portfolio = () => {
    return (

<>
  <div className="container-fluid">
    <h2 className="fw-bold text-center mt-4">Portfolio</h2>
    <p className="text-center">Voici quelques une de mes réalisations</p>
  </div>
  <hr
    className="w-25 p-1 bg-primary mx-auto d-block mt-3"
    style={{ maxWidth: "100%", width: "50%" }}
  />
  {/* cards */}
  <section className="bg-light p-2">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mt-4 d-flex justify-content-center">
          <div className="card hover-card m-3" style={{ width: "20rem" }}>
            <img
              src="./default/images/portfolio/fresh-food.jpg"
              className="card-img-top"
              alt="Fresh food"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Fresh Food</h5>
              <p className="card-text">
                Site de vente de produits frais en ligne
              </p>
              <a href="#" className="btn btn-primary">
                Voir le site
              </a>
            </div>
            <div className="card-footer text-muted text-center">
              Site réalisé avec PHP et MYSQL
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 d-flex justify-content-center">
          <div className="card hover-card m-3" style={{ width: "20rem" }}>
            <img
              src="./default/images/portfolio/restaurant-japonais.jpg"
              className="card-img-top"
              alt="Restaurant japonais"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Restaurant Akira</h5>
              <p className="card-text">
                Site de vente de produits frais en ligne
              </p>
              <a href="#" className="btn btn-primary">
                Voir le site
              </a>
            </div>
            <div className="card-footer text-muted text-center">
              Site réalisé avec Wodpress
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 d-flex justify-content-center">
          <div className="card hover-card m-3" style={{ width: "20rem" }}>
            <img
              src="./default/images/portfolio/espace-bien-etre.jpg"
              className="card-img-top"
              alt="Bien être"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Espace bien-être</h5>
              <p className="card-text">Site de vente de produits cosmétique</p>
              <a href="#" className="btn btn-primary">
                Voir le site
              </a>
            </div>
            <div className="card-footer text-muted text-center">
              Site réalisé avec LARAVEL
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 d-flex justify-content-center">
          <div className="card hover-card m-3" style={{ width: "20rem" }}>
            <img
              src="./default/images/portfolio/seo.jpg"
              className="card-img-top"
              alt="SEO"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">SEO</h5>
              <p className="card-text">
                Amélioration du réfèrencement d'un site e-commerce
              </p>
              <a href="#" className="btn btn-primary">
                Voir le site
              </a>
            </div>
            <div className="card-footer text-muted text-center">
              Utilisation des outils SEO
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 d-flex justify-content-center">
          <div className="card hover-card m-3" style={{ width: "20rem" }}>
            <img
              src="./default/images/portfolio/coder.jpg"
              className="card-img-top"
              alt="API"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Création d'une API</h5>
              <p className="card-text">Création d'une API RESTFULL publique</p>
              <a href="#" className="btn btn-primary">
                Voir le site
              </a>
            </div>
            <div className="card-footer text-muted text-center">
              PHP-SYMFONY
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 d-flex justify-content-center">
          <div className="card hover-card m-3" style={{ width: "20rem" }}>
            <img
              src="./default/images/portfolio/screens.jpg"
              className="card-img-top"
              alt="Maquette"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Maquette d'un site web</h5>
              <p className="card-text">Création du prototype d'un site</p>
              <a href="#" className="btn btn-primary">
                Voir le site
              </a>
            </div>
            <div className="card-footer text-muted text-center">
              Réalisé avec FIGMA
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
);
};

export default Portfolio;

