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

const getPeople = (obj) =>
  Object.values(obj)
    .reduce(function (a, b) {
      return a.concat(b);
    }, [])
    .map((u) => u.name);

console.log(getPeople(rooms));

