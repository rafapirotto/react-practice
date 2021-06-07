import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ERROR, LOADING, SUCCESS } from '../../../common/constants';

import spinner from '../../../common/assets/spinner.gif';
import error from '../../../common/assets/error.png';
import Movie from '../Movie';

const propTypes = {
  movies: PropTypes.array,
  state: PropTypes.string,
  title: PropTypes.string.isRequired,
  watchingProgress: PropTypes.bool,
};

const defaultProps = {
  state: null,
  movies: [],
  watchingProgress: false,
};

const renderMovies = (movies, watchingProgress) => (
  <div className="flex mt-8 ml-24 overflow-auto">
    {movies.map(({ poster_url, title, id }) => (
      <Link to={`trailers/${id}`} key={id}>
        <Movie url={poster_url} title={title} id={id} watchingProgress={watchingProgress} />
      </Link>
    ))}
  </div>
);

const renderTitle = (title) => (
  <div>
    <h1 className="ml-24 text-3xl font-medium">{title}</h1>
  </div>
);

const renderSpinner = () => (
  <div className="mt-40 flex justify-center">
    <img src={spinner} alt="spinner" />
  </div>
);

const renderError = () => (
  <div className="mt-20 flex justify-center">
    <img src={error} alt="error" />
  </div>
);

const renderComponentConditionally = (condition, callback) => condition && callback();

const MovieList = ({ movies, state, title, watchingProgress }) => {
  return (
    <main>
      {renderTitle(title)}
      {renderComponentConditionally(state === SUCCESS, () =>
        renderMovies(movies, watchingProgress),
      )}
      {renderComponentConditionally(state === LOADING, () => renderSpinner())}
      {renderComponentConditionally(state === ERROR, () => renderError())}
    </main>
  );
};

MovieList.propTypes = propTypes;
MovieList.defaultProps = defaultProps;

export default MovieList;
