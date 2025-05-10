export function rotateLeft(d: number, arr: number[]) {
  let finalArr = new Array(arr.length);
  d = d % arr.length;

  for (let i = 0; i < arr.length; i++) {
    let newIndex = (i - d + arr.length) % arr.length;
    finalArr[newIndex] = arr[i];
  }

  return finalArr;
}
