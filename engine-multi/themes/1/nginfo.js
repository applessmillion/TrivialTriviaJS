var ngAPI = {
	"appid":"51299:QsfZW64a",
	"secret":"UZ4Sm8LUQIpUGNuaJQVo9A==",
	"scoreLB":"9828",
	"scorehardLB":"9881",
	"attemptsLB":"9827",
	"firstmedal":"61700",
	"secondmedal":"61802"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 