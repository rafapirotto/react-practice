import React from 'react';
import renderer from 'react-test-renderer';

import Preview from '.';

test('It matches the snapshot', () => {
  const component = renderer.create(
    <Preview
      movie={{ release_date: '2002', genres: [{ id: 1, name: 'Comedy' }], title: 'title' }}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
