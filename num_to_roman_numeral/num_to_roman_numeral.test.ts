import { intToRoman } from "./num_to_roman_numeral";

describe("intToRoman", () => {
  it("converts 1-10 correctly", () => {
    expect(intToRoman(1)).toBe("I");
    expect(intToRoman(4)).toBe("IV");
    expect(intToRoman(5)).toBe("V");
    expect(intToRoman(9)).toBe("IX");
    expect(intToRoman(10)).toBe("X");
  });

  it("handles typical numbers", () => {
    expect(intToRoman(13)).toBe("XIII");
    expect(intToRoman(27)).toBe("XXVII");
    expect(intToRoman(44)).toBe("XLIV");
    expect(intToRoman(58)).toBe("LVIII");
  });

  it("handles hundreds", () => {
    expect(intToRoman(90)).toBe("XC");
    expect(intToRoman(99)).toBe("XCIX");
    expect(intToRoman(246)).toBe("CCXLVI");
  });

  it("handles thousands", () => {
    expect(intToRoman(1000)).toBe("M");
    expect(intToRoman(1987)).toBe("MCMLXXXVII");
    expect(intToRoman(1994)).toBe("MCMXCIV");
    expect(intToRoman(2024)).toBe("MMXXIV");
  });

  it("handles maximum input", () => {
    expect(intToRoman(3999)).toBe("MMMCMXCIX");
  });
});
