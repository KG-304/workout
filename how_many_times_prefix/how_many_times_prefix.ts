export function howManyTimesPrefix(
  words: string[],
  prefix: string
): { howManyTimes: number; wordMatches: string[] } {
  let wordBank = new Set<string>();

  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(prefix)) {
      wordBank.add(words[i]);
    }
  }

  return { howManyTimes: wordBank.size, wordMatches: Array.from(wordBank) };
}
