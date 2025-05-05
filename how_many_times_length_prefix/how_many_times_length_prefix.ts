export function groupByPrefix(
  words: string[],
  prefixLength: number
): Map<string, string[]> {
  let prefixMap = new Map();

  for (let i = 0; i < words.length; i++) {
    let wordPrefix = words[i].slice(0, prefixLength);

    if (prefixMap.has(wordPrefix)) {
      const existingPrefixArr = prefixMap.get(wordPrefix);
      existingPrefixArr.push(words[i]);
    } else {
      prefixMap.set(wordPrefix, [words[i]]);
    }
  }

  return prefixMap;
}
