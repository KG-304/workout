import { firstUniqueCharacter } from "./first_unique_character";

describe("firstUniqChar", () => {
  it("returns index of first non-repeating character", () => {
    expect(firstUniqueCharacter("leetcode")).toBe(0); // 'l'
    expect(firstUniqueCharacter("loveleetcode")).toBe(2); // 'v'
    expect(firstUniqueCharacter("aabb")).toBe(-1); // none
    expect(firstUniqueCharacter("z")).toBe(0); // 'z'
    expect(firstUniqueCharacter("xxyyzz")).toBe(-1); // none
  });
});
