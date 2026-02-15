const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (!isNaN(value) || value === ".") {
            currentInput += value;
            display.value = currentInput;
        }

        else if (button.classList.contains("operator")) {
            if (currentInput === "") return;
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        }

        else if (button.classList.contains("equal")) {
            if (previousInput === "" || currentInput === "") return;

            let result;
            const prev = parseFloat(previousInput);
            const curr = parseFloat(currentInput);

            if (operator === "+") result = prev + curr;
            else if (operator === "-") result = prev - curr;
            else if (operator === "*") result = prev * curr;
            else if (operator === "/") result = prev / curr;

            display.value = result;
            currentInput = result.toString();
            previousInput = "";
            operator = "";
        }

        else if (button.classList.contains("clear")) {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.value = "";
        }

        else if (button.classList.contains("delete")) {
            currentInput = currentInput.slice(0, -1);
            display.value = currentInput;
        }
    });
});
