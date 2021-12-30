const numbers = [11, 22, 33, 55, 66];

const numberOfElements = numbers.length;

console.log(numberOfElements);

function getArrayBounds(arr) {
  return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrayBound = getArrayBounds(numbers);
console.log(arrayBound);
