var swHours=0;
var swMinutes=0;
var swSeconds=0;
var swMs=0;
var stopwatchTimer;

function stopwatch(){
    document.querySelector("#clock").classList.add("hidden");
    document.querySelector("#stopwatch").classList.remove("hidden");
}
function clock(){
    document.querySelector("#stopwatch").classList.add("hidden");
    document.querySelector("#clock").classList.remove("hidden"); 
}


let swTimer = document.createElement('h3');
swTimer.textContent = '00:00:00:00';
document.querySelector("#stopwatch").prepend(swTimer);

function startStopwatch(){
    stopwatchTimer= setInterval(function() {
        swMs++;
        if(swMs==100){
            swMs=0;
            swSeconds++;
        }
        if(swSeconds==60){
            swSeconds=0;
            swMinutes++;
        }
        if(swMinutes==60){
            swMinutes=0;
            swHours++;
        }
        if(swMs<10)
        swMs=`0${swMs}`;
        let time= `${timeFormat(swHours, swMinutes, swSeconds)}:${swMs}`;
        swTimer.textContent = time;
    },10)
}
function stopStopwatch(){
    clearInterval(stopwatchTimer);
}
function resetStopwatch(){
    clearInterval(stopwatchTimer);
    swHours=0;
    swMinutes=0;
    swSeconds=0;
    swMs=0;
    swTimer.textContent = '00:00:00:00'
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
