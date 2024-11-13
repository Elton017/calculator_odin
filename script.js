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
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (label.textContent === "Cannot divide by 0" || label.textContent === "Invalid operator") {
            label.textContent = button.textContent;
        } 
        else {
          label.textContent += button.textContent;
        }
    })
});

decimal.addEventListener("click", () => {
    if (!label.textContent.includes(".")) {
        label.textContent += decimal.textContent;
    }
});

operators.forEach(op => {
    op.addEventListener("click", () => {
        operator = op.textContent;
        firstNumber = parseFloat(label.textContent);
        label.textContent = "";
    })
})

equal.addEventListener("click", () => {
    secondNumber = parseFloat(label.textContent)
    const result = operate(firstNumber, secondNumber, operator);
    label.textContent = result;
})

clear.addEventListener("click", () => {
    firstNumber = 0;
    secondNumber = 0;
    label.textContent = ""
})

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key >= 0 && key <= 9) {
        label.textContent += key;
    }

    if (key == "+" || key == "-" || key == "/" || key == "*") {
        operator = key;
        firstNumber = parseFloat(label.textContent);
        label.textContent = "";
    }

    if (key == "=" || key =="Enter") {
        secondNumber = parseFloat(label.textContent);
        const result = operate(firstNumber, secondNumber, operator);
        label.textContent = result; 
    }

    if (key === "Backspace"){
        let text = label.textContent;
        label.textContent = text.slice(0, -1);
    }
})
