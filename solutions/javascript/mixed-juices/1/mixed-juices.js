// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {

  const processedName = name.toLowerCase().trim().replace(/\s/g, '');


  switch (processedName) {
    
    case "purestrawberryjoy":
      return 0.5;
      break ; 
    case "energizer":
      return 1.5;
      break;
    case "greengarden": 
      return 1.5;
      break;
    case "tropicalisland":
      return 3;
      break;
    case "allornothing":
      return 5;
      break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedgescutted = 0;
  let lime_needed = 0;
  const limes_array = limes.length;


  for (let x = 0; x < limes_array; x++) {
    
   
    if (wedgescutted >= wedgesNeeded) {
      break; // Keluar dari 'for' loop
    }

 
    const lime_type = limes[x];

    switch (lime_type) {
      case 'small':
        wedgescutted += 6;
        lime_needed += 1;
        break;
      case 'medium':
        wedgescutted += 8;
        lime_needed += 1;
        break;
      case 'large':
        wedgescutted += 10;
        lime_needed += 1;
        break;
    }
  }

  return lime_needed;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0; // indeks pesanan yang sedang dikerjakan

  // selama masih ada waktu dan order
  while (timeLeft > 0 && i < orders.length) {
    const currentJuice = orders[i];
    const timeForJuice = timeToMixJuice(currentJuice);

    timeLeft -= timeForJuice; // kurangi waktu tersisa
    i++; // lanjut ke order berikutnya
  }

  // kembalikan sisa pesanan yang belum dibuat
  return orders.slice(i);
}
