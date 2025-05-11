import { binarySearch } from "./binary_search";

describe("binarySearch", () => {
  it("returns correct index for target in middle", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2);
  });

  it("returns correct index for target at start", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 1)).toBe(0);
  });

  it("returns correct index for target at end", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 9)).toBe(4);
  });

  it("returns -1 for target not in array", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 6)).toBe(-1);
  });

  it("returns -1 for empty array", () => {
    expect(binarySearch([], 3)).toBe(-1);
  });

  it("returns correct index for single-element array", () => {
    expect(binarySearch([10], 10)).toBe(0);
    expect(binarySearch([10], 5)).toBe(-1);
  });
});
