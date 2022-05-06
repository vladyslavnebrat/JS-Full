const countOccurrences = (text, str) => {
  if (str === '') {
    return null;
  }

  let startPosition = 0;
  let count = 0;
  while (true) {
    startPosition = text.indexOf(str, startPosition + 1);
    if (startPosition === -1) {
      break;
    }

    count += 1;
  }
  return count;
};
