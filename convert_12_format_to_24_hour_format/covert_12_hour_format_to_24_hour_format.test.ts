import { timeConversion } from "./covert_12_hour_format_to_24_hour_format";

describe("timeConversion", () => {
  it("should convert 12AM to 00 in 24-hour format", () => {
    expect(timeConversion("12:00:00AM")).toBe("00:00:00");
  });

  it("should leave 12PM unchanged in 24-hour format", () => {
    expect(timeConversion("12:00:00PM")).toBe("12:00:00");
  });

  it("should convert PM times after 12 correctly", () => {
    expect(timeConversion("07:05:45PM")).toBe("19:05:45");
  });

  it("should convert AM times before 12 correctly", () => {
    expect(timeConversion("01:01:00AM")).toBe("01:01:00");
  });

  it("should handle edge case of 11:59:59PM", () => {
    expect(timeConversion("11:59:59PM")).toBe("23:59:59");
  });

  it("should handle edge case of 12:59:59AM", () => {
    expect(timeConversion("12:59:59AM")).toBe("00:59:59");
  });
});
