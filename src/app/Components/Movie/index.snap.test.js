import React from 'react';
import renderer from 'react-test-renderer';

import Movie from '.';

it('Matches the snapshot', () => {
  const component = renderer.create(<Movie url="some-url" title="some-movie" watchingProgress />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
