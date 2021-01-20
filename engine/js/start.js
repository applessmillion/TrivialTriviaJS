function tossStuff(){
	document.getElementById("body-description").innerHTML = 
	'Welcome to Trivial Trivia! Featuring two modes, you have 12 questions to answer each question! '+ // Intro sentence.
	'Normal mode has 21 questions, while Extended mode has 36! '+
	'This trivia is best played if you have completed Yakuza 0. It contains spoilers of the main story and side stories.'+
	'</br></br>Special thanks to LyncanOfficial for the music used in this game!'+
	'';
	
}
/* 	0 for 1 mode (normal)
	1 for 2 modes (normal & extended)
*/
var modes = 1;
var externalMusic = "https://www.newgrounds.com/audio/listen/985070";