// test framework
function test(message, cb) {
  try {
    cb();
    console.log(`✅ ${message}`);
  } catch (error) {
    console.error(error);
    console.log(`❌ ${message}`);
  }
}

// assertion library
function expect(actual) {
  return {
    toEqual: function (expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    tobeNumber: function () {
      if (isNaN(typeof actual)) {
        throw new Error(`actual is ${actual}`);
      }
    },
  };
}

function sum(numA, numB) {
  return numA + numB;
}

function multiply(numA, numB) {
  return numA * numB;
}

// sum Test
console.group("sum");
test(`3 and 4 is equal to be 7`, () => {
  expect(sum(3, 4)).toEqual(7);
});

test(`9 and 9 is equal to be 18`, () => {
  expect(sum(9, 9)).toEqual(18);
});

test(`12 and 2 is equal to be 14`, () => {
  expect(sum(12, 2)).toEqual(13);
});

test(`17 and 3 is equal to be 20`, () => {
  expect(sum(17, 3)).toEqual(20);
});
test(`25 and 25 is equal to be 50`, () => {
  expect(sum(25, 25)).toEqual(50);
});
test(`we can't add 'sum' and 25`, () => {
  expect(sum("sum", 25)).tobeNumber();
});

test(`we can't add undefined and 25`, () => {
  expect(sum(undefined, 25)).tobeNumber();
});
console.groupEnd();

// multiply test
console.group("multiply");
test(`multiply of 3 and 3 is 9`, () => {
  expect(multiply(3, 3)).toEqual(9);
});
test(`we can't multiply 'sum' and 3`, () => {
  expect(multiply("sum", 3)).tobeNumber();
});
test(`multiply of 7 and 3 is 21`, () => {
  expect(multiply(7, 3)).toEqual(21);
});
test(`multiply of 22 and 2 is 44`, () => {
  expect(multiply(22, 2)).toEqual(43);
});
test(`multiply of 30 and 3 is 90`, () => {
  expect(multiply(30, 3)).toEqual(90);
});
console.groupEnd();
