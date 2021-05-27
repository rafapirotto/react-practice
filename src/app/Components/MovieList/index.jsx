import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMovies } from './duck/operations';
import { ERROR, LOADING, SUCCESS } from '../../../common/constants';
import spinner from './assets/spinner.gif';
import error from './assets/error.png';

const propTypes = {
  movies: PropTypes.array.isRequired,
};

const renderMovies = (movies) => (
  <div className="flex mt-8 ml-24 flex-wrap">
    {movies.map(({ poster_url, title }) => (
      <div className="mr-1 mb-4" key={title}>
        <img src={poster_url} alt={title} />
      </div>
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

const MovieList = ({ movieList }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { state, payload: movies } = movieList.status;

    if (state === SUCCESS) {
      setMovies(movies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieList]);

  return (
    <main>
      {renderTitle('My List')}
      {movieList.status.state === SUCCESS && renderMovies(movies)}
      {movieList.status.state === LOADING && renderSpinner()}
      {movieList.status.state === ERROR && renderError()}
    </main>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movieList,
});

MovieList.propTypes = propTypes;

export default connect(mapStateToProps)(MovieList);
