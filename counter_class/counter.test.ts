import { Counter } from "./counter";

describe("Counter (with undo + boolean returns)", () => {
  describe("constructor invariants", () => {
    test("throws if min is not < max", () => {
      expect(() => new Counter(0, 5, 5)).toThrow();
      expect(() => new Counter(0, 6, 5)).toThrow();
    });

    test("throws if initial is outside [min, max]", () => {
      expect(() => new Counter(-1, 0, 10)).toThrow();
      expect(() => new Counter(11, 0, 10)).toThrow();
    });

    test("does not throw if initial is within [min, max] inclusive", () => {
      expect(() => new Counter(0, 0, 10)).not.toThrow();
      expect(() => new Counter(10, 0, 10)).not.toThrow();
      expect(() => new Counter(5, 0, 10)).not.toThrow();
    });
  });

  describe("increment / decrement return semantics", () => {
    test("increment returns true only when it changes value", () => {
      const c = new Counter(9, 0, 10);

      expect(c.increment()).toBe(true);
      expect(c.getValue()).toBe(10);

      expect(c.increment()).toBe(false);
      expect(c.getValue()).toBe(10);
    });

    test("decrement returns true only when it changes value", () => {
      const c = new Counter(1, 0, 10);

      expect(c.decrement()).toBe(true);
      expect(c.getValue()).toBe(0);

      expect(c.decrement()).toBe(false);
      expect(c.getValue()).toBe(0);
    });
  });

  describe("undo behavior", () => {
    test("undo returns false when there is no history", () => {
      const c = new Counter(5, 0, 10);

      expect(c.undo()).toBe(false);
      expect(c.getValue()).toBe(5);
    });

    test("undo reverts the last successful change (LIFO)", () => {
      const c = new Counter(5, 0, 10);

      expect(c.increment()).toBe(true); // 6
      expect(c.increment()).toBe(true); // 7
      expect(c.getValue()).toBe(7);

      expect(c.undo()).toBe(true); // back to 6
      expect(c.getValue()).toBe(6);

      expect(c.undo()).toBe(true); // back to 5
      expect(c.getValue()).toBe(5);

      expect(c.undo()).toBe(false); // nothing left
      expect(c.getValue()).toBe(5);
    });

    test("failed/no-op operations do not create undo history", () => {
      const c = new Counter(10, 0, 10);

      // increment at max is a no-op
      expect(c.increment()).toBe(false);
      // should not be undoable
      expect(c.undo()).toBe(false);
      expect(c.getValue()).toBe(10);

      // a successful change should be undoable
      expect(c.decrement()).toBe(true); // 9
      expect(c.undo()).toBe(true); // back to 10
      expect(c.getValue()).toBe(10);
    });

    test("sequence: inc/inc/undo/undo/undo", () => {
      const c = new Counter(0, 0, 10);

      expect(c.increment()).toBe(true); // 1
      expect(c.increment()).toBe(true); // 2
      expect(c.getValue()).toBe(2);

      expect(c.undo()).toBe(true); // 1
      expect(c.getValue()).toBe(1);

      expect(c.undo()).toBe(true); // 0
      expect(c.getValue()).toBe(0);

      expect(c.undo()).toBe(false); // still 0
      expect(c.getValue()).toBe(0);
    });

    test("undo does not create new history entries", () => {
      const c = new Counter(0, 0, 10);

      expect(c.increment()).toBe(true); // 1
      expect(c.undo()).toBe(true); // 0

      // If undo created history, another undo might change again.
      expect(c.undo()).toBe(false);
      expect(c.getValue()).toBe(0);
    });
  });
});
