import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies } from './duck/operations';
import { ERROR, LOADING, SUCCESS } from '../../../common/constants';
import spinner from './assets/spinner.gif';
import error from './assets/error.png';
import Movie from '../Movie';

const propTypes = {
  movies: PropTypes.array.isRequired,
};

const renderMovies = (movies) => (
  <div className="flex mt-8 ml-24 flex-wrap">
    {movies.map(({ poster_url, title }) => (
      <Movie url={poster_url} title={title} />
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

const MovieList = ({ movieList }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const { state, content } = movieList;

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state === SUCCESS) {
      setMovies(content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieList]);

  return (
    <main>
      {renderTitle('My List')}
      {renderComponentConditionally(state === SUCCESS, () => renderMovies(movies))}
      {renderComponentConditionally(state === LOADING, () => renderSpinner())}
      {renderComponentConditionally(state === ERROR, () => renderError())}
    </main>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movieList,
});

MovieList.propTypes = propTypes;

export default connect(mapStateToProps)(MovieList);
