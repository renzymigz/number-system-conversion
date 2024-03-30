function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

function resetInput() {
    document.getElementById('inputNumber').value = "";
    displayResult("ANSWER WILL APPEAR HERE", "black");
    playResetSound();
}

function noSpaces(event){
    if (event.keyCode === 32) {
        event.preventDefault();
    }
}

// ---- SOUND SFX ----- //
function playInvalidSound() {
    let invalidSound = document.getElementById("invalidSound");
    invalidSound.currentTime = 0;
    invalidSound.play();
}

function playSuccessfulSound() {
    let successfulSound = document.getElementById("successfulSound");
    successfulSound.currentTime = 0;
    successfulSound.play();
}

function playHoverSound() {
    let hoverSound = document.getElementById("hoverSound");
    hoverSound.currentTime = 0;
    hoverSound.play();
}

function playResetSound() {
    let resetSound = document.getElementById("restartSound");
    resetSound.currentTime = 0;
    resetSound.play();
}
// ----- SUBSCRIPT BASE ------
var subscriptBinary = "\u2082"; // Subscript 2
var subscriptOctal = "\u2088"; // Subscript 8
var subscriptDec = "₁₀";   // Subscript 10
var subscriptHexa = "₁₆";   // Subscript 16

// // ------------------- BINARY CONVERSION --------------------

