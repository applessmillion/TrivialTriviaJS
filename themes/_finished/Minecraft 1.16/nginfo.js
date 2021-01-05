var ngAPI = {
	"appid":"51299:QsfZW64a",
	"secret":"UZ4Sm8LUQIpUGNuaJQVo9A==",
	"scoreLB":"9828",
	"scorehardLB":"none",
	"attemptsLB":"9827",
	"firstmedal":"61700",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 