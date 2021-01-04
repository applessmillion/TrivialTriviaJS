var questions=[];
require(['./js/questions'], function (questions) {});
require(['./js/start'], function (start) {});

function doLoad(){
	if(questions[35] != undefined){
		document.getElementById("startnormal").innerHTML = 'Start Trivia (Easy)';
		document.getElementById("starthard").innerHTML = 'Start Trivia (Hard)';
		console.log('We have Hard mode! Show both buttons.');
	}else{
		document.getElementById("startnormal").innerHTML = 'Start Trivia!';
		document.getElementById("starthard").innerHTML = '';
		document.getElementById("starthard").style = 'display:none;';
		console.log('We don\'t have Hard mode! Swap to one button.');
	}
}