/**************************************
 Filename: Elements.js
 Author: Austin Wang (AW)
 Create Date: 31 August 2020
 Purpose: Produce three ways to provide an output for webpages using Javascript
 Last Modified On: 31 Aug 2020
 Last Modified by: Austin Wang (AW)
 Modification History:
 31 Aug 2020: Document Created
**************************************/

$(document).ready(function(){
	
	//provides textcontent format
	//creates variable with a string message
	var strMessage = "<em>Ahoy! me treasure is Chemistry but I be hunting more in the Computer Science treasure.<em>";
		
		//retrieving the id from html
		var elOutput = document.getElementById("major");
		
		elOutput.textContent = strMessage;
	

	//provides innerHTML format
	var strMessage = "<em>I enjoy a good cup of tea and photography<em>";
		
		var elOutput = document.getElementById("hobby");
			
		elOutput.innerHTML = strMessage;
	


});