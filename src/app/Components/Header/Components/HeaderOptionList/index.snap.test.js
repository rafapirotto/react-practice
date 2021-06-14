import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderOptionList from '.';

it('matches the snapshot', () => {
  const component = renderer.create(
    <Router>
      <HeaderOptionList />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
