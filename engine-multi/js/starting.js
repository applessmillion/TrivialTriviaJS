function doLoad(){
	if(modes == 1){
		document.getElementById("startnormal").innerHTML = 'Start (Normal)';
		document.getElementById("starthard").innerHTML = 'Start (Extended)';
		console.log('We have Extended mode! Show both buttons.');
	}else if(modes == 0){
		document.getElementById("startnormal").innerHTML = 'Start Trivia!';
		document.getElementById("starthard").innerHTML = '';
		document.getElementById("starthard").style = 'display:none;';
		console.log('We don\'t have Extended mode! Swap to one button.');
	}else{
		document.getElementById("startnormal").innerHTML = 'Start Trivia!';
		document.getElementById("starthard").innerHTML = '';
		document.getElementById("starthard").style = 'display:none;';
		console.log('Unhandled modes variable. Perhaps this theme is not updated?');
	}
	
	/* if external music link is not specified, hide the button. */
	if(externalMusic){
		document.getElementById("musicbutton").style = 'display:unset;';
	}
}

function openMusicLink(){
	if(externalMusic == "none"){
		document.getElementById("musicbutton").style = 'display:none;';
	}else{ window.open(externalMusic);}
}

function amIDev(){
	var currentURL = window.location.href;
	var result = currentURL.includes("jadefury.dev");
	
	if(result){
		console.log('Game is being played on dev domain. If any bugs or issues are encountered, I will refer you play to the live game on Newgrounds!');
		document.getElementById("extra-description").innerHTML = "</br></br><b>Note:</b> This is being played on a development domain! Everything should work, but there may be some experimental changes!"
	}
}