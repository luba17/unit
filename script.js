const calculateBonus = (a, b) => {
  let bonus;
  const sum = a + b;

  sum > 50 ? (bonus = 50) : (bonus = sum);

  return bonus;
};
console.log(calculateBonus(50, 15));

module.exports = calculateBonus;
