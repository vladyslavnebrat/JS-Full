/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// for (let key in user) {
//   console.log(user[key]);
// }

const user = {
  name: 'Tom',
  key: 17,
};

const concatProps = (obj) => {
  let arr = [];

  for (let key in obj) {
    // arr.push(obj[key]);
    arr = arr.concat(obj[key]);
  }

  return arr;
};

console.log(concatProps(user));
