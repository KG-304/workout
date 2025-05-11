export function romanToInt(s: string): number {
  let romanNumeralMap = new Map<string, number>();

  romanNumeralMap.set("I", 1);
  romanNumeralMap.set("V", 5);
  romanNumeralMap.set("X", 10);
  romanNumeralMap.set("L", 50);
  romanNumeralMap.set("C", 100);
  romanNumeralMap.set("D", 500);
  romanNumeralMap.set("M", 1000);

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let current = romanNumeralMap.get(s[i])!;
    let next = romanNumeralMap.get(s[i + 1])!;
    if (current < next) {
      count = count + (next - current);
      i++;
    } else {
      count = count + current;
    }
  }

  return count;
}
