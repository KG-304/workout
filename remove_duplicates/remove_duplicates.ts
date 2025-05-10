export function removeDuplicates(arr: number[]): number[] {
  let mySet = new Set<number>();

  for (let i = 0; i < arr.length; i++) {
    mySet.add(arr[i]);
  }

  return Array.from(mySet);
}
