import React from 'react';
import renderer from 'react-test-renderer';

import StarRating from '.';

it('matches the snapshot', () => {
  const component = renderer.create(<StarRating filledStars={4} halfFilledStars={1} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
