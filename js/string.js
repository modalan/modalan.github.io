function generateRandomStrings() {
    var stringList = [];

    for (var i = 1; i <= 5; i++) {
        var input = document.getElementById("string" + i).value.trim();

        if (input.length >= 5 && input.length <= 7) {
            stringList.push(input);
        } else {
            alert("Helytelen input! Kérlek 5-7 karakteres stringet adj meg.");
            return;
        }
    }

    var resultBox = document.getElementById("result-box");
    resultBox.innerHTML = ""; 

    for (var j = 0; j < 3; j++) {
        var randomIndex = Math.floor(Math.random() * stringList.length);
        var randomString = stringList[randomIndex];
        resultBox.innerHTML += "<p>" + randomString + "</p>";
    }
}
