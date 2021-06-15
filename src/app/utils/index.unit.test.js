import { getRandomIndex, randomIntegerBetween, headers } from '.';

describe('Utils', () => {
  it('Returns random index from array', () => {
    const testArray = [1, 2, 3];
    expect(getRandomIndex(testArray)).toBeLessThan(testArray.length);
  });

  it('Returns random value between two numbers', () => {
    const min = 1;
    const max = 2;
    expect(randomIntegerBetween(min, max)).toBeGreaterThanOrEqual(min);
    expect(randomIntegerBetween(min, max)).toBeLessThanOrEqual(max);
  });

  it('Returns an Authorization token value', () => {
    const {
      headers: { Authorization },
    } = headers();
    expect(Authorization).toBeTruthy();
  });
});
