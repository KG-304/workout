export function firstUniqueCharacter(stringToCheck: string): number {
  const frequency = new Map();

  for (let i = 0; i < stringToCheck.length; i++) {
    const char = stringToCheck[i];

    if (frequency.get(char)) {
      // is the character in the Map already?
      let currentCount = frequency.get(char); // grab that key value pair
      frequency.set(char, currentCount + 1); // set the key value pair with char and the currentcount + 1, note: not ++
    } else {
      frequency.set(char, 1); // count one for the character that doesn't exist in map
    }
  }

  for (const [key, value] of frequency) {
    // iterate through map
    if (value === 1) {
      // the first value we see at value 1
      return stringToCheck.indexOf(key); // return the index of that key in the original string
    }
  }
  return -1; // otherwise if none, return -1
}
