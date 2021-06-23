import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import HeaderOptionList from '.';
import { SUCCESS } from '../../../../../common/constants';

it('Matches the snapshot', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    userProfile: {
      state: SUCCESS,
      content: { photo_path: 'https://randomuser.me/api/portraits/med/men/75.jpg' },
    },
  };
  const store = mockStore(initialState);

  const component = renderer.create(
    <Router>
      <Provider store={store}>
        <HeaderOptionList />
      </Provider>
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
