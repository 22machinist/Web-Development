window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // Define Radial Gradient
    var rg = context.createRadialGradient(350, 300, 80, 360, 250, 80);
    rg.addColorStop(0, "#A7D30C");
    rg.addColorStop(0.9, "#019F62");
    rg.addColorStop(1, "rgba(1,159,98,0)");

    // Set Fill Style to the Radial Gradient
    context.fillStyle = rg;

    // Begin Path and Fill with the Radial Gradient
    context.beginPath();
    context.fillRect(250, 150, 200, 200);
    context.fill(); // Fill the path with the radial gradient
}
