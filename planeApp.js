/* I want to store a few flight numbers with their status.  When the user enters
their flight number, I want to update the flight status according to that flight.
I now have my button updating.  Let's store one flight with a status and display that status
if the user enters the flight number.

so now I am pulling the object data into my view view the controller.  now I want to pull the status of the flight they enter. 

now I am pulling object data into my view from the controller and I am pulling the status property for the user based on the 
flight number they enter 


what I'm trying to do in line 40 and on is let the user add a new flight number, but right now I can't figure out how to
add a new flight object to my existing list of flight objects.*/

var app = angular.module("app", []);

app.controller("Controller", function() {
	
	this.flights = {
		1 : {status : "is delayed. I'm so sorry!"},
		2 : {status : "is right on time.  Lucky you!"},
		7 : {status : "already left.  Where were you?"}
	
	};


	this.userSubmit = function(flightNumber) {
	
		
		this.flightUpdate = "Going through.";
		
		this.intro = "Flight #";
		
		this.usersFlight = this.flightNumber;
		
		this.flightStatus = this.flights[this.usersFlight].status;
		
	
	};
	
/*	this.addNewFlight = function (newFlightNumber, newFlightStatus) {
	
		this.newFlight = this.flights.add[this.newFlightNumber];
		
		this.updatedListOfFlights = this.flights;
	
	}; */

});

/* app.factory("Data", function() {

	
	return flights = {
		001 : {status : "is delayed. I'm so sorry!"},
		002 : {status : "is right on time.  Lucky you!"},
		003 : {status : "already left.  Where were you?"}
	
	};
});
	

var categories = {
	bakeries : ["bakery1", "bakery2"],
	 coffeeShops : ["coffeeshop1", "coffeeshop2"]
	 };

console.log(categories);

*/
