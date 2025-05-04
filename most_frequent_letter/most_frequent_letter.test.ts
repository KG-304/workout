import { getMostFrequentLetter } from "./most_frequent_letter";

describe("getMostFrequentLetter", () => {
  it('should return "a" for input "banana"', () => {
    const response = getMostFrequentLetter("banana");
    expect(response).toBe("a");
  });

  it('should return "a" for input "abracadabra"', () => {
    const response = getMostFrequentLetter("abracadabra");
    expect(response).toBe("a");
  });

  it('should return "a" for input "abcabc"', () => {
    const response = getMostFrequentLetter("abcabc");
    expect(response).toBe("a"); // a, b, c all appear twice
  });

  it('should return "z" for input "zzzzz"', () => {
    const response = getMostFrequentLetter("zzzzz");
    expect(response).toBe("z");
  });

  it("should return undefined for empty string", () => {
    const response = getMostFrequentLetter("");
    expect(response).toBe(undefined); // edge case
  });
});
