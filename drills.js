function countingSheep(int) {
  for (let i = 0; i < int; i++) {
    console.log(`${int - i}: Another sheep jumps over the fence`)
  }
  console.log('All sheep jumped over the fence')
}

function powerCalculator(base, exp) {
  let result = base;
  for (let i = 1; i <= exp; i++) {
    result = result * base
  }
  return result;
}

function reverseString(string) {
  let result = '';
  for (let i = 1; i <= string.length; i++) {
    result = result.concat(string[string.length - i])
  }
  return result;
}

function nthTriangularNumber(num) {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result = result + i;
  }
  return result;
}

function stringSplitter(string, char) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) !== char) {
      result = result.concat(string.charAt(i))
    }
  }
  return result;
}

function fibonacci(num) {
  const result = [];

  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1)
      result.push(i)
    else
      result.push(result[i - 2] + result[i - 1])
  }
  return result;
}

function factorial(num) {
  let result = 1

  for (let i = 1; i <= num; i++) {
    result = result * i
  }
  return result;
}

module.exports = {
  countingSheep,
  powerCalculator,
  reverseString,
  nthTriangularNumber,
  stringSplitter,
  fibonacci,
  factorial,
}