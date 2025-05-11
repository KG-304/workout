import { bubbleSort } from "./bubble_sort";

describe("bubbleSort", () => {
  it("sorts an already sorted array", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("sorts a reverse-sorted array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("sorts a shuffled array", () => {
    expect(bubbleSort([3, 1, 4, 2, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles an array with duplicates", () => {
    expect(bubbleSort([4, 2, 2, 3, 1])).toEqual([1, 2, 2, 3, 4]);
  });

  it("handles a single-element array", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("handles an empty array", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("handles negative numbers", () => {
    expect(bubbleSort([-1, -3, 2, 0, 1])).toEqual([-3, -1, 0, 1, 2]);
  });
});
