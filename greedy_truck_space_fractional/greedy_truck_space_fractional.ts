export function packBoxesFractional(
  boxTypes: { count: number; size: number; value: number }[],
  truckSpace: number
): number {
  const shipmentsSortedByValue = boxTypes.sort(
    (a, b) => b.value / b.size - a.value / a.size
  );
  let totalValue = 0;

  for (let shipment of shipmentsSortedByValue) {
    let totalShipmentSize = shipment.count * shipment.size;
    let totalShipmentValue = shipment.count * shipment.value;

    if (totalShipmentSize <= truckSpace) {
      totalValue += totalShipmentValue;
      truckSpace -= totalShipmentSize;
    } else {
      let remainingSpace = truckSpace / shipment.size;
      let remainingValue = remainingSpace * shipment.value;

      totalValue += remainingValue;

      truckSpace = 0;
    }

    if (truckSpace <= 0) {
      break;
    }
  }

  return totalValue;
}

/* 
// Template logic for Greedy + space constraints
sort by value per unit space
loop:
  if full batch fits:
    take all, update value + space
  else:
    take fractional, calculate value from what fits, break

*/
