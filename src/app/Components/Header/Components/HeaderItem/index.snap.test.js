import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderItem from '.';

it('Matches the snapshot', () => {
  const component = renderer.create(
    <Router>
      <HeaderItem title="title" styles="" to="/" id="1" />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
