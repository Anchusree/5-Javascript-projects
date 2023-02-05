let seconds = document.getElementById('seconds')
let milliSeconds = document.getElementById('milliseconds')
let minutes = document.getElementById('minutes')

let start = document.getElementById('start')
let stop = document.getElementById('stop')

let reset = document.getElementById('reset')
let sec = 0;
let millisec= 0;
let min= 0;
var timeInterval;

const timer = ()=>{
    millisec++;
    if(millisec < 9){
        milliSeconds.innerHTML = "0" + millisec;
    }
    if(millisec > 9){
        milliSeconds.innerHTML = millisec;
    }
    if(millisec > 99){
        sec++;
        seconds.innerHTML = "0" + sec
        millisec = 0;
        milliSeconds.innerHTML = "0" + 0;
    }
    if(sec > 9 ){
        seconds.innerHTML = sec
    }
    if(sec > 59){
        min++;
        minutes.innerHTML = "0" + min
        sec = 0;
        seconds.innerHTML = "0" + 0;
    }
    if(min > 9){
        minutes.innerHTML = min
    }
   
}

//start
start.addEventListener('click',()=>{
    timeInterval = setInterval(timer,25)
})

//stop
stop.addEventListener('click',()=>{
    clearInterval(timeInterval)
})
//reset
reset.addEventListener('click',()=>{
    clearInterval(timeInterval)
    sec = "00";
    millisec = "00";
    min = "00";
    seconds.innerHTML = sec;
    milliSeconds.innerHTML = millisec;
    minutes.innerHTML = min
})
