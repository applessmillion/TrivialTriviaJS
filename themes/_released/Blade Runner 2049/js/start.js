function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring 21 questions, you have 12 questions to answer each one!</br>'+ // Intro sentence.
	'This trivia covers the plot, characters, and other elements from the film Blade Runner 2049. Questions will spoil certain plot elements, so beware! '+	// Specific information to the game.
	// '</br></br>Special thanks to USERNAME for the music used in this game! Additional thanks for USERNAME suggesting the theme!'+
	'';
	
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 0;
var externalMusic = "https://www.newgrounds.com/audio/listen/990603";