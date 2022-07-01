const splitText = (text, length = 10) => {
  if (typeof text !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, length);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += length;
  }
  return strArr.join('\n');
};

console.log(splitText('abcdefghkkkkkkkkkkk', 4));
console.log(splitText('abcdefghkkkkkkkkkkk'));

// input - string and number
// output - multiline string with separator
// 1. Check if sting
// 2. Condtion 1 - if len = undefined, split to 10 symbols
// 3. Condition 2 - if len = number, substr length = number.
// 4. return substr length 10 symbols and substr lenght len symbols.
