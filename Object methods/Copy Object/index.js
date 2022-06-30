const players = {
  Tom: 17,
  'John Doe': 19,
  Bob: 100,
};

const copyObj = (obj) => Object.assign({}, obj);

console.log(copyObj(players));
