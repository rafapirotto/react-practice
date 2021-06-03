import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieList } from '../../Components';
import { getContinueWatching } from './duck/operations';

const ContinueWatchingContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.continueWatchingMovies);

  useEffect(() => {
    if (!selector.content) {
      dispatch(getContinueWatching());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MovieList
        movies={selector?.content}
        state={selector?.state}
        title="Continue Watching for Rafa"
      />
    </main>
  );
};

export default ContinueWatchingContainer;
