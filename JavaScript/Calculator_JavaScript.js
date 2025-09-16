// =======================
// JavaScript Calculator
// (my commented version)
// =======================

// Central state object – I store everything related to the current calculation here.
const Calculator = {
  Display_Value: '0',          // what the screen currently shows
  First_Operand: null,         // the first number (e.g., "12" in "12 + 3")
  Wait_Second_Operand: false,  // when true, the next digit starts a new number
  operator: null,              // current operator symbol ('+', '-', '*', '/', or '=')
};

// Helper: refresh the screen based on the state above.
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

// Handles number key presses (0–9).
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;

  // If I just pressed an operator, the next digit should start a new number.
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    // Otherwise, append the digit (unless the display is '0', then replace it).
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// Handles decimal point. I only allow one '.' per number.
function Input_Decimal(dot) {
  // If I just pressed an operator, I ignore the decimal for now.
  if (Calculator.Wait_Second_Operand === true) return;

  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}

// Handles +, -, *, / and =.
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator;
  const Value_of_Input = parseFloat(Display_Value);

  // If I press two operators in a row, I simply replace the operator.
  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }

  // If this is the first time I press an operator, store the first operand.
  if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
  } else if (operator) {
    // If I already have an operator, perform the previous calculation first.
    let result = Perform_Calculation[operator](First_Operand, Value_of_Input);

    // Round to avoid weird floating errors, then normalize the string.
    result = Number(result).toFixed(9);
    result = (result * 1).toString();

    // Update display and carry the result forward as the new first operand.
    Calculator.Display_Value = parseFloat(result);
    Calculator.First_Operand = parseFloat(result);
  }

  // Now I wait for the next number (the second operand).
  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator;
}

// A small lookup table – maps an operator to the actual math I want to do.
const Perform_Calculation = {
  '/': (a, b) => a / b,
  '*': (a, b) => a * b,
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '=': (a, b) => b, // pressing '=' simply shows the latest value
};

// Clears everything (used by the AC button).
function Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}

// Initial paint so the screen shows '0' on load.
Update_Display();

// Event delegation: I listen on the parent and handle all button clicks here.
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const { target } = event;
  if (!target.matches('button')) return; // ignore clicks outside buttons

  // Branch by button type using CSS classes I put on the HTML.
  if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }

  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }

  // Otherwise it's a digit (0–9).
  Input_Digit(target.value);
  Update_Display();
});
