const getFiniteNumbers = (arr) => arr.filter(Number.isFinite);

const getFiniteNumbersV2 = (arr) => arr.filter(isFinite);

const getNaN = (arr) => arr.filter(Number.isNaN);

const getNaNV2 = (arr) => arr.filter(isNaN);

const getIntegers = (arr) => arr.filter(Number.isInteger);

console.log(getFiniteNumbers([1, '3', [], 4, Infinity, -54.4]));
console.log(getFiniteNumbersV2([1, '3', [], 4, Infinity, -54.4]));
console.log(getNaN([1, '3', [], 4, Infinity, -54.4]));
console.log(getNaNV2([1, '3', [], 4, Infinity, -54.4]));
console.log(getIntegers([1, '3', [], 4, Infinity, -54.4]));
