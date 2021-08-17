function isDigit(s) {
  return /^ *-?[0-9]+\.?[0-9]* *$/.test(s);
}

function isDigitV2(s) {
  return s == parseFloat(s);
}

//* return true
// console.log(isDigit('3'));
// console.log(isDigit('  3  '));
console.log(isDigit("-3.23"));
// console.log(isDigit('-234.4'));

//* return false
// console.log(isDigit('3-4'));
// console.log(isDigit('  3   5'));
// console.log(isDigit('3 5'));
// console.log(isDigit('zero'));
// console.log(isDigit('s2324'));
// console.log(isDigit('-3.23 3'));
