import React from "react";

const Faq = () => {
  return (
    <section className="py-5 text-center container">
      <h2 className="fw-bold">Pertanyaan yang Sering Diajukan</h2>
      <div className="accordion mt-4" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Apakah kelapa bakar bisa dikirim ke luar kota?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse">
            <div className="accordion-body">
              Saat ini kami hanya melayani pengiriman dalam kota.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              Berapa lama proses pembakaran kelapa?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse">
            <div className="accordion-body">
              Proses pembakaran membutuhkan waktu sekitar 3 jam.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              Apakah ada minimal order untuk pemesanan?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse">
            <div className="accordion-body">
              Minimal order untuk pemesanan adalah 1 buah kelapa.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
