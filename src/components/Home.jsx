import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaMapMarkerAlt, FaIdCard, FaBox, FaUserPlus, FaUsers } from 'react-icons/fa';


const Home = () => {
  return (
    <div>
      <div className="image-container position-relative">
        <img
          className="img-fluid"
          src="/src/assets/images/hero-bg.jpg"
          alt="hero-bg"
        />
        <div className="text-one position-absolute top-50 start-50 translate-middle text-center text-white">
          <h1>Bonjour, je suis William Germain</h1>
          <h2>Développeur web full stack</h2>
          {/* Bouton qui déclenche la modal */}
          <button
            type="button"
            className="btn btn-danger mt-3 p-1"
            data-bs-toggle="modal"
            data-bs-target="#plus"
          >
            En savoir plus
          </button>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="plus"
        tabIndex={-1}
        aria-labelledby="titre"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content bg-dark">
            <div className="modal-header">
              <h5 className="modal-title text-white" id="titre">
                Mon profil GitHub
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fermer"
              />
            </div>
            <div className="modal-body d-flex justify-content-around text-white">
              <img
                src="/src/assets/images/vidnoz_cartoon_1738241058716.jpg"
                alt="Image GitHub"
                style={{ maxWidth: 250, marginRight: 25 }}
              />
              <ul className="list-unstyled opacity-70">
                <li className="custom-small-font content">
                  <i className="bi bi-geo-alt">
                    <a href="#">
                      <span className="ms-3">William Germain</span>
                    </a>
                  </i>
                </li>
                <li className="custom-small-font content mt-2">
                  <i className="bi bi-person-vcard">
                    <span className="ms-3">identité de william</span>
                  </i>
                </li>
                <li className="custom-small-font content mt-2">
                  <i className="bi bi-box-seam">
                    <span className="ms-3">Repositories: 4</span>
                  </i>
                </li>
                <li className="custom-small-font content mt-2">
                  <i className="bi bi-person-add">
                    <span className="ms-3">Followers: 16</span>
                  </i>
                </li>
                <li className="custom-small-font content mt-2">
                  <i className="bi bi-people-fill">
                    <span className="ms-3">following: 0</span>
                  </i>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container-md border border-1 mt-5 shadow p-2">
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-4">
            <h3 className="border-bottom border-3 border-primary p-2">A propos</h3>
            <img
              src="src/assets/images/john-doe-about.jpg"
              className="mt-4 mb-2 img-fluid"
              alt="A propos"
            />
            <p className="text">
              Compétences clés en gestion d'équipes, optimisation des performances
              commerciales, gestion des stocks et des approvisionnements. <br />{" "}
              Elle excelle dans la planification et le suivi des objectifs, la
              formation et le développement des collaborateurs, ainsi que la gestion
              des relations clients. Son expertise comprend également la gestion
              financière, la mise en place de stratégies marketing et la maîtrise
              des outils de gestion.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 mt-4">
            <h3 className="border-bottom border-3 border-primary p-2">
              Mes compétences
            </h3>
            {/* Compétences */}
            <div className="mb-3">
              <p>HTML 5 80%</p>
              <div className="progress" id="progress1">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  80%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>CSS 3 80%</p>
              <div className="progress" id="progress2">
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  80%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>JAVASCRIPT 70%</p>
              <div className="progress" id="progress3">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "70%" }}
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  70%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>PHP 60%</p>
              <div className="progress" id="progress4">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "60%" }}
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  60%
                </div>
              </div>
            </div>
            <div className="mb-3">
              <p>REACT 50%</p>
              <div className="progress" id="progress5">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
