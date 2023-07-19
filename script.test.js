const sum = require("./script");
const bonus = require("./script");

describe("Тестирование функции calculateBonus", () => {
  it("Вариант когда sum < 50", () => {
    expect(sum(10, 20)).toEqual(30);
  });
  it("Вариант когда sum = 50", () => {
    expect(sum(30, 20)).toEqual(50);
  });
  it("Вариант когда sum > 50", () => {
    expect(sum(30, 20)).toEqual(50);
  });
  it("Вариант когда sum - отрицательное число", () => {
    expect(sum(10, -20)).toEqual(-10);
  });
  it("Вариант когда sum = 0", () => {
    expect(sum(10, -10)).toEqual(0);
  });
});
