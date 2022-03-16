function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

let result = fullName("jhon", "snow");
let expected = "jhonsnow";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = fullName("arya", "stark");
expected = "aryastark";

if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

function totalAmount(amount, taxRate) {
  return amount + amount * taxRate;
}

result = totalAmount(1000, 0.3);
expected = 1400;
if (result != expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = totalAmount(1000, 2.5);
expected = 3400;
if (result != expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
