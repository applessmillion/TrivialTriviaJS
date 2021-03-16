function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring two modes, you have 12 questions to answer each question!</br>'+ // Intro sentence.
	'This trivia will quiz you on the different country flags found in Europe! '+	// Specific information to the game.
	'';
	
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 0;
var externalMusic = "https://www.newgrounds.com/audio/listen/990603";