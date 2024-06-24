import React, { createContext, useState } from 'react';

const ReviewContext = createContext();

const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([
    {
      productId: 1, // Add productId to the initial review
      rating: 4,
      reviewText: 'Salah satu Bika ambon enak di medan. Harganya jg terjangkau. Cocok buat oleh-oleh'
    }
  ]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <ReviewContext.Provider value={{ reviews, addReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export { ReviewContext, ReviewProvider };