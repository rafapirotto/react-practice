import React from 'react';
import renderer from 'react-test-renderer';

import Error from '.';

test('It matches the snapshot', () => {
  const component = renderer.create(<Error />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
