import { countVowels, getMax } from "./count_vowels";

describe("countVowels", () => {
  test("counts lowercase vowels", () => {
    expect(countVowels("apploi")).toBe(3);
  });

  test("counts uppercase vowels", () => {
    expect(countVowels("APPLoi")).toBe(3);
  });

  test("counts mixed vowels", () => {
    expect(countVowels("ApPlOi")).toBe(3);
  });
});

describe("getMax", () => {
  test("finds the maximum in a positive array", () => {
    expect(getMax([1, 5, 3, 9, 2])).toBe(9);
  });

  test("handles all negative numbers", () => {
    expect(getMax([-10, -5, -20])).toBe(-5);
  });

  test("handles a single-element array", () => {
    expect(getMax([42])).toBe(42);
  });

  test("returns -Infinity for empty array", () => {
    expect(getMax([])).toBe(-Infinity);
  });
});
