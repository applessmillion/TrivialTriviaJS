var ngAPI = {
	"appid":"",
	"secret":"",
	"scoreLB":"",
	"attemptsLB":"",
	"scorehardLB":"none",
	"firstmedal":"",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 