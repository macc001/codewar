// run `node index.js` in the terminal

function isDigit(digito) {
  const list = digito.split(' ');
  let cont = 0;
  for (const item of list) {
    if (Number(item)) {
      cont++;
    }
  }
  return cont == 1 ? true : false;
}

//* return true
// console.log(isDigit('3'));
// console.log(isDigit('  3  '));
// console.log(isDigit('-3.23'));
console.log(isDigit('-234.4'));

//* return false
// console.log(isDigit('3-4'));
// console.log(isDigit('  3   5'));
// console.log(isDigit('3 5'));
// console.log(isDigit('zero'));
// console.log(isDigit('s2324'));
