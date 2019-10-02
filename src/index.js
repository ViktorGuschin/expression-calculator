function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  function checkBracets(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
      return false;
    }
    const arrBrackets = bracketsConfig.map(el => el[0] + el[1]);
    while (str.length !== 0) {
      let hasBracket = false;
      for (let element of arrBrackets) {
        hasBracket = str.indexOf(element) !== -1;
        if (hasBracket) {
          break;
        }
      }
      if (!hasBracket && str.length !== 0) {
        return false;
      }
      arrBrackets.forEach(element => {
        str = str.split(element).join('');
      });
    }
    return true;
  }
  if (!checkBracets(expr, ['(', ')'])) {
    throw new Error('ExpressionError: Brackets must be paired');
  }
  // write your solution here
}

module.exports = {
  expressionCalculator,
};
