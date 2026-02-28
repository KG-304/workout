// textJustification.test.ts
// Assumes your solution exports: fullJustify(words: string[], maxWidth: number): string[]
import { fullJustify } from "./test_justification";

type Case = {
  name: string;
  words: string[];
  maxWidth: number;
  expected: string[];
};

const cases: Case[] = [
  {
    name: "Example 1 (classic)",
    words: ["This", "is", "an", "example", "of", "text", "justification."],
    maxWidth: 16,
    expected: ["This    is    an", "example  of text", "justification.  "],
  },
  //   {
  //     name: "Example 2 (single-word middle line + last line left-justified)",
  //     words: ["What", "must", "be", "acknowledgment", "shall", "be"],
  //     maxWidth: 16,
  //     expected: ["What   must   be", "acknowledgment  ", "shall be        "],
  //   },
  //   {
  //     name: "Example 3 (larger)",
  //     words: [
  //       "Science",
  //       "is",
  //       "what",
  //       "we",
  //       "understand",
  //       "well",
  //       "enough",
  //       "to",
  //       "explain",
  //       "to",
  //       "a",
  //       "computer.",
  //       "Art",
  //       "is",
  //       "everything",
  //       "else",
  //       "we",
  //       "do",
  //     ],
  //     maxWidth: 20,
  //     expected: [
  //       "Science  is  what we",
  //       "understand      well",
  //       "enough to explain to",
  //       "a  computer.  Art is",
  //       "everything  else  we",
  //       "do                  ",
  //     ],
  //   },

  //   // ---- Extra targeted cases ----

  //   {
  //     name: "Single word input (pad to width)",
  //     words: ["Hello"],
  //     maxWidth: 10,
  //     expected: ["Hello     "],
  //   },
  //   {
  //     name: "Width = 1 (each word is a single char)",
  //     words: ["a", "b", "c"],
  //     maxWidth: 1,
  //     expected: ["a", "b", "c"],
  //   },
  //   {
  //     name: "Exact fit with single spaces (no extra padding needed on non-last line gaps, but line must still be exactly width)",
  //     words: ["ab", "cd", "ef"],
  //     maxWidth: 8,
  //     // "ab cd ef" is length 8 exactly; since it's also the last line here, left-justified == same string.
  //     expected: ["ab cd ef"],
  //   },
  //   {
  //     name: "Uneven spaces distribute to the left slots first",
  //     words: ["a", "b", "c", "d"],
  //     maxWidth: 6,
  //     // Greedy packing: "a b c" fits (len words=3, min spaces=2 => 5), adding "d" would exceed (3+3 spaces=6? actually "a b c d" = 7)
  //     // So first line is full-justified with extra spaces:
  //     // total spaces needed = 6 - (1+1+1) = 3 across 2 gaps => 2 and 1 (left gets more): "a␠␠b␠c"
  //     // last line: "d" padded
  //     expected: ["a  b c", "d     "],
  //   },
  //   {
  //     name: "Line with one word (not last) must be left-justified and padded",
  //     words: ["longword", "a", "b"],
  //     maxWidth: 8,
  //     // "longword" alone on first line (len 8) exact; second line is last: "a b" then pad
  //     expected: ["longword", "a b     "],
  //   },
];

describe("Text Justification", () => {
  test.each(cases)("$name", ({ words, maxWidth, expected }) => {
    const actual = fullJustify(words, maxWidth);

    // Helpful debugging if something is off by invisible spaces:
    const show = (s: string) => JSON.stringify(s);

    expect(actual.map(show)).toEqual(expected.map(show));
    // Also assert exact width on every line:
    for (const line of actual) {
      expect(line.length).toBe(maxWidth);
    }
  });
});
