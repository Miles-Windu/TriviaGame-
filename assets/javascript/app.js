$(document).ready(function() {

// questions
var q1 = "1.) Jupiter is the largest planet in the solar system.";
var q2 = "2.) Earth is the third planet from the sun.";
var q3 = "3.) Pluto is considered a planet.";
var q4 = "4.) There are four planets that have rings around them in our solar system.";
var q5 = "5.) Water was recently discovered on Mars suggesting signs of life.";
var q6 = "6.) There are more stars in the galaxy than there are grains of sand on the Earth's beaches.";
var q7 = "7.) Neptune was named after the Greek God of thunder."; 
var q8 = "8.) You can fit almost 1,000,000 Earths on the Sun's surface.";  

var choices = "<form><input name='true/false' type='radio' value='true'> True <input type='radio' name='true/false' value='false'>False </form>";

var correct = 0;
var wrong = 0; 
var unanswered = 8; 

var correctArray = [];
var incorrectArray = ["true", "true", "false", "false", "false", "true", "false", "true"]; 

// When the start button is pressed then the questions populate and the start button disapprears
$("#startbtn").on("click", function() {
    $("#startbtn").remove();

$("#q1").text(q1); // call question 
$("#q1").append(choices); //display true or false buttons


$("#q2").text(q2); // call question
$("#q2").append(choices) //display true or false buttons
 

$("#q3").text(q3); // call question
$("#q3").append(choices) //display true or false buttons


$("#q4").text(q4); // call question
$("#q4").append(choices) //display true or false buttons


$("#q5").text(q5); // call question
$("#q5").append(choices) //display true or false buttons


$("#q6").text(q6); // call question
$("#q6").append(choices) //display true or false buttons


$("#q7").text(q7); // call question
$("#q7").append(choices) //display true or false buttons


$("#q8").text(q8); // call question
$("#q8").append(choices) //display true or false buttons


// Appending the finish button into the DOM 
$("#done").append("<div class='col-4'></div>", "<button id='finishbtn' class='col-4 btn btn-primary btn-lg'> Done! </button>")

// upon completion tasks 
$("#finishbtn").on("click", function() {
$("#finishbtn").remove();
$("#q1").remove();
$("#q2").remove();
$("#q3").remove();
$("#q4").remove();
$("#q5").remove();
$("#q6").remove();
$("#q7").remove();
$("#q8").remove();

$("#timer").append("<div class='text-center p-3 mb-3 text-dark mt-2' style='font-size: 48px;'>All Done!</div>");
$("#timer").append("<div class='text-center p-3 mb-3 text-dark mt-2' style='font-size: 30px;'>Correct Answers: </div>", correct);
$("#timer").append("<div class='text-center p-3 mb-3 text-dark mt-2' style='font-size: 30px;'>Incorrect Answers: </div>", wrong);
$("#timer").append("<div class='text-center p-3 mb-3 text-dark mt-2' style='font-size: 30px;'>Unanswered: </div>", unanswered);


}); 

});

















})