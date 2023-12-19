function calculateArea() {
    var height = parseInt(document.getElementById("height").value);
    var base = parseInt(document.getElementById("base").value);
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var angle = parseInt(document.getElementById("angle").value);

    if (!isNaN(height) && !isNaN(base)) {
        // Method 1: Calculate area using height and base
        var area = calculateParallelogramArea(height, base);
        displayOutput("A paralelogramm területe: " + area);
    } else if (!isNaN(side1) && !isNaN(side2) && !isNaN(angle)) {
        // Method 2: Calculate area using side lengths and angle
        var area = calculateParallelogramArea(undefined, undefined, side1, side2, angle);
        displayOutput("A paralelogramma területe: " + area);
    } else {
        displayOutput("Nem megfelelő input! Kérlek, add meg a szükséges adatokat.");
    }
}

function calculateParallelogramArea(height, base, side1, side2, angle) {
    if (!isNaN(height) && !isNaN(base)) {
        // Method 1: Calculate area using height and base
        return height * base;
    } else if (!isNaN(side1) && !isNaN(side2) && !isNaN(angle)) {
        // Method 2: Calculate area using side lengths and angle
        var radians = (angle * Math.PI) / 180;
        return side1 * side2 * Math.sin(radians);
    } else {
        // Invalid input
        return "Nem megfelelő input! Kérlek, add meg a szükséges adatokat.";
    }
}

function displayOutput(message) {
    var outputElement = document.getElementById("output");
    outputElement.innerHTML = message;
}
