export class NoteStats {
  private fileList: { id: string; text: string }[] = [];
  vowelLib = ["a", "e", "i", "o", "u"];

  add(item: { id: string; text: string }): void {
    const indexById = this.fileList.findIndex((obj) => obj.id === item.id);

    if (indexById === -1) {
      this.fileList.push(item);
    } else {
      this.fileList[indexById] = item;
    }
  }

  remove(idOfStringToRemove: string): boolean {
    const indexById = this.fileList.findIndex(
      (obj) => obj.id === idOfStringToRemove
    );

    if (indexById === -1) {
      return false;
    } else {
      this.fileList.splice(indexById, 1);
      return true;
    }
  }

  list() {
    const localCopy = [...this.fileList];

    return localCopy;
  }

  getCounts() {
    const vowelSet = new Set(this.vowelLib); // do this for lookup optimizaion, not 100% necessary
    const perItem: { id: string; vowels: number; consonants: number }[] = [];
    let totalVowels = 0; // total vowel count of perItem array
    let totalConsonants = 0; // total consonant count of perItem array

    for (const note of this.fileList) {
      // for each note obj in fileList
      let vowels = 0; // init local count to 0; vowels
      let consonants = 0; // init local count to 0; consonants

      for (const ch of note.text.toLowerCase()) {
        // for loop for each character in string, also make lowercase
        if (!/[a-z]/.test(ch)) continue; //regex to check its an actual letter
        if (vowelSet.has(ch))
          vowels++; // check if a vowel in Set, ++ vowels o(1) lookup
        else consonants++; // otherwise we know its a consonant
      }

      perItem.push({ id: note.id, vowels, consonants }); // push this obj to perItem array
      totalVowels += vowels; // sum together totals for vowels of the current perItem array
      totalConsonants += consonants; // sum together totals for consonants of the current perItem array
    }

    return {
      // return the array and totals
      perItem,
      totals: { vowels: totalVowels, consonants: totalConsonants },
    };
  }
}
