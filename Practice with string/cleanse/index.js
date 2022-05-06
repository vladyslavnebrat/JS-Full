const cleanTransactionList = (arr) => {
  const filteredElements = arr.filter(function (element) {
    if (isNaN(element)) {
      return false;
    } else {
      return true;
    }
  });
  const mappedElements = filteredElements.map(function (element) {
    return '$' + Number(element).toFixed(2);
  });
  return mappedElements;
};

