import Row from './Row';

// const outputDiv = document.querySelector('#output');
// const inputEl = document.querySelector("input[name='inputTemp']");

// const kelvin = (t) => {
//     return t * 273.15;
// };

// const renderUI = function (t) {
//     outputDiv.innerHTML = Row("Kelvin : ", kelvin(Number(t))) + Row("Fahrenheit :", t);
// };

// inputEl.addEventListener("keyup", function (evt) {
//     evt.preventDefault();

//     renderUI(this.value);
// });



const outputDiv = document.querySelector('#output');
const inputEl = document.querySelector("input[name='inputTemp']");

const convertTemp = function(formula) {
    const template = `
    try {
        if (Number.isFinite(t)) {
            return (${formula}).toPrecision(5);
        }

        throw new Error();
    } catch {
        return "N/A";
    }
    `

    return new Function("t = 0", template);
}

const kelvin = convertTemp("t * 273.15");

const fahrenheit = convertTemp('(t * (9/5)) + 32');

const renderUI = function (t) {
    outputDiv.innerHTML = Row("Kelvin : ", kelvin(Number(t))) + Row("Fahrenheit :", t);
};

inputEl.addEventListener("keyup", function (evt) {
    evt.preventDefault();

    renderUI(this.value);
});