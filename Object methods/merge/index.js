// const arr = Object.entries(obj); // get array of rooms
// const arrOfObjects = arr.forEach(); // get array af objects inside rooms
// const insideObj = arrOfObjects.forEach(); // get all objects
// const insideEntries = Object.entries(insideObj); // get array of arrays of inside object entries.
// const arrOfNames = insideEntries.forEach(); // get elements of array.
// const mappedArrOfNames = arrOfNames.map(); // map all values.
// return mappedArrOfNames;

const getPeople = (obj) => {
  const arrayOFArrays = Object.values(obj);
  const combinedArray = arrayOFArrays.reduce(function (a, b) {
    return a.concat(b);
  }, []);
  const objToArr = combinedArray.map((u) => u.name);
  return objToArr;
};

const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Jack' },
    { name: 'Jack' },
    { name: 'Jack' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

console.log(getPeople({}));
