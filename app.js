setInterval(clock, 1000);
function clock() {
	var d = new Date();
	var months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
	// document.getElementById("date").innerHTML = d.getDate() + ' '+months[d.getMonth()]+'     '+d.getFullYear();
	document.getElementById('day').innerHTML = days[d.getDay()];

	if (d.getHours() < 10) {
		var hours = '0' + d.getHours();
	} else {
		hours = d.getHours();
	}
	if (d.getMinutes() < 10) {
		var minutes = '0' + d.getMinutes();
	} else {
		minutes = d.getMinutes();
	}
	if (d.getSeconds() < 10) {
		var seconds = '0' + d.getSeconds();
	} else {
		seconds = d.getSeconds();
	}

	// console.log(hours);
	// console.log(minutes);
	// console.log(seconds);

	document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
}
