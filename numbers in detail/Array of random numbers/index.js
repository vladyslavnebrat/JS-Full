const getRandomNumbers = (length, min, max) => {
  if (max - min <= 1) {
    return null;
  }
  const arr = [];
  for (let i = 0; i < length; i++) {
    const n = Math.trunc(Math.random() * (max - min) + min);
    arr.push(n);
  }
  return arr;
};

console.log(getRandomNumbers(5, 1.4, 3.22));
