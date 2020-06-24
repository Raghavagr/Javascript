console.log("set an alarm to have your work on time");

var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

function ringbell() {
    audio.play();
}

function setAlarm(e) {
    e.preventDefault();

    let alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);    // access the date and time which we have set for an alarm
    console.log("setting alarm at:", alarmDate);

    now = new Date();    // access the current time at present to calculate time for alarm

    let timeToAlarm = alarmDate - now;  // this is future ms after which alarm has to be rang
    console.log("alarm will rang after", timeToAlarm + " ms");

    if (timeToAlarm >= 0) {
        setTimeout(() => {
            console.log("ringing now");
            ringbell();

        }, timeToAlarm);    // set timeToAlarm in settimeout after which we have to rand the bell
    }
}

