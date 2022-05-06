function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const arr = [...array];
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] < arr[j]) {
        const x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
  return arr;
}

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const arr = [...array];
  for (let i = 1; i < arr.length; i++)
    for (let j = 0; j < i; j++)
      if (arr[i] > arr[j]) {
        const x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
      }
  return arr;
}
