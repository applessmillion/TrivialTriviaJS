var ngAPI = {
	"appid":"51306:jJmFndTw",
	"secret":"KpELoOSj76KdmNH64hZYgQ==",
	"scoreLB":"9865",
	"attemptsLB":"9864",
	"firstmedal":"61738",
	"secondmedal":"none"
}

/* Initialize session for active user.
If we do not have a logged in user, activate notLoggedIn().
If we have a logged in user, activate onLoggedIn(). */
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 