import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieList } from '../../Components';
import { getMostViewed } from './duck/operations';

const MostViewedContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.mostViewedMovies);

  useEffect(() => {
    if (!selector.content) {
      dispatch(getMostViewed());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MovieList movies={selector?.content} state={selector?.state} title="Most Viewed" />
    </main>
  );
};

export default MostViewedContainer;
