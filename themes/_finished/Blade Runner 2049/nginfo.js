var ngAPI = {
	"appid":"51305:NfsbPhER",
	"secret":"nwCIPLoGypIvuIKagXnsXQ==",
	"scoreLB":"9863",
	"attemptsLB":"9862",
	"scorehardLB":"none",
	"firstmedal":"61737",
	"secondmedal":"none"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 