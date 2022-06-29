'use strict';

const withdraw = (clients, balances, client, amount) => {
  const i = clients.indexOf(client);
  if (balances[i] >= amount) {
    balances[i] -= amount;
    return balances[i];
  }
  return -1;
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
