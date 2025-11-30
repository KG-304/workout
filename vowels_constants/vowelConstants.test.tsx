import { NoteStats } from "./NoteStats";

describe("NoteStats - Level 1 (vowel/consonant counts)", () => {
  let ns: NoteStats;

  beforeEach(() => {
    ns = new NoteStats();
  });

  it("starts empty", () => {
    expect(ns.list()).toEqual([]);
    expect(ns.getCounts()).toEqual({
      perItem: [],
      totals: { vowels: 0, consonants: 0 },
    });
  });

  it("adds notes and preserves insertion order", () => {
    ns.add({ id: "a", text: "Hello" });
    ns.add({ id: "b", text: "World" });
    expect(ns.list()).toEqual([
      { id: "a", text: "Hello" },
      { id: "b", text: "World" },
    ]);
  });

  it("computes per-item and total counts (case-insensitive, letters only)", () => {
    ns.add({ id: "x", text: "Hello, World! 123" });
    ns.add({ id: "y", text: "AaEe!!" });

    // Rules recap:
    // - vowels: a e i o u
    // - y counts as consonant
    // "Hello, World!" letters: h e l l o w o r l d
    // vowels: e, o, o = 3; consonants: h,l,l,w,r,l,d = 7
    // "AaEe" letters: a,a,e,e => vowels 4; consonants 0
    expect(ns.getCounts()).toEqual({
      perItem: [
        { id: "x", vowels: 3, consonants: 7 },
        { id: "y", vowels: 4, consonants: 0 },
      ],
      totals: { vowels: 7, consonants: 7 },
    });
  });

  it("treats Y/y as consonant", () => {
    ns.add({ id: "id1", text: "syzygy" }); // s y z y g y
    // vowels: 0; consonants: 6
    expect(ns.getCounts()).toEqual({
      perItem: [{ id: "id1", vowels: 0, consonants: 6 }],
      totals: { vowels: 0, consonants: 6 },
    });
  });

  it("handles empty and non-letter text", () => {
    ns.add({ id: "e1", text: "" });
    ns.add({ id: "e2", text: "123 !@#" });
    expect(ns.getCounts()).toEqual({
      perItem: [
        { id: "e1", vowels: 0, consonants: 0 },
        { id: "e2", vowels: 0, consonants: 0 },
      ],
      totals: { vowels: 0, consonants: 0 },
    });
  });

  it("remove() returns false when id not found and true when removed", () => {
    ns.add({ id: "a", text: "abc" });
    expect(ns.remove("nope")).toBe(false);
    expect(ns.remove("a")).toBe(true);
    expect(ns.list()).toEqual([]);
  });

  it("list() returns a copy (not internal reference)", () => {
    ns.add({ id: "a", text: "abc" });
    const snapshot = ns.list();
    snapshot.push({ id: "HACK", text: "mutate?" });
    expect(ns.list()).toEqual([{ id: "a", text: "abc" }]);
  });

  it("add() with duplicate id replaces text (simple policy)", () => {
    ns.add({ id: "a", text: "aaa" }); // 3 vowels
    ns.add({ id: "a", text: "bbb" }); // replace -> 3 consonants
    expect(ns.getCounts()).toEqual({
      perItem: [{ id: "a", vowels: 0, consonants: 3 }],
      totals: { vowels: 0, consonants: 3 },
    });
  });
});
