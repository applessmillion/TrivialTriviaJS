function doLoad(){
	if(modes == 1){
		document.getElementById("startnormal").innerHTML = 'Start Trivia (Easy)';
		document.getElementById("starthard").innerHTML = 'Start Trivia (Extended)';
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
}