// Timer information


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
var choices = "<form><input type= 'radio' value='true' name='true/false' checked> True <input type='radio' value='false' name='true/false'>False </form>";

// When the start button is pressed then the questions populate and the start button disapprears
$("#startbtn").on("click", function() {
    $("#startbtn").remove();
$("#q1").text(q1);
$("#q1").append(choices)
$("#q2").text(q2);
$("#q2").append(choices)
$("#q3").text(q3);
$("#q3").append(choices)
$("#q4").text(q4);
$("#q4").append(choices)
$("#q5").text(q5);
$("#q5").append(choices)
$("#q6").text(q6);
$("#q6").append(choices)
$("#q7").text(q7);
$("#q7").append(choices)
$("#q8").text(q8);
$("#q8").append(choices)



});

















})