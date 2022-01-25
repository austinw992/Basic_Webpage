/*
Title: Pick me
Author: Austin Wang (AW)
Create Date: 26 October 2020
Purpose: Understanding the functions of jQuery
Last Modified On: 26 October 2020
Last modified By: Austin Wang
Modification History:
26 Oct 2020: Created Document
*/

$(document).ready(function(){


	//call out the button functions after user has clicked
	$("#RedButton").click( performButton1 );

	$("#AwesomeButton").click( performButton2 );

	$("#PirateButton").click( performButton3 );

	$("#StrongButton").click( performButton4 );

	$("#DottedBorder").click( performButton5 );

	$("#FirstBorder").click( performButton6 );

	$("#PinkBorder").click( performButton7 );

	
	//functions of buttons
	
	//function of button 1 using TAG
	function performButton1 (){
		$("li").css("color", "red");
	}//end of button 1

	//function of button 2 using CLASS
	function performButton2 (){
		$(".awesome").css("font-weight", "bold");
	}//end of button 2

	//function of button 3 using ID
	function performButton3 (){
		$("#pirate").css("color", "yellow");
	}//end of button 3

	//function of button 4 using SINGLE LINE OF CODE
	function performButton4 (){
		$("#strong").css("color", "pink").css("border", "5px solid blue").append(": Strongest Person")
	}//end of button 4

	//function of button 5 using FILTERED by TAG
	function performButton5 (){
		$("ul:parent").css("border", "1px dotted green");
	}//end of button 5

	//function of button 6 using FILTERED by CLASS
	function performButton6 (){
		$(".terrible:first").css("border", "3px dotted red");
	}//end of button 6
	
	//function of button 7 using FILTERED by ID
	function performButton7 (){
		$("#person8").css("border", "solid pink");
	}//end of button 7




}); //end of document ready