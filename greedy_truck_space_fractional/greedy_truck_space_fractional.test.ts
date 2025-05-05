import { packBoxesFractional } from "./greedy_truck_space_fractional";

describe("packBoxesFractional", () => {
  it("maximizes total value with full and partial boxes", () => {
    const boxTypes = [
      { count: 3, size: 5, value: 100 }, // 3 full boxes = 15 space, 300 value
      { count: 2, size: 10, value: 200 }, // 2 full boxes = 20 space, 400 value
      { count: 5, size: 2, value: 60 }, // 5 full boxes = 10 space, 300 value
    ];
    const truckSpace = 23;

    // Best pick:
    // 5 boxes of size 2 = 10 space, +300
    // 2 boxes of size 5 = 10 space, +200
    // 3 space left, take 0.3 of a 10-size box (value 200) → +60
    // Total = 300 + 200 + 60 = 560

    const result = packBoxesFractional(boxTypes, truckSpace);
    expect(result).toBeCloseTo(560, 2);
  });

  it("returns 0 if truck is empty", () => {
    const boxTypes = [{ count: 10, size: 1, value: 50 }];
    expect(packBoxesFractional(boxTypes, 0)).toBe(0);
  });

  it("returns partial value if only a fraction of a box fits", () => {
    const boxTypes = [{ count: 1, size: 10, value: 100 }];
    expect(packBoxesFractional(boxTypes, 5)).toBe(50);
  });
});
