const btn = document.querySelectorAll("button");
const display = document.querySelector("#display");

let fistNumber = 0;
let operator = "";
let secondNumber = 0;
const Add = (fistNumber, secondNumber) => {
  const result = fistNumber + secondNumber;
  return result;
};

const Substract = (fistNumber, secondNumber) => {
  const result = fistNumber - secondNumber;
  return result;
};

const Multiply = (fistNumber, secondNumber) => {
  const result = fistNumber * secondNumber;
  return result;
};

const Divide = (fistNumber, secondNumber) => {
  const result = fistNumber / secondNumber;
  return result;
};

const operate = (fistNumber, operator, secondNumber) => {
  if (operator === "+") {
    return Add(fistNumber, secondNumber);
  }
  if (operator === "-") {
    return Substract(fistNumber, secondNumber);
  }
  if (operator === "*") {
    return Multiply(fistNumber, secondNumber);
  }
  if (operator === "/") {
    if (secondNumber === 0) {
      alert("Can't divide by zero");
      fistNumber = 0;
      secondNumber = 0;
      operator = "";
      display.textContent = "";
      return;
    }
    return Divide(fistNumber, secondNumber);
  }
};

btn.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (value === "Clear") {
      fistNumber = "";
      operator = "";
      secondNumber = "";
      display.textContent = "";
    }
    if (!isNaN(value) && operator === "") {
      fistNumber = fistNumber * 10 + Number(value);
      display.textContent = fistNumber;
    }
    if (
      fistNumber !== "" &&
      (value === "+" || value === "-" || value === "*" || value === "/")
    ) {
      operator = value;
      display.textContent = fistNumber + operator;
    }
    if (!isNaN(value) && operator !== "") {
      secondNumber = secondNumber * 10 + Number(value);
      display.textContent = fistNumber + operator + secondNumber;
    }
    if (value === "=") {
      const result = operate(fistNumber, operator, secondNumber);
      display.textContent = result;
      fistNumber = result;
      operator = "";
      secondNumber = 0;
    }
  });
});
