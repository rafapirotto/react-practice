import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const Movie = ({ url, title }) => (
  <div className="mr-1 mb-4" key={title}>
    <img src={url} alt={title} />
  </div>
);

Movie.propTypes = propTypes;

export default Movie;
