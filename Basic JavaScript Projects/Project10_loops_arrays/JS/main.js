/*************************************************
 * Project 10 — Loops & Arrays (+ extra demos)
 * All functions include brief English comments.
 *************************************************/

/* ========== While Loop ========== */
// Displays numbers 0..4 using a while loop
function while_Loop() {
  let text = "";
  let i = 0;
  while (i < 5) { // runs while condition is true
    text += "Number is " + i + "<br>";
    i++; // increment to avoid infinite loop
  }
  document.getElementById("WhileLoop").innerHTML = text;
}

/* ========== For Loop ========== */
// Iterates over an array of instruments and prints each
function for_Loop() {
  const instruments = ["Guitar", "Drums", "Piano", "Violin"];
  let content = "";
  for (let i = 0; i < instruments.length; i++) {
    content += instruments[i] + "<br>";
  }
  document.getElementById("ForLoop").innerHTML = content;
}

/* ========== Array Example ========== */
// Shows a specific element of an array
function array_Function() {
  const colors = ["Red", "Blue", "Green", "Yellow"];
  // Access index 2 (third item)
  document.getElementById("Array").innerHTML =
    "My favorite color is " + colors[2] + ".";
}

/* ========== Object with let (and a method) ========== */
let car = {
  make: "Toyota",
  model: "Corolla",
  year: "2020",
  color: "black",
  // Method that composes a description using 'this'
  description: function () {
    return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model + ".";
  }
};

// Displays the object description in the HTML
function object_Function() {
  document.getElementById("Car_Object").innerHTML = car.description();
}

/* ========== EXTRA: Break & Continue ========== */
// Demonstrates skipping an iteration (continue) and stopping a loop (break)
function break_and_continue() {
  let out = "";
  for (let i = 1; i <= 10; i++) {
    if (i === 3) continue;      // skip 3
    if (i === 8) {              // stop at 8
      out += " | stopping at " + i;
      break;
    }
    out += i + " ";
  }
  document.getElementById("Break_Continue").innerHTML = out.trim();
}

/* ========== EXTRA: String length ========== */
// Shows how to read the length of a string
function show_length() {
  const msg = "JavaScript loops and arrays";
  const len = msg.length; // counts characters (including spaces)
  document.getElementById("Length_Demo").innerHTML =
    `"${msg}" has length <b>${len}</b>.`;
}

/* ========== EXTRA: return statement ========== */
// Pure function that returns a computed total
function totalPrice(qty, price) {
  return qty * price;
}

// Uses totalPrice() and displays the formatted result
function show_total() {
  const qty = 3;
  const price = 19.99;
  const total = totalPrice(qty, price);
  document.getElementById("Return_Demo").innerHTML =
    `Total for ${qty} × $${price.toFixed(2)} is <b>$${total.toFixed(2)}</b>.`;
}
