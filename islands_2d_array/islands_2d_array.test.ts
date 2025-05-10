import { countIslands } from "./islands_2d_array";

describe("countIslands", () => {
  it("returns 0 for an empty grid", () => {
    expect(countIslands([])).toBe(0);
  });

  it("returns 0 when grid has only water", () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(countIslands(grid)).toBe(0);
  });

  it("returns 1 for a single land cell", () => {
    const grid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(countIslands(grid)).toBe(1);
  });

  it("returns 1 for a connected land mass", () => {
    const grid = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ];
    expect(countIslands(grid)).toBe(1);
  });

  it("returns 2 for two separate islands", () => {
    const grid = [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];
    expect(countIslands(grid)).toBe(2);
  });

  it("returns 4 for multiple small islands", () => {
    const grid = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ];
    expect(countIslands(grid)).toBe(4);
  });
});
