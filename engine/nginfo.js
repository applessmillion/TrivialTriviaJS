var ngAPI = {
	"appid":"51335:MBKWFcZd",
	"secret":"x4AkJtG4Ze6DYB3srSQdJw==",
	"scoreLB":"9879",
	"scorehardLB":"9880",
	"attemptsLB":"9878",
	"firstmedal":"61793",
	"secondmedal":"61795"
}

/* Initialize session for active user.
If we do not have a logged in user, activate notLoggedIn().
If we have a logged in user, activate onLoggedIn(). */
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 