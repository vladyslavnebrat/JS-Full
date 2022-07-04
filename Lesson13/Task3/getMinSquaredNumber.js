// Algo 
// input array, output - min square number.
// 1. return null if agrument is not array or empty array
// 2. mapping array with condition to get squared elements.
// 3. Return smallest square alement by abs

// Solution 1
  //   export const squaredArray = [...arr];
  //   squaredArray.forEach((element) => {
  //     Math.abs(element * element);
  //   });
  //   let min = squaredArray[0];
  //   let i = 0;
  //   for (i = 1; i < squaredArray.length; i++) {
  //     if ((squaredArray[i]) < min) {
  //       min = squaredArray[i];
  //     }
  //   }
  //   return min;
  // };

  //Solution 2

  export const minSquaredNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let min = 0;
  arr.map((element) => Math.abs.sqrt(element));
  if (Math.abs.sqrt(element) < min) {
    Math.abs.sqrt(element) = min;
  }
  return Math.abs.sqrt(element);
};

console.log(minSquaredNumber([3, 5, 6, 7, 8]));