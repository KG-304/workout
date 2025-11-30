import { cleanString, sumNested, wordHistogram } from "./practice";

describe("cleanString", () => {
  test("removes leading and trailing spaces", () => {
    expect(cleanString("   hello world   ")).toBe("hello world");
  });

  test("replaces multiple spaces with one", () => {
    expect(cleanString("hello   world")).toBe("hello world");
  });

  test("handles uppercase and lowercase", () => {
    expect(cleanString("HeLLo WoRLD")).toBe("hello world");
  });

  test("returns empty string if input is only spaces", () => {
    expect(cleanString("     ")).toBe("");
  });

  test("handles single word", () => {
    expect(cleanString(" Word ")).toBe("word");
  });
});

describe("wordHistogram", () => {
  test("counts words correctly", () => {
    expect(wordHistogram("to be or not to be")).toEqual({
      to: 2,
      be: 2,
      or: 1,
      not: 1,
    });
  });

  test("is case-insensitive", () => {
    expect(wordHistogram("A a a B b")).toEqual({ a: 3, b: 2 });
  });

  test("handles empty string", () => {
    expect(wordHistogram("")).toEqual({});
  });
});

describe("sumNested", () => {
  test("handles flat arrays", () => {
    expect(sumNested([1, 2, 3])).toBe(6);
  });

  test("handles nested arrays", () => {
    expect(sumNested([1, [2, [3, 4]], 5])).toBe(15);
  });

  test("handles deeply nested arrays", () => {
    expect(sumNested([[1], [[2, [3]]]])).toBe(6);
  });

  test("handles empty arrays", () => {
    expect(sumNested([])).toBe(0);
  });
});
