import React from 'react';
import renderer from 'react-test-renderer';

import MovieList from '.';

it('Matches the snapshot', () => {
  const component = renderer.create(
    <MovieList
      movies={[{ poster_url: 'url', title: 'title', id: 2 }]}
      state="some-state"
      title="some-title"
      watchingProgress
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
