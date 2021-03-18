function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring two modes, you have 12 questions to answer each question!</br>'+ // Intro sentence.
	'This trivia covers the Nintendo Gamecube game Animal Corssing! Normal mode contains 21 questions.'+	// Specific information to the game.
	'</br>Special thanks to SirKoto51 for the music used in this game!'+
	'';
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 0;
var externalMusic = "https://www.newgrounds.com/audio/listen/798912";