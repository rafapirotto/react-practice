import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import Header from '.';
import { SUCCESS } from '../../../common/constants';

const middlewares = [thunk];

it('Matches the snapshot', () => {
  const mockStore = configureStore(middlewares);
  const initialState = {
    login: { state: SUCCESS },
  };
  const store = mockStore(initialState);

  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <Header />
      </Provider>
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
