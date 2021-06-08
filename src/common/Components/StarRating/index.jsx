import React from 'react';

import semiFilledStar from './assets/semi-filled-star.png';
import filledStar from './assets/filled-star.png';

const renderFilledStars = (numberOfStars) => {
  let filledStars = [];

  for (let index = 0; index < numberOfStars; index++) {
    filledStars.push(<img src={filledStar} alt="filled-star" className="px-1" />);
  }

  return filledStars;
};

const renderHalfFilledStars = (numberOfStars) => {
  let semiFilledStars = [];

  for (let index = 0; index < numberOfStars; index++) {
    semiFilledStars.push(<img src={semiFilledStar} alt="half-filled-star" className="px-1" />);
  }

  return semiFilledStars;
};

const StarRating = ({ filledStars, halfFilledStars }) => {
  return (
    <div className="ml-12 flex items-center">
      {renderFilledStars(filledStars)}
      {renderHalfFilledStars(halfFilledStars)}
    </div>
  );
};

export default StarRating;
