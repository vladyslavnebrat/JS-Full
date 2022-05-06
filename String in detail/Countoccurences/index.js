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
  return strArr.join();
};

console.log(splitString('abcdefghigklm', 3));
