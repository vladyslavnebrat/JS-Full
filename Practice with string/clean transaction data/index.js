// delete elements with letters from array
// trim spaces
// math floor each element

const cleanTransactionsList = (arr) => {
  const filteredElements = arr.filter(function (element) {
    if (isNaN(element)) {
      return false;
    } else {
      return true;
    }
  });
  return filteredElements.map((element) => '$' + Number(element).toFixed(2));
};

console.log(
  cleanTransactionsList(['15', '1 dollar', '   3.4', '1.2    ', '4'])
);
