import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

import { Trailer } from '../../Components';

const TrailerContainer = ({ match }) => {
  const {
    params: { movieId },
  } = match;

  const { content } = useSelector((state) => state.popularMovies);
  const [movie, setMovie] = useState(null);

  const fetchMovie = async (movieId) => {
    const { data: movie } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_MOVIES_URL}/${movieId}`,
    );

    setMovie(movie);
  };

  useEffect(() => {
    if (!content) {
      fetchMovie(movieId);
    } else {
      const storeMovie = content.find(({ id }) => id === parseInt(movieId));

      setMovie(storeMovie);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Trailer title={movie?.title} url={movie?.trailer} />
    </main>
  );
};

export default TrailerContainer;
