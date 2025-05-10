export const countCandles = (candles: number[]) => {
  candles.sort((a, b) => b - a);

  let tallestCandle = candles[0];
  let count = 0;

  for (let i = 0; i < candles.length; i++) {
    if (tallestCandle === candles[i]) {
      count++;
    }
  }

  return count;
};
