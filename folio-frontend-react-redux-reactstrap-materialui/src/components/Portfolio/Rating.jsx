import React, { useState } from 'react';
import RatingStars from 'react-rating-stars-component';
// import 'react-rating-stars-component/dist/react-rating-stars-component.css';

const Rating = () => {
    const [rating, setRating] = useState(0);
  
    const handleRating = (value) => {
      setRating(value);
    };
  
    return (
      <RatingStars
        count={5}
        size={24}
        activeColor="#ffd700"
        value={rating}
        onChange={handleRating}
      />
    );
  };

  export default Rating
  