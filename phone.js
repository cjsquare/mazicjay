function showTime(){
    var today = new Date();
    var day = today.getDay();
    var month = today.getMonth();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var date = today.toDateString();
    var dateform = today.toLocaleDateString();
    var dateforms = today.toLocaleDateString('en-US', {weekday: 'short', month: 'long', day:'numeric', year: 'numeric'});


    // add zero if less than 10
    hour = concatZero(hour);
    minutes = concatZero(minutes);
    seconds = concatZero(seconds);


    document.getElementById("timemode").innerHTML = hour + ":" + minutes + ":" + seconds;
    document.getElementById("date").innerHTML = date
    document.getElementById("dateform").innerHTML = dateform
    document.getElementById("dateforms").innerHTML = dateforms
    setTimeout(showTime, 500)
}

showTime();

function startTime(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    // am pm 
    var mode;
    if (hour <= 11) {
        mode = "AM"
    } else {
        mode = "PM"
    }

    if (hour <= 12) {
        hour = hour
    } else {
        hour = hour - 12;
    }

    // add zero if less than 10
    hour = concatZero(hour);
    minutes = concatZero(minutes);
    seconds = concatZero(seconds);


    document.getElementById("time").innerHTML = hour + ":" + minutes + ":" + seconds + " " + mode;
    setTimeout(startTime, 500)

}

startTime();

function concatZero(value){
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}