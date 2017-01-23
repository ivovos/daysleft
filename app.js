// website that shows how many days till the end of my sabbatical

var endTime, difference;

var app = new Vue({
	el: '#main',
	data: {
		message: 'days left',
		nrDaysLeft: 0,
		endDate: moment([2017, 2, 2]),
		startDate: moment([2016,11,30]),
		totalNrOfDays: 0,
		counterNr: 0
	},
	methods: {
		daysLeft: function(){
			this.nrDaysLeft = this.endDate.diff(moment(), 'days');
		},
		totalDays: function(){
			this.totalNrOfDays = this.endDate.diff(this.startDate, 'days');
		},
		countDown: function(){
			var count = this.totalNrOfDays;
			var counter=setInterval(timer, 100); //1000 will  run it every 1 second\

			function timer()
			{
			  count=count-1;			

			  console.log(app.nrDaysLeft);

			  if (count <= app.nrDaysLeft)
			  {
			     clearInterval(counter);
			     console.log('ready!');
			     return;
			  }
			 // console.log(count);
			  app.counterNr = count;
			//  console.log(app.counterNr);
			}
		}
	},
	created: function(){
		this.daysLeft();
		this.totalDays();
		this.countDown();
	}
});



// Create a way to countdown the days

// take the starting amount of days

// display  the initial amoount of days

// count down a day and display it

// loop until date shown is days left


// should it count down from the total nr or from the last number seen?