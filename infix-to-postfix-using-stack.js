function prec(sym) {
  switch (sym) {
    case '^':
      return 3;
    case '/':
    case '*':
      return 2;
    case '+':
    case '-':
      return 1;
    default:
      return -1;
  }
}

function infixToPostfix(str) {
  let stack = [];
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // all the character of the expression copied here;

    if (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9')
    )
      result += char;
    else if (char === '(') stack.push('(');
    else if (char === ')') {
      while (stack[stack.length - 1] !== '(') {
        result += stack[stack.length - 1];
        stack.pop();
      }
      stack.pop();
    } else {
      while (
        stack.length !== 0 &&
        prec(str[i]) <= prec(stack[stack.length - 1])
      ) {
        result += stack[stack.length - 1];
        stack.pop();
      }
      stack.push(char);
    }
  }

  while (stack.length !== 0) {
    result += stack[stack.length - 1];
    stack.pop();
  }

  return result;
}

let exp = 'A+(B*C-(D/E)*G)*H';
const result = infixToPostfix(exp);
console.log(result);

/* 
 The less than or equal operator (<=) returns true if the left operand is less than or equal to the right operand, and false otherwise
 */
