var hrs = 0;
var min = 0;
var sec = 0;
var milisec = 0;
var hrsHeading = document.getElementById('hrs');
var minHeading = document.getElementById('min');
var secHeading = document.getElementById('sec');
var msecHeading = document.getElementById('milisec');
var interval;


function timer(){
    
    milisec++;
    msecHeading.innerHTML = milisec;
    if(milisec >= 60){

        sec++;
        secHeading.innerHTML = sec;
        milisec = 0;

    }

    else if (sec >= 60){

        min++;
        minHeading.innerHTML = min;
        sec = 0;

    }

    else if (min >= 60) {

        hrs++;
        hrsHeading.innerHTML = hrs;
        min = 0;

    }

}

function start(){

    if( !interval){
        interval = setInterval(timer , 10)

    }
}


function split(){

    clearInterval(interval)
    interval = false;
}

function reset(){

    hrs = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    hrsHeading.innerHTML = hrs;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = milisec;
    split();

}

