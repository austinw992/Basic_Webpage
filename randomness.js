/*
Title: randomness
Author: Austin Wang (AW)
Create Date: 14 September 2020
Purpose: understanding the concept of functions and applications
Last Modified On: 16 September 2020
Last modified By: Austin Wang
Modification History:
14 Sep 2020: Created Document
15 Sep 2020: Added Function output and Function Parameters
16 Sep 2020: modiefied the functions
*/

$(document).ready(function(){

	
		/* creating a constructor notation.
			Pirate: creates a object using a constructor
				parameters: Rank - position within the crew
				favorite_number - integer that belongs to each pirate
				id - output into html
				returns: none */

		function Pirate(Rank, favorite, id) {

			//Properties
			this.strRank = Rank;
			this.intfavorite = favorite;
			this.elOutput = document.getElementById(id);

			
		
			//methods
			//this will display what the pirates will say within their ranks
			this.speak = function() {
				this.elOutput.innerHTML += "<br>" + " the " + this.strRank;
			}; //end of speak function

			
			//pirate output
			this.guess = function() {
				this.elOutput.textContent += " guess the number: " + intRandom + " Argg";

			}; // end of guess function



			//math random 
			var elRand = document.getElementById(id);
			var intHigh = 10;
			var intLow = 1;
			var intRandom = 0;
			

			//creates a random number
			var intRandom = Math.floor((Math.random() * 10) + 1);


		};  //end Pirate
			
		/* creating a constructor notation.
			Captain: creates a object using a constructor
				parameters: Rank - position within the crew
				favorite_number - integer that belongs to The Captain
				id - output into html
				returns: none */

		function Captain(Rank2, favorite2, id) {

			//Properties
			this.strRank2 = Rank2;
			this.intfavorite2 = favorite2;
			this.elOutput = document.getElementById(id);
				
				//methods
				//send a phrase to the output
				this.speak = function(){
					this.elOutput.innerHTML += "<br>" + " Lets play a guessing game ";
				}//end of speak
				
				//this will display another phrase with a random number
				this.correct = function() {
					this.elOutput.textContent += " The Number I chose: " + intRandom2 + " Arggghh";
				} //end of correct function
		
				//math random 
				var elRand2 = document.getElementById(id);
				var intHigh = 10;
				var intLow = 1;
				var intRandom2 = 0;
			

				//creates a random number
				var intRandom2 = Math.floor((Math.random() * 10) + 1);

			
				
			}; //end of Captain

	//crewmate
	var Austin = new Captain("captain", 9, "austin");
	var Jack = new Pirate( "first mate", 5, "jack");
	var Will = new Pirate( "carpenter", 3, "will");
	var Bal = new Pirate( "navigator",  7, "bal");
	var Mary = new Captain("captain", 10, "mary");

	Austin.speak();
	Jack.speak();
	Jack.guess();
	Will.speak();
	Will.guess();
	Bal.speak();
	Bal.guess();
	Mary.correct();
	

}); //End Document.ready