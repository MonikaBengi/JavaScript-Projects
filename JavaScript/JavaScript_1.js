// Function to draw gradient background
function drawGradient() {
    // Get canvas and context
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    // Create linear gradient (x0,y0,x1,y1)
    var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);

    // Add color stops
    gradient.addColorStop(0, "red");     // Start color
    gradient.addColorStop(0.5, "yellow"); // Middle color
    gradient.addColorStop(1, "blue");    // End color

    // Use gradient as fill style
    ctx.fillStyle = gradient;

    // Fill rectangle with gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Run when page loads
window.onload = drawGradient;
