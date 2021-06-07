import React from 'react';
import { useSelector } from 'react-redux';

import { ERROR, LOADING, SUCCESS } from '../../../common/constants';
import { Spinner, Error } from '../../../common/Components';
import { getRandomIndex } from '../../utils';

import { Preview } from '../../Components';

const renderComponent = (movies) => {
  const randomIndex = getRandomIndex(movies);
  const movie = movies[randomIndex];

  return <Preview movie={movie} />;
};

const renderComponentConditionally = (condition, component) => condition && component;

const PreviewContainer = () => {
  const { content, state } = useSelector((state) => state.popularMovies);

  return (
    <>
      {renderComponentConditionally(state === LOADING, <Spinner />)}
      {renderComponentConditionally(state === ERROR, <Error />)}
      {renderComponentConditionally(state === SUCCESS, content && renderComponent(content))}
    </>
  );
};

export default PreviewContainer;
