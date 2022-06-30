const getParsedIntegers = (arr) =>
  arr.map((element) => Number.parseInt(element));

console.log(getParsedIntegers([1.2, 3, 3.5, 4.6]));

const getParsedIntegersV2 = (arr) => arr.map((element) => parseInt(element));

console.log(getParsedIntegersV2([1.2, 3, 3.5, 6.7, -Infinity]));
console.log(getParsedIntegersV2([1.2, 3, 3.5, 6.7, Infinity]));

const getParsedFloats = (arr) =>
  arr.map((element) => Number.parseFloat(element));

console.log(getParsedFloats([1, 3, 3, 4]));

const getParsedFloatsV2 = (arr) => arr.map((element) => parseFloat(element));

console.log(getParsedFloatsV2(['1.1dfdf', 3, 3, 6, -Infinity]));
console.log(getParsedFloatsV2([1, '    3.3fff', 3, 6, Infinity]));
