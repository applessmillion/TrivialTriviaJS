require(['./nginfo'], function (ngAPI) {});

function postScoreboardScores(){
	if (!ngio.user){ initSession(); }else{
		/* 'Trivia Score' submit. Change for each variation of the trivia. */
		if(localStorage.latestscore < 36){
			/* 'Trivia Score' submit */
			ngio.callComponent('ScoreBoard.postScore', {id:scoreLB, value:Number(localStorage.latestscore)});
			
			/* 'Attempts' score submit. */
			ngio.callComponent('ScoreBoard.postScore', {id:attemptsLB, value:Number(1)});
			
			/* Unlock 1st medal if conditions are met. */
			if(localStorage.latestscore >= 15){ ngio.callComponent('Medal.unlock', {id:firstmedal}); }
			
			/* Unlock 2nd medal if conditions are met. This medal should only be used if our quiz has 35 questions. */
			if(localStorage.latestscore >= 30 && secondmedal != "none"){ ngio.callComponent('Medal.unlock', {id:secondmedal}); }
		}
		
		/* Hide button to prevent multiple clicks per session */
		document.getElementById("submitscore").style = "display:none";
		doRewardPopup();
	}
}

/* Initialize session for active user.
If we do not have a logged in user, activate notLoggedIn().
If we have a logged in user, activate onLoggedIn(). */
function initNG(){
	var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
	ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 
}

/* If the user is not currently logged in with a valid session, display this in our little box. */
function notLoggedIn(){
	document.getElementById("NewgroundsUserInformation").style = "left:8px;top:4px;";
	document.getElementById("nameUserInformation").innerHTML = 'Log in to Newgrounds';
	document.getElementById("titleUserInformation").style = "display:none"; 
	document.getElementById("NewgroundsUserInformation").setAttribute("onClick","initSession()");
}

/* If the user is logged in, display their information. */
function onLoggedIn() { 
	/* Initialize user information */
	var profileimg = ngio.user.icons.large;
	var profilename = ngio.user.name;
	
	/* So I see we can get if the user is a supporter.
	We can maybe do some cool stuff with this... */
	var supporterstatus = ngio.user.supporter;
	
	/* Add user info to page */
	console.log("Welcome " + ngio.user.name);
	document.getElementById("NewgroundsUserInformation").setAttribute("onClick","");
	document.getElementById("NewgroundsUserInformation").style = "left:8px;top:4px;";
	document.getElementById("nameUserInformationDesc").style = "display:none;";
	document.getElementById("nameUserInformation").innerHTML = profilename;
	document.getElementById("picUserInformation").setAttribute("onClick","window.open('https://"+profilename+".newgrounds.com/','_blank')");
	document.getElementById("picUserInformation").src = profileimg;
	document.getElementById("titleUserInformation").innerHTML = "Logged in as"; 
}
function onLoginFailed() { console.log("There was a problem logging in: " . ngio.login_error.message );}
function onLoginCancelled() { console.log("The user cancelled the login."); }
function requestLogin() { ngio.requestLogin(onLoggedIn, onLoginFailed, onLoginCancelled); }
function initSession() { ngio.getValidSession(function() { if(ngio.user){ onLoggedIn();}else{ requestLogin(); } }); }

/* Function to test if the game is currently hosted on Newgrounds. Returns true if so, false if not. */
function amIOnNewgrounds(){
	var currentURL = window.location.href;
	var result = currentURL.includes("ungrounded");
	if(result == false){ result = currentURL.includes("newgrounds"); }
	return result;
}

/* Function to activate our reward popup. This popup is only on the final page of the quiz. */
function doRewardPopup(){
	document.getElementById("NewgroundsRewardInformation").style = "left:8px;";
	document.getElementById("RewardTitle").innerHTML = 'Success!';
	if(localStorage.latestscore >= 15){ document.getElementById("RewardDesc").innerHTML = 'You also qualified</br>for a medal!'; }
	else{ document.getElementById("RewardDesc").innerHTML = 'Scores added successfully!'; }
}


