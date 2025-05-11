export function binarySearch(numbers: number[], target: number): number {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
