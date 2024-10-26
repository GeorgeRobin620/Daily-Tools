const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guesses = document.querySelector(".guesses");

const message = document.querySelector(".message");
const remainingCount = document.querySelector(".remainingCount");
const newBtn = document.createElement("div");
const resultParas = document.querySelector(".resultParas");

let numbersAlreadyGuessed = [];
let numOfGuesses = 1;
let playGame = true;
let randomNumber = Math.floor(Math.random()*20) + 1;

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        let userVal = parseInt(userInput.value);
        // console.log(`userVal ->>${userVal}--`); 
        validate(userVal);
    });
}else{
    //playGame is false - don't play further
}

function validate(guessedVal){
    userInput.innerHTML = "";
    if(guessedVal < 1 || guessedVal > 20 || guessedVal === "" || isNaN(guessedVal)){
        displayMessage("Enter a value within the range 1-20");
    }else{
        //user input is in proper format...
        numbersAlreadyGuessed.push(guessedVal);
        
        displayGuesses();
        if(numOfGuesses > 10){
            displayMessage(`You have used all your chances.The number was ${randomNumber}`);
            endTheGame();
        }else{
            checkTheGuess(guessedVal);
        };
        // if(randomNumber == guessedVal){
        //     playGame = false;
        // }else{
        //     numOfGuesses++;
        //     numbersAlreadyGuessed.push(guessedVal);
        // }
    };
};
function displayMessage(msg) {
    message.innerHTML = msg;
};

function displayGuesses(){
    guesses.innerHTML = numbersAlreadyGuessed;
    remainingCount.innerHTML = `${10 - numOfGuesses}`;
    numOfGuesses++;
};

function checkTheGuess(guessedVal){
    if(guessedVal == randomNumber){
        displayMessage("you have guessed the right number!!");
        endTheGame();
    } else if(guessedVal < randomNumber) {
        displayMessage("your guess is lower than the actual value");
    }else{
        displayMessage("Your guess is higher than the actual value");
    }
};

function endTheGame(){
    playGame = false;
    userInput.value = "";
    userInput.setAttribute("disabled", "");

    newBtn.classList.add("button");
    newBtn.innerHTML = '<span id = "newGame"> Start New Game</span>';
    resultParas.appendChild(newBtn);
    newGame();
};

function newGame(){
    const newGame = document.getElementById("newGame");
    newGame.addEventListener("click", function(){
        userInput.removeAttribute("disabled");
        playGame = true;
        numbersAlreadyGuessed = [];
        numOfGuesses = 1;
        randomNumber = Math.floor(Math.random()*20) + 1;
        remainingCount.innerHTML = 10;
        guesses.innerHTML = "";
        resultParas.removeChild(newBtn);
        message.innerHTML = "";
    })
};