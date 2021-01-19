/* Init global variables */
var currentQuestion = 0;
var incorrectAnswer = [];
var correctAnswer = '';
var questionPhrase = '';
var goodAnswer = 0;
var score = 0;
var timertime = 12;
var triviamode = localStorage.triviadifficulty;

function setQuestionState(timer=13){
	ranX = Math.floor(Math.random()*4);
	questionDetails = getQuestionDetails();
	questionTimer = setInterval(timerCountdown, 1090);
	
	/* Update question number and phrase */
	document.getElementById("QuizNumber").innerHTML = 'Question '+Number(currentQuestion+1);
	document.getElementById("QuizPhrase").innerHTML = questionPhrase;
	if(questionImage != "none"){
		document.getElementById("QuizImage").src = questionImage;
		document.getElementById("QuizPhrase").style = 'padding:0px;';
	}else{
		document.getElementById("QuizImage").src = '';
		document.getElementById("QuizImage").style = 'display:none';
		document.getElementById("QuizPhrase").style = '';
	}
	
	/* Set timer bar back to full-width and set the timer back up to 13 seconds. */
	document.getElementById("TimeBorderDisplay").style = "width:100%";
	timertime = timer;
	document.getElementById("timeText").innerHTML = '12';
	
	/* Hide the Next Question button until the user clicks an answer again. */
	document.getElementById("QuizButtonNext").style = 'display:none';
		
	/* Summon a random picking of incorrect answers. Will pick between any listed from our questions array. */
	var incorrectAnswers = grabIncorrectAnswers();
	
	/* Randomize order of answers based on random int */
	if(ranX == 0){
		document.getElementById("QuizButton1").innerHTML = correctAnswer;
		document.getElementById("QuizButton2").innerHTML = incorrectAnswers[0];
		document.getElementById("QuizButton3").innerHTML = incorrectAnswers[1];
		document.getElementById("QuizButton4").innerHTML = incorrectAnswers[2];
		goodAnswer = 1;
	}
	if(ranX == 1){
		document.getElementById("QuizButton2").innerHTML = correctAnswer;
		document.getElementById("QuizButton1").innerHTML = incorrectAnswers[0];
		document.getElementById("QuizButton4").innerHTML = incorrectAnswers[1];
		document.getElementById("QuizButton3").innerHTML = incorrectAnswers[2];
		goodAnswer = 2;
	}
	if(ranX == 2){
		document.getElementById("QuizButton3").innerHTML = correctAnswer;
		document.getElementById("QuizButton2").innerHTML = incorrectAnswers[0];
		document.getElementById("QuizButton1").innerHTML = incorrectAnswers[1];
		document.getElementById("QuizButton4").innerHTML = incorrectAnswers[2];
		goodAnswer = 3;
	}
	if(ranX == 3){
		document.getElementById("QuizButton4").innerHTML = correctAnswer;
		document.getElementById("QuizButton3").innerHTML = incorrectAnswers[0];
		document.getElementById("QuizButton2").innerHTML = incorrectAnswers[1];
		document.getElementById("QuizButton1").innerHTML = incorrectAnswers[2];
		goodAnswer = 4;
	}
}

function getQuestionDetails(){
	/* Clear variables from previous calls */
	var incorrectAnswer = [];
	
	/* Establish correct answer and incorrect answer pool */
	correctAnswer = questions[currentQuestion].CorrectAnswer;
	incorrectAnswer = questions[currentQuestion].IncorrectAnswer.slice();
	questionPhrase = questions[currentQuestion].Phrase;
	
	if(questions[currentQuestion].Image){
		questionImage = questions[currentQuestion].Image;
	}else{
		questionImage = "none";
	}
}

/* functions to handle button clicks. */
function clickOn1(){if(goodAnswer == 1){ correctAnswerClick(1); }else{ badAnswerClick(1); }}
function clickOn2(){if(goodAnswer == 2){ correctAnswerClick(2); }else{ badAnswerClick(2); }}
function clickOn3(){if(goodAnswer == 3){ correctAnswerClick(3); }else{ badAnswerClick(3); }}
function clickOn4(){if(goodAnswer == 4){ correctAnswerClick(4); }else{ badAnswerClick(4); }}

