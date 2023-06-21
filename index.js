var sec=0
var min=0
var hr=0
var interval
var isRunning = false


function twoDigits(digit) {
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}


function start() {
    if (!isRunning){
        timer()
        interval = setInterval(timer, 1000)
        isRunning = true
    }
}

function pause() {
    clearInterval(interval)
    isRunning = false
}

function stop() {
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    document.getElementById('timer').innerText='00:00:00'
    isRunning = false
}

function timer() {
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('timer').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}