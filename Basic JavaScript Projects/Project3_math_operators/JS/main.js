// This function performs addition and displays the result
function addition() {
    var simple_Math = 5 + 3;
    document.getElementById("Math").innerHTML = "5 + 3 = " + simple_Math;
}

// This function performs subtraction and displays the result
function subtraction_Function() {
    var simple_Math = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + simple_Math;
}

// This function performs multiplication and displays the result
function multiplication_Function() {
    var simple_Math = 4 * 6;
    document.getElementById("Math").innerHTML = "4 x 6 = " + simple_Math;
}

// This function performs division and displays the result
function division_Function() {
    var simple_Math = 20 / 4;
    document.getElementById("Math").innerHTML = "20 / 4 = " + simple_Math;
}

// This function performs multiple math operations: addition, multiplication, division, and subtraction
function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

// This function uses the modulus operator to find the remainder
function modulus_Operator() {
    let result = 25 % 6;
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + result;
}

// This function uses the negation operator to return the opposite value of x
function negation_Operator() {
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}

// This function increases the value of x by 1 and displays it
function increment_Operator() {
    let x = 5;
    x++;
    document.getElementById("Math").innerHTML = "Incremented value: " + x;
}

// This function decreases the value of x by 1 and displays it
function decrement_Operator() {
    let x = 5.25;
    x--;
    document.getElementById("Math").innerHTML = "Decremented value: " + x;
}

// Function to display a random number between 0 and 100
function random_Number() {
    let randomValue = Math.random() * 100;
    document.getElementById("Math").innerHTML = "Random number between 0 and 100: " + randomValue;
}

// Function to demonstrate a Math object method
function math_Method() {
    let number = 7.85;
    let rounded = Math.round(number); // Rounds 7.85 to the nearest whole number
    document.getElementById("Math").innerHTML = "Math.round(7.85) = " + rounded;
}