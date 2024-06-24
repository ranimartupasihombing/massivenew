// src/components/Detailbika.jsx
import React from 'react';
import d1 from '../Assets/img/rian.png';
import d2 from '../Assets/img/ahun.png';
import d3 from '../Assets/img/rika.png';
import d4 from '../Assets/img/santi.png';
import d5 from '../Assets/img/nasywa.png';
import d6 from '../Assets/img/zulaikha.png';
import d7 from '../Assets/img/sari.png';
import d8 from '../Assets/img/gm.png';
import Navbar from './Navbar';
import Footer from './Footer';
import './Index.css';

const Detailbika = () => {
  const products = [
    { id: 1, name: 'Bika Ambon Rian', description: 'Bika Ambon Rian adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d1 },
    { id: 2, name: 'Bika Ambon Ahun', description: 'Bika Ambon Ahun adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d2 },
    { id: 3, name: 'Bika Ambon Rika', description: 'Bika Ambon Rika adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d3 },
    { id: 4, name: 'Bika Ambon Santi', description: 'Bika Ambon Santi adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d4 },
    { id: 5, name: 'Bika Ambon Nasywa', description: 'Bika Ambon Nasywa adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d5 },
    { id: 6, name: 'Bika Ambon Zulaikha', description: 'Bika Ambon Zulaikha adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d6 },
    { id: 7, name: 'Bika Ambon Ambon Sari', description: 'Bika Ambon Ambon Sari adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d7 },
    { id: 8, name: 'Bika Ambon Gaja Mada', description: 'Bika Ambon Gaja Mada adalah kue tradisional Indonesia yang terkenal dengan teksturnya yang lembut dan rasa manisnya yang khas.', img: d8 },
  ];

  const selengkapnya = (id) => {
    window.location.href = `/detailumkm/${id}`; // Redirect to the specific UMKM detail page with ID
  };

  return (
    <>
      <Navbar />
      <div className="detail-container_detailbika">
        <h2 className="detail-title_detailbika">Bika Ambon</h2>
        <p className="detail-description_detailbika">Bika Ambon adalah kue tradisional khas Medan, Indonesia. Kue ini terbuat dari bahan-bahan seperti tepung tapioka, telur, gula, dan santan</p>

		{products.map((product) => (
  <div key={product.id} className="product-detail_detailbika">
    <img src={product.img} alt={product.name} className="product-image_detailbika" />
    <div className="product-info_detailbika">
      <h3>{product.name}</h3>
      <button className="detail-button_detailbika" onClick={() => selengkapnya(product.id)}>Selengkapnya &gt;</button>
    </div>
  </div>
))}


      </div>
      <Footer />
    </>
  );
};

export default Detailbika;