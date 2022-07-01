export const withdraw = (clients, balances, client, amount) => {
  clients.indexOf(client);
  const i = clients.indexOf(client);
  if (balances[i] >= amount) {
    balances[i] -= amount;
    return balances[i];
  }
  return -1;
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 6));
