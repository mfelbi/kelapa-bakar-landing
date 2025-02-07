import React from "react";
import { FaFire, FaLeaf, FaCheckCircle, FaWhatsapp } from "react-icons/fa";
import kelapaBakarCupatMerah from '../assets/Images/Cupatmerah.jpeg';
import kelapaBakarBiasa from '../assets/Images/Kelapabakarbiasa.jpg';
import kelapaTidakDibakar from '../assets/Images/Kelapabiasa.jpg';

const Produk = () => {
  const whatsappNumber = "+6285777673110";

  return (
    <section id="produk" className="py-5 text-center container">
      <h2 className="fw-bold">Produk Kami</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img src={kelapaBakarCupatMerah} className="card-img-top" alt="Kelapa Bakar Cupat Merah" />
            <div className="card-body">
              <h3 className="h5 fw-semibold"><FaFire /> Kelapa Bakar Cupat Merah</h3>
              <p className="text-muted">Kelapa bakar dengan daging merah yang lebih manis dan kaya manfaat.</p>
              <a href={`https://wa.me/${whatsappNumber}?text=Saya%20ingin%20pesan%20Kelapa%20Bakar%20Cupat%20Merah`} className="btn btn-success w-100 mt-2"
               target="_blank" // Menambahkan target="_blank" agar membuka di tab baru
               rel="noopener noreferrer" // Untuk alasan keamanan (optional, tapi disarankan)
              >
                <FaWhatsapp /> Pesan Sekarang
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img src={kelapaBakarBiasa} className="card-img-top" alt="Kelapa Bakar Biasa" />
            <div className="card-body">
              <h3 className="h5 fw-semibold"><FaLeaf /> Kelapa Bakar Biasa</h3>
              <p className="text-muted">Kelapa bakar dengan rasa klasik yang selalu digemari.</p>
              <a href={`https://wa.me/${whatsappNumber}?text=Saya%20ingin%20pesan%20Kelapa%20Bakar%20Biasa`} className="btn btn-success w-100 mt-2"
               target="_blank" // Menambahkan target="_blank" agar membuka di tab baru
               rel="noopener noreferrer" // Untuk alasan keamanan (optional, tapi disarankan)
              >
                <FaWhatsapp /> Pesan Sekarang
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <img src={kelapaTidakDibakar} className="card-img-top" alt="Kelapa Tidak Dibakar" />
            <div className="card-body">
              <h3 className="h5 fw-semibold"><FaCheckCircle /> Kelapa Tidak Dibakar</h3>
              <p className="text-muted">Alternatif segar bagi yang ingin menikmati kelapa tanpa proses bakar.</p>
              <a href={`https://wa.me/${whatsappNumber}?text=Saya%20ingin%20pesan%20Kelapa%20Tidak%20Dibakar`} className="btn btn-success w-100 mt-2"
               target="_blank" // Menambahkan target="_blank" agar membuka di tab baru
               rel="noopener noreferrer" // Untuk alasan keamanan (optional, tapi disarankan)
              >
                <FaWhatsapp /> Pesan Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Produk;

