function filterNames(arr, text) {
  return arr.filter(function (el) {
    return el.includes(text) && el.length > 5;
  });
}

const arr = ['John', 'Olivya', 'Oleksandr'];
console.log(filterNames(arr, 'ya'));
