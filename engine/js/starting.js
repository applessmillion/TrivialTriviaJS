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