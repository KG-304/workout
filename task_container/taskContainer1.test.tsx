import { TaskContainer } from "./TaskContainer";

describe("TaskContainer - Level 1", () => {
  let tc: TaskContainer;

  beforeEach(() => {
    tc = new TaskContainer();
  });

  it("starts empty", () => {
    expect(tc.list()).toEqual([]);
  });

  it("adds tasks and preserves insertion order", () => {
    tc.add("clean");
    tc.add("cook");
    tc.add("shop");
    expect(tc.list()).toEqual(["clean", "cook", "shop"]);
  });

  //   it("removes the first occurrence of a matching task", () => {
  //     tc.add("clean");
  //     tc.add("cook");
  //     tc.add("clean");
  //     const removed = tc.remove("clean");
  //     expect(removed).toBe(true);
  //     expect(tc.list()).toEqual(["cook", "clean"]);
  //   });

  //   it("returns false if the task to remove is not found", () => {
  //     tc.add("clean");
  //     const result = tc.remove("cook");
  //     expect(result).toBe(false);
  //     expect(tc.list()).toEqual(["clean"]);
  //   });

  //   it("list() returns a copy, not a reference", () => {
  //     tc.add("clean");
  //     const snapshot = tc.list();
  //     snapshot.push("HACK");
  //     expect(tc.list()).toEqual(["clean"]);
  //   });
});
