import { TaskContainer } from "./TaskContainer";

describe("TaskContainer - Level 2", () => {
  let tc: TaskContainer;

  beforeEach(() => {
    tc = new TaskContainer();
  });

  it("adds tasks with priorities (default 0)", () => {
    tc.add("clean", 2);
    tc.add("cook");
    expect(tc.list()).toEqual([
      { task: "clean", priority: 2 },
      { task: "cook", priority: 0 },
    ]);
  });

  it("returns task with highest priority", () => {
    tc.add("clean", 1);
    tc.add("cook", 3);
    tc.add("shop", 3);
    expect(tc.getHighestPriority()).toBe("cook"); // earliest of the 3s
  });

  it("returns null when empty", () => {
    expect(tc.getHighestPriority()).toBeNull();
  });

  it("returns correct count", () => {
    tc.add("clean");
    tc.add("cook");
    expect(tc.count()).toBe(2);
  });
});
