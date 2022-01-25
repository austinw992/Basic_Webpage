/**************************************
 Filename: multiwrites.js
 Author: Austin Wang (AW)
 Create Date: 31 August 2020
 Purpose: Produce three ways to provide an output for webpages using Javascript
 Last Modified On: 31 Aug 2020
 Last Modified by: Austin Wang (AW)
 Modification History:
 31 Aug 2020: Document Created
**************************************/

$ (document).ready(function(){

	var strMessage = "The Future's not set, there's no fate but what we make for ourselves.";
	
		var elOutput = document.getElementById('John');
	
			elOutput.textContent = strmessage;

	var strmessage = "A Wizard is never late, nor is he early. He arrives precisely when he means to.";
		
		var elOutput = document.getElementById('Gandalf');
		
			elOutput.innerHTML = strMessage;

	var strmessage = "I am Iron Man";
		
		var elOutput = document.getElementById('Tony');
			
			elOutput.document.write(strmessage);
		
});