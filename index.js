function setTime(){
    let now = new Date();
    
    let seconds = now.getSeconds();
    let secondsDegree = (seconds/60)*360 +90;
    
    let mins = now.getMinutes();
    let minsDegree = (mins/60)*360 + 90;
    
    let hour = now.getHours();
    let hourDegree =  (hour/12)*360 + 90;
    
    console.log(seconds);
    document.querySelector(".second-hand").style.transform = `rotate(${secondsDegree}deg)`;
    document.querySelector(".min-hand").style.transform = `rotate(${minsDegree}deg)`;
    document.querySelector(".hour-hand").style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setTime,1000);