/* eslint-disable no-restricted-syntax */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// obj - input and output - object;
// props - string;
// Algo
// Declare that props is arr;
// Sort out keys in obj;
// Compare keys with array elements;

const pickProps = (obj, props) => {
  const result = {};
  for (const key in obj) {
    if (props.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};
