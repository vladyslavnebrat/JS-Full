const sortArray = numbers => 
numbers.slice().sort((a, b) => b - a);

const arr = [2, 4, 30, 1, 5];
console.log(sortArray(arr));
