import compareTriplets from "./compare_score";

describe("compare alice vs bob score", () => {
  it("returns 1,1 if the result is a tie", () => {
    const response = compareTriplets([1, 2, 3], [2, 2, 1]);

    expect(response).toStrictEqual([1, 1]);
  });
});
