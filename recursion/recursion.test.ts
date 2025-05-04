import { sumNested, sumTo } from "./recursion";

describe("recursion basic", () => {
  it("returns 15 as an output when given the number 5", () => {
    const response = sumTo(5);

    expect(response).toBe(15);
  });

  it("returns 6 as an output when given the number 3", () => {
    const response = sumTo(3);

    expect(response).toBe(6);
  });

  it("returns 55 as an output when given the number 10", () => {
    const response = sumTo(10);

    expect(response).toBe(55);
  });
});

describe("recursion slightly harder", () => {
  it("returns 15 when given an input like [1, [2, [3, 4]], 5]", () => {
    const response = sumNested([1, [2, [3, 4]], 5]);

    expect(response).toBe(15);
  });

  it("returns 0 when given input an empty array", () => {
    const response = sumNested([]);

    expect(response).toBe(0);
  });
});
