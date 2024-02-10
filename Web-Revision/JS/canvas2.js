window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // Linear Gradient
    var lg = context.createLinearGradient(10, 150, 200, 200);
    lg.addColorStop(0, "#B03060");
    lg.addColorStop(0.5, "#4169E1");
    lg.addColorStop(1, "#FFE4E1");
    context.fillStyle = lg;
    context.beginPath();
    context.rect(20, 150, 200, 200);
    context.fill();
}
