import { packBoxes } from "./greedy_truck_space";

describe("packBoxes", () => {
  it("packs the most boxes within the truck space", () => {
    const boxTypes = [
      { count: 5, size: 2 }, // total 10
      { count: 3, size: 5 }, // total 15
      { count: 2, size: 10 }, // total 20
    ];

    const truckSpace = 25;

    const result = packBoxes(boxTypes, truckSpace);

    // We expect: 5 boxes of size 2 + 3 boxes of size 5 = 8 boxes total
    expect(result).toBe(8);
  });

  it("returns 0 if truckSpace is 0", () => {
    const boxTypes = [{ count: 10, size: 1 }];
    expect(packBoxes(boxTypes, 0)).toBe(0);
  });

  it("returns 0 if no boxes fit", () => {
    const boxTypes = [{ count: 5, size: 100 }];
    expect(packBoxes(boxTypes, 10)).toBe(0);
  });
});
