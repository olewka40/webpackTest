import { getSum } from "./getSum";

describe("1 + 2 = 3", () => {
  test("1 + 2 = 3", () => {
    expect(getSum(1, 2)).toEqual(3);
  });
});
