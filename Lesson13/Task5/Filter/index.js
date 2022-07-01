export const getAdults = (obj) => {
  const result = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      result[key] = obj[key];
    }
  }
  return result;
};

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }));
console.log(getAdults({ Ann: 56, Andrey: 7 }));
