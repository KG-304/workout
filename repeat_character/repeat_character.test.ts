import { repeatCharater } from "./repeat_character";

describe("Repeat Character", () => {
  it("returns a when given the string aabcd", () => {
    const response = repeatCharater("aabcd");

    expect(response).toEqual("a");
  });

  it("returns c when given the string abccd", () => {
    const response = repeatCharater("abccd");

    expect(response).toEqual("c");
  });

  it("returns an empty string if no duplicate is identified", () => {
    const response = repeatCharater("qwertyuiop");

    expect(response).toEqual("");
  });

  it("returns z when provided the string zasz", () => {
    const response = repeatCharater("zasz");

    expect(response).toEqual("z");
  });

  it("returns r when provided the string potiyuansmdfrr", () => {
    const response = repeatCharater("potiyuansmdfrr");

    expect(response).toEqual("r");
  });

  it("returns null when provided an empty string", () => {
    const response = repeatCharater("");

    expect(response).toEqual("");
  });
});
