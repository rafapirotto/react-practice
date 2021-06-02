import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovies } from './duck/operations';
import { SUCCESS } from '../../../common/constants';
import { MovieList } from '../../Components';

const MovieListContainer = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const { state, content } = useSelector((state) => state.movies);

  useEffect(() => {
    if (!content) {
      dispatch(getMovies());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state === SUCCESS) {
      setMovies(content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <main>
      <MovieList movies={movies} state={state} />
    </main>
  );
};

export default MovieListContainer;
