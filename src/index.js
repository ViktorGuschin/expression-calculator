function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  // function checkBracets(str, bracketsConfig) {
  //   if (str.length % 2 !== 0) {
  //     return false;
  //   }
  //   const arrBrackets = bracketsConfig.map(el => el[0] + el[1]);
  //   while (str.length !== 0) {
  //     let hasBracket = false;
  //     for (let element of arrBrackets) {
  //       hasBracket = str.indexOf(element) !== -1;
  //       if (hasBracket) {
  //         break;
  //       }
  //     }
  //     if (!hasBracket && str.length !== 0) {
  //       return false;
  //     }
  //     arrBrackets.forEach(element => {
  //       str = str.split(element).join('');
  //     });
  //   }
  //   return true;
  // }
  // if (!checkBracets(expr, ['(', ')'])) {
  //   throw new Error('ExpressionError: Brackets must be paired');
  // }

  const priority = {
    '*': 2,
    '/': 2,
    '+': 1,
    '-': 1,
  };
  let output = [];
  let stack = [];
  const arrExpr = expr.split(' ').filter(el => el !== '');

  arrExpr.map((el, index) => {
    if (el === '(') {
      stack.push(el);
    } else if (el === ')') {
      while (stack.length > 0 && stack[stack.length - 1] !== '(') {
        output.push(stack.pop());
      }
      if (stack.length === 0) {
        throw new Error('ExpressionError: Brackets must be paired');
      }
      stack.pop();
    } else if (Object.keys(priority).indexOf(el) !== -1) {
      while (priority[stack[stack.length - 1]] >= priority[el]) {
        output.push(stack.pop());
      }
      stack.push(el);
    } else {
      output.push(el);
    }
  });
  while (stack.length > 0) {
    if (Object.keys(priority).indexOf(stack[stack.length - 1]) === -1) {
      throw new Error('ExpressionError: Brackets must be paired');
    }
    output.push(stack.pop());
  }

  return 0;
}

// module.exports = {
//   expressionCalculator,
// };

console.log(
  expressionCalculator(' 72 * 95 + 53 + (  2 + 76 - 52 / 1 - 47  ) '),
);
