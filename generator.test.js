const { describe, expect, test } = require("@jest/globals");
const { transpose, pairWiseTransform, findConsecutive } = require("./problems");

describe("transpose 2d array", () => {
  test("transposes the 2d array", () => {
    const tranposedGenerator = transpose([
      [1, 2, 3],
      [6, 5, 4],
    ]);
    const sequence = tranposedGenerator.next().value;
    expect(sequence).toStrictEqual([1, 6, 2, 5, 3, 4]);
  });
});
