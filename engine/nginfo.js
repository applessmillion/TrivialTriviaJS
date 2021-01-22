var ngAPI = {
	"appid":"51368:ibxjGMQp",
	"secret":"d8SewouMRJWSRXaO+uiezg==",
	"scoreLB":"9883",
	"attemptsLB":"9884",
	"scorehardLB":"9885",
	"firstmedal":"61813",
	"secondmedal":"61814"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 