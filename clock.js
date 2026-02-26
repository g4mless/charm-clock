function updateClock() {
	const today = new Date();

	const hour = today.getHours();
	const min = today.getMinutes();

	let formatHour = hour;
	let formatMin = min < 10 ? "0" + min : min;

	const timeString = formatHour +  ":" + formatMin;

	const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 
					   'July', 'August', 'September', 'October', 'November', 'December'];

	const indexDay = today.getDay();
	const indexMonth = today.getMonth();
	const date = today.getDate();

	const dayString	= dayName[indexDay];
	const dateString = monthName[indexMonth] + " " + date;

	const clockElement = document.getElementById('clock');
	const dayElement = document.getElementById('day');
	const dateElement = document.getElementById('date');

	clockElement.textContent = timeString;
	dayElement.textContent = dayString;
	dateElement.textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);