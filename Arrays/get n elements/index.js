const getSubArray = (arr, numberOfElements) => {
  const subArray = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    subArray[i] = arr[i];
  }
  return subArray;
};

console.log(getSubArray([1, 2, 3, 4, 5, 6], 3));
