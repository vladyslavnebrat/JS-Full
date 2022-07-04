import { withdraw } from './index';

it('Decrease an amount', () => {
  const [i] = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect([i]).toEqual(37);
});

it('Decrease an amount', () => {
  const [i] = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 6);

  expect([i]).toEqual(-1);
});

it('Decrease an amount', () => {
  const [i] = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 50);

  expect([i]).toEqual(1350);
});
