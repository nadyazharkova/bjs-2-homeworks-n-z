"use strict"
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let first_value;
  let second_value;
  let arr = [];
  if (discriminant > 0) {
    first_value = (-b + Math.sqrt(discriminant)) / (2 * a);
    second_value = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr = [first_value, second_value];
    return arr;
  } else if (discriminant == 0) {
    first_value = (-b + Math.sqrt(discriminant)) / (2 * a);
    arr = [first_value];
    return arr;
  } else {
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100 / 12;
  amount = amount - contribution;
  let monthlyPayment = amount * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  let allAmount = monthlyPayment * countMonths;
  allAmount = allAmount.toFixed(2);
  allAmount = Number(allAmount);
  return allAmount;
}