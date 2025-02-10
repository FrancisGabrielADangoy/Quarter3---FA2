function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num2 !== 0 ? (num1 / num2).toFixed(2) : "undefined (cannot divide by zero)";
}

function mod(num1, num2) {
  return num2 !== 0 ? num1 % num2 : "undefined (cannot divide by zero)";
}

function displayResult(operation, num1, num2, result) {
  let operationText = {
      '+': "sum",
      '-': "difference",
      '*': "product",
      '/': "quotient",
      '%': "remainder"
  };
  
  document.getElementById('result').innerHTML = `The ${operationText[operation]} of ${num1} and ${num2} is ${result}`;
}

function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let resultText = "Please enter valid numbers.";

  if (!isNaN(num1) && !isNaN(num2)) {
      let result;
      switch (operator) {
          case '+':
              result = add(num1, num2);
              break;
          case '-':
              result = sub(num1, num2);
              break;
          case '*':
              result = mul(num1, num2);
              break;
          case '/':
              result = div(num1, num2);
              break;
          case '%':
              result = mod(num1, num2);
              break;
      }
      displayResult(operator, num1, num2, result);
  } else {
      document.getElementById('result').innerHTML = resultText;
  }
}
