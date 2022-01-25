/*
Title: iffyProgramming
Author: Austin Wang (AW)
Create Date: 21 September 2020
Purpose: Create a prompt using Javascript and working with variables and if statements
Last Modified On: 21 September 2020
Last modified By: Austin Wang
Modification History:
21 Sep 2020: Created Document
*/


$(document).ready(function(){

	//create variables to collect user answer
	var strDestination = "";
	var strQuestion = "Did you arrive to port on time?";
	var strDefault = "YES/NO";

		//displays the question for user to answer
		strDestination = prompt(strQuestion, strDefault);
		var strAnswer = toUpperCase(strDestination);

	//if statement function to display the correct response
	if (strAnswer == YES) {
		msg = "You have earned an extra doubloon";
	} else {
		msg = "Argh, submit all your doubloon!";
	}

	//gathers the element id from html and displays the message there
	var eljack = document.getElementById("jack");
	eljack.textcontent = msg;













}); //end of document ready