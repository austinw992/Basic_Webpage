/*
TITLE: Looping Through Arrays
AUTHOR: Austin Wang
CREATE DATE: 28 September 2020
PURPOSE: understand the javascript of loops within an array
LAST MODIFIED ON: 28 September 2020
LAST MODIFIED BY: Austin Wang
Modification History:
28 September 2020: Created Document
*/

$(document).ready(function(){
			
	alert("Hoist the secret message ye scurvy dawgs!");
	
	//prompt the user for a single character
	var strCharacter = "";
	var strQuestion = "Give me a SINGLE Character";
	var strDefault = "a";
	strCharacter = prompt(strQuestion, strDefault);
	
	var chrCharacter = strCharacter;
	

	//loop until the valid data is entered in this case the request is ONE CHARACTER
	//a while loop is used because we don't know how many times its gonna loop
	while (strCharacter.length !==1){
		var strRequest = "ARGH!! SINGLE CHARACTER ONLY! ENTER AGAIN!";
		var default2 = "b";
		strLetter = prompt(strRequest, default2);
	};
	
	/*****			
	Purpose: converts the user input into a ASCII character			
	Parameters: single character / letter		
	Return: integer representing an ascii value
	*****/
	function parseAscii(chrCharacter)
	{
		intAscii = chrCharacter.charCodeAt(0);
		return intAscii;
	}
	
	/*****			
	Purpose: converts characters into a binary format of 0s and 1s			
	Parameters: single integer representing an ascii value	
	Return: binary, base 2 representation of the number passed to this function
	*****/
	function parseBin(intAscii)
	{
		strBin = parseInt(intAscii, 10).toString(2);
		if(strBin.length < 8)
		{
			var intPlaceHolders = 8 - strBin.length;
			for(var i = 0; i < intPlaceHolders; i++)
			{
				strBin = "0" + strBin;
			}
			
		}
		
		return strBin;
	}
	
	//get the element id from the html file
	var elsecret = document.getElementById("secret");
	var elencrypted = document.getElementById("encrypted");
	
	//displays the user input that was asked for
	elsecret.textContent = "Secret Letter Used: " + strCharacter;
	
	//calls out the function provided by instructor to convert Ascii and binary
	var intsecret = parseAscii(strCharacter);
	var binsecret = parseBin(intsecret);
	
	//stores the values converted into an array
	var Array = [];
	
	//splits the 1 and 0 of binary
	Array = binsecret.split("");
	
	//looping the array again for the boolean display from the length of the first array
	var Array2 = [];
	//store the true or false statements
	var display = "";
	
	//for loop used here since we know how many times we want which is the length of the array stored above
	for (i = 0; i < Array.length; i++) {
		Array2[i] = parseInt(Array[i]);
		display += Boolean(Array2[i]) + "";
	};
		
	
	elencrypted.textContent = "Display Binary and True or False: " + Array2 + " and " + display;

	
});