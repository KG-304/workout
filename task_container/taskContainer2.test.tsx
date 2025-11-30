import { TaskContainer } from "./TaskContainer";

describe("TaskContainer - Level 3", () => {
  let tc: TaskContainer;

  beforeEach(() => {
    tc = new TaskContainer();
  });

  describe("filterByPriority()", () => {
    it("returns all tasks with priority >= given min", () => {
      tc.add("clean", 1);
      tc.add("cook", 3);
      tc.add("shop", 2);
      const result = tc.filterByPriority(2);

      expect(result).toEqual([
        { task: "cook", priority: 3 },
        { task: "shop", priority: 2 },
      ]);
    });

    it("returns empty array when none meet the threshold", () => {
      tc.add("clean", 1);
      expect(tc.filterByPriority(5)).toEqual([]);
    });

    it("does not mutate the original taskList", () => {
      tc.add("clean", 1);
      tc.add("cook", 3);
      const snapshot = tc.list();
      tc.filterByPriority(2);
      expect(tc.list()).toEqual(snapshot);
    });
  });

  describe("find()", () => {
    it("returns the priority of the first matching task", () => {
      tc.add("clean", 1);
      tc.add("clean", 5);
      tc.add("cook", 2);

      expect(tc.find("clean")).toBe(1);
      expect(tc.find("cook")).toBe(2);
    });

    it("returns null when task not found", () => {
      tc.add("clean", 1);
      expect(tc.find("shop")).toBeNull();
    });
  });

  describe("reset()", () => {
    it("clears all tasks", () => {
      tc.add("clean", 2);
      tc.add("cook", 1);
      tc.reset();

      expect(tc.count()).toBe(0);
      expect(tc.getHighestPriority()).toBeNull();
      expect(tc.list()).toEqual([]);
    });

    it("works repeatedly without error", () => {
      tc.add("a", 1);
      tc.reset();
      tc.reset(); // should not throw
      expect(tc.count()).toBe(0);
    });
  });
});
