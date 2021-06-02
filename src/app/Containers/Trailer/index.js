import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMovie } from '../Movie/duck/operations';
import { SUCCESS } from '../../../common/constants';
import { Trailer } from '../../Components';

const TrailerContainer = ({ match }) => {
  const {
    params: { movieId },
  } = match;

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const { state, content } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getMovie(movieId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (state === SUCCESS) {
      setTitle(content.title);
      setUrl(content.trailer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <main>
      <Trailer title={title} url={url} />
    </main>
  );
};

export default TrailerContainer;
