
function startStopWatch(){
    let hours=0;
    let minutes=0;
    let seconds=0;
    let milliseconds=0;
    let time= `00:00:00:00`;
    let timer = document.createElement('h3');
    timer.textContent = time;
    document.querySelector("#stopwatch").append(timer);
    let stopwatchTimer= setInterval(function() {
        milliseconds++;
        if(milliseconds==100){
            milliseconds=0;
            seconds++;
        }
        if(seconds==60){
            seconds=0;
            minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++;
        }
        if(milliseconds<10)
        milliseconds=`0${milliseconds}`;
        time= `${timeFormat(hours, minutes, seconds)}:${milliseconds}`;
        timer.textContent = time;
    },10)
}

//clock 
let clockPlate= document.createElement('h3');
document.querySelector('#clock').append(clockPlate); 

let timer= setInterval(function() {
    let date= new Date();
    let hours= date.getHours();
    let minutes= date.getMinutes();
    let seconds= date.getSeconds();
    let prepand="AM";

    if(hours>12){
            hours=hours-12;
            prepand="PM";
     }

    let time= `${timeFormat(hours, minutes,seconds)} ${prepand}`;
        
    clockPlate.textContent = time;       
},1000); // setInterval    


function timeFormat(hours, minutes, seconds){
    hours= (hours<10)?`0${hours}`:hours;             // using template literals to concatenate
    minutes= (minutes<10)?`0${minutes}`:minutes;
    seconds= (seconds<10)?`0${seconds}`:seconds;
    return `${hours}:${minutes}:${seconds}`;
}
