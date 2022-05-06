const getTotalRevenue = (transactions) => {
  let revenue = 0;
  const arrToObj = transactions.forEach((element) => {
    console.log(element);

    revenue += element.amount;
  });

  return revenue;
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
