// Function to display fruit info using data attribute
function displayInfo(fruit) {
    // Get the custom data attribute value
    let color = fruit.getAttribute("data-fruit-color");

    // Display message in alert
    alert(fruit.innerHTML + " is " + color + " in color.");
}
