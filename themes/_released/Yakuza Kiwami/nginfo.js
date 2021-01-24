var ngAPI = {
	"appid":"51399:9QUEzlEc",
	"secret":"DxPnAyf396zE8/ycOLcKVw==",
	"scoreLB":"9919",
	"attemptsLB":"9918",
	"scorehardLB":"none",
	"firstmedal":"61885",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 