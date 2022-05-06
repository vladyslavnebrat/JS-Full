const transformToObject = (arr) => {
  const obj = {};

  arr.forEach((el) => {
    obj[el] = el;
  });

  return obj;
};

const arr = [1, 'text'];
const result = transformToObject(arr);
console.log(result);
