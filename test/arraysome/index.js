'use strict';

/**
 * @param {number[]} transactions
 * @param {number} amount
 * @return {number[]}
 */
function getBigTransactions(transactions, amount) {
  return transactions.filter((v) => v > amount);
}

console.log(getBigTransactions([110, 58, 2500, 9000, 462, 256], 100));
