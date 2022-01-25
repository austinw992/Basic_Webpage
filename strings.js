/*
TITLE: Strings
AUTHOR: Austin Wang
CREATE DATE: 1 October 2020
PURPOSE: understand the javascript of loops within an array
LAST MODIFIED ON: 1 October 2020
LAST MODIFIED BY: Austin Wang
Modification History:
1 October 2020: Created Document
*/

$(document).ready(function(){

//prompt the user for a name
	var strPhrase = "";
	var strQuestion = "Give me a name to use!!";
	var strDefault = "Jack";
	strPhrase = prompt(strQuestion, strDefault);


	var intPhraseLength = 0;
	intPhraseLength = strPhrase.length;
	
	var elSpouse = document.getElementById("queen");
	elSpouse.textContent = "Your Spouse is: ";
	
	var pirateArray = ["'s Jolly Roger", "'s Buccaneer", "'s Black Pearl", "'s Queen Anne's Revenge", "'s Empress/Emperor", "'s Kiss of Death", "The Hail Mary: ", "The Strangling:  ", "'s Hades Dubloon", "'s Killers Secret", "'s Neptune's Plague", "'s Misery" ] 
	
	//storing the names into an array. 
	var spouseArray = [
	
		//name for ship 1 where the text will be uppercase
		strPhrase.toUpperCase() + pirateArray[0],
	
		//name for ship 2 where the text will be lowercase
		strPhrase.toLowerCase() + pirateArray[1],
	
		//name for ship 3 display what character is at that position
		strPhrase.charAt(1) + pirateArray[2],
	
		//name for ship 4 returns the remaining string based on position value
		strPhrase.substring(3) + pirateArray[3],
	
		//name for ship 5 returns the length of characters based on value
		strPhrase.substr(0,4) + pirateArray[4],
	
		//name for ship 6 returns removes white space from both side of the string
		strPhrase.trim() + pirateArray[5],
	
		//name for ship 7 replaces specific value with another value in a string
		pirateArray[6] + strPhrase.replace("i", "u"),
	
		//name for ship 8 replaces specific value with another value in a string
		pirateArray[7] + strPhrase.replace("a", "u"),
	
		//name for ship 9 replaces specific value with another value in a string
		strPhrase.replace("o", "a") + pirateArray[8],
	
		//name for ship 10 display what character is at that position
		strPhrase.charAt(2) + pirateArray[9],
	
		//name for ship 11 where the text will be uppercase
		strPhrase.toUpperCase() + pirateArray[10],
	
		//name for ship 12 where the text will be uppercase
		strPhrase.toUpperCase() + pirateArray[11],
	]
	
	var elShip1 = document.getElementById("ship1");
	var elShip2 = document.getElementById("ship2");
	var elShip3 = document.getElementById("ship3");
	var elShip4 = document.getElementById("ship4");
	var elShip5 = document.getElementById("ship5");
	var elShip6 = document.getElementById("ship6");
	var elShip7 = document.getElementById("ship7");
	var elShip8 = document.getElementById("ship8");
	var elShip9 = document.getElementById("ship9");
	var elShip10 = document.getElementById("ship10");
	var elShip11 = document.getElementById("ship11");
	var elShip12 = document.getElementById("ship12");
	
	elShip1.textContent = spouseArray[0];
	elShip2.textContent = spouseArray[1];
	elShip3.textContent = spouseArray[2];
	elShip4.textContent = spouseArray[3];
	elShip5.textContent = spouseArray[4];
	elShip6.textContent = spouseArray[5];
	elShip7.textContent = spouseArray[6];
	elShip8.textContent = spouseArray[7];
	elShip9.textContent = spouseArray[8];
	elShip10.textContent = spouseArray[9];
	elShip11.textContent = spouseArray[10];
	elShip12.textContent = spouseArray[11];



});