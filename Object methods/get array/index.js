/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function mergeObjectsV1(obj1, obj2) {
  const res = Object.assign({}, obj2, obj1);
  return res;
}

function mergeObjectsV2(obj1, obj2) {
  const res = Object.assign({}, obj2, obj1);
  return res;
}

function mergeObjectsV3(obj1, obj2) {
  const res = Object.assign({}, { ...obj2 }, { ...obj1 });
  return res;
}

function mergeObjectsV4(obj1, obj2) {
  const res = Object.assign({}, { ...obj1 }, { ...obj2 });
  return res;
}

