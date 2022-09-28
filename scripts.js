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

// Add to display
const numbers = document.querySelectorAll('.numbers button');
for (let number of numbers) {
    number.addEventListener('click', function() {
        display.textContent += number.textContent;
    });
}