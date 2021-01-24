function doLoad(){
	if(mode1Name != "none"){
		document.getElementById("trivia1").innerHTML = mode1Name;
		document.getElementById("trivia1").style = "display:unset;";
	}
	if(mode2Name != "none"){
		document.getElementById("trivia2").innerHTML = mode2Name;
		document.getElementById("trivia2").style = "display:unset;";
	}
	if(mode3Name != "none"){
		document.getElementById("trivia3").innerHTML = mode3Name;
		document.getElementById("trivia3").style = "display:unset;";
	}
	if(mode4Name != "none"){
		document.getElementById("trivia4").innerHTML = mode4Name;
		document.getElementById("trivia4").style = "display:unset;";
	}
}

function amIDev(){
	var currentURL = window.location.href;
	var result = currentURL.includes("jadefury.dev");
	
	if(result){
		console.log('Game is being played on dev domain. If any bugs or issues are encountered, I will refer you play to the live game on Newgrounds!');
		document.getElementById("extra-description").innerHTML = "</br></br><b>Note:</b> This is being played on a development domain! Everything should work, but there may be some experimental changes!"
	}
}