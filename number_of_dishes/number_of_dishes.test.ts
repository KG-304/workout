import { countDishes } from "./number_of_dishes";

describe("what can I eat?", () => {
  it("returns 5 given N = 6, D = [1, 2, 3, 3, 2, 1], K = 1", () => {
    const response = countDishes([1, 2, 3, 3, 2, 1], 1);

    expect(response).toBe(5);
  });

  it("returns 4 given N = 6, D = [1, 2, 3, 3, 2, 1], K = 2", () => {
    const response = countDishes([1, 2, 3, 3, 2, 1], 2);

    expect(response).toBe(4);
  });
});

/* 
[]
[1.....]



*/
/* 
iterate through eaten array starting at skipNum up to i, if not there, eat

*/
