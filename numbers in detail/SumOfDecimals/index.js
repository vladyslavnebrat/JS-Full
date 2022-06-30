const getTotalPrice = (arr) => {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  return '$' + (Math.floor(sumWithInitial * 100) / 100).toFixed(2);
};

console.log(getTotalPrice([10, 11, 12]));
