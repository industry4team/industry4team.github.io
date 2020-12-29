/*COUNTDOWN TIMER FOR COMPETITION */

//Competition Date - Enter new date if changed
var countDownDate = new Date("Feb 7, 2020 00:00:00").getTime();

//Update the count down every 1 second
var x = setInterval(function(){

    //Get todays date and time
    var now = new Date().getTime();

    //Find the distance between now and the count down date
    var distance = countDownDate - now;

    //Time Calc for Days, Hours, Minutes, and Seconds
    var days = Math.floor(distance / (24 * 60 * 60 * 1000));
	distance = distance - (days * 24 * 60 * 60 * 1000);
    var hours = Math.floor(distance / (60 * 60 * 1000));
	distance = distance - (hours * 60 * 60 * 1000);
    var minutes = Math.floor(distance / (60 * 1000));
	distance = distance - (minutes * 60 * 1000);
    var seconds = Math.floor(distance / (1000));

    //Display the result in the element with id="countdown_timer"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    //If the count down is finished, write some text
    if (distance<0) {
        clearInterval(x);
        document.getElementById("countdown_timer").innerHTML = "COMPETITION HAS STARTED";
    }
}, 1000);
