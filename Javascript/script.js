 let buttons = document.querySelectorAll(".button");
// console.log(buttons);
 let body = document.querySelector("body");
// buttons.forEach(button=>{
//     button.addEventListener("click",(event) => {
//         let userColor = event.target.id;
//         switch(userColor){
//             case "aquamarine":
//             body.style.backgroundColor = userColor;
//             // console.log(userColor);
//             break;
//         }
        
//     })
//     ,false;
// });

buttons.forEach((button) => {
    button.addEventListener(
      "click",
      function (event) {
        const chosenColor = event.target.id;
        console.log(chosenColor);
        switch (chosenColor) {
          case "grey":
            body.style.backgroundColor = chosenColor;
            break;
          case "maroon":
            body.style.backgroundColor = chosenColor;
            break;
          case "yellow":
            body.style.backgroundColor = chosenColor;
            break;
          case "blue":
  case "blue":
            body.style.backgroundColor = chosenColor;
            break;
        }
      },
      false
    );
  });

let sub = document.getElementById("sub");
sub.addEventListener("click", function(event){
  event.preventDefault();
  console.log("Button Clicked");
  let parent = document.querySelector(".parent");
  let newBox = document.createElement("span");
  let randomNum = Math.random() * 10;
  newBox.setAttribute("id", randomNum);
  newBox.classList.add("button");
  parent.appendChild(newBox);
})

// let sub = document.getElementById("sub");
// sub.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Button clicked");
//   let parent = document.querySelector("#parent");
//   let newBox = document.createElement("span");
//   let randomNum = Math.random() * 10;
//   newBox.setAttribute("id", randomNum);
//   newBox.classList.add("button");
//   parent.appendChild(newBox);
// });