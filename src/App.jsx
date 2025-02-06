import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook,FaMapMarkerAlt } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Produk from "./components/Produk";
import Faq from "./components/Faq";
import Profil from "./components/Profil";
import Header from "./components/Header";
import './App.css'; // Pastikan file ini sudah diimport


const App = () => {
  // Buat referensi untuk setiap section
  const produkRef = useRef(null);
  const faqRef = useRef(null);
  const profilRef = useRef(null);
  

  // Fungsi untuk melakukan scroll ke section yang dituju
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-light text-dark" style={{ width: "100vw", minHeight: "100vh" }}>
      {/* Header */}
      <Header scrollToSection={scrollToSection} produkRef={produkRef} profilRef={profilRef} faqRef={faqRef} />

      {/* Hero Section */}
      <section
        className="vh-100 w-100 d-flex flex-column align-items-center justify-content-center text-center bg-dark text-white"
        style={{
          backgroundImage: "url('./kelapa-bakar.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="display-4 fw-bold">
          Kelapa Bakar <span className="fw-bold">Pak Muhdi</span>, <br /> Asli Segar
        </h1>
        <p className="lead">Minuman sehat dengan rasa khas, kaya manfaat!</p>

        <p className="lead" style={{ fontSize: "1.1rem", color: "#fff", fontStyle: "italic" }}>
  <FaMapMarkerAlt className="me-2" />
  <a 
    href="https://maps.app.goo.gl/YH8hmhCqM9NQoCpMA" 
    target="_blank" 
    rel="noopener noreferrer"
    style={{ color: "#fff", textDecoration: "underline" }}
  >
    Teluk Jambe, Karawang, Jawa Barat
  </a>
</p>

        <a href="#produk" className="btn btn-success btn-lg mt-3" onClick={() => scrollToSection(produkRef)}>
          Lihat Produk
        </a>
        <div className="mt-3">
          <a
            href="https://www.facebook.com/profile.php?id=100093544106697"
            className="text-white me-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </section>

    

      {/* Produk Section */}
      <div ref={produkRef}>
        <Produk />
      </div>

      {/* FAQ Section */}
      <div ref={faqRef}>
        <Faq />
      </div>

  {/* Profil Penjual */}
  <div ref={profilRef}>
        <Profil />
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-2">
        <p className="mb-0">&copy; 2025 Kelapa Bakar. Designed & Developed by Felbi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
