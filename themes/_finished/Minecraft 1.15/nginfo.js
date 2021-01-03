var ngAPI = {
	"appid":"51313:zz0zMGJq",
	"secret":"RMuHA2y/h3dWBWFukvFpTg==",
	"scoreLB":"9871",
	"attemptsLB":"9872",
	"firstmedal":"61759",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 