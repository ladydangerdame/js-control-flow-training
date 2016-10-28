console.log("security_questions.js loaded");

var securityQuestions = [
   {
     question: "What was your first pet's name?",
     expectedAnswer: "FlufferNutter"
  },
    {
      question: "What is your mother's maiden name?"
      expectedAnswer: "Davenport"
  },
    {
      question: "What street did you grow up on?"
      expectedAnswer: "Washington"
  }
]

var userAnswer = "";
var notUser = false;

for (var i=0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("Wrong!");
    notUser = true;
		break;
	}
}

if (notUser){
  console.log("Locked!");
}
