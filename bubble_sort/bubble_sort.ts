export function bubbleSort(nums: number[]): number[] {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;

        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}
