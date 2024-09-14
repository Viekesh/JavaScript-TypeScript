let currInput = "";
let operation = null;

// Clear function clears the calculator display
const clearDisplay = () => {
    document.getElementById("display").value = "";
    currInput = "";
    operation = null;
};

// Append to display func appends the clicked number to the display.
const appendToDisplay = (value) => {
    currInput += value;
    document.getElementById("display").value = currInput;
};

// Set operation function sets the operation to perform.
const setOperation = (ope) => {
    operation = ope;
    currInput += `${ope}`;
    document.getElementById("display").value = currInput;
};

// Calculate function performs the actual calculation
const calculate = () => {
    const [operand1, _, operand2] = currInput.split('');
    let result;

    switch (operation) {
        case "+":
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case "-":
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case "*":
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case "/":
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            result = null;
    };

    document.getElementById("display").value = result;
    currInput = `${result}`;
    operation = null;
};

