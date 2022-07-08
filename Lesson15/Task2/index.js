// input - none; output - object;
// algo
// set not strict LI;
// set initial value - 0;
// declate functions
// assign functions as methods to CreateCalc
// return obj with methods

export const createCalculator = () => {
  let initialValue = 0;

  const add = (number) => {
    initialValue += number;
  };

  const decrease = (numberDecrease) => {
    initialValue -= numberDecrease;
  };

  const reset = () => {
    initialValue = 0;
  };

  const getMemo = () => {
    return initialValue;
  };

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

console.log(createCalculator());
