var ngAPI = {
	"appid":"51660:o09k53UX",
	"secret":"28xIWaw4gNL9zs4QzETZ2w==",
	"scoreLB":"10088",
	"attemptsLB":"10093",
	"scorehardLB":"none",
	"firstmedal":"62550",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 