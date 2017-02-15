function check(){




var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

if (question1 == "mustang") {
	correct++;
}


if (question2 == "ford raptor") {
	correct++;
}

if (question3 == "ferrari") {
	correct++;
}



document.getElementById("after_submit").style.visibility = "visible"
document.getElementById("number_correct").innerHTML = " you got it " + correct + " correct.";

var pictures = ["img/mustang"]

var messages = ["you win", "you win", "you win"];
var range;

message[1]


if (correct < 1) {
	range = 2;
}

if (correct > 0 && correct < 3) {
	range = 1;
}

if (correct > 2) {
	range = 0;
}



document.getElementById("message").innerHTML = messages[range];






}
















