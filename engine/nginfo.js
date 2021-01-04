var ngAPI = {
	"appid":"51314:CZhQGcFA",
	"secret":"wg0vfX+qh6W1CXJQpuwsMA==",
	"scoreLB":"9874",
	"attemptsLB":"9873",
	"firstmedal":"61762",
	"secondmedal":"none"
}

/* Initialize session for active user.
If we do not have a logged in user, activate notLoggedIn().
If we have a logged in user, activate onLoggedIn(). */
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 