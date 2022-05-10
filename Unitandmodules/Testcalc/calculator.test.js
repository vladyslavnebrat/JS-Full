import calc from './calculator';

it('should add a to b', () => {
  const result = calc(1 + 2);

  expect(result).toEqual(3);
});

it('should subtract a from b', () => {
  const result = calc(2 - 1);

  expect(result).toEqual(1);
});

it('should multiple a to b', () => {
  const result = calc(2 * 1);

  expect(result).toEqual(2);
});

it('should divide a on b', () => {
  const result = calc(2 / 1);

  expect(result).toEqual(2);
});

