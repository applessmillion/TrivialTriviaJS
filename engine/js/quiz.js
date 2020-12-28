require(['./js/questions'], function (questions) {});

/* Init global variables */
currentQuestion = 0;
incorrectAnswer = [];
correctAnswer = '';
questionPhrase = '';
goodAnswer = 0;
score = 0;
timertime = 12;


function setQuestionState(){
	ranX = Math.floor(Math.random()*8);
	questionDetails = getQuestionDetails();
	questionTimer = setInterval(timerCountdown, 1020);
	document.getElementById("QuizNumber").innerHTML = 'Question #'+Number(currentQuestion+1);
	document.getElementById("QuizPhrase").innerHTML = questionPhrase;
	
	timertime = 13;
	document.getElementById("timeText").innerHTML = '12';
	document.getElementById("QuizButtonNext").style = 'display:none';
	
	/* Yes, there is a better way to do this. No, I won't fix it for ver1. 
	I'll get this fixed in a future release. Right now I'm making a game aimed for the
	25th on the 24th, so I don't have much time to make things good on the backend.
	
	Randomize order of answers based on random int */
	if(ranX == 0){
		document.getElementById("QuizButton1").innerHTML = correctAnswer;
		document.getElementById("QuizButton2").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton3").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton4").innerHTML = incorrectAnswer[2];
		goodAnswer = 1;
	}
	if(ranX == 1){
		document.getElementById("QuizButton2").innerHTML = correctAnswer;
		document.getElementById("QuizButton1").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton4").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton3").innerHTML = incorrectAnswer[2];
		goodAnswer = 2;
	}
	if(ranX == 2){
		document.getElementById("QuizButton3").innerHTML = correctAnswer;
		document.getElementById("QuizButton2").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton1").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton4").innerHTML = incorrectAnswer[2];
		goodAnswer = 3;
	}
	if(ranX == 3){
		document.getElementById("QuizButton4").innerHTML = correctAnswer;
		document.getElementById("QuizButton3").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton2").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton1").innerHTML = incorrectAnswer[2];
		goodAnswer = 4;
	}
	if(ranX == 4){
		document.getElementById("QuizButton4").innerHTML = correctAnswer;
		document.getElementById("QuizButton2").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton3").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton1").innerHTML = incorrectAnswer[2];
		goodAnswer = 4;
	}
	if(ranX == 5){
		document.getElementById("QuizButton4").innerHTML = correctAnswer;
		document.getElementById("QuizButton1").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton2").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton3").innerHTML = incorrectAnswer[2];
		goodAnswer = 4;
	}
	if(ranX == 6){
		document.getElementById("QuizButton1").innerHTML = correctAnswer;
		document.getElementById("QuizButton4").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton2").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton3").innerHTML = incorrectAnswer[2];
		goodAnswer = 1;
	}
	if(ranX == 7){
		document.getElementById("QuizButton2").innerHTML = correctAnswer;
		document.getElementById("QuizButton3").innerHTML = incorrectAnswer[0];
		document.getElementById("QuizButton4").innerHTML = incorrectAnswer[1];
		document.getElementById("QuizButton1").innerHTML = incorrectAnswer[2];
		goodAnswer = 2;
	}

}

function getQuestionDetails(){
	/* Clear variables from previous calls */
	incorrectAnswer = [];
	
	/* Establish correct answer and incorrect answer pool */
	correctAnswer = questions[currentQuestion].CorrectAnswer;
	incorrectAnswer = questions[currentQuestion].IncorrectAnswer.slice();
	questionPhrase = questions[currentQuestion].Phrase;
}

/* functions to handle button clicks. */
function clickOn1(){if(goodAnswer == 1){ correctAnswerClick(1); }else{ badAnswerClick(1); }}
function clickOn2(){if(goodAnswer == 2){ correctAnswerClick(2); }else{ badAnswerClick(2); }}
function clickOn3(){if(goodAnswer == 3){ correctAnswerClick(3); }else{ badAnswerClick(3); }}
function clickOn4(){if(goodAnswer == 4){ correctAnswerClick(4); }else{ badAnswerClick(4); }}

/* Functions to handle results of a click */
function correctAnswerClick(clickedAnswer){
	score = score+1;
	document.getElementById("scoreText").innerHTML = "Score: "+score;
	reviewBeforeProceeding(clickedAnswer);
	document.getElementById("QuizNumber").innerHTML = 'Correct!';
	document.getElementById("QuizPhrase").innerHTML = 'You answered correctly! Below is the answer you selected.';

	
}
function badAnswerClick(clickedAnswer){
	reviewBeforeProceeding(clickedAnswer);
	document.getElementById("QuizNumber").innerHTML = 'Incorrect Answer';
	document.getElementById("QuizPhrase").innerHTML = 'Below is the answer you selected.';

}

function gotoNextQuestion(){
	if(currentQuestion == 20){
		localStorage.latestscore = score;
		document.getElementById("QuizNumber").innerHTML = 'End of Trivia!';
		document.getElementById("QuizPhrase").innerHTML = 'Counting totals & redirecting you to the results page...';
		window.location.href = "finish.html";
		clearInterval(questionTimer);
	}else{
		currentQuestion = currentQuestion+1;
		document.getElementById("QuizButton1").style = 'display:unset';
		document.getElementById("QuizButton2").style = 'display:unset';
		document.getElementById("QuizButton3").style = 'display:unset';
		document.getElementById("QuizButton4").style = 'display:unset';
		setQuestionState();
	}
}

/* Handle the timer per question. This triggers a timer every 1 second. */
function timerCountdown(){
	if(timertime == 0){
		clearInterval(questionTimer);
		gotoNextQuestion();
		document.getElementById("TimeBorderDisplay").style = "width:100%";
	}else{
		timertime = timertime-1;
		document.getElementById("timeText").innerHTML = timertime;
		document.getElementById("TimeBorderDisplay").style = "width:"+Number(timertime/12)*100+"%;";
	}
}

/* Handle pausing the game when a question is answered */
function reviewBeforeProceeding(clickedAnswer){
	clearInterval(questionTimer);
	if(clickedAnswer==1){
		document.getElementById("QuizButton2").style = 'display:none';
		document.getElementById("QuizButton3").style = 'display:none';
		document.getElementById("QuizButton4").style = 'display:none';
	}
	if(clickedAnswer==2){
		document.getElementById("QuizButton1").style = 'display:none';
		document.getElementById("QuizButton3").style = 'display:none';
		document.getElementById("QuizButton4").style = 'display:none';
	}
	if(clickedAnswer==3){
		document.getElementById("QuizButton2").style = 'display:none';
		document.getElementById("QuizButton1").style = 'display:none';
		document.getElementById("QuizButton4").style = 'display:none';
	}
	if(clickedAnswer==4){
		document.getElementById("QuizButton2").style = 'display:none';
		document.getElementById("QuizButton3").style = 'display:none';
		document.getElementById("QuizButton1").style = 'display:none';
	}
	document.getElementById("QuizButtonNext").style = '';
}
