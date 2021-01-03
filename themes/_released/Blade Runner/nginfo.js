var ngAPI = {
	"appid":"51288:geZhSVqk",
	"secret":"zX1LV7LXpVOTcZ6qx+Z0Ew==",
	"scoreLB":"9821",
	"attemptsLB":"9822",
	"firstmedal":"61699",
	"secondmedal":"none"
}

/* Initialize session for active user.
If we do not have a logged in user, activate notLoggedIn().
If we have a logged in user, activate onLoggedIn(). */
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 