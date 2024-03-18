let SecNiddle = document.querySelector(".SecondNiddle");
let MinNiddle = document.querySelector(".MinuteNiddle");
let HourNiddle = document.querySelector(".HourNiddle");



function Clock() {
    let d = new Date();
    let Sec = d.getSeconds() / 60;
    let Min = d.getMinutes() / 60;
    let Hour = d.getHours() / 12;
    RotateClock(SecNiddle, Sec);
    RotateClock(MinNiddle, Min);
    RotateClock(HourNiddle, Hour);
}
function RotateClock(Element, Rotation) {
    Element.style.setProperty('--rotate', Rotation * 360);
}

setInterval(Clock, 1000)