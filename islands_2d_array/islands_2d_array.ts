export function countIslands(waterOrIsland: any) {
  let count = 0;

  for (let i = 0; i < waterOrIsland.length; i++) {
    for (let j = 0; j < waterOrIsland[i].length; j++) {
      if (waterOrIsland[i][j] === 0) {
        continue;
      }

      const hasTop = i > 0 && waterOrIsland[i - 1][j] === 1;
      const hasLeft = j > 0 && waterOrIsland[i][j - 1] === 1;

      if (!hasTop && !hasLeft) {
        count++;
      }
    }
  }

  return count;
}
