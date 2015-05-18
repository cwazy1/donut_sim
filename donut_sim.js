var open = prompt("what time will your shop open in the morning?");
var close = prompt("what time will your shop close in the afternoon?");
var hoursOpen = (12 - open)+(close);

function DonutMaster(){

	this.listOfShops = []
	//this creates and pushes an entire instance of donutshop(l,m,n,a) into the array
	this.addShop = function(l,m,n,a) {
		var newShop = new donutShop(l,m,n,a)
		this.listOfShops.push(newShop)
	}

	this.generateReport = function() {
		for (var i = 0; i < this.listOfShops.length; i++){
			//adding jQuery here to add in a new row
			$("tbody").append("<tr id='"+i+"'></tr>")
			$("#" + i).append("<td>" + this.listOfShops[i].franchiseLocation + "</td>")
			$("#" + i).append("<td>" + this.listOfShops[i].getDonutsPerHour() + "</td>")
			$("#" + i).append("<td>" + this.listOfShops[i].getDonutsPerDay() + "</td>")
			



			console.log(this.listOfShops[i].franchiseLocation)
			console.log("Avg donut production per hour at "+ this.listOfShops[i].franchiseLocation + " location, is: " + this.listOfShops[i].getDonutsPerHour())
			console.log("Avg donut production per day at  " + this.listOfShops[i].franchiseLocation + " location, is: " + this.listOfShops[i].getDonutsPerDay())
		}
	}
}
	$("#dt").on("click", function(){
		$("#0").css('background-color', 'green')
	})
	$("#ch").on("click", function(){
		$("#1").css('background-color', 'blue')
	})
	$("#slu").on("click", function(){
		$("#2").css('background-color', 'red')
	})
	$("#ww").on("click", function(){
		$("#3").css('background-color', 'yellow')
	})
	$("#bd").on("click", function(){
		$("#4").css('background-color', 'orange')
	})

//this is the class of donut shop which will be used by the addShop method to push into an array.
function donutShop(l,m,n,a) {
	this.franchiseLocation = l
	this.minCustomersPerHour = m
	this.maxCustomersPerHour = n
	this.avgDonutsPerCustomer = a

	this.getCustomerPerHour = function() {
		return Math.floor(Math.random()*(this.maxCustomersPerHour- this.minCustomersPerHour +1))+this.minCustomersPerHour
	}

	this.getDonutsPerHour = function() {
		return Math.floor(this.getCustomerPerHour() * this.avgDonutsPerCustomer)
	}

	this.getDonutsPerDay = function() {
		var donutsPerDay = 0;
		for (var i = 0; i < hoursOpen; i++) {
			donutsPerDay += this.getDonutsPerHour()
		}
		return (donutsPerDay)
	}
}

//first we must create an instance of the donutmaster
var x = new DonutMaster()
//then we create multiple addShops to put new donutShops into the array
x.addShop( "Downtown" , 8, 43, 4.5);
x.addShop("caphill", 4, 37, 2 );
x.addShop('slu', 9, 23, 6.33)
x.addShop('wedgewood', 2, 28, 1.25)
x.addShop('ballard', 8, 58, 3.75)
//this finally runs the methods within the instances in the array to show the data we want.
x.generateReport()

