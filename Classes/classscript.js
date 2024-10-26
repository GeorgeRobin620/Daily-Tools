// class counter{
//     constructor(name, initialValue){
//         this.name = name;
//         this.initialValue = initialValue;
//         this.incrementBtn = document.querySelector(".increment");
//         this.decrementBtn = document.querySelector(".decrement");
//         this.resetBtn = document.querySelector(".reset");
//         this.incrementBtn.addEventListener("click", this.increment);
//         this.decrementBtn.addEventListener("click", this.decrement);
//         this.resetBtn.addEventListener("click", this.reset);
//     }
//     increment(){
//         console.log("increment clicked", this.name);
//     }
//     decrement(){
//         console.log("decrement clicked");
//     }
//     reset(){
//         onsole.log("reset clicked");
//     }
// }
// let count1 = document.getElementByClass("first-counter");
// let count2 = document.getElementByClass("second-counter");
// let counter1 = new counter("counter1", 0);
// let counter2 = new counter("counter2", 10);
class Counter {
    constructor(name, initialValue) {
      this.name = name;
      this.initialValue = initialValue;
      this.value = this.name.querySelector(".value");
      this.value.textContent = this.initialValue;
      this.incrementBtn = this.name.querySelector(".increment");
      this.decrementBtn = this.name.querySelector(".decrement");
      this.resetBtn = this.name.querySelector(".reset");
  
      this.inc = this.increment.bind(this);
      this.dec = this.decrement.bind(this);
      this.res = this.reset.bind(this);
      this.incrementBtn.addEventListener("click", this.inc);
      this.decrementBtn.addEventListener("click", this.dec);
      this.resetBtn.addEventListener("click", this.res);
    }
    increment() {
      this.initialValue++;
      this.value.textContent = this.initialValue;
    }
    decrement() {
      this.initialValue--;
      this.value.textContent = this.initialValue;
    }
    reset() {
      this.initialValue = 0;
      this.value.textContent = this.initialValue;
    }
  }
let counter1 = new Counter(document.querySelector(".first-counter"), 100);
let counter2 = new Counter(document.querySelector(".second-counter"), 5);