const splitString = (text, length = 10) => {
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
    if (chunk.length < length) {
      chunk = chunk.concat('.'.repeat(length - chunk.length));
    }
    strArr.push(chunk);
    startPosition += length;
  }
  return strArr;
};

console.log(splitString('abcdefghi', 4));
console.log(splitString('abcdefghkkkkkkkkkkk'));
