/* Edit this var below with the app ID and secret key */
var ngio = new Newgrounds.io.core('51299:QsfZW64a', 'UZ4Sm8LUQIpUGNuaJQVo9A==');

ngio.callComponent("Gateway.getDatetime", {}, function(result) {
   if (result.success) {
	console.log('The current date/time on the Newgrounds.io server is '+result.datetime);
   } else { console.log('ERROR!', result.error.message); }});
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }}); 

function onLoggedIn() { console.log("Welcome " + ngio.user.name + "!");	}
function onLoginFailed() { console.log("There was a problem logging in: " . ngio.login_error.message );}
function onLoginCancelled() { console.log("The user cancelled the login."); }
function requestLogin() { ngio.requestLogin(onLoggedIn, onLoginFailed, onLoginCancelled); }
function initSession() {
	ngio.getValidSession(function() { if(ngio.user){ onLoggedIn();}else{ requestLogin(); } });
}

function postScoreboardScores(){
	if (!ngio.user){ initSession(); }else{
		/* 'Trivia Score' submit. Change for each variation of the trivia. */
		if(localStorage.latestscore < 22){
			ngio.callComponent('ScoreBoard.postScore', {id:9828, value:Number(localStorage.latestscore)});
			
			
			/* 'Attempts' score submit. */
			ngio.callComponent('ScoreBoard.postScore', {id:9827, value:Number(1)});
			
			if(localStorage.latestscore >= 15){ ngio.callComponent('Medal.unlock', {id:61700}); }
		}
		/* Hide button to prevent multiple clicks per session */
		document.getElementById("submitscore").style = "display:none";
	}
}

/* Function to test if the game is currently hosted on Newgrounds. Returns true if so, false if not. */
function amIOnNewgrounds(){
	var currentURL = window.location.href;
	var result = currentURL.includes("ungrounded");
	if(result == false){ result = currentURL.includes("newgrounds"); }
	return result;
}


