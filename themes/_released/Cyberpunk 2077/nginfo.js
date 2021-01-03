var ngAPI = {
	"appid":"51278:vFeDW1gW",
	"secret":"l8dcPo3qX3DAPZn2/3uwnQ==",
	"scoreLB":"9817",
	"attemptsLB":"9818",
	"firstmedal":"61654",
	"secondmedal":"none"
}

/* Initialize session for active user.
If we do not have a logged in user, activate notLoggedIn().
If we have a logged in user, activate onLoggedIn(). */
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 