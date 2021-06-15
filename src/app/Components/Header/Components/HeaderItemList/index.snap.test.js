import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderItemList from '.';

it('Matches the snapshot', () => {
  const component = renderer.create(
    <Router>
      <HeaderItemList />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
