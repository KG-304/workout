import { removeDuplicates } from "./remove_duplicates";

describe("removeDuplicates", () => {
  it("removes duplicates and keeps original order", () => {
    expect(removeDuplicates([1, 2, 2, 3, 1, 4])).toEqual([1, 2, 3, 4]);
  });

  it("returns the same array if there are no duplicates", () => {
    expect(removeDuplicates([5, 6, 7])).toEqual([5, 6, 7]);
  });

  it("removes all but first instance of each duplicate", () => {
    expect(removeDuplicates([9, 9, 9, 9])).toEqual([9]);
  });

  it("handles an empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it("handles a single element array", () => {
    expect(removeDuplicates([42])).toEqual([42]);
  });

  it("preserves order when duplicates are non-consecutive", () => {
    expect(removeDuplicates([3, 1, 2, 1, 3, 4])).toEqual([3, 1, 2, 4]);
  });
});
