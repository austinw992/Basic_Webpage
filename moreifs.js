/*
Title: More Ifs
Author: Austin Wang (AW)
Create Date: 22 September 2020
Purpose: Create a prompt using Javascript and working with variables and switch statements
Last Modified On: 22 September 2020
Last modified By: Austin Wang
Modification History:
22 Sep 2020: Created Document
*/


$(document).ready(function(){

	//create variables to collect user inputs
	var strCurrentLatitude = "";
	var strCurrentLongitude = "";
	var strDestinationLatitude = "";
	var strDestinationLongitude = "";
	
	//asking for user input on their longitude and latitude
	var strQuestion1 = "What is your current Latitude";
	var strQuestion2 = "What is your current Longitude";
	var strQuestion3 = "What is your destination Latitude";
	var strQuestion4 = "What is your destination Longitude";
	
	//default to store
	var strDefault1 = "0";
	var strDefault2 = "0";
	var strDefault3 = "0";
	var strDefault4 = "0";
	
	//displays a prompt for the user input
	strCurrentLatitude = prompt(strQuestion1, strDefault1);
	strCurrentLongitude = prompt(strQuestion2, strDefault2);
	strDestinationLatitude = prompt(strQuestion3, strDefault3);
	strDestinationLongitude = prompt(strQuestion4, strDefault4);
	
	
	//convert string into an integer
	var intCurrentLatitude = 0;
	var intCurrentLongitude = 0;
	var intDestinationLatitude = 0;
	var intDestinationLongitude = 0;

	intCurrentLatitude = parseInt(strCurrentLatitude);
	intCurrentLongitude = parseInt(strCurrentLongitude);
	intDestinationLatitude = parseInt(strDestinationLatitude);
	intDestinationLongitude = parseInt(strDestinationLongitude);

	//displaying the user input of their destination and current position
	//var elecho = document.getElementById("echo");
	//elecho.textContent = "Current Latitude: " + intCurrentLatitude + "\n" + "Current Longitude: " + intCurrentLongitude + "\n" + "Destination Latitude: " + intDestinationLatitude + "\n" + "Destination Longitude: " + intDestinationLongitude + "\n";
	


	//if else statements 
	if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude) {
		msg = "Head North East";
	}
	else if (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude){
		msg = "Head North West";
	}
	else if (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude){
		msg = "Head South West";
	}
	else if (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude){
		msg = "Head South East";
	}
	else {
		msg = "Land Ho!";
	}//end of ifelse statements
	
	

	var direction;
	var map = (intCurrentLatitude, intDestinationLatitude, intCurrentLongitude, intDestinationLongitude);
	
	//switch statements
	switch (map) {
		
		case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
			direction = "Head North East";
			break;
		
		case (intCurrentLatitude <= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
			direction = "Head North West";
			break;
		
		case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude >= intDestinationLongitude):
			direction = "Head South West";
			break;
		
		case (intCurrentLatitude >= intDestinationLatitude && intCurrentLongitude <= intDestinationLongitude):
			direction = "Head South East"
			break;
		
		default:
			direction = "Land Ho";
			break;
	}//end of switch statements

	
	//displaying the user input of their destination and current position
	var elecho = document.getElementById("echo");
	elecho.textContent = "Current Latitude: " + intCurrentLatitude + "\n" + "Current Longitude: " + intCurrentLongitude + "\n" + "Destination Latitude: " + intDestinationLatitude + "\n" + "Destination Longitude: " + intDestinationLongitude + "\n";

	//output into html file with id
	var elstate = document.getElementById("ifElse");
	elstate.textContent = msg;

	//output into html file with id
	var elexchange = document.getElementById("caseSwitch");
	elexchange.textContent = direction;



}); //end of document ready