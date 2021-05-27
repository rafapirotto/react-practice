import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';

import { getMovies } from './duck/operations';
import { SUCCESS } from '../../../common/constants';

const renderMovies = (movies) => (
  <div className="flex mt-8 ml-24">
    {movies.map(({ poster_url, title }) => (
      <div className="mr-1">
        <img src={poster_url} alt={title} />
      </div>
    ))}
  </div>
);

const renderTitle = (title) => (
  <div className="">
    <h1 className="ml-24 text-3xl font-semibold">{title}</h1>
  </div>
);

const MovieList = (props) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    dispatch(getMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const { state, payload: movies } = props.movieList.status;

    if (state === SUCCESS) {
      setMovies(movies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.movieList]);

  return (
    <main>
      {renderTitle('My List')}
      {renderMovies(movies)}
    </main>
  );
};

const mapStateToProps = (state) => ({
  movieList: state.movieList,
});

export default connect(mapStateToProps)(MovieList);
