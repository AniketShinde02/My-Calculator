// Function to clear the input
function clearResult() {
    document.getElementById('result').value = '0';
}

// Function to delete the last character from the input
function deleteResult() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1) || '0';
}

// Function to insert a value into the input
function insertValue(char) {
    let display = document.getElementById('result');
    if (display.value === '0' && char !== '.') {
        display.value = char;
    } else {
        display.value += char;
    }
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById('result');
    try {
        display.value = eval(display.value.replace('%', '/100'));
    } catch (e) {
        display.value = 'Error';
    }
}

// Function to handle keypress events
function handleKeyPress(event) {
    const key = event.key;

    if (!isNaN(key)) {
        insertValue(key);
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Backspace') {
        deleteResult();
    } else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearResult();
    } else if (['+', '-', '*', '/', '%', '.'].includes(key)) {
        insertValue(key);
    }
}

// Add event listener for keypress events
document.addEventListener('keydown', handleKeyPress);
