// website that shows how many days till the end of my sabbatical

var endTime, difference;



var config = {
  apiKey: "AIzaSyCvviiXfxO1_vBmK90NJ7VPmvc5phbGzAA",
  authDomain: "daysleft-4a79c.firebaseapp.com",
  databaseURL: "https://daysleft-4a79c.firebaseio.com"
}

firebase.initializeApp(config)


var itemsRef = firebase.database().ref('items')


var app = new Vue({
	el: '#main',
	data: {
		daysLeft: 0,
		endDate: moment([2017, 2, 2]),
		startDate: moment([2016,11,30]),
		totalNrOfDays: 0,
		counterNr: 0,
	},
	methods: {
		calculateDaysLeft: function(){
			this.daysLeft = this.endDate.diff(moment(), 'days');
		},
		calculateTotalDays: function(){
			this.totalNrOfDays = this.endDate.diff(this.startDate, 'days');
			return("okay");
		},
		countDown: function(){
			var count = this.totalNrOfDays;
			var counter=setInterval(timer, 75); //1000 will  run it every 1 second\

			function timer()
			{
			  count=count-1;
			  if (count < app.daysLeft)
			  {
			     clearInterval(counter);
			     return;
			  }
			  app.counterNr = count;
			}
		}
	},
	firebase: {
 		items: itemsRef
	},
	created: function(){
		this.calculateDaysLeft();
		this.calculateTotalDays();
		this.countDown();
	}
});



// lookup the last number seen
// count down from the lst number seen to the current day
// save the new current number to the last number seen