import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieList } from '../../Components';
import { getRecommended } from './duck/operations';

const RecommendedMoviesContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.recommendedMovies);

  useEffect(() => {
    if (!selector.content) {
      dispatch(getRecommended());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MovieList movies={selector?.content} state={selector?.state} title="Recommended movies" />
    </main>
  );
};

export default RecommendedMoviesContainer;
