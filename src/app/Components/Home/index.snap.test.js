import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import Home from '.';
import rootReducer from '../../../app/rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

it('matches the snapshot', () => {
  const component = renderer.create(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
