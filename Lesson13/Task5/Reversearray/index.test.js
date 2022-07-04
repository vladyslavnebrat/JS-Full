import { reverseArray } from './index';

it('should reverse an array', () => {
  const newArr = reverseArray([1, 2, 3, 4]);

  expect(newArr).toEqual([4, 3, 2, 1]);
});

it('should reverse an array', () => {
  const newArr = reverseArray([3, 5, 6, 7]);

  expect(newArr).toEqual([7, 6, 5, 3]);
});

it('should reverse an array', () => {
  const newArr = reverseArray('string');

  expect(newArr).toEqual(null);
});
