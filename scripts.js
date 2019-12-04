/*COUNTDOWN TIMER FOR COMPETITION */

//Competition Date - Enter new date if changed
var countDownDate = new Date("Feb 8, 2019 00:00:00").getTime();

//Update the count down every 1 second
var x = setInterval(function(){

    //Get todays date and time
    var now = new Date().getTime();

    //Find the distance between now and the count down date
    var distance = countDownDate - now;

    //Time Calc for Days, Hours, Minutes, and Seconds
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

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
