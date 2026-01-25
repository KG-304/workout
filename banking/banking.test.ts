import { Bank } from "./banking";

describe("Bank transfer exercise", () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank();
  });

  describe("createAccount / getBalance", () => {
    test("creates accounts with initial balances (including 0)", () => {
      bank.createAccount("a", 0);
      bank.createAccount("b", 100);

      expect(bank.getBalance("a")).toBe(0);
      expect(bank.getBalance("b")).toBe(100);
    });

    test("throws when creating duplicate account id", () => {
      bank.createAccount("a", 10);
      expect(() => bank.createAccount("a", 20)).toThrow();
    });

    test("throws when creating account with negative initial balance", () => {
      expect(() => bank.createAccount("a", -1)).toThrow();
    });

    test("getBalance throws for missing account", () => {
      expect(() => bank.getBalance("missing")).toThrow();
    });
  });

  describe("deposit", () => {
    test("deposit increases balance", () => {
      bank.createAccount("a", 10);
      bank.deposit("a", 5);
      expect(bank.getBalance("a")).toBe(15);
    });

    test("deposit throws on missing account", () => {
      expect(() => bank.deposit("missing", 10)).toThrow();
    });

    test("deposit throws on non-positive or non-integer amount", () => {
      bank.createAccount("a", 10);
      expect(() => bank.deposit("a", 0)).toThrow();
      expect(() => bank.deposit("a", -5)).toThrow();
      expect(() => bank.deposit("a", 1.5)).toThrow();
      expect(() => bank.deposit("a", NaN)).toThrow();
    });
  });

  describe("withdraw", () => {
    test("withdraw decreases balance", () => {
      bank.createAccount("a", 10);
      bank.withdraw("a", 3);
      expect(bank.getBalance("a")).toBe(7);
    });

    test("withdraw throws on missing account", () => {
      expect(() => bank.withdraw("missing", 1)).toThrow();
    });

    test("withdraw throws on non-positive or non-integer amount", () => {
      bank.createAccount("a", 10);
      expect(() => bank.withdraw("a", 0)).toThrow();
      expect(() => bank.withdraw("a", -1)).toThrow();
      expect(() => bank.withdraw("a", 2.2)).toThrow();
      expect(() => bank.withdraw("a", NaN)).toThrow();
    });

    test("withdraw throws if it would overdraw", () => {
      bank.createAccount("a", 10);
      expect(() => bank.withdraw("a", 11)).toThrow();
      expect(bank.getBalance("a")).toBe(10); // unchanged
    });
  });

  describe("transfer", () => {
    test("successful transfer moves money between accounts", () => {
      bank.createAccount("a", 100);
      bank.createAccount("b", 10);

      const ok = bank.transfer("a", "b", 30);

      expect(ok).toBe(true);
      expect(bank.getBalance("a")).toBe(70);
      expect(bank.getBalance("b")).toBe(40);
    });

    test("transfer returns false if insufficient funds and is atomic (no partial updates)", () => {
      bank.createAccount("a", 20);
      bank.createAccount("b", 50);

      const ok = bank.transfer("a", "b", 25);

      expect(ok).toBe(false);
      expect(bank.getBalance("a")).toBe(20);
      expect(bank.getBalance("b")).toBe(50);
    });

    test("transfer throws if from account missing", () => {
      bank.createAccount("b", 10);
      expect(() => bank.transfer("missing", "b", 1)).toThrow();
    });

    test("transfer throws if to account missing", () => {
      bank.createAccount("a", 10);
      expect(() => bank.transfer("a", "missing", 1)).toThrow();
    });

    test("transfer throws on invalid amount", () => {
      bank.createAccount("a", 10);
      bank.createAccount("b", 10);

      expect(() => bank.transfer("a", "b", 0)).toThrow();
      expect(() => bank.transfer("a", "b", -1)).toThrow();
      expect(() => bank.transfer("a", "b", 1.1)).toThrow();
      expect(() => bank.transfer("a", "b", NaN)).toThrow();
    });

    test("transfer throws on self-transfer", () => {
      bank.createAccount("a", 10);
      expect(() => bank.transfer("a", "a", 1)).toThrow();
      expect(bank.getBalance("a")).toBe(10);
    });
  });

  describe("total holdings", () => {
    test("getTotalHoldings sums balances", () => {
      bank.createAccount("a", 10);
      bank.createAccount("b", 20);
      bank.createAccount("c", 0);

      expect(bank.getTotalHoldings()).toBe(30);
    });

    test("transfers do not change total holdings", () => {
      bank.createAccount("a", 100);
      bank.createAccount("b", 0);

      const before = bank.getTotalHoldings();
      bank.transfer("a", "b", 60);
      const after = bank.getTotalHoldings();

      expect(before).toBe(after);
      expect(after).toBe(100);
    });

    test("deposit/withdraw change total holdings appropriately", () => {
      bank.createAccount("a", 10);
      bank.createAccount("b", 5);

      expect(bank.getTotalHoldings()).toBe(15);

      bank.deposit("a", 5);
      expect(bank.getTotalHoldings()).toBe(20);

      bank.withdraw("b", 2);
      expect(bank.getTotalHoldings()).toBe(18);
    });

    describe("interview-style scenario test", () => {
      test("sequence of operations with checks after each step", () => {
        bank.createAccount("checking", 100);
        bank.createAccount("savings", 250);

        expect(bank.transfer("checking", "savings", 60)).toBe(true);
        expect(bank.getBalance("checking")).toBe(40);
        expect(bank.getBalance("savings")).toBe(310);

        expect(bank.transfer("checking", "savings", 100)).toBe(false); // insufficient
        expect(bank.getBalance("checking")).toBe(40);
        expect(bank.getBalance("savings")).toBe(310);

        bank.deposit("checking", 10);
        expect(bank.getBalance("checking")).toBe(50);

        bank.withdraw("savings", 10);
        expect(bank.getBalance("savings")).toBe(300);

        expect(bank.getTotalHoldings()).toBe(350);
      });
    });
  });
});
