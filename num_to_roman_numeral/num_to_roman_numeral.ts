export function intToRoman(crunchThis: number): string {
  let result = "";
  const romanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  for (const [value, symbol] of romanMap) {
    while (crunchThis >= value) {
      crunchThis = crunchThis - value;
      result = result.concat(symbol);
    }
  }

  return result;
}
