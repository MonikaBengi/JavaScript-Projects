// Ternary Operator Function - checks if user is tall enough to ride
function ride_Function() {
    let height = document.getElementById("Height").value; // Get value from input
    let canRide = (height >= 120) ? "You are tall enough to ride!" : "Sorry, you are too short.";
    document.getElementById("Ride").innerHTML = canRide; // Display result
}

// Constructor Function for Animal
function Animal(species, age, color) {
    this.Animal_Species = species; // Assign species
    this.Animal_Age = age;         // Assign age
    this.Animal_Color = color;     // Assign color
}

// Creating new objects using the constructor
let Dog = new Animal("Dog", 5, "Brown");
let Cat = new Animal("Cat", 3, "Black");
let Parrot = new Animal("Parrot", 2, "Green");

// Function to display object information
function displayAnimalInfo() {
    document.getElementById("Animal_Info").innerHTML =
        "My pet is a " + Dog.Animal_Color + " " + Dog.Animal_Species +
        " who is " + Dog.Animal_Age + " years old.";
}
displayAnimalInfo();

// Nested Function Example - counter
function count_Function() {
    document.getElementById("Nested_Function_Result").innerHTML = count();

    function count() {
        let startingPoint = 5; // Start number
        function plusTwo() { startingPoint += 2; } // Add 2
        plusTwo();
        return startingPoint;
    }
}
