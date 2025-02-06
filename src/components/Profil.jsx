import React from "react";
import fotoPenjual from '../assets/Images/fotoPenjual.jpg';

const Profil = () => {
  return (
    <section id="profil" className="py-5 text-center container">
      <h2 className="fw-bold">Tentang Penjual</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4">
            <img
              src={fotoPenjual} 
              className="card-img-top rounded-circle mx-auto d-block"
              alt="Penjual"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h3 className="h5 fw-semibold">Pak Muhdi</h3>
              <p className="text-muted">
                Pak Muhdi adalah seorang pengusaha UMKM yang menjual Varian Kelapa yang mempunyai cita rasa yang khas
                dan tentunya dengan harga yang terjangkau tapi tetap dengan kualitas yang baik.
              </p>
              {/* <a href="https://wa.me/6281234567890" className="btn btn-success">
                Hubungi via WhatsApp
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profil;