function binaryToDec() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red"); 
        playInvalidSound();
        return;
    }
    
    let decimalInteger, decimalFractional = 0;
    
    // Split into integer & fractional parts

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    integerPart = Math.abs(integerPart);
    
    // if (parseInt(inputNumber, 2) < 0) {                      // IF DIMO ACCEPT NEGATIVE NUMBER
    //     displayResult("INVALID BINARY NUMBER", "red");
    //     playInvalidSound();
    //     return;
    // }

    // Convert integer part to decimal
    if (isValidInput(integerPart, 2)) {
        decimalInteger = parseInt(integerPart, 2);
    } else {
        displayResult("INVALID BINARY NUMBER", "red");
        playInvalidSound();
        return;
    }

    // Convert fractional part to decimal
    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 2)) {
            for (let i = 0; i < fractionalPart.length; i++) {
                if (fractionalPart[i] === '1') {
                    decimalFractional += Math.pow(2, -(i + 1));
                }
            }
        } else {
            displayResult("INVALID BINARY NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

    // GROUPED SPACES

    while (integerPart.length % 4 !== 0) {
        integerPart = "0" + integerPart;
    }
    
    if (fractionalPart !== ""){
        fractionalPart = "." + fractionalPart;
    }

    if (parseInt(inputNumber) < 0){
        integerPart = "-" + integerPart;
    }

    let formattedBinary = integerPart.replace(/(\d{4})(?=\d)/g, "$1 ") + fractionalPart.replace(/(\d{4})(?=\d)/g, "$1 ");

    let decimalResult = decimalInteger + decimalFractional;

    if (parseInt(inputNumber, 2) < 0){
        decimalResult = "-" + decimalResult;
    }

    displayResult("(" + formattedBinary + ")" +  subscriptBinary + " = " + "(" + decimalResult + ")" + subscriptDec, "black");
    playSuccessfulSound();
}

function binaryToOctal() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red"); 
        playInvalidSound();
        return;
    }
    
    let octalInteger, octalFractional = "";

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    integerPart = Math.abs(integerPart);
    
    if (isValidInput(integerPart, 2)) {
        octalInteger = parseInt(integerPart, 2).toString(8);
    } else {
        displayResult("INVALID BINARY NUMBER", "red");
        playInvalidSound();
        return;
    }


    // Convert fractional part to octal
    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 2)) {
            let decimalFractional = 0;
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFractional += parseInt(fractionalPart[i], 2) * Math.pow(2, -(i + 1));
            }
            octalFractional = decimalFractional.toString(8).substring(1); 
        } else {
            displayResult("INVALID BINARY NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

    while (integerPart.length % 4 !== 0) {
        integerPart = "0" + integerPart;
    }
    
    if (fractionalPart !== ""){
        fractionalPart = "." + fractionalPart;
    }

    if (parseInt(inputNumber) < 0){
        integerPart = "-" + integerPart;
    }

    let formattedBinary = integerPart.replace(/(\d{4})(?=\d)/g, "$1 ") + fractionalPart.replace(/(\d{4})(?=\d)/g, "$1 ");

    let octalResult = octalInteger + octalFractional;

    if (parseInt(inputNumber) < 0){
        octalResult = "-" + octalResult;
    }
    
    displayResult("(" + formattedBinary + ")" +  subscriptBinary + " = " + "(" + octalResult + ")" + subscriptOctal, "black");
    playSuccessfulSound();
}

function binaryToHexa() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");
        playInvalidSound();
        return;
    }

    let decimalInteger, decimalFractional = 0;
    let hexadecimalInteger, hexadecimalFractional = "";

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];
    
    integerPart = Math.abs(integerPart);

    // Convert integer part to decimal
    if (isValidInput(integerPart, 2)) {
        decimalInteger = parseInt(integerPart, 2);
        hexadecimalInteger = decimalInteger.toString(16).toUpperCase();
    } else {
        displayResult("INVALID BINARY NUMBER", "red");
        playInvalidSound();
        return;
    }

    // Convert fractional part to decimal
    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 2)) {
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFractional += parseInt(fractionalPart[i], 2) * Math.pow(2, -(i + 1));
            }
            hexadecimalFractional = decimalFractional.toString(16).substring(1).toUpperCase(); // Remove leading "0."
        } else {
            displayResult("INVALID BINARY NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

   

    while (integerPart.length % 4 !== 0) {
        integerPart = "0" + integerPart;
    }
    
    if (fractionalPart !== ""){
        fractionalPart = "." + fractionalPart;
    }

    if (parseInt(inputNumber) < 0){
        integerPart = "-" + integerPart;
    }

    let formattedBinary = integerPart.replace(/(\d{4})(?=\d)/g, "$1 ") + fractionalPart.replace(/(\d{4})(?=\d)/g, "$1 ");

    let hexadecimalResult = hexadecimalInteger + hexadecimalFractional;

    if (parseInt(inputNumber) < 0){
        hexadecimalResult = "-" + hexadecimalResult;
    }

    displayResult("(" + formattedBinary + ")" + subscriptBinary + " = " + "(" + hexadecimalResult + ")" + subscriptHexa, "black");
    playSuccessfulSound();
}

// // ------------------- OCTAL CONVERSION --------------------

function octalToBinary() {
    let inputNumber = document.getElementById("inputNumber").value;

    let binaryInteger, binaryFractional = "";

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(integerPart, 8)) {
        binaryInteger = Math.abs(parseInt(integerPart, 8)).toString(2);
    } else {
        displayResult("INVALID OCTAL NUMBER", "red");
        playInvalidSound();
        return;
    }

    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 8)) {
            binaryFractional = "";
            for (let i = 0; i < fractionalPart.length; i++) {
                binaryFractional += parseInt(fractionalPart[i], 8).toString(2).padStart(3, '0');
            }
            binaryFractional = "." + binaryFractional;
        } else {
            displayResult("INVALID OCTAL NUMBER", "red");
            playInvalidSound();
            return;
        }
    }
 
    while (binaryInteger.length % 4 !== 0) {
        binaryInteger = "0" + binaryInteger;
    }
    
    if (parseInt(inputNumber) < 0 ){
        binaryInteger = "-" + binaryInteger;
    }

    let binaryResult = binaryInteger.replace(/(\d{4})(?=\d)/g, "$1 ") + binaryFractional.replace(/(\d{4})(?=\d)/g, "$1 ");
    
    displayResult("(" + inputNumber + ")" +  subscriptOctal + " = " + "(" + binaryResult + ")" + subscriptBinary, "black");
    playSuccessfulSound();
    
}

