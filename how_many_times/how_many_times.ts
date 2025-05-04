export const doTheWork = (wordToCheck: string) => {
  let freq = new Array(26).fill(0);

  for (let i = 0; i < wordToCheck.length; i++) {
    const index = wordToCheck.charCodeAt(i) - 97;
    freq[index] += 1;
  }

  return freq;
};
