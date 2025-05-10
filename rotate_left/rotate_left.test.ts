import { rotateLeft } from "./rotate_left";

describe("rotateLeft", () => {
  it("rotates an array of 5 elements by 2 positions", () => {
    expect(rotateLeft(2, [1, 2, 3, 4, 5])).toEqual([3, 4, 5, 1, 2]);
  });

  it("returns the same array if rotated by 0", () => {
    expect(rotateLeft(0, [10, 20, 30])).toEqual([10, 20, 30]);
  });

  it("rotates an array fully (same length as array)", () => {
    expect(rotateLeft(4, [7, 8, 9, 10])).toEqual([7, 8, 9, 10]);
  });

  it("rotates an array by more than its length (modulo logic)", () => {
    expect(rotateLeft(6, [1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 1]);
  });

  it("handles a single-element array", () => {
    expect(rotateLeft(3, [42])).toEqual([42]);
  });

  it("handles an empty array", () => {
    expect(rotateLeft(2, [])).toEqual([]);
  });
});
