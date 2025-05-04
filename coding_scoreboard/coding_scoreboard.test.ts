import calculateQuestionAmt from "./coding_scoreboard";

describe.skip("explain how many questions are possible", () => {
  it("returns 4, given there are 6 player with scores of [1, 2, 3, 4, 5, 6], respectively", () => {
    const response = calculateQuestionAmt(6, [1, 2, 3, 4, 5, 6]);

    expect(response).toBe(4);
  });

  it("returns 3, given there are 4 player with scores of [4, 3, 3, 4], respectively", () => {
    const response = calculateQuestionAmt(4, [4, 3, 3, 4]);

    expect(response).toBe(3);
  });

  it("returns 4, given there are 4 player with scores of [2, 4, 6, 8], respectively", () => {
    const response = calculateQuestionAmt(4, [2, 4, 6, 8]);

    expect(response).toBe(4);
  });
});
