import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { MovieList } from '../../Components';

const propTypes = {
  operation: PropTypes.func.isRequired,
  selector: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  watchingProgress: PropTypes.bool,
};

const defaultProps = {
  watchingProgress: false,
};

const MovieListContainer = ({ operation, selector, title, watchingProgress }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!selector.content) {
      dispatch(operation());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MovieList
        movies={selector?.content}
        state={selector?.state}
        title={title}
        watchingProgress={watchingProgress}
      />
    </main>
  );
};

MovieListContainer.propTypes = propTypes;
MovieListContainer.defaultProps = defaultProps;

export default MovieListContainer;
