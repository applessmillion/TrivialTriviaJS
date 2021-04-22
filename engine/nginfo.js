var ngAPI = {
	"appid":"51839:guXCTYhk",
	"secret":"ULoCZh0TTkNHNEEt6t6RTw==",
	"scoreLB":"10211",
	"attemptsLB":"10213",
	"scorehardLB":"none",
	"firstmedal":"63004",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 