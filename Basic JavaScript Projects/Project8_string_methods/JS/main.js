// ===== Project 8: String & Number Methods =====

// ----- Required 4 -----

function fullSentence() {
  var p1 = "Coding is";
  var p2 = " fun";
  var p3 = " and";
  var p4 = " rewarding.";
  var whole = p1.concat(p2, p3, p4); // join all parts
  document.getElementById("Concatenate").innerHTML = whole;
}

function slice_Method() {
  var line = "Learning JavaScript is empowering!";
  var section = line.slice(9, 19); // "JavaScript"
  document.getElementById("Slice").innerHTML = section;
}

function toString_Method() {
  var n = 256;
  var asText = n.toString(); // convert number -> string
  document.getElementById("Numbers_to_string").innerHTML = asText;
}

function precision_Method() {
  var x = 9876.54321;
  var formatted = x.toPrecision(6); // total digits = 6
  document.getElementById("Precision").innerHTML = formatted;
}

// ----- Extra Demo Methods -----

// toUpperCase(): convert text to uppercase
function upper_Method() {
  var txt = "hello world";
  var result = txt.toUpperCase();
  document.getElementById("Upper").innerHTML = result;
}

// search(): find index of a substring
function search_Method() {
  var sentence = "JavaScript is fun and powerful.";
  var pos = sentence.search("fun"); // should return index of "fun"
  document.getElementById("Search").innerHTML = "Position of 'fun': " + pos;
}

// toFixed(): format number with fixed decimals
function fixed_Method() {
  var num = 7.56789;
  var rounded = num.toFixed(2); // "7.57"
  document.getElementById("Fixed").innerHTML = rounded;
}

// valueOf(): return the primitive value of a number object
function value_Method() {
  var numObj = new Number(42);
  var primitive = numObj.valueOf(); // returns 42
  document.getElementById("Value").innerHTML = primitive;
}
