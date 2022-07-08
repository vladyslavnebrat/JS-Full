let initialValue = 0;

export function add(number) {
  initialValue += number;
}

export function decrease(numberDecrease) {
  initialValue -= numberDecrease;
}

export function reset() {
  initialValue = 0;
}

export function getMemo() {
  return initialValue;
}

console.log(add(6));
console.log(decrease(3));
console.log(reset());
console.log(getMemo());
