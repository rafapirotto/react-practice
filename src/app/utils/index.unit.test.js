import { getRandomIndex, randomIntegerBetween, headers } from '.';

it('returns random index from array', () => {
  const testArray = [1, 2, 3];
  expect(getRandomIndex(testArray)).toBeLessThan(testArray.length);
});

it('returns random value between two numbers', () => {
  const min = 1;
  const max = 2;
  expect(randomIntegerBetween(min, max)).toBeGreaterThanOrEqual(min);
  expect(randomIntegerBetween(min, max)).toBeLessThanOrEqual(max);
});

it('returns an Authorization token value', () => {
  const {
    headers: { Authorization },
  } = headers();
  expect(Authorization).toBeTruthy();
});
