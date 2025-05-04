import { countCandles } from "./birthday_candles";

describe("birthday candles count", () => {
  it("returns 2 when supplied [1,2,3,4,4]", () => {
    const response = countCandles([1, 2, 3, 4, 4]);

    expect(response).toBe(2);
  });
  it("returns 5 when supplied [1,2,3,4,4,4,4,4]", () => {
    const response = countCandles([1, 2, 3, 4, 4, 4, 4, 4]);

    expect(response).toBe(5);
  });
  it("returns 1 when supplied [1,2,3]", () => {
    const response = countCandles([1, 2, 3]);

    expect(response).toBe(1);
  });
  it("returns 1 when supplied [22,22,30]", () => {
    const response = countCandles([22, 22, 30]);

    expect(response).toBe(1);
  });
});
