// algo
// 1. filter elements of array(strings) by input string 'text'
// 2. check if input string contains 'text' and has quantity of symbols >= 5;

// inputs - outputs;
// 1. arr.filter input - array of strings. Output - filtered array in accordance with criteria;
// 2. Callback input - strings. Callback output - boolean;

function filterNames(arr, text) {
  return arr.filter(function (el) {
    return el.includes(text) && el.length > 5;
  });
}

const arr = ['John', 'Olivya', 'Oleksandr'];
console.log(filterNames(['John', 'Olivya', 'Oleksandr']), 'ya');
