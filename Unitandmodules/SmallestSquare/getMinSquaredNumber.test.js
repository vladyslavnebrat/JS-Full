import minSquaredNumber from './getMinSquaredNumber';

it('should get minimal squared numbers', () => {
  const result = minSquaredNumber([1, 2, 3]);

  expect(result).toEqual([1]);
});

it('should get minimal squared numbers', () => {
  const result = minSquaredNumber('string');

  expect(result).toEqual(null);
});

it('should get minimal squared numbers', () => {
  const result = minSquaredNumber([]);

  expect(result).toEqual(null);
});
