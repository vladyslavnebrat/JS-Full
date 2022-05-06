/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// Algo
// Create empty object;
// By for in loop go through object keys;
// Filter keys by declaring that key is >= 18;
// Declare that result key is the same as object key;
// Return result with filtered keys

const getAdults = (obj) => {
  const result = {};
  for (const key in obj) {
    if (result[key] >= 18) {
      result[key] = obj[key];
      console.log(obj[key]);
    }
  }
};

getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
getAdults({ Ann: 56, Andrey: 7 });
