function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring two modes, you have 12 questions to answer each question!</br>'+ // Intro sentence.
	'This trivia covers the Nintendo 3DS game Animal Corssing: New Leaf! Normal mode contains 21 questions, while Extended contains 36.'+	// Specific information to the game.
	'</br>Special thanks to Qumu for the music used in this game!'+
	'';
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 1;
var externalMusic = "https://www.newgrounds.com/audio/listen/919779";