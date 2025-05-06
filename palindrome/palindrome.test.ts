import { isPalindrome } from "./palindrome";

describe("isPalindrome", () => {
  it("returns true for positive palindrome numbers", () => {
    expect(isPalindrome(121)).toBe(true); // 121 -> 121
    expect(isPalindrome(12321)).toBe(true); // 12321 -> 12321
    expect(isPalindrome(0)).toBe(true); // 0 is trivially a palindrome
  });

  it("returns false for negative numbers", () => {
    expect(isPalindrome(-121)).toBe(false); // -121 -> 121-
    expect(isPalindrome(-1)).toBe(false);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome(10)).toBe(false); // 10 -> 01
    expect(isPalindrome(123)).toBe(false); // 123 -> 321
  });

  it("handles edge cases", () => {
    expect(isPalindrome(1)).toBe(true); // single digit
    expect(isPalindrome(1000021)).toBe(false);
  });
});
