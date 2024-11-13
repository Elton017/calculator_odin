const add = function(num1, num2){
    return num1 + num2;
}

const subtract = function(num1, num2){
    return num1 - num2;
}

const multiply = function(num1, num2){
    return num1 * num2;
}

const divide = function(num1, num2){
    return num1 / num2;
}

const operate = function(num1, num2, op) {
    let result;
    switch (op) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "/":
            if(num2 == 0) {
                result = "Cannot divide by 0";
            }
            else {
                result = divide(num1, num2);
            }
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const label = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector("#decimal");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        label.textContent += button.textContent;
    })
});

decimal.addEventListener("click", () => {
    if (!label.textContent.includes(".")) {
        label.textContent += decimal.textContent;
    }
});

