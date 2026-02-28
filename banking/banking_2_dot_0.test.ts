import { processEvents } from "./banking_2_dot_0";

describe("processEvents", () => {
  it("happy path: create, deposit, withdraw, balance", () => {
    const events = [
      "CREATE a",
      "DEPOSIT a 10",
      "BALANCE a",
      "WITHDRAW a 7",
      "BALANCE a",
    ];
    expect(processEvents(events)).toEqual(["10", "3"]);
  });

  it.only("example: transfer fails until account exists", () => {
    const events = [
      "CREATE a",
      "DEPOSIT a 10",
      "BALANCE a",
      "WITHDRAW a 7",
      "BALANCE a",
      "TRANSFER a 1 b",
      "CREATE b",
      "TRANSFER a 1 b",
      "BALANCE a",
      "BALANCE b",
    ];
    expect(processEvents(events)).toEqual(["10", "3", "ERROR", "2", "1"]);
  });

  it("CREATE duplicate should ERROR", () => {
    const events = ["CREATE a", "CREATE a", "BALANCE a"];
    expect(processEvents(events)).toEqual(["ERROR", "0"]);
  });

  it("operations on missing account should ERROR", () => {
    const events = [
      "DEPOSIT missing 10",
      "WITHDRAW missing 1",
      "BALANCE missing",
      "TRANSFER missing a 1",
      "CREATE a",
      "TRANSFER a missing 1",
    ];
    expect(processEvents(events)).toEqual([
      "ERROR",
      "ERROR",
      "ERROR",
      "ERROR",
      "ERROR",
    ]);
  });

  it("deposit amount must be > 0", () => {
    const events = ["CREATE a", "DEPOSIT a 0", "DEPOSIT a -5", "BALANCE a"];
    expect(processEvents(events)).toEqual(["ERROR", "ERROR", "0"]);
  });

  it("withdraw amount must be > 0", () => {
    const events = [
      "CREATE a",
      "DEPOSIT a 10",
      "WITHDRAW a 0",
      "WITHDRAW a -1",
      "BALANCE a",
    ];
    expect(processEvents(events)).toEqual(["ERROR", "ERROR", "10"]);
  });

  it("withdraw cannot overdraft", () => {
    const events = ["CREATE a", "DEPOSIT a 5", "WITHDRAW a 6", "BALANCE a"];
    expect(processEvents(events)).toEqual(["ERROR", "5"]);
  });

  it("transfer amount must be > 0", () => {
    const events = [
      "CREATE a",
      "CREATE b",
      "DEPOSIT a 5",
      "TRANSFER a b 0",
      "TRANSFER a b -2",
      "BALANCE a",
      "BALANCE b",
    ];
    expect(processEvents(events)).toEqual(["ERROR", "ERROR", "5", "0"]);
  });

  it("transfer cannot overdraft", () => {
    const events = [
      "CREATE a",
      "CREATE b",
      "DEPOSIT a 5",
      "TRANSFER a b 6",
      "BALANCE a",
      "BALANCE b",
    ];
    expect(processEvents(events)).toEqual(["ERROR", "5", "0"]);
  });

  it("multiple transfers and balances", () => {
    const events = [
      "CREATE a",
      "CREATE b",
      "CREATE c",
      "DEPOSIT a 100",
      "TRANSFER a b 40",
      "TRANSFER b c 10",
      "WITHDRAW c 3",
      "BALANCE a",
      "BALANCE b",
      "BALANCE c",
    ];
    expect(processEvents(events)).toEqual(["60", "30", "7"]);
  });

  it("case sensitivity: A and a are different accounts", () => {
    const events = [
      "CREATE A",
      "CREATE a",
      "DEPOSIT A 5",
      "DEPOSIT a 7",
      "BALANCE A",
      "BALANCE a",
    ];
    expect(processEvents(events)).toEqual(["5", "7"]);
  });

  // --- Optional / policy-dependent tests ---
  // Toggle these based on your parsing decisions.

  it.skip("whitespace robustness (extra spaces) - if you choose to support it", () => {
    const events = ["CREATE    a", "DEPOSIT a   10", "BALANCE    a"];
    expect(processEvents(events)).toEqual(["10"]);
  });

  it.skip("unknown command should ERROR (if you choose to enforce this)", () => {
    const events = ["CREATE a", "FOO a 1", "BALANCE a"];
    expect(processEvents(events)).toEqual(["ERROR", "0"]);
  });

  it.todo(
    "big integer support with BigInt (if you choose to implement BigInt parsing)",
  );
});
