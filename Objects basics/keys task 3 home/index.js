/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

/* Для решения этой задачи используй for..in цикл. В реальных проектах это плохая практика,
 * лучше использовать методы класса Object - keys(), values(), entries(). Но мы с ними пока не познакомитись.
 * Чтобы eslint не ругался на эту ошибку, для этой задачи он отключен аннотацией eslint-disable
 * */

// algo
// 1.Create obj; 2. Create arr;
// 3. Search obj keys via for in loop;
// 4. Push object keys to arr;
// 5. return arr; 6. Show obj

const obj = {
  width: 300,
  height: 200,
  title: 'Menu',
};

function getKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}
