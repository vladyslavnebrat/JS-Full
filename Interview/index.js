'use strict';

/**
 * @param {number[]} clientsArr
 * @param {number} minClients
 * @return {number}
 */
function getSucessfulDays(clientsArr, minClients) {
  return clientsArr.filter((successfulDay) => successfulDay > minClients)
    .length;
}

console.log(getSucessfulDays([25, 40, 10, 58], 30));
console.log(getSucessfulDays([25, 40, 10, 58], 50));
