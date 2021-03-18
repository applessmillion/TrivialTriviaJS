var ngAPI = {
	"appid":"51660:o09k53UX",
	"secret":"28xIWaw4gNL9zs4QzETZ2w==",
	"scoreLB":"10091",
	"attemptsLB":"10093",
	"scorehardLB":"10092",
	"firstmedal":"62553",
	"secondmedal":"62554"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 