import { getRandomIndex, randomIntegerBetween, headers } from '.';

describe('Utils', () => {
  describe('getRandomIndex()', () => {
    const testArray = [1, 2, 3];

    it('Returns random index from array', () => {
      expect(getRandomIndex(testArray)).toBeLessThan(testArray.length);
    });
  });

  describe('randomIntegerBetween()', () => {
    const min = 1;
    const max = 2;

    it('Returns random value between two numbers', () => {
      expect(randomIntegerBetween(min, max)).toBeGreaterThanOrEqual(min);
      expect(randomIntegerBetween(min, max)).toBeLessThanOrEqual(max);
    });
  });

  describe('headers()', () => {
    const {
      headers: { Authorization },
    } = headers();

    it('Returns an Authorization token value', () => {
      expect(Authorization).toBeTruthy();
    });
  });
});
