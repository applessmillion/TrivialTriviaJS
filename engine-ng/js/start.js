function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring many questions, you have 12 questions to answer each one!</br>'+ // Intro sentence.
	'This trivia covers the plot, characters, and other elements from the game Yakuza Kiwami 2. Questions will spoil certain story elements, so beware! '+	// Specific information to the game.
	'</br></br>Special thanks to Solargress for the music used in this game!'+
	'';
	
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 1;
var externalMusic = "https://www.newgrounds.com/audio/listen/992664";