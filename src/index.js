module.exports = function getZerosCount(number, base) {
  // your implementation
  let k = 0;
  for (var i = base; k === 0; i--) {
    if (base % i === 0 && isSimple(i))
      k = i;
  }
  return Math.floor(maxExp(k, number) / exponent(k, base));
}
function isSimple(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0)
      return false;
  }
  return true;
}
function maxExp(simpleNum, num) {
  let k = 0;
  let exp = 1;
  while (true) {
    exp *= simpleNum;
    let addend = Math.floor(num / exp);
    if (addend == 0)
      return k;
    k += addend;
  }
}
function exponent(simpleNum, num) {
  let number = num;
  for (var i = 1; ; i++) {
    number /= simpleNum;
    if (number % simpleNum !== 0)
      return i;
  }
}