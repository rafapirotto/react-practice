import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import Home from '.';

const middlewares = [thunk];

it('matches the snapshot', () => {
  const mockStore = configureStore(middlewares);
  const initialState = {
    popularMovies: { popularMovies: [] },
    myListMovies: { myListMovies: [] },
    continueWatchingMovies: { continueWatchingMovies: [] },
    mostViewedMovies: { mostViewedMovies: [] },
    recommendedMovies: { recommendedMovies: [] },
  };
  const store = mockStore(initialState);

  const component = renderer.create(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
