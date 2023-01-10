import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingStars = () => {
  const [rate, setRating] = useState(0);
  
  const handleRating = () => {
    setRating(rate);
    
  };

  return (
    <div className="inline-flex">
      <Rating
        onClick={handleRating}
      />
    </div>
  );
};

export default RatingStars;
