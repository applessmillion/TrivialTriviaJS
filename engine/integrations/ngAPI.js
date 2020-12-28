var ngio = new Newgrounds.io.core('51288:geZhSVqk', 'zX1LV7LXpVOTcZ6qx+Z0Ew==');

ngio.debug = true;
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
		ngio.callComponent('ScoreBoard.postScore', {id:9821, value:Number(localStorage.latestscore)});
		
		/* Attempts score submit */
		ngio.callComponent('ScoreBoard.postScore', {id:9822, value:Number(1)});
		
		//if(localStorage.latestscore >= 15){ unlockMedal("Cyberbuff") }
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


function onMedalUnlocked(medal) {
    console.log('MEDAL GET:', medal.name);
}

var medals;
/* handle loaded medals */
function onMedalsLoaded(result) {
    if (result.success) medals = result.medals;
}
/* load our medals and scoreboards from the server */
ngio.queueComponent("Medal.getList", {}, onMedalsLoaded);
ngio.executeQueue();

function unlockMedal(medal_name) {

    /* If there is no user attached to our ngio object, it means the user isn't logged in and we can't unlock anything */
    if (!ngio.user) return;

    var medal;

    for (var i = 0; i < medals.length; i++) {

        medal = medal[i];

        /* look for a matching medal name */
        if (medal.name == medal_name) {

            /* we can skip unlocking a medal that's already been earned */
            if (!medal.unlocked) {

                /* unlock the medal from the server */
                ngio.callComponent('Medal.unlock', {id:medal.id}, function(result) {

                    if (result.success) onMedalUnlocked(result.medal);

                });
            }

            return;
        }
    }
}