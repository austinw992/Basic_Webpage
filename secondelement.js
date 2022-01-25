/**************************************
 Filename: secondelement.js
 Author: Austin Wang (AW)
 Create Date: 31 August 2020
 Purpose: Produce three ways to provide an output for webpages using Javascript
 Last Modified On: 31 Aug 2020
 Last Modified by: Austin Wang (AW)
 Modification History:
 31 Aug 2020: Document Created
**************************************/

$(document).ready(function(){






//provides innerHTML format
	var strMessage = "A Wizard is never late, nor is he early. He arrives precisely when he means to.";
		
		var elOutput = document.getElementById("Gandalf");
		
		elOutput.innerHTML = strMessage;
	


});