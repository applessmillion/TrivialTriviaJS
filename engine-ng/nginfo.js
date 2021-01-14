var ngAPI = {
	"appid":"51378:dZt8xYHJ",
	"secret":"fKCRFl1A6wffrFzmedLhXw==",
	"scoreLB":"9904",
	"attemptsLB":"9905",
	"scorehardLB":"none",
	"firstmedal":"61827",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 