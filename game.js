//program data:
/* var number = 4; <<<<== this is hard-coding */
var number = Math.floor(Math.random() * 100) +1 ;
var guess;
var limit = 5;
var won = false;
var guesses = [];

for (var i = 1; i <= limit; i++){
// prompt user for their guess 
//guess = window.prompt ("Guess a number:");
do{
    guess= parseInt(prompt("Guess a number"));
} while (isNaN(guess) || isPreviousGuess());

//if correct: let the user know they won
if (guess == number){
    document.write ("Correct! You won.");
    won = true;
    break;
    }

//if incorrect: let the user know
else{
    guesses[i] = guess;
    window.alert ("Incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit-i));
    }
}

//if the user ran out of tries, let them know the game is over
//if (!won): if "won" is false, the below code block will ran.
if (!won){
    document.write ("Sorry, you ran out of tries. Game over.<br>The correct number was: " + number);
}

function isPreviousGuess(){
    for (i = 0; i < guesses.length; i++){
        if (guesses[i] == guess){
            return true;
        }
    }

    return false;
}