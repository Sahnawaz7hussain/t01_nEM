const sum = require("./index");

//describe is describing that what are you testing.
describe("Testing the sum function and returning new sum value", () => {
  // tests are individual edge cases of a test.
  test("Add 2 positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("add 2 negative numbers", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test("add one negative number & one positive number", () => {
    expect(sum(5, -2)).toBe(3);
  });

  test("add two string", () => {
    expect(sum("1", "2")).toBe(3);
  });

  test("Add two floating number", () => {
    expect(sum(1.3, 1.7)).toBe(3);
  });

  test("more than two numbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
