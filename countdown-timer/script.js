const timer = document.querySelector("#timer");
const countDownTime = new Date("Aug 14, 2023 12:00:00").getTime();

const countdown  = setInterval(function() {
    const todayDate = new Date().getTime();
    const distance =  countDownTime - todayDate;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    timer.addEventListener("click",()=>{
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Happy New Year!....."
    })
    if(distance < 0){
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "Happy New Year!....."
    }
},1000); 
