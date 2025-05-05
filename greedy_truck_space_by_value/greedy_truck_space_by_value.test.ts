import { packBoxesForValue } from "./greedy_truck_space_by_value";

describe("packBoxesForValue", () => {
  it("packs boxes to maximize value", () => {
    const boxTypes = [
      { count: 3, size: 5, value: 100 }, // total 300 value, 15 space
      { count: 2, size: 10, value: 200 }, // total 400 value, 20 space
      { count: 5, size: 2, value: 60 }, // total 300 value, 10 space
    ];

    const truckSpace = 25;

    // Expected: pick 5 boxes of size 2 ($60 each) = 300
    // Then pick 3 boxes of size 5 ($100 each) = 300
    // Total value = 600
    const result = packBoxesForValue(boxTypes, truckSpace);

    expect(result).toBe(600);
  });

  it("returns 0 if truck space is 0", () => {
    const boxTypes = [{ count: 3, size: 5, value: 100 }];
    expect(packBoxesForValue(boxTypes, 0)).toBe(0);
  });

  it("returns 0 if no box can fit", () => {
    const boxTypes = [{ count: 2, size: 100, value: 1000 }];
    expect(packBoxesForValue(boxTypes, 20)).toBe(0);
  });
});
