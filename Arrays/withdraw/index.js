function withdraw(clients, balances, client, amount) {
  const indexOfPerson = clients.indexOf(client);
  let balance = balances[indexOfPerson];
  if (balance >= amount) {
    balance -= amount;
    return balance;
  }
  if (balance <= amount) {
    balance -= amount;
    return balance;
  }
  return -1;
}
