// const arr = [5];
// arr.push("dog", 1, 2);
// console.log(arr);

// let x ={
//     name: "George",
//     age: 20,
//     name: "Jack",
//     age: 40,
// };

// let y = arr.shift().toString();
// arr.unshift("Hello");
// console.log(arr);

// let z = arr.pop();
// let a = y.concat(z);

// arr.splice(1,0,a);

// let b = arr.slice(1,2);

// console.log(b);

// console.log(arr);

let arr2 = [1,3,6,7,12,60,50];

const sqr = (a) =>{
    return a*a;
}

arr2.forEach((element) =>{
    console.log(sqr(element));
})
