// algo
// 1. Return null if arr is not array
// 2. sum all the elements in array
// 3. divide sum on array.length and return avarage value

function arrAverage(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((a, b) => a + b) / arr.length;
}

const arr = [1, 3, 4, 6];
console.log(arrAverage(arr));
