
function check() {

	var question1=document.quiz.question1.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
    var question4=document.quiz.question4.value;
	var question5=document.quiz.question5.value;
	var question6=document.quiz.question6.value;
    var question7=document.quiz.question7.value;
	var question8=document.quiz.question8.value;
	var question9=document.quiz.question9.value;
    var question10=document.quiz.question10.value;

	var correct=0;
	if (question1=="Yes") {
		correct++;
	}
	if (question2=="No") {
		correct++;
	}
	if (question3=="Yes") {
		correct++;
	}
    if (question4=="Yes") {
		correct++;
	}
	if (question5=="Yes") {
		correct++;
	}
	if (question6=="Isosceles") {
		correct++;
	}
    if (question7=="30") {
		correct++;
	}
	if (question8=="Both") {
		correct++;
	}
	if (question9=="5cm") {
		correct++;
	}
    if (question10=="Scalene") {
		correct++;
	}
	

	var messages=["Great job!","That's good","You reallly need to do better"];
	// var pictures=["congo.gif","okay.gif","zero.gif"];
	var range;
	if (correct<=3) {
		range=2;
	}
	if (correct>3 && correct<8) {
		range=1;
	}
	if (correct>=8) {
		range=0;
	}

	document.getElementById('after_submit').style.visibility="visible";

	document.getElementById("message").innerHTML=messages[range];
	document.getElementById('number_correct').innerHTML="You got "+correct+" correct.";
	// document.getElementById('picture').src=pictures[range];
}