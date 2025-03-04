import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Contact = () => {
    return (



<>
  <div className="container-fluid">
    <h2 className="fw-bold text-center mt-4">Contact</h2>
    <p className="text-center">
      Pour me contacter en vue d'un entretien ou d'une future collaboration,
      merci de remplir le formulaire de contact.
    </p>
  </div>
  <hr
    className="w-25 p-1 bg-primary mx-auto d-block mt-3"
    style={{ maxWidth: "100%", width: "50%" }}
  />
  <div className="container-md border border-1 mt-5 shadow p-1">
    <div className="row">
      <div className="col-lg-6 col-md-12 mt-4">
        <h3 className="border-bottom border-3 border-primary p-1">
          Formulaire de contact
        </h3>
        <form className="mt-2">
          <p>
            <label htmlFor="nom" className="form-label" />
            <input
              type="text"
              name="nom"
              id="nom"
              className="form-control"
              placeholder="votre nom"
            />
            <label htmlFor="email" className="form-label" />
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              placeholder="Votre adresse email"
            />
            <label htmlFor="phone" className="form-label" />
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="votre numéro de téléphone"
            />
            <label htmlFor="sujet" className="form-label" />
            <input
              type="text"
              name="sujet"
              id="sujet"
              className="form-control"
              placeholder="Sujet"
            />
          </p>
          <div className="form-floating h">
            <textarea
              className="form-control"
              placeholder="Votre message"
              id="floatingTextarea2"
              style={{ height: 180 }}
              defaultValue={""}
            />
            <label htmlFor="floatingTextarea2" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary mt-3">
              Envoyer
            </button>
          </div>
        </form>
      </div>
      <div className="col-lg-6 col-md-12 mt-3">
        <h3 className="border-bottom border-3 border-primary p-2 ">
          Mes coordonnées
        </h3>
        <div className="mt-5">
          <h5>William Germain</h5>
          <address>
            <div className="d-flex flex-column mb-2">
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
          </address>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d44545.65673145995!2d3.2212228773936253!3d45.749070055582756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1739289627429!5m2!1sfr!2sfr"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>
);
};

export default Contact;
