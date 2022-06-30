const getTotalPrice = (arr) =>
  '$' +
  (
    Math.floor(
      arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      ) * 100
    ) / 100
  ).toFixed(2);
console.log(getTotalPrice([10, 11, 12, 14, 15.6]));
