function withdraw(clients, balances, client, amount) {
  let index = 0;
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client) {
      index = i;
      break;
    }
  }

  if (balances[index] >= amount) {
    balances[index] -= amount;
    return balances[index];
  }

  return -1;
}

console.log(withdraw(['Ann', 'Bob', 'User'], [1400, 87, 6], 'Ann', 50));
