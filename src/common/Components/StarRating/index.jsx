import React from 'react';
import PropTypes from 'prop-types';

import semiFilledStar from './assets/semi-filled-star.png';
import filledStar from './assets/filled-star.png';

const propTypes = {
  filledStars: PropTypes.number,
  halfFilledStars: PropTypes.number,
};

const defaultProps = {
  filledStars: 0,
  halfFilledStars: 0,
};

const renderFilledStars = (numberOfStars) => {
  let filledStars = [];

  for (let index = 0; index < numberOfStars; index++) {
    filledStars.push(
      <img src={filledStar} alt="filled-star" className="px-1" key={`filled-star-${index + 1}`} />,
    );
  }

  return filledStars;
};

const renderHalfFilledStars = (numberOfStars) => {
  let semiFilledStars = [];

  for (let index = 0; index < numberOfStars; index++) {
    semiFilledStars.push(
      <img
        src={semiFilledStar}
        alt="half-filled-star"
        className="px-1"
        key={`half-filled-star-${index + 1}`}
      />,
    );
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

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;

export default StarRating;
