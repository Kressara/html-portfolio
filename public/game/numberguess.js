let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function game() {
    
    tries = tries + 1;
    displayTries.innerHTML = 'Tries: ' + tries;
    if (numberToGuess == myNumber.value) {
        ergebnis.innerHTML = 'Got it! 🎊';
    }
    if (numberToGuess < myNumber.value) {
        ergebnis.innerHTML = 'Your number is too high. 😒';
    }
    if (numberToGuess > myNumber.value) {
        ergebnis.innerHTML = 'Your number is too low! 🤦‍♂️';
    };
};