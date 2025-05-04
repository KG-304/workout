export const countDishes = (dishArr: number[], skipNum: number) => {
  const queue: number[] = [];
  let eatenSet = new Set();
  let count = 0;

  for (let i = 0; i < dishArr.length; i++) {
    if (!eatenSet.has(dishArr[i])) {
      eatenSet.add(dishArr[i]);
      queue.push(dishArr[i]);
      count++;
      if (queue.length > skipNum) {
        const removed = queue.shift();
        eatenSet.delete(removed);
      }
    }
  }

  return count;
};
