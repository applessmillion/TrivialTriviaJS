var ngio = new Newgrounds.io.core('51278:vFeDW1gW', 'l8dcPo3qX3DAPZn2/3uwnQ==');


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
		/* Trivia Score submit */
		if(localStorage.latestscore < 22){
			ngio.callComponent('ScoreBoard.postScore', {id:9817, value:Number(localStorage.latestscore)});
			
			
			/* Attempts score submit */
			ngio.callComponent('ScoreBoard.postScore', {id:9818, value:Number(1)});
			
			if(localStorage.latestscore >= 15){ ngio.callComponent('Medal.unlock', {id:61654}); }
		}
		/* Hide button to prevent multiple clicks per session */
		document.getElementById("submitscore").style = "display:none";
	}
}

function amIOnNewgrounds(){
	var currentURL = window.location.href;
	var result = currentURL.includes("ungrounded");
	if(result == false){ result = currentURL.includes("newgrounds"); }
	return result;
}


