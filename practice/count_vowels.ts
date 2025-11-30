export const countVowels = (stringToCheck: string) => {
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);

  const localString = stringToCheck.toLowerCase();

  let vowelCount = 0;

  for (let i = 0; i < stringToCheck.length; i++) {
    if (vowelSet.has(localString.charAt(i))) {
      vowelCount++;
    } else {
      continue;
    }
  }

  return vowelCount;
};

export const getMax = (arrayToCheck: number[]) => {
  if (arrayToCheck.length === 1) {
    return arrayToCheck[0];
  }

  let maxNum = -Infinity;
  for (let i = 0; i < arrayToCheck.length; i++) {
    if (arrayToCheck[i] > maxNum) {
      maxNum = arrayToCheck[i];
    }
  }
  return maxNum;
};
