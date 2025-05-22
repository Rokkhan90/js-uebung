/* Aufgabe 1 */
document.getElementById("changeButton").addEventListener("click", function() {
    document.querySelector("#colorChange").style.color = "orange";
    document.querySelector("#modifyText").textContent = "Die Farbe der Überschrift wurde geändert!";
});
document.getElementById("resetButton").addEventListener("click", function() {
    document.querySelector("#colorChange").style.color = "black";
    document.querySelector("#modifyText").textContent = "Klicken um die Farbe der Überschrift zu ändern und den Text des Absatzes dynamisch zu modifizieren.";
});
/* Aufgabe 2 */
document.getElementById("addButton").addEventListener("click", function() {
    var newElement = document.createElement("p");
    newElement.textContent = "Dies ist ein neuer Absatz, der dynamisch hinzugefügt wurde.";
    document.getElementById("dynamicContent").appendChild(newElement);
});
document.getElementById("clearButton").addEventListener("click", function() {
    var dynamicContent = document.getElementById("dynamicContent");
    while (dynamicContent.firstChild) {
        dynamicContent.removeChild(dynamicContent.firstChild);
    }
});
/* Aufgabe 3 */
document.getElementById("sumButton").addEventListener("click", addition);
function addition() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    const result = Number(number1) + Number(number2);
    document.getElementById("result").textContent = result;
}
/* Aufgabe 4 */
document.getElementById("arrayButton").addEventListener("click", function() {
    let zahlen = [1, 2, 3, 4, 5];
    let outputElement = document.getElementById("arrayOutput");
    outputElement.innerHTML = "";
    for (let i = 0; i < zahlen.length; i++) {
        console.log(zahlen[i]);
        outputElement.innerHTML += zahlen[i] + "<br>";
    }
});
document.getElementById("clearArrayButton").addEventListener("click", function() {
    document.getElementById("arrayOutput").innerHTML = "";
});
/* Aufgabe 5 */
document.getElementById("submitInput").addEventListener("click", function() {
    document.getElementById("inputOutput").textContent = document.getElementById("userInput").value;
    console.log(document.getElementById("userInput").value);
});
/* Aufgabe 6 */
function multiplyNumbers(zahlenListe) {
    let produkt = 1;
    for (let i = 0; i < zahlenListe.length; i++) {
        produkt *= zahlenListe[i];
    }
    return produkt;
}

document.getElementById("multiplyButton").addEventListener("click", function () {
    const inputNumber = document.getElementById("argumentNumber").value;

    const numberArray = inputNumber.split(",").map(num => Number(num.trim()));
    const multiplyResult = multiplyNumbers(numberArray);

    console.log("Produkt:", multiplyResult);
    document.getElementById("multiplyOutput").textContent = "Ergebnis: " + multiplyResult;
});
/* Aufgabe 7 */
document.getElementById("alertButton").addEventListener("click", function() {
    alert(document.getElementById("alertInput").value);
});
/* Aufgabe 8 */
document.getElementById("submitInput8").addEventListener("click", function () {
    const eingabe = document.getElementById("userInput8").value;
    document.getElementById("output").textContent = eingabe;
    console.log(eingabe);
});

