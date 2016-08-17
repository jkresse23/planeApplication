/* I want to store a few flight numbers with their status.  When the user enters
their flight number, I want to update the flight status according to that flight.
I now have my button updating.  Let's store one flight with a status and display that status
if the user enters the flight number.

so now I am pulling the object data into my view view the controller.  now I want to pull the status of the flight they enter. 

now I am pulling object data into my view from the controller and I am pulling the status property for the user based on the 
flight number they enter 


I am trying to display all flights.  Right now I can display the last flight, but need
to figure out how to display the entire array. From there, it will be fairly easy to see
if I've added the new flight to my existing array of flights.

Let's start by adding a new flight to flights.  I think I need to create a new object
before adding it to the flights array  

Each time the user adds a flight, it's being added to the array of flights which is great.
Problem is it's also changing the previous submission's values to those new values, so 
we're getting multiple records of the same values.  I need to add a new object, store that 
object, and get a new object in there.

*/

var app = angular.module("app", []);

app.controller("Controller", function() {
	
	this.flights = [
		{flightID : "1", status : "is delayed. I'm so sorry!"},
		{flightID : "2", status : "is right on time.  Lucky you!"},
		{flightID : "7", status : "already left.  Where were you?"},
		{flightID : "12", status : "is stuck on the tarmack at LGA."}
		
		];
		
	
	this.userSubmit = function(flightNumber) {
		
		this.flightUpdate = "Going through.";
		
		this.intro = "Flight #";
		
		for (this.i = 0; this.i < this.flights.length; this.i++) {

			
			if (this.flights[this.i].flightID === this.flightNumber) {
				
				console.log("Match!");
				
				this.flightStatus = this.flights[this.i].status;
				
				return "";
				
				} else {
				
				console.log("No Match!");
				
				this.flightStatus = this.flightNumber + " does not exist in your system.  Please re-enter your flight number.";
				
				}			
			};		
		
		};
		
		this.addNewFlight = function (newFlightNumber, newFlightStatus) {
	
			this.newFlight = {};
			
			this.newFlight.flightID = this.newFlightNumber;
			
			this.newFlight.status = this.newFlightStatus;
			
			this.newFlightDisplayed = "You've just added flight #" + this.newFlightNumber + ", which you've indicated " + 
				
				this.newFlightStatus;
				
			this.flights.push(this.newFlight);
			
			console.log(this.flights);
			
				
	}; 
		
		this.usersFlight = this.flightNumber;
		
	

});


