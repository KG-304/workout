export const repeatCharater = (stringToCheck: string) => {
  for (let i = 0; i <= stringToCheck.length - 1; i++) {
    let currentLetter = stringToCheck.charAt(i);

    for (let j = i + 1; j <= stringToCheck.length - 1; j++) {
      if (currentLetter === stringToCheck.charAt(j)) {
        return currentLetter;
      } else {
        continue;
      }
    }
  }
  return "";
};
