export function packBoxes(
  boxTypes: { count: number; size: number }[],
  truckSpace: number
): number {
  const boxesSorted = boxTypes.sort((a, b) => a.size - b.size);
  let totalBoxes = 0;

  for (let box of boxesSorted) {
    const howManyOfEach = Math.min(
      box.count,
      Math.floor(truckSpace / box.size)
    );

    totalBoxes = totalBoxes + howManyOfEach;

    truckSpace = truckSpace - howManyOfEach * box.size;

    if (truckSpace <= 0) {
      break;
    }
  }

  return totalBoxes;
}
