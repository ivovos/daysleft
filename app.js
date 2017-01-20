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

