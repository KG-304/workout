export const countCandles = (candles: number[]) => {
  let max = 0;
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > max) {
      max = candles[i];
    }
  }

  for (let j = 0; j < candles.length; j++) {
    if (max === candles[j]) {
      count++;
    }
  }

  return count;
};
