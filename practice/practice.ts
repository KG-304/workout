export const cleanString = (stringToTrim: string) => {
  return stringToTrim.trim().replace(/\s+/g, " ").toLowerCase();
};

export const wordHistogram = (stringToCheck: string) => {
  if (stringToCheck === "") {
    return {};
  }

  const stringToArr = stringToCheck.toLocaleLowerCase().split(" ");
  let localRecord: Record<string, number> = {};

  stringToArr.forEach((el) => {
    localRecord[el] = 0;
  });

  for (const key in localRecord) {
    let localCount = 0;
    for (let i = 0; i <= stringToArr.length; i++) {
      if (stringToArr[i] === key) {
        localCount++;
      }
    }
    localRecord[key] = localCount;
  }

  return localRecord;
};

type NestedNumberArray = (number | NestedNumberArray)[];

export const sumNested = (numbers: NestedNumberArray) => {
  let sum = 0;

  for (const el of numbers) {
    if (Array.isArray(el)) {
      sum += sumNested(el);
    } else {
      sum += el;
    }
  }

  return sum;
};
