'use strict';

/**
 * @param {object[]} transactions
 * @return {number}
 */
function getTotalBalance(transactions) {
  let total = 0;
  transactions.forEach((t) => {
    total += t.amount;
  });
  return total;
}
const dayTransactions = [
  { id: 1001, amount: 60 },
  { id: 1002, amount: -160 },
  { id: 1003, amount: 2000 },
  { id: 1004, amount: -500 },
  { id: 1005, amount: 136 },
];

console.log(getTotalBalance(dayTransactions));
