import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieList } from '../../Components';
import { getMovies } from './duck/operations';

const PopularContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.popularMovies);

  useEffect(() => {
    if (!selector.content) {
      dispatch(getMovies());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MovieList movies={selector?.content} state={selector?.state} title="Popular on Movy" />
    </main>
  );
};

export default PopularContainer;
