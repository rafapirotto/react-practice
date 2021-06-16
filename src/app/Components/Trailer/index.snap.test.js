import React from 'react';
import renderer from 'react-test-renderer';

import Trailer from '.';

it('Matches the snapshot', () => {
  const component = renderer.create(<Trailer title="title" url="some-url" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
