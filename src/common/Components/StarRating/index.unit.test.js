import { mount } from 'enzyme';

import StarRating from '.';

describe('StarRating', () => {
  const component = mount(<StarRating filledStars={4} halfFilledStars={1} />);

  it('Renders the correct amount of stars', () => {
    expect(component.find('img')).toHaveLength(5);
  });
});
