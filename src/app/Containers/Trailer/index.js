import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovie } from '../Movie/duck/operations';
import { Trailer } from '../../Components';

const TrailerContainer = ({ match }) => {
  const {
    params: { movieId },
  } = match;

  const dispatch = useDispatch();
  const { content } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Trailer title={content?.title} url={content?.trailer} />
    </main>
  );
};

export default TrailerContainer;
