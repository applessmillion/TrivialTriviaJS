var ngAPI = {
	"appid":"51399:9QUEzlEc",
	"secret":"DxPnAyf396zE8/ycOLcKVw==",
	"scoreLB":"9944",
	"attemptsLB":"9918",
	"scorehardLB":"9945",
	"firstmedal":"61920",
	"secondmedal":"61921"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 