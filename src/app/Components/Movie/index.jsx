import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  watchingProgress: PropTypes.number,
};

const defaultProps = {
  watchingProgress: null,
};

const randomIntegerBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const renderProgressBar = () => {
  const progress = randomIntegerBetween(1, 100);
  const left = 100 - progress;

  return (
    <div style={{ display: 'flex' }} className="mt-1">
      <div
        style={{
          background: 'linear-gradient(360deg, #0578FF 0%, #0578FF 100%)',
          borderRadius: '100px 0px 0px 100px',
          height: '7px',
          width: `${progress}%`,
        }}
      />
      <div
        style={{
          background: '#D8D8D8',
          borderRadius: '0px 100px 100px 0px',
          height: '7px',
          width: `${left}%`,
        }}
      />
    </div>
  );
};

const Movie = ({ url, title, watchingProgress }) => (
  <>
    <div className="mr-2 mb-4">
      <img src={url} alt={title} className="max-w-sm max-h-48" />
      {watchingProgress && renderProgressBar()}
    </div>
  </>
);

Movie.propTypes = propTypes;
Movie.defaultProps = defaultProps;

export default Movie;
