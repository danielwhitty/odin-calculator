function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(func, a, b) {
    return func(a, b);
}

// Add elements and function to clear display
const display = document.getElementById('display');
const clear = document.getElementById('clear');

clear.addEventListener('click', function() {
    display.textContent = '';
});

// Array to keep track of order of operations
let operatorsArray = [];

// Add event listener for equals
const equals = document.getElementById('equals');
equals.addEventListener('click', function() {
    
});

// Add to display when numbers are clicked
const numbers = document.querySelectorAll('.numbers button');
for (let number of numbers) {
    number.addEventListener('click', function() {
        display.textContent += number.textContent;
    });
}

// Add event listeners for operators
const operators = document.querySelectorAll('.operators button');
for (let operator of operators) {
    operator.addEventListener('click', function() {
        display.textContent += ` ${operator.textContent} `;
        operatorsArray.push(operator.id);
    });
}