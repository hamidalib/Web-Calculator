const inputDisplay = document.getElementById("inputNumber");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value =
      button.getAttribute("data-value") || button.textContent.trim();

    switch (value) {
      case "C":
        currentInput = "";
        break;

      case "=":
        try {
          currentInput = eval(currentInput).toString();
        } catch {
          currentInput = "Error";
        }
        break;

      case "+/-":
        if (currentInput) {
          currentInput = (-1 * parseFloat(currentInput)).toString();
        }
        break;

      case "X":
        currentInput += "*";
        break;

      case "÷":
        currentInput += "/";
        break;

      case "%":
        currentInput += "%";
        break;

      case "backspace":
        currentInput = currentInput.slice(0, -1);
        break;

      default:
        currentInput += value;
        break;
    }

    inputDisplay.textContent = currentInput || "0";
  });
});
