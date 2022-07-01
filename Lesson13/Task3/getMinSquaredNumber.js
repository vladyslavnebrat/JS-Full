export const minSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const squaredArray = arr.forEach((element) => {
    Math.abs(element * element);
  });
  let min = squaredArray[0];
  let i = 0;
  for (i = 1; i < squaredArray.length; i++) {
    if (squaredArray[i] < min) {
      min = squaredArray[i];
    }
  }
  return min;
};
