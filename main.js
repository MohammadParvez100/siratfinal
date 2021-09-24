const exam= "18 october 2021";
const daysDiv =document.getElementById("days");
const hoursDiv =document.getElementById("hours");
const minuteDiv =document.getElementById("minute");
const secondsDiv =document.getElementById("seconds");


function countdown(){
    const examDay =new Date(exam);
    const currentday =new Date();
    const totalTime =(examDay-currentday)/1000;
    const days =Math.floor(totalTime/3600/24);
    const hours=Math.floor((totalTime/3600) %24);
    const minute =Math.floor(totalTime/60)  %60;
    const seconds =Math.floor(totalTime) %60;

    daysDiv.innerHTML=days;
    hoursDiv.innerHTML=hours;
    minuteDiv.innerHTML=minute;
    secondsDiv.innerHTML=seconds;
    
    console.log(days,hours,minute,seconds);


}
countdown();
setInterval(countdown,1000);