export default function compareTriplets(a: number[], b: number[]) {
  let aliceArr = a;
  let aliceScore = 0;
  let bobScore = 0;
  let finalArr: number[] = [];

  for (let i = 0; i < aliceArr.length; i++) {
    if (a[i] > b[i]) {
      aliceScore++;
    }
    if (a[i] < b[i]) {
      bobScore++;
    }
  }

  finalArr = [aliceScore, bobScore];

  return finalArr;
}
