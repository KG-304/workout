export const getMostFrequentLetter = (wordToCheck: string) => {
  let freq = new Array(26).fill(0);
  let max = 0;
  let showsUpMost;

  if (wordToCheck.length === 0) return undefined;

  for (let i = 0; i < wordToCheck.length; i++) {
    const index = wordToCheck.charCodeAt(i) - 97;
    freq[index] += 1;
    if (max < freq[index]) {
      max = freq[index];
      showsUpMost = wordToCheck.charAt(i);
    }
  }

  return showsUpMost;
};
