export const fullJustify = (words: string[], maxWidth: number) => {
  let finalArr: Array<string>[] = [];
  let lineWords: string[] = [];
  let charCount = 0;

  for (let i = 0; i < words.length; i++) {
    // This, projected = 5, ['This']
    // is, projected = 5 + 3 = 8, ['This', 'is']
    // an, projected = 5 + 3 + 3 = 11, ['This', 'is', 'an']
    // example projected = 11 + 8 = 19, break! -> push ['This', 'is', 'an'] into result
    let projectedCount = charCount + words[i].length + 1;

    console.log(`current: ${charCount}`);
    console.log(`projected: ${projectedCount}`);

    if (projectedCount > maxWidth) {
      // time to flush
      finalArr.push(lineWords);
      lineWords = [];
      charCount = 0;
      lineWords.push(words[i]);
      charCount += words[i].length + 1;
    } else {
      charCount += words[i].length + 1; // account for one space inbetween
      lineWords.push(words[i]);
    }
  }

  console.log(finalArr);
  return [""];
};
