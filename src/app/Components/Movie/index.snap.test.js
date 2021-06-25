import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import Movie from '.';
import { TRAILERS_ROUTE } from '../../routes';

const middlewares = [thunk];

it('Matches the snapshot', () => {
  const mockStore = configureStore(middlewares);
  const initialState = {};
  const store = mockStore(initialState);

  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <Movie url="some-url" title="some-movie" watchingProgress to={`${TRAILERS_ROUTE}/${1}`} />
      </Provider>
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
