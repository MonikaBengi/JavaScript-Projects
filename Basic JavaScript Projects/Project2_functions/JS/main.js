// This function will be called when the button is clicked
function displayMessage() {
    // Assigning a string to the variable
    let message = "This is the beginning of the string";

    // Concatenating the message using the += operator
    message += " and this is the end of the string.";

    // Displaying the message in the paragraph with id="output"
    document.getElementById("output").innerHTML = message;
}