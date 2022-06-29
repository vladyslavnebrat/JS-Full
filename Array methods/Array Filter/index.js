const filterNames = (arr) => {
  const newArr = [...arr];
  return newArr.filter((el) => el % 3 === 0);
};

console.log(filterNames([1, 2, 3, 4, 5, 6, 7]));
