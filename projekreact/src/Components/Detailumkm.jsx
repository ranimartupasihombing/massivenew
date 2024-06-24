import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaBookmark, FaClock, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import { ProductContext } from './Product';
import { useBookmark } from './BookmarkContext';
import Navbar from './Navbar';
import Footer from './Footer';
import imgumkm from '../Assets/img/rian.png'; // Fallback image

const Detailumkm = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { bookmarkedItems, toggleBookmark } = useBookmark();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = products.find((p) => p.id === parseInt(id));
    setProduct(productData);
  }, [id, products]);

  const isBookmarked = product && bookmarkedItems.some((item) => item.id === product.id);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="detail-umkm">
        <b className="mamank-kuliner">Mamank kuliner</b>
        <img className="img-umkm" alt={product.name} src={imgumkm} />
        <div className="rectangle-parent-umkm">
          <div className="group-child-umkm"></div>
        </div>
        <div className="bika-ambon-rian-umkm">
          <b>{product.name}</b>
          <button className="bookmark-button" onClick={() => toggleBookmark(product)} style={{ background: 'none', border: 'none' }}>
            <FaBookmark color={isBookmarked ? 'gold' : 'grey'} size={24} />
          </button>
        </div>
        <div className="rp-35000">Rp {product.priceRange}</div>
        <div className="detail-umkm-child"></div>

        <div className="lihat-ulasan-wrapper">
          <b className="lihat-ulasan" id="lihatUlasanText" onClick={() => window.location.href = `/ulasanbikaambon/${product.id}`}>Lihat ulasan</b>
        </div>

        <div className="beri-ulasan-wrapper">
          <b className="beri-ulasan" id="beriUlasanText" onClick={() => window.location.href = `/tulisulasan/${product.id}`}>Beri ulasan</b>
        </div>
        <b className="informasi-kontak">Informasi Kontak</b>
        <div className="divkontak">{product.contact}</div>
        <div className="jl-sumatera-no78-umkm">
          <FaMapMarkerAlt /> {product.address}
        </div>
        <div className="bika-ambon-adalah-umkm">
          <FaInfoCircle /> {product.description}
        </div>
        <div className="divjam">
          <FaClock /> {product.hours}
        </div>

        <b className="lihat-di-maps-container" id="lihatDiMaps">Lihat di
          <span className="privacy-policy" onClick={() => window.location.href = '/maps'}>Maps</span>
        </b>
      </div>
      <Footer />
    </>
  );
};

export default Detailumkm;