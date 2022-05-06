function getParsedIntegers(array) {
  const arr = [];
  array.forEach((element) => {
    const result = Number.parseInt(element, 10);
    arr.push(result);
  });
  return arr;
}

function getParsedIntegersV2(array) {
  const arr = [];
  array.forEach((element) => {
    const result = parseInt(element, 10);
    arr.push(result);
  });
  return arr;
}

function getParsedFloats(array) {
  const arr = [];
  array.forEach((element) => {
    const result = Number.parseFloat(element);
    arr.push(result);
  });
  return arr;
}

function getParsedFloatsV2(array) {
  const arr = [];
  array.forEach((element) => {
    const result = parseFloat(element);
    arr.push(result);
  });
  return arr;
}
