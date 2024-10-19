const buttons = document.querySelectorAll('.calc-item button');
const resultDisplay = document.querySelector('.result');

let currentInput = '';
let result = '';

function updateDisplay(value) {
    resultDisplay.textContent = value;
}

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            currentInput = '';
            result = '';
            updateDisplay('0');
        } else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0, -1);
            updateDisplay(currentInput || '0');
        } else if (buttonText === '=') {
            try {
                result = eval(currentInput);
                updateDisplay(result);
                currentInput = result.toString();
            } catch (error) {
                updateDisplay('Error');
                currentInput = '';
            }
        } else {
            currentInput += buttonText;
            updateDisplay(currentInput);
        }
    });
});
