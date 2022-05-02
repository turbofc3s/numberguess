
								
const ranNum = Math.floor(Math.random() * 101)

let tries = 3;

function randomNum() {
	let yourGuess = document.getElementById('guess1').value;


 checkGuess(yourGuess);
	updateTries()
}

function checkGuess(guess1) {
	if(guess1 === ranNum) {
		document.getElementById('answer').innerHTML = "Great Job. You got it right!";
	}

	else if(guess1 < ranNum) {
		document.getElementById('answer').innerHTML = "You entered " + guess1 + ", too low, try again!";
	}												

	else if(guess1 > ranNum) {
		document.getElementById('answer').innerHTML = "You entered " + guess1 + ", too high, try again!";

	}

}						


function updateTries() {
	tries -= 1;

	document.getElementById('tries').innerHTML	= "Your tries: " + tries;

	if(tries < 0) {
		document.getElementById('tries').innerHTML	= "You ran out of tries, the number you wanted is " + ranNum + ". Press F5 to restart the game.";	
		}			
		}			