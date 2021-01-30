var ngAPI = {
	"appid":"51377:yBcjfPeC",
	"secret":"glfX8ABZCwArLJg8+yo9Fg==",
	"scoreLB":"9901",
	"attemptsLB":"9903",
	"scorehardLB":"9902",
	"firstmedal":"61825",
	"secondmedal":"61826"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 