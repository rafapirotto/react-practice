import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Movie = ({ url, alt }) => (
  <div className="mr-1">
    <img src={url} alt={alt} />
  </div>
);

Movie.propTypes = propTypes;

export default Movie;
