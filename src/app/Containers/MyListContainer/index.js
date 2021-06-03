import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MovieList } from '../../Components';
import { getMyList } from './duck/operations';

const MyListContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.myListMovies);

  useEffect(() => {
    if (!selector.content) {
      dispatch(getMyList());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MovieList movies={selector?.content} state={selector?.state} title="My List" />
    </main>
  );
};

export default MyListContainer;
