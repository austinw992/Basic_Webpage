/*
File name: Triggered
Author: Austin Wang
Date Created: November 2 2020
Purpose: Understanding the event triggers of jQuery
Last Modified on: 2 November 2020
Last Modified by: Austin Wang
Modification History:
2 November 2020: Created Document
*/



$(document).ready(function(){

	
	$(document).keypress(Keyboard);
	

	//Window function
	//the function is the parameter and being called once, it can be included in the field rather than separate above the functions
	$(window).resize(function(){$("#event1").append("resized and a cannon is fired");
	
	};//end of window function

	
	//keyboard function
	//format is similar to how a mouse clicks
	function Keyboard(){$("event2").append("target is locked on");

	};//end of keyboard function
	
	
	//mouse function
	//the on represents user interaction
	//this creates a new selection of the current element
	$("#event3").on({mouseleave: function(){$(this).css("border", "solid pink")};
	
	});//end of mouse function




});//end of ready document