// Form validation script
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting before validation

    // Get form values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Simple validation
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please write a message.");
        return;
    }

    // If all fields are valid
    alert("Form submitted successfully! 🎉");
});