function octalToDec() {
    let inputNumber = document.getElementById("inputNumber").value;

    let decimalInteger, decimalFractional = 0;

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(integerPart, 8)) {
        decimalInteger = parseInt(integerPart, 8);
    } else {
        displayResult("INVALID OCTAL NUMBER", "red");
        playInvalidSound();
        return;
    }

    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 8)) {
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFractional += parseInt(fractionalPart[i], 8) * Math.pow(8, -(i + 1));
            }
        } else {
            displayResult("INVALID OCTAL NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

    let decimalResult = decimalInteger + decimalFractional;
    
    displayResult("(" + inputNumber + ")" +  subscriptOctal + " = " + "(" + decimalResult + ")" + subscriptDec, "black");
    playSuccessfulSound();
}

function octalToHexa() {
    let inputNumber = document.getElementById("inputNumber").value;

    let decimalInteger, decimalFractional = 0.0;

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");
        playInvalidSound();
        return;
    }
    
    if (isValidInput(integerPart, 8)) {
        decimalInteger = parseInt(integerPart, 8);
    } else {
        displayResult("INVALID OCTAL NUMBER", "red");
        playInvalidSound();
        return;
    }

    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 8)) {
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFractional += parseInt(fractionalPart[i], 8) * Math.pow(8, -(i + 1));
            }
        } else {
            displayResult("INVALID OCTAL NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

    let decimalResult = decimalInteger + decimalFractional;

    let hexadecimalResult = decimalResult.toString(16).toUpperCase();

    displayResult("(" + inputNumber + ")" +  subscriptOctal + " = " + "(" + hexadecimalResult + ")" + subscriptHexa, "black");
    playSuccessfulSound();
}

// // ------------------- DECIMAL CONVERSION --------------------

function decToBinary() {
    let inputNumber = document.getElementById("inputNumber").value;

    let binaryInteger, binaryFractional = "";

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];
    
    if (isValidInput(integerPart, 10)) {
        binaryInteger = Math.abs(parseInt(integerPart, 10)).toString(2);
    } else {
        displayResult("INVALID DECIMAL NUMBER", "red");
        playInvalidSound();
        return;
    }
    
    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 10)) {
            binaryFractional = Math.abs(parseFloat("." + fractionalPart, 10)).toString(2).substring(1);
        } else {
            displayResult("INVALID DECIMAL NUMBER", "red");
            playInvalidSound();
            return;
        }
    }
    
    while (binaryInteger.length % 4 !== 0) {
        binaryInteger = "0" + binaryInteger;
    }
    
    if (parseInt(inputNumber) < 0 ){
        binaryInteger = "-" + binaryInteger;
    }
    
    let binaryResult = binaryInteger.replace(/(\d{4})(?=\d)/g, "$1 ") + binaryFractional.replace(/(\d{4})(?=\d)/g, "$1 ");
    
    displayResult("(" + inputNumber + ")" +  subscriptDec + " = " + "(" + binaryResult + ")" + subscriptBinary, "black");
    playSuccessfulSound();
}


function decToOctal() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");
        playInvalidSound();  
        return;
    }
    
    if (isValidInput(inputNumber, 10)) {
        let decimal = parseFloat(inputNumber);
        let octal = decimal.toString(8);
        
        displayResult("(" + inputNumber + ")" + subscriptDec + " = " + "(" + octal + ")" + subscriptOctal, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID DECIMAL NUMBER", "red");
        playInvalidSound();
    }
}

function decToHexa() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 10)) {
        let decimal = parseFloat(inputNumber);
        let hexadecimal = decimal.toString(16).toUpperCase();
        displayResult("(" + inputNumber + ")" + subscriptDec + " = " + "(" + hexadecimal + ")" + subscriptHexa, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID DECIMAL NUMBER", "red");
        playInvalidSound();
    }
}

// // ------------------- HEXA CONVERSION --------------------

