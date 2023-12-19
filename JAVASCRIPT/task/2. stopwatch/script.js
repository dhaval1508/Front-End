let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = document.querySelector('.timediplay');
let int = null;

document.getElementById('startTimer').addEventListener('click', () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displaywatch, 10)
})

document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int)
})

document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timer.innerHTML = '00:00:00:000'
})

function displaywatch() {
    milliseconds = milliseconds + 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }

    }

    // if (hours < 10) {
    //     let h = "0" + hours;
    // }
    // else {
    //     let h = hours;
    // }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0"+minutes : minutes;
    let s = seconds < 10 ? "0"+seconds : seconds;
    let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0" +milliseconds : milliseconds;


    // timer.innerHTML=h+":"+m+":"+s+":"+ms;
    timer.innerHTML=`${h} : ${m} : ${s} : ${ms}`;


}