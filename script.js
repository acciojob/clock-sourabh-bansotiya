//your JS code here. If required.
function dateTime() {
	let currentDate = new Date();

	let hours = currentDate.getHours();
	let mins = currentDate.getMinutes();
	let secs = currentDate.getSeconds();

	mins = (mins < 10 ? "0" : "") + mins;
	secs = (secs < 10 ? "0" : "") +secs;

	let day = currentDate.getDate();
	let month = currentDate.getMonth() + 1;
	let year = currentDate.getFullYear();

	let currentTime = hours + ":" + mins + ":" + secs;
	let currentDateStr = day + "/" + month +"/" + year;

	alert(currentTime + ", " + currentDateStr);

	document.getElementById("timer") + currentTime + currentDateStr;
}
setInterval(dateTime , 1000);