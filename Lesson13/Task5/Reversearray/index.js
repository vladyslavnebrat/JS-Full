export function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }

  const newArr = [...arr];
  newArr.reverse();
  return newArr;
}
