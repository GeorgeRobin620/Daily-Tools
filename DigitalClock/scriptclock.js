const clock = document.getElementById("clock");
console.log(clock);
setInterval(function(){
    const currDate = new Date();
    const t = currDate.toLocaleTimeString();
    clock.innerHTML = t;
    console.log(currDate);
},1000)