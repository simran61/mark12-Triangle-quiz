
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
		document.querySelector(".q1").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q1").style.backgroundColor="#f77474";
	}
	if (question2=="No") {
		correct++;
		document.querySelector(".q2").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q2").style.backgroundColor="#f77474";
	}
	if (question3=="Yes") {
		correct++;
		document.querySelector(".q3").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q3").style.backgroundColor="#f77474";
	}
    if (question4=="Yes") {
		correct++;
		document.querySelector(".q4").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q4").style.backgroundColor="#f77474";
	}
	if (question5=="Yes") {
		correct++;
		document.querySelector(".q5").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q5").style.backgroundColor="#f77474";
	}
	if (question6=="Isosceles") {
		correct++;
		document.querySelector(".q6").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q6").style.backgroundColor="#f77474";
	}
    if (question7=="30") {
		correct++;
		document.querySelector(".q7").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q7").style.backgroundColor="#f77474";
	}
	if (question8=="Both") {
		correct++;
		document.querySelector(".q8").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q8").style.backgroundColor="#f77474";
	}
	if (question9=="5cm") {
		correct++;
		document.querySelector(".q9").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q9").style.backgroundColor="#f77474";
	}
    if (question10=="Scalene") {
		correct++;
		document.querySelector(".q10").style.backgroundColor="#8cff7a";
	}
	else{
		document.querySelector(".q10").style.backgroundColor="#f77474";
	}
	

	var messages=["Great job!","That's good!","You reallly need to do better!"];
	var range=0;
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
	document.getElementById('number_correct').innerHTML=messages[range]+" You got "+correct+" correct.";
}