// This function creates a car dictionary and deletes one property before displaying
function displayCar() {
    // Creating a dictionary (JavaScript object) with key-value pairs
    var car = {
        Make: "Toyota",
        Model: "Corolla",
        Year: 2020,
        Color: "Blue"
    };

    // Deleting the "Color" property from the dictionary
    delete car.Color;

    // Displaying the value of the "Color" key, which is now undefined
    document.getElementById("Dictionary").innerHTML = car.Color;
}