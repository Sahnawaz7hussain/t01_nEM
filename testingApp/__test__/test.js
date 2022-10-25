describe("toBe or not.toBe", () => {
  test("3 is 3", () => {
    expect(5).toBe(5);
  });

  test("Boolean values", () => {
    expect(true).toBe(true);
    expect(false).toBe(false);
    expect(true).toBe(true);
  });
});
describe("Test for refernce data type", () => {
  test("{}!=={}", () => {
    expect({}).not.toBe({}); // TO BE CHECKS REFERENCE OF THE DATA TYPE.
  });

  test("[] !== []", () => {
    expect([]).not.toBe([]);
  });

  test("Objest a ===Object a", () => {
    let a = {};
    expect(a).toBe(a);
  });
});
describe("toEqual", () => {
  // toEqual checks deep equality it goes inside and checks all key value pairs.
  test("[] is qual to []", () => {
    expect([]).toEqual([]);
  });

  test("[1,2,3,4] to not equal []", () => {
    expect([1, 2, 3, 4]).not.toEqual([]);
  });

  test("[1,2,3,[4,5]] is equal to [1,2,3,[4,5]]", () => {
    expect([1, 2, 3, [4, 5]]).toEqual([1, 2, 3, [4, 5]]);
  });

  test("nested arrays", () => {
    let a = [1, 2, 3];
    let b = [a, a];
    let c = [[1, 2, 3], a];
    expect(b).toEqual(c);
  });
});

describe("test relational operation", () => {
  test("100+100<=200", () => {
    expect(100 + 100).toBeLessThanOrEqual(200);
  });

  test("100+100<201", () => {
    expect(100 + 100).toBeLessThan(201);
  });
  test("100+100>=200", () => {
    expect(100 + 100).toBeGreaterThanOrEqual(200);
  });
});
