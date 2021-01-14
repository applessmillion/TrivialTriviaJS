function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring 21 questions, you have 12 questions to answer each one!</br>'+ // Intro sentence.
	'This trivia covers elements from the game Among Us and it\'s first few expansions. '+	// Specific information to the game.
	'</br></br>Special thanks to Stargame for the music used in this game!'+
	'';
	
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 0;
var externalMusic = "https://www.newgrounds.com/audio/listen/994298";