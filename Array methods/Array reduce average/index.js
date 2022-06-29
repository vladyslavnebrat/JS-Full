function arrAverage(arr) {
  return !Array.isArray(arr)
    ? null
    : arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      ) / arr.length;
}

console.log(arrAverage([1, 2, 3, 4, 5, 6, 7]));
