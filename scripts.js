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

// // Array to keep track of order of operations
// let operatorsArray = [];

// Add elements and function to clear display
const display = document.getElementById('display');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');

// Add to display when numbers are clicked
const numbers = document.querySelectorAll('.numbers button');
for (let number of numbers) {
    number.addEventListener('click', function() {
        numberClick(number.textContent);
    });
}

// Add event listeners for operators
const operators = document.querySelectorAll('.operators button');
for (let operator of operators) {
    // Set operators to disabled on page load
    operator.disabled = true;
    operator.addEventListener('click', function() {
        operateClick()
    });
}

clear.addEventListener('click', function() {
    display.textContent = '';
    // operatorsArray = [];
});

// Add event listener for equals
const equals = document.getElementById('equals');
equals.addEventListener('click', function() {
    // const numberArray = display.textContent.split(' ');
    // if (!checkInput(numberArray)) {
    //     display.textContent = 'N/A';
    //     return;
    // }

    // // Remove "operators" from numberArray
    // for (let i = 1; i < numberArray.length; i++) {
    //     numberArray.splice(i, 1);
    // }

    // let i = 0;
    // for (let operator of operatorsArray) {
    //     numberArray[1] = window[operator](+numberArray[0], +numberArray[1]);
    //     numberArray.shift();
    // }
    // display.textContent = Math.round(numberArray[0] * 100) / 100;
    // operatorsArray = [];
})

function operateClick() {

}

function numberClick(number) {
    for (let operator of operators) {
        operator.disabled = false;
    }
    display.textContent += number;
}

function checkDisplay() {
    return display.textContent.split(' ');
}

// Returns true if calculator input is valid
// function checkInput(numberArray) {
//     for (let i = 0; i < numberArray.length; i++) {
//         if (numberArray[i] === ' ' || numberArray[i] === '') {
//             return false;
//         }
//     }
//     if (Number.isNaN(+numberArray[numberArray.length - 1])) {
//         return false;
//     }
//     return true;
// }