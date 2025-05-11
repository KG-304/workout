import { findKthLargest } from "./find_kth_largest";

describe("findKthLargest", () => {
  it("returns the 1st largest element", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 1)).toBe(6);
  });

  it("returns the 2nd largest element", () => {
    expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
  });

  it("returns the 3rd largest element", () => {
    expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 3)).toBe(5);
  });

  it("works with duplicates", () => {
    expect(findKthLargest([1, 1, 1, 2, 2, 3], 2)).toBe(2);
  });

  it("works with negative numbers", () => {
    expect(findKthLargest([-1, -2, -3, -4, -5], 2)).toBe(-2);
  });

  it("works with single-element array", () => {
    expect(findKthLargest([42], 1)).toBe(42);
  });
});
