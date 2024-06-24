import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { ReviewContext } from '../Components/ulasan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import profil from '../Assets/img/Pengertian-Freelancer.png';
import back from '../Assets/img/Vector.png';

const UlasanBikaAmbon = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { reviews } = useContext(ReviewContext);

  const handleBackClick = () => {
    navigate(`/detailumkm/${productId}`);
  };

  const filteredReviews = reviews.filter((review) => review.productId === parseInt(productId));

  return (
    <>
      <Navbar />
      <div className="halaman-ulasan_ulasan-bika">
        <div className="header-section">
          <img
            className="icon-share_ulasan-bika"
            alt="Back"
            src={back}
            id="iconShareImage"
            onClick={handleBackClick}
            style={{ cursor: 'pointer' }}
          />
          <b className="ulasan-bika-ambon_ulasan-bika">Ulasan Bika Ambon Rian</b>
        </div>

        <div className="reviews-container">
          {filteredReviews.map((review, index) => (
            <div key={index} className="group-parent_ulasan-bika">
              <img className="group-inner_ulasan-bika" alt="Profile" src={profil} />
              <div className="bintang-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FontAwesomeIcon
                    key={star}
                    icon={faStar}
                    size="1x"
                    color={star <= review.rating ? 'orange' : 'lightgray'}
                  />
                ))}
              </div>
              <div className="salah-satu-bika_ulasan-bika">{review.reviewText}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UlasanBikaAmbon;