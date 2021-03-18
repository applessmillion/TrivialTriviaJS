var ngAPI = {
	"appid":"51660:o09k53UX",
	"secret":"28xIWaw4gNL9zs4QzETZ2w==",
	"scoreLB":"10091",
	"attemptsLB":"10093",
	"scorehardLB":"10090",
	"firstmedal":"62551",
	"secondmedal":"62552"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 