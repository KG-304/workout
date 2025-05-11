import { romanToInt } from "./calculate_roman_numerals";

describe("romanToInt", () => {
  it("converts single numerals correctly", () => {
    expect(romanToInt("I")).toBe(1);
    expect(romanToInt("V")).toBe(5);
    expect(romanToInt("X")).toBe(10);
    expect(romanToInt("L")).toBe(50);
    expect(romanToInt("C")).toBe(100);
    expect(romanToInt("D")).toBe(500);
    expect(romanToInt("M")).toBe(1000);
  });

  it("handles additive cases", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("VIII")).toBe(8);
    expect(romanToInt("XIII")).toBe(13);
    expect(romanToInt("XXVII")).toBe(27);
  });

  it("handles subtractive cases", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
  });

  it("handles mixed additive and subtractive cases", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
    expect(romanToInt("MCMLIV")).toBe(1954);
    expect(romanToInt("MMXXIV")).toBe(2024);
    expect(romanToInt("CCXLVI")).toBe(246);
  });

  it("handles largest standard Roman numeral", () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999); // 1000+1000+1000+900+90+9
  });
});
