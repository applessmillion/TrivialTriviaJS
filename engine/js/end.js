function tossStuff(){
	document.getElementById("scoretotal").innerHTML = ""+localStorage.latestscore;
	
	/* This will make it annoying to manually change variables in dev console. */
	setInterval(timerCountdown, 500);
}

/* Incredibly basic anticheat. Basically makes cheating more annoying. */
function timerCountdown(){
	document.getElementById("scoretotal").innerHTML = ""+localStorage.latestscore;
	localStorage.latestscore = localStorage.latestscore;
	
	/* If we have a score above 21, we don't have a score anymore. */
	if(localStorage.latestscore > 21){
		localStorage.latestscore = 0;
	}
}

/* If the player scores enough to recieve a medal, let them know via modified strings. 
   If the player is not on Newgrounds at the time of playing, let them know as well. */
function checkMedalQualification(){
	
	/* Check if the score is higher than 15. This is what we usually reward the medal for.
	   Also verify the score is lower than 22. Anti-cheat and stuff. */
	if(localStorage.latestscore >= 15 && localStorage.latestscore < 23){
		if(amIOnNewgrounds() == true){
			document.getElementById("body-description").innerHTML += " You qualify for a medal! Click the submit button below to submit your score and recieve the medal!";
	}
}