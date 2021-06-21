import React from 'react';
import renderer from 'react-test-renderer';

import FooterTitle from '.';

it('Matches the snapshot', () => {
  const component = renderer.create(<FooterTitle title="example" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
