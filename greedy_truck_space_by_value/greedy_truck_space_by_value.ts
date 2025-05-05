export function packBoxesForValue(
  boxTypes: { count: number; size: number; value: number }[],
  truckSpace: number
): number {
  const shipmentsSortedByValue = boxTypes.sort(
    (a, b) => b.value / b.size - a.value / a.size
  );
  let totalValue = 0;

  for (let shipment of shipmentsSortedByValue) {
    let howManyofEach = Math.min(
      shipment.count,
      Math.floor(truckSpace / shipment.size)
    );

    totalValue += howManyofEach * shipment.value;

    truckSpace -= howManyofEach * shipment.size;

    if (truckSpace <= 0) {
      break;
    }
  }

  return totalValue;
}
