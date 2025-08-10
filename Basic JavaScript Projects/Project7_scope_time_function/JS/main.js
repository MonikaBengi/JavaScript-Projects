// 🌍 Global variable example
var petName = "Bubu";

// Function to show global variable
function showGlobal() {
    document.getElementById("globalExample").innerHTML =
        "My pet's name is " + petName;
}

// 🏠 Local variable example
function showLocal() {
    let favoriteColor = "pink"; // Local variable
    document.getElementById("localExample").innerHTML =
        "My favorite color is " + favoriteColor;
}

// ❌ Error example to debug with console.log()
function showError() {
    let city = "London";
    console.log("City variable inside function: " + city);
    try {
        // Trying to use a variable that doesn't exist
        document.getElementById("errorExample").innerHTML = "I live in " + country;
    } catch (err) {
        document.getElementById("errorExample").innerHTML =
            "Error found! Check the console for details.";
        console.log("Error message: " + err.message);
    }
}

// 🕒 Time function example
function Time_function() {
    let currentHour = new Date().getHours();
    let reply;

    if (currentHour < 12) {
        reply = "Good morning! 🌞";
    } else if (currentHour < 18) {
        reply = "Good afternoon! ☀️";
    } else {
        reply = "Good evening! 🌙";
    }

    document.getElementById("timeMessage").innerHTML = reply;
}
