const sortDesc = (arr) => {
  const newArr = [...arr];
  return arr.sort((a, b) => b - a);
};

console.log(sortDesc([1, 2, 3, 4, 5, 6, 7]));
