const superRound = (num, prec) => {
  const precision = 10 ** prec;
  return [
    Math.floor(num * precision) / precision,
    Math.trunc(num * precision) / precision,
    Math.ceil(num * precision) / precision,
    Math.round(num * precision) / precision,
    +num.toFixed(prec),
  ];
};

console.log(superRound(11.12556, 2));
