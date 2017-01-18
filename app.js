// website that shows how many days till the end of my sabbatical

var endTime, difference;

var app = new Vue({
	el: '#main',
	data: {
		message: 'days left',
		days: 0 + ' days left'
	},
	methods: {
		daysLeft: function(){
			endTime = moment([2017, 2, 3]);
			difference = endTime.diff(moment(), 'days');
			//console.log(difference)
			this.days = difference;
		}
	},
	created: function(){
		this.daysLeft();
	}
});

//console.log(app.daysLeft());

// 1 - get the current date

// 2 - get the date that's the end of my sabbitical (last full day in australia)

// 3 - figure out how many days there are between now and the last date

// 4 - display the amount of days -- should be 46

// 5 - Style the page

// 6 - host so it can be set as landing page
