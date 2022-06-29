function getSum(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }

  let sumOfNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }

  return sumOfNumbers;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
