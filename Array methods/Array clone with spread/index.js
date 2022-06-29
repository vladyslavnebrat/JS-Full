function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const clonedArr = [...arr]; 
  return clonedArr;
}

const arr2 = [1, 2, 3, 4, 5, 6];
console.log(cloneArr(arr2));
