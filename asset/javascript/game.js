//variables for game
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourGuess = []; 
var computerChoice;



//to initiate the game
theGame();


function theGame() {
	//letter randomizer
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	var randomLetter = alphabet[Math.floor(Math.random() * 26)];
	var computerChoice = randomLetter;

	console.log(computerChoice); //test
		
	checkIfCorrect();
	function checkIfCorrect() {

		document.onkeyup = function(event) {

			//turns user's unicode into corresponding alphanumeric key,
			//then turns it into a lowercase string.
			var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


			//if statement to prevent user from choosing a key that's not part of
			//the alphabet. a = unicode 65, z = unicode 90.
			if (event.keyCode < 65 || event.keyCode > 90) {
				alert("Invalid Entry");

			//else/if statement to stop user from guess a letter they already guessed
			//and to stop the guesses counter from being deducted for a previous guess
			} else if (yourGuess.indexOf(userChoice) >=0) {
				alert("You already guessed that!");

			//if the user guesses correctly
			} else if (userChoice === computerChoice) {
				console.log("You win."); //test
				//switches still image of black box to animated gif of light bulb flashing
				document.getElementById("image-here").setAttribute("src", "assets/images/light-bulb.gif");
				
				//setTimeout() delays a block of code for x seconds (written in milliseconds). 
				//in this case it will delay the You win! alert for 3 seconds, allowing the gif animation to cycle through. 
				setTimeout(function(){alert("You win!");}, 3000);
				wins = wins + 1;
				document.getElementById("your-wins").innerHTML = wins;

				//this delays the reset of the black box image
				setTimeout(function(){document.getElementById("image-here").setAttribute("src", "assets/images/black-box.png");}, 3000);

				resetGame();