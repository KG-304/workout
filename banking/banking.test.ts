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

  describe("scheduled deposits", () => {
    test("scheduleDeposit throws if account does not exist", () => {
      const bank = new Bank();
      expect(() => bank.scheduleDeposit("a", 10, 1000)).toThrow();
    });

    test("scheduleDeposit throws if amount is invalid", () => {
      const bank = new Bank();
      bank.createAccount("a", 0);

      expect(() => bank.scheduleDeposit("a", 0, 1000)).toThrow();
      expect(() => bank.scheduleDeposit("a", -1, 1000)).toThrow();
      expect(() => bank.scheduleDeposit("a", 1.5, 1000)).toThrow();
      expect(() => bank.scheduleDeposit("a", NaN, 1000)).toThrow();
    });

    test("scheduleDeposit throws if timestamp is invalid", () => {
      const bank = new Bank();
      bank.createAccount("a", 0);

      expect(() => bank.scheduleDeposit("a", 10, NaN)).toThrow();
      expect(() => bank.scheduleDeposit("a", 10, 1.1)).toThrow();
    });
  });

  describe("scheduled deposits global limit", () => {
    test("allows up to 5 scheduled deposits total", () => {
      const bank = new Bank();
      bank.createAccount("a", 0);
      bank.createAccount("b", 0);

      expect(() => bank.scheduleDeposit("a", 10, 1000)).not.toThrow();
      expect(() => bank.scheduleDeposit("b", 5, 2000)).not.toThrow();
      expect(() => bank.scheduleDeposit("a", 7, 3000)).not.toThrow();
      expect(() => bank.scheduleDeposit("b", 10, 4000)).not.toThrow();
      expect(() => bank.scheduleDeposit("a", 5, 5000)).not.toThrow();
    });

    test("throws when scheduling more than 5 pending deposits globally", () => {
      const bank = new Bank();
      bank.createAccount("a", 0);
      bank.createAccount("b", 0);

      bank.scheduleDeposit("a", 10, 1000);
      bank.scheduleDeposit("b", 5, 2000);
      bank.scheduleDeposit("a", 7, 3000);
      bank.scheduleDeposit("b", 10, 4000);
      bank.scheduleDeposit("a", 5, 5000);

      expect(() => bank.scheduleDeposit("b", 7, 6000)).toThrow(
        /5 scheduled deposits/i,
      );
    });

    test("processed deposits free up global scheduled capacity", () => {
      const bank = new Bank();
      bank.createAccount("a", 0);
      bank.createAccount("b", 0);

      bank.scheduleDeposit("a", 10, 2000);
      bank.scheduleDeposit("b", 5, 1000);
      bank.scheduleDeposit("a", 7, 5000);
      bank.scheduleDeposit("b", 10, 3000);
      bank.scheduleDeposit("a", 5, 9000);

      // Process first 3
      expect(bank.processScheduledDeposits(3000)).toBe(3);

      // Should now allow more scheduling
      expect(() => bank.scheduleDeposit("b", 20, 6000)).not.toThrow();

      expect(() => bank.scheduleDeposit("a", 1, 7000)).not.toThrow();
    });

    test("processScheduledDeposits does not double-apply the same deposits", () => {
      const bank = new Bank();
      bank.createAccount("a", 0);

      bank.scheduleDeposit("a", 10, 1000);
      expect(bank.processScheduledDeposits(1000)).toBe(1);
      expect(bank.processScheduledDeposits(1000)).toBe(0);
      expect(bank.getBalance("a")).toBe(10);
    });

    test("scheduled deposits affect total holdings only when processed", () => {
      const bank = new Bank();
      bank.createAccount("a", 10);
      bank.createAccount("b", 5);

      const before = bank.getTotalHoldings(); // 15

      bank.scheduleDeposit("a", 10, 1000);
      bank.scheduleDeposit("b", 20, 2000);

      expect(bank.getTotalHoldings()).toBe(before); // still 15

      bank.processScheduledDeposits(1500);
      expect(bank.getTotalHoldings()).toBe(25);

      bank.processScheduledDeposits(2500);
      expect(bank.getTotalHoldings()).toBe(45);
    });
  });

  // test("processing with no eligible deposits returns 0 and changes nothing", () => {
  //   const bank = new Bank();
  //   bank.createAccount("a", 10);

  //   bank.scheduleDeposit("a", 10, 1000);

  //   expect(bank.processScheduledDeposits(999)).toBe(0);
  //   expect(bank.getBalance("a")).toBe(10);
  // });
});
