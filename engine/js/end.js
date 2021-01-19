function tossStuff(){
	document.getElementById("scoretotal").innerHTML = ""+localStorage.latestscore;
	checkMedalQualification();
	/* This will make it annoying to manually change variables in dev console. */
	setInterval(timerCountdown, 500);
}

/* Incredibly basic anticheat. Basically makes cheating more annoying. */
function timerCountdown(){
	if(localStorage.latestscore > 40){
		localStorage.latestscore = 0;
	}
}

/* If the player scores enough to recieve a medal, let them know via modified strings. 
   If the player is not on Newgrounds at the time of playing, let them know as well. */
function checkMedalQualification(){
	var qualify = 0;
	if(localStorage.latestscore >= 15 && localStorage.triviadifficulty == 0){ qualify = 1; }
	if(localStorage.latestscore >= 30 && localStorage.triviadifficulty == 1){ qualify = 1; }
	/* Check if the score is higher than 15. This is what we usually reward the medal for.
	   Also verify the score is lower than 22. Anti-cheat and stuff. */
	if(qualify == 1){
		if(amIOnNewgrounds()){
			document.getElementById("body-description").innerHTML += "</br>You qualify for a medal! Click the submit button below to submit your score and recieve the medal!";
		}
	}
}

/* Function to randomize the end text. For fun. */
function flavorBodyText(){
	var random = Math.floor(Math.random()*5);
	var flavor = '';
	if(random == 0){ flavor = 'Think you can do better? Click below to try again!'; }
	if(random == 1){ flavor = 'Want to try again? Click below!'; }
	if(random == 2){ flavor = 'Think you can get a higher score? Click below to try again!'; }
	if(random == 3){ flavor = 'Score not high enough for you? Click below to try again!'; }
	if(random == 4){ flavor = 'Think you can do better? Try again by clicking the button below!'; }
}