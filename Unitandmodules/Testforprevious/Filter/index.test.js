import getAdults from './index';

it('Should get adults', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('Should get adults', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('Should get adults', () => {
  const result = getAdults({ Vlad: 28, Anatolii: 8 });

  expect(result).toEqual({ Vlad: 28 });
});