/* Functions to handle results of a click */
function correctAnswerClick(clickedAnswer){
	/* Let the user know their answer is correct and award a point. 
	Also update the score counter to reflect the addition of a point. */
	score = score+1;
	document.getElementById("scoreText").innerHTML = "Score: "+score;
	reviewBeforeProceeding(clickedAnswer);
	document.getElementById("QuizNumber").innerHTML = 'Correct!';
	document.getElementById("QuizPhrase").innerHTML = 'You answered correctly! Below is the answer you selected.';	
}
function badAnswerClick(clickedAnswer){
	/* Let the user know their answer was incorrect. Do not reward a point. */
	reviewBeforeProceeding(clickedAnswer, 1);
	document.getElementById("QuizNumber").innerHTML = 'Incorrect Answer';
	document.getElementById("QuizPhrase").innerHTML = 'Below is the answer you selected.';

}

function gotoNextQuestion(){
	if(triviamode == 0){ limit = 20;}
	if(triviamode == 1){ limit = 35;}
	if(currentQuestion == limit){
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
function reviewBeforeProceeding(clickedAnswer, bad=0){
	clearInterval(questionTimer);
	if(clickedAnswer==1){
		if(bad==0){ document.getElementById("QuizButton1").style = 'pointer-events:none;background:#00AF11;color:white;border:4px #00AF11af solid;'; }
		else{ document.getElementById("QuizButton1").style = 'pointer-events:none;background:#D30000;color:white;border:4px #D30000af solid;'; }
		document.getElementById("QuizButton2").style = 'display:none;';
		document.getElementById("QuizButton3").style = 'display:none';
		document.getElementById("QuizButton4").style = 'display:none';
	}
	if(clickedAnswer==2){
		document.getElementById("QuizButton1").style = 'display:none';
		if(bad==0){ document.getElementById("QuizButton2").style = 'pointer-events:none;background:#00AF11;color:white;border:4px #00AF11af solid;'; }
		else{ document.getElementById("QuizButton2").style = 'pointer-events:none;background:#D30000;color:white;border:4px #D30000af solid;'; }
		document.getElementById("QuizButton3").style = 'display:none';
		document.getElementById("QuizButton4").style = 'display:none';
	}
	if(clickedAnswer==3){
		document.getElementById("QuizButton2").style = 'display:none';
		document.getElementById("QuizButton1").style = 'display:none';
		if(bad==0){ document.getElementById("QuizButton3").style = 'pointer-events:none;background:#00AF11;color:white;border:4px #00AF11af solid;'; }
		else{ document.getElementById("QuizButton3").style = 'pointer-events:none;background:#D30000;color:white;border:4px #D30000af solid;'; }
		document.getElementById("QuizButton4").style = 'display:none';
	}
	if(clickedAnswer==4){
		document.getElementById("QuizButton2").style = 'display:none';
		document.getElementById("QuizButton3").style = 'display:none';
		document.getElementById("QuizButton1").style = 'display:none';
		if(bad==0){ document.getElementById("QuizButton4").style = 'pointer-events:none;background:#00AF11;color:white;border:4px #00AF11af solid;'; }
		else{ document.getElementById("QuizButton4").style = 'pointer-events:none;background:#D30000;color:white;border:4px #D30000af solid;'; }
	}
	document.getElementById("QuizButtonNext").style = '';
}

/* Grab the incorrectAnswers array from questions.js and pick 3 from the available list. */
function grabIncorrectAnswers(){
	var randomArray = questions[currentQuestion].IncorrectAnswer;
	var pickedArray = [];
	
	/* Grab a total of 3 questions from our larger array */
	while(pickedArray.length < 3)
	{
		var random = Math.floor(Math.random()*2);
		if(random == 1){ pickedArray.push(randomArray.pop()); }
		else{ pickedArray.push(randomArray.shift()); }
	}
	
	return pickedArray;
}