function hexaToBinary() {
    let inputNumber = document.getElementById("inputNumber").value;

    let binaryInteger, binaryFractional = "";

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(integerPart, 16)) {
        binaryInteger = Math.abs(parseInt(integerPart, 16)).toString(2);
    } else {
        displayResult("INVALID HEXADECIMAL NUMBER", "red");
        playInvalidSound();
        return;
    }

    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 16)) {
            binaryFractional = "";
            for (let i = 0; i < fractionalPart.length; i++) {
                binaryFractional += parseInt(fractionalPart[i], 16).toString(2).padStart(4, '0');
            }
            binaryFractional = "." + binaryFractional;
        } else {
            displayResult("INVALID HEXADECIMAL NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

    if (fractionalPart !== ""){
        fractionalPart = "." + fractionalPart;
    }

    while (binaryInteger.length % 4 !== 0) {
        binaryInteger = "0" + binaryInteger;
    }
    if (parseInt(inputNumber, 16) < 0){
        binaryInteger = "-" + binaryInteger;
    }

    let binaryResult = binaryInteger.replace(/(\d{4})(?=\d)/g, "$1 ") + binaryFractional.replace(/(\d{4})(?=\d)/g, "$1 ");
    
    displayResult("(" + inputNumber.toUpperCase() + ")" +  subscriptHexa + " = " + "(" + binaryResult + ")" + subscriptBinary, "black");
    playSuccessfulSound();
}

function hexaToOctal() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red"); 
        playInvalidSound();
        return;
    }
    
    let octalInteger, octalFractional = "";

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    if (isValidInput(integerPart, 16)) {
        octalInteger = parseInt(integerPart, 16).toString(8);
    } else {
        displayResult("INVALID HEXADECIMAL NUMBER", "red");
        playInvalidSound();
        return;
    }

    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 16)) {
            let decimalFractional = 0;
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFractional += parseInt(fractionalPart[i], 16) * Math.pow(16, -(i + 1));
            }
            octalFractional = decimalFractional.toString(8).substring(1); 
        } else {
            displayResult("INVALID HEXADECIMAL NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

    while (integerPart.length % 4 !== 0) {
        integerPart = "0" + integerPart;
    }
    
    if (fractionalPart !== ""){
        fractionalPart = "." + fractionalPart;
    }

    let octalResult = octalInteger + octalFractional;
    
    displayResult("(" + inputNumber.toUpperCase() + ")" +  subscriptHexa + " = " + "(" + octalResult + ")" + subscriptOctal, "black");
    playSuccessfulSound();
}

function hexaToDec() {
    let inputNumber = document.getElementById("inputNumber").value;

    let decimalInteger, decimalFractional = 0;

    let [integerPart, fractionalPart] = inputNumber.includes('.') ? inputNumber.split('.') : [inputNumber, ""];

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(integerPart, 16)) {
        decimalInteger = parseInt(integerPart, 16);
    } else {
        displayResult("INVALID HEXADECIMAL NUMBER", "red");
        playInvalidSound();
        return;
    }

    if (fractionalPart !== "") {
        if (isValidInput(fractionalPart, 16)) {
            for (let i = 0; i < fractionalPart.length; i++) {
                decimalFractional += parseInt(fractionalPart[i], 16) * Math.pow(16, -(i + 1));
            }
        } else {
            displayResult("INVALID HEXADECIMAL NUMBER", "red");
            playInvalidSound();
            return;
        }
    }

    let decimalResult = decimalInteger + decimalFractional;
    
    displayResult("(" + inputNumber.toUpperCase() + ")" +  subscriptHexa + " = " + "(" + decimalResult + ")" + subscriptDec, "black");
    playSuccessfulSound();
}

// ----------------- DISPLAY RESULTS --------------------------

function isValidInput(input, base) {
    let regexMap = {
        2: /^-?[01]+(\.[01]+)?$/,
        8: /^-?[0-7]+(\.[0-7]+)?$/,
        10: /^-?\d+(\.\d+)?$/,
        16: /^-?[0-9A-F]+(\.[0-9A-F]+)?$/i
    };
    return regexMap[base].test(input);
}

function displayResult(result, color) {
    let answerElement = document.getElementById("answer");
    answerElement.textContent = result;
    answerElement.style.color = color;
}