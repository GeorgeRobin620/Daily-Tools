let y = 4;
let x = 5;
console.log(x+y);

let number = window.prompt('Enter a number: ');
console.log(number);

let pen = {
    price: 3.99,
    description: "A ink pen with smooth writing",
    rating: 4.5
};

console.log(pen);

let grade = window.prompt('Enter a number: ');

if(grade < 100 && grade > 90){
    let answer = 'A';
}else if(grade < 90 && grade > 80){
    let answer = 'B';
}else if(grade < 80 && grade > 70){
    let answer = 'C';
}else if(grade < 70 && grade > 60){
    let answer = 'D';
}else{
    let answer = 'F';
}

console.log(answer);

let guess = 10;
while(true){
    let ranNumber = window.prompt('Guess a number between 0 and 100: ');
    if(ranNumber == guess){
        console.log('You guessed right!');
        break;
    }else{
        console.log('Try Again');
    }
}

let arr = [19, 20, 60, 46, 84, 100];
let arr2;
let total = 0;
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
    arr2.push(arr[i]*0.10);
    total = total + arr[i];
}
for(let i = 0; i < arr2.length; i++){
    console.log(arr2[i]);
}

console.log("average = " + total/arr.length);


