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

const renderStars = (numberOfFilledStars, numberOfHalfFilledStars) => {
  let stars = [];

  for (let index = 0; index < numberOfFilledStars + numberOfHalfFilledStars; index++) {
    const isFilledStar = index < numberOfFilledStars;

    stars.push(
      <img
        src={isFilledStar ? filledStar : semiFilledStar}
        alt={`${isFilledStar ? 'filled' : 'half-filled'}-star`}
        className="px-1"
        key={`${isFilledStar ? 'filled-star' : 'half-filled-star'}-${index + 1}`}
      />,
    );
  }
  return stars;
};

const StarRating = ({ filledStars, halfFilledStars }) => (
  <div className="ml-12 flex items-center">{renderStars(filledStars, halfFilledStars)}</div>
);

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;

export default StarRating;
