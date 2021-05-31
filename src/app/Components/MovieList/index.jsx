import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ERROR, LOADING, SUCCESS } from '../../../common/constants';

import spinner from '../../../common/assets/spinner.gif';
import error from '../../../common/assets/error.png';
import Movie from '../Movie';

const propTypes = {
  movies: PropTypes.array.isRequired,
  state: PropTypes.string,
};

const defaultProps = {
  state: null,
};

const renderMovies = (movies) => (
  <div className="flex mt-8 ml-24 flex-wrap">
    {movies.map(({ poster_url, title, id }) => (
      <Link to={`trailers/${id}`} key={id}>
        <Movie url={poster_url} title={title} id={id} />
      </Link>
    ))}
  </div>
);

const renderTitle = (title) => (
  <div>
    <h1 className="ml-24 text-3xl font-semibold">{title}</h1>
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

const MovieList = ({ movies, state }) => {
  return (
    <main>
      {renderTitle('My List')}
      {renderComponentConditionally(state === SUCCESS, () => renderMovies(movies))}
      {renderComponentConditionally(state === LOADING, () => renderSpinner())}
      {renderComponentConditionally(state === ERROR, () => renderError())}
    </main>
  );
};

MovieList.propTypes = propTypes;
MovieList.defaultProps = defaultProps;

export default MovieList;
