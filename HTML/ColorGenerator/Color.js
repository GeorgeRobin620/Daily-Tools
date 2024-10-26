const start = document.querySelector("#start");
const stop = document.getElementById("stop");
const main = document.querySelector("main");
let startInt;

start,addEventListener("click", function () {
    start.disabled = "disabled";
    console.log("start is clicked", startInt);
    startInt = setInterval(function () {
        let colors =[];
        for (let i = 0; i<3; i++){
            colors.push(Math.floor(Math.random() * 256));
        }
    
        let bgColor = `rgb(${colors.join(",")})`;
        main.style.backgroundColor = bgColor;
    }, 3000);
});

stop.addEventListener("click", function(){
    console.log("stop click", startInt);
    clearInterval(startInt);
    console.log("interval cleared", startInt);
    start.disabled = "";
},false);


// const start = document.querySelector("#start");
// const stop = document.querySelector("#stop");
// const main = document.querySelector("main");
// const colorDiv = document.querySelector(".color");

// let timer;
// start.addEventListener(
//   "click",
//   function () {
//     start.disabled = "disabled";
//     //or use a condition if(!timer){}

//     timer = setInterval(function () {
//       //generate random color
//       let color = [];
//       for (let i = 0; i < 3; ++i) {
//         color.push(Math.floor(Math.random() * 256));
//       }
//       const colorText = `rgb(${color.join(",")})`;

//       colorDiv.innerHTML = `<span>The background color is ${colorText}</span>`;
//       main.style.backgroundColor = colorText;
//     }, 1500);
//   },
//   false
// );

// stop.addEventListener(
//   "click",
//   function () {
//     clearInterval(timer);
//     //timer = null;
//     start.disabled = "";
//   },
//   false
// );