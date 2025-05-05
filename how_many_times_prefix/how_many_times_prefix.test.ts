import { howManyTimesPrefix } from "./how_many_times_prefix";

describe("determine how many times a word starts with the given prefix", () => {
  it("returns the number 4 for the given array of strings: [apple, application, banana, app, apply, bat] and the prefix: app", () => {
    const response = howManyTimesPrefix(
      ["apple", "application", "banana", "app", "apply", "bat"],
      "app"
    );

    expect(response).toStrictEqual({
      howManyTimes: 4,
      wordMatches: ["apple", "application", "app", "apply"],
    });
  });

  it("returns the number 4 for the given array of strings: [apple, application, banana, app, apply, bat] and the prefix: app", () => {
    const response = howManyTimesPrefix(
      ["apple", "application", "banana", "app", "apply", "bat", "app", "apple"],
      "app"
    );

    expect(response).toStrictEqual({
      howManyTimes: 4,
      wordMatches: ["apple", "application", "app", "apply"],
    });
  });
});
