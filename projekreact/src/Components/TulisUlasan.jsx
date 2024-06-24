import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import { ReviewContext } from '../Components/ulasan';
import backArrowImage from '../Assets/img/Vector.png';

const TulisUlasan = () => {
  const { productId } = useParams();
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const navigate = useNavigate();
  const { addReview } = useContext(ReviewContext);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReviewText = (event) => {
    setReviewText(event.target.value);
  };

  const saveReview = () => {
    const newReview = { productId: parseInt(productId), rating, reviewText };
    addReview(newReview);
    navigate(`/ulasanbikaambon/${productId}`);
  };

  return (
    <>
      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
        <div style={{
          marginTop: '50px',
          padding: '40px',
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'white',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <img src={backArrowImage} alt="Back" style={{ width: '30px', height: '30px', cursor: 'pointer' }} onClick={() => navigate(-1)} />
            <h2 style={{ fontSize: '35px', marginLeft: '20px' }}>Ulasan Bika Ambon Rian</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[1, 2, 3, 4, 5].map((star) => (
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                size="2x"
                color={star <= rating ? 'orange' : 'lightgray'}
                onClick={() => handleRating(star)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
          <textarea
            value={reviewText}
            onChange={handleReviewText}
            style={{
              width: '100%',
              height: '200px',
              marginTop: '20px',
              padding: '20px',
              borderRadius: '5px',
              border: '1px solid lightgray',
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif'
            }}
            placeholder="Tulis ulasan Anda di sini..."
          />
          <button
            onClick={saveReview}
            style={{
              marginTop: '20px',
              padding: '15px 30px',
              backgroundColor: 'orange',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Simpan ulasan
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TulisUlasan;