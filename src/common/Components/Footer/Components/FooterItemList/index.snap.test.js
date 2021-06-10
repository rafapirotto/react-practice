import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import FooterItemList from '.';

test('It matches the snapshot', () => {
  const component = renderer.create(
    <Router>
      <FooterItemList />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
