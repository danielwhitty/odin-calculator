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

// Variable to keep track of last operator
let lastOperator;

// Add elements and function to clear display
const display = document.getElementById('display');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');
const decimal = document.getElementById('decimal');

// Add to display when numbers are clicked
const numbers = document.querySelectorAll('button.numbers');
for (let number of numbers) {
    number.addEventListener('click', function() {
        numberClick(number.textContent);
    });
}

// Add event listeners for operators
const operators = document.querySelectorAll('button.operators');
for (let operator of operators) {
    // Set operators to disabled on page load
    operator.disabled = true;
    operator.addEventListener('click', function() {
        operateClick(operator)
    });
}

clear.addEventListener('click', function() {
    display.textContent = '';
    for (let operator of operators) {
        operator.disabled = true;
    }
    for (const number of numbers) {
        number.disabled = false;
    }
});

backspace.addEventListener('click', function() {
    let displayArray = Array.from(display.textContent);
    let lastElement = ' ';
    do {
        lastElement = displayArray.pop();
    } while (lastElement === ' ');

    if (lastElement === '+' || lastElement === '-' 
        || lastElement === '\u00f7' || lastElement === '\u00d7') {
            displayArray.pop();
            for (let operator of operators) {
                operator.disabled = false;
            }
        }
    display.textContent = displayArray.toString().replace(/,/g, '');
})

// Add event listener for equals
const equals = document.getElementById('equals');
equals.addEventListener('click', function() {
    const displayArray = checkDisplay();
    if (displayArray.length === 3) {
        display.textContent = getResult(displayArray);
    }
    for (const number of numbers) {
        number.disabled = true;
    }
})

function operateClick(operator) {
    const displayArray = checkDisplay();

    if (displayArray.length === 1) {
        display.textContent += ` ${operator.textContent} `;
    } else {
        let result = getResult(displayArray)
        display.textContent = `${result} ${operator.textContent} `;
    }
    for (let operator of operators) {
        operator.disabled = true;
    }
    for (let number of numbers) {
        number.disabled = false;
    }
    equals.disabled = true;
    lastOperator = operator;
}

function numberClick(number) {
    for (let operator of operators) {
        operator.disabled = false;
    }
    display.textContent += number;
    equals.disabled = false;
    if (number === '.') {
        decimal.disabled = true;
    }
}

function checkDisplay() {
    return display.textContent.split(' ');
}

function getResult(displayArray) {
    let result = window[lastOperator.id](+displayArray[0], +displayArray[2]);
    return Math.round(result * 100) / 100;
}