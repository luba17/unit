const sum = require("./calculateBonus");

describe("Testing function calculateBonus", () => {
  it("Function should return value < 50", () => {
    expect(sum(10, 20)).toEqual(30);
  });
  it("Function should return value = 50 (sum = 50)", () => {
    expect(sum(30, 20)).toEqual(50);
  });
  it("Function should return value = 50 (sum > 50)", () => {
    expect(sum(40, 20)).toEqual(50);
  });
  it("Function should return negative number (sum - negative number)", () => {
    expect(sum(10, -20)).toEqual(-10);
  });
  it("Function should return 0 (sum = 0)", () => {
    expect(sum(10, -10)).toEqual(0);
  });
});
