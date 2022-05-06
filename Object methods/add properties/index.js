/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(userData, userId) {
  console.log(typeof userId);
  userData.id = userId;
  return userData;
}
function addPropertyV2(userData, userId) {
  return Object.assign(userData, { id: userId });
}
function addPropertyV3(userData, userId) {
  return Object.assign({}, userData, { id: userId });
}
function addPropertyV4(userData, userId) {
  const result = { ...userData, id: userId };
  return result;
}
