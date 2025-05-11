export function findKthLargest(nums: number[], k: number): number {
  const heap: number[] = [];

  for (let num of nums) {
    if (heap.length < k) {
      heap.push(num);
      heap.sort((a, b) => a - b);
    } else if (num > heap[0]) {
      heap.shift();

      heap.push(num);
      heap.sort((a, b) => a - b);
    }
  }

  return heap[0];
}
