import React from "react";

const Header = ({ scrollToSection, produkRef, faqRef, profilRef }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection(produkRef)}>
                Produk
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection(faqRef)}>
                FAQ
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => scrollToSection(profilRef)}>
                Profil Penjual
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
