function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring two modes, you have 12 questions to answer each question!</br>'+ // Intro sentence.
	'This trivia covers up to 36 of the state flags in the United States. A picture will be shown and you will have to guess the correct state! '+	// Specific information to the game.
	// '</br></br>Special thanks to USERNAME for the music used in this game! Additional thanks for USERNAME suggesting the theme!'+
	'';
	
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 1;
var externalMusic = "https://www.newgrounds.com/audio/listen/990603";