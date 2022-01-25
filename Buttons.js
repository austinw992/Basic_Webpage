/*
Title: Buttons
Author: Austin Wang (AW)
Create Date: 2 October 2020
Purpose: understanding the concept of buttons and events
Last Modified On: 2 October 2020
Last modified By: Austin Wang
Modification History:
2 October 2020: Created Document and using same code from Functions Lab
*/

$(document).ready(function(){
	var strMessage = "";
	
	var numDistance1 = 40;
	var numDistance2 = 30;
	var numDistance3 = 25;
	var numDistance4 = 20;
	var numDistance5 = 15;
	var numDistance6 = 4;

	strMessage = "Quartermaster, quickly steer the ship towards the enemmy  " + numDistance1 + " feet and attack";
	strMessage = clickedButton("jack", strMessage);
	strMessage1 = "Crew2, quickly steer the ship towards the enemmy  " + numDistance2 + " feet and attack ";
	strMessage1 = clickedButton("william", strMessage1); 
	strMessage2 = "Crew8, quickly steer the ship towards the enemmy  " + numDistance3 + " feet and attack ";
	strMessage2 = clickedButton("balbosa", strMessage2);
	strMessage3 = "Quartermaster, quickly steer the ship towards the enemmy  " + numDistance4 + " feet and attack ";
	strMessage3 = clickedButton("peter", strMessage3);
	strMessage4 = "Quartermaster, quickly steer the ship towards the enemmy  " + numDistance5 + " feet and attack ";
	strMessage4 = clickedButton("kid", strMessage4);
	strMessage5 = "Quartermaster, quickly steer the ship towards the enemmy  " + numDistance6 + " feet and attack ";
	strMessage5 = clickedButton("blackbeard", strMessage5); 

}); //End Document.ready

/*****
	Purpose: Commanding the ships
	Parameters: strID - represents the id of a person on the html page, strMessage - represents the command
	Return Value: None
	Return Statement: Commands for the ship
	*****/
	
function clickedButton(strId, strMessage){

		var elOutput = document.getElementById(strId);
		elOutput.textContent = strMessage;

} //ends the command function

/*****
	Purpose: Commanding the ships
	Parameters: strID - represents the id of a person on the html page, strMessage - represents the command
	Return Value: None
	Return Statement: Commands for the ship
	*****/
	
function clickedButton(strId, strMessage){

		var elOutput = document.getElementById(strId);
		elOutput.textContent = strMessage;

} //ends the command function

/*****
	Purpose: Commanding the ships
	Parameters: strID - represents the id of a person on the html page, strMessage - represents the command
	Return Value: None
	Return Statement: Commands for the ship
	*****/
	
function clickedButton(strId, strMessage){

		var elOutput = document.getElementById(strId);
		elOutput.textContent = strMessage;

} //ends the command function

/*****
	Purpose: Commanding the ships
	Parameters: strID - represents the id of a person on the html page, strMessage - represents the command
	Return Value: None
	Return Statement: Commands for the ship
	*****/
	
function clickedButton(strId, strMessage){

		var elOutput = document.getElementById(strId);
		elOutput.textContent = strMessage;

} //ends the command function

	/*****
	Purpose: Commanding the ships
	Parameters: strID - represents the id of a person on the html page, strMessage - represents the command
	Return Value: None
	Return Statement: Commands for the ship
	*****/
	
function clickedButton(strId, strMessage){

		var elOutput = document.getElementById(strId);
		elOutput.textContent = strMessage;

} //ends the command function