import React from 'react';
import renderer from 'react-test-renderer';

import Trailer from '.';

test('It matches the snapshot', () => {
  const component = renderer.create(<Trailer title="title" url="some-url" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
