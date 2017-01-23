// website that shows how many days till the end of my sabbatical

var endTime, difference;

var app = new Vue({
	el: '#main',
	data: {
		message: 'days left',
		daysLeft: 0,
		endDate: moment([2017, 2, 2]),
		startDate: moment([2016,11,30]),
		totalNrOfDays: 0,
		counterNr: 0
	},
	methods: {
		calculateDaysLeft: function(){
			this.daysLeft = this.endDate.diff(moment(), 'days');
		},
		calculateTotalDays: function(){
			this.totalNrOfDays = this.endDate.diff(this.startDate, 'days');
		},
		countDown: function(){
			var count = this.totalNrOfDays;
			var counter=setInterval(timer, 75); //1000 will  run it every 1 second\

			function timer()
			{
			  count=count-1;
			  if (count <= app.daysLeft)
			  {
			     clearInterval(counter);
			     return;
			  }
			  app.counterNr = count;
			}
		}
	},
	created: function(){
		this.calculateDaysLeft();
		this.calculateTotalDays();
		this.countDown();
	}
});



// Create a way to countdown the days

// take the starting amount of days

// display  the initial amoount of days

// count down a day and display it

// loop until date shown is days left


// should it count down from the total nr or from the last number seen?