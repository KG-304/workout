const getMaxAdditionalDinersCount = (
  N: number,
  K: number,
  M: number,
  S: number[]
) => {
  const numSeats = N;
  const seatSpace = K;
  const peopleSeatedIndex = S;

  let finalCount = 0;
  const baseSeatingChart = new Array(numSeats).fill(0).map((_, i) => i + 1);

  // Mark existing diners and their blocked zones
  const finalSeatingChart = placePeopleInChart(
    peopleSeatedIndex,
    baseSeatingChart,
    seatSpace
  );

  // Walk seat-by-seat and greedily place diners where valid
  let seat = 0;

  while (seat < finalSeatingChart.length) {
    if (finalSeatingChart[seat] === 0) {
      // Already blocked, skip
      seat++;
    } else {
      // Seat is available, place a diner
      finalCount++;

      // Block this seat and K to the right
      for (let offset = 0; offset <= seatSpace; offset++) {
        const blockIdx = seat + offset;
        if (blockIdx < finalSeatingChart.length) {
          finalSeatingChart[blockIdx] = 0;
        }
      }

      // Move to the next available seat outside this diner's spacing
      seat += seatSpace + 1;
    }
  }

  return finalCount;
};

const placePeopleInChart = (
  peopleSeatedIndex: number[],
  baseSeatingChart: number[],
  seatSpace: number
) => {
  for (let seatedPerson of peopleSeatedIndex) {
    for (let offset = -seatSpace; offset <= seatSpace; offset++) {
      const idx = seatedPerson - 1 + offset;
      if (idx >= 0 && idx < baseSeatingChart.length) {
        baseSeatingChart[idx] = 0;
      }
    }
  }

  return baseSeatingChart;
};

export default getMaxAdditionalDinersCount;
