/*
Title: Conversions
Author: Austin Wang (AW)
Create Date: 2 September 2020
Purpose: Create a prompt using Javascript and working with variables, integers, and cancatatination
Last Modified On: 2 September 2020
Last modified By: Austin Wang
Modification History:
2 Sep 2020: Created Document
*/

$(document).ready(function(){

	//created variables to collect user name	
	var strName = "";
	var strQuestion = "What is your name?";
	var strDefault = "Captain Jones";
		
		//display a prompt to collect user name
		strName = prompt(strQuestion, strDefault);
	
	//created variable to display greeting
	var stOutput = "";
	var strGreeting = "Argggg Good Morning";
		
		//display alert with greeting
		strOutput = strGreeting + strName;
		alert(strOutput);
	
	//create variables to locate ID from HTML
	var elJack = document.getElementById("Jack");
	var elDavy = document.getElementById("Davy");
		
	var strQuestion = "How many gold doubloons have you plundered?"
		
	//created variables to store string numbers
	var strDefaultAns = "2";
	var strDigit = "";
	var numDigit = 0;
		
		strDigit = prompt(strQuestion, strDefaultAns);
		elJack.textContent = strDigit + "Gold Doubloons";

		//this turns a string value into an integer
		numDigit = parseInt(strDigit);
		
		elDavy.textContent = numDigit + "Gold Doubloons";
		
	var elWill = document.getelementById("Will");
	var USD = (numDigit * 287);	

		elWill.textcontent = USD + "Profit in USD";

	var elBlackbeard = document.getElementById("Blackbeard");
	
		elBlackbeard.textcontent = "I," + strName + "have plundered " + numDigit + "gold doubloons " + "for a total profit of $" + USD;




}); //End Document.ready