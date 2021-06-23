import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Logo from '.';
import { DASHBOARD_ROUTE } from '../../../../routes';

it('Matches the snapshot', () => {
  const component = renderer.create(
    <Router>
      <Logo to={DASHBOARD_ROUTE} />
    </Router>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
