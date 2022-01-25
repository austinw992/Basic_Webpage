/*
File name: Movers and Shakers
Author: Austin Wang
Date Created: November 1 2020
Purpose: Understanding the effects of jQuery
Last Modified on: 1 November 2020
Last Modified by: Austin Wang
Modification History:
1 November 2020: Created Document
*/



// Test1 in Firefox
// Test2 in IE
// Test3 in Google Chrome


$(document).ready(function(){

	//to simplifiy demonstrating the events effect buttons will be used rather than redirecting to a different page
	//each button represents a different effect
	
	$("#SlideUP").click( performSlideUP );
	$("#SlideDown").click( performSlideDown );
	$("#Hide").click( performHide );
	$("#Show").click( performShow );
	$("#FadingIn").click( performFadingIn );
	$("#FadingOut").click( performFadingOut );
	$("#Toggling").click( performToggling );
	$("#Chaining").click( performChaining );
	
	//function represents sliding up the subject
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performSlideUP() {
		$('#SlideUP').click(function(){$('#shipimage').slideUp(); })

		};//end of sliding up

	//function represents sliding down the subject
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performSlideDown() {
		$('#SlideDown').click(function(){$('#shipimage').slideDown(); })

		};//end of sliding down

	//function represents hiding the subject
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performHide() {
		$('#Hide').click(function(){$('#shipimage').hide(); })

		};//end of hiding

	//function represents showing the subject
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performShow() {
		$('#Show').click(function(){$('#shipimage').show(); })

		};//end of showing

	//function represents fading out the subject
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performFadingIn() {
		$('#FadingIn').click(function(){$('#shipimage').fadeIn(); })

		};//end of fading in
	
	//function represents fading in the subject
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performFadingOut() {
		$('#FadingOut').click(function(){$('#shipimage').fadeOut(); })

		};//end of fading out

	//function represents toggling the subject
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performToggling() {
		$('#Toggling').click(function(){$('#shipimage').toggle(); })

		};//end of toggling

	//function represents chaining the subject
	//chaining is used when the writer wants to include more than on method at the same time
	//a nested function will be used
	//first function will connect to the button clicked by user
	//the second function will perform the action requested
	function performChaining() {
		$('#Chaining').click(function(){$('#ship').slideUp("fast").slideDown("slow"); })

		};//end of chaining


	

	










}//end of ready document