import { groupByPrefix } from "./how_many_times_length_prefix";

describe("groupByPrefix", () => {
  it("groups words by 2-letter prefix", () => {
    const words = ["app", "apple", "bat", "ball", "banana"];
    const prefixLength = 2;

    const result = groupByPrefix(words, prefixLength);
    const obj = Object.fromEntries(result);

    expect(obj).toEqual({
      ap: ["app", "apple"],
      ba: ["bat", "ball", "banana"],
    });
  });
});
