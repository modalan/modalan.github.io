function calculateStats() {
    var productPrices = [];
    var productNames = [];

    for (var i = 1; i <= 5; i++) {
        var productName = document.getElementById("product" + i).value.trim();
        var productPrice = parseFloat(document.getElementById("price" + i).value);

        if (productName !== "" && !isNaN(productPrice)) {
            productNames.push(productName);
            productPrices.push(productPrice);
        }
    }

    if (productPrices.length === 0) {
        alert("Kérlek, írj be neveket és számokat!");
        return;
    }

    var cheapestProductIndex = findCheapestProductIndex(productPrices);
    var averagePrice = calculateAveragePrice(productPrices);
    var priceDeviation = calculatePriceDeviation(productPrices, averagePrice);

    displayResult("Legolcsóbb termék: " + productNames[cheapestProductIndex], "cheapest-product");
    displayResult("Átlagár: " + averagePrice.toFixed(2), "average-price");
    displayResult("Árak szórása: " + priceDeviation.toFixed(2), "price-deviation");
}

function findCheapestProductIndex(prices) {
    return prices.indexOf(Math.min(...prices));
}

function calculateAveragePrice(prices) {
    var sum = prices.reduce((acc, price) => acc + price, 0);
    return sum / prices.length;
}

function calculatePriceDeviation(prices, averagePrice) {
    var squaredDifferences = prices.map(price => Math.pow(price - averagePrice, 2));
    var averageSquaredDifference = calculateAveragePrice(squaredDifferences);
    return Math.sqrt(averageSquaredDifference);
}

function displayResult(message, elementId) {
    var resultElement = document.getElementById(elementId);
    resultElement.innerHTML = message;
}