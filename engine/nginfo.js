var ngAPI = {
	"appid":"51395:HWueA7ZV",
	"secret":"rC53koQLNlg8O+DWe7l5kQ==",
	"scoreLB":"9914",
	"attemptsLB":"9915",
	"scorehardLB":"9916",
	"firstmedal":"61874",
	"secondmedal":"61875"
}
var ngio = new Newgrounds.io.core(ngAPI.appid, ngAPI.secret);
ngio.getValidSession(function() { if (ngio.user) { onLoggedIn(); }else{ notLoggedIn();}}); 