import { isAnagram } from "./is_it_an_anagram";

describe("isAnagram", () => {
  it("should return true for simple valid anagram", () => {
    expect(isAnagram("listen", "silent")).toBe(true);
  });

  it("should return false for different letters", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });

  it("should return true for same letters in different order", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });

  it("should return false if lengths are different", () => {
    expect(isAnagram("a", "aa")).toBe(false);
  });

  it("should return false if frequencies of letters don't match", () => {
    expect(isAnagram("aabb", "ab")).toBe(false);
  });

  it("should return true for identical strings", () => {
    expect(isAnagram("abc", "abc")).toBe(true);
  });

  it("should return false for edge case with empty strings", () => {
    expect(isAnagram("a", "")).toBe(false);
  });
});
