import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import HeaderOption from '.';
import search from '../../assets/search.png';

it('Matches the snapshot', () => {
  const component = renderer.create(
    <Router>
      <HeaderOption src={search} alt="search" styles="" />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
