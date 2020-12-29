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
