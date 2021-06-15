import { mount } from 'enzyme';

import StarRating from '.';

describe('StarRating', () => {
  it('Renders the correct amount of stars', () => {
    const component = mount(<StarRating filledStars={4} halfFilledStars={1} />);
    expect(component.find('img')).toHaveLength(5);
  });
});
