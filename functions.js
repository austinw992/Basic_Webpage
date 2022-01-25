/*
Title: Functions
Author: Austin Wang (AW)
Create Date: 7 September 2020
Purpose: understanding the concept of functions and applications
Last Modified On: 7 September 2020
Last modified By: Austin Wang
Modification History:
7 Sep 2020: Created Document
*/

$(document).ready(function(){


	var strMessage = "";
	

	var numDistance1 = 40;
	var numDistance2 = 30;
	var numDistance3 = 25;
	var numDistance4 = 20;
	var numDistance5 = 15;
	var numDistance6 = 4;


	strMessage = "Quartermaster, quickly steer the ship towards the enemmy" + numDistance1 + " feet and attack";
	strMessage = writeToPage("jack", strMessage);


	strMessage1 = "Quartermaster, quickly steer the ship towards the enemmy " + numDistance2 + " feet and attack ";
	strMessage1 = writeToPage("william", strMessage1); 


	strMessage2 = "Quartermaster, quickly steer the ship towards the enemmy " + numDistance3 + " feet and attack ";
	strMessage2 = writeToPage("balbosa", strMessage2);


	strMessage3 = "Quartermaster, quickly steer the ship towards the enemmy " + numDistance4 + " feet and attack ";
	strMessage3 = writeToPage("peter", strMessage3);


	strMessage4 = "Quartermaster, quickly steer the ship towards the enemmy " + numDistance5 + " feet and attack ";
	strMessage4 = writeToPage("kid", strMessage4);


	strMessage5 = "Quartermaster, quickly steer the ship towards the enemmy " + numDistance6 + " feet and attack ";
	strMessage5 = writeToPage("blackbeard", strMessage5); 


}); //End Document.ready



	/*****
	Purpose: Commanding the ships
	Parameters: strID - represents the id of a person on the html page, strMessage - represents the command
	Return Value: None
	Return Statement: Commands for the ship
	*****\
	
function writeToPage( strId, strMsg ){

		var elOutput = document.getElementById(strId);
		elOutput.textContent = strMessage;



} //ends the command function