const getSubArray = (arr, numberOfElements) => {
  const subArray = [];
  for (let i = 0; i < numberOfElements; i += 1) {
    subArray[i] = arr[i];
  }
  return subArray;
};
