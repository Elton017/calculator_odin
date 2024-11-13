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
    if (!label.contains(".")) {
        label.textContent += button.textContent;
    }
});