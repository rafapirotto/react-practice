import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovie } from '../Movie/duck/operations';
import { Trailer } from '../../Components';

const TrailerContainer = ({ match }) => {
  const {
    params: { movieId },
  } = match;

  const dispatch = useDispatch();
  const { content: popularMovies } = useSelector((state) => state.popularMovies);
  const { content: movieFromAPI } = useSelector((state) => state.movie);
  console.log(popularMovies, 'popularMovies');

  useEffect(() => {
    if (!popularMovies) dispatch(getMovie(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const movie = movieFromAPI || popularMovies.find(({ id }) => id === parseInt(movieId));

  return (
    <main>
      <Trailer title={movie?.title} url={movie?.trailer} />
    </main>
  );
};

export default TrailerContainer;
