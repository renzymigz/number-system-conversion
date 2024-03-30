function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('inputNumber').value = '';
    displayResult("ANSWER WILL APPEAR HERE", "black");
    playResetSound();
});

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
    
    if (isValidInput(inputNumber, 2)) {
        
        while (inputNumber.length % 4 !== 0) {
            inputNumber = "0" + inputNumber;
        }

        let formattedBinary = inputNumber.replace(/(\d{4})(?=\d)/g, "$1 ");
        
        let decimal = parseInt(inputNumber, 2);
        
        displayResult("(" + formattedBinary + ")" +  subscriptBinary + " = " + "(" + decimal + ")" + subscriptDec, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID BINARY NUMBER", "red");
        playInvalidSound();
    }
}

function binaryToOctal() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 2)) {
        let decimal = parseInt(inputNumber, 2);
        let octal = decimal.toString(8);

        while (inputNumber.length % 4 !== 0) {
            inputNumber = "0" + inputNumber;
        }

        let formattedBinary = inputNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

        displayResult("(" + formattedBinary + ")" +  subscriptBinary + " = " + "(" + octal + ")" + subscriptOctal, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID BINARY NUMBER", "red");
        playInvalidSound();
    }
}

function binaryToHexa() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 2)) {
        let decimal = parseInt(inputNumber, 2);
        let hexadecimal = decimal.toString(16).toUpperCase();

        while (inputNumber.length % 4 !== 0) {
            inputNumber = "0" + inputNumber;
        }

        let formattedBinary = inputNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

        displayResult("(" + formattedBinary + ")" +  subscriptBinary + " = " + "(" + hexadecimal + ")" + subscriptHexa, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID BINARY NUMBER", "red");
        playInvalidSound();
    }
}

// // ------------------- OCTAL CONVERSION --------------------

function octalToBinary() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 8)) {
        let decimal = parseInt(inputNumber, 8);
        let binary = Math.abs(decimal).toString(2);
        
        while (binary.length % 4 !== 0) {
            binary = "0" + binary;
        }
        
        let formattedBinary = binary.replace(/(\d{4})(?=\d)/g, "$1 ");
       
        if (decimal < 0){
            formattedBinary = "-" + formattedBinary;
        }

        displayResult("BINARY: " + "(" + formattedBinary + ")" + subscriptBinary, "black");
        playSuccessfulSound();

    } else {
        displayResult("INVALID OCTAL NUMBER", "red");
        playInvalidSound();
    }
}


function octalToDec() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 8)) {
        let decimal = parseInt(inputNumber, 8);
 
        displayResult("DECIMAL: " + "(" + decimal + ")" + subscriptDec, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID OCTAL NUMBER", "red");
        playInvalidSound();
    }
}

function octalToHexa() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 8)) {
        let decimal = parseInt(inputNumber, 8);
        let hexadecimal = decimal.toString(16).toUpperCase();
        displayResult("HEXADECIMAL: " + "(" + hexadecimal + ")" + subscriptHexa, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID BINARY NUMBER", "red");
        playInvalidSound();
    }
}
// // ------------------- DECIMAL CONVERSION --------------------

function decToBinary() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 10)) {
        let decimal = parseFloat(inputNumber);
        let binary = Math.abs(inputNumber).toString(2);
        
        while (binary.length % 4 !== 0) {
            binary = "0" + binary;
        }

        let formattedBinary = binary.replace(/(\d{4})(?=\d)/g, "$1 ");

        if (decimal < 0) {
            formattedBinary = "-" + formattedBinary;
        }

        displayResult("BINARY: " + "(" + formattedBinary + ")" + subscriptBinary, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID DECIMAL NUMBER", "red");
        playInvalidSound();
    }
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
        
        displayResult("OCTAL: " + "(" + octal + ")" + subscriptOctal, "black");
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
        displayResult("HEXADECIMAL: " + "(" + hexadecimal + ")" + subscriptHexa, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID DECIMAL NUMBER", "red");
        playInvalidSound();
    }
}



// // ------------------- HEXA CONVERSION --------------------

function hexaToBinary() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 16)) {
        let decimal = parseInt(inputNumber, 16);
        let binary = Math.abs(decimal).toString(2);
        
        while (binary.length % 4 !== 0) {
            binary = "0" + binary;
        }

        let formattedBinary = binary.replace(/(\d{4})(?=\d)/g, "$1 ");

        if (decimal < 0){
            formattedBinary = "-" + formattedBinary;
        }
      
        displayResult("BINARY: " + "(" + formattedBinary + ")" + subscriptBinary, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID HEXADECIMAL NUMBER", "red");
        playInvalidSound();
    }
}

function hexaToOctal() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 16)) {
        let decimal = parseInt(inputNumber, 16);
        let octal = decimal.toString(8);
        displayResult("OCTAL: " + "(" + octal + ")" + subscriptOctal, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID HEXADECIMAL NUMBER", "red");
        playInvalidSound();
    }
}
ok

function hexaToDec() {
    let inputNumber = document.getElementById("inputNumber").value;

    if (!inputNumber) {
        displayResult("PLEASE ENTER A NUMBER", "red");  
        playInvalidSound();
        return;
    }
    
    if (isValidInput(inputNumber, 16)) {
        let decimal = parseInt(inputNumber, 16);
        displayResult("DECIMAL: " + "(" + decimal + ")" +subscriptDec, "black");
        playSuccessfulSound();
    } else {
        displayResult("INVALID HEXADECIMAL NUMBER", "red");
        playInvalidSound();
    }
}

// ----------------- DISPLAY RESULTS --------------------------

function isValidInput(input, base = 10) {
    let regexMap = {
        2: /^-?[01]+(\.[01]+)?$/,
        8: /^-?[0-7]+(\.[0-7]+)?$/,
        10: /^-?\d+(\.\d+)?$/,
        16: /^-?[0-9A-F]+$/i
    };
    return regexMap[base].test(input);
}

function displayResult(result, color) {
    let answerElement = document.getElementById("answer");
    answerElement.textContent = result;
    answerElement.style.color = color;
}