import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/Movie.module.css';

const propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  watchingProgress: PropTypes.bool,
};

const defaultProps = {
  watchingProgress: false,
};

const renderProgressBar = () => {
  const progress = 80;
  // const progress = randomIntegerBetween(1, 100);
  const left = 100 - progress;

  return (
    <div className="flex mt-1">
      <div
        style={{
          width: `${progress}%`,
        }}
        className={styles.currentProgressBar}
      />
      <div
        className={styles.leftProgressBar}
        style={{
          width: `${left}%`,
        }}
      />
    </div>
  );
};

const Movie = ({ url, title, watchingProgress }) => (
  <div className="mr-2 mb-4">
    <img src={url} alt={title} className="max-w-sm max-h-48" />
    {watchingProgress && renderProgressBar()}
  </div>
);

Movie.propTypes = propTypes;
Movie.defaultProps = defaultProps;

export default Movie;
